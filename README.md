# thejunglewalrus.github.io

Hub page that links to every Lost Ark tool I publicly host plus every English translation I've published.

**Live:** https://thejunglewalrus.github.io/

## Stack

Static HTML + one CSS file. No build step, no framework, no JavaScript. Push to `main` and GitHub Pages serves it.

```
index.html      all sections and cards inline
styles.css      palette, panel-border system, card grid, translation styles
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

`data-*` attributes drive styling:

- `data-region="na-eu" | "kr" | "global"` &mdash; `kr` swaps the inner gold border to copper
- `data-kind="calculator" | "planner" | "sim" | "reference" | "patch-notes" | "meta-breakdown"` &mdash; informational only; pair with a matching `<span class="pill pill-kind">` label
- `data-mine="true"` &mdash; informational only; pair with `<span class="pill pill-mine">Mine</span>`

Pill classes available: `pill-mine`, `pill-region` + (`pill-naeu` | `pill-kr` | `pill-global`), `pill-kind`.

## Adding a translation tile

Translations live in the `#translations` section. Each tile uses the same skeleton:

```html
<article class="card translation-card" data-region="kr" data-kind="patch-notes">
  <div class="t-header">
    <h4 class="t-title">Translation Title</h4>
    <time class="t-date" datetime="2026-05-06">May 6, 2026</time>
  </div>
  <p class="blurb">
    3&ndash;5 sentence summary describing what the translation covers.
  </p>
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
