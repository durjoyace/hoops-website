import type { Metadata } from 'next'
import StoriesClient from './StoriesClient'

export const metadata: Metadata = {
  title: 'Student Stories',
  description: 'Meet the students whose lives have been transformed through basketball at Hoops Creating Hope. Real stories of hope, resilience, and achievement.',
  openGraph: {
    title: 'Student Stories | Hoops Creating Hope',
    description: 'Real stories of hope, resilience, and achievement from our students in India.',
  },
}

export default function StoriesPage() {
  return <StoriesClient />
}
