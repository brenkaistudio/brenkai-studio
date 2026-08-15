/* Sticky stacking cards.

   This is what Framer Motion's useScroll + useTransform do underneath: read
   scroll progress for an element, map it onto a value, write a transform.
   Doing it by hand costs about 30 lines and no dependency.

   Each card shrinks from 1 to its target scale over the stretch where it is
   stuck and the next card is sliding over it:

     targetScale = 1 - (totalCards - 1 - index) * 0.03

   The last card has targetScale 1 and is skipped entirely.

   Only `transform` is written, so the browser stays on the compositor and
   never reflows. Reads are batched before writes inside one rAF frame. */

const items = Array.from(document.querySelectorAll('.stack__item'));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

if (items.length > 1) {
  const total = items.length;

  const cards = items
    .map((item, index) => ({
      item,
      card: item.querySelector('.stack__card'),
      target: 1 - (total - 1 - index) * 0.03,
    }))
    .filter((c) => c.card && c.target < 1);

  let ticking = false;

  const update = () => {
    ticking = false;
    if (reduced.matches) return;

    /* Read everything first, then write — avoids layout thrashing. */
    const frames = cards.map(({ item, card, target }) => {
      const stickyTop = parseFloat(getComputedStyle(card).top) || 0;
      const rect = item.getBoundingClientRect();
      return { card, target, stickyTop, top: rect.top, travel: rect.height };
    });

    for (const { card, target, stickyTop, top, travel } of frames) {
      if (travel <= 0) {
        card.style.transform = '';
        continue;
      }
      /* travel is the FULL track height, not the stuck distance. The next
         track begins exactly where this one ends, so progress hits 1 at the
         moment the next card lands on the sticky line. Using the shorter
         stuck distance finishes the shrink several hundred pixels early and
         the card just sits there, which reads as a stutter. */
      const progress = Math.min(Math.max((stickyTop - top) / travel, 0), 1);
      const scale = 1 + (target - 1) * progress;
      card.style.transform = `scale(${scale.toFixed(4)})`;
    }
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* Motion preference can change mid-session */
  reduced.addEventListener('change', (event) => {
    if (event.matches) cards.forEach(({ card }) => (card.style.transform = ''));
    else onScroll();
  });

  update();
}
