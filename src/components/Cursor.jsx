// ─────────────────────────────────────────────────────────────────────────────
// components/Cursor.jsx
// Custom cursor with three layers and Infinity-style repulsion effect.
// Layers: dot (instant) → ring 1 (slight lag) → ring 2 (more lag)
// Nearby interactive elements are gently pushed away (Neutral Limitless).
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

const REPULSION_RADIUS = 130; // px
const REPULSION_FORCE  = 7;   // max pixel offset
const RIPPLE_LIFETIME  = 860; // ms

const REPULSION_SELECTORS = ".project-card, .btn-primary, .btn-ghost";

function spawnRipple(x, y) {
  const el = document.createElement("div");
  el.className = "inf-ripple";
  el.style.left = `${x}px`;
  el.style.top  = `${y}px`;
  document.body.appendChild(el);
  setTimeout(() => el.parentNode?.removeChild(el), RIPPLE_LIFETIME);
}

function applyRepulsion(x, y) {
  document.querySelectorAll(REPULSION_SELECTORS).forEach((el) => {
    const rect = el.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = x - cx;
    const dy   = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < REPULSION_RADIUS && dist > 0) {
      const force = (1 - dist / REPULSION_RADIUS) * REPULSION_FORCE;
      el.style.transition = "transform .12s ease";
      el.style.transform  = `translate(${(-dx / dist) * force}px, ${(-dy / dist) * force}px)`;
    } else {
      el.style.transform = "";
    }
  });
}

export default function Cursor() {
  const dotRef  = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);

  useEffect(() => {
    const move = ({ clientX: x, clientY: y }) => {
      // Move all cursor layers
      [dotRef, ring1Ref, ring2Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.style.left = `${x}px`;
          ref.current.style.top  = `${y}px`;
        }
      });
      spawnRipple(x, y);
      applyRepulsion(x, y);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cur"    ref={dotRef}   />
      <div id="cur-r1" ref={ring1Ref} />
      <div id="cur-r2" ref={ring2Ref} />
    </>
  );
}
