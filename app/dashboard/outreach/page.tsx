'use client'

import { motion } from 'framer-motion'
import {
  Plus,
  Send,
  Eye,
  MessageSquare,
  ThumbsUp,
  Mail,
  Pause,
  Pencil,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Clock,
  FileEdit,
  Reply,
} from 'lucide-react'
import { outreachSequences } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

function stepStatusBadge(status: string) {
  switch (status) {
    case 'sent':
      return { label: 'Sent', cls: 'bg-accent-500/10 text-accent-400', icon: CheckCircle2 }
    case 'scheduled':
      return { label: 'Scheduled', cls: 'bg-brand-500/10 text-brand-400', icon: Clock }
    default:
      return { label: 'Draft', cls: 'bg-surface-700 text-surface-400', icon: FileEdit }
  }
}

export default function OutreachPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-white">Outreach Engine</h1>
          <p className="text-surface-400 text-sm mt-1">
            AI-powered email sequences and multi-channel outreach
          </p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus size={16} />
          New Sequence
        </button>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Sent', value: '3,456', icon: Send, color: 'brand' },
          { label: 'Open Rate', value: '42%', icon: Eye, color: 'accent' },
          { label: 'Reply Rate', value: '8.5%', icon: MessageSquare, color: 'warning' },
          { label: 'Positive Replies', value: '4.2%', icon: ThumbsUp, color: 'accent' },
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

      {/* Active Sequences */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Active Sequences</h2>
        <div className="space-y-4">
          {outreachSequences.map((seq, si) => (
            <motion.div
              key={seq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + si * 0.1 }}
              className="bg-surface-800 border border-surface-700 rounded-xl p-6"
            >
              {/* Sequence Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-white">{seq.name}</h3>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-1.5 text-xs text-surface-400">
                    <span className="flex items-center gap-1">
                      <Send size={12} />
                      {seq.steps.filter((s) => s.status === 'sent').length} steps sent
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {seq.steps.reduce((a, s) => a + s.opens, 0)} opens
                    </span>
                    <span className="flex items-center gap-1">
                      <Reply size={12} />
                      {seq.steps.reduce((a, s) => a + s.replies, 0)} replies
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-xs bg-surface-700 hover:bg-surface-600 text-surface-300 px-3 py-1.5 rounded-lg transition-colors">
                    <Pause size={14} />
                    Pause
                  </button>
                  <button className="flex items-center gap-1.5 text-xs bg-surface-700 hover:bg-surface-600 text-surface-300 px-3 py-1.5 rounded-lg transition-colors">
                    <Pencil size={14} />
                    Edit
                  </button>
                </div>
              </div>

              {/* Step Timeline */}
              <div className="flex items-start gap-0 overflow-x-auto pb-2">
                {seq.steps.map((step, i) => {
                  const badge = stepStatusBadge(step.status)
                  return (
                    <div key={i} className="flex items-start">
                      <div className="flex flex-col items-center min-w-[180px]">
                        {/* Circle */}
                        <div
                          className={cn(
                            'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2',
                            step.status === 'sent'
                              ? 'border-accent-500 bg-accent-500/10 text-accent-400'
                              : step.status === 'scheduled'
                              ? 'border-brand-500 bg-brand-500/10 text-brand-400'
                              : 'border-surface-600 bg-surface-700 text-surface-400',
                          )}
                        >
                          {i + 1}
                        </div>
                        {/* Content */}
                        <div className="mt-2 text-center px-2">
                          <p className="text-[10px] text-surface-500 mb-1">Day {step.day}</p>
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Mail size={10} className="text-surface-500" />
                            <span
                              className={cn(
                                'text-[10px] px-1.5 py-0.5 rounded',
                                badge.cls,
                              )}
                            >
                              {badge.label}
                            </span>
                          </div>
                          <p className="text-xs text-surface-300 leading-tight line-clamp-2">
                            {step.subject}
                          </p>
                          {step.status === 'sent' && (
                            <div className="flex items-center justify-center gap-3 mt-1.5 text-[10px] text-surface-500">
                              <span>{step.opens} opens</span>
                              <span>{step.replies} replies</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {i < seq.steps.length - 1 && (
                        <div className="w-8 h-px bg-surface-600 mt-4 shrink-0" />
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Email Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-surface-800 border border-surface-700 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-brand-400" />
            <h2 className="text-lg font-semibold text-white">AI Email Preview</h2>
          </div>
          <button className="flex items-center gap-1.5 text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg transition-colors">
            <RefreshCw size={14} />
            Regenerate
          </button>
        </div>

        <div className="bg-surface-900 border border-surface-700 rounded-lg p-5">
          <div className="mb-4 pb-3 border-b border-surface-700">
            <p className="text-xs text-surface-500 mb-1">Subject</p>
            <p className="text-sm font-medium text-white">
              Handcrafted Turkish Glassware for {'{'}Company{'}'}
            </p>
          </div>

          <div className="text-sm text-surface-300 space-y-3 leading-relaxed">
            <p>Hi {'{'}First Name{'}'},</p>
            <p>
              I came across {'{'}Company{'}'}&apos;s impressive home goods collection and wanted to
              reach out about a potential partnership opportunity.
            </p>
            <p>
              We are a leading Turkish glassware manufacturer with over 25 years of experience
              crafting premium handblown glass products. Our artisan collection includes
              hand-painted tea sets, decorative vases, and tableware that have been featured in
              top U.S. retailers including Williams-Sonoma and Crate &amp; Barrel.
            </p>
            <p>What sets us apart:</p>
            <ul className="list-disc pl-5 space-y-1 text-surface-400">
              <li>Handcrafted by master artisans in Istanbul with centuries-old techniques</li>
              <li>Competitive FOB pricing starting at $8 per unit with flexible MOQs</li>
              <li>FDA-compliant food-contact materials with full certification documentation</li>
              <li>DDP shipping to any U.S. port with 4-6 week lead times</li>
            </ul>
            <p>
              Would you be open to a quick 15-minute call this week to discuss how our collection
              might complement {'{'}Company{'}'}&apos;s product lineup? I&apos;d also be happy to
              send a complimentary sample box.
            </p>
            <p>
              Best regards,
              <br />
              <span className="text-white">Mehmet Yilmaz</span>
              <br />
              <span className="text-surface-500">Export Director, Anatolian Glass Co.</span>
            </p>
          </div>
        </div>

        {/* Tone and personalization indicators */}
        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-surface-700">
          <div className="flex items-center gap-2">
            <span className="text-xs text-surface-500">Tone</span>
            <div className="flex gap-1">
              {['Professional', 'Friendly', 'Consultative'].map((t) => (
                <span
                  key={t}
                  className={cn(
                    'text-[10px] px-2 py-0.5 rounded-full',
                    t === 'Professional'
                      ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                      : 'bg-surface-700 text-surface-400',
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-surface-500">Personalization</span>
            <div className="flex items-center gap-1">
              <div className="w-20 h-1.5 bg-surface-700 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-accent-500 rounded-full" />
              </div>
              <span className="text-xs text-accent-400 font-medium">85%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
