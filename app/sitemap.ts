import { MetadataRoute } from 'next'
import { newsArticles } from '@/lib/news-data'

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
    '/contact',
    '/privacy',
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : route === '/about' || route === '/programs' ? 0.9 : 0.8,
  }))

  const newsPages = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...newsPages]
}
