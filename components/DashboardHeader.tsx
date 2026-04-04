'use client'

import Link from 'next/link'
import { Search, Plus, Bell } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-surface-800 bg-surface-950/80 px-6 backdrop-blur">
      {/* Search bar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-400" />
        <input
          type="text"
          placeholder="Search leads, deals, workflows..."
          className="h-9 w-full rounded-lg border border-surface-700 bg-surface-800 pl-9 pr-12 text-sm text-white placeholder-surface-400 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-surface-600 bg-surface-700 px-1.5 py-0.5 text-[10px] font-medium text-surface-400">
          /
        </kbd>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* New Workflow button */}
        <Link
          href="/dashboard/workflows"
          className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
        >
          <Plus className="h-4 w-4" />
          New Workflow
        </Link>

        {/* Notifications */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-surface-400 transition-colors hover:bg-surface-800 hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent-500" />
        </button>
      </div>
    </header>
  )
}
