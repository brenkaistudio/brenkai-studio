/* Scroll reveal. Fires once at 20% visibility and never reverses.

   Two failure modes this guards against, both of which leave content
   permanently invisible if you get them wrong:

   1. The script never runs (blocked, disabled, parse error). The hidden state
      lives behind [data-armed], which only this file sets — so no JS means
      everything is simply visible.

   2. The viewport jumps PAST an element without ever intersecting it: an
      anchor link, the browser restoring scroll position on reload, or a
      back-navigation. A naive observer only reacts to isIntersecting and
      would leave those elements at opacity 0 forever. So anything that ends
      up above the viewport is revealed immediately instead. */

const items = document.querySelectorAll('.reveal');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (items.length && !reduced && 'IntersectionObserver' in window) {
  const show = (el, animate) => {
    if (!animate) el.style.transition = 'none';
    el.classList.add('is-visible');
    if (!animate) {
      /* Re-enable transitions once the paint has happened, so a later
         hover or theme change still animates normally. */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = '';
        });
      });
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          show(el, true);
          observer.unobserve(el);
          return;
        }

        /* Already scrolled past: show it with no animation. */
        if (entry.boundingClientRect.bottom < 0) {
          show(el, false);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
  );

  items.forEach((el) => {
    /* Stagger within a group, capped at 6 so a long list doesn't crawl */
    const siblings = Array.from(el.parentElement.children).filter((n) =>
      n.classList.contains('reveal')
    );
    el.style.setProperty('--index', String(Math.min(siblings.indexOf(el), 5)));

    /* Anything already above the fold on load gets shown outright — it was
       never going to animate in, and arming it would only risk hiding it. */
    if (el.getBoundingClientRect().bottom < 0) {
      el.classList.add('is-visible');
      return;
    }

    el.setAttribute('data-armed', '');
    observer.observe(el);
  });
}
