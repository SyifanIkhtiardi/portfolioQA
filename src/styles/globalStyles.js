// ─────────────────────────────────────────────────────────────────────────────
// styles/globalStyles.js
// All CSS in one place — design tokens live in :root, animations separated.
// ─────────────────────────────────────────────────────────────────────────────

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&family=Space+Grotesk:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

  /* ── DESIGN TOKENS ─────────────────────────────────────────────────────── */
  :root {
    --void:   #00000a;
    --void2:  #020108;
    --panel:  rgba(255,255,255,0.025);
    --violet: #7c3aed;
    --vhi:    #a855f7;
    --vlo:    #4c1d95;
    --blue:   #3b82f6;
    --red:    #ef4444;
    --white:  #f8f8ff;
    --w2:     rgba(248,248,255,0.65);
    --w3:     rgba(248,248,255,0.30);
    --bv:     rgba(124,58,237,0.28);
    --glow:   0 0 24px rgba(124,58,237,0.45), 0 0 64px rgba(124,58,237,0.14);
    --gsm:    0 0 14px rgba(124,58,237,0.38);
    --gtxt:   0 0 22px rgba(168,85,247,0.55);
  }

  /* ── RESET ──────────────────────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--void);
    color: var(--white);
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    cursor: none;
  }

  /* Scanline overlay — pointer-events:none so it never blocks interaction */
  body::after {
    content: '';
    position: fixed; inset: 0; z-index: 9900;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 2px,
      rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px
    );
    pointer-events: none;
  }

  /* ── SCROLL PROGRESS BAR ────────────────────────────────────────────────── */
  #sbar {
    position: fixed; top: 0; left: 0; z-index: 9000;
    height: 1px; width: 0%;
    background: linear-gradient(90deg, var(--vlo), var(--vhi), #c084fc);
    box-shadow: 0 0 6px var(--vhi);
    transition: width .08s linear;
  }

  /* ── WARP OVERLAY (Hollow Purple / section transition) ──────────────────── */
  #warp {
    position: fixed; inset: 0; z-index: 99990;
    background: radial-gradient(
      ellipse at center,
      rgba(168,85,247,0.9) 0%,
      rgba(124,58,237,0.6) 40%,
      transparent 70%
    );
    pointer-events: none;
    opacity: 0; transform: scale(0.01); border-radius: 50%;
  }
  #warp.expand   { animation: warpExpand .5s cubic-bezier(0.4,0,0.2,1) forwards; }
  #warp.collapse { animation: warpCollapse .38s ease-in forwards; }

  /* ── NEBULA CANVAS ──────────────────────────────────────────────────────── */
  #nebula { position: fixed; inset: 0; z-index: 0; pointer-events: none; }

  /* ── CUSTOM CURSOR ──────────────────────────────────────────────────────── */
  #cur {
    position: fixed; z-index: 99999; pointer-events: none;
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--vhi);
    box-shadow: 0 0 14px var(--vhi), 0 0 28px rgba(168,85,247,0.4);
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
  }
  #cur-r1 {
    position: fixed; z-index: 99998; pointer-events: none;
    width: 30px; height: 30px; border-radius: 50%;
    border: 1px solid rgba(168,85,247,0.45);
    transform: translate(-50%, -50%);
    transition: left .05s, top .05s;
  }
  #cur-r2 {
    position: fixed; z-index: 99997; pointer-events: none;
    width: 52px; height: 52px; border-radius: 50%;
    border: 1px solid rgba(168,85,247,0.18);
    transform: translate(-50%, -50%);
    transition: left .11s, top .11s;
  }
  .inf-ripple {
    position: fixed; z-index: 99996; pointer-events: none;
    border-radius: 50%;
    border: 1px solid rgba(168,85,247,0.2);
    transform: translate(-50%, -50%);
    animation: infRipple .85s ease-out forwards;
  }
  .red-wave {
    position: fixed; z-index: 99995; pointer-events: none;
    border-radius: 50%;
    border: 2px solid rgba(239,68,68,0.85);
    box-shadow: 0 0 12px rgba(239,68,68,0.5);
    transform: translate(-50%, -50%);
    animation: redWave .48s ease-out forwards;
  }

  /* ── NAVIGATION ─────────────────────────────────────────────────────────── */
  .nav {
    position: fixed; bottom: 1.8rem; left: 50%; transform: translateX(-50%);
    z-index: 8000;
    display: flex; align-items: center;
    background: rgba(2,1,8,0.9);
    border: 1px solid var(--bv);
    backdrop-filter: blur(20px);
    border-radius: 2px;
    box-shadow: var(--gsm);
    white-space: nowrap;
    opacity: 0; pointer-events: none;
    transition: opacity .5s ease, transform .5s ease;
  }
  .nav.show { opacity: 1; pointer-events: all; }
  .nav__brand {
    font-family: 'Space Mono', monospace; font-size: .56rem;
    letter-spacing: .26em; color: var(--vhi);
    padding: .62rem 1.1rem;
    border-right: 1px solid rgba(255,255,255,.06);
    text-shadow: var(--gsm);
  }
  .nav__links { display: flex; list-style: none; }
  .nav__link {
    font-family: 'Inter', sans-serif; font-weight: 300;
    font-size: .56rem; letter-spacing: .18em;
    color: var(--w3); text-decoration: none; text-transform: uppercase;
    padding: .62rem .9rem; display: block;
    position: relative; transition: color .2s; cursor: none;
  }
  .nav__link::after {
    content: ''; position: absolute; bottom: 0; left: 30%; right: 30%; height: 1px;
    background: var(--vhi); box-shadow: var(--gsm);
    transform: scaleX(0); transition: transform .22s ease;
  }
  .nav__link:hover { color: var(--white); }
  .nav__link:hover::after { transform: scaleX(1); }
  .nav__pip {
    width: 5px; height: 5px; border-radius: 50%;
    background: var(--vhi); box-shadow: var(--gsm);
    margin: 0 1rem; animation: pip 2s ease-in-out infinite;
  }

  /* ── HERO ───────────────────────────────────────────────────────────────── */
  .hero {
    position: relative; min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 8rem 8vw 6rem; z-index: 1;
  }
  .hero__tag {
    font-family: 'Space Mono', monospace; font-size: .58rem;
    letter-spacing: .4em; color: var(--vhi); text-transform: uppercase;
    margin-bottom: 1.5rem;
    opacity: 0; animation: fadeUp .8s ease forwards .3s;
  }
  .hero__name {
    font-family: 'Space Grotesk', sans-serif; font-weight: 300;
    font-size: clamp(3rem, 8vw, 7rem);
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--white); line-height: 1;
    text-shadow: var(--gtxt);
    opacity: 0; animation: fadeUp .9s ease forwards .5s;
  }
  .hero__name em { color: var(--vhi); font-style: normal; }
  .hero__role {
    font-family: 'Inter', sans-serif; font-weight: 200;
    font-size: clamp(.72rem, 1.6vw, .96rem);
    letter-spacing: .42em; color: var(--w3); text-transform: uppercase;
    margin: 1.4rem 0 2.4rem;
    opacity: 0; animation: fadeUp .8s ease forwards .8s;
  }
  .hero__desc {
    font-size: .96rem; line-height: 1.85; color: var(--w2);
    max-width: 510px;
    opacity: 0; animation: fadeUp .8s ease forwards 1s;
  }
  .hero__btns {
    display: flex; gap: 1.2rem; margin-top: 2.4rem;
    opacity: 0; animation: fadeUp .8s ease forwards 1.2s;
  }
  .hero__strip {
    display: flex; gap: 3rem; margin-top: 4rem;
    border-top: 1px solid rgba(255,255,255,.05); padding-top: 1.8rem;
    opacity: 0; animation: fadeUp .8s ease forwards 1.4s;
  }
  .hero__strip-item { display: flex; flex-direction: column; gap: .25rem; align-items: center; }
  .hero__strip-label {
    font-family: 'Space Mono', monospace; font-size: .46rem;
    letter-spacing: .26em; color: var(--w3); text-transform: uppercase;
  }
  .hero__strip-value {
    font-family: 'Space Grotesk', sans-serif; font-size: .76rem;
    letter-spacing: .12em; color: var(--vhi); text-shadow: var(--gsm);
  }

  /* ── SHARED BUTTONS ─────────────────────────────────────────────────────── */
  .btn-primary {
    font-family: 'Space Mono', monospace; font-size: .6rem;
    letter-spacing: .18em; text-transform: uppercase;
    padding: .72rem 1.7rem;
    background: var(--violet); color: var(--white);
    border: 1px solid var(--vhi); cursor: none; text-decoration: none;
    box-shadow: var(--glow); transition: all .3s;
    position: relative; overflow: hidden;
  }
  .btn-primary::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent);
    transform: translateX(-100%); transition: transform .4s ease;
  }
  .btn-primary:hover { background: var(--vhi); box-shadow: 0 0 34px rgba(168,85,247,.65); transform: translateY(-2px); }
  .btn-primary:hover::after { transform: translateX(100%); }

  .btn-ghost {
    font-family: 'Inter', sans-serif; font-weight: 300;
    font-size: .6rem; letter-spacing: .18em; text-transform: uppercase;
    padding: .72rem 1.7rem;
    background: transparent; color: var(--w2);
    border: 1px solid rgba(255,255,255,.1);
    cursor: none; text-decoration: none; transition: all .3s;
  }
  .btn-ghost:hover { border-color: var(--bv); color: var(--white); box-shadow: var(--gsm); }

  /* ── SHARED TAG ─────────────────────────────────────────────────────────── */
  .tag {
    font-family: 'Space Mono', monospace; font-size: .48rem;
    letter-spacing: .1em; padding: .17rem .48rem;
    border: 1px solid rgba(124,58,237,.22);
    color: rgba(168,85,247,.65);
    text-transform: uppercase;
    background: rgba(124,58,237,.05);
  }

  /* ── SECTION WRAPPER ────────────────────────────────────────────────────── */
  .section { position: relative; z-index: 1; padding: 6.5rem 8vw; }
  .section--alt { background: rgba(124,58,237,.018); }
  .section__header { display: flex; align-items: center; gap: 1.8rem; margin-bottom: 3.8rem; }
  .section__num {
    font-family: 'Space Mono', monospace; font-size: .46rem;
    letter-spacing: .26em; color: var(--vhi); opacity: .42;
    writing-mode: vertical-rl; transform: rotate(180deg);
  }
  .section__title {
    font-family: 'Space Grotesk', sans-serif; font-weight: 400;
    font-size: clamp(1.3rem, 3vw, 2rem);
    letter-spacing: .16em; text-transform: uppercase;
    color: var(--white); text-shadow: var(--gtxt);
  }
  .section__rule { flex: 1; height: 1px; background: linear-gradient(90deg, var(--bv), transparent); }

  /* ── INTRO ──────────────────────────────────────────────────────────────── */
  .intro {
    position: fixed; inset: 0; z-index: 9999;
    background: var(--void);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: opacity .8s ease, visibility .8s ease;
  }
  .intro.intro--gone { opacity: 0; visibility: hidden; pointer-events: none; }
  .intro__rain { position: absolute; inset: 0; overflow: hidden; padding: 1.5rem; display: flex; flex-direction: column; gap: 4px; }
  .intro__rain-line {
    font-family: 'Space Mono', monospace; font-size: .56rem;
    letter-spacing: .04em; white-space: nowrap; overflow: hidden;
    animation: rainFlash 2s ease forwards;
  }
  .intro__center { position: relative; z-index: 2; text-align: center; }
  .intro__name {
    font-family: 'Space Grotesk', sans-serif; font-weight: 300;
    font-size: clamp(2.5rem, 7vw, 6rem);
    letter-spacing: .22em; text-transform: uppercase;
    color: var(--white); text-shadow: var(--gtxt);
    opacity: 0; animation: nameIn 1s ease forwards 1.6s;
  }
  .intro__name em { color: var(--vhi); font-style: normal; }
  .intro__sub {
    font-family: 'Inter', sans-serif; font-weight: 200;
    font-size: clamp(.6rem, 1.3vw, .82rem);
    letter-spacing: .44em; color: var(--w3); text-transform: uppercase;
    margin-top: .9rem;
    opacity: 0; animation: nameIn .8s ease forwards 2.3s;
  }
  .intro__btn {
    display: block; margin: 2.6rem auto 0;
    font-family: 'Space Mono', monospace; font-size: .62rem;
    letter-spacing: .24em; text-transform: uppercase;
    padding: .72rem 1.9rem;
    background: transparent; color: var(--vhi);
    border: 1px solid var(--bv); cursor: pointer;
    box-shadow: var(--gsm);
    opacity: 0; animation: nameIn .8s ease forwards 2.9s;
    transition: all .3s;
  }
  .intro__btn:hover { background: rgba(124,58,237,.15); box-shadow: var(--glow); }

  /* ── ABOUT ──────────────────────────────────────────────────────────────── */
  .about { display: grid; grid-template-columns: 1fr 1fr; gap: 4.5rem; align-items: start; }
  .about__text p { font-size: .96rem; line-height: 1.85; color: var(--w2); margin-bottom: 1.1rem; }
  .about__text strong { color: var(--vhi); font-weight: 400; }
  .about__card {
    border: 1px solid rgba(255,255,255,.07); padding: 1.8rem;
    background: var(--panel); backdrop-filter: blur(8px); position: relative;
  }
  .about__card::before {
    content: 'PROFILE'; position: absolute; top: -.5rem; left: 1.3rem;
    font-family: 'Space Mono', monospace; font-size: .46rem;
    letter-spacing: .26em; color: var(--vhi);
    background: var(--void); padding: 0 .4rem;
  }
  .about__row {
    display: flex; justify-content: space-between; align-items: baseline;
    padding: .52rem 0; border-bottom: 1px solid rgba(255,255,255,.05);
  }
  .about__row:last-child { border-bottom: none; }
  .about__key { font-family: 'Space Mono', monospace; font-size: .5rem; letter-spacing: .14em; color: var(--w3); text-transform: uppercase; }
  .about__val { font-size: .84rem; font-weight: 300; color: var(--w2); text-align: right; max-width: 60%; }

  /* ── EXPERIENCE / TIMELINE ──────────────────────────────────────────────── */
  .timeline { display: flex; flex-direction: column; }
  .timeline__item { display: grid; grid-template-columns: 190px 1px 1fr; gap: 0 2.5rem; }
  .timeline__meta { text-align: right; padding: 0 0 2.8rem; }
  .timeline__period {
    font-family: 'Space Mono', monospace; font-size: .54rem;
    letter-spacing: .1em; color: var(--vhi); opacity: .65; line-height: 1.6;
  }
  .timeline__company {
    font-family: 'Space Grotesk', sans-serif; font-size: .72rem;
    font-weight: 500; color: var(--w2); margin-top: .35rem; line-height: 1.4;
  }
  .timeline__location { font-family: 'Space Mono', monospace; font-size: .5rem; color: var(--w3); margin-top: .2rem; }
  .timeline__spine { position: relative; display: flex; justify-content: center; }
  .timeline__spine::before {
    content: ''; position: absolute; top: 8px; bottom: 0; width: 1px;
    background: linear-gradient(180deg, var(--bv), transparent);
  }
  .timeline__dot {
    width: 8px; height: 8px; background: var(--vhi);
    border-radius: 50%; margin-top: 6px; z-index: 1;
    box-shadow: var(--gsm); flex-shrink: 0;
    animation: pip 2.5s ease-in-out infinite;
  }
  .timeline__item:last-child .timeline__dot { background: var(--w3); box-shadow: none; animation: none; }
  .timeline__body { padding: 0 0 3rem; }
  .timeline__role {
    font-family: 'Space Grotesk', sans-serif; font-weight: 500;
    font-size: .86rem; letter-spacing: .1em; color: var(--white); margin-bottom: .9rem;
  }
  .timeline__bullets { display: flex; flex-direction: column; gap: .62rem; }
  .timeline__bullet { display: flex; gap: .8rem; align-items: flex-start; font-size: .86rem; line-height: 1.72; color: var(--w2); font-weight: 300; }
  .timeline__mark { color: var(--vhi); font-size: .46rem; margin-top: .44rem; flex-shrink: 0; }

  /* ── SKILLS ─────────────────────────────────────────────────────────────── */
  .skill-groups { display: flex; flex-direction: column; gap: 3rem; }
  .skill-group {
    border: 1px solid rgba(255,255,255,.06); padding: 2rem;
    background: var(--panel); backdrop-filter: blur(8px);
  }
  .skill-group__header {
    display: flex; align-items: center; gap: 1rem;
    margin-bottom: 1.8rem; padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255,255,255,.05);
  }
  .skill-group__dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .skill-group__label {
    font-family: 'Space Mono', monospace; font-size: .56rem;
    letter-spacing: .26em; text-transform: uppercase; font-weight: 700;
  }
  .skill-group__sublabel { font-family: 'Inter', sans-serif; font-size: .76rem; font-weight: 300; color: var(--w3); margin-left: .5rem; }
  .skill-group__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem; }
  .skill-card {
    padding: 1.4rem; border: 1px solid rgba(255,255,255,.05);
    background: rgba(0,0,0,.2);
    transition: border-color .3s, box-shadow .3s, transform .3s;
    position: relative; overflow: hidden;
  }
  .skill-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--vhi), transparent);
    transform: scaleX(0); transform-origin: center; transition: transform .5s ease;
  }
  .skill-card:hover { transform: translateY(-3px); }
  .skill-card:hover::before { transform: scaleX(1); }
  .skill-card__name {
    font-family: 'Space Grotesk', sans-serif; font-weight: 500;
    font-size: .76rem; letter-spacing: .1em;
    color: var(--white); text-transform: uppercase; margin-bottom: .4rem;
  }
  .skill-card__desc { font-size: .82rem; line-height: 1.65; color: var(--w3); font-weight: 300; }
  .skill-card__tags { display: flex; flex-wrap: wrap; gap: .32rem; margin-top: .85rem; }

  /* ── PROJECT CARD ───────────────────────────────────────────────────────── */
  .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.8rem; }
  .project-card {
    border: 1px solid rgba(255,255,255,.06); background: var(--panel);
    backdrop-filter: blur(8px); position: relative; overflow: hidden; cursor: none;
    transition: border-color .3s, box-shadow .3s, opacity .6s ease, transform .6s cubic-bezier(0.22,1,0.36,1);
    opacity: 0; transform: translateY(38px) scale(.97);
  }
  .project-card.attracted { opacity: 1; transform: translateY(0) scale(1); }
  .project-card.attracted:hover { border-color: rgba(124,58,237,.3); box-shadow: var(--gsm); }
  .project-card::after {
    content: ''; position: absolute; inset: 0; z-index: 0;
    background: linear-gradient(90deg, transparent, rgba(59,130,246,.05), rgba(124,58,237,.07), transparent);
    transform: translateX(-100%); pointer-events: none;
  }
  .project-card.attracted::after { animation: speedLine .55s ease forwards; }

  /* HUD scanner overlay */
  .project-card__hud {
    position: absolute; inset: 0; z-index: 4;
    background: rgba(2,1,8,.95);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .65rem;
    transition: opacity .42s ease, visibility .42s ease;
  }
  .project-card.attracted:hover .project-card__hud { opacity: 0; visibility: hidden; }
  .project-card__hud-scan {
    position: absolute; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59,130,246,.7), transparent);
    box-shadow: 0 0 8px rgba(59,130,246,.5);
    animation: scanLine 2.4s linear infinite;
  }
  .project-card__hud-corner {
    position: absolute; width: 13px; height: 13px;
  }
  .project-card__hud-corner--tl { top: 8px; left: 8px; border-top: 1px solid rgba(59,130,246,.5); border-left: 1px solid rgba(59,130,246,.5); }
  .project-card__hud-corner--tr { top: 8px; right: 8px; border-top: 1px solid rgba(59,130,246,.5); border-right: 1px solid rgba(59,130,246,.5); }
  .project-card__hud-corner--bl { bottom: 8px; left: 8px; border-bottom: 1px solid rgba(59,130,246,.5); border-left: 1px solid rgba(59,130,246,.5); }
  .project-card__hud-corner--br { bottom: 8px; right: 8px; border-bottom: 1px solid rgba(59,130,246,.5); border-right: 1px solid rgba(59,130,246,.5); }
  .project-card__hud-coord  { font-family: 'Space Mono', monospace; font-size: .46rem; letter-spacing: .18em; color: rgba(59,130,246,.7); text-transform: uppercase; }
  .project-card__hud-type   { font-family: 'Space Mono', monospace; font-size: .42rem; letter-spacing: .22em; color: var(--w3); text-transform: uppercase; }
  .project-card__hud-badge  { font-family: 'Space Mono', monospace; font-size: .5rem; letter-spacing: .2em; color: var(--vhi); text-transform: uppercase; }
  .project-card__hud-title  { font-family: 'Space Grotesk', sans-serif; font-weight: 400; font-size: .86rem; letter-spacing: .12em; color: var(--white); text-transform: uppercase; text-align: center; padding: 0 1.2rem; }
  .project-card__hud-hint   { font-family: 'Space Mono', monospace; font-size: .42rem; letter-spacing: .18em; color: var(--w3); animation: pip 2s ease-in-out infinite; }

  .project-card__banner {
    height: 148px; position: relative; overflow: hidden;
    background: var(--void2); display: flex; align-items: center; justify-content: center;
  }
  .project-card__banner-bg {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    font-family: 'Space Grotesk', sans-serif; font-size: 4rem; font-weight: 300;
    color: var(--violet); opacity: .05; letter-spacing: .2em; user-select: none;
  }
  .project-card__badge {
    position: absolute; top: .8rem; left: .8rem;
    font-family: 'Space Mono', monospace; font-size: .48rem; letter-spacing: .16em;
    color: var(--vhi); border: 1px solid var(--bv);
    padding: .14rem .42rem; background: rgba(2,1,8,.8); text-transform: uppercase;
  }
  .project-card__icon { font-size: .58rem; font-family: 'Space Mono', monospace; letter-spacing: .38em; color: var(--vhi); opacity: .55; text-transform: uppercase; }
  .project-card__body { padding: 1.3rem; }
  .project-card__title {
    font-family: 'Space Grotesk', sans-serif; font-weight: 400;
    font-size: .86rem; letter-spacing: .11em; color: var(--white); text-transform: uppercase; margin-bottom: .42rem;
  }
  .project-card__desc { font-size: .82rem; line-height: 1.7; color: var(--w2); font-weight: 300; margin-bottom: .95rem; }
  .project-card__footer { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: .65rem; }
  .project-card__tags { display: flex; flex-wrap: wrap; gap: .28rem; }
  .project-card__github {
    display: inline-flex; align-items: center; gap: .45rem;
    font-family: 'Space Mono', monospace; font-size: .54rem;
    letter-spacing: .13em; text-transform: uppercase; text-decoration: none;
    padding: .5rem 1.05rem;
    background: var(--violet); color: var(--white);
    border: 1px solid var(--vhi); box-shadow: var(--gsm);
    transition: all .25s; white-space: nowrap; flex-shrink: 0; cursor: none;
    position: relative; overflow: hidden;
  }
  .project-card__github::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent);
    transform: translateX(-100%); transition: transform .35s ease;
  }
  .project-card__github:hover { background: var(--vhi); box-shadow: var(--glow); transform: translateY(-2px); }
  .project-card__github:hover::before { transform: translateX(100%); }

  /* ── CONTACT ────────────────────────────────────────────────────────────── */
  .contact { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
  .contact__heading {
    font-family: 'Space Grotesk', sans-serif; font-weight: 300;
    font-size: 1.45rem; letter-spacing: .14em; text-transform: uppercase;
    color: var(--white); margin-bottom: .9rem; text-shadow: var(--gtxt);
  }
  .contact__heading em { color: var(--vhi); font-style: normal; }
  .contact__sub { font-size: .9rem; line-height: 1.82; color: var(--w2); font-weight: 300; margin-bottom: 1.9rem; }
  .contact__links { display: flex; flex-direction: column; gap: .62rem; }
  .contact__link {
    display: flex; align-items: center; gap: 1rem;
    font-family: 'Space Mono', monospace; font-size: .6rem;
    letter-spacing: .1em; color: var(--w3); text-decoration: none;
    padding: .72rem .95rem; border: 1px solid rgba(255,255,255,.06);
    background: var(--panel); transition: all .22s; cursor: none;
  }
  .contact__link:hover { border-color: var(--bv); color: var(--white); background: rgba(124,58,237,.07); padding-left: 1.3rem; box-shadow: var(--gsm); }
  .contact__link-icon { color: var(--vhi); font-size: .84rem; }
  .contact__form { display: flex; flex-direction: column; gap: .9rem; }
  .contact__field { display: flex; flex-direction: column; gap: .3rem; }
  .contact__label {
    font-family: 'Space Mono', monospace; font-size: .48rem;
    letter-spacing: .22em; color: rgba(168,85,247,.52); text-transform: uppercase;
  }
  .contact__input,
  .contact__textarea {
    background: var(--panel); border: 1px solid rgba(255,255,255,.07);
    color: var(--white); font-family: 'Inter', sans-serif;
    font-size: .86rem; font-weight: 300; padding: .7rem .92rem;
    outline: none; transition: border-color .22s, box-shadow .22s; width: 100%;
  }
  .contact__input:focus,
  .contact__textarea:focus { border-color: var(--bv); box-shadow: var(--gsm); }
  .contact__input::placeholder,
  .contact__textarea::placeholder { color: var(--w3); }
  .contact__textarea { resize: vertical; min-height: 115px; }
  .contact__success { padding: 3rem 0; text-align: center; }
  .contact__success-icon { font-size: 1.4rem; color: var(--vhi); text-shadow: var(--gtxt); margin-bottom: 1rem; }
  .contact__success-title { font-family: 'Space Mono', monospace; color: var(--vhi); font-size: .68rem; letter-spacing: .28em; text-transform: uppercase; }
  .contact__success-msg { color: var(--w3); margin-top: .8rem; font-size: .84rem; font-weight: 300; }

  /* ── FOOTER ─────────────────────────────────────────────────────────────── */
  .footer {
    position: relative; z-index: 1; padding: 1.8rem 8vw;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; justify-content: space-between; align-items: center;
  }
  .footer__name { font-family: 'Space Mono', monospace; font-size: .5rem; letter-spacing: .2em; color: var(--vhi); opacity: .32; text-transform: uppercase; }
  .footer__copy  { font-size: .5rem; letter-spacing: .1em; color: var(--w3); }

  /* ── SCROLL REVEAL ──────────────────────────────────────────────────────── */
  .reveal { opacity: 0; transform: translateY(20px); transition: opacity .65s ease, transform .65s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── KEYFRAMES ──────────────────────────────────────────────────────────── */
  @keyframes fadeUp    { from{opacity:0;transform:translateY(15px)} to{opacity:1;transform:translateY(0)} }
  @keyframes nameIn    { from{opacity:0;transform:scale(.95);filter:blur(6px)} to{opacity:1;transform:scale(1);filter:blur(0)} }
  @keyframes rainFlash { 0%{opacity:0;transform:translateX(-6px)} 12%{opacity:1} 75%{opacity:.7} 100%{opacity:0} }
  @keyframes pip       { 0%,100%{opacity:1} 50%{opacity:.2} }
  @keyframes infRipple { from{width:10px;height:10px;opacity:.55} to{width:110px;height:110px;opacity:0} }
  @keyframes redWave   { from{width:0;height:0;opacity:1} to{width:150px;height:150px;opacity:0} }
  @keyframes speedLine { from{transform:translateX(-100%)} to{transform:translateX(100%)} }
  @keyframes scanLine  { 0%{top:0%;opacity:0} 5%{opacity:1} 95%{opacity:1} 100%{top:100%;opacity:0} }
  @keyframes warpExpand   { 0%{opacity:0;transform:scale(0.01);filter:blur(0)} 50%{opacity:1;filter:blur(3px)} 100%{opacity:1;transform:scale(6);filter:blur(10px)} }
  @keyframes warpCollapse { 0%{opacity:1;transform:scale(6);filter:blur(10px)} 100%{opacity:0;transform:scale(0.01);filter:blur(0)} }

  /* ── RESPONSIVE ─────────────────────────────────────────────────────────── */
  @media (max-width: 768px) {
    .about,
    .contact { grid-template-columns: 1fr; gap: 2.5rem; }
    .timeline__item { grid-template-columns: 1px 1fr; }
    .timeline__meta { display: none; }
    .project-grid { grid-template-columns: 1fr; }
    .nav { bottom: 1rem; left: 1rem; right: 1rem; transform: none; }
    .nav__link { padding: .58rem .65rem; font-size: .52rem; }
    .hero__strip { flex-wrap: wrap; gap: 1.5rem; }
  }
`;
