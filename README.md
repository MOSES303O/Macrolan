# Macrolan — Inspiring Technology

Marketing site for **Macrolan Kenya Enterprises Limited**, built with **Next.js 14** (App Router), **React 18** and **TypeScript** (strict mode).

## Features

- **Fully responsive** — fluid layout from large desktop down to 380px phones (4 breakpoints: 1024 / 880 / 600 / 380px), with a hamburger menu on mobile.
- **Scroll-reveal animations** — sections fade and slide into view as you scroll, via an `IntersectionObserver` (`components/Reveal.js`). Supports `up`, `left`, `right` and `scale` variants plus staggered delays.
- **Accessible motion** — animations are disabled automatically for users with `prefers-reduced-motion: reduce`.
- No CSS framework — hand-written, themeable CSS in `app/globals.css` (teal brand palette via CSS variables).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000 (or: npm run dev -- --port 3210)
```

## Build & checks

```bash
npm run build      # production build (also type-checks)
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit, strict type-checking only
```

## Structure

```
app/
  layout.tsx     # fonts, metadata, viewport (typed Metadata/Viewport)
  page.tsx       # all page sections
  globals.css    # theme, layout, responsive rules, reveal motion
components/
  Nav.tsx        # sticky nav + mobile hamburger menu (client)
  Reveal.tsx     # scroll-reveal wrapper (client, typed props)
lib/
  content.ts     # services, values, stats, testimonials (typed interfaces)
public/
  img/           # hero + per-service SVG illustrations
globals.d.ts     # ambient declaration for *.css side-effect imports
tsconfig.json    # strict TypeScript config
```

To edit copy (services, values, stats…), change `lib/content.ts`. Each array is
backed by an exported interface (`Service`, `Value`, `Testimonial`, …) so the
shape is checked at compile time.
