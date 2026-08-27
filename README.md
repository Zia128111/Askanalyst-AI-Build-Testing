# Ask Analyst — Stock Overview (LUCK)

Full React + Tailwind implementation of the Figma "page-stock-overview" frame
(node `6012:1197`), built with Vite.

## Run it

```bash
npm install
npm run dev
```

## What's here

- `src/data/overviewData.js` — every number on the page in one place. Swap
  this for a fetch to your real API (e.g. `GET /api/companies/LUCK/overview`)
  and every component updates automatically — nothing else needs to change.
- `src/components/` — one component per card:
  - `Sidebar.jsx`, `HeaderNav.jsx`, `HeroSection.jsx`
  - `MetricGridCard.jsx` — reusable header + metric-tile grid, used for
    Trading Data, Equity Profile, Returns & History, and Valuation
  - `ManagementCard.jsx`, `IndustryAveragesCard.jsx`
  - `CompanyFinancialsTable.jsx`, `MiniDataTable.jsx`, `StockDataSection.jsx`
  - `ChartsGridRow.jsx` + `charts/GrowthBarChart.jsx` — reusable row of small
    bar charts, used for the Income Statement / Balance Sheet / Ratios
    chart sections
  - `charts/PriceLineChart.jsx`, `charts/RelativeReturnsChart.jsx`,
    `charts/SettlementRatioChart.jsx`, `charts/VolumeTradedChart.jsx`
- `src/styles/tokens.css` — the design tokens (colors) pulled from the
  Figma file, wired into `tailwind.config.js`.

## Notes / things to wire up before shipping

1. **Fonts** — the design uses SF Pro (headings/labels) and IBM Plex Sans
   (numbers, chart axis labels). Add both via `next/font`, a `<link>` tag,
   or self-hosted `@font-face` — `tailwind.config.js` already exposes
   `font-sf` / `font-plex` utility classes pointing at them.
2. **Icons** — the sidebar/nav icons and the small chart-row bar-chart icon
   were rebuilt with `lucide-react` rather than the original Figma SVG
   exports, because those export URLs expire ~7 days after generation.
   Swap in your own icon set if you have one.
3. **Chart data** — `relativeReturnsSeries`, `settlementRatioSeries`,
   `volumeTradedSeries`, and the growth/margin trend series
   (`revenueGrowth`, `epsTrend`, etc.) are representative values
   reconstructed from the chart geometry in the Figma file (the design
   itself doesn't expose per-point numbers, only pixel positions) —
   replace with your real time-series data.
4. **Logo / avatar** — the Ask Analyst wordmark and the LUCK ticker glyph
   are placeholders (a rounded square / gradient circle); drop in the real
   SVGs from your asset pipeline.
5. All charts are built with [Recharts](https://recharts.org) — already a
   dependency — so they're live/interactive out of the box, not static
   images.
