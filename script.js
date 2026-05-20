// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.leistung-card, .methodik-item, .about-grid, .kontakt-inner').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Nav active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--forest)';
    }
  });
});

// Methodik tabs
document.querySelectorAll('.methodik-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.methodik-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.methodik-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`.methodik-panel[data-panel="${target}"]`).classList.add('active');
  });
});
