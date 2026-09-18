# Lost Ark toolbox redesign

Approved in conversation on September 18, 2026. Scope: hub, NA/EU Hell Rewards Picker, Cash Shop Calculator including its supporting routes.

## Design

Refined Lost Ark theme: deep slate #111820, panel slate #1a2530, raised panel #23323e, parchment #eee9dd, muted gold #d4b477, subdued text #a8b4bd. Green #82c9a5 and red #ed9b91 signify comparisons, never the only indicator. Georgia or a locally available fantasy serif for display headings; Segoe UI/system sans for interface text. Use existing game icons and the walrus mascot. Keep content left aligned, corners restrained (8–12px), controls at least 40px tall, explicit labels, visible focus, and reduced-motion support.

Shared header uses The Jungle Walrus identity and links to All tools, Hell rewards, Cash shop. Each repository remains self-contained; no new runtime framework or shared cross-site CSS dependency. Preserve routes, game data, valuation formulas, saved state keys, analytics, and public assets.

## Hub

Compact header, editorial intro, two featured shortcuts, searchable directory with category filters, shorter descriptions, more compact dated translations. Keep README article metadata and link conventions. All links usable without JavaScript. Search/filter empty state provides a clear reset action.

## Hell Rewards Picker

Key, rarity and floor controls above results. User correction: always show the full ranked chart at a glance. Do not add an offered-chests selector. Keep the best-choice summary compact; Wealth +1 label explains its base-only multiplier. Market prices become a searchable grouped disclosure. Preserve gamble, sands, cubes, existing data and valuation. Result hierarchy emphasizes chest name, total value and best choice.

## Cash shop

Search and filter packs; readable comparison to exchange; expandable contents; optional side-by-side comparison. Visible market-price edit buttons open labeled inputs with unit/bundle context, Save, Cancel and Reset. Preserve zero as a valid custom valuation and show invalid-input feedback. Common styling extends across all existing routes; retain detail pages and custom selections. Show price freshness from actual payload timestamps.

## Verification

Capture existing calculation results and compare deterministic fixtures after edits. Build both calculators, run Svelte checks, inspect desktop and narrow mobile browser screenshots. Exercise hub search/filter/reset, Hell full-chart/Wealth/floor navigation, cash search/filter/comparison and price save/cancel/reset. Check route compatibility and horizontal overflow. Publishing follows review of the working result.
