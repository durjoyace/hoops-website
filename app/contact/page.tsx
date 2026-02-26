import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Hoops Creating Hope. Whether you want to donate, volunteer, partner, or just say hello — we would love to hear from you.',
  openGraph: {
    title: 'Contact Us | Hoops Creating Hope',
    description: 'Get in touch with Hoops Creating Hope. We would love to hear from you.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
