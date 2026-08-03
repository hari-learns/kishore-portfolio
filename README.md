# Kishore Muthukumar — Portfolio

Academic portfolio for a 5th-year MBBS student on the physician-scientist
pathway. Next.js App Router, exported as a fully static site and served from
GitHub Pages.

**Live:** https://hari-learns.github.io/kishore-portfolio/

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
which GitHub Pages serves. Takes about a minute to go live after the push.

## Editing content

**All copy lives in [`lib/data.ts`](lib/data.ts).** No JSX edits are needed to
change text — every section reads from that one file.

## Placeholders still to replace

These are the only values that are not real. Everything else came from the
brief.

| What | Where | Note |
|---|---|---|
| Email address | `contact.email` | Currently `kishore@example.com` |
| WhatsApp number | `contact.whatsappNumber` | Digits only, country code first, no `+` |
| ORCID URL | `contact.orcid` | Placeholder zeros |
| ResearchGate URL | `contact.researchgate` | Placeholder profile |
| **CV PDF** | `public/kishore-muthukumar-cv.pdf` | **File does not exist yet — the "Download CV" buttons 404 until it is added** |

Two further things worth a second look before this goes to the client:

- The publication title was truncated in the brief (`"Evolocumab in the
  Management of Statin-Intolerant Familial Hyperlipoproteinemia..."`). The
  visible portion is used; the full title should replace it in
  `publications[0].title`.
- Conference sub-titles and roles (`Presenting Author`, `Delegate`, and the
  one-line descriptions in `conferences`) were inferred, not supplied.

## Notes for future edits

`images.unoptimized` is required for static export, and it stops `next/image`
from applying `basePath` automatically. Any URL written by hand — an image
`src`, or an `<a href>` pointing at a file in `public/` — must go through
`asset()` from [`lib/basePath.ts`](lib/basePath.ts) or it will 404 on Pages.
