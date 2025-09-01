// Site configuration
export const siteConfig = {
  name: 'Whitepace',
  description: 'Professional SaaS Landing Page',
  url: 'https://whitepace.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/whitepace',
    github: 'https://github.com/whitepace',
    linkedin: 'https://linkedin.com/company/whitepace',
  },
}

// Navigation items
export const navigationItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'Pricing',
    href: '#pricing',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

// Social media links
export const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/whitepace',
    icon: 'twitter',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/whitepace',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/whitepace',
    icon: 'github',
  },
]

// Feature items
export const features = [
  {
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing workflow',
    icon: 'integration',
  },
  {
    title: 'Real-time Analytics',
    description: 'Get instant insights into your data',
    icon: 'analytics',
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime',
    icon: 'security',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support',
    icon: 'support',
  },
]

// Pricing plans
export const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams',
    features: [
      'Up to 5 users',
      'Basic analytics',
      'Email support',
      '1GB storage',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 users',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Custom analytics',
      'Dedicated support',
      'Unlimited storage',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

// Testimonials
export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    content: 'Whitepace has transformed how we manage our projects. The interface is intuitive and the features are exactly what we needed.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'The analytics and reporting features have given us insights we never had before. Highly recommended!',
    avatar: '/avatars/michael.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    content: 'Customer support is exceptional. They helped us get up and running in no time.',
    avatar: '/avatars/emily.jpg',
  },
]

// Footer links
export const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API', href: '/api' },
    { name: 'Documentation', href: '/docs' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact', href: '/contact' },
    { name: 'Status', href: '/status' },
    { name: 'Community', href: '/community' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
}
