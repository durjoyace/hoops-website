"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-surface-950 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold gradient-text mb-4">Oops</h1>
      <p className="text-xl text-surface-300 mb-8">Something went wrong</p>
      <div className="flex gap-4">
        <button onClick={() => reset()} className="btn-primary">
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-lg border border-surface-700 text-surface-300 hover:text-surface-50 hover:border-surface-500 transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
