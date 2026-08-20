const hero = document.querySelector('[data-hero]');
const demo = document.querySelector('[data-hero-demo]');
const browser = document.querySelector('[data-hero-browser]');
const premium = document.querySelector('.hero-demo__premium');

if (hero && demo && browser && premium) {
  const links = premium.querySelectorAll('.hero-demo__links span');
  if (links[1]) links[1].textContent = 'Studio';

  const title = premium.querySelector('.hero-demo__premium-title');
  if (title) title.innerHTML = 'Make your brand <em>impossible</em> to ignore.';

  const body = premium.querySelector('.hero-demo__premium-copy p');
  if (body) body.textContent = 'A premium digital presence shaped around your brand, your audience and your goals.';

  const oldCard = premium.querySelector('.hero-demo__card');
  if (oldCard) oldCard.remove();

  premium.insertAdjacentHTML('beforeend', `
    <div class="hero-demo__metric"><small>Your brand</small><strong>Premium</strong></div>
    <div class="hero-demo__chart-card">
      <div class="hero-demo__chart-label"><span>Your digital presence</span><span>Live</span></div>
      <div class="hero-demo__chart" aria-hidden="true">
        <svg viewBox="0 0 350 70" preserveAspectRatio="none" fill="none">
          <path d="M0 53 C35 62, 46 15, 80 29 S135 66, 160 36 S205 7, 235 32 S290 58, 350 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
    <div class="hero-demo__strip" aria-hidden="true">
      <div class="hero-demo__strip-card"><i></i></div>
      <div class="hero-demo__strip-card"><i></i></div>
      <div class="hero-demo__strip-card"><i></i></div>
    </div>
  `);

  requestAnimationFrame(() => {
    hero.classList.add('hero--play');
    demo.classList.add('hero-demo--play');
  });
}
