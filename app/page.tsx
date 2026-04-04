"use client";

import MarketingNav from "@/components/MarketingNav";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Sparkles,
  BarChart3,
  Workflow,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Zap,
  Layers,
  ChevronRight,
  Star,
} from "lucide-react";

/* ───────── animation variants ───────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ───────── data ───────── */
const stats = [
  { value: "12,000+", label: "Leads" },
  { value: "34%", label: "Reply Rate" },
  { value: "89", label: "Countries" },
  { value: "$4.2M", label: "Pipeline" },
];

const features = [
  {
    icon: Search,
    title: "Lead Sourcing",
    description:
      "Discover high-intent U.S. buyers from curated databases of importers, distributors, and procurement teams.",
  },
  {
    icon: Sparkles,
    title: "Smart Enrichment",
    description:
      "Auto-enrich every lead with firmographics, technographics, and buying signals so you never send a blind email.",
  },
  {
    icon: BarChart3,
    title: "Lead Scoring",
    description:
      "AI-powered scoring ranks prospects by fit, intent, and timing so your team focuses on the deals that close.",
  },
  {
    icon: Workflow,
    title: "GTM Workflows",
    description:
      "Pre-built playbooks for every stage — from first touch to signed contract — tailored to cross-border selling.",
  },
  {
    icon: Mail,
    title: "AI Outreach",
    description:
      "Generate personalized, multi-channel sequences that respect U.S. business norms and time zones automatically.",
  },
  {
    icon: MapPin,
    title: "Country Intelligence",
    description:
      "Tariff data, compliance checklists, and cultural briefings for every country-to-U.S. trade corridor.",
  },
];

const steps = [
  {
    icon: Target,
    title: "Select Profile",
    description:
      "Choose your industry, product category, and target buyer persona to configure your GTM engine.",
  },
  {
    icon: Layers,
    title: "Pick Template",
    description:
      "Browse proven outreach templates organized by channel, industry, and market entry strategy.",
  },
  {
    icon: Zap,
    title: "Run GTM",
    description:
      "Launch automated workflows that source leads, enrich data, score prospects, and send outreach.",
  },
  {
    icon: CheckCircle2,
    title: "Review & Launch",
    description:
      "Review AI-generated campaigns, approve messaging, and go live with a single click.",
  },
];

