/* Mobile menu + sticky header background. */

const header = document.querySelector('[data-header]');
const button = document.querySelector('[data-menu-btn]');
const nav = document.querySelector('[data-nav]');

/* --- Mobile menu --------------------------------------------------------- */

function setMenu(open) {
  if (!button || !nav) return;
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

if (button && nav) {
  button.addEventListener('click', () => {
    setMenu(button.getAttribute('aria-expanded') !== 'true');
  });

  /* Escape closes and returns focus to the button */
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      button.focus();
    }
  });

  /* Following a link closes the menu */
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  /* Reset when crossing into the desktop layout, so a menu left open on a
     rotated phone doesn't lock body scroll on desktop */
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });
}

/* --- Sticky header ------------------------------------------------------- */

if (header) {
  let ticking = false;

  const update = () => {
    header.classList.toggle('is-stuck', window.scrollY > 40);
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
}
