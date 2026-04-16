# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Edrian Pasaylo's portfolio as a dark/glassmorphism Vite + React + Tailwind CSS site with a 21st.dev animated particles hero.

**Architecture:** Single-page React app with a fixed glass nav, a full-viewport particles hero, and 5 numbered content sections rendered as glass cards. Components are split one-per-section for isolation. The particles hero component is sourced from 21st.dev via the shadcn CLI.

**Tech Stack:** Vite, React 18, Tailwind CSS v3, shadcn/ui, @tsparticles/react (21st.dev particles hero), Space Grotesk font (Google Fonts), Inter font (Google Fonts)

---

## File Map

```
C:\Users\user\claude\test3\
  index.html                         ← font imports + root div
  vite.config.js                     ← base vite config
  tailwind.config.js                 ← dark theme + custom colors
  postcss.config.js                  ← tailwind + autoprefixer
  package.json                       ← dependencies
  src/
    main.jsx                         ← React root mount
    index.css                        ← Tailwind directives + global styles
    App.jsx                          ← layout: Nav + all sections
    data/
      content.js                     ← all portfolio content (skills, projects, etc.)
    components/
      Nav.jsx                        ← fixed glass navigation
      Hero.jsx                       ← 21st.dev particles hero
      Skills.jsx                     ← 01 Core Skills section
      Projects.jsx                   ← 02 Projects section
      Experience.jsx                 ← 03 Experience timeline
      Tools.jsx                      ← 04 Tools & Platforms tag cloud
      Rates.jsx                      ← 05 Availability & Rates
      Footer.jsx                     ← copyright + links
      ui/
        GlassCard.jsx                ← reusable glass card wrapper
        SectionHeader.jsx            ← numbered section title
        Badge.jsx                    ← cyan tech badge
```

---

## Task 1: Scaffold Vite + React project

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`

- [ ] **Step 1: Initialise project**

```bash
cd /c/Users/user/claude/test3
npm create vite@latest . -- --template react
```

Expected: project files created (package.json, vite.config.js, src/, etc.)

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npm install @tsparticles/react @tsparticles/slim tsparticles-engine
npm install clsx
npx tailwindcss init -p
```

Expected: node_modules populated, tailwind.config.js and postcss.config.js created.

- [ ] **Step 3: Configure tailwind.config.js**

Replace the file with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00D4FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 4: Configure src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #050510;
    color: #e2e8f0;
    font-family: 'Inter', sans-serif;
  }
}

@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .glass-hover {
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .glass-hover:hover {
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.08);
  }
  .glow-text {
    text-shadow: 0 0 40px rgba(0, 212, 255, 0.3);
  }
}
```

- [ ] **Step 5: Update index.html with fonts**

Replace the contents of `index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edrian Pasaylo — No-Code Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Update src/main.jsx**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 7: Verify dev server starts**

```bash
npm run dev
```

Expected: Vite dev server running at http://localhost:5173 with the default React page.

- [ ] **Step 8: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold vite + react + tailwind project"
```

---

## Task 2: Create content data file

**Files:**
- Create: `src/data/content.js`

- [ ] **Step 1: Create content.js**

```js
// src/data/content.js

export const skills = [
  {
    icon: '🫧',
    name: 'Bubble.io',
    level: 'Expert',
    description: 'Build full-stack web apps visually — from MVPs to production-grade SaaS platforms.',
  },
  {
    icon: '⚙️',
    name: 'Make.com',
    level: 'Expert',
    description: 'Design powerful automation workflows connecting hundreds of apps and APIs.',
  },
  {
    icon: '🔄',
    name: 'n8n',
    level: 'Advanced',
    description: 'Self-hosted automation pipelines with custom logic and complex branching flows.',
  },
  {
    icon: '🌐',
    name: 'WordPress',
    level: 'Advanced',
    description: 'Build and customise performant CMS-driven websites with Elementor and ACF.',
  },
  {
    icon: '🔌',
    name: 'REST APIs',
    level: 'Advanced',
    description: 'Integrate third-party APIs — authentication, data transformation, webhooks.',
  },
  {
    icon: '🤖',
    name: 'AI Automation',
    level: 'Advanced',
    description: 'Embed OpenAI, Claude, and other LLMs into workflows and no-code applications.',
  },
]

