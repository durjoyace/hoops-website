// ---------------------------------------------------------------------------
// Global GTM OS - Mock Data
// ---------------------------------------------------------------------------

// Countries ----------------------------------------------------------------

export const countries = [
  { code: 'TR', name: 'Turkey', flag: '🇹🇷', popular: true },
  { code: 'IN', name: 'India', flag: '🇮🇳', popular: true },
  { code: 'CN', name: 'China', flag: '🇨🇳', popular: true },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳', popular: true },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', popular: true },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩', popular: true },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭', popular: false },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩', popular: false },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰', popular: false },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', popular: false },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭', popular: false },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬', popular: false },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', popular: false },
  { code: 'PL', name: 'Poland', flag: '🇵🇱', popular: false },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', popular: false },
]

// Product categories -------------------------------------------------------

export const productCategories = [
  { id: 'glassware', name: 'Glassware', icon: '🥂', count: '2,450' },
  { id: 'cookware', name: 'Cookware', icon: '🍳', count: '1,870' },
  { id: 'furniture', name: 'Furniture', icon: '🪑', count: '3,120' },
  { id: 'textiles', name: 'Textiles', icon: '🧵', count: '4,300' },
  { id: 'ceramics', name: 'Ceramics', icon: '🏺', count: '1,540' },
  { id: 'jewelry', name: 'Jewelry', icon: '💎', count: '980' },
  { id: 'home-decor', name: 'Home Decor', icon: '🏠', count: '2,780' },
  { id: 'electronics', name: 'Electronics', icon: '📱', count: '5,600' },
  { id: 'beauty', name: 'Beauty', icon: '💄', count: '1,350' },
  { id: 'food', name: 'Food & Beverage', icon: '🍽️', count: '2,100' },
  { id: 'automotive', name: 'Automotive', icon: '🚗', count: '1,200' },
  { id: 'packaging', name: 'Packaging', icon: '📦', count: '3,400' },
]

// Target channels ----------------------------------------------------------

export const targetChannels = [
  {
    id: 'retail',
    name: 'Retail',
    description: 'Brick-and-mortar retail stores, chains, and specialty shops.',
  },
  {
    id: 'wholesale',
    name: 'Wholesale',
    description: 'Bulk distribution to wholesalers, distributors, and trade buyers.',
  },
  {
    id: 'dtc',
    name: 'Direct-to-Consumer',
    description: 'Sell directly to end consumers via your own online store.',
  },
  {
    id: 'amazon',
    name: 'Amazon / Marketplaces',
    description: 'List and sell through Amazon, Wayfair, and other online marketplaces.',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Hotels, restaurants, cafes, and hospitality supply companies.',
  },
]

// Leads --------------------------------------------------------------------

export interface Lead {
  id: string
  company: string
  contact: string
  role: string
  email: string
  location: string
  channel: string
  revenue: string
  employees: string
  score: number
  status: 'hot' | 'warm' | 'cold'
  enriched: boolean
  lastActivity: string
  tags: string[]
  website: string
  linkedIn: string
}

