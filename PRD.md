# Product Requirements Document (PRD) — DesignGhaat Web Platform

## 1. Executive Summary & Brand Overview
**DesignGhaat (डिजाइन घाट)** is a specialized design, signage, fabrication, and retail-branding studio based in **Kharghar, Navi Mumbai**. 

The purpose of this platform is to act as a **premium sales-demo and client acquisition website** that showcases DesignGhaat's design sensibilities, fabrication precision, and tactile material mastery to architects, interior designers, commercial retail brands, and business owners across Navi Mumbai and the Mumbai Metropolitan Region (MMR).

---

## 2. Visual Direction & Aesthetic Principles
The platform adheres strictly to the approved creative brief:

### Core Visual Pillars
* **Light & Warm:** Grounded in earthy sandstone, warm linen (`#FBF8F4`), terracotta (`#D4622B`), warm amber (`#E59539`), and calming Ghaat teal (`#2C96B8`).
* **Premium & Editorial:** High-end magazine layout sensibility with generous white space, bespoke serif typography, and balanced grid structures.
* **Human & Craft-Focused:** Spotlighting the hands of the makers, raw physical materials (brass, acrylic, timber, stone, metals, LEDs), and precision workshop processes.
* **Photography-Led:** Authentic visuals of physical spaces, textured finishes, and architectural signage installations.
* **Modern & Approachable:** Clear hierarchy, intuitive navigation, and welcoming calls-to-action for direct quote inquiries.

### Strict Negative Constraints (Anti-Patterns)
* ❌ **NO Dark Backgrounds:** No gloomy, pitch-black aesthetic.
* ❌ **NO Cyberpunk / Neon Futuristic UI:** No glowing gridlines, circuit board motifs, or sci-fi styling.
* ❌ **NO Engineering Dashboards or HUD Elements:** Avoid technical sensor readouts, gauge rings, or telemetry mockups.
* ❌ **NO Excessive Monospace Typography:** Code fonts are forbidden except where strictly functional.
* ❌ **NO Fabricated Claims:** Strictly avoid fake statistics (e.g. "99.9% client happiness"), fake corporate logos (e.g. Apple/Nike logos), or invented design trophies/awards.
* ❌ **Placeholder Data Integrity:** Clearly label unconfirmed metrics or client case studies as conceptual or sample work until supplied by DesignGhaat.

---

## 3. Target Audience
1. **Retail & Storefront Owners:** Looking for high-impact facade signage, 3D backlit lettering, window graphics, and interior point-of-sale branding.
2. **Architects & Interior Designers:** Seeking custom fabrication partners who can execute complex metalwork, directional wayfinding, custom lighting fixtures, and bespoke installations.
3. **Hospitality & F&B Brands:** Cafes, restaurants, and boutique hotels requiring warm, atmospheric signage and tactile brand touchpoints.
4. **Corporate & Commercial Developers:** Business parks and office hubs in Navi Mumbai looking for compliant, durable environmental graphics and reception identity features.

---

## 4. Information Architecture & Navigation

```
├── / (Home)
│   ├── Editorial Hero (Brand proposition & workshop roots in Kharghar)
│   ├── Core Pillars (Signage, Fabrication, Retail Branding, Environmental Graphics)
│   ├── Craft & Materiality Showcase (Brass, Acrylic, Neon, Wood, ACP)
│   ├── Selected Work Highlights (Curated project preview)
│   ├── Workshop Process (Concept → Fabrication → Installation)
│   └── Consultation Call-to-Action
│
├── /services (Services Overview)
│   ├── Architectural & 3D Signage (Backlit, Frontlit, Edge-lit, Brass, Acrylic)
│   ├── Retail Branding & Storefronts (Facades, Window Vinyls, POS Displays)
│   ├── Custom Metal & Acrylic Fabrication (CNC routing, Laser cutting, Structural frame)
│   ├── Environmental & Wayfinding Graphics (Offices, Campuses, Wayfinding systems)
│   └── /services/:slug (Detailed deep dive into specific service)
│
├── /work (Portfolio / Case Studies)
│   ├── Category Filtering (All, Retail, Hospitality, Corporate, Wayfinding)
│   └── /work/:id (Project detail: challenge, material specs, installation photography)
│
├── /materials (Materials & Finishes Guide)
│   ├── Tactile swatches & durability guidelines for coastal Navi Mumbai weather
│   └── Acrylic, Brass, Stainless Steel, Aluminium Composite (ACP), Neon, Hardwoods
│
├── /about (About DesignGhaat)
│   ├── Story of the studio in Kharghar, Navi Mumbai
│   ├── The meaning behind "DesignGhaat" (Arrival, Craft, Foundation)
│   └── In-house fabrication workshop standards & team craftsmanship
│
└── /contact (Get an Estimate / Visit Workshop)
    ├── Interactive Project Estimate & Inquiry Form
    ├── Kharghar Workshop location details & visiting hours
    └── WhatsApp direct chat connection
```

