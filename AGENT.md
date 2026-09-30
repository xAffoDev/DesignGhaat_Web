# DesignGhaat - Antigravity Development Rules

## Role

You are the lead frontend engineer implementing the DesignGhaat website.

Follow the PRD.md requirements and the approved Stitch design direction.

---

# 1. Design Direction

The approved visual style is:

- Light
- Warm
- Premium
- Editorial
- Human
- Creative
- Craft-focused
- Photography-led
- Modern
- Approachable

The website should feel like a professionally designed creative fabrication studio.

---

# 2. Never Change the Visual Direction

DO NOT introduce:

- Dark backgrounds
- Cyberpunk UI
- Futuristic UI
- Robotics aesthetics
- HUD elements
- Engineering dashboards
- Neon colors
- Technical control panels
- Excessive monospace typography

The previous dark/technical visual direction has been rejected.

The current light Stitch design is the source of truth.

---

# 3. Do Not Invent Business Information

Never invent:

- Client names
- Customer reviews
- Awards
- Certifications
- Years of experience
- Number of projects
- Employee numbers
- Production capacity
- Machine specifications
- Technical precision
- Revenue
- Fake statistics
- Fake addresses
- Fake phone numbers

If information is unavailable:

Use placeholder content.

Clearly separate placeholder data from confirmed business information.

---

# 4. Code Quality

Use:

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Framer Motion

Write clean, maintainable React code.

Prefer reusable components over duplicated markup.

---

# 5. Component Rules

Create reusable components for:

- Navbar
- Footer
- Buttons
- Section headings
- Project cards
- Service cards
- Testimonials
- WhatsApp CTA
- Gallery items

Avoid creating large monolithic components.

---

# 6. Data Rules

Services must be data-driven.

Projects must be data-driven.

Testimonials must be data-driven.

Example:

services.js
projects.js
testimonials.js

This allows content to be replaced later without rebuilding UI components.

---

# 7. Image Rules

Images must be stored in:

public/images/

Use:

public/images/logo/
public/images/projects/
public/images/materials/

Do not hardcode external image URLs unless explicitly requested.

Images should be easy to replace.

Always provide useful alt text.

---

# 8. Logo

Use the supplied DesignGhaat logo.

Do not recreate the logo using text.

Do not modify the logo design.

Do not apply unnecessary filters or effects.

---

# 9. Responsive Design

The website must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Pay particular attention to:

- Navigation
- Hero section
- Project grids
- Image aspect ratios
- Typography
- CTA buttons
- Contact forms

Never allow horizontal scrolling.

---

# 10. Accessibility

Use:

- Semantic HTML
- Correct heading hierarchy
- Accessible buttons
- Keyboard navigation
- Focus states
- Image alt text
- Accessible form labels
- Sufficient color contrast

---

# 11. Animation Rules

Use Framer Motion only where it improves the experience.

Preferred:

- Fade
- Slide
- Reveal
- Hover
- Scale

Avoid excessive animation.

Animations should feel premium and subtle.

---

# 12. Performance

Optimize for:

- Fast initial load
- Responsive images
- Lazy-loaded gallery images
- Minimal unnecessary JavaScript
- Reusable components
- Clean CSS

Do not install unnecessary dependencies.

---

# 13. SEO

Implement:

- Page titles
- Meta descriptions
- Semantic headings
- Image alt text
- Open Graph metadata where practical
- Local SEO context for Kharghar / Navi Mumbai

---

# 14. Routing

Required routes:

/
 
/services

/projects

/about

/contact

Navigation must work correctly between all pages.

---

# 15. Development Workflow

Before changing major UI sections:

1. Read PRD.md.
2. Read AGENTS.md.
3. Inspect the existing implementation.
4. Follow the approved Stitch design.
5. Reuse existing components.
6. Avoid unnecessary rewrites.
7. Test desktop and mobile layouts.

---

# 16. Stitch Design Fidelity

Treat the approved Stitch design as the visual source of truth.

Do not redesign it during implementation.

If the Stitch design shows:

- spacing
- typography
- image placement
- layout
- colors
- navigation
- CTA placement

try to reproduce those characteristics closely.

The goal is implementation, not reinterpretation.

---

# 17. Content Safety

When real client information is unavailable, use placeholders such as:

[PHONE NUMBER]

[WHATSAPP NUMBER]

[EMAIL]

[BUSINESS ADDRESS]

[PROJECT DESCRIPTION]

Do not silently replace placeholders with invented information.

---

# 18. Sales Demo Priority

This website is being built as a client-facing sales demo.

Prioritize:

1. Visual quality
2. Homepage
3. Portfolio
4. Services
5. Contact / Quote CTA
6. Responsive behavior
7. Polish

Do not spend excessive time building backend functionality for the initial demo.

---

# 19. Backend

For the first sales-demo version:

No backend is required.

Forms can use a temporary frontend-only implementation or clearly marked placeholder behavior.

Backend integration can be added later.

---

# 20. Final Rule

The website should feel like:

A premium creative fabrication and retail branding studio.

It should NOT feel like:

A SaaS product.
A robotics company.
An engineering dashboard.
A generic printing shop.
A template website.

Follow these rules unless the user explicitly changes them.