'use client'

import { motion } from 'framer-motion'
import {
  Plus,
  ArrowDown,
  CheckCircle2,
  Loader2,
  Clock,
  Upload,
  Database,
  BarChart3,
  Mail,
  ListTodo,
  RefreshCw,
  Users,
  TrendingUp,
  Play,
} from 'lucide-react'
import { sampleWorkflow, workflowTemplates } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  Upload,
  Database,
  BarChart3,
  Mail,
  ListTodo,
  RefreshCw,
  trigger: Play,
  action: RefreshCw,
  condition: BarChart3,
  output: ListTodo,
}

function statusIcon(status: string) {
  switch (status) {
    case 'completed':
      return <CheckCircle2 size={18} className="text-accent-400" />
    case 'running':
      return <Loader2 size={18} className="text-brand-400 animate-spin" />
    default:
      return <Clock size={18} className="text-surface-500" />
  }
}

function statusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'border-accent-500/30 bg-accent-500/5'
    case 'running':
      return 'border-brand-500/30 bg-brand-500/5 ring-1 ring-brand-500/20'
    default:
      return 'border-surface-700 bg-surface-800/50'
  }
}

export default function WorkflowsPage() {
  const workflow = sampleWorkflow

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-white">Workflow Automation</h1>
          <p className="text-surface-400 text-sm mt-1">
            Build and manage automated GTM workflows
          </p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus size={16} />
          New Workflow
        </button>
      </motion.div>

      {/* Active Workflow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-surface-800 border border-surface-700 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-white">{workflow[0] ? 'Glassware to U.S. Retailers' : workflow[0]}</h2>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                Running
              </span>
            </div>
            <p className="text-sm text-surface-400 mt-1">
              Step {workflow.findIndex((n) => n.status === 'running') + 1} of {workflow.length}
            </p>
          </div>
        </div>

        {/* Workflow Nodes */}
        <div className="flex flex-col items-center space-y-0">
          {workflow.map((node, i) => {
            const Icon = iconMap[node.type] || RefreshCw
            return (
              <div key={node.id} className="flex flex-col items-center w-full max-w-lg">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className={cn(
                    'w-full border rounded-xl p-4 transition-all',
                    statusColor(node.status),
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        'p-2 rounded-lg shrink-0',
                        node.status === 'completed'
                          ? 'bg-accent-500/10'
                          : node.status === 'running'
                          ? 'bg-brand-500/10'
                          : 'bg-surface-700',
                      )}
                    >
                      <Icon
                        size={20}
                        className={
                          node.status === 'completed'
                            ? 'text-accent-400'
                            : node.status === 'running'
                            ? 'text-brand-400'
                            : 'text-surface-500'
                        }
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">{node.label}</span>
                        {statusIcon(node.status)}
                      </div>
                      <p className="text-xs text-surface-400 mt-0.5">{node.description}</p>
                      {node.config && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {Object.entries(node.config).map(([k, v]) => (
                            <span
                              key={k}
                              className="inline-flex items-center gap-1 text-[10px] bg-surface-700 text-surface-300 px-2 py-0.5 rounded-full"
                            >
                              <span className="text-surface-500">{k}:</span> {v}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
                {i < workflow.length - 1 && (
                  <div className="py-1">
                    <ArrowDown size={16} className="text-surface-600" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Workflow Templates */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Workflow Templates</h2>
        <div className="grid grid-cols-3 gap-4">
          {workflowTemplates.map((tmpl, i) => (
            <motion.div
              key={tmpl.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="bg-surface-800 border border-surface-700 rounded-xl p-5 hover:border-surface-600 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] bg-brand-500/10 text-brand-400 px-2 py-0.5 rounded-full font-medium">
                  {tmpl.category}
                </span>
                <span className="text-[10px] bg-surface-700 text-surface-300 px-2 py-0.5 rounded-full font-medium">
                  {tmpl.channel}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{tmpl.name}</h3>
              <p className="text-xs text-surface-400 mb-3 line-clamp-2">{tmpl.description}</p>

              {/* Step dots */}
              <div className="flex items-center gap-1 mb-4">
                {tmpl.steps.map((step, si) => (
                  <div key={si} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-brand-500/40" title={step} />
                    {si < tmpl.steps.length - 1 && (
                      <div className="w-3 h-px bg-surface-600" />
                    )}
                  </div>
                ))}
                <span className="text-[10px] text-surface-500 ml-1.5">{tmpl.steps.length} steps</span>
              </div>

              <div className="flex items-center justify-between text-xs text-surface-400">
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  {tmpl.popularity ?? tmpl.successRate} users
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp size={12} />
                  {tmpl.successRate}% success
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
