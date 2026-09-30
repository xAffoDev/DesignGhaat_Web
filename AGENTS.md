# AGENTS.md — Agent & Engineer Operational Guide

Welcome to the **DesignGhaat** web codebase. This document defines the engineering standards, visual constraints, architectural patterns, and content rules for any AI agent or human engineer working on this repository.

---

## 1. Project Mission & Identity

**DesignGhaat (डिजाइन घाट)** is a specialized design, signage, custom fabrication, and retail-branding studio based in **Kharghar, Navi Mumbai**.

We are building a **premium sales-demo website** to attract architects, interior designers, commercial retail brands, and business owners looking for high-quality physical branding, 3D architectural signage, facade installations, and custom fabrication.

---

## 2. Visual Direction & Design Rules

All UI implementations must strictly respect the approved creative direction:

### Approved Direction:
- **Light & Warm:** Linen, warm sandstone, terracotta, and Ghaat teal palette. Default background is `bg-ghaat-sand` (`#FBF8F4`), never pure white or stark grays.
- **Editorial & Human:** Typographic rhythm, generous whitespace, elegant serif headings (`Newsreader`) paired with clean grotesque sans (`Plus Jakarta Sans`).
- **Craft-Focused:** Emphasize physical materials—brass, polished acrylic, brushed aluminium, neon, warm hardwoods, and precision CNC/laser fabrication.
- **Photography-Led:** High-fidelity imagery of physical spaces, signage, and workshop craftsmanship.
- **Modern & Approachable:** Clear hierarchy, readable contrast, tactile buttons, and intuitive navigation.

### Strict Prohibitions (Zero Tolerance):
- ❌ **NO Dark Backgrounds:** No dark mode or black/slate backgrounds. The site is strictly light and warm.
- ❌ **NO Futuristic UI / Cyberpunk Styling:** No neon laser grids, sci-fi borders, or circuit-board visuals.
- ❌ **NO Engineering Dashboards or HUD Elements:** No fake telemetry, circular gauges, or sci-fi control panels.
- ❌ **NO Excessive Monospace Typography:** Do not use `font-mono` for headings or marketing copy.
- ❌ **NO Fabricated Information:**
  - DO NOT invent fake statistics (e.g. "99.8% precision rate", "5000+ happy clients").
  - DO NOT claim fake enterprise clients (e.g. Apple, Nike, Google).
  - DO NOT invent fake awards or industry trophies.
- **Data Integrity:** Where specific business metrics or client logos are unverified, use clear, honest placeholders labeled as demo/sample concepts.

---

## 3. Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3 with custom color tokens:
  - `ghaat-terracotta` (`#D4622B`)
  - `ghaat-amber` (`#E59539`)
  - `ghaat-teal` (`#2C96B8`)
  - `ghaat-sand` (`#FBF8F4`)
  - `ghaat-charcoal` (`#1E2022`)
  - `ghaat-stone` (`#6A655F`)
- **Routing:** React Router DOM (v6)
- **Icons:** `lucide-react`
- **Animations:** `framer-motion` (used subtly for smooth page transitions and gentle reveals)
- **Class Utilities:** `clsx` + `tailwind-merge` via `src/utils/cn.js`

---

## 4. Directory & Architectural Conventions

```
src/
├── components/
│   ├── common/         # Atomic UI primitives (Button, Badge, Card, Container, SectionHeading)
│   ├── layout/         # Shell components (Navbar, Footer, Layout, PageHeader)
│   ├── home/           # Sections specific to the Homepage
│   ├── services/       # Services components
│   ├── portfolio/      # Portfolio grid & project components
│   ├── materials/      # Material swatch & durability cards
│   └── contact/        # Contact form & Kharghar studio location
├── data/               # Data layer for services, materials, portfolio items, and studio info
├── hooks/              # Reusable custom React hooks
├── pages/              # Route view components
├── routes/             # AppRoutes definition
├── styles/             # Global CSS and Tailwind entry
└── utils/              # Utility helpers (cn.js)
```

### Component Guidelines
1. **Single Responsibility:** Keep components modular and reusable.
2. **Accessible by Default:** Always include `aria-label` on icon-only buttons, proper semantic HTML tags (`<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`).
3. **Motion Restraint:** Keep animations subtle (`ease-out`, 0.2s - 0.4s durations). Craftsmanship implies calm confidence, not hyperactive movement.
4. **Responsive First:** Every component must look impeccable on mobile (360px+), tablet, and desktop viewports.

---

## 5. Development Commands

- `npm run dev`: Launch local Vite development server
- `npm run build`: Production build with TypeScript/ESLint checks
- `npm run preview`: Preview production build locally

---

## 6. How to Extend the Project

When prompted to build additional pages or features:
1. Verify against the anti-patterns list in Section 2.
2. Place page components in `src/pages/` and register them in `src/routes/AppRoutes.jsx`.
3. Keep mock/placeholder data cleanly isolated in `src/data/`.
4. Ensure all images leverage the assets in `public/` or high-quality royalty-free architectural photography placeholders with descriptive alt text.
