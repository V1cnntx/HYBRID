/* ============================================
   HYBRID CULTURE — CORE SHARED JS
   Animated counters, video autoplay, progress
   ============================================ */

'use strict';

/* ── PROGRESS BAR ─────────────────────────── */
function initProgressBar() {
  const bar = document.querySelector('.progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ── ANIMATED COUNTER ─────────────────────── */
function animateCounter(el, from, to, duration, suffix, prefix) {
  prefix = prefix || '';
  suffix = suffix || '';
  const start = performance.now();
  const range = to - from;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease out expo
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.round(from + range * ease);
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ── KPI COUNTERS w/ IntersectionObserver ─── */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseFloat(entry.target.dataset.counter);
        const duration = parseInt(entry.target.dataset.duration || '1800');
        const suffix = entry.target.dataset.suffix || '';
        const prefix = entry.target.dataset.prefix || '';
        animateCounter(entry.target, 0, target, duration, suffix, prefix);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── VIDEO AUTOPLAY w/ IntersectionObserver ── */
function initVideoAutoplay() {
  const videos = document.querySelectorAll('.phone__screen video, .autoplay-video');
  if (!videos.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.3 });

  videos.forEach(v => {
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    observer.observe(v);
  });
}

/* ── VIDEO HOVER IN CARDS ─────────────────── */
function initVideoHover() {
  const cards = document.querySelectorAll('.video-card');
  cards.forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    card.addEventListener('mouseenter', () => video.play().catch(() => {}));
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

/* ── NAV SCROLL STATE ─────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── TABS (scroll-driven or click) ─────────── */
function initTabs(containerSelector) {
  const containers = document.querySelectorAll(containerSelector || '.tabs-container');
  containers.forEach(container => {
    const btns = container.querySelectorAll('.tab-btn');
    const panels = container.querySelectorAll('.tab-panel');

    function activate(index) {
      btns.forEach((b, i) => b.classList.toggle('active', i === index));
      panels.forEach((p, i) => p.classList.toggle('active', i === index));
    }

    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => activate(i));
    });

    if (btns.length) activate(0);
  });
}

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ─────────  */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── INIT ALL ─────────────────────────────── */
function initCore() {
  initProgressBar();
  initNav();
  initCounters();
  initVideoAutoplay();
  initVideoHover();
  initSmoothScroll();
}

document.addEventListener('DOMContentLoaded', initCore);

export { animateCounter, initCounters, initVideoAutoplay, initTabs, initProgressBar };
