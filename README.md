# Creative Crafting — Digital Growth & Technology Studio

A cinematic, media-led, responsive company landing page built with Next.js App Router, TypeScript, Tailwind CSS v4 and Motion.

## Run locally

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000.

## Before publishing

- Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL.
- Verify the company phone and WhatsApp number in `.env.local`.
- Replace illustrative portfolio entries and remote demo imagery with approved company work and licensed assets.
- Add the real company address, social profile URLs and verified business claims if they should appear publicly.
- Replace the generated social preview in `src/app/opengraph-image.tsx` with approved brand artwork if desired.
- Confirm privacy policy and terms URLs if these pages are added.

## SEO included

- Server-rendered App Router page and semantic landmarks
- Title template, description, canonical URL, Open Graph and Twitter metadata
- Organization and WebSite JSON-LD
- `robots.ts` and `sitemap.ts`
- Descriptive headings, link labels and image alt text

The sample projects are framed as capability examples, not verified client case studies. Replace them with real approved portfolio items before launch.
