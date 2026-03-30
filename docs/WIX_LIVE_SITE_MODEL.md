# Wix Live Site Model

## Purpose
Clarify how this repo relates to the current KeyHive production website so future work does not mix
up:

- the live Wix/Vibe production path
- the GitHub code repo
- the ops documentation and handoff repo

## Current Production Reality

- Public site: `https://www.keyhivelocksmith.com`
- Current live edit path:
  - Wix Vibe editor
  - Wix dashboard / CMS / SEO panels
  - OpenClaw managed `web` browser profile for automation and verification
- Current ops / handoff repo:
  - `ChapterBro/KeyHiveOps`

This repo, `ChapterBro/keyhive`, is not the current production deployment path.

Treat it as:

- the Astro + Tailwind code mirror
- a manual-sync representation of the site
- a future migration or parity target
- a safe place to capture code-side equivalents of live Wix behavior

Do not treat it as:

- the active deploy source for the Wix production site
- proof that production changed just because a local build passed
- authoritative truth when it disagrees with the rendered live site

## Repo vs Live-Site Rule

If this repo and the live Wix site disagree:

1. the rendered live Wix site wins for current production truth
2. the gap should be documented
3. the repo can then be manually synced if parity is desired

## Where Live Wix Changes Usually Map In This Repo

- homepage:
  - `apps/web/src/pages/index.astro`
- sticky mobile CTA behavior:
  - `apps/web/src/components/StickyCta.astro`
  - `apps/web/src/styles/global.css`
- service pages:
  - `apps/web/src/content/services.ts`
  - `apps/web/src/pages/services/[slug].astro`
- service-area pages:
  - `apps/web/src/content/service_areas.ts`
  - `apps/web/src/pages/areas/[slug].astro`
- guides / learn-style content:
  - `apps/web/src/content/guides.ts`
  - `apps/web/src/pages/guides/[slug].astro`
- sitemap behavior:
  - `apps/web/src/pages/sitemap.xml.ts`

## Safe Workflow For Future Codex Sessions

1. Check the rendered live site first.
2. Read the latest KeyHiveOps runbooks and handoffs.
3. If the task is a live production change, prefer Wix/Vibe and dashboard edits.
4. If repo parity is needed, port the confirmed live behavior into this repo intentionally.
5. Run local verification:

```bash
pnpm -C apps/web lint
PUBLIC_SITE_URL=https://keyhivelocksmith.com pnpm -C apps/web build
```

6. Record whether this repo now matches production or still lags it.

## Known March 30, 2026 Gap

As of the March 26-30 Wix execution window, the live Wix site may be ahead of this repo on:

- the emergency locksmith page rebuild
- the latest mobile/iPhone CTA spacing refinements
- the customer-facing cleanup on automotive-biased area pages
- current sitemap/indexability issues discovered on the live Wix runtime

That gap is expected until a manual sync is performed.
