// ─────────────────────────────────────────────────────────────────────────────
// components/ContactSection.jsx
// Two-column contact layout: social links (left) + message form (right).
// Form submission shows a "Message Transmitted" success state.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { OWNER } from "../data/index.js";
import SectionHeader from "./SectionHeader.jsx";

const CONTACT_LINKS = [
  { icon: "✉", label: OWNER.email,                              href: `mailto:${OWNER.email}` },
  { icon: "↗", label: "linkedin/syifanikhtiardi",               href: OWNER.linkedin },
  { icon: "↗", label: "github/SyifanIkhtiardi",                 href: OWNER.github },
];

const FORM_FIELDS = [
  { label: "Your Name", type: "text",  placeholder: "Full name" },
  { label: "Email",     type: "email", placeholder: "your@email.com" },
  { label: "Subject",   type: "text",  placeholder: "Job opportunity / Collaboration" },
];

function SuccessMessage() {
  return (
    <div className="contact__success">
      <div className="contact__success-icon">◈</div>
      <div className="contact__success-title">Message Transmitted</div>
      <p className="contact__success-msg">
        Thank you. I will get back to you as soon as possible.
      </p>
    </div>
  );
}

function ContactForm({ onSubmit }) {
  return (
    <div className="contact__form">
      {FORM_FIELDS.map(({ label, type, placeholder }) => (
        <div className="contact__field" key={label}>
          <label className="contact__label">{label}</label>
          <input className="contact__input" type={type} placeholder={placeholder} />
        </div>
      ))}

      <div className="contact__field">
        <label className="contact__label">Message</label>
        <textarea
          className="contact__textarea"
          placeholder="Tell me about your team or project needs..."
        />
      </div>

      <button
        className="btn-primary"
        style={{ alignSelf: "flex-start", border: "none", cursor: "pointer" }}
        onClick={onSubmit}
      >
        Send Message
      </button>
    </div>
  );
}

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <div className="section" id="contact">
      <SectionHeader num="05" title="Get In Touch" />

      <div className="contact">
        {/* Left column */}
        <div className="reveal">
          <h3 className="contact__heading">
            Let's <em>Work Together</em>
          </h3>
          <p className="contact__sub">
            Looking for a QA Specialist who is thorough, collaborative, and committed
            to quality? I'm open to full-time roles, contract engagements, and
            project-based consultations.
          </p>

          <div className="contact__links">
            {CONTACT_LINKS.map(({ icon, label, href }) => (
              <a
                key={label}
                className="contact__link"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__link-icon">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right column: form or success */}
        <div className="reveal">
          {sent ? <SuccessMessage /> : <ContactForm onSubmit={() => setSent(true)} />}
        </div>
      </div>
    </div>
  );
}
