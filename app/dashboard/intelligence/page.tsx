'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Lightbulb,
  ArrowRight,
  Globe,
  ShieldAlert,
} from 'lucide-react'
import { countryIntelligence } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const countryKeys = ['TR', 'IN', 'CN'] as const
const countryMeta: Record<string, { flag: string; name: string }> = {
  TR: { flag: '\u{1F1F9}\u{1F1F7}', name: 'Turkey' },
  IN: { flag: '\u{1F1EE}\u{1F1F3}', name: 'India' },
  CN: { flag: '\u{1F1E8}\u{1F1F3}', name: 'China' },
}

function readinessStatusIcon(status: string) {
  switch (status) {
    case 'ready':
      return <CheckCircle2 size={16} className="text-accent-400" />
    case 'warning':
      return <AlertTriangle size={16} className="text-warning-400" />
    case 'missing':
      return <XCircle size={16} className="text-danger-400" />
    default:
      return null
  }
}

function readinessStatusBadge(status: string) {
  switch (status) {
    case 'ready':
      return 'bg-accent-500/10 text-accent-400 border-accent-500/20'
    case 'warning':
      return 'bg-warning-500/10 text-warning-400 border-warning-500/20'
    case 'missing':
      return 'bg-danger-500/10 text-danger-400 border-danger-500/20'
    default:
      return ''
  }
}

// Build per-country export checklists
function getExportChecklist(key: string) {
  const checklists: Record<string, { label: string; status: 'ready' | 'warning' | 'missing'; detail: string }[]> = {
    TR: [
      { label: 'Business Registration', status: 'ready', detail: 'Turkish Trade Registry certificate obtained.' },
      { label: 'Export License', status: 'ready', detail: 'Ministry of Trade export permit active.' },
      { label: 'FDA Compliance (Food-contact)', status: 'warning', detail: 'Glassware requires FDA food-contact testing — in progress.' },
      { label: 'CE / UL Certifications', status: 'ready', detail: 'CE marking completed for EU + U.S.' },
      { label: 'Customs Broker', status: 'ready', detail: 'Licensed U.S. customs broker assigned.' },
      { label: 'Product Liability Insurance', status: 'warning', detail: 'Quote received — pending policy activation.' },
      { label: 'Barcode / UPC Registration', status: 'missing', detail: 'GS1 US membership not yet applied for.' },
      { label: 'Shipping & Logistics', status: 'ready', detail: 'DDP terms with freight forwarder confirmed.' },
    ],
    IN: [
      { label: 'IEC (Import-Export Code)', status: 'ready', detail: 'DGFT IEC registration active.' },
      { label: 'GST Registration', status: 'ready', detail: 'GST compliance for export invoicing.' },
      { label: 'BIS Certifications', status: 'warning', detail: 'Bureau of Indian Standards cert pending for electronics.' },
      { label: 'FDA Registration', status: 'missing', detail: 'Required for food-contact items — not started.' },
      { label: 'Customs Broker', status: 'ready', detail: 'CHB licensed agent in Mumbai assigned.' },
      { label: 'Product Liability Insurance', status: 'ready', detail: 'Policy active with $2M coverage.' },
      { label: 'Barcode / UPC Registration', status: 'ready', detail: 'GS1 India membership active.' },
      { label: 'Shipping & Logistics', status: 'warning', detail: 'Seasonal port congestion — buffer 2 weeks.' },
    ],
    CN: [
      { label: 'Business License', status: 'ready', detail: 'Chinese business license and export rights confirmed.' },
      { label: 'Export License', status: 'ready', detail: 'MOFCOM export license active.' },
      { label: 'FCC Certification', status: 'warning', detail: 'FCC testing for electronics — 2 of 5 SKUs complete.' },
      { label: 'UL Certification', status: 'missing', detail: 'UL listing required for electrical products — not started.' },
      { label: 'Customs Broker', status: 'ready', detail: 'Licensed U.S. customs broker with China expertise.' },
      { label: 'Product Liability Insurance', status: 'ready', detail: 'Policy active with $5M coverage.' },
      { label: 'Barcode / UPC Registration', status: 'ready', detail: 'GS1 membership active.' },
      { label: 'Shipping & Logistics', status: 'ready', detail: 'Ocean freight + warehousing in LA confirmed.' },
    ],
  }
  return checklists[key] || checklists.TR
}

