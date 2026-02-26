import type { Metadata } from 'next'
import NewsClient from './NewsClient'

export const metadata: Metadata = {
  title: 'News & Stories',
  description: 'Latest news, impact stories, and updates from Hoops Creating Hope. Follow our journey transforming lives through basketball in India.',
  openGraph: {
    title: 'News & Stories | Hoops Creating Hope',
    description: 'Latest updates from Hoops Creating Hope — basketball, education, and impact in India.',
  },
}

export default function NewsPage() {
  return <NewsClient />
}
