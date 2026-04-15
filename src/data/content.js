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
    name: 'Developer Portfolio',
    description: 'This website. Accessible, responsive, and fast — built with React, TypeScript, and Vite.',
    tags: ['React', 'TypeScript', 'Vite'],
    url: 'https://edrian-gamma.vercel.app/',
  },
  {
    name: 'Toonify',
    description: 'Personal manhwa reader application fetching content from external APIs with mobile compatibility.',
    tags: ['Bubble.io', 'Mobile API', 'ScraperGo API'],
    url: 'https://toonify-91893.bubbleapps.io/version-test',
  },
  {
    name: 'One Trading Social',
    description: 'Trading-focused social network platform emphasizing real-time user interactions.',
    tags: ['Bubble.io', 'Mobile API'],
    url: 'https://onetradingsocial.bubbleapps.io/version-test',
  },
  {
    name: 'First Encoding',
    description: 'Internal employee management system designed to streamline operational workflows.',
    tags: ['Bubble.io', 'AHK Registry API'],
    url: 'https://firstencoding.app/',
  },
  {
    name: 'MINA Pro',
    description: 'Loan management system enhancing client servicing through intelligent workflow automation.',
    tags: ['Bubble.io', 'Make.com', 'OpenAI API', 'XML'],
    url: 'https://minapro.io',
  },
  {
    name: 'Sales Made Easy',
    description: 'AI-powered personal CMO generating business strategies, weekly updates, and automating LinkedIn content distribution.',
    tags: ['Bubble.io', 'OpenAI', 'LinkedIn API', 'Twilio'],
    url: 'https://lucio-62986.bubbleapps.io/version-test',
  },
  {
    name: 'BahayCebu Realty',
    description: 'Premium real estate showcase highlighting upscale properties and investment opportunities in Cebu.',
    tags: ['Claude Code'],
    url: 'https://edrian-gamma.vercel.app/projects/cebu-realty.html',
  },
  {
    name: 'Gaming Profile',
    description: 'Personal gaming achievements showcase displaying playtime, competitive ranks, and high-end PC build specifications.',
    tags: ['Claude Code'],
    url: 'https://edrian-gamma.vercel.app/projects/gaming-profile.html',
  },
  {
    name: 'FreshWave Laundry',
    description: 'Modern laundry service page emphasizing eco-friendly solutions and convenient wash-and-fold options.',
    tags: ['Claude Code'],
    url: 'https://edrian-gamma.vercel.app/projects/laundry-cebu.html',
  },
  {
    name: 'Mandaue Transport Cooperative',
    description: 'Community transport platform featuring cashless payments, GPS tracking, and eco-friendly jeepney services.',
    tags: ['Claude Code'],
    url: 'https://edrian-gamma.vercel.app/projects/mandaue-transport-cooperative.html',
  },
  {
    name: 'Villa Melissa HOA',
    description: 'Homeowners association page displaying residential updates and community programming.',
    tags: ['Claude Code'],
    url: 'https://edrian-gamma.vercel.app/projects/villa-melissa-hoa.html',
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
