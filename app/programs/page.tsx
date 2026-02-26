import type { Metadata } from 'next'
import ProgramsClient from './ProgramsClient'

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Crossover Courts to Careers and Scholars Program — year-round basketball programs combined with academic support and mentorship across Chennai, Bangalore, and Hyderabad.',
  openGraph: {
    title: 'Our Programs | Hoops Creating Hope',
    description: 'Year-round basketball programs combined with academic support and mentorship transforming lives in India.',
  },
}

export default function ProgramsPage() {
  return <ProgramsClient />
}
