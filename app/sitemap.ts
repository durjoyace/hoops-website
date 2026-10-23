import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/data/blog-posts'

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

  // Must match the posts the /news/[slug] route actually renders (blogPosts),
  // otherwise the sitemap advertises URLs that 404.
  const newsPages = blogPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...newsPages]
}
