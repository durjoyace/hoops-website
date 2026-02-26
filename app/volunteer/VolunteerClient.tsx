'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, GraduationCap, Camera, Briefcase, Globe, Mail, Calendar, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { images, siteConfig } from '@/lib/utils'
import { formConfig, getFormspreeUrl } from '@/lib/form-config'

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

const summerProgram = {
  title: 'Summer Scholars Volunteer Program',
  description: 'Join us for an intensive 2-week volunteer experience in India. Work directly with students, train local coaches, and be part of our annual Scholars Program.',
  highlights: [
    'Lead basketball clinics and skill development sessions',
    'Mentor students through leadership workshops',
    'Train local coaches to sustain year-round programs',
    'Experience Indian culture and community',
    'Make lifelong connections with students and volunteers',
  ],
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function VolunteerForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    availability: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (formConfig.volunteerFormId) {
      setStatus('submitting')
      try {
        const res = await fetch(getFormspreeUrl(formConfig.volunteerFormId), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (res.ok) {
          setStatus('success')
          setFormData({ name: '', email: '', role: '', availability: '', message: '' })
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent('Volunteer Application')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nRole Interest: ${formData.role}\nAvailability: ${formData.availability}\n\n${formData.message}`
      )
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-3">Application Received!</h3>
        <p className="text-white/60 mb-6">We&apos;ll review your application and get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-3 bg-orange-primary hover:bg-orange-hover text-white font-bold rounded-xl transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="vol-name" className="block text-sm font-bold text-white/80 mb-2">
            Full Name *
          </label>
          <input
            id="vol-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="vol-email" className="block text-sm font-bold text-white/80 mb-2">
            Email *
          </label>
          <input
            id="vol-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="vol-role" className="block text-sm font-bold text-white/80 mb-2">
            Role Interest *
          </label>
          <select
            id="vol-role"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors"
          >
            <option value="" className="bg-black">Select a role...</option>
            <option value="Coach" className="bg-black">Coach</option>
            <option value="Academic Mentor" className="bg-black">Academic Mentor</option>
            <option value="Content Creator" className="bg-black">Content Creator</option>
            <option value="Skills Volunteer" className="bg-black">Skills Volunteer</option>
            <option value="Ambassador" className="bg-black">Ambassador</option>
            <option value="Event Support" className="bg-black">Event Support</option>
            <option value="Other" className="bg-black">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="vol-availability" className="block text-sm font-bold text-white/80 mb-2">
            Availability
          </label>
          <select
            id="vol-availability"
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors"
          >
            <option value="" className="bg-black">Select availability...</option>
            <option value="1-2 hours/week" className="bg-black">1-2 hours/week</option>
            <option value="2-4 hours/week" className="bg-black">2-4 hours/week</option>
            <option value="4-8 hours/week" className="bg-black">4-8 hours/week</option>
            <option value="Project-based" className="bg-black">Project-based</option>
            <option value="Flexible" className="bg-black">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="vol-message" className="block text-sm font-bold text-white/80 mb-2">
          Tell Us About Yourself
        </label>
        <textarea
          id="vol-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors resize-none"
          placeholder="Share your background, skills, and why you'd like to volunteer..."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-orange-primary hover:bg-orange-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl transition-colors"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Apply to Volunteer
          </>
        )}
      </button>

      {!formConfig.volunteerFormId && (
        <p className="text-white/40 text-sm">
          This will open your email client with a pre-filled application.
        </p>
      )}
    </form>
  )
}

export default function VolunteerClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src={images.coachHighFive}
              alt="Volunteer"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
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

      {/* Volunteer Roles */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Ways to Volunteer</h2>
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
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-white/50">
                    <Calendar className="w-4 h-4" />
                    <span>{role.commitment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <MapPin className="w-4 h-4" />
                    <span>{role.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Program */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                FEATURED OPPORTUNITY
              </span>
              <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">
                {summerProgram.title}
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                {summerProgram.description}
              </p>

              <ul className="space-y-4 mb-8">
                {summerProgram.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-orange-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${siteConfig.email}?subject=Summer%20Volunteer%20Program%20Inquiry`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-primary hover:bg-orange-hover text-white font-bold rounded-2xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                Apply for Summer Program
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src={images.scholars}
                  alt="Summer Program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-primary to-purple-accent rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Tell us about yourself and how you&apos;d like to contribute. We&apos;ll match you with opportunities that fit your skills and availability.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
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

            <VolunteerForm />
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
