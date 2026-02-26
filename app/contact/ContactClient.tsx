'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Mail,
  MapPin,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Send,
  ChevronDown,
  CheckCircle,
  Heart,
} from 'lucide-react'
import { siteConfig } from '@/lib/utils'
import { formConfig, getFormspreeUrl } from '@/lib/form-config'

// FAQ data
const faqs = [
  {
    question: 'How quickly will I hear back?',
    answer:
      'We do our best to respond to all inquiries within 2-3 business days. During peak program seasons (summer and school enrollment periods), response times may be slightly longer. For urgent matters, please mention it in your subject line.',
  },
  {
    question: 'How can I volunteer with Hoops Creating Hope?',
    answer:
      'We welcome volunteers for coaching, mentoring, tutoring, event support, and fundraising. Visit our Volunteer page to see current opportunities, or send us a message with your skills and availability. Both in-person (India) and remote volunteers are valued.',
  },
  {
    question: 'Are donations tax-deductible?',
    answer:
      'Yes! Hoops Creating Hope is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your records after making a contribution.',
  },
  {
    question: 'Can I visit your programs in India?',
    answer:
      'Absolutely. We love hosting visitors at our courts in Chennai, Bangalore, and Hyderabad. Please reach out at least 2-3 weeks in advance so we can coordinate schedules and ensure you get the best experience seeing our students in action.',
  },
]

// Subject options
const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'General Inquiry', label: 'General Inquiry' },
  { value: 'Volunteer', label: 'Volunteer' },
  { value: 'Donate', label: 'Donate' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Media', label: 'Media' },
  { value: 'Other', label: 'Other' },
]

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden card-glow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-bold pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-orange-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <p className="text-white/60 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ContactClient() {
  const formRef = useRef<HTMLFormElement>(null)
  const formSectionRef = useRef<HTMLDivElement>(null)
  const isFormInView = useInView(formSectionRef, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!validate()) return

    if (formConfig.contactFormId) {
      try {
        const res = await fetch(getFormspreeUrl(formConfig.contactFormId), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (res.ok) {
          setSubmitted(true)
          setFormData({ name: '', email: '', subject: '', message: '' })
        }
      } catch {
        // Fall through to mailto
      }
    } else {
      const subject = encodeURIComponent(`[${formData.subject}] Message from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
      )

      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`

      setSubmitted(true)
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-8"
          >
            GET IN TOUCH
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-8"
          >
            LET&apos;S TALK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto"
          >
            Whether you want to donate, volunteer, partner, or just say hello
            — we&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-dark py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <motion.a
              href={`mailto:${siteConfig.email}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-8 text-center card-glow block"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-primary/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-orange-primary" />
              </div>
              <h3 className="text-xl font-black mb-3">Email Us</h3>
              <p className="text-orange-primary font-semibold hover-underline inline-block">
                {siteConfig.email}
              </p>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-8 text-center card-glow"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-primary/20 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-orange-primary" />
              </div>
              <h3 className="text-xl font-black mb-3">Our Locations</h3>
              <p className="text-white/60 leading-relaxed">
                Chennai &bull; Bangalore &bull; Hyderabad
                <br />
                <span className="text-white/40">India</span>
              </p>
            </motion.div>

            {/* Social Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-8 text-center card-glow"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-primary/20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-orange-primary" />
              </div>
              <h3 className="text-xl font-black mb-3">Follow Us</h3>
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-primary/20 hover:border-orange-primary/50 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-primary/20 hover:border-orange-primary/50 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-primary/20 hover:border-orange-primary/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black py-24" ref={formSectionRef}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              SEND A MESSAGE
            </span>
            <h2 className="section-title mb-6">Drop Us a Line</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you as soon as we can.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-black mb-4">Email Client Opened!</h3>
                  <p className="text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
                    Your default email client should have opened with your message pre-filled.
                    Simply hit send to deliver it to our team. If it didn&apos;t open, you can
                    email us directly at{' '}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-orange-primary hover-underline"
                    >
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-bold text-white/80 mb-2"
                      >
                        Name <span className="text-orange-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        placeholder="Your full name"
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-primary focus:ring-1 focus:ring-orange-primary transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-2 text-sm text-red-400" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-bold text-white/80 mb-2"
                      >
                        Email <span className="text-orange-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="you@example.com"
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-primary focus:ring-1 focus:ring-orange-primary transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-bold text-white/80 mb-2"
                    >
                      Subject <span className="text-orange-primary">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white focus:outline-none focus:border-orange-primary focus:ring-1 focus:ring-orange-primary transition-colors appearance-none ${
                        errors.subject ? 'border-red-500' : 'border-white/10'
                      } ${!formData.subject ? 'text-white/30' : ''}`}
                    >
                      {subjectOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="bg-neutral-900 text-white"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="mt-2 text-sm text-red-400" role="alert">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-bold text-white/80 mb-2"
                    >
                      Message <span className="text-orange-primary">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-primary focus:ring-1 focus:ring-orange-primary transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-red-400" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-orange-primary to-orange-light text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-3 hover:shadow-glow transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-dark py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              COMMON QUESTIONS
            </span>
            <h2 className="section-title mb-6">Frequently Asked</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Quick answers to the things people ask us most.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-black/60 mx-auto mb-6" />
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-black/80 font-semibold mb-10 max-w-2xl mx-auto">
              Every contribution helps a student stay in school, learn leadership,
              and build a brighter future through basketball.
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
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
