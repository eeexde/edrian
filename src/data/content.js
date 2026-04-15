// src/data/content.js

export const skills = [
  {
    icon: '🫧',
    name: 'Bubble.io',
    level: 'Expert',
    description: 'Build full-stack web apps visually — from MVPs to production-grade SaaS platforms.',
  },
  {
    icon: '⚙️',
    name: 'Make.com',
    level: 'Expert',
    description: 'Design powerful automation workflows connecting hundreds of apps and APIs.',
  },
  {
    icon: '🔄',
    name: 'n8n',
    level: 'Advanced',
    description: 'Self-hosted automation pipelines with custom logic and complex branching flows.',
  },
  {
    icon: '🌐',
    name: 'WordPress',
    level: 'Advanced',
    description: 'Build and customise performant CMS-driven websites with Elementor and ACF.',
  },
  {
    icon: '🔌',
    name: 'REST APIs',
    level: 'Advanced',
    description: 'Integrate third-party APIs — authentication, data transformation, webhooks.',
  },
  {
    icon: '🤖',
    name: 'AI Automation',
    level: 'Advanced',
    description: 'Embed OpenAI, Claude, and other LLMs into workflows and no-code applications.',
  },
]

export const projects = [
  {
    name: 'AI Trading Platform',
    description: 'Automated trading signals platform with OpenAI analysis and real-time alerts.',
    tags: ['Bubble.io', 'OpenAI', 'APIs'],
  },
  {
    name: 'Real Estate Marketplace',
    description: 'Property listing platform with advanced search, filters, and agent portals.',
    tags: ['Bubble.io', 'Google Maps API'],
  },
  {
    name: 'Client Onboarding Automation',
    description: 'End-to-end onboarding flow reducing manual work by 70% for a B2B SaaS.',
    tags: ['Make.com', 'Airtable', 'Slack'],
  },
  {
    name: 'AI Content Generator',
    description: 'Bulk SEO content generation tool integrated into a WordPress workflow.',
    tags: ['n8n', 'OpenAI', 'WordPress'],
  },
  {
    name: 'E-commerce Order Manager',
    description: 'Shopify order sync with automated fulfilment notifications and CRM updates.',
    tags: ['Make.com', 'Shopify', 'HubSpot'],
  },
  {
    name: 'Community App',
    description: 'Members-only community platform with events, forums, and payments.',
    tags: ['Bubble.io', 'Stripe', 'Sendgrid'],
  },
  {
    name: 'Lead Capture Pipeline',
    description: 'Multi-source lead aggregation with scoring and CRM auto-assignment.',
    tags: ['Make.com', 'Airtable', 'Typeform'],
  },
  {
    name: 'Internal HR Dashboard',
    description: 'Leave management and employee directory for a 200-person organisation.',
    tags: ['Bubble.io', 'REST APIs'],
  },
  {
    name: 'Invoice Automation Bot',
    description: 'Reads PDF invoices, extracts data with AI, and logs to accounting software.',
    tags: ['n8n', 'OpenAI', 'Xero'],
  },
  {
    name: 'No-Code SaaS Starter',
    description: 'Reusable Bubble.io template with auth, billing, and multi-tenant architecture.',
    tags: ['Bubble.io', 'Stripe'],
  },
]

export const experience = [
  {
    role: 'Freelance No-Code Developer',
    company: 'Independent',
    period: 'Aug 2025 — Present',
    responsibilities: [
      'Deliver Bubble.io, Make.com, and n8n solutions for international clients.',
      'Reduce client manual work by an average of 70% through automation.',
      'Integrate AI capabilities (OpenAI, Claude) into no-code workflows.',
      'Save clients 15+ hours per week through intelligent automations.',
    ],
    tech: ['Bubble.io', 'Make.com', 'n8n', 'OpenAI', 'REST APIs'],
  },
  {
    role: 'No-Code Developer',
    company: 'First Encoding',
    period: 'Aug 2023 — Aug 2025',
    responsibilities: [
      'Built and maintained client-facing Bubble.io applications.',
      'Designed Make.com automation workflows for internal operations.',
      'Integrated REST APIs and third-party services into existing platforms.',
      'Collaborated with design and product teams on feature delivery.',
    ],
    tech: ['Bubble.io', 'Make.com', 'WordPress', 'APIs'],
  },
]

export const toolCategories = [
  {
    category: 'No-Code Platforms',
    tools: ['Bubble.io', 'Webflow', 'Glide', 'Adalo', 'Softr'],
  },
  {
    category: 'Automation',
    tools: ['Make.com', 'n8n', 'Zapier', 'Pipedream', 'Activepieces'],
  },
  {
    category: 'AI & LLMs',
    tools: ['OpenAI', 'Claude', 'Gemini', 'Perplexity', 'LangChain'],
  },
  {
    category: 'CMS & Web',
    tools: ['WordPress', 'Elementor', 'ACF', 'WooCommerce', 'Webflow CMS'],
  },
  {
    category: 'Databases',
    tools: ['Airtable', 'Notion', 'Supabase', 'Firebase', 'PostgreSQL'],
  },
  {
    category: 'APIs & Integrations',
    tools: ['REST APIs', 'GraphQL', 'Webhooks', 'Postman', 'RapidAPI'],
  },
  {
    category: 'Payments',
    tools: ['Stripe', 'PayPal', 'GCash', 'PayMongo'],
  },
  {
    category: 'Communication',
    tools: ['Slack', 'Sendgrid', 'Twilio', 'Intercom', 'WhatsApp API'],
  },
]

export const rates = [
  {
    name: 'Starter',
    price: '$7/hr',
    monthly: 'from $280/mo',
    description: 'Ideal for small tasks, bug fixes, or short automations.',
    features: ['Up to 40 hrs/month', 'Make.com or n8n flows', 'Email support', '3-day turnaround'],
  },
  {
    name: 'Growth',
    price: '$12/hr',
    monthly: 'from $960/mo',
    description: 'Best for ongoing product development or complex automations.',
    features: ['Up to 80 hrs/month', 'Bubble.io + Automation', 'Slack support', '1–2 day turnaround'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    monthly: 'up to $2,000/mo',
    description: 'Full-time engagement for large projects or teams.',
    features: ['Dedicated bandwidth', 'Full-stack no-code', 'Priority support', 'Same-day response'],
  },
]
