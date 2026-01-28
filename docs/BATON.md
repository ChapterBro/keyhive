# BATON Log

## 2026-01-28
- Initialized KeyHive monorepo with `apps/web` Astro + Tailwind site and `docs/` log structure.
- Added brand/contact config, services/service areas/guides content sources, dynamic detail pages, sitemap, SEO/canonical tooling, JSON-LD, optional GA, and mobile sticky call CTA.
- Commands run:

```bash
pnpm -C apps/web lint
```
```text
> apps-web@0.0.1 lint /Users/hushdesk/dev/keyhive/apps/web
> astro check

18:33:35 [content] Syncing content
18:33:35 [content] Synced content
18:33:35 [types] Generated 19ms
18:33:35 [check] Getting diagnostics for Astro files in /Users/hushdesk/dev/keyhive/apps/web...
Result (26 files): 
- 0 errors
- 0 warnings
- 0 hints
```

```bash
PUBLIC_SITE_URL=https://keyhivelocksmith.com pnpm -C apps/web build
```
```text
> apps-web@0.0.1 build /Users/hushdesk/dev/keyhive/apps/web
> astro build

18:33:40 [content] Syncing content
18:33:40 [content] Synced content
18:33:40 [types] Generated 12ms
18:33:40 [build] output: "static"
18:33:40 [build] mode: "static"
18:33:40 [build] directory: /Users/hushdesk/dev/keyhive/apps/web/dist/
18:33:40 [build] Collecting build info...
18:33:40 [build] OK Completed in 17ms.
18:33:40 [build] Building static entrypoints...
18:33:40 [vite] OK built in 352ms
18:33:40 [build] OK Completed in 366ms.

 generating static routes 
18:33:40 > src/pages/about/index.astro
18:33:40   - /about/index.html (+3ms) 
18:33:40 > src/pages/areas/[slug].astro
18:33:40   - /areas/kansas-city-ks/index.html (+1ms) 
18:33:40   - /areas/bonner-springs/index.html (+1ms) 
18:33:40   - /areas/basehor/index.html (+1ms) 
18:33:40   - /areas/lansing/index.html (+1ms) 
18:33:40   - /areas/leavenworth/index.html (+1ms) 
18:33:40   - /areas/tonganoxie/index.html (+0ms) 
18:33:40   - /areas/overland-park/index.html (+0ms) 
18:33:40   - /areas/olathe/index.html (+0ms) 
18:33:40   - /areas/lenexa/index.html (+0ms) 
18:33:40   - /areas/shawnee/index.html (+0ms) 
18:33:40   - /areas/mission/index.html (+0ms) 
18:33:40   - /areas/merriam/index.html (+0ms) 
18:33:40   - /areas/leawood/index.html (+0ms) 
18:33:40   - /areas/prairie-village/index.html (+0ms) 
18:33:40   - /areas/wyandotte-county/index.html (+0ms) 
18:33:40   - /areas/johnson-county/index.html (+0ms) 
18:33:40   - /areas/leavenworth-county/index.html (+0ms) 
18:33:40 > src/pages/areas/index.astro
18:33:40   - /areas/index.html (+0ms) 
18:33:40 > src/pages/contact/index.astro
18:33:40   - /contact/index.html (+0ms) 
18:33:40 > src/pages/guides/[slug].astro
18:33:40   - /guides/home-lockout-steps/index.html (+0ms) 
18:33:40   - /guides/rekey-vs-replace/index.html (+0ms) 
18:33:40   - /guides/car-key-programming-basics/index.html (+0ms) 
18:33:40 > src/pages/guides/index.astro
18:33:40   - /guides/index.html (+0ms) 
18:33:40 > src/pages/locksmith-near-me/index.astro
18:33:40   - /locksmith-near-me/index.html (+0ms) 
18:33:40 > src/pages/privacy-policy/index.astro
18:33:40   - /privacy-policy/index.html (+0ms) 
18:33:40 > src/pages/services/[slug].astro
18:33:40   - /services/emergency-locksmith/index.html (+1ms) 
18:33:40   - /services/residential-locksmith/index.html (+0ms) 
18:33:40   - /services/residential-lockout/index.html (+0ms) 
18:33:40   - /services/lock-repair/index.html (+0ms) 
18:33:40   - /services/lock-installation/index.html (+0ms) 
18:33:40   - /services/rekeying-services/index.html (+0ms) 
18:33:40   - /services/commercial-locksmith/index.html (+0ms) 
18:33:40   - /services/commercial-lockout/index.html (+0ms) 
18:33:40   - /services/automotive-locksmith/index.html (+0ms) 
18:33:40   - /services/car-lockout/index.html (+0ms) 
18:33:40   - /services/car-key-programming/index.html (+0ms) 
18:33:40 > src/pages/services/index.astro
18:33:40   - /services/index.html (+0ms) 
18:33:40 > src/pages/sitemap.xml.ts
18:33:40   - /sitemap.xml (+0ms) 
18:33:40 > src/pages/index.astro
18:33:40   - /index.html (+0ms) 
18:33:40 OK Completed in 28ms.

18:33:40 [build] 39 page(s) built in 420ms
18:33:40 [build] Complete!
```

