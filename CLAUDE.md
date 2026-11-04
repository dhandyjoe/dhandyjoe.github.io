# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio for Dhandy Joenathan (QA / SDET), built with Astro and deployed to GitHub Pages by GitHub Actions from `master` of `github.com/dhandyjoe/dhandyjoe.github.io` (live at https://dhandyjoe.github.io/). Rationale: `docs/adr/0001-tech-stack.md`.

## Commands

    npm run dev       # http://localhost:4321
    npm run build     # astro check + build to dist/
    npm test          # Playwright e2e + axe; builds first, needs Google Chrome
    npm run lhci      # Lighthouse budgets (after build)

## Architecture

- Single page: `src/pages/index.astro` composes `src/components/` (Nav, Hero, TestRunner, SkillsBand, Projects, About, Contact, Footer) inside `src/layouts/Base.astro` (head/SEO/JSON-LD, theme bootstrap). `about.html`/`contact.html` are Astro redirects to `/#about` and `/#contact`.
- Content is data: `src/data/projects.ts` (add a project here; its `cat` must be one of `categories` or the filter won't match), `tools.ts`, `site.ts`.
- Styling is plain CSS in `src/styles/`: `tokens.css` (light/dark via `html[data-theme]`), `motion.css` (all keyframes), `global.css` (desktop is the base, mobile artboard = `@media (max-width: 760px)`). Change both layouts when changing a section. Desktop (>760px) is rendered with `html { zoom: 0.85 }`; `zoom` doesn't scale viewport units, so write `calc(N * var(--svh))`/`var(--vw)` instead of `Nsvh`/`Nvw`.
- Behaviour is small `<script>`s in components: theme toggle + scrollspy (Nav), filters (Projects), test-runner ticker (TestRunner). Theme is set pre-paint by an inline script in `Base.astro`. Respect `prefers-reduced-motion`.
- Contact has no form/backend: email, LinkedIn, GitHub and resume links only.
- Resume PDF: `public/cv/`; profile photo: `src/assets/` (optimised by `astro:assets`).
- Don't reuse the design canvas class name `.glass` for stick-figure parts (it collided with the dock); they are `.lens`/`.lens2`.

## Design source

The redesign reference is a Claude Artifacts Design canvas: https://claude.ai/artifact/NND4gvAeE3AS9HkJCkrByj (artboards `Main.dc.html`/`Dark.dc.html` = desktop 1440px, `Mobile.dc.html`/`Mobile-Dark.dc.html` = 390px). Read it with the Artifact tool (`read` + `path`) for the latest version before implementing design changes; the user edits it there.

## Project skills

`.claude/skills/` holds vendored third-party skills (MIT, LICENSE in each folder) — update by re-copying from upstream, don't edit in place:

- `ponytail*` from github.com/DietrichGebert/ponytail @ `96608e078b2d` — skills only, the plugin's hooks are intentionally not installed.
- `design-taste-frontend` from github.com/Leonxlnx/taste-skill @ `12af471f627f` — its scripts need Node 22+ and Chrome, and write working files to `.taste-skill/` (gitignored).
