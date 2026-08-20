/* Consistency check for the duplicated header/footer (D18).

   The header and footer are copy-pasted into all 5 pages by decision. This
   is the guard against them drifting apart. Run it after touching either.

   node .claude/check.js
*/

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const PAGES = ['index.html', 'services.html', 'work.html', 'about.html', 'contact.html'];

const hash = (s) => crypto.createHash('md5').update(s).digest('hex').slice(0, 10);

function block(html, open, close) {
  const i = html.indexOf(open);
  const j = html.indexOf(close);
  if (i < 0 || j < 0) return null;
  return (
    html
      .slice(i, j + close.length)
      /* aria-current legitimately differs per page — normalise it away */
      .replace(/ aria-current="page"/g, '')
      /* CRLF vs LF is not drift. Editors on different machines disagree
         about line endings and it changes nothing that renders. Comparing
         raw bytes reported the header as "drifted into 2 versions" when
         every visible character was identical. */
      .replace(/\r\n/g, '\n')
      /* Trailing spaces likewise */
      .replace(/[ \t]+$/gm, '')
  );
}

let failed = false;

for (const [label, open, close] of [
  ['HEADER', '<header class="header"', '</header>'],
  ['FOOTER', '<footer class="footer">', '</footer>'],
]) {
  const seen = new Map();

  for (const page of PAGES) {
    const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
    const b = block(html, open, close);
    if (!b) {
      console.error(`  ${page}: ${label} MISSING`);
      failed = true;
      continue;
    }
    const h = hash(b);
    if (!seen.has(h)) seen.set(h, []);
    seen.get(h).push(page);
  }

  if (seen.size === 1) {
    console.log(`✓ ${label} identical across ${PAGES.length} pages`);
  } else {
    failed = true;
    console.error(`✗ ${label} has DRIFTED into ${seen.size} versions:`);
    for (const [h, pages] of seen) console.error(`    ${h}  ${pages.join(', ')}`);
  }
}

/* --- Budgets (D50) -------------------------------------------------------
   Measured COMPRESSED, per page, because that is what the visitor actually
   downloads — Vercel and Netlify gzip everything by default. The old
   uncompressed number stopped describing reality once hero.css arrived
   (16.5 KB raw, 3.4 KB gzipped). See specs/site.md §13.

   Note this only measures bytes. A section can also be expensive in CPU —
   blur, shadow and perspective cost per frame, and show up in INP, not here.
   -------------------------------------------------------------------------- */

const zlib = require('zlib');

const BUDGET_CSS = 20 * 1024;
const BUDGET_JS = 8 * 1024;

const gzipped = (rel) =>
  zlib.gzipSync(fs.readFileSync(path.join(ROOT, rel)), { level: 9 }).length;

const kb = (n) => (n / 1024).toFixed(1) + ' KB';

console.log('\nBudgets per page (compressed):');
let overBudget = false;

for (const page of [...PAGES, '404.html']) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
  const grab = (re) => [...html.matchAll(re)].map((m) => m[1]);

  const css = grab(/href="\/?(css\/[a-z]+\.css)"/g).reduce((n, f) => n + gzipped(f), 0);
  const js = grab(/src="\/?(js\/[a-z]+\.js)"/g).reduce((n, f) => n + gzipped(f), 0);

  const bad = css > BUDGET_CSS || js > BUDGET_JS;
  if (bad) overBudget = true;

  console.log(
    `  ${bad ? '✗' : '✓'} ${page.padEnd(15)} css ${kb(css).padStart(8)}` +
      `   js ${kb(js).padStart(8)}`
  );
}

if (overBudget) {
  console.error(`\n✗ Over budget — limits are css ${kb(BUDGET_CSS)}, js ${kb(BUDGET_JS)}`);
  failed = true;
}

/* --- Dangling @keyframes -------------------------------------------------
   A rule can name an animation that does not exist. CSS does not complain —
   it silently drops the animation, and the element keeps whatever base state
   it had. When that base state is opacity 0, the content simply never
   appears, with nothing in the console to explain it.

   That happened here: deleting the "before" site took three keyframes with
   it, and the whole hero copy went invisible.
   -------------------------------------------------------------------------- */

const cssFiles = fs.readdirSync(path.join(ROOT, 'css')).filter((f) => f.endsWith('.css'));
const allCss = cssFiles
  .map((f) => fs.readFileSync(path.join(ROOT, 'css', f), 'utf8'))
  .join('\n');

const defined = new Set([...allCss.matchAll(/@keyframes\s+([\w-]+)/g)].map((m) => m[1]));
const referenced = new Set(
  [...allCss.matchAll(/animation(?:-name)?:\s*([^;}]+)/g)]
    .flatMap((m) => m[1].split(/[,\s]+/))
    .filter((tok) => /^[a-z][\w-]*$/i.test(tok))
    /* keywords and timing functions share the syntax slot — skip them */
    .filter(
      (tok) =>
        ![
          'none', 'infinite', 'both', 'forwards', 'backwards', 'alternate',
          'reverse', 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out',
          'normal', 'paused', 'running', 'step-start', 'step-end',
        ].includes(tok)
    )
);

const dangling = [...referenced].filter((name) => !defined.has(name));
if (dangling.length) {
  console.error(`\n✗ animation names with no @keyframes: ${dangling.join(', ')}`);
  console.error('  These silently do nothing — the element keeps its base state.');
  failed = true;
} else {
  console.log(`\n✓ every animation resolves to a @keyframes (${defined.size} defined)`);
}

/* Placeholders still waiting to be filled in before launch */
const pending = [];
for (const page of [...PAGES, '404.html', 'sitemap.xml', 'robots.txt']) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
  const found = html.match(/\[PLACEHOLDER[^\]]*\]/g);
  if (found) pending.push(`    ${page}: ${found.length}`);
}
if (pending.length) {
  console.log(`\n⚠ [PLACEHOLDER] markers still present:`);
  pending.forEach((l) => console.log(l));
}

process.exit(failed ? 1 : 0);