export const mockLeads: Lead[] = [
  {
    id: 'lead-001',
    company: 'West Elm',
    contact: 'Sarah Mitchell',
    role: 'VP of Sourcing',
    email: 's.mitchell@westelm.com',
    location: 'Brooklyn, NY',
    channel: 'retail',
    revenue: '$1.2B',
    employees: '5,000+',
    score: 94,
    status: 'hot',
    enriched: true,
    lastActivity: '2 hours ago',
    tags: ['home-decor', 'furniture', 'high-value'],
    website: 'https://westelm.com',
    linkedIn: 'https://linkedin.com/in/sarahmitchell',
  },
  {
    id: 'lead-002',
    company: 'Crate & Barrel',
    contact: 'James Chen',
    role: 'Director of Global Procurement',
    email: 'j.chen@crateandbarrel.com',
    location: 'Northbrook, IL',
    channel: 'retail',
    revenue: '$1.5B',
    employees: '7,200',
    score: 91,
    status: 'hot',
    enriched: true,
    lastActivity: '1 day ago',
    tags: ['glassware', 'cookware', 'ceramics'],
    website: 'https://crateandbarrel.com',
    linkedIn: 'https://linkedin.com/in/jameschen-cb',
  },
  {
    id: 'lead-003',
    company: 'HomeGoods Direct',
    contact: 'Maria Rodriguez',
    role: 'Buying Manager',
    email: 'm.rodriguez@homegoodsdirect.com',
    location: 'Framingham, MA',
    channel: 'wholesale',
    revenue: '$800M',
    employees: '3,500',
    score: 87,
    status: 'hot',
    enriched: true,
    lastActivity: '3 hours ago',
    tags: ['glassware', 'home-decor', 'bulk-buyer'],
    website: 'https://homegoodsdirect.com',
    linkedIn: 'https://linkedin.com/in/mariarodriguez-hg',
  },
  {
    id: 'lead-004',
    company: 'Artisan Home Co',
    contact: 'David Park',
    role: 'Founder & CEO',
    email: 'd.park@artisanhomeco.com',
    location: 'Portland, OR',
    channel: 'dtc',
    revenue: '$12M',
    employees: '45',
    score: 82,
    status: 'hot',
    enriched: true,
    lastActivity: '5 hours ago',
    tags: ['ceramics', 'handmade', 'dtc-brand'],
    website: 'https://artisanhomeco.com',
    linkedIn: 'https://linkedin.com/in/davidpark-artisan',
  },
  {
    id: 'lead-005',
    company: 'Pacific Home Imports',
    contact: 'Lisa Nakamura',
    role: 'Import Manager',
    email: 'l.nakamura@pacifichomeimports.com',
    location: 'San Francisco, CA',
    channel: 'wholesale',
    revenue: '$45M',
    employees: '120',
    score: 78,
    status: 'warm',
    enriched: true,
    lastActivity: '1 day ago',
    tags: ['glassware', 'furniture', 'importer'],
    website: 'https://pacifichomeimports.com',
    linkedIn: 'https://linkedin.com/in/lisanakamura',
  },
  {
    id: 'lead-006',
    company: 'The Kitchen Store',
    contact: 'Robert Williams',
    role: 'Head of Merchandising',
    email: 'r.williams@thekitchenstore.com',
    location: 'Dallas, TX',
    channel: 'retail',
    revenue: '$28M',
    employees: '85',
    score: 73,
    status: 'warm',
    enriched: true,
    lastActivity: '2 days ago',
    tags: ['cookware', 'glassware', 'kitchen'],
    website: 'https://thekitchenstore.com',
    linkedIn: 'https://linkedin.com/in/robwilliams-tks',
  },
  {
    id: 'lead-007',
    company: 'Amazon Elite Goods',
    contact: 'Amanda Foster',
    role: 'Category Manager - Home',
    email: 'a.foster@amazonelitegoods.com',
    location: 'Seattle, WA',
    channel: 'amazon',
    revenue: '$60M',
    employees: '200',
    score: 68,
    status: 'warm',
    enriched: false,
    lastActivity: '3 days ago',
    tags: ['amazon', 'marketplace', 'home-decor'],
    website: 'https://amazonelitegoods.com',
    linkedIn: 'https://linkedin.com/in/amandafoster-aeg',
  },
  {
    id: 'lead-008',
    company: 'Modern Living Supply',
    contact: "Kevin O'Brien",
    role: 'Procurement Specialist',
    email: 'k.obrien@modernlivingsupply.com',
    location: 'Chicago, IL',
    channel: 'wholesale',
    revenue: '$35M',
    employees: '95',
    score: 61,
    status: 'warm',
    enriched: false,
    lastActivity: '4 days ago',
    tags: ['furniture', 'textiles', 'wholesale'],
    website: 'https://modernlivingsupply.com',
    linkedIn: 'https://linkedin.com/in/kevinobrien-mls',
  },
  {
    id: 'lead-009',
    company: 'Boutique Finds',
    contact: 'Emily Watson',
    role: 'Owner',
    email: 'e.watson@boutiquefinds.com',
    location: 'Nashville, TN',
    channel: 'dtc',
    revenue: '$2.5M',
    employees: '12',
    score: 55,
    status: 'cold',
    enriched: false,
    lastActivity: '1 week ago',
    tags: ['jewelry', 'ceramics', 'small-business'],
    website: 'https://boutiquefinds.com',
    linkedIn: 'https://linkedin.com/in/emilywatson-bf',
  },
  {
    id: 'lead-010',
    company: 'National Home Distributors',
    contact: 'Thomas Grant',
    role: 'Regional Buyer',
    email: 't.grant@nationalhome.com',
    location: 'Atlanta, GA',
    channel: 'wholesale',
    revenue: '$150M',
    employees: '600',
    score: 48,
    status: 'cold',
    enriched: false,
    lastActivity: '2 weeks ago',
    tags: ['home-decor', 'cookware', 'distributor'],
    website: 'https://nationalhome.com',
    linkedIn: 'https://linkedin.com/in/thomasgrant-nhd',
  },
]

