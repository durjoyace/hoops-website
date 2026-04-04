'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Flame,
  Thermometer,
  Snowflake,
  Save,
  Target,
  DollarSign,
  Store,
  TrendingUp,
  Building2,
  Activity,
  ArrowUpDown,
} from 'lucide-react'
import { mockLeads } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const scoringDimensions = [
  { name: 'Product Fit', weight: 30, icon: Target, description: 'How well the product matches buyer needs and category focus' },
  { name: 'Price Compatibility', weight: 20, icon: DollarSign, description: 'Alignment between FOB pricing and buyer budget expectations' },
  { name: 'Channel Match', weight: 15, icon: Store, description: 'Compatibility with the buyer\'s distribution channel' },
  { name: 'Import Likelihood', weight: 15, icon: TrendingUp, description: 'Historical import patterns and willingness to source internationally' },
  { name: 'Company Size', weight: 10, icon: Building2, description: 'Revenue and employee count relative to ideal customer profile' },
  { name: 'Recent Activity', weight: 10, icon: Activity, description: 'Engagement signals — email opens, website visits, responses' },
]

const scoreRanges = [
  { label: '90-100', min: 90, max: 100, tag: 'Hot' },
  { label: '80-89', min: 80, max: 89, tag: 'Hot' },
  { label: '70-79', min: 70, max: 79, tag: 'Warm' },
  { label: '60-69', min: 60, max: 69, tag: 'Warm' },
  { label: '50-59', min: 50, max: 59, tag: 'Cold' },
  { label: '0-49', min: 0, max: 49, tag: 'Cold' },
]

function getDistribution() {
  return scoreRanges.map((r) => ({
    ...r,
    count: mockLeads.filter((l) => l.score >= r.min && l.score <= r.max).length,
  }))
}

function statusBadge(status: string) {
  switch (status) {
    case 'hot':
      return 'bg-accent-500/10 text-accent-400 border border-accent-500/20'
    case 'warm':
      return 'bg-warning-500/10 text-warning-400 border border-warning-500/20'
    default:
      return 'bg-surface-700 text-surface-400 border border-surface-600'
  }
}

function tagColor(tag: string) {
  switch (tag) {
    case 'Hot':
      return 'text-accent-400'
    case 'Warm':
      return 'text-warning-400'
    default:
      return 'text-surface-400'
  }
}

