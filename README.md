# Macrolan — Inspiring Technology

Marketing site for **Macrolan Kenya Enterprises Limited**, built with **Next.js 14** (App Router), **React 18** and **TypeScript** (strict mode).

## Features

- **Fully responsive** — fluid layout from large desktop down to 380px phones (4 breakpoints: 1024 / 880 / 600 / 380px), with a hamburger menu on mobile.
- **Scroll-reveal animations** — sections fade and slide into view as you scroll, via an `IntersectionObserver` (`components/Reveal.js`). Supports `up`, `left`, `right` and `scale` variants plus staggered delays.
- **Accessible motion** — animations are disabled automatically for users with `prefers-reduced-motion: reduce`.
- No CSS framework — hand-written, themeable CSS in `app/globals.css`. **Blue/white corporate palette** drawn from the MK logo (navy, royal & sky blue, terracotta accent) via CSS variables; Dell-inspired clean layout with generous white space.
- **Real Macrolan Kenya logo** — the MK monogram (`public/img/logo-mark.png`, with horizontal and stacked lockups + a square `app/icon.png` favicon) extracted from the official brand PDF, used in the nav and footer.
- **Localized project photos** — real Macrolan installations in `public/img/projects/` power the hero and a "Recent projects" section.
- **Technology partners** — real brand logos (Dell, HP, Microsoft, Apple, Honor, Lenovo, Cisco, Samsung, Intel, Epson, Huawei) as inline themeable SVG (`lib/brands.ts`, `components/Partners.tsx`).
- **FAQ accordion** — `components/Faq.tsx`.
- **Rich contact section** — Visit / Email / Call / WhatsApp method cards, a Google Maps embed, and a "Get a Free Quote" form. WhatsApp deep-links to `wa.me/254722819877`.
- **Inquiry form** — any button/link with a `data-contact` attribute opens a modal contact form (`components/ContactModal.tsx`). On submit it composes a pre-filled email to **info@macrolan.company**, so visitors send from their own mail app and get replies directly. Contact details live in `lib/content.ts` (`contact`).

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
  Nav.tsx          # sticky nav + mobile hamburger menu (client)
  Reveal.tsx       # scroll-reveal wrapper (client, typed props)
  Partners.tsx     # technology-partner logo strip
  Faq.tsx          # FAQ accordion (client)
  ContactModal.tsx # data-contact → mailto inquiry form (client)
lib/
  content.ts       # services, projects, faqs, testimonials, contact (typed)
  brands.ts        # inline partner-logo SVG glyphs
public/
  img/             # logo, per-service SVGs, projects/ photos
globals.d.ts       # ambient declaration for *.css side-effect imports
tsconfig.json      # strict TypeScript config
```

Page sections (top → bottom): hero · trust signals · stats · services ·
projects · why-us · mission/vision · values · partners · FAQ · contact · footer.

To edit copy (services, projects, FAQs, contact…), change `lib/content.ts`. Each
array is backed by an exported interface so the shape is checked at compile time.
