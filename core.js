/* ============================================
   HYBRID CULTURE — BRAND THEME
   Overrides base.css variables
   Industrial Athletic Premium Dark
   ============================================ */

:root {
  /* Brand Colors */
  --c-bg:          #080808;
  --c-bg-2:        #0f0f0f;
  --c-bg-3:        #161616;
  --c-surface:     #181818;
  --c-border:      rgba(255,255,255,0.06);
  --c-border-2:    rgba(255,255,255,0.12);

  /* Hybrid Culture signature: electric lime + blood orange */
  --c-accent:      #c8ff00;
  --c-accent-2:    #ff4500;
  --c-accent-3:    #00d4ff;

  --c-text:        #efefef;
  --c-text-muted:  #7a7a7a;
  --c-text-dim:    #444444;

  /* Brand Fonts */
  --font-display:  'Bebas Neue', sans-serif;
  --font-body:     'Barlow', sans-serif;
  --font-condensed:'Barlow Condensed', sans-serif;
}

/* ── BRAND-SPECIFIC STYLES ────────────────── */

/* Grain texture overlay for premium feel */
body::before {
  content: '';
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}

/* Accent glow on progress bar */
.progress-bar {
  background: linear-gradient(90deg, var(--c-accent), var(--c-accent-2));
  box-shadow: 0 0 20px var(--c-accent), 0 0 40px rgba(200,255,0,0.3);
  height: 2px;
}

/* ── HERO ─────────────────────────────────── */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-bg);
  position: relative;
  overflow: hidden;
}

.hero__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(200,255,0,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200,255,0,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%);
}

.hero__glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200,255,0,0.08) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1000px;
  padding: 0 var(--space-lg);
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-condensed);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--c-accent);
  border: 1px solid rgba(200,255,0,0.2);
  background: rgba(200,255,0,0.05);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  margin-bottom: 2rem;
}

.hero__badge::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--c-accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--c-accent);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.7); }
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(5rem, 16vw, 14rem);
  line-height: 0.85;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
}

.hero__title .line-1 { display: block; }
.hero__title .line-2 {
  display: block;
  -webkit-text-stroke: 1.5px rgba(255,255,255,0.3);
  color: transparent;
}
.hero__title .accent { color: var(--c-accent); }

.hero__sub {
  font-family: var(--font-condensed);
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 300;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  margin-bottom: 3rem;
}

.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-condensed);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-text-dim);
  animation: bounce-hint 2.5s ease-in-out infinite;
}

.hero__scroll-hint svg {
  width: 20px;
  height: 20px;
  stroke: var(--c-text-dim);
}

@keyframes bounce-hint {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}

/* ── MANIFESTO SECTION ────────────────────── */
.section-manifesto {
  background: var(--c-bg);
  display: flex;
  align-items: center;
}

.manifesto__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.manifesto__quote {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1;
  position: relative;
}

.manifesto__quote::before {
  content: '"';
  position: absolute;
  top: -1rem;
  left: -1rem;
  font-size: 8rem;
  color: var(--c-accent);
  opacity: 0.15;
  line-height: 1;
  pointer-events: none;
}

.manifesto__highlight {
  color: var(--c-accent);
  display: block;
}

.manifesto__body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ── CATEGORIES SECTION ───────────────────── */
.section-categories {
  background: var(--c-bg-2);
}

.category-panels {
  display: grid;
  gap: 0;
}

.category-panel {
  grid-row: 1;
  grid-column: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.category-panel.active {
  opacity: 1;
  pointer-events: auto;
}

.category-panel__icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.category-panel__tagline {
  font-family: var(--font-condensed);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-accent);
  margin-bottom: 0.75rem;
}

.category-panel__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.9;
  margin-bottom: 1.5rem;
}

.category-panel__desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--c-text-muted);
  font-weight: 300;
  margin-bottom: 2rem;
}

.products-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.products-list__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-condensed);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--c-text-muted);
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--c-border);
}

.products-list__item::before {
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--c-accent);
  flex-shrink: 0;
}

/* Phone cluster for categories */
.phone-cluster {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: -20px;
  position: relative;
}

.phone-cluster .phone:nth-child(1) {
  transform: rotate(-5deg) translateX(20px);
  z-index: 1;
}
.phone-cluster .phone:nth-child(2) {
  transform: rotate(3deg) translateX(-10px);
  z-index: 2;
}