export const projects = [
  {
    name: 'AI Trading Platform',
    description: 'Automated trading signals platform with OpenAI analysis and real-time alerts.',
    tags: ['Bubble.io', 'OpenAI', 'APIs'],
  },
  {
    name: 'Real Estate Marketplace',
    description: 'Property listing platform with advanced search, filters, and agent portals.',
    tags: ['Bubble.io', 'Google Maps API'],
  },
  {
    name: 'Client Onboarding Automation',
    description: 'End-to-end onboarding flow reducing manual work by 70% for a B2B SaaS.',
    tags: ['Make.com', 'Airtable', 'Slack'],
  },
  {
    name: 'AI Content Generator',
    description: 'Bulk SEO content generation tool integrated into a WordPress workflow.',
    tags: ['n8n', 'OpenAI', 'WordPress'],
  },
  {
    name: 'E-commerce Order Manager',
    description: 'Shopify order sync with automated fulfilment notifications and CRM updates.',
    tags: ['Make.com', 'Shopify', 'HubSpot'],
  },
  {
    name: 'Community App',
    description: 'Members-only community platform with events, forums, and payments.',
    tags: ['Bubble.io', 'Stripe', 'Sendgrid'],
  },
  {
    name: 'Lead Capture Pipeline',
    description: 'Multi-source lead aggregation with scoring and CRM auto-assignment.',
    tags: ['Make.com', 'Airtable', 'Typeform'],
  },
  {
    name: 'Internal HR Dashboard',
    description: 'Leave management and employee directory for a 200-person organisation.',
    tags: ['Bubble.io', 'REST APIs'],
  },
  {
    name: 'Invoice Automation Bot',
    description: 'Reads PDF invoices, extracts data with AI, and logs to accounting software.',
    tags: ['n8n', 'OpenAI', 'Xero'],
  },
  {
    name: 'No-Code SaaS Starter',
    description: 'Reusable Bubble.io template with auth, billing, and multi-tenant architecture.',
    tags: ['Bubble.io', 'Stripe'],
  },
]

export const experience = [
  {
    role: 'Freelance No-Code Developer',
    company: 'Independent',
    period: 'Aug 2025 — Present',
    responsibilities: [
      'Deliver Bubble.io, Make.com, and n8n solutions for international clients.',
      'Reduce client manual work by an average of 70% through automation.',
      'Integrate AI capabilities (OpenAI, Claude) into no-code workflows.',
      'Save clients 15+ hours per week through intelligent automations.',
    ],
    tech: ['Bubble.io', 'Make.com', 'n8n', 'OpenAI', 'REST APIs'],
  },
  {
    role: 'No-Code Developer',
    company: 'First Encoding',
    period: 'Aug 2023 — Aug 2025',
    responsibilities: [
      'Built and maintained client-facing Bubble.io applications.',
      'Designed Make.com automation workflows for internal operations.',
      'Integrated REST APIs and third-party services into existing platforms.',
      'Collaborated with design and product teams on feature delivery.',
    ],
    tech: ['Bubble.io', 'Make.com', 'WordPress', 'APIs'],
  },
]

export const toolCategories = [
  {
    category: 'No-Code Platforms',
    tools: ['Bubble.io', 'Webflow', 'Glide', 'Adalo', 'Softr'],
  },
  {
    category: 'Automation',
    tools: ['Make.com', 'n8n', 'Zapier', 'Pipedream', 'Activepieces'],
  },
  {
    category: 'AI & LLMs',
    tools: ['OpenAI', 'Claude', 'Gemini', 'Perplexity', 'LangChain'],
  },
  {
    category: 'CMS & Web',
    tools: ['WordPress', 'Elementor', 'ACF', 'WooCommerce', 'Webflow CMS'],
  },
  {
    category: 'Databases',
    tools: ['Airtable', 'Notion', 'Supabase', 'Firebase', 'PostgreSQL'],
  },
  {
    category: 'APIs & Integrations',
    tools: ['REST APIs', 'GraphQL', 'Webhooks', 'Postman', 'RapidAPI'],
  },
  {
    category: 'Payments',
    tools: ['Stripe', 'PayPal', 'GCash', 'PayMongo'],
  },
  {
    category: 'Communication',
    tools: ['Slack', 'Sendgrid', 'Twilio', 'Intercom', 'WhatsApp API'],
  },
]

