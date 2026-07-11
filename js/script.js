document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealEls = document.querySelectorAll(
  '.skill-card, .exp-card, .proj-card, .idea-card, .learn-card, .cert-card, .contact-card'
);
revealEls.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

const copyBtn = document.getElementById('copyEmailBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.dataset.email;
    const valueEl = document.getElementById('emailValue');
    const original = valueEl.textContent;
    try {
      await navigator.clipboard.writeText(email);
      valueEl.textContent = 'Copied!';
      setTimeout(() => { valueEl.textContent = original; }, 1600);
    } catch {}
  });
}
