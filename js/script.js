const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const root = document.documentElement;

navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

const ctaMenuToggle = document.querySelector('.cta-menu-toggle');
const ctaMenu = document.getElementById('cta-menu');

ctaMenuToggle?.addEventListener('click', () => {
  ctaMenu?.classList.toggle('open');
});

ctaMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    ctaMenu?.classList.remove('open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); nav?.classList.remove('open'); }
    }
  })
});

const skills = [
  'Python', 'PyTorch', 'Data Structures', 'Machine Learning', 'NumPy / Pandas / scikit-learn', 'Git / SVN', 'Docker', 
  'Java', 'Algorithms', 'AWS', 'JavaScript / TypeScript', 'HTML', 'CSS', 'SQL', 'R / SAS', 
  'React', 'Node.js', 'PostgreSQL',  'Linux',
];

const skillListEl = document.getElementById('skill-list');
if (skillListEl) {
  skillListEl.innerHTML = '';
  skills.forEach(s => {
    const span = document.createElement('span');
    span.className = 'skill';
    span.textContent = s;
    skillListEl.appendChild(span);
  });
}