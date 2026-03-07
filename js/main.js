// Energizing Solutions — main.js

// Header scroll effect
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navUl = document.querySelector('.main-nav ul');
toggle?.addEventListener('click', () => {
  navUl.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.main-nav ul a').forEach(link => {
  link.addEventListener('click', () => navUl.classList.remove('open'));
});

// Scroll reveal — simple intersection observer
const revealEls = document.querySelectorAll('.service-card, .testimonial-card, .stat, .credential');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = '0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});