## 2026-01-28
- QA hardening pass for crawlability, schema consistency, internal links, performance basics, and contact leak checks.
- Added unique blurbs for remaining service areas to reduce doorway risk; added explicit logo dimensions + async decoding to reduce CLS.
- Commands run:

```bash
pnpm -C apps/web lint
```
```text
> apps-web@0.0.1 lint /Users/hushdesk/dev/keyhive/apps/web
> astro check

18:42:13 [content] Syncing content
18:42:13 [content] Synced content
18:42:13 [types] Generated 19ms
18:42:13 [check] Getting diagnostics for Astro files in /Users/hushdesk/dev/keyhive/apps/web...
Result (26 files): 
- 0 errors
- 0 warnings
- 0 hints
```

```bash
PUBLIC_SITE_URL=https://keyhivelocksmith.com pnpm -C apps/web build
```
```text
> apps-web@0.0.1 build /Users/hushdesk/dev/keyhive/apps/web
> astro build

18:42:17 [content] Syncing content
18:42:17 [content] Synced content
18:42:17 [types] Generated 11ms
18:42:17 [build] output: "static"
18:42:17 [build] mode: "static"
18:42:17 [build] directory: /Users/hushdesk/dev/keyhive/apps/web/dist/
18:42:17 [build] Collecting build info...
18:42:17 [build] ✓ Completed in 17ms.
18:42:17 [build] Building static entrypoints...
18:42:17 [vite] ✓ built in 348ms
18:42:17 [build] ✓ Completed in 362ms.

 generating static routes 
18:42:17 ▶ src/pages/about/index.astro
18:42:17   └─ /about/index.html (+3ms) 
18:42:17 ▶ src/pages/areas/[slug].astro
18:42:17   ├─ /areas/kansas-city-ks/index.html (+1ms) 
18:42:17   ├─ /areas/bonner-springs/index.html (+1ms) 
18:42:17   ├─ /areas/basehor/index.html (+1ms) 
18:42:17   ├─ /areas/lansing/index.html (+1ms) 
18:42:17   ├─ /areas/leavenworth/index.html (+0ms) 
18:42:17   ├─ /areas/tonganoxie/index.html (+0ms) 
18:42:17   ├─ /areas/overland-park/index.html (+0ms) 
18:42:17   ├─ /areas/olathe/index.html (+1ms) 
18:42:17   ├─ /areas/lenexa/index.html (+1ms) 
18:42:17   ├─ /areas/shawnee/index.html (+0ms) 
18:42:17   ├─ /areas/mission/index.html (+0ms) 
18:42:17   ├─ /areas/merriam/index.html (+0ms) 
18:42:17   ├─ /areas/leawood/index.html (+0ms) 
18:42:17   ├─ /areas/prairie-village/index.html (+0ms) 
18:42:17   ├─ /areas/wyandotte-county/index.html (+0ms) 
18:42:17   ├─ /areas/johnson-county/index.html (+0ms) 
18:42:17   └─ /areas/leavenworth-county/index.html (+0ms) 
18:42:17 ▶ src/pages/areas/index.astro
18:42:17   └─ /areas/index.html (+0ms) 
18:42:17 ▶ src/pages/contact/index.astro
18:42:17   └─ /contact/index.html (+0ms) 
18:42:17 ▶ src/pages/guides/[slug].astro
18:42:17   ├─ /guides/home-lockout-steps/index.html (+0ms) 
18:42:17   ├─ /guides/rekey-vs-replace/index.html (+0ms) 
18:42:17   └─ /guides/car-key-programming-basics/index.html (+0ms) 
18:42:17 ▶ src/pages/guides/index.astro
18:42:17   └─ /guides/index.html (+0ms) 
18:42:17 ▶ src/pages/locksmith-near-me/index.astro
18:42:17   └─ /locksmith-near-me/index.html (+0ms) 
18:42:17 ▶ src/pages/privacy-policy/index.astro
18:42:17   └─ /privacy-policy/index.html (+0ms) 
18:42:17 ▶ src/pages/services/[slug].astro
18:42:17   ├─ /services/emergency-locksmith/index.html (+1ms) 
18:42:17   ├─ /services/residential-locksmith/index.html (+0ms) 
18:42:17   ├─ /services/residential-lockout/index.html (+0ms) 
18:42:17   ├─ /services/lock-repair/index.html (+0ms) 
18:42:17   ├─ /services/lock-installation/index.html (+0ms) 
18:42:17   ├─ /services/rekeying-services/index.html (+0ms) 
18:42:17   ├─ /services/commercial-locksmith/index.html (+0ms) 
18:42:17   ├─ /services/commercial-lockout/index.html (+0ms) 
18:42:17   ├─ /services/automotive-locksmith/index.html (+0ms) 
18:42:17   ├─ /services/car-lockout/index.html (+0ms) 
18:42:17   └─ /services/car-key-programming/index.html (+0ms) 
18:42:17 ▶ src/pages/services/index.astro
18:42:17   └─ /services/index.html (+0ms) 
18:42:17 λ src/pages/sitemap.xml.ts
18:42:17   └─ /sitemap.xml (+0ms) 
18:42:17 ▶ src/pages/index.astro
18:42:17   └─ /index.html (+0ms) 
18:42:17 ✓ Completed in 30ms.

18:42:17 [build] 39 page(s) built in 417ms
18:42:17 [build] Complete!
```

