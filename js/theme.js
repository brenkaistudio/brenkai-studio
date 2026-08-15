/* Theme toggle. The initial theme is applied by the inline script in <head>
   of every page — that script must stay there to avoid a flash of the wrong
   theme before first paint. This file only wires up the button. */

const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');

function label(theme) {
  return theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
}

function apply(theme) {
  root.setAttribute('data-theme', theme);
  if (!toggle) return;
  toggle.setAttribute('aria-pressed', String(theme === 'light'));
  toggle.setAttribute('aria-label', label(theme));
}

if (toggle) {
  apply(root.getAttribute('data-theme') || 'dark');

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* private browsing — the choice just won't persist */
    }
  });
}

/* Follow the system only while the visitor has made no explicit choice. */
const query = window.matchMedia('(prefers-color-scheme: light)');
query.addEventListener('change', (event) => {
  let stored = null;
  try {
    stored = localStorage.getItem('theme');
  } catch (e) {
    /* ignore */
  }
  if (!stored) apply(event.matches ? 'light' : 'dark');
});
