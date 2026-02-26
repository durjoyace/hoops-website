'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig, navLinks } from '@/lib/utils'

interface NavDropdownProps {
  label: string
  links: { label: string; href: string; external?: boolean }[]
  isOpen: boolean
  onToggle: () => void
  pathname: string
}

function NavDropdown({ label, links, isOpen, onToggle, pathname }: NavDropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 text-white font-semibold transition-colors hover:text-orange-primary focus-ring rounded-lg"
      >
        {label}
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 py-3 glass-dark rounded-xl shadow-xl z-50"
          >
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 text-white/80 hover:text-orange-primary hover:bg-orange-primary/10 transition-all border-l-2 border-transparent hover:border-orange-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-5 py-3 hover:text-orange-primary hover:bg-orange-primary/10 transition-all border-l-2 hover:border-orange-primary",
                    isLinkActive(link.href, pathname)
                      ? "text-orange-primary border-orange-primary bg-orange-primary/5"
                      : "text-white/80 border-transparent"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface MobileNavSectionProps {
  label: string
  links: { label: string; href: string; external?: boolean }[]
  isOpen: boolean
  onToggle: () => void
  onLinkClick: () => void
  pathname: string
}

function MobileNavSection({ label, links, isOpen, onToggle, onLinkClick, pathname }: MobileNavSectionProps) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-white font-semibold text-lg"
      >
        {label}
        <ChevronDown
          className={cn(
            'w-5 h-5 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pb-4"
          >
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onLinkClick}
                  className="block py-3 pl-5 text-white/70 hover:text-orange-primary transition-colors border-l-2 border-transparent hover:border-orange-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onLinkClick}
                  className={cn(
                    "block py-3 pl-5 hover:text-orange-primary transition-colors border-l-2 hover:border-orange-primary",
                    isLinkActive(link.href, pathname)
                      ? "text-orange-primary border-orange-primary"
                      : "text-white/70 border-transparent"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function isLinkActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  if (href.startsWith('mailto:') || href.startsWith('http')) return false
  return pathname.startsWith(href)
}

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !(event.target as Element).closest('.nav-dropdown-container')) {
        setOpenDropdown(null)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [openDropdown])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileSection(null)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black/80 backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Image
                src="/images/hoops-creating-hope.png"
                alt="Hoops Creating Hope"
                width={160}
                height={56}
                className="h-14 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 nav-dropdown-container">
            <NavDropdown
              label="Take Action"
              links={navLinks.takeAction}
              isOpen={openDropdown === 'takeAction'}
              onToggle={() => toggleDropdown('takeAction')}
              pathname={pathname}
            />
            <NavDropdown
              label="About Us"
              links={navLinks.aboutUs}
              isOpen={openDropdown === 'aboutUs'}
              onToggle={() => toggleDropdown('aboutUs')}
              pathname={pathname}
            />
            <NavDropdown
              label="Why Basketball"
              links={navLinks.whyBasketball}
              isOpen={openDropdown === 'whyBasketball'}
              onToggle={() => toggleDropdown('whyBasketball')}
              pathname={pathname}
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Mobile Donate Button (compact, always visible) */}
            <a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex items-center gap-1.5 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-full transition-colors"
            >
              <Heart className="w-4 h-4" />
              Donate
            </a>

            {/* Desktop Donate Button */}
            <motion.a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors"
            >
              Donate
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white focus-ring rounded-lg"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-[73px] right-0 bottom-0 w-full max-w-sm bg-black/98 backdrop-blur-xl z-50 overflow-y-auto lg:hidden"
            >
              <div className="p-6">
                <MobileNavSection
                  label="Take Action"
                  links={navLinks.takeAction}
                  isOpen={mobileSection === 'takeAction'}
                  onToggle={() => setMobileSection(mobileSection === 'takeAction' ? null : 'takeAction')}
                  onLinkClick={closeMobileMenu}
                  pathname={pathname}
                />
                <MobileNavSection
                  label="About Us"
                  links={navLinks.aboutUs}
                  isOpen={mobileSection === 'aboutUs'}
                  onToggle={() => setMobileSection(mobileSection === 'aboutUs' ? null : 'aboutUs')}
                  onLinkClick={closeMobileMenu}
                  pathname={pathname}
                />
                <MobileNavSection
                  label="Why Basketball"
                  links={navLinks.whyBasketball}
                  isOpen={mobileSection === 'whyBasketball'}
                  onToggle={() => setMobileSection(mobileSection === 'whyBasketball' ? null : 'whyBasketball')}
                  onLinkClick={closeMobileMenu}
                  pathname={pathname}
                />

                {/* Mobile Donate Button */}
                <motion.a
                  href={siteConfig.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block mt-8 py-4 text-center bg-gradient-to-r from-orange-primary to-orange-light text-white font-bold rounded-full shadow-glow"
                >
                  Donate Now
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
