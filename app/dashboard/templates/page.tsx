'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  Search,
  Users,
  TrendingUp,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { workflowTemplates, productCategories, targetChannels } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const extraTemplates = [
  {
    id: 'wt-007',
    name: 'DTC Jewelry via Instagram',
    description: 'Launch a direct-to-consumer jewelry brand on Instagram and Shopify with influencer-driven acquisition.',
    category: 'jewelry',
    channel: 'dtc',
    steps: ['Influencer Scout', 'Catalog', 'Ads', 'Landing Page', 'Retarget', 'Upsell'],
    popularity: 720,
    successRate: 48.5,
  },
  {
    id: 'wt-008',
    name: 'Beauty Products on Amazon',
    description: 'End-to-end Amazon launch for beauty and skincare products with PPC optimization and review generation.',
    category: 'beauty',
    channel: 'amazon',
    steps: ['Listing', 'PPC Setup', 'Reviews', 'A+ Content', 'Optimize'],
    popularity: 1560,
    successRate: 62.0,
  },
  {
    id: 'wt-009',
    name: 'Electronics Wholesale Pipeline',
    description: 'Build a wholesale distribution pipeline for consumer electronics targeting U.S. big-box retailers.',
    category: 'electronics',
    channel: 'wholesale',
    steps: ['Target List', 'Enrich', 'Outreach', 'Sample', 'Negotiate', 'Contract'],
    popularity: 890,
    successRate: 41.2,
  },
]

const allTemplates = [...workflowTemplates, ...extraTemplates]

const categoryOptions = ['All Categories', ...Array.from(new Set(productCategories.map((c) => c.name)))]
const channelOptions = ['All Channels', ...Array.from(new Set(targetChannels.map((c) => c.name)))]

export default function TemplatesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [channel, setChannel] = useState('All Channels')

  const filtered = allTemplates.filter((t) => {
    const matchSearch =
      !search ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    const matchCat =
      category === 'All Categories' ||
      t.category.toLowerCase().includes(category.toLowerCase())
    const matchCh =
      channel === 'All Channels' ||
      t.channel.toLowerCase().includes(channel.toLowerCase())
    return matchSearch && matchCat && matchCh
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-white">GTM Templates</h1>
        <p className="text-surface-400 text-sm mt-1">
          Pre-built workflow templates to accelerate your go-to-market
        </p>
      </motion.div>

      {/* Featured Template */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-6"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Star size={16} className="text-warning-400 fill-warning-400" />
            <span className="text-xs font-medium text-brand-200 uppercase tracking-wide">
              Recommended for you
            </span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            Sell Glassware to U.S. Retailers
          </h2>
          <p className="text-sm text-brand-200 max-w-lg mb-4">
            Complete end-to-end workflow: import leads from LinkedIn and trade databases,
            enrich with buyer intelligence, score by ICP fit, launch personalized email
            sequences, and sync qualified deals to your CRM.
          </p>
          <div className="flex items-center gap-6 mb-5">
            <div className="text-center">
              <p className="text-lg font-bold text-white">1,240</p>
              <p className="text-[10px] text-brand-300 uppercase">Users</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-white">68%</p>
              <p className="text-[10px] text-brand-300 uppercase">Reply Rate</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-white">6</p>
              <p className="text-[10px] text-brand-300 uppercase">Steps</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white text-brand-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-50 transition-colors">
            Use This Template
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3"
      >
        <div className="relative flex-1 max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-500" />
          <input
            type="text"
            placeholder="Search templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface-800 border border-surface-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-surface-500 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="appearance-none bg-surface-800 border border-surface-700 rounded-lg px-4 py-2 pr-8 text-sm text-surface-300 focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            {categoryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500 pointer-events-none"
          />
        </div>
        <div className="relative">
          <select
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            className="appearance-none bg-surface-800 border border-surface-700 rounded-lg px-4 py-2 pr-8 text-sm text-surface-300 focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            {channelOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500 pointer-events-none"
          />
        </div>
      </motion.div>

      {/* Templates Grid */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((tmpl, i) => (
          <motion.div
            key={tmpl.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="bg-surface-800 border border-surface-700 rounded-xl p-5 hover:border-surface-600 transition-colors group relative"
          >
            {/* Category / Channel badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] bg-brand-500/10 text-brand-400 px-2 py-0.5 rounded-full font-medium capitalize">
                {tmpl.category}
              </span>
              <span className="text-[10px] bg-surface-700 text-surface-300 px-2 py-0.5 rounded-full font-medium capitalize">
                {tmpl.channel}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-white mb-1.5">{tmpl.name}</h3>
            <p className="text-xs text-surface-400 mb-3 line-clamp-2">{tmpl.description}</p>

            {/* Step tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {tmpl.steps.map((step, si) => (
                <span
                  key={si}
                  className="text-[10px] bg-surface-700 text-surface-400 px-1.5 py-0.5 rounded"
                >
                  {typeof step === 'string' ? step : String(step)}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-surface-400">
              <span className="flex items-center gap-1">
                <Users size={12} />
                {tmpl.popularity} users
              </span>
              <span className="flex items-center gap-1">
                <TrendingUp size={12} />
                {tmpl.successRate}% success
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-brand-600/0 group-hover:bg-brand-600/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="bg-brand-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                Use
                <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