// Pipeline deals -----------------------------------------------------------

export interface PipelineDeal {
  id: string
  company: string
  contact: string
  value: string
  stage: 'lead' | 'contacted' | 'responded' | 'negotiation' | 'closed'
  lastUpdate: string
  probability: number
  notes: string
}

export const mockDeals: PipelineDeal[] = [
  {
    id: 'deal-001',
    company: 'West Elm',
    contact: 'Sarah Mitchell',
    value: '$125,000',
    stage: 'negotiation',
    lastUpdate: '2 hours ago',
    probability: 85,
    notes: 'Finalizing MOQ and freight terms. Requesting samples for spring collection.',
  },
  {
    id: 'deal-002',
    company: 'Crate & Barrel',
    contact: 'James Chen',
    value: '$210,000',
    stage: 'responded',
    lastUpdate: '1 day ago',
    probability: 60,
    notes: 'Positive response to initial catalog. Scheduling follow-up call.',
  },
  {
    id: 'deal-003',
    company: 'HomeGoods Direct',
    contact: 'Maria Rodriguez',
    value: '$85,000',
    stage: 'closed',
    lastUpdate: '3 days ago',
    probability: 100,
    notes: 'First PO signed. 500-unit glassware order shipping Q2.',
  },
  {
    id: 'deal-004',
    company: 'Artisan Home Co',
    contact: 'David Park',
    value: '$42,000',
    stage: 'negotiation',
    lastUpdate: '5 hours ago',
    probability: 70,
    notes: 'Discussing exclusive DTC partnership. Wants custom branding.',
  },
  {
    id: 'deal-005',
    company: 'Pacific Home Imports',
    contact: 'Lisa Nakamura',
    value: '$67,000',
    stage: 'contacted',
    lastUpdate: '2 days ago',
    probability: 35,
    notes: 'Email introduction sent. Waiting for response to product deck.',
  },
  {
    id: 'deal-006',
    company: 'The Kitchen Store',
    contact: 'Robert Williams',
    value: '$38,000',
    stage: 'responded',
    lastUpdate: '1 day ago',
    probability: 50,
    notes: 'Interested in cookware line. Asked for pricing breakdown by volume.',
  },
  {
    id: 'deal-007',
    company: 'Amazon Elite Goods',
    contact: 'Amanda Foster',
    value: '$155,000',
    stage: 'lead',
    lastUpdate: '3 days ago',
    probability: 20,
    notes: 'Identified as high-potential Amazon seller. Need to verify contact info.',
  },
  {
    id: 'deal-008',
    company: 'Modern Living Supply',
    contact: "Kevin O'Brien",
    value: '$92,000',
    stage: 'contacted',
    lastUpdate: '4 days ago',
    probability: 30,
    notes: 'LinkedIn outreach sent. Company expanding furniture category.',
  },
  {
    id: 'deal-009',
    company: 'Boutique Finds',
    contact: 'Emily Watson',
    value: '$18,000',
    stage: 'closed',
    lastUpdate: '1 week ago',
    probability: 100,
    notes: 'Small initial order for ceramics. Potential for recurring seasonal orders.',
  },
]

// Workflow templates -------------------------------------------------------

