'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Mail, Heart, Send, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/lib/utils'
import { formConfig, getFormspreeUrl } from '@/lib/form-config'

const footerLinks = {
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],
  programs: [
    { label: 'Courts to Careers', href: '/programs' },
    { label: 'Scholars Program', href: '/programs' },
    { label: 'Volunteer', href: '/volunteer' },
  ],
  impact: [
    { label: 'Stories', href: '/stories' },
    { label: 'Impact Report', href: '/impact' },
    { label: 'News', href: '/news' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: siteConfig.socialLinks.instagram, label: 'Instagram' },
  { icon: Facebook, href: siteConfig.socialLinks.facebook, label: 'Facebook' },
  { icon: Linkedin, href: siteConfig.socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
]

function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (formConfig.newsletterFormId) {
      setStatus('submitting')
      try {
        const res = await fetch(getFormspreeUrl(formConfig.newsletterFormId), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
        if (res.ok) {
          setStatus('success')
          setEmail('')
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    } else {
      // Fallback: open mailto
      window.location.href = `mailto:${siteConfig.email}?subject=Newsletter%20Signup&body=Please%20add%20me%20to%20your%20newsletter:%20${encodeURIComponent(email)}`
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-400 text-sm">
        <CheckCircle className="w-4 h-4" />
        Thanks for subscribing!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="flex-1 min-w-0 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:border-orange-primary focus:ring-1 focus:ring-orange-primary outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="px-4 py-2.5 bg-orange-primary hover:bg-orange-hover disabled:opacity-50 text-white font-bold text-sm rounded-xl transition-colors flex-shrink-0"
      >
        {status === 'submitting' ? (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
      </button>
    </form>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/hoops-creating-hope.png"
                alt="Hoops Creating Hope"
                width={180}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
              Empowering underserved youth in India through basketball, education, and mentorship.
              Every dribble rewrites the future.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 hover:bg-orange-primary/20 border border-white/10 hover:border-orange-primary/50 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/60 group-hover:text-orange-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-bold mb-3 text-sm">Stay Updated</h4>
              <NewsletterSignup />
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-orange-primary transition-colors hover-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-orange-primary transition-colors hover-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Impact</h4>
            <ul className="space-y-3">
              {footerLinks.impact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-orange-primary transition-colors hover-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <p className="text-white/40 flex items-center gap-1">
              &copy; {new Date().getFullYear()} Hoops Creating Hope. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in the US & India
            </p>
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <motion.a
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-orange-primary hover:bg-orange-hover text-white font-semibold rounded-full transition-colors"
          >
            Support Our Mission
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
