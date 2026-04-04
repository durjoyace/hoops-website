import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
  return num.toString()
}

export function getScoreColor(score: number): string {
  if (score >= 80) return 'text-accent-400'
  if (score >= 60) return 'text-warning-400'
  return 'text-surface-400'
}

export function getScoreLabel(score: number): 'hot' | 'warm' | 'cold' {
  if (score >= 80) return 'hot'
  if (score >= 60) return 'warm'
  return 'cold'
}

export function getScoreBadge(status: 'hot' | 'warm' | 'cold'): string {
  switch (status) {
    case 'hot': return 'badge-accent'
    case 'warm': return 'badge-warning'
    case 'cold': return 'badge-danger'
  }
}

export function getStageBadge(stage: string): string {
  switch (stage) {
    case 'lead': return 'bg-surface-700 text-surface-300'
    case 'contacted': return 'bg-brand-500/10 text-brand-400'
    case 'responded': return 'bg-warning-500/10 text-warning-400'
    case 'negotiation': return 'bg-accent-500/10 text-accent-400'
    case 'closed': return 'bg-accent-600 text-white'
    default: return 'bg-surface-700 text-surface-300'
  }
}
