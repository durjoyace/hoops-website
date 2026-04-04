'use client'

import { useState, useMemo } from 'react'
import {
  Search,
  Download,
  Plus,
  MoreHorizontal,
  CheckCircle2,
  Circle,
  Trash2,
  Mail,
  Tag,
} from 'lucide-react'
import { mockLeads } from '@/lib/mock-data'

type StatusFilter = 'all' | 'hot' | 'warm' | 'cold'

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

export default function LeadsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const filteredLeads = useMemo(() => {
    return mockLeads.filter((lead) => {
      const matchesSearch =
        !search ||
        lead.company.toLowerCase().includes(search.toLowerCase()) ||
        lead.contact.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [search, statusFilter])

  const allSelected = filteredLeads.length > 0 && filteredLeads.every((l) => selectedIds.has(l.id))

  function toggleAll() {
    if (allSelected) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(filteredLeads.map((l) => l.id)))
    }
  }

  function toggleOne(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const statusFilters: { label: string; value: StatusFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Hot', value: 'hot' },
    { label: 'Warm', value: 'warm' },
    { label: 'Cold', value: 'cold' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Lead Sourcing</h1>
          <p className="text-surface-400 mt-1">
            {mockLeads.length} leads in your pipeline
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-surface-700 text-surface-300 rounded-lg hover:bg-surface-800 transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold">
            <Plus className="w-4 h-4" />
            Find New Leads
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
          <input
            type="text"
            placeholder="Search companies or contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface-900 border border-surface-700 rounded-lg text-sm text-white placeholder:text-surface-500 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>
        <div className="flex items-center gap-1 bg-surface-900 border border-surface-700 rounded-lg p-1">
          {statusFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatusFilter(f.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                statusFilter === f.value
                  ? 'bg-surface-700 text-white'
                  : 'text-surface-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedIds.size > 0 && (
        <div className="flex items-center gap-3 bg-brand-500/10 border border-brand-500/20 rounded-lg px-4 py-2.5">
          <span className="text-sm text-brand-400 font-medium">
            {selectedIds.size} selected
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-surface-300 hover:text-white bg-surface-800 rounded-md transition-colors">
              <Mail className="w-3.5 h-3.5" />
              Email
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-surface-300 hover:text-white bg-surface-800 rounded-md transition-colors">
              <Tag className="w-3.5 h-3.5" />
              Tag
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-danger-400 hover:text-danger-400 bg-surface-800 rounded-md transition-colors">
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-surface-900 border border-surface-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-800">
                <th className="w-12 px-4 py-3">
                  <button onClick={toggleAll} className="text-surface-400 hover:text-white transition-colors">
                    {allSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-brand-400" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="text-left text-xs font-medium text-surface-400 px-4 py-3">
                  Company
                </th>
                <th className="text-left text-xs font-medium text-surface-400 px-4 py-3">
                  Contact
                </th>
                <th className="text-left text-xs font-medium text-surface-400 px-4 py-3">
                  Channel
                </th>
                <th className="text-left text-xs font-medium text-surface-400 px-4 py-3">
                  Revenue
                </th>
                <th className="text-left text-xs font-medium text-surface-400 px-4 py-3">
                  Score
                </th>
                <th className="text-left text-xs font-medium text-surface-400 px-4 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-surface-400 px-4 py-3">
                  Enriched
                </th>
                <th className="w-12 px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className={`border-b border-surface-800/50 hover:bg-surface-800/30 transition-colors ${
                    selectedIds.has(lead.id) ? 'bg-brand-500/5' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleOne(lead.id)}
                      className="text-surface-400 hover:text-white transition-colors"
                    >
                      {selectedIds.has(lead.id) ? (
                        <CheckCircle2 className="w-4 h-4 text-brand-400" />
                      ) : (
                        <Circle className="w-4 h-4" />
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center text-xs font-semibold text-surface-300">
                        {lead.company.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{lead.company}</p>
                        <p className="text-xs text-surface-400">{lead.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm text-white">{lead.contact}</p>
                    <p className="text-xs text-surface-400">{lead.role}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md ${
                        channelBadgeColor[lead.channel] || 'bg-surface-700 text-surface-300'
                      }`}
                    >
                      {lead.channel}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-white">{lead.revenue}</span>
                  </td>
                  <td className="px-4 py-3">
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
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md capitalize ${
                        statusBadge[lead.status]
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {lead.enriched ? (
                      <CheckCircle2 className="w-4 h-4 text-accent-400 inline-block" />
                    ) : (
                      <Circle className="w-4 h-4 text-surface-600 inline-block" />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-surface-500 hover:text-white transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
