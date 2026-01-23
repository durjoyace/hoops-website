'use client'

import { motion } from 'framer-motion'
import { Heart, Building2, Users, Globe, Mail, Handshake, Award } from 'lucide-react'
import { images, siteConfig } from '@/lib/utils'

// Partner logos - placeholder structure for easy updates
// Replace with actual logos when available
const partners = [
  { name: 'NBA India', logo: null, tier: 'premier' },
  { name: 'Teach For India', logo: null, tier: 'premier' },
  { name: 'Crossover Basketball', logo: null, tier: 'strategic' },
  { name: 'St. Patrick\'s School', logo: null, tier: 'school' },
  { name: 'Fort School Bangalore', logo: null, tier: 'school' },
  { name: 'Community Partner 1', logo: null, tier: 'community' },
  { name: 'Community Partner 2', logo: null, tier: 'community' },
  { name: 'Community Partner 3', logo: null, tier: 'community' },
]

const partnershipTypes = [
  {
    icon: Building2,
    title: 'Corporate Partners',
    description: 'Align your brand with positive social impact. Corporate partnerships include sponsorship opportunities, employee engagement programs, and brand visibility.',
    benefits: [
      'Logo placement on jerseys and facilities',
      'Employee volunteer opportunities',
      'Impact reporting and storytelling',
      'CSR alignment and recognition',
    ],
  },
  {
    icon: Users,
    title: 'School Partners',
    description: 'We partner with schools to implement our basketball-based education programs directly in their communities.',
    benefits: [
      'After-school programming',
      'Coach training and development',
      'Student mentorship programs',
      'Facility improvement support',
    ],
  },
  {
    icon: Globe,
    title: 'NGO & Foundation Partners',
    description: 'Collaborate with us to expand impact through joint initiatives, shared resources, and aligned missions.',
    benefits: [
      'Program collaboration',
      'Knowledge sharing',
      'Joint grant applications',
      'Cross-promotion opportunities',
    ],
  },
]

function LogoPlaceholder({ name }: { name: string }) {
  // Generate initials from name
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-primary/20 to-purple-accent/20 rounded-xl flex items-center justify-center">
      <span className="text-2xl font-bold text-orange-primary">{initials}</span>
    </div>
  )
}

export default function PartnershipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-accent via-orange-primary to-orange-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-8"
          >
            PARTNERSHIP OPPORTUNITIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
          >
            Partner With Us
            <br />
            Change Lives Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto"
          >
            Join organizations around the world in supporting youth development through basketball and education.
          </motion.p>
        </div>
      </section>

      {/* Partners Logo Grid */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              OUR PARTNERS
            </span>
            <h2 className="section-title mb-6">Organizations Making a Difference</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We&apos;re proud to work with partners who share our commitment to youth empowerment.
            </p>
          </div>

          {/* Logo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="aspect-[3/2] glass rounded-2xl p-4 flex items-center justify-center border border-white/10 hover:border-orange-primary/30 transition-colors">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  ) : (
                    <LogoPlaceholder name={partner.name} />
                  )}
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="bg-dark-200 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <p className="text-white/50 text-sm">
              Interested in becoming a partner?{' '}
              <a
                href={`mailto:${siteConfig.email}?subject=Partnership%20Inquiry`}
                className="text-orange-primary hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              PARTNERSHIP TYPES
            </span>
            <h2 className="section-title mb-6">Ways to Partner</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              We offer flexible partnership opportunities to match your organization&apos;s goals and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-8 card-glow"
              >
                <type.icon className="w-12 h-12 text-orange-primary mb-6" />
                <h3 className="text-2xl font-black mb-4">{type.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                      <Award className="w-4 h-4 text-orange-primary mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">How It Works</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our partnership process is simple and collaborative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect', description: 'Reach out to discuss your goals and interests' },
              { step: '02', title: 'Explore', description: 'We\'ll match opportunities to your objectives' },
              { step: '03', title: 'Partner', description: 'Formalize the partnership with clear outcomes' },
              { step: '04', title: 'Impact', description: 'See your contribution change lives' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-6xl gradient-text mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Handshake className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Ready to explore partnership opportunities? We&apos;d love to hear from you.
          </p>
          <motion.a
            href={`mailto:${siteConfig.email}?subject=Partnership%20Inquiry`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl"
          >
            <Mail className="w-6 h-6" />
            Contact Us
          </motion.a>
        </div>
      </section>
    </>
  )
}
