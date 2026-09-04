# mycitymyward

A Hindi-first, responsive, accessible (WCAG 2.2 AA target) template for a
municipal **ward campaign** website — built so that **no unverified factual claim
can reach the public page**.

> 🧪 **This is a DEMO build.** The candidate (**रानू यादव**), the party
> (*जन विकास मंच — काल्पनिक दल*), the timeline, statistics, news, events and
> contact details are **fictional sample content** to show the layout. A
> site-wide banner says so on every page. Nothing here describes a real person.
>
> **To use for a real campaign:** set `IS_DEMO = false` in `data/content.ts`,
> then replace every record in `/data` with verified, authorised content and work
> through the checklists at the end of this file. Publish only with written
> authorisation from the candidate / campaign team, and confirm the final
> candidate list, party affiliation, election date and ward boundary against
> official sources immediately before deployment.

---

## Tech stack

| Concern      | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | Next.js 15 (App Router, RSC) + TypeScript          |
| Styling      | Tailwind CSS 3 (custom Jaipur civic palette)       |
| Icons        | lucide-react (tree-shaken, explicit imports)       |
| Fonts        | `next/font` — Noto Sans/Serif Devanagari, Inter    |
| Forms        | React Hook Form + Zod (shared client/server rules) |
| Data layer   | Prisma — SQLite for dev, PostgreSQL-ready          |
| Images       | `next/image` (AVIF/WebP) via `<ResponsiveImage />` |
| Map          | Consent-gated Google Maps Embed + text fallback    |
| Security     | CSP + secure headers, CSRF, rate limiting, field encryption |

---

## Project layout

```
app/
  layout.tsx             Root layout: <html>/<body> + fonts + global metadata only
  (site)/                Public marketing site (route group — no URL segment)
    layout.tsx           SkipLink + TopBar + Header + Footer chrome
    page.tsx             Home — Hero + Services/Packages teasers + Process + Why + CTA
    services|packages|demo|about|contact|privacy|terms/page.tsx
  admin/                 Admin panel (Supabase-auth gated, noindex)
    layout.tsx           Minimal shell
    login/page.tsx       Email + password sign-in (Supabase Auth)
    (panel)/             Auth-guarded group
      layout.tsx         Sidebar + top bar + sign-out; redirects if not signed in
      leads/page.tsx     वेबसाइट लीड्स — every plan's demo request (type='demo')
      queries/page.tsx   संपर्क क्वेरी — contact-form messages (type='contact')
  globals.css · not-found · loading · error
  sitemap.ts · robots.ts (disallows /admin) · manifest.ts · icon.svg · opengraph-image
middleware.ts            Refreshes the Supabase session; gates /admin/*
components/
  layout/                Header (route-aware nav, mobile menu), Footer, TopBar,
                         Logo, PageHeader (breadcrumb + H1 band)
  sections/              Hero, Services, Packages, ServiceList, ProcessSteps,
                         WhyChooseUs, Faq, StatsStrip, ContactChannels, CtaBand
  ui/                    Button, Card, Container, Icon, Section, SectionHeading, SocialIcon
  forms/                 LeadForm (RHF + Zod; demo / contact variants) — inserts into
                         Supabase `leads`, then shows success + WhatsApp/call fallback
data/content.ts          Site identity, nav, page headers, services, packages, FAQ
lib/
  utils.ts               cn(), date + text helpers
  supabase/              client.ts (browser) · server.ts (RSC) · types.ts (Lead)
supabase/schema.sql      Run once in the Supabase SQL editor — see SUPABASE_SETUP.md
```

### Content / verification model

Every factual record carries:

`status` · `isPublished` · `sourceUrl` · `sourceTitle` · `verifiedAt` ·
`verifiedBy` · `lastReviewedAt` · (`lastVerifiedLabel` for time-sensitive info)

