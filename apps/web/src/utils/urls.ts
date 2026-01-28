import { contact } from '../config/contact';

export const ensureTrailingSlash = (path: string): string => {
  if (!path.endsWith('/')) {
    return `${path}/`;
  }
  return path;
};

export const withTrailingSlash = (path: string): string => {
  if (!path.startsWith('/')) {
    return ensureTrailingSlash(`/${path}`);
  }
  return ensureTrailingSlash(path);
};

export const getSiteUrl = (): string => {
  return import.meta.env.PUBLIC_SITE_URL ?? contact.siteUrl;
};

export const buildCanonical = (path: string): string => {
  return new URL(ensureTrailingSlash(path), getSiteUrl()).toString();
};