export const workflowTemplates = [
  {
    id: 'wf-001',
    name: 'Cold Email Outreach',
    category: 'outreach',
    channel: 'retail',
    description:
      'Automated 5-step cold email sequence targeting retail buyers with personalized product catalogs and follow-ups.',
    steps: [
      'Scrape buyer contacts from target retailers',
      'Enrich leads with company data',
      'Generate personalized email copy',
      'Send initial cold email',
      'Schedule follow-up sequence',
    ],
    popularity: 94,
    successRate: 12.5,
  },
  {
    id: 'wf-002',
    name: 'LinkedIn Prospecting',
    category: 'outreach',
    channel: 'wholesale',
    description:
      'Find and connect with wholesale buyers on LinkedIn using AI-powered message personalization.',
    steps: [
      'Search LinkedIn for target buyers',
      'Filter by role and company size',
      'Send personalized connection requests',
      'Follow up with product intro',
      'Move engaged prospects to CRM',
    ],
    popularity: 87,
    successRate: 18.3,
  },
  {
    id: 'wf-003',
    name: 'Trade Show Follow-Up',
    category: 'nurture',
    channel: 'retail',
    description:
      'Post-trade-show nurture sequence to convert collected business cards into active pipeline deals.',
    steps: [
      'Import scanned business cards',
      'Enrich with company intelligence',
      'Send personalized thank-you email',
      'Share product catalog PDF',
      'Book follow-up meeting',
      'Add to pipeline',
    ],
    popularity: 76,
    successRate: 22.1,
  },
  {
    id: 'wf-004',
    name: 'Amazon Seller Outreach',
    category: 'outreach',
    channel: 'amazon',
    description:
      'Identify and contact top Amazon sellers in your product category for wholesale partnerships.',
    steps: [
      'Scrape top Amazon sellers by category',
      'Identify seller contact info',
      'Send partnership proposal email',
      'Follow up with pricing sheet',
      'Negotiate terms',
    ],
    popularity: 71,
    successRate: 9.8,
  },
  {
    id: 'wf-005',
    name: 'Hotel & Restaurant Sourcing',
    category: 'outreach',
    channel: 'hospitality',
    description:
      'Target hospitality procurement managers with tailored B2B offers for bulk glassware and tableware.',
    steps: [
      'Build list of hotel chains and restaurant groups',
      'Find procurement decision-makers',
      'Send custom B2B proposal',
      'Schedule product demo / sample shipment',
      'Negotiate bulk pricing',
    ],
    popularity: 63,
    successRate: 15.7,
  },
  {
    id: 'wf-006',
    name: 'Re-engagement Campaign',
    category: 'nurture',
    channel: 'dtc',
    description:
      'Re-activate cold leads with updated product offerings, seasonal promotions, and social proof.',
    steps: [
      'Segment cold leads by last activity date',
      'Personalize re-engagement email',
      'Include new product highlights',
      'Add social proof / testimonials',
      'Offer limited-time discount',
      'Route warm responses to sales',
    ],
    popularity: 58,
    successRate: 6.4,
  },
]

// Country intelligence -----------------------------------------------------

export const countryIntelligence: Record<
  string,
  {
    exportReadiness: string
    marketInsights: string[]
    communicationTips: string[]
    pricingBenchmarks: string[]
    complianceHints: string[]
  }
