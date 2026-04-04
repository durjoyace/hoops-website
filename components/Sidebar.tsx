'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Database,
  BarChart3,
  GitBranch,
  Send,
  Kanban,
  LayoutTemplate,
  Globe,
  Zap,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap = {
  LayoutDashboard,
  Users,
  Database,
  BarChart3,
  GitBranch,
  Send,
  Kanban,
  LayoutTemplate,
  Globe,
}

type IconName = keyof typeof iconMap

interface SidebarLink {
  label: string
  href: string
  icon: IconName
}

const sidebarLinks: SidebarLink[] = [
  { label: 'Dashboard', href: '/dashboard', icon: 'LayoutDashboard' },
  { label: 'Leads', href: '/dashboard/leads', icon: 'Users' },
  { label: 'Lead Database', href: '/dashboard/lead-database', icon: 'Database' },
  { label: 'Analytics', href: '/dashboard/analytics', icon: 'BarChart3' },
  { label: 'Workflows', href: '/dashboard/workflows', icon: 'GitBranch' },
  { label: 'Outreach', href: '/dashboard/outreach', icon: 'Send' },
  { label: 'Pipeline', href: '/dashboard/pipeline', icon: 'Kanban' },
  { label: 'Templates', href: '/dashboard/templates', icon: 'LayoutTemplate' },
  { label: 'Country Intel', href: '/dashboard/country-intel', icon: 'Globe' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 flex h-full flex-col border-r border-surface-800 bg-surface-950 transition-all duration-300',
        collapsed ? 'w-[68px]' : 'w-[240px]'
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-surface-800 px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500">
          <Zap className="h-4 w-4 text-white" />
        </div>
        {!collapsed && (
          <span className="text-sm font-semibold text-white whitespace-nowrap">
            Global GTM OS
          </span>
        )}
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="flex flex-col gap-1">
          {sidebarLinks.map((link) => {
            const Icon = iconMap[link.icon]
            const isActive =
              pathname === link.href ||
              (link.href !== '/dashboard' && pathname.startsWith(link.href))

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand-500/10 text-brand-400'
                      : 'text-surface-400 hover:bg-surface-800 hover:text-white'
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span className="whitespace-nowrap">{link.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-surface-800 px-3 py-3">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-surface-400 transition-colors hover:bg-surface-800 hover:text-white"
            >
              <Settings className="h-5 w-5 shrink-0" />
              {!collapsed && <span>Settings</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/help"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-surface-400 transition-colors hover:bg-surface-800 hover:text-white"
            >
              <HelpCircle className="h-5 w-5 shrink-0" />
              {!collapsed && <span>Help</span>}
            </Link>
          </li>
          <li>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-surface-400 transition-colors hover:bg-surface-800 hover:text-white"
            >
              {collapsed ? (
                <ChevronRight className="h-5 w-5 shrink-0" />
              ) : (
                <>
                  <ChevronLeft className="h-5 w-5 shrink-0" />
                  <span>Collapse</span>
                </>
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* User section */}
      <div className="border-t border-surface-800 px-3 py-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-xs font-bold text-brand-400">
            TG
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">Turkish Glass Co.</p>
              <p className="truncate text-xs text-surface-400">Pro Plan</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
