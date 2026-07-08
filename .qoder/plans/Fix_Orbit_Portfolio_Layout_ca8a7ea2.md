# Fix Orbit Portfolio Layout

## Current State
- **`src/components/Orbit.css`** (677 lines) — Duplicate CSS (lines 1–402 repeated at 403–677). Delete and recreate.
- **`src/components/OrbitCard.jsx`** (22 lines) — Missing: badge, glow, arrow button.
- **`src/components/OrbitPortfolio.jsx`** (132 lines) — Missing: navbar, instruction text, profile photo. Wrong social links.
- **`src/data/orbitData.js`** (93 lines) — 9 items. **No changes.**

## Task 1: Rewrite `src/components/Orbit.css`
Delete + write fresh (~350 lines): navbar, orbit wrapper/path, card positions (active/prev/next/hidden), glow variants (green/purple), category badge, arrow button, profile photo, info panel, nav buttons, instruction text, social sidebar, tech stack, filters, dots, code rain.

## Task 2: Rewrite `src/components/OrbitCard.jsx` (~40 lines)
Badge, image, title, tech, desc, arrow button, glow by category.

## Task 3: Rewrite `src/components/OrbitPortfolio.jsx` (~200 lines)
Navbar, background, filters, orbit section with cards + profile, instruction text, info panel, dots, social sidebar (Email/Phone/LinkedIn/GitHub/WhatsApp), tech stack, carousel + GSAP.

## Task 4: Test
Kill server, `npm run dev`, verify everything.
