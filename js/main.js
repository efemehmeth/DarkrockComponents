// ─── NAV SCROLL EFFECT ───
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── MOBILE MENU ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
hamburger?.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ─── ACTIVE NAV LINK ───
const currentPage = location.pathname.replace(/\//g, '').replace('.html', '') || 'index';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').replace('.html', '').replace('/', '') || 'index';
  if (href === currentPage) a.classList.add('active');
});

// ─── REVEAL ON SCROLL ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// ─── CONTACT FORM ───
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#00c896';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    form.reset();
  }, 3000);
});

// ─── SMOOTH PARALLAX HERO ───
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `scale(1) translateY(${y * 0.3}px)`;
  }, { passive: true });
}

// ─── PRODUCT SLIDERS ───
function initSliders() {
  document.querySelectorAll('.product-slider').forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const dots = slider.querySelectorAll('.slider-dot');
    const images = track.querySelectorAll('img');
    let currentIndex = 0;
    
    if (!track || dots.length <= 1) return;

    function goToSlide(index) {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentIndex = index;
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        goToSlide(index);
      });
    });

    // Tap on image to go to next slide
    track.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      let nextIndex = (currentIndex + 1) % images.length;
      goToSlide(nextIndex);
    });
  });
}

document.addEventListener('DOMContentLoaded', initSliders);