/* ── DIFFERENTIATORS ──────────────────────── */
.section-diff {
  background: var(--c-bg);
}

.diff-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5px;
  background: var(--c-border);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.diff-item {
  background: var(--c-bg);
  padding: var(--space-xl);
  transition: background var(--duration-fast);
  position: relative;
  overflow: hidden;
}

.diff-item::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px;
  height: 0%;
  background: var(--c-accent);
  transition: height var(--duration-slow) var(--ease-out);
}

.diff-item:hover::after { height: 100%; }
.diff-item:hover { background: var(--c-bg-3); }

.diff-item__num {
  font-family: var(--font-display);
  font-size: 4rem;
  line-height: 1;
  color: var(--c-border-2);
  margin-bottom: 1rem;
}

.diff-item__title {
  font-family: var(--font-condensed);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-text);
  margin-bottom: 0.75rem;
}

.diff-item__desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--c-text-muted);
  font-weight: 300;
}

/* ── KPI SECTION ──────────────────────────── */
.section-kpi {
  background: var(--c-bg-2);
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.kpi-item {
  padding: var(--space-xl) var(--space-lg);
  text-align: center;
  border-right: 1px solid var(--c-border);
  position: relative;
}

.kpi-item:last-child { border-right: none; }

.kpi-item__number {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 6vw, 6rem);
  line-height: 1;
  color: var(--c-accent);
  letter-spacing: -0.02em;
  display: block;
}

.kpi-item__label {
  font-family: var(--font-condensed);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  margin-top: 0.75rem;
  display: block;
}

/* ── CHART SECTION ────────────────────────── */
.section-growth {
  background: var(--c-bg);
}

.growth-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;
  align-items: center;
}

.chart-wrap {
  position: relative;
  height: 380px;
  background: var(--c-bg-3);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  overflow: hidden;
}

.chart-wrap::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 60%;
  background: linear-gradient(transparent, rgba(200,255,0,0.03));
  pointer-events: none;
}

/* ── CLOSING SECTION ──────────────────────── */
.section-close {
  background: var(--c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.close__inner {
  position: relative;
  z-index: 2;
}

.close__logo {
  font-family: var(--font-display);
  font-size: clamp(5rem, 15vw, 13rem);
  line-height: 0.85;
  color: transparent;
  -webkit-text-stroke: 1px rgba(200,255,0,0.2);
  margin-bottom: 2rem;
  letter-spacing: 0.02em;
}

.close__message {
  font-family: var(--font-condensed);
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 300;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  margin-bottom: 3rem;
}

.close__cta-group {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.close__bg-glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(200,255,0,0.05) 0%, transparent 70%);
  pointer-events: none;
}

/* ── MARQUEE ──────────────────────────────── */
.marquee-wrap {
  overflow: hidden;
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  background: var(--c-bg-2);
  padding: 1rem 0;
}

.marquee-track {
  display: flex;
  gap: 3rem;
  animation: marquee-scroll 20s linear infinite;
  width: max-content;
}

.marquee-track span {
  font-family: var(--font-display);
  font-size: 1.2rem;
  letter-spacing: 0.15em;
  white-space: nowrap;
  color: var(--c-text-dim);
}

.marquee-track span.accent { color: var(--c-accent); }

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ── SECTION HEADERS ──────────────────────── */
.section-header {
  margin-bottom: 4rem;
}

.section-header--center {
  text-align: center;
}

/* ── INSTAGRAM CARD ───────────────────────── */
.ig-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  padding: 1rem 1.5rem;
  transition: border-color var(--duration-fast), transform var(--duration-fast);
}

.ig-card:hover {
  border-color: rgba(200,255,0,0.3);
  transform: translateY(-2px);
}

.ig-card__icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.ig-card__text {
  font-family: var(--font-condensed);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--c-text);
}

.ig-card__handle {
  font-size: 0.75rem;
  color: var(--c-text-muted);
  margin-top: 0.1rem;
}

/* ── RESPONSIVE THEME ─────────────────────── */
@media (max-width: 768px) {
  .manifesto__layout,
  .growth-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .category-panel {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .diff-grid {
    grid-template-columns: 1fr;
  }

  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .kpi-item {
    border-right: none;
    border-bottom: 1px solid var(--c-border);
  }

  .phone-cluster {
    transform: scale(0.85);
  }
}
