export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface Project {
  id: string
  title: string
  company: string
  period: string
  description: string
  results: string[]
  technologies: string[]
  category: string
  image?: string
  gradient: string
  link?: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  color: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface Skill {
  name: string
  level: number
  category: 'technical' | 'marketing' | 'soft'
}

export interface Certification {
  name: string
  issuer: string
  date: string
  link?: string
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
  color: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  href: string
  color: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  image?: string
  url?: string
}

export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
      staggerChildren?: number
      delayChildren?: number
    }
  }
}

export interface TestimonialData {
  id: string
  name: string
  company: string
  role: string
  content: string
  avatar?: string
  rating: number
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  tags: string[]
  image?: string
  slug: string
}

export interface Analytics {
  views: number
  clicks: number
  conversions: number
  bounceRate: number
  avgSessionDuration: number
}
