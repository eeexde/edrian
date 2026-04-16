# Portfolio Redesign — Design Spec
**Date:** 2026-04-16
**Project:** Edrian Pasaylo Portfolio (edrian-gamma.vercel.app recreation)

---

## Overview

Redesign of Edrian Pasaylo's freelance no-code developer portfolio using Vite + React + Tailwind CSS. Keeps all original content but applies a dark/glassmorphism visual direction with a 21st.dev animated particle hero component.

---

## Tech Stack

- **Framework:** Vite + React
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (with glass overrides)
- **Hero:** 21st.dev animated particles background hero component
- **Fonts:** Inter (body), Space Grotesk (headings)

---

## Visual System

- **Background:** `#050510` near-black with dark blue tint
- **Glass cards:** `bg-white/5 backdrop-blur-md border border-white/10`
- **Hover state:** `hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,200,255,0.1)]`
- **Accent color:** Cyan/teal `#00D4FF` — used for highlights, glows, links, badges
- **Section numbers:** Oversized `text-white/10` decorative labels (01–05)
- **Nav:** Fixed, frosted glass with `backdrop-blur` and subtle bottom border

---

## Sections

### Navigation
Fixed top nav with links: Skills, Projects, Experience, Rates, Contact. Frosted glass background.

### Hero
- 21st.dev animated particles background (animated dot grid)
- Large glowing white name: "Edrian Pasaylo"
- Tagline: "scalable digital solutions without traditional code"
- Two CTA buttons: **View Work** (filled cyan) / **Contact Me** (glass outline)
- Stats: "70% Manual work reduced", "15+ Hrs saved/client/week"

### 01 — Core Skills
- 3-column grid of 6 glass cards
- Each card: emoji icon, skill name, proficiency badge (cyan), brief description
- Skills: Bubble.io, Make.com, n8n, WordPress, REST APIs, AI Automation

### 02 — Projects
- Grid of 10 glass cards
- Each card: project name, tech tags (cyan badges), brief description
- Technologies vary: Bubble.io, OpenAI, APIs, etc.

### 03 — Experience
- Vertical timeline with glowing cyan connector line
- Two entries:
  1. Freelance (Aug 2025–present)
  2. First Encoding (Aug 2023–2025)
- Each entry: role, company, date range, responsibilities, technologies

### 04 — Tools & Platforms
- Pill/tag grid of 40+ tools
- Grouped by category with dim category labels
- Categories include: No-Code Platforms, Automation, AI, CMS, APIs, etc.

### 05 — Availability & Rates
- 3 glass pricing cards side-by-side
- Engagement models with pricing ($7–$2,000/month range)
- Timezone: PHT GMT+8
- Payment methods accepted

### Footer
- Minimal: copyright + contact links

---

## Component Architecture

```
src/
  components/
    Nav.jsx
    Hero.jsx          ← 21st.dev particles hero
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Tools.jsx
    Rates.jsx
    Footer.jsx
  App.jsx
  index.css
  main.jsx
```

---

## Out of Scope

- Backend / form submission logic
- CMS integration
- Animations beyond the hero and hover states
