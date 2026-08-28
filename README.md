# neelvora.github.io

Astro static site. Built for search visibility first: server-rendered HTML, one
page per publication, and a `Person` entity graph on every page.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Deploy to GitHub Pages

1. Create a repo named exactly `<your-username>.github.io`.
2. Push this directory to the `main` branch.
3. Settings → Pages → Source → **GitHub Actions**.

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

**If you use a project repo instead** (e.g. `github.com/you/website`), set
`base: '/website'` in `astro.config.mjs` alongside `site`.

## Adding a custom domain later

1. Buy the domain. Recommended, in order: `neelrvora.com` (matches your
   publication byline), `neelvora.dev`, `neelvora.ai`.
2. Create `public/CNAME` containing one line: `neelrvora.com`
3. DNS: four `A` records for the apex pointing at `185.199.108.153`,
   `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; plus a `CNAME` for
   `www` pointing at `<username>.github.io`.
4. Update `site` in `astro.config.mjs`, `SITE_URL` in `src/consts.ts`, and the
   Sitemap line in `public/robots.txt`.
5. Settings → Pages → Custom domain → tick **Enforce HTTPS**.

---

## Before you publish — do these in order

### 1. Fill the TODOs in `src/consts.ts`

The `sameAs` array is the single highest-leverage thing on this site. It is how
search engines merge every profile of you into one entity instead of splitting
you across the other people named Neel Vora. Every `TODO` you leave in is a
signal thrown away.

- [ ] Register an **ORCID** (orcid.org, ~3 minutes) and add it
- [ ] Add your GitHub URL
- [ ] Verify the arXiv author page URL resolves; drop it if not
- [ ] Add your email

### 2. Put your homepage URL on every profile you already own

This is the backlink work, and it costs nothing:

- [ ] Google Scholar → Profile → **Homepage** field
- [ ] Berkeley Lab profile → website field
- [ ] LinkedIn → Contact info → Website
- [ ] ORCID → Websites & social links
- [ ] GitHub → profile website field
- [ ] ResearchGate
- [ ] arXiv author page

### 3. Create a Wikidata item

Realistic path to a knowledge panel. An item with your ORCID, affiliation, and
notable works gives search engines a structured record they trust more than a
personal site alone.

### 4. Register with search engines

- [ ] Google Search Console → verify → submit `sitemap-index.xml`
- [ ] Bing Webmaster Tools → same

### 5. Facts to keep accurate

These were verified against public records in August 2026. Do not drift from
them:

| Claim | Correct form |
|---|---|
| Inference latency | **54 ns** (not 40 ns — the paper says 54) |
| QubiCML accuracy | 98.5% average, 500 ns readout window |
| Qubit control platform paper | **Scientific Reports** (Nature Portfolio), not *Nature* |
| Patent | Berkeley Lab IPO 2024-145, US application pending |

There is **no npj Quantum Information paper** under your name in any public
index. If a draft bio claims one, it is wrong.

---

## Where to put new content

| What | Where |
|---|---|
| A new paper | `src/data/publications.ts` — a page is generated automatically |
| A new research thread | `src/pages/research.astro` |
| Identity, links, schema | `src/consts.ts` |
| Colours, type, spacing | `src/styles/global.css` (tokens at the top) |

## What moves rankings from here

Publications and profile links get you found by people searching your name.
Long-form topic writing is what gets you found by people who don't know your
name yet. The `research` page is the seed; the highest-return next step is one
substantial explainer per quarter on a query you want to own — *"why mid-circuit
measurement needs sub-microsecond state discrimination"*, *"running neural
network inference on RFSoC fabric"*. Twelve hundred words, written for someone
one step outside your field.
