import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://globalgtmos.com'

  const routes = [
    '',
    '/onboarding',
    '/dashboard',
    '/dashboard/leads',
    '/dashboard/enrichment',
    '/dashboard/scoring',
    '/dashboard/workflows',
    '/dashboard/outreach',
    '/dashboard/pipeline',
    '/dashboard/templates',
    '/dashboard/intelligence',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
