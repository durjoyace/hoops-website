'use client'

import {
  Users,
  Sparkles,
  Mail,
  MessageSquareReply,
  TrendingUp,
  Trophy,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Send,
  BarChart3,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { dashboardStats, mockLeads, mockDeals } from '@/lib/mock-data'
import { getScoreBadge, getStageBadge, formatNumber } from '@/lib/utils'

const statIcons: Record<string, React.ReactNode> = {
  users: <Users className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  reply: <MessageSquareReply className="w-5 h-5" />,
  pipeline: <TrendingUp className="w-5 h-5" />,
  trophy: <Trophy className="w-5 h-5" />,
}

const channelBadgeColor: Record<string, string> = {
  Distributor: 'bg-brand-500/10 text-brand-400',
  'B2B Direct': 'bg-accent-500/10 text-accent-400',
  Retail: 'bg-warning-500/10 text-warning-400',
  OEM: 'bg-surface-700 text-surface-300',
}

const statusBadge: Record<string, string> = {
  hot: 'bg-accent-500/10 text-accent-400',
  warm: 'bg-warning-500/10 text-warning-400',
  cold: 'bg-surface-700 text-surface-400',
}

export default function DashboardPage() {
  const topLeads = mockLeads.slice(0, 5)
  const topDeals = mockDeals.slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-surface-400 mt-1">Welcome back, Turkish Glass Co.</p>
        </div>
        <Link
          href="/dashboard/workflows"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-gradient text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
        >
          <Zap className="w-4 h-4" />
          Run GTM Workflow
        </Link>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-6 gap-4">
        {dashboardStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-900 border border-surface-800 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400">
                {statIcons[stat.icon]}
              </div>
              <span
                className={`flex items-center gap-0.5 text-xs font-medium ${
                  stat.positive ? 'text-accent-400' : 'text-danger-400'
                }`}
              >
                {stat.positive ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-surface-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Leads Table */}
        <div className="lg:col-span-2 bg-surface-900 border border-surface-800 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-surface-800 flex items-center justify-between">
            <h2 className="text-base font-semibold text-white">Top Leads</h2>
            <Link
              href="/dashboard/leads"
              className="text-sm text-brand-400 hover:text-brand-300 transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-surface-800">
                  <th className="text-left text-xs font-medium text-surface-400 px-5 py-3">
                    Company
                  </th>
                  <th className="text-left text-xs font-medium text-surface-400 px-5 py-3">
                    Contact
                  </th>
                  <th className="text-left text-xs font-medium text-surface-400 px-5 py-3">
                    Channel
                  </th>
                  <th className="text-left text-xs font-medium text-surface-400 px-5 py-3">
                    Score
                  </th>
                  <th className="text-left text-xs font-medium text-surface-400 px-5 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {topLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-surface-800/50 hover:bg-surface-800/30 transition-colors"
                  >
                    <td className="px-5 py-3">
                      <p className="text-sm font-medium text-white">{lead.company}</p>
                      <p className="text-xs text-surface-400">{lead.location}</p>
                    </td>
                    <td className="px-5 py-3">
                      <p className="text-sm text-white">{lead.contact}</p>
                      <p className="text-xs text-surface-400">{lead.role}</p>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md ${
                          channelBadgeColor[lead.channel] || 'bg-surface-700 text-surface-300'
                        }`}
                      >
                        {lead.channel}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`text-sm font-semibold ${
                          lead.score >= 80
                            ? 'text-accent-400'
                            : lead.score >= 60
                            ? 'text-warning-400'
                            : 'text-surface-400'
                        }`}
                      >
                        {lead.score}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md capitalize ${
                          statusBadge[lead.status]
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pipeline Widget */}
        <div className="bg-surface-900 border border-surface-800 rounded-xl">
          <div className="px-5 py-4 border-b border-surface-800 flex items-center justify-between">
            <h2 className="text-base font-semibold text-white">Pipeline</h2>
            <Link
              href="/dashboard/pipeline"
              className="text-sm text-brand-400 hover:text-brand-300 transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="p-5 space-y-4">
            {topDeals.map((deal) => (
              <div key={deal.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">{deal.company}</p>
                  <p className="text-xs text-surface-400">
                    {deal.value}
                  </p>
                </div>
                <span
                  className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md capitalize ${getStageBadge(
                    deal.stage
                  )}`}
                >
                  {deal.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/dashboard/leads"
          className="group flex items-center gap-4 bg-surface-900 border border-surface-800 rounded-xl p-5 hover:border-brand-500/50 transition-all"
        >
          <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Find New Leads</h3>
            <p className="text-xs text-surface-400">Source and enrich prospects</p>
          </div>
        </Link>

        <Link
          href="/dashboard/outreach"
          className="group flex items-center gap-4 bg-surface-900 border border-surface-800 rounded-xl p-5 hover:border-accent-500/50 transition-all"
        >
          <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 group-hover:bg-accent-500/20 transition-colors">
            <Send className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Launch Outreach</h3>
            <p className="text-xs text-surface-400">Send personalized campaigns</p>
          </div>
        </Link>

        <Link
          href="/dashboard/scoring"
          className="group flex items-center gap-4 bg-surface-900 border border-surface-800 rounded-xl p-5 hover:border-warning-500/50 transition-all"
        >
          <div className="w-11 h-11 rounded-xl bg-warning-500/10 flex items-center justify-center text-warning-400 group-hover:bg-warning-500/20 transition-colors">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">View Analytics</h3>
            <p className="text-xs text-surface-400">Track performance metrics</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
