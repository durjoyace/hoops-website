'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  DollarSign,
  TrendingUp,
  Trophy,
  BarChart3,
  User,
  MessageSquare,
  Inbox,
} from 'lucide-react'
import { mockDeals } from '@/lib/mock-data'
import { cn, formatNumber } from '@/lib/utils'

const stages: { key: string; label: string; color: string }[] = [
  { key: 'lead', label: 'Lead', color: 'border-t-surface-500' },
  { key: 'contacted', label: 'Contacted', color: 'border-t-brand-500' },
  { key: 'responded', label: 'Responded', color: 'border-t-warning-500' },
  { key: 'negotiation', label: 'Negotiation', color: 'border-t-accent-500' },
  { key: 'closed', label: 'Closed Won', color: 'border-t-accent-400' },
]

function parseValue(v: string | number): number {
  if (typeof v === 'number') return v
  return parseInt(v.replace(/[^0-9]/g, ''), 10) || 0
}

function DealCard({ deal }: { deal: (typeof mockDeals)[0] }) {
  const value = parseValue(deal.value)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-surface-900 border border-surface-700 rounded-lg p-3.5 hover:border-surface-600 transition-colors cursor-pointer"
    >
      <h4 className="text-sm font-semibold text-white mb-1.5">{deal.company}</h4>
      <div className="flex items-center gap-1.5 text-xs text-surface-400 mb-2">
        <User size={12} />
        <span>{deal.contact}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-accent-400">
          {typeof deal.value === 'string' ? deal.value : `$${formatNumber(value)}`}
        </span>
        <span className="text-[10px] text-surface-500">{deal.lastUpdate}</span>
      </div>
      {deal.notes && (
        <div className="flex items-start gap-1.5 mb-2">
          <MessageSquare size={11} className="text-surface-500 mt-0.5 shrink-0" />
          <p className="text-[11px] text-surface-400 line-clamp-2">{deal.notes}</p>
        </div>
      )}
      {/* Probability bar */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-surface-700 rounded-full overflow-hidden">
          <div
            className={cn(
              'h-full rounded-full',
              deal.probability >= 80
                ? 'bg-accent-500'
                : deal.probability >= 50
                ? 'bg-warning-500'
                : 'bg-surface-500',
            )}
            style={{ width: `${deal.probability}%` }}
          />
        </div>
        <span className="text-[10px] text-surface-500 font-mono">{deal.probability}%</span>
      </div>
    </motion.div>
  )
}

export default function PipelinePage() {
  const stats = useMemo(() => {
    const totalDeals = mockDeals.length
    const pipelineValue = mockDeals.reduce((sum, d) => sum + parseValue(d.value), 0)
    const wonDeals = mockDeals.filter((d) => d.stage === 'closed')
    const wonThisMonth = wonDeals.length
    const avgDealSize = Math.round(pipelineValue / totalDeals)
    return { totalDeals, pipelineValue, wonThisMonth, avgDealSize }
  }, [])

  const dealsByStage = useMemo(() => {
    const grouped: Record<string, typeof mockDeals> = {}
    stages.forEach((s) => {
      grouped[s.key] = mockDeals.filter((d) => d.stage === s.key)
    })
    return grouped
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-white">CRM Pipeline</h1>
          <p className="text-surface-400 text-sm mt-1">
            Track deals from lead to close across your GTM funnel
          </p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus size={16} />
          Add Deal
        </button>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            label: 'Total Deals',
            value: stats.totalDeals.toString(),
            icon: BarChart3,
            color: 'brand',
          },
          {
            label: 'Pipeline Value',
            value: `$${formatNumber(stats.pipelineValue)}`,
            icon: DollarSign,
            color: 'accent',
          },
          {
            label: 'Won This Month',
            value: stats.wonThisMonth.toString(),
            icon: Trophy,
            color: 'warning',
          },
          {
            label: 'Avg Deal Size',
            value: `$${formatNumber(stats.avgDealSize)}`,
            icon: TrendingUp,
            color: 'brand',
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-surface-800 border border-surface-700 rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-surface-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div
                className={cn(
                  'p-3 rounded-lg',
                  stat.color === 'brand'
                    ? 'bg-brand-500/10'
                    : stat.color === 'accent'
                    ? 'bg-accent-500/10'
                    : 'bg-warning-500/10',
                )}
              >
                <stat.icon
                  size={22}
                  className={
                    stat.color === 'brand'
                      ? 'text-brand-400'
                      : stat.color === 'accent'
                      ? 'text-accent-400'
                      : 'text-warning-400'
                  }
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-5 gap-4">
        {stages.map((stage, si) => {
          const deals = dealsByStage[stage.key] || []
          const colValue = deals.reduce((s, d) => s + parseValue(d.value), 0)
          return (
            <motion.div
              key={stage.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + si * 0.06 }}
              className={cn(
                'bg-surface-800 border border-surface-700 rounded-xl border-t-2 min-h-[400px] flex flex-col',
                stage.color,
              )}
            >
              {/* Column header */}
              <div className="p-4 border-b border-surface-700">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-white">{stage.label}</h3>
                  <span className="text-xs bg-surface-700 text-surface-300 px-1.5 py-0.5 rounded-full font-medium">
                    {deals.length}
                  </span>
                </div>
                <p className="text-xs text-surface-500">
                  ${formatNumber(colValue)}
                </p>
              </div>

              {/* Deal cards */}
              <div className="p-3 space-y-3 flex-1">
                {deals.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-surface-600 py-8">
                    <Inbox size={28} className="mb-2" />
                    <p className="text-xs">No deals</p>
                  </div>
                ) : (
                  deals.map((deal) => <DealCard key={deal.id} deal={deal} />)
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