export default function ScoringPage() {
  const [sortAsc, setSortAsc] = useState(false)
  const hotCount = mockLeads.filter((l) => l.score >= 80).length
  const warmCount = mockLeads.filter((l) => l.score >= 60 && l.score < 80).length
  const coldCount = mockLeads.filter((l) => l.score < 60).length

  const distribution = getDistribution()
  const maxCount = Math.max(...distribution.map((d) => d.count), 1)

  const sorted = [...mockLeads].sort((a, b) =>
    sortAsc ? a.score - b.score : b.score - a.score,
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-white">Lead Scoring</h1>
          <p className="text-surface-400 text-sm mt-1">
            AI-powered scoring engine with 6 weighted dimensions
          </p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Save size={16} />
          Save Configuration
        </button>
      </motion.div>

      {/* Summary stat cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Hot Leads', sublabel: '80+', count: hotCount, icon: Flame, color: 'accent' },
          { label: 'Warm Leads', sublabel: '60-79', count: warmCount, icon: Thermometer, color: 'warning' },
          { label: 'Cold Leads', sublabel: '<60', count: coldCount, icon: Snowflake, color: 'surface' },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-800 border border-surface-700 rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-surface-400 text-sm">{card.label} <span className="text-surface-500">({card.sublabel})</span></p>
                <p className={cn('text-3xl font-bold mt-1', card.color === 'accent' ? 'text-accent-400' : card.color === 'warning' ? 'text-warning-400' : 'text-surface-300')}>
                  {card.count}
                </p>
              </div>
              <div className={cn('p-3 rounded-lg', card.color === 'accent' ? 'bg-accent-500/10' : card.color === 'warning' ? 'bg-warning-500/10' : 'bg-surface-700')}>
                <card.icon size={24} className={card.color === 'accent' ? 'text-accent-400' : card.color === 'warning' ? 'text-warning-400' : 'text-surface-400'} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Scoring Dimensions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-800 border border-surface-700 rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold text-white mb-4">Scoring Dimensions</h2>
          <div className="space-y-4">
            {scoringDimensions.map((dim) => (
              <div key={dim.name} className="flex items-start gap-3">
                <div className="p-2 bg-brand-500/10 rounded-lg shrink-0 mt-0.5">
                  <dim.icon size={18} className="text-brand-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white">{dim.name}</span>
                    <span className="text-xs font-semibold text-brand-400">{dim.weight}%</span>
                  </div>
                  <p className="text-xs text-surface-400 mb-2">{dim.description}</p>
                  <div className="h-1.5 bg-surface-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dim.weight * 3.33}%` }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-full bg-brand-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Score Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface-800 border border-surface-700 rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold text-white mb-4">Score Distribution</h2>
          <div className="space-y-3">
            {distribution.map((d) => (
              <div key={d.label} className="flex items-center gap-3">
                <span className="text-xs text-surface-400 w-12 text-right font-mono">{d.label}</span>
                <div className="flex-1 h-7 bg-surface-700 rounded-md overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.count / maxCount) * 100}%` }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={cn(
                      'h-full rounded-md flex items-center justify-end pr-2',
                      d.tag === 'Hot'
                        ? 'bg-accent-500/30'
                        : d.tag === 'Warm'
                        ? 'bg-warning-500/30'
                        : 'bg-surface-600',
                    )}
                  >
                    {d.count > 0 && (
                      <span className="text-xs font-semibold text-white">{d.count}</span>
                    )}
                  </motion.div>
                </div>
                <span className={cn('text-xs font-medium w-10', tagColor(d.tag))}>{d.tag}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Scored Leads Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-surface-800 border border-surface-700 rounded-xl overflow-hidden"
      >
        <div className="p-6 border-b border-surface-700 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Top Scored Leads</h2>
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="flex items-center gap-1 text-xs text-surface-400 hover:text-white transition-colors"
          >
            <ArrowUpDown size={14} />
            {sortAsc ? 'Lowest first' : 'Highest first'}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-700">
                <th className="text-left text-surface-400 font-medium px-6 py-3">#</th>
                <th className="text-left text-surface-400 font-medium px-6 py-3">Company</th>
                <th className="text-left text-surface-400 font-medium px-6 py-3">Contact</th>
                <th className="text-left text-surface-400 font-medium px-6 py-3">Score</th>
                <th className="text-left text-surface-400 font-medium px-6 py-3">Status</th>
                <th className="text-left text-surface-400 font-medium px-6 py-3">Product Fit</th>
                <th className="text-left text-surface-400 font-medium px-6 py-3">Price Match</th>
                <th className="text-left text-surface-400 font-medium px-6 py-3">Channel</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((lead, idx) => {
                const productFit = lead.score + Math.floor(Math.random() * 6 - 3)
                const priceMatch = lead.score - Math.floor(Math.random() * 10)
                return (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 * idx }}
                    className="border-b border-surface-700/50 hover:bg-surface-700/30 transition-colors"
                  >
                    <td className="px-6 py-3 text-surface-500 font-mono text-xs">{idx + 1}</td>
                    <td className="px-6 py-3 text-white font-medium">{lead.company}</td>
                    <td className="px-6 py-3 text-surface-300">{lead.contact}</td>
                    <td className="px-6 py-3">
                      <span
                        className={cn(
                          'font-bold',
                          lead.score >= 80
                            ? 'text-accent-400'
                            : lead.score >= 60
                            ? 'text-warning-400'
                            : 'text-surface-400',
                        )}
                      >
                        {lead.score}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className={cn('px-2 py-0.5 rounded-full text-xs font-medium capitalize', statusBadge(lead.status))}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-500 rounded-full"
                            style={{ width: `${Math.min(productFit, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs text-surface-400">{Math.min(productFit, 100)}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent-500 rounded-full"
                            style={{ width: `${Math.min(Math.max(priceMatch, 0), 100)}%` }}
                          />
                        </div>
                        <span className="text-xs text-surface-400">{Math.min(Math.max(priceMatch, 0), 100)}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-xs bg-surface-700 text-surface-300 px-2 py-0.5 rounded">
                        {lead.channel}
                      </span>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
