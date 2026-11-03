# ADR 0001: Tech stack for the portfolio

Status: accepted · Date: 2026-11-03

## Context

Static personal portfolio (QA / SDET), hosted on GitHub Pages as a user site. The new design (Claude design canvas)
is a single page with light/dark tokens, repeated data (11 projects, 18 tools), per-letter animated headings and a
separate mobile layout (≤760px).

## Decision

| Area      | Choice                                                                            | Why                                                                                                                   |
| --------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Framework | Astro 7, TypeScript `strictest`                                                   | Static HTML output, zero JS by default, components + data files remove the markup duplication of the old 3-page site. |
| Styling   | Plain CSS with custom properties (`tokens.css`, `motion.css`, `global.css`)       | The design is already token-based; Tailwind/Bootstrap would add a layer for no gain.                                  |
| Client JS | Small TS `<script>`s inside components                                            | Theme, filter, test runner, scrollspy are tiny. No framework island, no jQuery/Isotope/AOS.                           |
| Fonts     | Self-hosted via Fontsource, latin woff2 preloaded                                 | No third-party requests, versions pinned.                                                                             |
| Images    | `astro:assets` (WebP, responsive `srcset`)                                        | Profile photo 507 kB → 31–207 kB, no CLS.                                                                             |
| Quality   | `astro check`, Prettier, Playwright e2e, axe (WCAG 2.1 AA), Lighthouse CI budgets | The site doubles as a showcase of QA practice.                                                                        |
| Deploy    | GitHub Actions → `withastro/action` → `actions/deploy-pages`                      | Official Astro path for Pages. Pages source must be "GitHub Actions".                                                 |

## Rejected

- **Vanilla HTML/CSS/JS, no build**: simplest, but hand-copied data/markup and no image/font optimisation.
- **Next.js / React SPA**: client runtime and hydration for a page that has no server state.
- **Tailwind**: fine, but the design system is already expressed as CSS variables.

## Consequences

- A build step now exists (`npm run build`); Node ≥ 22 required (`.nvmrc` = 24).
- Pages source must be switched to "GitHub Actions" once (Settings → Pages).
- Design changes: edit tokens/CSS and the components in `src/components/`; content lives in `src/data/`.
