// Navigation types
export interface NavigationItem {
  title: string
  href: string
  children?: NavigationItem[]
}

// Social media types
export interface SocialLink {
  name: string
  href: string
  icon: string
}

// Feature types
export interface Feature {
  title: string
  description: string
  icon: string
  image?: string
}

// Pricing plan types
export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular: boolean
  badge?: string
}

// Testimonial types
export interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
  rating?: number
}

// Footer link types
export interface FooterLink {
  name: string
  href: string
}

export interface FooterLinks {
  product: FooterLink[]
  company: FooterLink[]
  support: FooterLink[]
  legal: FooterLink[]
}

// Button types
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  href?: string
}

// Card types
export interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  border?: boolean
}

// Form types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  validation?: {
    pattern?: string
    message?: string
  }
}

// Hero section types
export interface HeroSection {
  title: string
  subtitle: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  image: string
}

// Stats types
export interface Stat {
  value: string
  label: string
  description?: string
}

// FAQ types
export interface FAQ {
  question: string
  answer: string
  category?: string
}

// Contact form types
export interface ContactForm {
  name: string
  email: string
  company?: string
  message: string
  phone?: string
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// User types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: Date
}

// Theme types
export interface Theme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
}

// Animation types
export interface AnimationProps {
  children: React.ReactNode
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right'
  delay?: number
  duration?: number
  className?: string
}

// SEO types
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

// Layout types
export interface LayoutProps {
  children: React.ReactNode
  className?: string
  container?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}
