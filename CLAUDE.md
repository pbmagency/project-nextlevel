# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**PBM Agency — Sales & Marketing Skills Training** landing page.

Offline training event at Doubletree by Hilton, facilitator Haryanto Kandani, price Rp 2,000,000.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel 13 (PHP), SQLite for local dev |
| Frontend SPA | Inertia.js v3 + React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first, no config file) |
| Build | Vite 8 + `@tailwindcss/vite` |

---

## Common Commands

```bash
# Frontend dev server
npm run dev

# Production build
npm run build

# TypeScript check (no emit)
npm run types:check
# or: npx tsc --noEmit

# Laravel dev server (separate terminal)
php artisan serve

# Run migrations
php artisan migrate

# Lint
npm run lint:check
npm run lint         # auto-fix
```

---

## Architecture

### Inertia page resolution

`app.tsx` uses a glob-based resolver with `.default` extraction:

```tsx
resolve: async (name) => {
    const pages = import.meta.glob<{ default: React.ComponentType }>('./pages/**/*.tsx');
    const mod = await pages[`./pages/${name}.tsx`]();
    return mod.default;
},
```

### Pages

| Path | Inertia page |
|------|-------------|
| `/` | `resources/js/pages/landing.tsx` |
| `/admin` | `resources/js/pages/admin/analytics.tsx` |
| `/admin/labs` | `resources/js/pages/admin/labs/index.tsx` |

### Landing page section order

1. `Navbar` — fixed dark nav, CTA → `#pricing`
2. `HeroSection` — dark hero, headline, CTAs, social proof
3. `SocialProofSection` — brand grid + 4 stats
4. `ProblemSection` — 6 pain points
5. `SolutionSection` — 3 solution cards
6. `BenefitSection` — 4 curriculum pillars
7. `TestimoniSection` — 2×2 grid + photo carousel placeholder
8. `MentorSection` — Haryanto Kandani bio, YouTube link, stats
9. `PricingSection` — single card Rp 2jt, WA + pay buttons
10. `GuaranteeSection` — 3 guarantee cards
11. `FAQSection` — 6 accordion items
12. `Footer`

All sections use `<SectionWrapper>` from `@/components/ui/section-wrapper` (max-w-6xl container, `bg: 'white' | 'slate' | 'dark'`).

### Analytics system

6 events tracked server-side and optionally forwarded to Meta CAPI:

| Event | Trigger |
|-------|---------|
| `visit` | `trackVisit()` on page mount |
| `scroll` | `useScrollTracking()` at 25/50/75/90% |
| `engagement` | `useDwellTime()` at 15s, then every 30s |
| `cta_click` | Manual `trackCTA(location, text, dest, metaEvent?, eventId?)` |
| `conversion` | Manual `trackConversion(type, data)` |
| `payment` | Manual `trackPayment(status, data)` |

All tracking silently fails — never crashes the page.

### Routing

No Ziggy — all admin redirects use plain URL strings (`'/admin'`, `'/admin/export?range=...'`).

### Button variants / sizes

Custom CVA button at `@/components/ui/button.tsx`:

- Variants: `primary | secondary | dark | ghost | outline`
- Sizes: `sm | md | lg | xl | icon`

### CSS

Tailwind v4 CSS-first: `resources/css/app.css` starts with `@import "tailwindcss"`. No `tailwind.config.js`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `META_PIXEL_ID` | Meta Pixel browser-side ID |
| `META_ACCESS_TOKEN` | Meta CAPI access token |
| `VITE_CLARITY_ID` | Microsoft Clarity project ID |
| `VITE_COURSE_PRICE` | Course price for payment tracking (default 2000000) |

### WA number

Placeholder `628XXXXXXXXXX` throughout codebase. Replace before deployment.

### Admin access

`/admin` routes are protected by `auth + verified + admin` middleware. Admin role is `users.role = 'admin'` in DB.

### JSON queries in PHP

All raw JSON DB queries use `json_extract()` — NOT Laravel's `->` operator (MariaDB compatibility).
