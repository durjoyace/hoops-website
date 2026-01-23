'use client'

import { motion } from 'framer-motion'
import { Heart, Users, GraduationCap, Camera, Briefcase, Globe, Mail, Calendar, MapPin, Plane, PenTool, Video, ExternalLink } from 'lucide-react'
import { images, siteConfig } from '@/lib/utils'

const volunteerRoles = [
  {
    icon: Users,
    title: 'Coach',
    description: 'Lead basketball practices, teach fundamentals, and mentor students on and off the court.',
    commitment: '4-8 hours/week',
    location: 'In-person (India)',
  },
  {
    icon: GraduationCap,
    title: 'Academic Mentor',
    description: 'Help students with homework, study skills, and academic goal-setting.',
    commitment: '2-4 hours/week',
    location: 'In-person or Remote',
  },
  {
    icon: Camera,
    title: 'Content Creator',
    description: 'Document our programs, create social media content, and share our story with the world.',
    commitment: 'Flexible',
    location: 'Remote',
    cta: {
      text: 'Reach out via email',
      href: `mailto:${siteConfig.email}?subject=Content%20Creator%20Volunteer%20Inquiry`,
    },
  },
  {
    icon: Briefcase,
    title: 'Skills Volunteer',
    description: 'Share your professional expertise—marketing, finance, technology, or other skills.',
    commitment: 'Project-based',
    location: 'Remote',
  },
  {
    icon: Globe,
    title: 'Ambassador',
    description: 'Represent Hoops Creating Hope in your community, organize events, and spread awareness.',
    commitment: 'Flexible',
    location: 'Anywhere',
  },
  {
    icon: Calendar,
    title: 'Event Support',
    description: 'Help organize and run tournaments, fundraisers, and special events.',
    commitment: 'Event-based',
    location: 'In-person',
  },
]

const coachInIndia = {
  title: 'Coach In India',
  description: 'Experience the transformative power of basketball firsthand. Travel to India with a cohort of coaches and make a lasting impact on students\' lives.',
  highlights: [
    'Travel with a cohort of coaches',
    'Time commitment: 2.5 weeks',
    'Lead basketball clinics and skill development sessions',
    'Mentor students through leadership workshops',
    'Train local coaches to sustain year-round programs',
    'Experience Indian culture and community',
  ],
  applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeDiOUABH1NT7Ec7qHgSqJ3exnEGQsUqxiy9y1tar5vUHEdVw/viewform',
}

const penPalProgram = {
  title: 'Hoops Pen Pal Program',
  description: 'Connect with a student in India through monthly letters, videos, and cultural exchanges. Whether you\'re a student ambassador or just passionate about global friendship, create meaningful relationships that expand perspectives.',
  highlights: [
    'Monthly exchanges with your matched pen pal',
    'Learn about life, school, and basketball in India',
    'Share your world and learn about theirs',
    'Watch your pen pal\'s academic journey unfold',
  ],
  perfectFor: 'Students ages 11-18, educators, families',
  learnMoreUrl: 'https://hoopscreatinghope.org/hoops-pen-pals',
}

const featuredVolunteer = {
  title: 'The Crossover Experience',
  vimeoId: '133364037',
  description: 'Hear from Sai Tummala about the transformative experience of volunteering with Hoops Creating Hope.',
}

export default function VolunteerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={images.coachHighFive}
            alt="Volunteer"
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
            MENTOR & COACH & CREATE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
          >
            Share Your Skills.
            <br />
            Change Lives.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto"
          >
            Whether you&apos;re a coach, mentor, or just someone who cares—we have a place for you.
          </motion.p>
        </div>
      </section>

      {/* Coach In India - Featured */}
      <section className="bg-gradient-to-br from-orange-primary/10 to-purple-accent/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-8 h-8 text-orange-primary" />
                <span className="text-orange-primary font-mono text-sm tracking-widest uppercase">
                  FEATURED OPPORTUNITY
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">
                {coachInIndia.title}
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                {coachInIndia.description}
              </p>

              <ul className="space-y-4 mb-8">
                {coachInIndia.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-orange-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                href={coachInIndia.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-primary hover:bg-orange-hover text-white font-bold rounded-2xl transition-colors"
              >
                Apply Now
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src={images.scholars}
                  alt="Coach In India"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-primary to-purple-accent rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hoops Pen Pal Program - Second */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="w-8 h-8 text-orange-primary" />
                <span className="text-orange-primary font-mono text-sm tracking-widest uppercase">
                  GLOBAL CONNECTION
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">
                {penPalProgram.title}
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                {penPalProgram.description}
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-white mb-4">What You&apos;ll Experience:</h3>
                <ul className="space-y-3">
                  {penPalProgram.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-orange-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-white/50 mb-6">
                <strong className="text-white">Perfect For:</strong> {penPalProgram.perfectFor}
              </p>

              <a
                href={penPalProgram.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-colors border border-white/20"
              >
                Learn More
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-orange-primary/20 to-purple-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <PenTool className="w-24 h-24 text-orange-primary mx-auto mb-6" />
                  <p className="text-2xl font-bold text-white">Connect Across Continents</p>
                  <p className="text-white/60 mt-2">Build meaningful friendships that transcend borders</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Volunteer Video */}
      <section className="section-dark py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Video className="w-8 h-8 text-orange-primary" />
              <span className="text-orange-primary font-mono text-sm tracking-widest uppercase">
                FEATURED VOLUNTEER
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">
              {featuredVolunteer.title}
            </h2>
            <p className="text-xl text-white/70">
              {featuredVolunteer.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden glass border border-white/10"
          >
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src={`https://player.vimeo.com/video/${featuredVolunteer.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title={featuredVolunteer.title}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <a
              href={coachInIndia.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-primary hover:bg-orange-hover text-white font-bold rounded-2xl transition-colors"
            >
              Become a Volunteer
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">More Ways to Volunteer</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Find the volunteer role that matches your skills, interests, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-8 card-glow"
              >
                <role.icon className="w-12 h-12 text-orange-primary mb-6" />
                <h3 className="text-2xl font-black mb-3">{role.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">{role.description}</p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-white/50">
                    <Calendar className="w-4 h-4" />
                    <span>{role.commitment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <MapPin className="w-4 h-4" />
                    <span>{role.location}</span>
                  </div>
                </div>
                {role.cta && (
                  <a
                    href={role.cta.href}
                    className="inline-flex items-center gap-2 text-orange-primary font-bold text-sm hover:gap-3 transition-all"
                  >
                    {role.cta.text}
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section className="section-dark py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Tell us about yourself and how you&apos;d like to contribute. We&apos;ll match you with opportunities that fit your skills and availability.
          </p>

          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">What We Look For:</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• Passion for youth development</li>
                  <li>• Reliable and committed</li>
                  <li>• Positive attitude</li>
                  <li>• Willingness to learn</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">What You Get:</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• Meaningful impact on students</li>
                  <li>• Training and support</li>
                  <li>• Global community of volunteers</li>
                  <li>• Personal growth opportunities</li>
                </ul>
              </div>
            </div>

            <a
              href={coachInIndia.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-orange-primary hover:bg-orange-hover text-white font-bold text-lg rounded-2xl transition-colors"
            >
              Apply to Volunteer
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Can&apos;t Volunteer? Donate Instead
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Every contribution helps us empower more students.
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
            Make a Donation
          </motion.a>
        </div>
      </section>
    </>
  )
}
