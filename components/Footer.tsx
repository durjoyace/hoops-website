'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Mail, Heart } from 'lucide-react'
import { siteConfig } from '@/lib/utils'

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

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
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
            <div className="flex items-center gap-4">
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
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
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
          <p className="text-white/40 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Hoops Creating Hope. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in the US & India
          </p>

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
