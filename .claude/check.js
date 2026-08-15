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
  /* aria-current legitimately differs per page — normalise it away */
  return html.slice(i, j + close.length).replace(/ aria-current="page"/g, '');
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