A record renders publicly **only** when `isPublished === true` and `status` is
`verified` / `published`. Otherwise the UI shows an honest placeholder
(“सत्यापित जानकारी जोड़ी जानी है”). The site distinguishes four content kinds with
distinct badges: **verified history**, **current candidacy**, **proposed
commitment**, **media report**.

The four "verified starting facts" (2009 mayor, 2019 Lok Sabha as INC, joined BJP
Oct 2023, media reports of 31 Aug 2026 naming her the BJP Ward 110 candidate)
ship as `status: 'in_review'` with source **placeholders** — an editor must
attach the exact official document and run the content checklist before they are
final.

---

## Local development

### Prerequisites

- Node.js ≥ 18.18 (tested on Node 24)
- npm

### Steps

```bash
# 1. install
npm install

# 2. environment
cp .env.example .env            # Prisma CLI reads .env; Next reads it too
#   (for Next-only overrides you may also add .env.local)
#   - set APP_SECRET (openssl rand -base64 48)
#   - set DATA_ENCRYPTION_KEY (openssl rand -base64 32)
#   - leave FEATURE_FORMS_ENABLED="false" until a privacy policy + backend exist
#   - optionally set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY (referrer-restricted)

# 3. database (SQLite)
npx prisma generate
npx prisma db push          # creates prisma/dev.db from the schema

# 4. run
npm run dev                 # http://localhost:3000
```

### Useful scripts

| Script              | Purpose                                             |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Dev server                                          |
| `npm run typecheck` | `tsc --noEmit`                                      |
| `npm run lint`      | ESLint (`next lint`)                                |
| `npm run build`     | `prisma generate && next build`                     |
| `npm run start`     | Serve the production build                          |
| `npm run check`     | typecheck + lint + build (run before every deploy)  |
| `npm run db:studio` | Prisma Studio                                       |

---

## Forms & data collection

Both forms are **disabled by default** (`FEATURE_FORMS_ENABLED="false"`). In this
state they run full client + server validation and show a confirmation, but:

- nothing is written to the database,
- no reference number implying municipal registration is issued.

Before enabling (`"true"`):

1. Publish a real, campaign-approved privacy policy (edit `app/privacy/page.tsx`).
2. Provision the production database (`DATABASE_URL`) and run `prisma db push`.
3. Set `APP_SECRET` and `DATA_ENCRYPTION_KEY` (name/phone/email are stored
   AES-256-GCM encrypted).
4. For issue photo uploads, set `UPLOAD_STORAGE_BUCKET` and implement
   `persistUploads()` in `app/api/issues/route.ts` (object storage + EXIF strip +
   AV scan). Until then, issue text is still saved and attachments are dropped.
5. Confirm the retention job: personal data older than `RETENTION_DAYS` (180) is
   purged — schedule a cron that deletes `CitizenIssue` / `VolunteerSignup` rows
   past `purgeAfter`.

The complaint reference (`MCMW-YYYY-NNNNNN`) identifies a submission **on this
site only**. It never claims municipal registration; the confirmation screen says
so. A municipal reference is stored separately (`CitizenIssue.municipalRef`) only
if the issue is actually forwarded to and accepted by an official system.

---

## Production build

```bash
npm run check       # typecheck + lint + build must all pass
npm run start       # smoke-test locally
```

Environment for production `.env`:

- `NEXT_PUBLIC_SITE_URL` — canonical https origin (drives canonical tags,
  sitemap, OG, share links).
- `DATABASE_URL` — PostgreSQL URL. Also change `provider = "postgresql"` in
  `prisma/schema.prisma`, then `prisma migrate deploy` (or `db push`).