## 2026-01-28
- Upgraded services catalog copy for core services and updated residential/commercial lockout messaging.
- Added new service entries to expand the catalog with additional service pages.
- Commands run:

```bash
pnpm -C apps/web lint
```
```text
> apps-web@0.0.1 lint /Users/hushdesk/dev/keyhive/apps/web
> astro check

19:08:58 [vite] Re-optimizing dependencies because vite config has changed
19:08:58 [content] Syncing content
19:08:58 [content] Synced content
19:08:58 [types] Generated 54ms
19:08:58 [check] Getting diagnostics for Astro files in /Users/hushdesk/dev/keyhive/apps/web...
Result (26 files): 
- 0 errors
- 0 warnings
- 0 hints
```

```bash
PUBLIC_SITE_URL=https://keyhivelocksmith.com pnpm -C apps/web build
```
```text
> apps-web@0.0.1 build /Users/hushdesk/dev/keyhive/apps/web
> astro build

19:09:03 [content] Syncing content
19:09:03 [content] Synced content
19:09:03 [types] Generated 11ms
19:09:03 [build] output: "static"
19:09:03 [build] mode: "static"
19:09:03 [build] directory: /Users/hushdesk/dev/keyhive/apps/web/dist/
19:09:03 [build] Collecting build info...
19:09:03 [build] ✓ Completed in 17ms.
19:09:03 [build] Building static entrypoints...
19:09:04 [vite] ✓ built in 361ms
19:09:04 [build] ✓ Completed in 376ms.

 generating static routes 
19:09:04 ▶ src/pages/about/index.astro
19:09:04   └─ /about/index.html (+3ms) 
19:09:04 ▶ src/pages/areas/[slug].astro
19:09:04   ├─ /areas/kansas-city-ks/index.html (+1ms) 
19:09:04   ├─ /areas/bonner-springs/index.html (+1ms) 
19:09:04   ├─ /areas/basehor/index.html (+1ms) 
19:09:04   ├─ /areas/lansing/index.html (+1ms) 
19:09:04   ├─ /areas/leavenworth/index.html (+1ms) 
19:09:04   ├─ /areas/tonganoxie/index.html (+0ms) 
19:09:04   ├─ /areas/overland-park/index.html (+0ms) 
19:09:04   ├─ /areas/olathe/index.html (+0ms) 
19:09:04   ├─ /areas/lenexa/index.html (+0ms) 
19:09:04   ├─ /areas/shawnee/index.html (+0ms) 
19:09:04   ├─ /areas/mission/index.html (+0ms) 
19:09:04   ├─ /areas/merriam/index.html (+0ms) 
19:09:04   ├─ /areas/leawood/index.html (+0ms) 
19:09:04   ├─ /areas/prairie-village/index.html (+0ms) 
19:09:04   ├─ /areas/wyandotte-county/index.html (+0ms) 
19:09:04   ├─ /areas/johnson-county/index.html (+0ms) 
19:09:04   └─ /areas/leavenworth-county/index.html (+0ms) 
19:09:04 ▶ src/pages/areas/index.astro
19:09:04   └─ /areas/index.html (+0ms) 
19:09:04 ▶ src/pages/contact/index.astro
19:09:04   └─ /contact/index.html (+0ms) 
19:09:04 ▶ src/pages/guides/[slug].astro
19:09:04   ├─ /guides/home-lockout-steps/index.html (+0ms) 
19:09:04   ├─ /guides/rekey-vs-replace/index.html (+0ms) 
19:09:04   └─ /guides/car-key-programming-basics/index.html (+0ms) 
19:09:04 ▶ src/pages/guides/index.astro
19:09:04   └─ /guides/index.html (+0ms) 
19:09:04 ▶ src/pages/locksmith-near-me/index.astro
19:09:04   └─ /locksmith-near-me/index.html (+0ms) 
19:09:04 ▶ src/pages/privacy-policy/index.astro
19:09:04   └─ /privacy-policy/index.html (+0ms) 
19:09:04 ▶ src/pages/services/[slug].astro
19:09:04   ├─ /services/emergency-locksmith/index.html (+1ms) 
19:09:04   ├─ /services/residential-locksmith/index.html (+0ms) 
19:09:04   ├─ /services/residential-lockout/index.html (+0ms) 
19:09:04   ├─ /services/lock-repair/index.html (+0ms) 
19:09:04   ├─ /services/lock-installation/index.html (+0ms) 
19:09:04   ├─ /services/rekeying-services/index.html (+0ms) 
19:09:04   ├─ /services/commercial-locksmith/index.html (+0ms) 
19:09:04   ├─ /services/commercial-lockout/index.html (+0ms) 
19:09:04   ├─ /services/automotive-locksmith/index.html (+0ms) 
19:09:04   ├─ /services/car-lockout/index.html (+0ms) 
19:09:04   ├─ /services/car-key-programming/index.html (+0ms) 
19:09:04   ├─ /services/high-security-lock-installation/index.html (+0ms) 
19:09:04   ├─ /services/garage-door-lock-service/index.html (+0ms) 
19:09:04   ├─ /services/home-lockout-prevention/index.html (+0ms) 
19:09:04   ├─ /services/smart-lock-installation/index.html (+0ms) 
19:09:04   ├─ /services/home-security-improvements/index.html (+0ms) 
19:09:04   ├─ /services/broken-key-removal/index.html (+0ms) 
19:09:04   ├─ /services/sliding-door-window-lock-service/index.html (+0ms) 
19:09:04   ├─ /services/residential-safe-opening/index.html (+0ms) 
19:09:04   └─ /services/master-key-systems/index.html (+0ms) 
19:09:04 ▶ src/pages/services/index.astro
19:09:04   └─ /services/index.html (+0ms) 
19:09:04 λ src/pages/sitemap.xml.ts
19:09:04   └─ /sitemap.xml (+0ms) 
19:09:04 ▶ src/pages/index.astro
19:09:04   └─ /index.html (+0ms) 
19:09:04 ✓ Completed in 32ms.

19:09:04 [build] 48 page(s) built in 435ms
19:09:04 [build] Complete!
```

## 2026-01-28
- Removed garage door lock service from the services catalog per updated scope.