export default function IntelligencePage() {
  const [selected, setSelected] = useState<string>('TR')
  const intel = countryIntelligence[selected]
  const meta = countryMeta[selected]

  if (!intel) return null

  const checklist = getExportChecklist(selected)

  // Parse pricing benchmarks from string format
  const pricingData = intel.pricingBenchmarks.map((item) => {
    const colonIdx = item.indexOf(':')
    if (colonIdx === -1) return { category: item, range: '', tip: '' }
    const category = item.slice(0, colonIdx).trim()
    const rest = item.slice(colonIdx + 1).trim()
    return { category, range: rest, tip: rest }
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-white">Country Intelligence</h1>
        <p className="text-surface-400 text-sm mt-1">
          Export readiness, compliance, and market intelligence by country
        </p>
      </motion.div>

      {/* Country Selector */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3"
      >
        {countryKeys.map((key) => {
          const m = countryMeta[key]
          return (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all border',
                selected === key
                  ? 'bg-brand-600 border-brand-500 text-white shadow-glow'
                  : 'bg-surface-800 border-surface-700 text-surface-300 hover:border-surface-600',
              )}
            >
              <span className="text-lg">{m.flag}</span>
              {m.name}
            </button>
          )
        })}
      </motion.div>

      {/* Country Header Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-surface-800 border border-surface-700 rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-5xl">{meta.flag}</span>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {meta.name}
                <ArrowRight size={18} className="text-surface-500" />
                United States
              </h2>
              <p className="text-sm text-surface-400 mt-1 max-w-2xl">
                {intel.exportReadiness}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 4-Panel Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`panels-${selected}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-2 gap-6"
        >
          {/* 1. Export Readiness Checklist */}
          <div className="bg-surface-800 border border-surface-700 rounded-xl p-6">
            <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <Globe size={18} className="text-brand-400" />
              Export Readiness Checklist
            </h3>
            <div className="space-y-3">
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-surface-900/50 border border-surface-700/50"
                >
                  {readinessStatusIcon(item.status)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-sm font-medium text-white">{item.label}</span>
                      <span
                        className={cn(
                          'text-[10px] px-2 py-0.5 rounded-full border capitalize font-medium',
                          readinessStatusBadge(item.status),
                        )}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-surface-400">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-brand-500/5 border border-brand-500/10">
              <div className="flex items-start gap-2">
                <Lightbulb size={14} className="text-brand-400 mt-0.5 shrink-0" />
                <p className="text-xs text-brand-300">
                  Tip: Complete all &quot;missing&quot; items before your first shipment to avoid customs delays and penalties.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Communication Tips */}
          <div className="bg-surface-800 border border-surface-700 rounded-xl p-6">
            <h3 className="text-base font-semibold text-white mb-4">Communication Tips</h3>
            <div className="space-y-3">
              {intel.communicationTips.map((tip, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-surface-900/50 border border-surface-700/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-surface-300 leading-relaxed">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. U.S. Pricing Benchmarks */}
          <div className="bg-surface-800 border border-surface-700 rounded-xl p-6">
            <h3 className="text-base font-semibold text-white mb-4">U.S. Pricing Benchmarks</h3>
            <div className="space-y-3">
              {pricingData.map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-surface-900/50 border border-surface-700/50"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white">{item.category}</span>
                  </div>
                  <p className="text-xs text-surface-400">{item.range}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Market Insights */}
          <div className="bg-surface-800 border border-surface-700 rounded-xl p-6">
            <h3 className="text-base font-semibold text-white mb-4">Market Insights</h3>
            <div className="space-y-2.5">
              {intel.marketInsights.map((insight, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                  <p className="text-sm text-surface-300 leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Full-Width Compliance Hints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-surface-800 border border-surface-700 rounded-xl p-6"
      >
        <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
          <ShieldAlert size={18} className="text-warning-400" />
          Compliance Hints
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {intel.complianceHints.map((hint, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg bg-warning-500/5 border border-warning-500/10"
            >
              <AlertTriangle size={14} className="text-warning-400 mt-0.5 shrink-0" />
              <p className="text-sm text-surface-300 leading-relaxed">{hint}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-surface-500 mt-4 italic">
          Disclaimer: This information is for guidance only and does not constitute legal or trade compliance advice.
          Always consult with a licensed customs broker and trade attorney for your specific situation.
        </p>
      </motion.div>
    </div>
  )
}
