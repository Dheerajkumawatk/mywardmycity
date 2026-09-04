import type { MetadataRoute } from 'next';
import { SITE } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const routes = ['', '/services', '/packages', '/demo', '/about', '/contact', '/privacy', '/terms'];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : path === '/privacy' || path === '/terms' ? 'yearly' : 'monthly',
    priority: path === '' ? 1 : path === '/privacy' || path === '/terms' ? 0.3 : 0.7,
  }));
}
