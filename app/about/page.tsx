import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Founded in 2010, Hoops Creating Hope has proven that basketball can keep kids in school. With 85% high school completion vs 16% national average, our theory works.',
  openGraph: {
    title: 'Our Story | Hoops Creating Hope',
    description: 'Founded in 2010, Hoops Creating Hope has proven that basketball can keep kids in school. 85% high school completion rate.',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
