import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="font-display text-8xl md:text-9xl gradient-text mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Looks like this page went out of bounds. Let&apos;s get you back in the game.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-orange-primary to-orange-light text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>
          <Link
            href="/get-involved"
            className="px-8 py-4 glass border border-white/20 text-white font-bold rounded-full hover:border-orange-primary/50 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </main>
  )
}
