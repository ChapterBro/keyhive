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
