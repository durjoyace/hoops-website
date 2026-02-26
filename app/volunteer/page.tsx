import type { Metadata } from 'next'
import VolunteerClient from './VolunteerClient'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Share your skills and change lives. Join Hoops Creating Hope as a coach, mentor, content creator, or ambassador. Multiple volunteer opportunities available.',
  openGraph: {
    title: 'Volunteer | Hoops Creating Hope',
    description: 'Share your skills and change lives. Multiple volunteer opportunities from coaching to mentoring.',
  },
}

export default function VolunteerPage() {
  return <VolunteerClient />
}
