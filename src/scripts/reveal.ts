// Scroll-reveal + sticky-nav-aware smooth scroll.
// Skipped when the user prefers reduced motion, CSS already shows content statically.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

// Smooth-scroll for same-page anchors. Handles both `#help` (current page)
// and `/#help` (homepage anchor) so the same nav data works from any page.
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const hash = href.startsWith('/#') ? href.slice(1) : href;
    if (hash === '#') return;
    const target = document.querySelector(hash);
    if (!target) return; // not on this page, fall back to default navigation
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
});

const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const menu = document.querySelector<HTMLElement>('.mobile-menu');
if (toggle && menu) {
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}
