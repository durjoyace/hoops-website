'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Briefcase, Share2, GraduationCap, HandHeart, Calendar, Mail } from 'lucide-react'
import { images, siteConfig } from '@/lib/utils'

const ways = [
  {
    icon: Heart,
    title: 'Donate',
    description: '$500 supports one student for an entire year. 100% of donations go directly to programs.',
    cta: 'Give Now',
    href: siteConfig.donateUrl,
    external: true,
    highlight: true,
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join us as a coach, mentor, or program support volunteer. Make a direct impact on students\' lives.',
    cta: 'Learn More',
    href: '/volunteer',
  },
  {
    icon: Briefcase,
    title: 'Partner',
    description: 'Corporate partnerships and sponsorships help us expand our reach and deepen our impact.',
    cta: 'Partner With Us',
    href: `mailto:${siteConfig.email}?subject=Partnership%20Inquiry`,
    external: true,
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    description: 'Share our story on social media, host an awareness event, or connect us with your network.',
    cta: 'Share Our Story',
    href: siteConfig.socialLinks.instagram,
    external: true,
  },
]

const impactLevels = [
  { amount: '$50', impact: 'Provides basketball equipment for one student' },
  { amount: '$100', impact: 'Covers academic supplies for a semester' },
  { amount: '$250', impact: 'Funds a month of coaching and mentorship' },
  { amount: '$500', impact: 'Supports one student for an entire year' },
  { amount: '$1,000', impact: 'Sponsors a local coaches training clinic' },
  { amount: '$5,000', impact: 'Funds a new court renovation project' },
]

export default function GetInvolvedClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.15),transparent_50%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-8"
          >
            JOIN THE MOVEMENT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
          >
            Make Your
            <br />
            Impact Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto"
          >
            Every action—big or small—helps transform lives. Here&apos;s how you can be part of our mission.
          </motion.p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Ways to Get Involved</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Choose the way that works best for you. Every contribution matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ways.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`rounded-3xl p-8 text-center card-glow ${
                  way.highlight
                    ? 'bg-gradient-to-br from-orange-primary/30 to-orange-light/10 border-2 border-orange-primary'
                    : 'glass'
                }`}
              >
                <way.icon className="w-14 h-14 text-orange-primary mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">{way.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">{way.description}</p>
                {way.external ? (
                  <a
                    href={way.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-orange-primary hover:bg-orange-hover text-white font-bold rounded-full transition-colors"
                  >
                    {way.cta}
                  </a>
                ) : (
                  <Link
                    href={way.href}
                    className="inline-block px-8 py-3 bg-orange-primary hover:bg-orange-hover text-white font-bold rounded-full transition-colors"
                  >
                    {way.cta}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section id="donate" className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              YOUR IMPACT
            </span>
            <h2 className="section-title mb-6">See What Your Donation Does</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              100% of donations go directly to programs that transform lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactLevels.map((level, index) => (
              <motion.div
                key={level.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="font-display text-4xl gradient-text flex-shrink-0 w-24">
                  {level.amount}
                </div>
                <p className="text-white/70">{level.impact}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-orange-primary hover:bg-orange-hover text-white font-bold text-lg rounded-2xl transition-colors"
            >
              <Heart className="w-6 h-6" />
              Make Your Donation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fundraise Section */}
      <section id="fundraise" className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                START A FUNDRAISER
              </span>
              <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">
                Rally Your Community
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Create your own fundraising campaign for a birthday, marathon, or special occasion.
                We&apos;ll provide all the tools and support you need to make an impact.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Set up your personal fundraising page in minutes',
                  'Share with friends, family, and social networks',
                  'Track your progress and celebrate milestones',
                  'Receive recognition and updates on your impact',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-primary rounded-full" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${siteConfig.email}?subject=Start%20a%20Fundraiser`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-primary hover:bg-orange-hover text-white font-bold rounded-2xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Us to Start
              </a>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src={images.teamGathering}
                  alt="Community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-primary to-purple-accent rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Join thousands of supporters who are transforming lives through basketball.
          </p>
          <motion.a
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl"
          >
            <Heart className="w-6 h-6" />
            Start Now
          </motion.a>
        </div>
      </section>
    </>
  )
}
