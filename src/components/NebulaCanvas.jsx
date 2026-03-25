// ─────────────────────────────────────────────────────────────────────────────
// components/NebulaCanvas.jsx
// Animated deep-space background: nebula clouds + twinkling star particles.
// Rendered on a fixed <canvas> behind all content.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

const CLOUD_DEFS = [
  { cx: 0.15, cy: 0.20, rx: 350, ry: 200, h: 260, s: 65, a: 0.026 },
  { cx: 0.75, cy: 0.60, rx: 300, ry: 180, h: 240, s: 60, a: 0.020 },
  { cx: 0.40, cy: 0.85, rx: 400, ry: 160, h: 280, s: 55, a: 0.016 },
  { cx: 0.90, cy: 0.10, rx: 250, ry: 180, h: 250, s: 62, a: 0.018 },
  { cx: 0.50, cy: 0.45, rx: 500, ry: 220, h: 270, s: 58, a: 0.013 },
];

const STAR_COUNT = 300;

function createStars() {
  return Array.from({ length: STAR_COUNT }, () => ({
    x:     Math.random() * 2000,
    y:     Math.random() * 1200,
    r:     Math.random() * 0.9 + 0.15,
    phase: Math.random() * Math.PI * 2,
    spd:   Math.random() * 0.004 + 0.002,
    dx:    (Math.random() - 0.5) * 0.03,
  }));
}

function createClouds() {
  return CLOUD_DEFS.map((d) => ({
    ...d,
    vx: (Math.random() - 0.5) * 0.05,
    vy: (Math.random() - 0.5) * 0.03,
  }));
}

function drawClouds(ctx, clouds, W, H) {
  clouds.forEach((n) => {
    // Drift
    n.cx += n.vx / W;
    n.cy += n.vy / H;
    if (n.cx < -0.3) n.cx = 1.3;
    if (n.cx > 1.3)  n.cx = -0.3;
    if (n.cy < -0.3) n.cy = 1.3;
    if (n.cy > 1.3)  n.cy = -0.3;

    const x = n.cx * W;
    const y = n.cy * H;
    const r = Math.max(n.rx, n.ry);

    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `hsla(${n.h},${n.s}%,30%,${n.a})`);
    grad.addColorStop(1, `hsla(${n.h},${n.s}%,15%,0)`);

    ctx.save();
    ctx.scale(1, n.ry / n.rx);
    ctx.beginPath();
    ctx.arc(x, y * (n.rx / n.ry), n.rx, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  });
}

function drawStars(ctx, stars, W, H) {
  stars.forEach((s) => {
    s.phase += s.spd;
    s.x += s.dx;
    if (s.x < 0) s.x = W;
    if (s.x > W) s.x = 0;
    const alpha = (Math.sin(s.phase) * 0.5 + 0.5) * 0.75 + 0.1;
    ctx.beginPath();
    ctx.arc(s.x % W, s.y % H, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(210,200,255,${alpha})`;
    ctx.fill();
  });
}

export default function NebulaCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let W, H, animId;
    const stars  = createStars();
    const clouds = createClouds();

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      drawClouds(ctx, clouds, W, H);
      drawStars(ctx, stars, W, H);
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="nebula" ref={canvasRef} />;
}
