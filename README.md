# Kishore Muthukumar — Portfolio

Academic portfolio for a 5th-year MBBS student on the physician-scientist
pathway. Next.js App Router, exported as a fully static site and served from
GitHub Pages behind a custom domain.

**Live:** https://kishorekumardoc.com

## Running locally

```bash
npm install
npm run dev          # http://localhost:3010
```

## Deploying

```bash
npm run deploy
```

Rebuilds the static export and force-pushes `out/` to the `gh-pages` branch,
which GitHub Pages serves at the custom domain. Takes about a minute to go
live after the push; DNS/cert changes (if any) can take longer.

## Editing content

**All copy lives in [`lib/data.ts`](lib/data.ts).** No JSX edits are needed to
change text — every section, and the photo gallery in `journey`, reads from
that one file.

## Still open

- The publication title was truncated in the original brief. The CV supplied
  the full title, already reflected in `publications[0].title` — worth a
  final check against the source.
- ORCID and ResearchGate URLs in `contact` are placeholders.
- Conference sub-titles/roles in `conferences` were inferred, not supplied.

## Notes for future edits

The site is served from the root of `kishorekumardoc.com` (no `basePath`).
`public/CNAME` is what keeps the domain bound to GitHub Pages —
`scripts/deploy.sh` force-pushes `out/`, which would otherwise wipe the
`CNAME` file GitHub writes into `gh-pages`. Every build re-emits it from
`public/`, so don't delete that file.

`images.unoptimized` is required for static export (no image-optimisation
server on GitHub Pages).
