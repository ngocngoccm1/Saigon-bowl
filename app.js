import { restaurant, menu, allergenLegend, additiveLegend } from './menu-data.js';

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const menuContent = document.querySelector('#menu-content');
const categoryLinks = document.querySelector('#category-links');

function renderItem(item) {
  const options = item.options?.map(([name, price]) => `<div class="menu-option"><span>${escapeHtml(name)}</span><span>${escapeHtml(price)}</span></div>`).join('') ?? '';
  return `<article class="menu-item">
    <div class="menu-item-head"><h4>${item.number ? `<span class="menu-item-number">${escapeHtml(item.number)}</span>` : ''}${escapeHtml(item.name)}${item.allergens ? `<span class="menu-allergens" title="Allergene und Zusatzstoffe: ${escapeHtml(item.allergens)}">${escapeHtml(item.allergens)}</span>` : ''}</h4>${item.price ? `<span class="menu-price">${escapeHtml(item.price)}</span>` : ''}</div>
    ${item.description ? `<p class="menu-description">${escapeHtml(item.description)}</p>` : ''}
    ${options ? `<div class="menu-options" aria-label="Varianten und Preise">${options}</div>` : ''}
  </article>`;
}

function renderCategory(category, index) {
  return `<section class="menu-category" id="${category.id}" aria-labelledby="${category.id}-title">
    <div class="menu-category-title"><h3 id="${category.id}-title">${escapeHtml(category.title)}</h3></div>
    <div class="menu-items">${category.items.map(renderItem).join('')}</div>
  </section>`;
}

if (menuContent && categoryLinks) {
  categoryLinks.innerHTML = menu.map(({id, title}) => `<a href="#${id}">${escapeHtml(title)}</a>`).join('');
  menuContent.innerHTML = menu.map((category, index) => {
    const section = renderCategory(category, index);
    if (index === 1) return section + `<div class="menu-interlude" aria-label="Illustrative Speiseaufnahmen"><img src="assets/nem-ran-illustration.webp" alt="Illustrative Aufnahme von Nem Ran" loading="lazy" width="1536" height="1024"><img src="assets/bun-bo-illustration.webp" alt="Illustrative Aufnahme von Bun Bo Nam Bo" loading="lazy" width="1024" height="1536"><span class="menu-interlude-note">Speiseaufnahmen zur Illustration</span></div>`;
    return section;
  }).join('');
  document.querySelector('#allergen-legend').textContent = allergenLegend;
  document.querySelector('#additive-legend').textContent = additiveLegend;
}

document.querySelector('#year').textContent = String(new Date().getFullYear());

const header = document.querySelector('.site-header');
const topSentinel = document.createElement('span');
topSentinel.setAttribute('aria-hidden', 'true');
topSentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none';
document.body.prepend(topSentinel);
new IntersectionObserver(([entry]) => header.classList.toggle('is-scrolled', !entry.isIntersecting), {threshold:0}).observe(topSentinel);

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function setMobileMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  mobileNav.hidden = !open;
  header.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
}
toggle.addEventListener('click', () => setMobileMenu(toggle.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMobileMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { setMobileMenu(false); toggle.focus(); } });
window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) setMobileMenu(false); });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach(element => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
  revealTargets.forEach(element => revealObserver.observe(element));
}

const navLinks = [...categoryLinks.querySelectorAll('a')];
const sections = menu.map(category => document.getElementById(category.id));
function setActiveCategory(id) {
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}
if ('IntersectionObserver' in window) {
  const categoryObserver = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top).forEach(entry => setActiveCategory(entry.target.id));
  }, {rootMargin:'-145px 0px -55% 0px', threshold:0});
  sections.forEach(section => categoryObserver.observe(section));
}
navLinks.forEach(link => link.addEventListener('click', () => setActiveCategory(link.hash.slice(1))));

// Keep the verified contact destination visible in the document model.
document.querySelectorAll('a[href^="tel:"]').forEach(link => link.setAttribute('aria-label', `${link.textContent.trim()} – ${restaurant.phoneDisplay}`));
