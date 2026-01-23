import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hoopscreatinghope.org'

  const routes = [
    '',
    '/about',
    '/team',
    '/programs',
    '/impact',
    '/stories',
    '/volunteer',
    '/fundraise',
    '/partnerships',
    '/news',
    '/get-involved',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/about' || route === '/programs' ? 0.9 : 0.8,
  }))
}
