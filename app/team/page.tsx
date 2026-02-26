import type { Metadata } from 'next'
import TeamClient from './TeamClient'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the Board of Directors and leadership team behind Hoops Creating Hope. Diverse expertise from education, technology, business, and social impact.',
  openGraph: {
    title: 'Our Team | Hoops Creating Hope',
    description: 'Meet the leaders guiding our mission to transform lives through basketball and education.',
  },
}

export default function TeamPage() {
  return <TeamClient />
}