export const rates = [
  {
    name: 'Starter',
    price: '$7/hr',
    monthly: 'from $280/mo',
    description: 'Ideal for small tasks, bug fixes, or short automations.',
    features: ['Up to 40 hrs/month', 'Make.com or n8n flows', 'Email support', '3-day turnaround'],
  },
  {
    name: 'Growth',
    price: '$12/hr',
    monthly: 'from $960/mo',
    description: 'Best for ongoing product development or complex automations.',
    features: ['Up to 80 hrs/month', 'Bubble.io + Automation', 'Slack support', '1–2 day turnaround'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    monthly: 'up to $2,000/mo',
    description: 'Full-time engagement for large projects or teams.',
    features: ['Dedicated bandwidth', 'Full-stack no-code', 'Priority support', 'Same-day response'],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/content.js
git commit -m "feat: add portfolio content data"
```

---

## Task 3: Build shared UI primitives

**Files:**
- Create: `src/components/ui/GlassCard.jsx`
- Create: `src/components/ui/SectionHeader.jsx`
- Create: `src/components/ui/Badge.jsx`

- [ ] **Step 1: Create GlassCard.jsx**

```jsx
// src/components/ui/GlassCard.jsx
import clsx from 'clsx'

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={clsx(
        'glass rounded-2xl p-6',
        hover && 'glass-hover',
        className
      )}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Create SectionHeader.jsx**

```jsx
// src/components/ui/SectionHeader.jsx
export default function SectionHeader({ number, title }) {
  return (
    <div className="mb-12">
      <span className="font-heading text-7xl font-bold text-white/5 select-none leading-none">
        {number}
      </span>
      <h2 className="font-heading text-3xl font-bold text-white -mt-6">
        {title}
      </h2>
    </div>
  )
}
```

- [ ] **Step 3: Create Badge.jsx**

```jsx
// src/components/ui/Badge.jsx
export default function Badge({ children }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
      {children}
    </span>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add shared glass ui primitives"
```

---

## Task 4: Build Nav component

**Files:**
- Create: `src/components/Nav.jsx`

- [ ] **Step 1: Create Nav.jsx**

```jsx
// src/components/Nav.jsx
export default function Nav() {
  const links = ['Skills', 'Projects', 'Experience', 'Rates', 'Contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-heading font-bold text-white text-lg tracking-tight">
          Edrian<span className="text-cyan-400">.</span>
        </span>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white/60 hover:text-cyan-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-xl border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Nav.jsx
git commit -m "feat: add fixed glass nav"
```

---

## Task 5: Build Hero component with 21st.dev particles

**Files:**
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Install 21st.dev particles component via shadcn CLI**

```bash
npx shadcn@latest add "https://21st.dev/r/magicui/particles"
```

If the CLI asks for a components directory, accept the default (`src/components/ui`). If the command fails, run:

```bash
npm install @tsparticles/react@3 @tsparticles/slim
```

Then create `src/components/ui/particles.jsx` manually:

```jsx
// src/components/ui/particles.jsx
import { useEffect, useId, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export function ParticlesBackground({ className = '' }) {
  const [init, setInit] = useState(false)
  const id = useId()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  if (!init) return null

  return (
    <Particles
      id={id}
      className={`absolute inset-0 ${className}`}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: { value: '#00D4FF' },
          links: {
            color: '#00D4FF',
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
          },
          number: { value: 80, density: { enable: true } },
          opacity: { value: 0.15 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.4 } },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
```

- [ ] **Step 2: Create Hero.jsx**

```jsx
// src/components/Hero.jsx
import { ParticlesBackground } from './ui/particles.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ParticlesBackground />

      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-6">
          Freelance No-Code Developer
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white glow-text leading-tight mb-6">
          Edrian Pasaylo
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable digital solutions without traditional code — faster, leaner, and more powerful than ever.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 mb-10">
          <div className="text-center">
            <p className="font-heading text-3xl font-bold text-cyan-400">70%</p>
            <p className="text-white/40 text-sm mt-1">Manual work reduced</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <p className="font-heading text-3xl font-bold text-cyan-400">15+</p>
            <p className="text-white/40 text-sm mt-1">Hrs saved / client / week</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl glass glass-hover text-white font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none" />
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx src/components/ui/particles.jsx
git commit -m "feat: add 21st.dev particles hero"
```

---

## Task 6: Build Skills section

**Files:**
- Create: `src/components/Skills.jsx`

- [ ] **Step 1: Create Skills.jsx**

```jsx
// src/components/Skills.jsx
import { skills } from '../data/content.js'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeader from './ui/SectionHeader.jsx'
import Badge from './ui/Badge.jsx'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader number="01" title="Core Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <GlassCard key={skill.name}>
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{skill.icon}</span>
              <Badge>{skill.level}</Badge>
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">{skill.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{skill.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Skills.jsx
git commit -m "feat: add skills section"
```

---

## Task 7: Build Projects section

**Files:**
- Create: `src/components/Projects.jsx`

- [ ] **Step 1: Create Projects.jsx**

```jsx
// src/components/Projects.jsx
import { projects } from '../data/content.js'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeader from './ui/SectionHeader.jsx'
import Badge from './ui/Badge.jsx'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader number="02" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <GlassCard key={project.name}>
            <h3 className="font-heading text-base font-bold text-white mb-2">{project.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.jsx
git commit -m "feat: add projects section"
```

---

## Task 8: Build Experience timeline

**Files:**
- Create: `src/components/Experience.jsx`

- [ ] **Step 1: Create Experience.jsx**

```jsx
// src/components/Experience.jsx
import { experience } from '../data/content.js'
import SectionHeader from './ui/SectionHeader.jsx'
import Badge from './ui/Badge.jsx'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader number="03" title="Experience" />
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent" />

        <div className="space-y-12">
          {experience.map((entry, i) => (
            <div key={i} className="relative pl-12">
              {/* dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full glass border border-cyan-400/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-1">
                {entry.period}
              </p>
              <h3 className="font-heading text-xl font-bold text-white mb-0.5">{entry.role}</h3>
              <p className="text-white/40 text-sm mb-4">{entry.company}</p>

              <ul className="space-y-2 mb-4">
                {entry.responsibilities.map((r, j) => (
                  <li key={j} className="flex gap-2 text-sm text-white/60">
                    <span className="text-cyan-400/50 mt-0.5">▸</span>
                    {r}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {entry.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Experience.jsx
git commit -m "feat: add experience timeline"
```

---

## Task 9: Build Tools section

**Files:**
- Create: `src/components/Tools.jsx`

- [ ] **Step 1: Create Tools.jsx**

```jsx
// src/components/Tools.jsx
import { toolCategories } from '../data/content.js'
import SectionHeader from './ui/SectionHeader.jsx'

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader number="04" title="Tools & Platforms" />
      <div className="space-y-8">
        {toolCategories.map((cat) => (
          <div key={cat.category}>
            <p className="text-white/25 text-xs font-medium uppercase tracking-widest mb-3">
              {cat.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-xl text-sm text-white/70 glass glass-hover cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Tools.jsx
git commit -m "feat: add tools & platforms section"
```

---

## Task 10: Build Rates section

**Files:**
- Create: `src/components/Rates.jsx`

- [ ] **Step 1: Create Rates.jsx**

```jsx
// src/components/Rates.jsx
import { rates } from '../data/content.js'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

export default function Rates() {
  return (
    <section id="rates" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader number="05" title="Availability & Rates" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {rates.map((plan) => (
          <GlassCard
            key={plan.name}
            className={plan.highlight ? 'border-cyan-400/30 shadow-[0_0_30px_rgba(0,212,255,0.08)]' : ''}
          >
            {plan.highlight && (
              <p className="text-cyan-400 text-xs font-medium uppercase tracking-widest mb-4">
                Most Popular
              </p>
            )}
            <h3 className="font-heading text-xl font-bold text-white mb-1">{plan.name}</h3>
            <p className="font-heading text-3xl font-bold text-cyan-400 mb-1">{plan.price}</p>
            <p className="text-white/30 text-sm mb-4">{plan.monthly}</p>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">{plan.description}</p>
            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-white/60">
                  <span className="text-cyan-400">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* Timezone + payment */}
      <GlassCard hover={false}>
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Timezone</p>
            <p className="text-white font-medium">PHT — GMT+8 (Philippines)</p>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Payment Methods</p>
            <p className="text-white font-medium">PayPal · Wise · GCash · Crypto</p>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Availability</p>
            <p className="text-white font-medium">Open to new clients</p>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Rates.jsx
git commit -m "feat: add rates section"
```

---

## Task 11: Build Footer

**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Create Footer.jsx**

```jsx
// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 py-10 px-6 text-center"
    >
      <p className="text-white/30 text-sm mb-3">
        © {new Date().getFullYear()} Edrian Pasaylo. All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-6">
        <a
          href="mailto:edrianpasaylo@gmail.com"
          className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/edrian-pasaylo"
          className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/edrian"
          className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: add footer"
```

---

## Task 12: Wire up App.jsx and verify

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Replace App.jsx**

```jsx
// src/App.jsx
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Tools from './components/Tools.jsx'
import Rates from './components/Rates.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Tools />
      <Rates />
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Start dev server and verify all sections render**

```bash
npm run dev
```

Open http://localhost:5173 and verify:
- Particles animate in the hero background
- Nav is fixed and glass
- All 5 numbered sections render
- Glass cards have hover glow effect
- Cyan accent color is consistent

- [ ] **Step 3: Build for production**

```bash
npm run build
```

Expected: `dist/` folder created with no errors.

- [ ] **Step 4: Final commit**

```bash
git add src/App.jsx
git commit -m "feat: wire up all sections in App"
```
