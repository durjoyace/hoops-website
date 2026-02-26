import type { Metadata } from 'next'
import GetInvolvedClient from './GetInvolvedClient'

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Make your impact today. Donate, volunteer, partner, or start a fundraiser for Hoops Creating Hope. $500 supports one student for an entire year.',
  openGraph: {
    title: 'Get Involved | Hoops Creating Hope',
    description: 'Donate, volunteer, partner, or fundraise. Every contribution helps transform lives through basketball.',
  },
}

export default function GetInvolvedPage() {
  return <GetInvolvedClient />
}
