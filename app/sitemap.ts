import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : 'http://localhost:3000');
const routes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: siteUrl + (r === '/' ? '' : r), lastModified: new Date() }));
}