> = {
  TR: {
    exportReadiness:
      'Turkey has a mature export infrastructure with well-established free trade zones, competitive shipping routes to the U.S. and EU, and strong government incentives through TIM export promotion programs.',
    marketInsights: [
      'Turkish glassware (Pasabahce, etc.) is globally recognized for quality and competitive pricing.',
      'The ceramics and textiles sectors are among the strongest export verticals.',
      'Labor costs are rising but remain 40-60% below Western European equivalents.',
      'Turkey benefits from Customs Union agreement with the EU, simplifying trade compliance.',
    ],
    communicationTips: [
      'Business relationships are personal -- invest time in face-to-face meetings or video calls before negotiating.',
      'Turkish business culture values hospitality; accepting tea or coffee during meetings is expected.',
      'Negotiations may take longer than expected; patience is valued over aggressive timelines.',
      'Use formal titles (Bey/Hanim) until invited to use first names.',
    ],
    pricingBenchmarks: [
      'Glassware FOB: $0.80 - $4.50 per unit depending on complexity.',
      'Ceramics FOB: $1.20 - $8.00 per piece for handcrafted items.',
      'Textiles FOB: $3.00 - $15.00 per meter for quality cotton/linen.',
      'Expect 5-10% volume discounts on orders above 5,000 units.',
    ],
    complianceHints: [
      'Ensure FDA compliance for any food-contact glassware or ceramics.',
      'Turkish exporters typically handle EUR.1 movement certificates for EU shipments.',
      'Anti-dumping duties may apply to certain glass products -- verify HTS codes.',
      'Certificate of Origin from Turkish Chamber of Commerce is required for preferential tariffs.',
    ],
  },
  IN: {
    exportReadiness:
      'India offers massive manufacturing capacity with competitive pricing across textiles, jewelry, and home decor. The "Make in India" initiative supports export-oriented production with various SEZ benefits.',
    marketInsights: [
      'India is the world\'s largest producer of cotton and a major textiles exporter.',
      'Handicraft and artisan goods sector employs over 7 million workers with growing export volumes.',
      'IT-enabled services make Indian suppliers increasingly sophisticated in B2B e-commerce.',
      'Quality consistency can vary -- always request pre-shipment inspection.',
    ],
    communicationTips: [
      'Indian business communication tends to be indirect; "we will try" may mean "it is unlikely."',
      'Hierarchy matters -- decisions often need approval from senior management.',
      'Festival seasons (Diwali, etc.) can slow production timelines by 2-3 weeks.',
      'Building trust through multiple touchpoints is essential before large orders.',
    ],
    pricingBenchmarks: [
      'Textiles FOB: $1.50 - $8.00 per meter depending on fabric type.',
      'Jewelry (silver/brass): $2.00 - $25.00 per piece for artisan work.',
      'Home decor items: $3.00 - $30.00 per piece depending on material and craft.',
      'Expect aggressive pricing on volumes above 10,000 units.',
    ],
    complianceHints: [
      'GSP (Generalized System of Preferences) benefits may reduce U.S. import duties.',
      'BIS certification required for certain electronics and industrial goods.',
      'Child labor compliance certificates recommended for handicraft and textile imports.',
      'Phytosanitary certificates needed for any wood or natural fiber products.',
    ],
  },
  CN: {
    exportReadiness:
      'China remains the world\'s largest exporter with unmatched manufacturing scale, logistics infrastructure, and supplier diversity. Alibaba, Global Sources, and Canton Fair provide extensive sourcing channels.',
    marketInsights: [
      'Chinese manufacturers lead in electronics, packaging, and high-volume consumer goods.',
      'Guangdong, Zhejiang, and Fujian provinces are primary export hubs.',
      'MOQs are typically higher than other countries but unit costs are very competitive.',
      'Increasing shift toward higher-value manufacturing with "China +1" strategy emerging.',
    ],
    communicationTips: [
      'WeChat is the primary business communication tool -- email alone is often insufficient.',
      'Building "guanxi" (relationships) is critical for long-term supplier partnerships.',
      'Chinese New Year (Jan/Feb) causes 2-4 weeks of factory shutdowns -- plan orders accordingly.',
      'Be explicit with specifications -- detailed tech packs reduce quality issues significantly.',
    ],
    pricingBenchmarks: [
      'Electronics components: $0.10 - $50.00+ depending on complexity.',
      'Packaging materials: $0.05 - $2.00 per unit for custom boxes and containers.',
      'Glassware FOB: $0.50 - $3.00 per unit for machine-made products.',
      'Furniture FOB: $50 - $500 per piece depending on materials and design.',
    ],
    complianceHints: [
      'Section 301 tariffs (7.5-25%) apply to many Chinese goods -- verify HTS classification.',
      'CPSIA compliance required for any children\'s products.',
      'FCC certification needed for electronics with wireless or digital components.',
      'Forced labor import bans (UFLPA) -- ensure supply chain transparency documentation.',
    ],
  },
}

// Outreach sequences -------------------------------------------------------

