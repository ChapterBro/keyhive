import type { APIRoute } from 'astro';
import { services } from '../content/services';
import { serviceAreas } from '../content/service_areas';
import { guides } from '../content/guides';
import { ensureTrailingSlash, getSiteUrl } from '../utils/urls';

const staticPages = [
  '/',
  '/services/',
  '/areas/',
  '/guides/',
  '/locksmith-near-me/',
  '/about/',
  '/contact/',
  '/privacy-policy/'
];

export const GET: APIRoute = async () => {
  const siteUrl = getSiteUrl();
  const dynamicPages = [
    ...services.map((service) => `/services/${service.slug}/`),
    ...serviceAreas.map((area) => `/areas/${area.slug}/`),
    ...guides.map((guide) => `/guides/${guide.slug}/`)
  ];

  const allPages = [...staticPages, ...dynamicPages].map((path) =>
    new URL(ensureTrailingSlash(path), siteUrl).toString()
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    allPages.map((url) => `<url><loc>${url}</loc></url>`).join('') +
    `</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
