import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import SmoothScroll from '@/components/SmoothScroll'

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
  icons: {
    icon: '/images/hoops-creating-hope.png',
    apple: '/images/hoops-creating-hope.png',
  },
  manifest: '/manifest.json',
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
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'Hoops Creating Hope',
  alternateName: 'Crossover Basketball',
  url: 'https://hoopscreatinghope.org',
  logo: 'https://hoopscreatinghope.org/images/hoops-creating-hope.png',
  description: 'Empowering 2,500+ underserved youth in India through basketball, education, and mentorship.',
  foundingDate: '2010',
  email: 'info@hoopscreatinghope.org',
  nonprofitStatus: '501(c)(3)',
  sameAs: [
    'https://www.instagram.com/hoopscreatinghope/',
    'https://www.facebook.com/CrossoverBasketball.India/',
    'https://www.linkedin.com/company/hoops-creating-hope/',
  ],
  areaServed: [
    { '@type': 'City', name: 'Chennai', addressCountry: 'IN' },
    { '@type': 'City', name: 'Bangalore', addressCountry: 'IN' },
    { '@type': 'City', name: 'Hyderabad', addressCountry: 'IN' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-white font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-6 focus:py-3 focus:bg-orange-primary focus:text-black focus:font-bold focus:rounded-full focus:outline-none"
        >
          Skip to main content
        </a>
        <LoadingScreen />
        <SmoothScroll>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
