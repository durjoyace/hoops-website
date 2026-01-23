'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Target, Heart, Users, Award, Lightbulb } from 'lucide-react'
import JerseyCard from '@/components/JerseyCard'
import { cn, images, siteConfig } from '@/lib/utils'

// Timeline data
const timeline = [
  {
    year: '2010',
    title: 'The Idea: Crossover',
    description: 'Theory and NGO paperwork and board recruitment. Shaun Jayachandran, armed with an M.Ed. in Educational Leadership and 20+ years of elite coaching experience, saw a crisis: talented kids in India were dropping out of school at alarming rates. Basketball could provide the structure, encouragement, and hope these students needed.',
  },
  {
    year: '2012',
    title: 'First Cohort',
    description: 'First cohort: 45 kids at St. Patrick\'s Anglo-Indian Higher Secondary School. The model was simple but rigorous: basketball practice combined with mandatory study sessions. Every student had to show up, work hard, and stay in school. No exceptions.',
  },
  {
    year: '2013',
    title: 'Rapid Growth & Education Partnership',
    description: '250 students and our first Teach For India classroom. The model was expanding beyond just basketball courts—we were integrating directly into classrooms, proving that sports-based education worked at scale.',
  },
  {
    year: '2015',
    title: 'The Proof',
    description: 'Our first cohort of students completed high school. The data was undeniable: 85% of HCH students advanced to the next grade level compared to just 16% for similar demographics. The theory was now proven. Basketball worked.',
  },
  {
    year: '2017',
    title: 'Bangalore Expansion',
    description: 'With proven results, HCH expanded to Bangalore with first programs at Fort School. New courts. New students. Same commitment to excellence.',
  },
  {
    year: '2019',
    title: 'NBA India Partnership',
    description: 'Ran programs in Mumbai in conjunction with the NBA Games in India. A major milestone that brought international recognition to our work and expanded our reach.',
  },
  {
    year: '2022',
    title: 'Hyderabad Launch',
    description: 'Expanded to Hyderabad, our third major city. Despite pandemic challenges, we adapted with outdoor practices and remote study sessions. The mission never stopped.',
  },
  {
    year: '2024',
    title: '2,500+ Strong',
    description: 'Today, Hoops Creating Hope serves 2,500+ students across three major Indian cities. Our 85% high school completion rate remains consistent. Our students don\'t just graduate—they lead. They mentor. They come back as coaches. The cycle continues.',
  },
]

// Theory of change
const theoryOfChange = [
  {
    number: '1',
    title: 'Equal Footing',
    description: 'Basketball is a non-common sport in India where girls start on equal footing with boys. No one has years of experience. Everyone begins together.',
  },
  {
    number: '2',
    title: 'Encouraging Aggressive Mistakes',
    description: 'Growth happens outside your comfort zone. We celebrate bold attempts and smart failures. Take the shot. Try the move. Miss it? Good—that means you\'re pushing yourself.',
  },
  {
    number: '3',
    title: 'Caring for the Person',
    description: 'We don\'t just coach players—we mentor whole people. Our staff knows their students\' struggles, dreams, and family situations.',
  },
  {
    number: '4',
    title: 'Educational Outcomes',
    description: 'Our focus is high school completion, college access, and breaking cycles of poverty. One educated student changes their family\'s trajectory.',
  },
  {
    number: '5',
    title: 'Not Producing Pros',
    description: 'We\'re not here to create professional athletes. We\'re here to create educated leaders who happen to love basketball.',
  },
]