---

## 5. Technical Architecture & Folder Structure

```
designghaat-web/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   └── designghaat-logo.png
│   │   ├── projects/          # Photography & project visual assets
│   │   ├── materials/         # Material textures & finishes
│   │   └── workshop/          # Kharghar studio & workshop process photos
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/            # Reusable UI primitives
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Modal.jsx
│   │   ├── layout/            # Layout shell & global navigation
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageHeader.jsx
│   │   ├── home/              # Homepage specific modular sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicePillars.jsx
│   │   │   ├── CraftSpotlight.jsx
│   │   │   ├── WorkPreview.jsx
│   │   │   ├── ProcessTimeline.jsx
│   │   │   └── ConsultationCTA.jsx
│   │   ├── services/          # Services modular components
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ServiceFeatureList.jsx
│   │   ├── portfolio/         # Portfolio & work modular components
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectFilter.jsx
│   │   ├── materials/         # Material swatches & guides
│   │   │   └── MaterialCard.jsx
│   │   └── contact/           # Inquiries & location components
│   │       ├── InquiryForm.jsx
│   │       └── WorkshopLocationCard.jsx
│   ├── data/                  # Static data models & placeholder content
│   │   ├── companyInfo.js     # Kharghar studio coordinates, hours, contact info
│   │   ├── servicesData.js    # Signage, fabrication, retail services
│   │   ├── portfolioData.js   # Selected sample projects & installations
│   │   └── materialsData.js   # Finishes, metals, acrylics, illumination specs
│   ├── hooks/                 # Custom React hooks (e.g. useScrollToTop)
│   │   └── useScrollToTop.js
│   ├── pages/                 # Route views
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ServiceDetailPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   ├── PortfolioDetailPage.jsx
│   │   ├── MaterialsPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── routes/                # Central route registry
│   │   └── AppRoutes.jsx
│   ├── styles/                # CSS & Tailwind configurations
│   │   └── index.css
│   ├── utils/                 # Utility helpers
│   │   └── cn.js              # Class merging utility (clsx + twMerge)
│   ├── App.jsx
│   └── main.jsx
├── AGENTS.md                  # Development guidelines for agentic assistants
├── PRD.md                     # This document
├── index.html                 # HTML template with Google Fonts
├── package.json               # Node packages & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom theme: terracotta, sand, ghaat teal
└── vite.config.js             # Vite bundler configuration
```

---

## 6. Implementation Milestones

* **Phase 1: Foundation (Current)**
  - Project scaffold, dependencies installed, configuration files in place.
  - Reusable foundational components created (`Button`, `SectionHeading`, `Badge`, `Card`, `Container`, `Navbar`, `Footer`, `Layout`).
  - Route shell with placeholder pages connected via React Router.
  - Verification of responsive layout, typography, and warm aesthetic.

* **Phase 2: Core Page Content & Data Layer**
  - Populate structured realistic data for Kharghar workshop services, sample retail projects, and material specifications.
  - Implement full Homepage sections: Hero, Service Pillars, Material Craft, Process, and Consultation CTA.
  - Build Services listing and Service Detail deep-dives.

* **Phase 3: Portfolio & Materials Exploration**
  - Build interactive category filtering for projects.
  - Detail project showcases with material tags and installation specs.
  - Materials library with coastal durability tips and lighting swatches.

* **Phase 4: Contact & Estimation Flow**
  - Multi-step project inquiry form (signage type, dimensions, timeline, location).
  - WhatsApp direct connect button with pre-filled context.
  - Kharghar workshop visit directions.