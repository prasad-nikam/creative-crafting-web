# Creative Crafting — Digital Growth & Technology Studio

A cinematic, media-led company landing page built with Next.js App Router, TypeScript, Tailwind CSS v4 and Motion.

## Requirements
- Node.js 20.9+
- pnpm 9+

## Run locally
```bash
pnpm install
cp .env.example .env.local
pnpm dev
```
Open http://localhost:3000.

## Project structure
- `src/app`: App Router entry points, global Tailwind theme, metadata, sitemap and robots
- `src/components/layout`: shared header, footer, navigation and floating contact action
- `src/components/sections`: isolated homepage sections
- `src/components/ui`: reusable brand mark, buttons, container and section eyebrow
- `src/data`: typed service, audience, process and portfolio content
- `src/lib`: site configuration and contact URL helpers
- `src/types`: shared domain types
- `public`: local brand and media assets

## Before publishing
1. Set `NEXT_PUBLIC_SITE_URL` to the actual canonical domain.
2. Verify the company phone and WhatsApp number.
3. Replace illustrative portfolio items and remote stock imagery with approved, licensed Creative Crafting assets.
4. Verify all public-facing company metrics before publishing or remove any unverified figures.
5. Add a production Open Graph image at `public/og-cover.jpg` (1200 × 630) and update metadata in `src/app/layout.tsx` if using a static image instead of the generated OG route.
6. Add real social profile links and company address only after confirming them.

## SEO
The app includes server-rendered semantic content, title and description metadata, canonical URL, Open Graph and Twitter metadata, Organization and WebSite JSON-LD, `robots.ts`, and `sitemap.ts`.

Portfolio entries are explicitly described as illustrative capability examples, not verified client case studies.