- `APP_SECRET`, `DATA_ENCRYPTION_KEY` — required if forms are enabled.
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` — restrict by HTTP referrer (your domain)
  **and** to the *Maps Embed API* in Google Cloud Console. It is a public embed
  key, never a server secret; no key is exposed in client code beyond this
  intentionally-public value.
- `NEXT_PUBLIC_ANALYTICS_DOMAIN` / `NEXT_PUBLIC_ANALYTICS_SRC` — optional,
  self-hosted, cookieless analytics only. Loads only after consent.

Security headers (incl. a strict CSP) are set in `next.config.mjs`. Review the
CSP `frame-src` / `img-src` if you add trusted third parties.

---

## Deployment

### Vercel (recommended)

- `vercel.json` is included: build command `prisma generate && next build`,
  region `bom1` (Mumbai).
- Add all env vars in **Project → Settings → Environment Variables**.
- Use Vercel Postgres or an external managed Postgres for `DATABASE_URL`.
- Set the production domain, then set `NEXT_PUBLIC_SITE_URL` to match.

### Node / container

```bash
npm ci
npm run build
npm run start           # listens on $PORT (default 3000)
```

Put it behind a TLS-terminating reverse proxy (nginx / Caddy). Ensure the proxy
forwards `X-Forwarded-For` (used for rate-limit keying). For multi-instance
deployments, replace the in-memory limiter in `lib/rate-limit.ts` with Redis.

### Post-deploy verification

Run the checklists below, then:

```bash
# broken-link check (example)
npx linkinator https://YOUR_DOMAIN --recurse --skip "twitter.com|x.com"
# Lighthouse
npx lighthouse https://YOUR_DOMAIN --only-categories=performance,accessibility,best-practices,seo --view
```

---

## QA commands (run and fix before every release)

| Check                    | Command                                                            |
| ------------------------ | ----------------------------------------------------------------- |
| TypeScript               | `npm run typecheck`                                               |
| ESLint                   | `npm run lint`                                                    |
| Production build         | `npm run build`                                                   |
| Accessibility audit      | `npx lighthouse <url> --only-categories=accessibility` + manual keyboard / screen-reader pass |
| Responsive viewports     | DevTools at 320 / 360 / 375 / 390 / 414 / 768 / 1024 / 1280 / 1440 |
| Broken links             | `npx linkinator <url> --recurse`                                  |
| Image loading            | Throttle to Slow 3G, confirm placeholders + blur-in, no CLS       |
| Form validation          | Submit empty, bad mobile, oversize file, missing consent, honeypot |

Current status: `typecheck` ✅ · `lint` ✅ · `build` ✅ (first-load JS ≈ 162 kB).

---

## ✅ Content-verification checklist

Do **not** deploy until every row is done.

- [ ] Confirm the **final candidate list** for Ward 110 on the State Election
      Commission, Rajasthan site — name spelling, candidate number, party.
- [ ] Confirm **party affiliation** is still BJP and that the party name / colours
      are authorised for use. If not verified, remove party references.
- [ ] Confirm the **election date / schedule** from the SEC notification; update
      every `lastVerifiedLabel`.
- [ ] Attach the exact **2009 Jaipur mayoral result** record to `sources.mayor_2009`.
- [ ] Attach the **ECI 2019 Lok Sabha result** page for Jaipur to `sources.loksabha_2019`.
- [ ] Attach the **BJP membership** press release / dated report from a named
      outlet to `sources.bjp_join_2023`.
- [ ] List each **31 Aug 2026 media report** individually (publisher + URL) in
      `data/news.ts` and `sources.media_candidate_2026`; label them “मीडिया रिपोर्ट”.
- [ ] Paste the **Ward 110 boundary description** verbatim from the latest JMC
      ward-delimitation notification into `WARD_110.boundaryDescriptionHi`; set
      `officialWardMapUrl`; add confirmed localities only.
- [ ] Add **municipal zone** for Ward 110 from the official zone list, or leave blank.
- [ ] Education/affidavit facts: attach the **ECI affidavit** or leave unpublished.
- [ ] Manifesto: replace the template card with **approved campaign material**;
      obtain candidate sign-off; set each commitment `status: 'published'`.
- [ ] Candidate’s message: add **approved text + approval date + document ref**;
      never fabricate a quotation or signature.
- [ ] Contact section: add only **campaign-approved** address / phone / email /
      WhatsApp / hours / official social links.
- [ ] Set every published record’s `verifiedAt`, `verifiedBy`, `lastReviewedAt`
      and flip `status` to `verified` / `published`.
- [ ] Re-check every external link resolves (`linkinator`).
- [ ] Record any post-launch factual fix in `data/sources.ts → CORRECTIONS`
      (surfaced on `/sources`).

## ✅ Image-rights checklist

- [ ] Every image is a **real, authorised photograph** — no AI likeness of the
      candidate, no other person shown as the candidate.
- [ ] Written **reuse permission** on file for each photo (campaign / verified
      social account / licensed press / government media whose terms allow reuse).
- [ ] No scraped or hotlinked news photos; all files downloaded into
      `/public/images`.
- [ ] EXIF / location metadata **stripped** (`exiftool -all= file.jpg`).
- [ ] Exported to **WebP / AVIF**; aspect ratio preserved (never stretched);
      candidate’s face never cropped — focal point set in `data/gallery.ts`.
- [ ] `width` / `height` set on every image (no layout shift); descriptive
      **Hindi alt text** written.
- [ ] Rights metadata complete in `data/gallery.ts` (title, filePath, altHi,
      photographer, copyrightOwner, sourceUrl, permissionStatus, captureDate,
      publicationDate) and `permissionStatus: "approved"` set.
- [ ] Unapproved slots left as the labelled placeholder — **no fake image**.
- [ ] `/image-credits` reviewed and accurate.
- [ ] Replace `app/opengraph-image.tsx` with a campaign-approved social card if a
      real one is supplied.

## ✅ Election-law compliance checklist

- [ ] Fill the **publisher declaration** in `data/content.ts → DISCLOSURES.electionLawHi`
      (campaign/publisher name, full address, hosting/printer if applicable, and
      the authorised person on whose instruction it is published).
- [ ] Confirm the **written authorisation** from the candidate / campaign team is
      on file before publishing.
- [ ] Ensure content complies with the **ECI Model Code of Conduct** and campaign
      publication rules; no appeals on the basis of caste/community/religion.
- [ ] No collection of political-opinion data without explicit lawful consent
      (the volunteer “updates” opt-in is separate and unchecked by default).
- [ ] Party symbol / colours used **only** with authorisation and while
      affiliation is officially verified.
- [ ] Expense / disclosure obligations for digital campaign material handled by
      the campaign’s compliance lead.
- [ ] `/privacy`, `/terms`, `/accessibility` reviewed by the campaign.

## ✅ Mobile testing checklist

Test at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440+ px, and at 200% text zoom.

- [ ] No horizontal scrolling at any width.
- [ ] No clipped or overlapping Hindi text; headings wrap cleanly.
- [ ] Sticky header does not overlap content; `scroll-mt` keeps anchors visible.
- [ ] All touch targets ≥ 44×44 px.
- [ ] Forms use full-width controls; error summary is reachable and links to fields.
- [ ] Cards stack; tables (`/sources`, `/image-credits`) scroll inside their own
      container.
- [ ] Hero keeps the candidate’s face in frame across breakpoints.
- [ ] Map: consent prompt fits; embed and text fallback both usable.
- [ ] Gallery images keep aspect ratio; lightbox fits the viewport; swipe works;
      keyboard (←/→/Esc) works; focus is trapped and restored.
- [ ] Mobile menu traps focus, closes on Esc, restores focus to the toggle.
- [ ] Sticky mobile CTA never hides the footer (`.has-sticky-cta` padding).
- [ ] `env(safe-area-inset-*)` respected on notched devices.
- [ ] `prefers-reduced-motion` honoured.

---

## License / usage

This codebase is a reusable template (currently a demo build). Content,
photographs and party identifiers remain the property of their respective owners
and may be used only with permission. Interface icons are from Lucide (ISC).
#   m y w a r d m y c i t y  
 