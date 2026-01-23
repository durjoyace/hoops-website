'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Building2, Users, Trophy, Sparkles, Mail, ExternalLink, CheckCircle } from 'lucide-react'
import { images, siteConfig } from '@/lib/utils'

const sponsorshipLevels = [
  {
    title: 'School Champion',
    amount: '$25,000',
    description: 'Full-year program for entire school',
    icon: Building2,
    color: 'from-orange-primary to-orange-light',
    featured: true,
  },
  {
    title: 'Team Builder',
    amount: '$10,000',
    description: 'Equip and support one team for a year',
    icon: Users,
    color: 'from-purple-accent to-pink-500',
    featured: false,
  },
  {
    title: 'Court Creator',
    amount: '$5,000',
    description: 'Build/renovate basketball facilities',
    icon: Trophy,
    color: 'from-orange-light to-purple-accent',
    featured: false,
  },
  {
    title: 'Custom Partnership',
    amount: 'Contact Us',
    description: "Let's design something unique",
    icon: Sparkles,
    color: 'from-pink-500 to-orange-primary',
    featured: false,
  },
]

const sponsorshipIncludes = [
  'Brand recognition on jerseys and court signage',
  'Naming opportunities for programs or facilities',
  'Detailed impact reporting with photos and videos',
  'Site visits to see your investment in action',
  'Direct communication with program leaders',
  'Tax-deductible contribution (501c3)',
]

const individualOptions = [
  {
    amount: '$50',
    impact: 'Sponsors a student for one month',
  },
  {
    amount: '$500',
    impact: 'Sponsors a student for a full year',
  },
  {
    amount: '$1,000',
    impact: 'Provides equipment for an entire team',
  },
  {
    amount: '$2,500',
    impact: 'Funds a scholarship for a graduating student',
  },
]

export default function FundraisePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-8"
          >
            INVEST IN FUTURES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
          >
            Fund the Future
            <br />
            of 2,500+ Students
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto mb-10"
          >
            Your donation keeps students in school, on the court, and on track for success.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl hover:bg-dark-200 transition-colors"
          >
            <Heart className="w-6 h-6" />
            Donate Now
          </motion.a>
        </div>
      </section>

      {/* Sponsor a School or Team */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              CORPORATE SPONSORSHIP
            </span>
            <h2 className="section-title mb-6">Sponsor a School or Team</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Corporate sponsors and major donors can transform entire communities by funding a full school program, team, or facility. Your investment creates systemic change—bringing basketball, tutoring, mentorship, and hope to hundreds of students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {sponsorshipLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass rounded-3xl p-8 text-center card-glow ${
                  level.featured ? 'border-2 border-orange-primary' : ''
                }`}
              >
                {level.featured && (
                  <span className="inline-block px-3 py-1 bg-orange-primary text-black text-xs font-bold rounded-full mb-4">
                    MOST IMPACT
                  </span>
                )}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center mx-auto mb-6`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-2">{level.title}</h3>
                <div className="font-display text-4xl gradient-text mb-4">{level.amount}</div>
                <p className="text-white/60">{level.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Sponsorship Includes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-orange-primary text-center mb-8">
              Sponsorship Includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sponsorshipIncludes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-primary flex-shrink-0" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={`mailto:${siteConfig.email}?subject=Corporate%20Sponsorship%20Inquiry`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-primary hover:bg-orange-hover text-white font-bold rounded-2xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Us About Sponsorship
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Giving */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              INDIVIDUAL GIVING
            </span>
            <h2 className="section-title mb-6">Every Dollar Counts</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              No matter the amount, your contribution directly impacts students&apos; lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {individualOptions.map((option, index) => (
              <motion.div
                key={option.amount}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:border-orange-primary/30 border border-white/10 transition-colors"
              >
                <div className="font-display text-4xl gradient-text mb-2">{option.amount}</div>
                <p className="text-white/60 text-sm">{option.impact}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-orange-primary hover:bg-orange-hover text-white font-bold text-lg rounded-2xl transition-colors"
            >
              <Heart className="w-6 h-6" />
              Make a Donation
            </motion.a>
          </div>
        </div>
      </section>

      {/* Start a Fundraiser */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                COMMUNITY FUNDRAISING
              </span>
              <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">
                Start a Fundraiser
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Rally your community, workplace, or school to support Hoops Creating Hope. Whether it&apos;s a birthday fundraiser, corporate giving campaign, or community event—every effort helps us reach more students.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Birthday or celebration fundraisers',
                  'Corporate matching gift programs',
                  'School or team fundraising events',
                  'Social media campaigns',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-orange-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${siteConfig.email}?subject=Start%20a%20Fundraiser`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-colors border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Get Started
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={images.teamGathering}
                  alt="Community Fundraising"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-primary to-purple-accent rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">Your Impact</h2>
            <p className="text-xl text-white/60">
              See how donations translate to real-world change
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '2,500+', label: 'Students Impacted' },
              { number: '85%', label: 'High School Completion' },
              { number: '5.3x', label: 'Better Outcomes' },
              { number: '12+', label: 'Programs Running' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
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
            Every donation is tax-deductible. Hoops Creating Hope is a registered 501(c)(3) nonprofit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl inline-flex items-center gap-2"
            >
              <Heart className="w-6 h-6" />
              Donate Now
            </motion.a>
            <Link
              href="/volunteer"
              className="px-10 py-5 bg-transparent border-3 border-black text-black font-bold text-lg rounded-2xl hover:bg-black hover:text-white transition-colors"
            >
              Volunteer Instead
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
