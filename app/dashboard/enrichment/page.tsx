'use client'

import {
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
  Database,
  ExternalLink,
  Zap,
} from 'lucide-react'

const enrichmentStats = [
  { label: 'Total Leads', value: '1,247', icon: Database, color: 'text-brand-400', bg: 'bg-brand-500/10' },
  { label: 'Enriched', value: '982', sub: '78.7%', icon: CheckCircle2, color: 'text-accent-400', bg: 'bg-accent-500/10' },
  { label: 'Pending', value: '143', icon: Clock, color: 'text-warning-400', bg: 'bg-warning-500/10' },
  { label: 'Failed', value: '122', icon: AlertCircle, color: 'text-danger-400', bg: 'bg-danger-500/10' },
]

const dataCoverage = [
  { field: 'Company Email', percent: 92 },
  { field: 'Contact Name', percent: 98 },
  { field: 'Job Title', percent: 85 },
  { field: 'Revenue', percent: 76 },
  { field: 'Company Size', percent: 81 },
  { field: 'Website', percent: 95 },
  { field: 'LinkedIn', percent: 68 },
  { field: 'Sales Channel', percent: 89 },
]

const enrichmentQueue = [
  { company: 'BuildRight Inc.', status: 'enriched' as const },
  { company: 'Pacific Glass Co.', status: 'enriched' as const },
  { company: 'HomeStyle Depot', status: 'pending' as const },
  { company: 'Summit Materials', status: 'pending' as const },
  { company: 'Coastal Imports', status: 'enriched' as const },
  { company: 'GreenBuild Corp.', status: 'pending' as const },
]

const dataSources = [
  {
    name: 'Apollo',
    description: 'B2B contact and company data enrichment',
    status: 'Connected',
    icon: '🚀',
  },
  {
    name: 'Clearbit',
    description: 'Company firmographic data and technographics',
    status: 'Connected',
    icon: '🔍',
  },
  {
    name: 'Email Verification',
    description: 'Real-time email deliverability verification',
    status: 'Connected',
    icon: '✉️',
  },
]

function getBarColor(percent: number): string {
  if (percent >= 90) return 'bg-accent-400'
  if (percent >= 80) return 'bg-brand-400'
  if (percent >= 70) return 'bg-warning-400'
  return 'bg-danger-400'
}

export default function EnrichmentPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Enrichment</h1>
          <p className="text-surface-400 mt-1">Enhance your lead data with verified information</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-surface-700 text-surface-300 rounded-lg hover:bg-surface-800 transition-colors text-sm font-medium">
            <RefreshCw className="w-4 h-4" />
            Re-enrich Failed
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Enrich All
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {enrichmentStats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-surface-900 border border-surface-800 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-lg ${stat.bg} flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                {stat.sub && (
                  <span className="text-xs font-medium text-accent-400">{stat.sub}</span>
                )}
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-surface-400 mt-0.5">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Two-column: Data Coverage + Enrichment Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Coverage */}
        <div className="bg-surface-900 border border-surface-800 rounded-xl">
          <div className="px-5 py-4 border-b border-surface-800">
            <h2 className="text-base font-semibold text-white">Data Coverage</h2>
          </div>
          <div className="p-5 space-y-4">
            {dataCoverage.map((item) => (
              <div key={item.field}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-surface-300">{item.field}</span>
                  <span className="text-sm font-medium text-white">{item.percent}%</span>
                </div>
                <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${getBarColor(item.percent)}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enrichment Queue */}
        <div className="bg-surface-900 border border-surface-800 rounded-xl">
          <div className="px-5 py-4 border-b border-surface-800">
            <h2 className="text-base font-semibold text-white">Enrichment Queue</h2>
          </div>
          <div className="p-5 space-y-3">
            {enrichmentQueue.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-surface-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center text-xs font-semibold text-surface-300">
                    {item.company
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <span className="text-sm font-medium text-white">{item.company}</span>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md ${
                    item.status === 'enriched'
                      ? 'bg-accent-500/10 text-accent-400'
                      : 'bg-warning-500/10 text-warning-400'
                  }`}
                >
                  {item.status === 'enriched' ? (
                    <CheckCircle2 className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  {item.status === 'enriched' ? 'Enriched' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connected Data Sources */}
      <div>
        <h2 className="text-base font-semibold text-white mb-4">Connected Data Sources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {dataSources.map((source) => (
            <div
              key={source.name}
              className="bg-surface-900 border border-surface-800 rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{source.icon}</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-md bg-accent-500/10 text-accent-400">
                  <Zap className="w-3 h-3" />
                  {source.status}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{source.name}</h3>
              <p className="text-xs text-surface-400">{source.description}</p>
              <button className="mt-3 inline-flex items-center gap-1 text-xs text-brand-400 hover:text-brand-300 transition-colors">
                Configure
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
