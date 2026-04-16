# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (localhost only)
npm run dev -- --host  # Start dev server exposed on LAN
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
```

## Architecture

Single-page portfolio app — no routing, no state management, no backend.

**Data flow:** All portfolio content lives in `src/data/content.js` as plain JS exports (`skills`, `projects`, `experience`, `toolCategories`, `rates`). Section components import directly from there. To update content, only touch `content.js`.

**Design system:** Glass utilities (`.glass`, `.glass-hover`, `.glow-text`) are defined as Tailwind `@layer utilities` in `src/index.css` — not as component classes. The custom `cyan` palette (300/400/500) and `font-heading` (Space Grotesk) are in `tailwind.config.js`.

**Hero particles:** `src/components/ui/particles.jsx` wraps `@tsparticles/react` v3. `initParticlesEngine` must be called once before rendering — it's handled inside a `useEffect` with `useState(false)` guard. The engine is loaded with `loadSlim` from `@tsparticles/slim`.

**Component boundaries:** One file per section (`Nav`, `Hero`, `Skills`, `Projects`, `Experience`, `Tools`, `Rates`, `Footer`). Shared primitives are `GlassCard`, `SectionHeader`, `Badge` in `src/components/ui/`.