// Values
const values = [
  { icon: Award, title: 'Leadership', description: 'Every student is a leader in training. We develop captains on the court and change-makers in their communities.' },
  { icon: Users, title: 'Gender Equality', description: 'Basketball doesn\'t see gender—only talent and heart. Our courts are spaces where girls and boys compete as equals.' },
  { icon: Heart, title: 'Character', description: 'How you handle wins matters. How you handle losses matters more. We build students who show up and lift up.' },
  { icon: Target, title: 'Teamwork', description: 'Basketball is five players moving as one. These lessons transfer directly from the court to life.' },
  { icon: Lightbulb, title: 'Communication', description: 'We teach students to find their voice and use it. Call for the ball. Speak up when you see something.' },
]

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        'relative flex items-start gap-8 md:gap-16',
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      {/* Content */}
      <div className={cn('flex-1', index % 2 === 0 ? 'md:text-right' : 'md:text-left')}>
        <motion.div
          whileHover={{ y: -5 }}
          className="glass rounded-3xl p-8 card-glow"
        >
          <div className="font-display text-5xl md:text-6xl gradient-text mb-4">{item.year}</div>
          <h3 className="text-2xl font-black mb-4">{item.title}</h3>
          <p className="text-white/60 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>

      {/* Timeline marker */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-5 h-5 bg-orange-primary rounded-full border-4 border-black z-10" />
        {index < timeline.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-orange-primary to-purple-accent" />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-8"
          >
            OUR STORY
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-8"
          >
            IT STARTED WITH
            <br />
            A THEORY AND A CANDLE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold mb-6"
          >
            Basketball could keep kids in school.
            <br />
            13 years later, we&apos;ve proven it works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="inline-block px-8 py-4 bg-black/20 backdrop-blur-sm rounded-2xl"
          >
            <div className="font-display text-5xl md:text-6xl">85% vs. 16%</div>
            <p className="text-sm mt-2 text-white/80">Our students complete high school at 5.3x the rate of their demographic</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              THE JOURNEY
            </span>
            <h2 className="section-title mb-6">From Court to Classroom</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              What started as one coach, one court, and a belief that sports could change lives
              has become a movement serving 2,500+ students across India.
            </p>
          </div>

          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              WHY WE EXIST
            </span>
            <h2 className="section-title">The Problem We Solve</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* The Crisis */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-gradient-to-br from-purple-accent/20 to-purple-accent/5 border border-purple-accent/30"
            >
              <div className="text-5xl mb-6">📉</div>
              <h3 className="font-display text-4xl gradient-text mb-4">The Crisis</h3>
              <div className="font-display text-6xl gradient-text mb-2">16%</div>
              <p className="text-white/50 mb-6">High school completion rate for similar demographics</p>
              <p className="text-white/70 leading-relaxed mb-4">
                Across India, millions of students from underserved communities drop out before completing high school.
                They lack structure, mentorship, and a reason to stay engaged.
              </p>
              <p className="text-white/70 leading-relaxed">
                Traditional education programs aren&apos;t enough. These students have potential. They just need a shot.
              </p>
            </motion.div>

            {/* Our Solution */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-gradient-to-br from-orange-primary/20 to-orange-light/5 border border-orange-primary/30"
            >
              <div className="text-5xl mb-6">🏀</div>
              <h3 className="font-display text-4xl gradient-text mb-4">Our Solution</h3>
              <div className="font-display text-6xl gradient-text mb-2">85%</div>
              <p className="text-white/50 mb-6">High school completion rate for HCH students</p>
              <p className="text-white/70 leading-relaxed mb-4">
                Basketball provides what traditional programs can&apos;t: daily structure, immediate feedback,
                team accountability, and something students actually want to show up for.
              </p>
              <p className="text-white/70 leading-relaxed">
                We don&apos;t just teach basketball. We use basketball to teach life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theory of Change - Jersey Style */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              HOW IT WORKS
            </span>
            <h2 className="section-title mb-6">Our Theory of Change</h2>
            <p className="text-xl text-white/60">Basketball isn&apos;t the end goal—it&apos;s the vehicle for transformation</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {theoryOfChange.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <JerseyCard
                  number={item.number}
                  title={item.title}
                  description={item.description}
                  color={index % 2 === 0 ? 'orange' : 'purple'}
                  size="md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              WHAT WE STAND FOR
            </span>
            <h2 className="section-title">Our Pillars</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-8 text-center card-glow"
              >
                <value.icon className="w-12 h-12 text-orange-primary mx-auto mb-4" />
                <h3 className="text-xl font-black text-orange-primary mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Ready to Change Futures?
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Join us in proving that every kid deserves a shot at their dreams
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
              href="/impact"
              className="px-10 py-5 bg-transparent border-3 border-black text-black font-bold text-lg rounded-2xl hover:bg-black hover:text-white transition-colors"
            >
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
