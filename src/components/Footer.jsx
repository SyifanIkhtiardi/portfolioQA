// ─────────────────────────────────────────────────────────────────────────────
// components/Footer.jsx
// Simple two-item footer: name/role on the left, copyright on the right.
// ─────────────────────────────────────────────────────────────────────────────

import { OWNER } from "../data/index.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__name">
        {OWNER.name} · Software QA Specialist
      </div>
      <div className="footer__copy">© 2026 · All rights reserved</div>
    </footer>
  );
}
