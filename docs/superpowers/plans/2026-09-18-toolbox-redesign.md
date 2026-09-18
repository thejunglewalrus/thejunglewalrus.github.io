# Lost Ark Toolbox Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development for independently owned sites, with parent integration review.

**Goal:** Deliver the approved theme and easier calculator workflows across three existing sites.
**Architecture:** Keep vanilla hub, bundled React picker, and static SvelteKit cash shop. Independent site ownership with matching tokens/navigation; leave calculation modules and datasets unchanged except input handling needed for the approved controls.
**Tech Stack:** HTML/CSS/JavaScript, React/esbuild/Python, SvelteKit/TypeScript.
**Spec:** ../specs/2026-09-18-toolbox-redesign.md

## Global constraints

- Palette, typography, interaction and preservation requirements are in the approved spec.
- Never publish private source files to the public deploy mirrors.
- Do not overwrite user changes; only stage task-owned files if committing.
- Do not read .env or modify valuation datasets.

## Task 1: Hub (parent)

Files: index.html, styles.css, new hub.js, README.md.
- [x] Preserve all existing hrefs and article metadata; create compact header and featured tools.
- [x] Replace root CSS with responsive slate-and-gold design, compact translation rows.
- [x] Implement progressive search/category filters and empty/reset states.
- [x] Verify all links retained, search combinations, keyboard controls and mobile overflow in browser.

## Task 2: Hell picker (worker)

Repository: C:/Users/PandaPanda/Projects/hell-rewards-picker-source.
Files: index.template.html, src/app.jsx, focused supporting UI files if needed; regenerate index.html and app.js.
- [x] Read repo instructions and inspect setup/price/result component interfaces.
- [x] Record deterministic valuation fixtures before editing.
- [x] Implement shared theme/header and move primary controls above results.
- [x] Keep the entire ranked chart visible (user correction removed offered-chest selection); implement explicit Wealth +1 controls and searchable grouped market settings.
- [x] Build and validate fixtures; start preview and report URL for parent browser review.

## Task 3: Cash shop (worker)

Repository: C:/Users/PandaPanda/Projects/lostark-cash-shop-value-source.
Files: src/app.css, src/routes/+layout.svelte, src/routes/+page.svelte, src/lib/PriceCell.svelte and focused supporting components.
- [x] Read repo instructions, sync source safely, capture baseline checks and valuation fixtures.
- [x] Implement shared theme/navigation and responsive supporting routes.
- [x] Add pack search/filter, expandable contents and up-to-three side-by-side comparison.
- [x] Implement explicit price editor with validation, zero, save/cancel/reset and bundle labels.
- [x] Run check/build, compare fixtures and start preview for parent browser review.

## Task 4: Integration review (parent)

- [x] Review diffs for source/data preservation and functional completeness.
- [x] Browser-test all three previews at desktop/mobile sizes.
- [x] Fix issues found; rerun relevant checks.
- [x] Present working previews and clear deployment status.
