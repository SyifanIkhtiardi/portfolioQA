# Syifan Ikhtiardi — Portfolio

Personal portfolio website built with **React 18**, **Tailwind CSS 3**, and **GSAP 3**.

---

## Tech Stack

| Layer      | Library / Tool            |
|------------|---------------------------|
| Framework  | React 18 + Vite 5         |
| Styling    | Tailwind CSS 3            |
| Animation  | GSAP 3 + ScrollTrigger    |
| Fonts      | Instrument Serif, Geist, Geist Mono (Google Fonts) |

---

## Project Structure

```
src/
├── components/          # One file per UI component
│   ├── Cursor.jsx       # Custom mouse cursor
│   ├── Topbar.jsx       # Fixed top navigation + scroll progress
│   ├── SectionHeader.jsx# Reusable section label row
│   ├── Hero.jsx         # Landing / hero section
│   ├── About.jsx        # About + "What I do"
│   ├── Experience.jsx   # Work history timeline
│   ├── Skills.jsx       # Skill groups + pills
│   ├── Projects.jsx     # Personal projects
│   ├── Contact.jsx      # Contact links
│   └── Footer.jsx       # Footer
│
├── hooks/               # Custom React hooks
│   ├── useCursor.js     # Mouse position + hover state
│   ├── useScrollSpy.js  # Active section detection
│   ├── useScrollProgress.js  # Scroll % for progress bar
│   └── useGsapReveal.js # GSAP scroll-triggered animations
│
├── data/
│   └── portfolio.js     # All content as plain JS constants
│
├── styles/
│   └── globals.css      # Tailwind base + custom component/utility layers
│
├── App.jsx              # Root component
└── main.jsx             # React DOM entry point
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Customisation

All content lives in **`src/data/portfolio.js`** — edit that single file to update
nav links, bio text, experience, skills, projects, and contact details.

Animation presets are in **`src/hooks/useGsapReveal.js`**.  
Design tokens (colors, fonts, spacing) are in **`tailwind.config.js`** and
**`src/styles/globals.css`**.