export const outreachSequences = [
  {
    id: 'seq-001',
    name: 'Retail Buyer Cold Outreach',
    status: 'active' as const,
    steps: [
      {
        day: 1,
        type: 'email',
        subject: 'Premium Turkish Glassware - Exclusive Catalog for {{company}}',
        status: 'sent' as const,
        opens: 42,
        replies: 6,
      },
      {
        day: 3,
        type: 'email',
        subject: 'Quick follow-up - samples available for {{contact}}',
        status: 'sent' as const,
        opens: 28,
        replies: 4,
      },
      {
        day: 5,
        type: 'linkedin',
        subject: 'LinkedIn connection request + intro message',
        status: 'sent' as const,
        opens: 35,
        replies: 8,
      },
      {
        day: 8,
        type: 'email',
        subject: 'Case study: How {{similar_company}} saved 30% on sourcing',
        status: 'scheduled' as const,
        opens: 0,
        replies: 0,
      },
      {
        day: 12,
        type: 'email',
        subject: 'Last chance - complimentary sample box for {{company}}',
        status: 'scheduled' as const,
        opens: 0,
        replies: 0,
      },
    ],
  },
  {
    id: 'seq-002',
    name: 'Wholesale Distributor Warm Intro',
    status: 'active' as const,
    steps: [
      {
        day: 1,
        type: 'email',
        subject: 'Introduction from {{referral}} - wholesale partnership opportunity',
        status: 'sent' as const,
        opens: 18,
        replies: 5,
      },
      {
        day: 3,
        type: 'email',
        subject: 'Volume pricing sheet attached - as discussed',
        status: 'sent' as const,
        opens: 15,
        replies: 3,
      },
      {
        day: 7,
        type: 'call',
        subject: 'Follow-up call to discuss pricing and MOQs',
        status: 'scheduled' as const,
        opens: 0,
        replies: 0,
      },
      {
        day: 10,
        type: 'email',
        subject: 'Updated terms + free shipping on first order over $10K',
        status: 'scheduled' as const,
        opens: 0,
        replies: 0,
      },
    ],
  },
]

// Dashboard stats ----------------------------------------------------------

export const dashboardStats = [
  { label: 'Leads Generated', value: '1,247', icon: 'users', change: '+12%', positive: true },
  { label: 'Leads Enriched', value: '982', icon: 'sparkles', change: '+8%', positive: true },
  { label: 'Emails Sent', value: '3,456', icon: 'mail', change: '+23%', positive: true },
  { label: 'Reply Rate', value: '8.5%', icon: 'reply', change: '-1.2%', positive: false },
  { label: 'Pipeline Deals', value: '23', icon: 'pipeline', change: '+5', positive: true },
  { label: 'Revenue', value: '$245K', icon: 'trophy', change: '+18%', positive: true },
]

// Workflow nodes -----------------------------------------------------------

export interface WorkflowNode {
  id: string
  type: 'trigger' | 'action' | 'condition' | 'output'
  label: string
  description: string
  status: 'completed' | 'running' | 'pending'
  config?: Record<string, string>
}

export const sampleWorkflow: WorkflowNode[] = [
  {
    id: 'node-001',
    type: 'trigger',
    label: 'New Lead Added',
    description: 'Triggers when a new lead is imported or created.',
    status: 'completed',
    config: { source: 'CSV Import', frequency: 'real-time' },
  },
  {
    id: 'node-002',
    type: 'action',
    label: 'Enrich Lead Data',
    description: 'Pull company info, revenue, and contacts from Apollo / Clearbit.',
    status: 'completed',
    config: { provider: 'Apollo.io', fields: 'company,revenue,employees,contacts' },
  },
  {
    id: 'node-003',
    type: 'action',
    label: 'Score Lead',
    description: 'Apply AI scoring model based on ICP match and buying signals.',
    status: 'completed',
    config: { model: 'gtm-scorer-v2', threshold: '60' },
  },
  {
    id: 'node-004',
    type: 'condition',
    label: 'Score >= 70?',
    description: 'Route high-score leads to outreach, low-score to nurture.',
    status: 'running',
    config: { condition: 'score >= 70', trueRoute: 'node-005', falseRoute: 'node-006' },
  },
  {
    id: 'node-005',
    type: 'action',
    label: 'Send Outreach Email',
    description: 'Generate and send personalized cold email using AI copywriter.',
    status: 'pending',
    config: { template: 'cold-email-v3', personalization: 'high' },
  },
  {
    id: 'node-006',
    type: 'output',
    label: 'Add to Nurture List',
    description: 'Add low-score leads to drip nurture campaign for future engagement.',
    status: 'pending',
    config: { campaign: 'nurture-q2-2026', cadence: 'weekly' },
  },
]
