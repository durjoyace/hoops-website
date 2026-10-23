import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    // Don't block /_next/: search engines need its JS/CSS to render the site.
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://hoopscreatinghope.org/sitemap.xml',
  }
}
