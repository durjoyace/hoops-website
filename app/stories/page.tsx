'use client'

import { motion } from 'framer-motion'
import { Play, Quote, ArrowRight, Heart } from 'lucide-react'
import { images, siteConfig } from '@/lib/utils'

const stories = [
  {
    name: 'Repriya',
    role: 'Crossover Scholar → University Graduate',
    quote: 'Basketball taught me I could lead — on the court and in life. Before Crossover, I never imagined going to university. Now I\'m helping other girls believe they can too.',
    image: images.repriya,
    featured: true,
  },
  {
    name: 'Utkarsh',
    role: 'Program Alumnus → Coach',
    quote: 'The discipline I learned on the court translated directly to my studies. I\'m now back as a coach, giving other kids the same chance I had.',
    image: images.portrait,
  },
  {
    name: 'Priya',
    role: 'Current Student',
    quote: 'My parents didn\'t understand why sports mattered. Now they see my grades improving and my confidence growing. Basketball changed everything.',
    image: images.twoGirls,
  },
  {
    name: 'Arjun',
    role: 'Scholars Program Graduate',
    quote: 'The summer academy opened my eyes to possibilities I never knew existed. Meeting coaches from America showed me the world is bigger than my neighborhood.',
    image: images.coachHighFive,
  },
]

const testimonials = [
  {
    quote: 'I am no longer witnessing simple behavioural changes and a lack of values by my kids in the classroom. I bear testimony to widespread impact across the spectrum of influence in education.',
    name: 'Ram Sundaram',
    role: 'Teach For India Fellow',
  },
  {
    quote: 'The transformation in these students is remarkable. They come in shy and uncertain, and leave as confident leaders ready to take on the world.',
    name: 'Coach Sarah',
    role: 'Visiting Coach, USA',
  },
  {
    quote: 'What Hoops Creating Hope has built is more than a basketball program—it\'s a community, a family, and a pathway to a better future.',
    name: 'Parent',
    role: 'Chennai Chapter',
  },
]

export default function StoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={images.portrait}
            alt="Student Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm text-sm font-bold tracking-wide mb-8"
          >
            STUDENT STORIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
          >
            Every Story
            <br />
            Inspires Hope
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold"
          >
            Meet the students whose lives have been transformed through basketball.
          </motion.p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                FEATURED STORY
              </span>
              <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">
                {stories[0].name}
              </h2>
              <p className="text-orange-primary font-semibold mb-6">{stories[0].role}</p>
              <blockquote className="text-xl md:text-2xl text-white/80 italic leading-relaxed mb-8">
                &ldquo;{stories[0].quote}&rdquo;
              </blockquote>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src={stories[0].image}
                  alt={stories[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-primary to-purple-accent rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Stories */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">More Voices of Hope</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Every student has a story. Here are just a few of the thousands we&apos;ve had the privilege to be part of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.slice(1).map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-1">{story.name}</h3>
                  <p className="text-orange-primary text-sm font-semibold mb-4">{story.role}</p>
                  <blockquote className="text-white/60 italic">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">What People Say</h2>
          </div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-10 md:p-12"
              >
                <Quote className="w-10 h-10 text-orange-primary mb-6" />
                <blockquote className="text-xl md:text-2xl text-white/80 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-orange-primary">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Be Part of Their Story
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Your support helps us create more success stories every day.
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
            Support Their Journey
          </motion.a>
        </div>
      </section>
    </>
  )
}
