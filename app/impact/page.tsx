import type { Metadata } from 'next'
import ImpactClient from './ImpactClient'

export const metadata: Metadata = {
  title: 'Our Impact',
  description: '85% high school completion rate vs 16% national average. 2,500+ students impacted across Chennai, Bangalore, and Hyderabad. Data-driven impact, measurable change.',
  openGraph: {
    title: 'Our Impact | Hoops Creating Hope',
    description: '85% high school completion rate. 2,500+ students impacted. Data-driven impact through basketball and education.',
  },
}

export default function ImpactPage() {
  return <ImpactClient />
}
