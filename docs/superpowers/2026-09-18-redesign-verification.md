# Toolbox redesign verification

## Delivered scope

- Hub: shared identity, two featured calculators, search/category/region filters, empty/reset states, compact translation disclosures. All 21 original directory entries and destination links retained.
- Hell: full ranked chart always visible (user explicitly removed the offered-chest selector), compact top setup, Wealth +1 actions, searchable grouped market settings, direct Edit prices shortcut, matching theme.
- Cash shop: matching shell across every route, search/filter, optional three-pack comparison, expandable contents, labeled price dialogs with Save/Cancel/Reset, actual price timestamps, compact pack assumptions.

## Verification results

- Hub JavaScript syntax and whitespace checks passed. Browser: search + region intersection, empty/reset, categories, desktop and phone layout.
- Hell build passed. Exactly unchanged: 2,343 chest/base/Wealth fixtures, seven rarity distributions, 20 expected-pick fixtures. Built-in floor-distribution and gamble assertions passed.
- Hell browser: full chart present without selection mode; Gold Wealth result 28,675 to 49,150 equals nine additional base payouts of 2,275; floor controls, price search/empty/reset and shortcut work. Desktop first data row at y435 in a 1280px viewport. At 390px no page overflow; Sands Gold/sand column and Cubes values remain available.
- Cash production build passed. Svelte check: zero errors, one pre-existing missing Node type definitions warning. Price parser and catalog-search regression scripts passed. All 144 resolved-pack results match pre-redesign fixtures across regions, zero overrides and full/single bonus deals.
- Cash browser: three-pack comparison and fourth-selection limit; plural material searches; availability filter; region switching; detail route plus Mari, Bonus Room, Ark Pass, Jump-Up Boost and math routes; no runtime console errors observed. Mobile routes checked at 390px without page overflow.
- Cash price dialog: negative values rejected; zero accepted; Cancel preserves price; Reset restores baseline. A 12,345 gold / 100-stone bundle produces 2,469,000 gold for 20,000 stones. Expanded details stay with their pack after sorting; keyboard focus returns to the Edit button after Save/Reset. Test overrides restored.
- Independent source review found and verified fixes for shared-table mobile hiding, plural material search and modal accessible names/unique IDs. Parent QA also caught and verified keyed disclosure state and focus restoration.

## Local previews and limitations

Hub: http://127.0.0.1:8740/
Hell: http://127.0.0.1:8741/
Cash shop: http://127.0.0.1:5173/

Preview prices use existing local snapshots; Hell clearly labels its bundled defaults because live prices.json is supplied by the deployment updater. Existing live prices must be preserved when publishing. No changes to game datasets, calculation models, saved-state keys, or daily price refresh jobs. No publication performed.
