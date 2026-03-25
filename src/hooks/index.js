// ─────────────────────────────────────────────────────────────────────────────
// hooks/index.js
// All custom hooks. Each hook has a single, clear responsibility.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from "react";

/**
 * useScrollReveal
 * Adds the "visible" class to .reveal elements when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * useScrollProgress
 * Updates the width of #sbar (scroll progress bar) on scroll.
 */
export function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("sbar");
    if (!bar) return;
    const update = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
}

/**
 * useRedWave
 * Cursed Technique Reversal: Red.
 * Spawns a red shockwave at the click position on any <a> or <button>.
 */
export function useRedWave() {
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest("a, button")) return;
      const wave = document.createElement("div");
      wave.className = "red-wave";
      wave.style.left = `${e.clientX}px`;
      wave.style.top  = `${e.clientY}px`;
      document.body.appendChild(wave);
      setTimeout(() => wave.parentNode?.removeChild(wave), 500);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
}

/**
 * useWarpNav
 * Hollow Purple: intercepts nav anchor clicks and plays a warp radial animation
 * before jumping to the target section.
 * @param {boolean} enabled - only wire up after the intro has been dismissed.
 */
export function useWarpNav(enabled) {
  useEffect(() => {
    if (!enabled) return;

    const warp = document.getElementById("warp");
    const navLinks = document.querySelectorAll(".nav__link");
    const handlers = [];

    navLinks.forEach((link) => {
      const handler = (e) => {
        const href = link.getAttribute("href");
        if (!href?.startsWith("#")) return;
        e.preventDefault();
        if (!warp) return;

        // Expand phase
        warp.classList.remove("collapse");
        void warp.offsetWidth; // force reflow so animation restarts
        warp.classList.add("expand");

        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "instant" });
          // Collapse phase
          warp.classList.remove("expand");
          void warp.offsetWidth;
          warp.classList.add("collapse");
          setTimeout(() => warp.classList.remove("collapse"), 400);
        }, 300);
      };

      link.addEventListener("click", handler);
      handlers.push({ link, handler });
    });

    return () => handlers.forEach(({ link, handler }) => link.removeEventListener("click", handler));
  }, [enabled]);
}

/**
 * useBlueAttraction
 * Cursed Technique Lapse: Blue.
 * Adds the "attracted" class to .project-card elements when they enter the
 * viewport, triggering a speed-line slide-in animation.
 * @param {boolean} enabled - only observe after intro is dismissed.
 */
export function useBlueAttraction(enabled) {
  useEffect(() => {
    if (!enabled) return;

    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("attracted"), i * 75);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [enabled]);
}
