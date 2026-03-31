# KeyHive

KeyHive public-site code mirror and future parity surface.

## Role In KeyHive Labs

This repo is not the live production deployment path today.

Current reality:
- public site: `https://www.keyhivelocksmith.com`
- live edit path: Wix Vibe + Wix dashboard + OpenClaw `web`
- this repo: Astro/Tailwind code mirror and future migration/parity surface

In the KeyHive Labs architecture, the public site is the:
- acquisition layer
- trust layer
- answer-engine surface
- conversion surface

Customer-facing doctrine rule:

- this repo and the live site should only consume approved public doctrine, approved public copy,
  and approved business facts

Sauron remains the intelligence/doctrine brain.
KeyHiveOps remains the operating backbone.
Tom remains the mission-control/backoffice surface.

## Commands

All commands run from the repo root:

```sh
pnpm -C apps/web dev
pnpm -C apps/web lint
PUBLIC_SITE_URL=https://keyhivelocksmith.com pnpm -C apps/web build
```
