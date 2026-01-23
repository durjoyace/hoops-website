'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, GraduationCap, Heart, Globe } from 'lucide-react'
import { JerseyCardMini } from '@/components/JerseyCard'
import { images, siteConfig } from '@/lib/utils'

// Impact stats
const impactStats = [
  { number: '85%', label: 'School Completion Rate', description: 'Our students complete high school at 5.3x the rate of their demographic', icon: GraduationCap },
  { number: '2,500+', label: 'Students Impacted', description: 'Lives changed across Chennai, Bangalore, and Hyderabad since 2012', icon: Users },
  { number: '60%', label: 'Female Participation', description: 'Empowering girls through sports in communities where opportunities are scarce', icon: Heart },
  { number: '<15%', label: 'Dropout Rate', description: 'Compared to 62% national dropout rate for similar demographics', icon: TrendingUp },
]

// Challenge stats
const challengeStats = [
  { number: '140M+', label: 'Children in Government Schools', description: 'The scale of opportunity—and the scale of challenge we face' },
  { number: '76%', label: 'Never Reach Higher Education', description: 'The education gap that perpetuates poverty across generations' },
  { number: '62%', label: 'National Dropout Rate', description: 'For students aged 9-14—compared to our <15% rate' },
  { number: '735M+', label: 'Living on $3.10/Day or Less', description: 'Education is the pathway out of poverty for these families' },
]

// Jersey Repository - Impact Milestones
const jerseyMilestones = [
  { number: '85', title: '% Completion' },
  { number: '2.5K', title: 'Students' },
  { number: '60', title: '% Girls' },
  { number: '3', title: 'Cities' },
  { number: '12', title: 'Programs' },
  { number: '14', title: 'Years' },
  { number: '5.3', title: 'x Outcomes' },
  { number: '45', title: 'First Cohort' },
]

// Impact areas
const impactAreas = [
  {
    title: 'Academic Excellence',
    description: 'Basketball teaches discipline, time management, and goal-setting—skills that directly translate to classroom success. Our students don\'t just stay in school; they thrive academically.',
    image: images.programActivity,
  },
  {
    title: 'Leadership Development',
    description: 'Through team captaincy, peer mentoring, and decision-making under pressure, students develop confidence and leadership skills that prepare them for future careers.',
    image: images.coachHighFive,
  },
  {
    title: 'Gender Equality',
    description: 'With 60% female participation, we\'re breaking barriers in communities where girls face significant obstacles. Sports become a vehicle for empowerment and self-confidence.',
    image: images.twoGirls,
  },
  {
    title: 'Community Multiplier Effect',
    description: 'Our students become role models and mentors in their families and communities. One student\'s success inspires siblings, cousins, and neighbors—multiplying impact.',
    image: images.teamGathering,
  },
  {
    title: 'Character & Resilience',
    description: 'Sports teach perseverance through failure, teamwork through conflict, and integrity through competition. These aren\'t just basketball lessons—they\'re life skills.',
    image: images.hero,
  },
  {
    title: 'Long-Term Trajectory Change',
    description: 'We\'re not just keeping kids in school—we\'re fundamentally altering their life trajectories. Higher education means better jobs, economic mobility, and breaking cycles.',
    image: images.outdoorCourt,
  },
]

function AnimatedStat({ stat, index }: { stat: typeof impactStats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="glass rounded-3xl p-12 text-center card-glow"
    >
      <stat.icon className="w-12 h-12 text-orange-primary mx-auto mb-6" />
      <div className="font-display text-6xl md:text-7xl gradient-text mb-4">{stat.number}</div>
      <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
      <div className="text-white/50 text-sm">{stat.description}</div>
    </motion.div>
  )
}

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={images.teamGathering}
            alt="Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
          >
            The Numbers Tell
            <br />
            Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-semibold"
          >
            Data-driven impact. Measurable change. Real futures transformed.
          </motion.p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Our Impact at a Glance</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Since 2012, we&apos;ve been proving that basketball can transform educational outcomes. Here&apos;s the evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedStat key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* The Crossover Effect - Comparison */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">The Crossover Effect</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Basketball isn&apos;t just a game—it&apos;s a proven intervention that changes educational trajectories.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16"
          >
            <h3 className="text-3xl font-black text-center mb-6">School Advancement Beyond Grade 10</h3>
            <p className="text-center text-white/60 max-w-2xl mx-auto mb-12">
              While only 16% of children from low-income families in India continue their education beyond Grade 10,
              our program achieves an 85% advancement rate—proving that targeted intervention works.
            </p>

            {/* Bar comparison */}
            <div className="flex items-end justify-center gap-16 md:gap-24 mb-12">
              <div className="text-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 72 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-32 md:w-40 rounded-t-2xl bg-gradient-to-t from-orange-primary to-orange-light flex items-start justify-center pt-4 mx-auto"
                >
                  <span className="font-display text-4xl md:text-5xl">16%</span>
                </motion.div>
                <p className="mt-4 font-bold text-sm md:text-base max-w-[140px]">
                  Families Earning Under $10/Day
                </p>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 380 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-32 md:w-40 rounded-t-2xl bg-gradient-to-t from-orange-primary to-orange-light flex items-start justify-center pt-6 mx-auto"
                >
                  <span className="font-display text-4xl md:text-5xl">85%</span>
                </motion.div>
                <p className="mt-4 font-bold text-sm md:text-base max-w-[180px]">
                  Hoops Creating Hope Students
                </p>
              </div>
            </div>

            <p className="text-center text-2xl md:text-3xl font-black gradient-text">
              69 percentage points higher = 5.3x better outcomes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">How We Create Impact</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our approach goes beyond the court, creating ripple effects in academics, leadership, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-orange-primary mb-4">{area.title}</h3>
                  <p className="text-white/60 leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 md:flex md:items-center md:gap-16"
          >
            <div className="flex-1 mb-8 md:mb-0">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl italic font-medium mb-8 leading-relaxed">
                &ldquo;I am no longer witnessing simple behavioural changes and a lack of values by my kids in the classroom.
                I bear testimony to widespread impact across the spectrum of influence in education.&rdquo;
              </blockquote>
              <div className="text-xl font-bold">Ram Sundaram</div>
              <div className="text-orange-primary font-semibold">Teach For India Fellow</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Why This Matters</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              India&apos;s education system leaves millions behind. We&apos;re proving there&apos;s another way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {challengeStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-10 text-center"
              >
                <div className="font-display text-5xl md:text-6xl gradient-text mb-4">{stat.number}</div>
                <div className="text-lg font-bold text-white mb-2">{stat.label}</div>
                <div className="text-white/50 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jersey Repository - Impact Milestones */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              BY THE NUMBERS
            </span>
            <h2 className="section-title mb-6">Our Impact Wall</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Every jersey represents a milestone in our journey to transform lives through basketball.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {jerseyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <JerseyCardMini
                  number={milestone.number}
                  title={milestone.title}
                  color={index % 3 === 0 ? 'orange' : index % 3 === 1 ? 'purple' : 'gradient'}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Your Impact Starts Here
          </h2>
          <p className="text-xl md:text-2xl text-black/80 font-semibold mb-4">
            Every donation creates measurable change. Every dollar goes directly to programs that work.
          </p>
          <p className="text-lg text-black/70 font-medium mb-10">
            $500 funds one student for an entire year.
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
            Make Your Impact Today
          </motion.a>
        </div>
      </section>
    </>
  )
}
