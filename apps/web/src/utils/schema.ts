import { brand } from '../config/brand';
import { contact } from '../config/contact';
import { buildCanonical, getSiteUrl } from './urls';

export const createLocalBusinessSchema = (canonicalPath: string) => {
  const siteUrl = getSiteUrl();
  const logoUrl = new URL(brand.logoPath, siteUrl).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: brand.name,
    url: buildCanonical(canonicalPath),
    telephone: contact.phoneE164,
    areaServed: contact.serviceAreas,
    priceRange: contact.priceRange,
    image: logoUrl,
    logo: logoUrl,
    openingHours: 'Mo-Su 00:00-23:59'
  };
};
