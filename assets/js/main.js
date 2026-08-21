// ─── Mobile menu ──────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// ─── Scroll animations (fade-up) ──────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target); // solo una vez
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── Reading progress bar (posts) ─────────────
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed; top: 64px; left: 0; height: 3px;
  background: var(--accent); width: 0%; z-index: 99;
  transition: width .1s linear;
`;

if (document.querySelector('.post-content')) {
  document.body.appendChild(progressBar);
  window.addEventListener('scroll', () => {
    const doc   = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    const pct   = (window.scrollY / total) * 100;
    progressBar.style.width = pct + '%';
  });
}
