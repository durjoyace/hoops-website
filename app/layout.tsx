import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import DonationTicker from '@/components/DonationTicker'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hoopscreatinghope.org'),
  title: {
    default: 'Hoops Creating Hope — Basketball + Education for Underserved Youth in India',
    template: '%s | Hoops Creating Hope',
  },
  description: 'Empowering 2,500+ underserved youth in India through basketball, education, and mentorship. Join us in transforming lives from courts to careers with 85% high school retention and 60% girls participation.',
  keywords: ['basketball', 'education', 'India', 'nonprofit', 'youth development', 'charity', 'Hoops Creating Hope', 'Crossover'],
  authors: [{ name: 'Hoops Creating Hope' }],
  openGraph: {
    title: 'Hoops Creating Hope — Every Dribble Rewrites the Future',
    description: 'Empowering 2,500+ underserved youth in India through basketball, education, and mentorship.',
    url: 'https://hoopscreatinghope.org',
    siteName: 'Hoops Creating Hope',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoops Creating Hope — Every Dribble Rewrites the Future',
    description: 'Empowering 2,500+ underserved youth in India through basketball, education, and mentorship.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans antialiased">
        <LoadingScreen />
        <CustomCursor />
        <DonationTicker />
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
