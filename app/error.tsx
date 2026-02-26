'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="font-display text-7xl md:text-8xl gradient-text mb-6">Oops</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          Don&apos;t worry — even the best players miss sometimes. Let&apos;s try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-4 bg-gradient-to-r from-orange-primary to-orange-light text-black font-bold rounded-full hover:scale-105 transition-transform"
        >
          Try Again
        </button>
      </div>
    </main>
  )
}
