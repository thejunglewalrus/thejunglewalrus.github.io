# thejunglewalrus.github.io

Hub page that links to every Lost Ark tool I publicly host plus every English translation I've published.

**Live:** https://thejunglewalrus.github.io/

## Stack

Static HTML, one CSS file, and a small progressive-enhancement script. No build step or framework. Push to `main` and GitHub Pages serves it. Every directory link remains usable with JavaScript disabled.

```
index.html      all sections and cards inline
styles.css      slate/gold palette, responsive layout, cards and translation rows
hub.js          directory search, category/region filters, empty/reset states
assets/         local game icons used by featured calculator links
favicon.svg
og-image.png    1200x630 social preview
```

## Adding a tool card

Drop a new `<article>` into the relevant `<section>` in `index.html`. The skeleton:

```html
<article class="card" data-mine="true" data-region="na-eu" data-kind="calculator">
  <h3>Tool Name</h3>
  <p class="blurb">12-18 word description of what it does.</p>
  <div class="cta-row">
    <a class="btn-primary" href="https://thejunglewalrus.github.io/repo-name/">
      Open tool <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
  <footer class="card-meta">
    <span class="pill pill-mine">Mine</span>
    <span class="pill pill-region pill-naeu">NA / EU</span>
    <span class="pill pill-kind">Calculator</span>
  </footer>
</article>
```

`data-*` attributes supply styling and directory filters:

- `data-region="na-eu" | "kr" | "ru" | "global"` &mdash; controls the region filter; omitted regions are treated as global
- `data-kind="calculator" | "planner" | "sim" | "reference" | "patch-notes" | "meta-breakdown"` &mdash; informational only; pair with a matching `<span class="pill pill-kind">` label
- `data-mine="true"` &mdash; informational only; pair with `<span class="pill pill-mine">Mine</span>`

Pill classes available: `pill-mine`, `pill-region` + (`pill-naeu` | `pill-kr` | `pill-ru` | `pill-global`), `pill-kind`. The historical `pill-mine` is retained for compatibility but hidden by the current theme.

Search matches all words against each article's text, including collapsed translation summaries. Category filtering treats `#translations` as the archive and the other sections as tools. Hidden sections disappear when no cards match; reset restores the complete directory. Featured shortcuts remain visible outside these filters.

## Adding a translation tile

Translations live in the `#translations` section. Each tile uses the same skeleton:

```html
<article class="card translation-card" data-region="kr" data-kind="patch-notes">
  <div class="t-header">
    <h4 class="t-title">Translation Title</h4>
    <time class="t-date" datetime="2026-05-06">May 6, 2026</time>
  </div>
  <details class="translation-summary">
    <summary>What’s covered</summary>
    <p class="blurb">
      3&ndash;5 sentence summary describing what the translation covers.
    </p>
  </details>
  <div class="cta-row">
    <a class="btn-primary" href="https://thejunglewalrus.github.io/repo-name/">
      Read translation <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
  <footer class="card-meta">
    <span class="pill pill-region pill-kr">KR</span>
    <span class="pill pill-kind">Patch Notes</span>
  </footer>
</article>
```

`data-kind` values used: `patch-notes`, `meta-breakdown`. Add new kinds freely &mdash; the attribute is just metadata; the displayed label comes from the `<span class="pill pill-kind">` text.

## Local preview

Open `index.html` directly in a browser. No server needed &mdash; there are no fetch / module calls.

For browser testing, `python -m http.server 8740 --bind 127.0.0.1` serves the hub locally. Check search + region combinations, category filters, no-results/reset, translation disclosures, and layouts at desktop and 390px width. Root styles are independent of each calculator's copy of the shared visual theme.
