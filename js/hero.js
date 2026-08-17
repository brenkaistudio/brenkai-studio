const hero = document.querySelector('[data-hero]');
const demo = document.querySelector('[data-hero-demo]');
const browser = document.querySelector('[data-hero-browser]');

if (hero && demo && browser) {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  hero.classList.add('hero--armed');
  demo.classList.add('hero-demo--armed');

  requestAnimationFrame(() => {
    hero.classList.add('hero--ready');
    demo.classList.add('hero-demo--ready');
  });

  if (!reduceMotion) {
    window.setTimeout(() => demo.classList.add('hero-demo--built'), 2250);

    const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (canHover) {
      window.setTimeout(() => {
        browser.addEventListener('pointermove', (event) => {
          const rect = browser.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          browser.style.animation = 'none';
          browser.style.transform = `translate3d(${x * 7}px, ${y * 5}px, 10px) rotateY(${-6 + x * 4}deg) rotateX(${3 - y * 4}deg)`;
        });

        browser.addEventListener('pointerleave', () => {
          browser.style.animation = '';
          browser.style.transform = '';
        });
      }, 5400);
    }
  }
}