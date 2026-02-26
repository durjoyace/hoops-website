'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, BookOpen, Trophy, Heart, Calendar, MapPin, Target } from 'lucide-react'
import { images, siteConfig } from '@/lib/utils'

const programs = [
  {
    title: 'Crossover Courts to Careers',
    subtitle: 'Year-Round After-School Program',
    description: 'Our flagship program combines rigorous basketball training with mandatory academic support, creating a comprehensive after-school experience that keeps students engaged, motivated, and on track to graduation.',
    image: images.programActivity,
    features: [
      { icon: Clock, text: 'Year-round programming after school hours' },
      { icon: BookOpen, text: 'Mandatory study sessions and homework help' },
      { icon: Users, text: 'Mentorship from trained coaches' },
      { icon: Trophy, text: 'Competitive league play and tournaments' },
    ],
    outcomes: [
      '85% high school completion rate',
      'Improved academic performance',
      'Leadership skill development',
      'Community building',
    ],
  },
  {
    title: 'Crossover Scholars Program',
    subtitle: '2-Week Summer Academy',
    description: 'An intensive summer experience that brings together our top students and visiting coaches from the US for two weeks of advanced training, leadership development, and college preparation.',
    image: images.scholars,
    features: [
      { icon: Calendar, text: 'Intensive 2-week summer academy' },
      { icon: Target, text: 'Leadership development workshops' },
      { icon: BookOpen, text: 'College prep and career guidance' },
      { icon: Users, text: 'Local coaches clinics and training' },
    ],
    outcomes: [
      'Advanced skill development',
      'College readiness preparation',
      'Cross-cultural exchange',
      'Future coach pipeline',
    ],
  },
]

const locations = [
  { city: 'Chennai', year: '2012', students: '800+' },
  { city: 'Bangalore', year: '2017', students: '1,200+' },
  { city: 'Hyderabad', year: '2020', students: '500+' },
]

export default function ProgramsClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-8"
          >
            HOW WE WORK
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
          >
            Programs That
            <br />
            Transform Lives
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto"
          >
            Structured basketball programs combined with academic support and mentorship create pathways from courts to careers.
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-24 last:mb-0`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-2 block">
                  {program.subtitle}
                </span>
                <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">{program.title}</h2>
                <p className="text-xl text-white/70 leading-relaxed mb-8">{program.description}</p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {program.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-orange-primary flex-shrink-0" />
                      <span className="text-white/70">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-bold text-orange-primary mb-4">Key Outcomes:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 bg-orange-primary rounded-full" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Model */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              OUR APPROACH
            </span>
            <h2 className="section-title mb-6">The Crossover Model</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our three-pillar approach ensures comprehensive development for every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Elite Coaching',
                description: 'Professional basketball instruction that builds skills, discipline, and competitive spirit.',
              },
              {
                icon: BookOpen,
                title: 'Academic Support',
                description: 'Mandatory study sessions, homework help, and academic mentoring to keep students on track.',
              },
              {
                icon: Heart,
                title: 'Life Skills',
                description: 'Leadership development, character building, and preparation for future success.',
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-10 text-center card-glow"
              >
                <pillar.icon className="w-16 h-16 text-orange-primary mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">{pillar.title}</h3>
                <p className="text-white/60">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              WHERE WE WORK
            </span>
            <h2 className="section-title mb-6">Our Locations</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Active programs in three major Indian cities, with plans to expand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-10 text-center card-glow"
              >
                <MapPin className="w-12 h-12 text-orange-primary mx-auto mb-4" />
                <h3 className="font-display text-4xl gradient-text mb-2">{location.city}</h3>
                <p className="text-white/50 text-sm mb-4">Since {location.year}</p>
                <div className="font-display text-3xl">{location.students}</div>
                <p className="text-white/50 text-sm">Students Served</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Want to Get Involved?
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Volunteer as a coach, mentor, or support our programs through donations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl"
            >
              Donate Now
            </motion.a>
            <Link
              href="/volunteer"
              className="px-10 py-5 bg-transparent border-3 border-black text-black font-bold text-lg rounded-2xl hover:bg-black hover:text-white transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
