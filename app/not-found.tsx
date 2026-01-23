'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="font-display text-[150px] sm:text-[200px] leading-none gradient-text">
            404
          </div>
        </motion.div>

        {/* Basketball animation */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="w-16 h-16 mx-auto mb-8"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-orange-600 relative">
            {/* Basketball lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-black/30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-0.5 h-full bg-black/30" />
            </div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <path
                d="M 30 10 Q 15 50 30 90"
                fill="none"
                stroke="rgba(0,0,0,0.3)"
                strokeWidth="2"
              />
              <path
                d="M 70 10 Q 85 50 70 90"
                fill="none"
                stroke="rgba(0,0,0,0.3)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Out of Bounds!
          </h1>
          <p className="text-white/60 text-lg mb-8">
            Looks like this page took a shot and missed. Let&apos;s get you back in the game.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:scale-105 transition-transform"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/40 text-sm mb-4">Or check out these pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/about" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
              Our Story
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/programs" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
              Programs
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/impact" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
              Impact
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/volunteer" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
              Volunteer
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