const templates = [
  { category: "Manufacturing", channel: "Email", name: "Industrial Distributor Outreach", users: 2340, replyRate: "32%" },
  { category: "SaaS", channel: "LinkedIn", name: "U.S. Channel Partner Intro", users: 1870, replyRate: "28%" },
  { category: "Food & Bev", channel: "Email", name: "Retail Buyer Cold Sequence", users: 1540, replyRate: "36%" },
  { category: "Automotive", channel: "Multi", name: "OEM Supplier Pitch", users: 980, replyRate: "31%" },
  { category: "Pharma", channel: "Email", name: "FDA-Ready Market Entry", users: 760, replyRate: "29%" },
  { category: "Textiles", channel: "LinkedIn", name: "Private Label Partnership", users: 1120, replyRate: "34%" },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "For solo founders testing the U.S. market.",
    popular: false,
    features: [
      "500 leads / month",
      "Basic enrichment",
      "3 outreach templates",
      "Email sequences",
      "Community support",
    ],
    cta: "Start Selling",
  },
  {
    name: "Pro",
    price: "$149",
    period: "/mo",
    description: "For growing teams running active GTM campaigns.",
    popular: true,
    features: [
      "5,000 leads / month",
      "Full enrichment + scoring",
      "Unlimited templates",
      "Multi-channel outreach",
      "Country intelligence",
      "Priority support",
    ],
    cta: "Start Selling",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large manufacturers with complex trade corridors.",
    popular: false,
    features: [
      "Unlimited leads",
      "Custom enrichment sources",
      "Dedicated CSM",
      "SSO & SAML",
      "API access",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];

/* ───────── mock dashboard data ───────── */
const dashboardStats = [
  { label: "Active Leads", value: "2,847" },
  { label: "Emails Sent", value: "12,493" },
  { label: "Reply Rate", value: "34.2%" },
  { label: "Pipeline", value: "$1.2M" },
];

const dashboardRows = [
  { company: "Apex Industrial LLC", location: "Houston, TX", score: 94, status: "Hot" },
  { company: "NorthStar Distributing", location: "Chicago, IL", score: 87, status: "Warm" },
  { company: "Pacific Rim Imports", location: "Los Angeles, CA", score: 82, status: "Warm" },
];

/* ───────── page ───────── */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface-950 text-surface-50">
      <MarketingNav />

      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* bg mesh */}
        <div className="absolute inset-0 bg-mesh opacity-40" />
        {/* bg grid */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        {/* glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm mb-8">
              <Globe className="w-4 h-4" />
              The GTM System Built for Global Exporters
            </motion.div>

            {/* headline */}
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              Sell to America{" "}
              <span className="gradient-text">from Anywhere</span>
            </motion.h1>

            {/* subtitle */}
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-surface-300 max-w-2xl mx-auto mb-10">
              The all-in-one go-to-market operating system that helps manufacturers and exporters source leads, craft outreach, and close deals in the U.S. market.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg">
                Start Selling <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#how-it-works" className="inline-flex items-center gap-2 px-8 py-4 text-lg rounded-lg border border-surface-700 text-surface-300 hover:text-surface-50 hover:border-surface-500 transition-colors">
                See How It Works
              </Link>
            </motion.div>

            {/* stats bar */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-surface-50">{s.value}</div>
                  <div className="text-sm text-surface-400">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* mock dashboard preview */}
            <motion.div variants={fadeUp} className="relative max-w-5xl mx-auto">
              <div className="rounded-xl border border-surface-800 bg-surface-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
                {/* browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-800 bg-surface-900">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="ml-4 flex-1 max-w-md">
                    <div className="h-6 rounded bg-surface-800 px-3 flex items-center">
                      <span className="text-xs text-surface-500">app.globalgtmos.com/dashboard</span>
                    </div>
                  </div>
                </div>
                {/* dashboard body */}
                <div className="p-6">
                  {/* stat cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {dashboardStats.map((ds) => (
                      <div key={ds.label} className="rounded-lg border border-surface-700 bg-surface-800/50 p-4">
                        <div className="text-sm text-surface-400 mb-1">{ds.label}</div>
                        <div className="text-xl font-semibold">{ds.value}</div>
                      </div>
                    ))}
                  </div>
                  {/* mini table */}
                  <div className="rounded-lg border border-surface-700 overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-surface-800 text-xs text-surface-400 font-medium">
                      <span>Company</span>
                      <span>Location</span>
                      <span>Score</span>
                      <span>Status</span>
                    </div>
                    {dashboardRows.map((row) => (
                      <div key={row.company} className="grid grid-cols-4 gap-4 px-4 py-3 border-t border-surface-800 text-sm">
                        <span className="font-medium">{row.company}</span>
                        <span className="text-surface-400">{row.location}</span>
                        <span className="text-brand-400 font-medium">{row.score}</span>
                        <span>
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                              row.status === "Hot"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {row.status}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════ FEATURES ════════ */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Features
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to crack the U.S. market
            </motion.h2>
            <motion.p variants={fadeUp} className="text-surface-400 max-w-2xl mx-auto">
              Six integrated modules that take you from zero U.S. presence to a fully-loaded pipeline.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group rounded-xl border border-surface-800 bg-surface-900/50 p-6 hover:border-brand-500/40 hover:bg-surface-900 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <f.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS ════════ */}
      <section id="how-it-works" className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4">
              Four steps to your first U.S. deal
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp} className="relative text-center">
                <div className="text-5xl font-bold text-surface-800 mb-4">{String(i + 1).padStart(2, "0")}</div>
                <div className="w-14 h-14 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ TEMPLATES ════════ */}
      <section id="templates" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Templates
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4">
              Proven playbooks, ready to launch
            </motion.h2>
            <motion.p variants={fadeUp} className="text-surface-400 max-w-2xl mx-auto">
              Browse battle-tested outreach templates used by exporters in 89 countries.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {templates.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="rounded-xl border border-surface-800 bg-surface-900/50 p-6 hover:border-brand-500/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-brand-500/10 text-brand-400">
                    {t.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-surface-800 text-surface-400">
                    {t.channel}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{t.name}</h3>
                <div className="flex items-center gap-4 text-sm text-surface-400">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {t.users.toLocaleString()} users
                  </span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    {t.replyRate} reply rate
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ PRICING ════════ */}
      <section id="pricing" className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Pricing
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </motion.h2>
            <motion.p variants={fadeUp} className="text-surface-400 max-w-2xl mx-auto">
              Start free, upgrade when you are ready. No hidden fees, cancel anytime.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`relative rounded-xl border p-8 ${
                  tier.popular
                    ? "border-brand-500 bg-surface-900 shadow-lg shadow-brand-500/10"
                    : "border-surface-800 bg-surface-900/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-semibold">
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <p className="text-surface-400 text-sm mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-surface-400">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-surface-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                    tier.popular
                      ? "bg-brand-500 hover:bg-brand-600 text-white"
                      : "border border-surface-700 text-surface-300 hover:text-surface-50 hover:border-surface-500"
                  }`}
                >
                  {tier.cta} <ChevronRight className="inline w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-500/5 rounded-full blur-[200px] mx-auto w-[600px] h-[400px] top-1/2 -translate-y-1/2" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to sell into{" "}
              <span className="gradient-text">America</span>?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-surface-400 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of global manufacturers already using Global GTM OS to break into the U.S. market.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="border-t border-surface-800 bg-surface-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* col 1 — logo */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl font-bold mb-3">
                <span className="gradient-text">Global GTM OS</span>
              </div>
              <p className="text-surface-400 text-sm leading-relaxed">
                The go-to-market operating system helping manufacturers sell to America from anywhere in the world.
              </p>
            </div>

            {/* col 2 — Product */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-surface-400">
                <li><Link href="#features" className="hover:text-surface-50 transition-colors">Features</Link></li>
                <li><Link href="#templates" className="hover:text-surface-50 transition-colors">Templates</Link></li>
                <li><Link href="#pricing" className="hover:text-surface-50 transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-surface-50 transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            {/* col 3 — Resources */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-surface-400">
                <li><Link href="#" className="hover:text-surface-50 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-surface-50 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-surface-50 transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-surface-50 transition-colors">Changelog</Link></li>
              </ul>
            </div>

            {/* col 4 — Company */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-surface-400">
                <li><Link href="#" className="hover:text-surface-50 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-surface-50 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-surface-50 transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-surface-50 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-surface-800 pt-8 text-center text-sm text-surface-500">
            &copy; {new Date().getFullYear()} Global GTM OS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
