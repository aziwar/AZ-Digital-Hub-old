import { 
  ChartBarIcon, 
  ComputerDesktopIcon, 
  MegaphoneIcon, 
  ShoppingCartIcon,
  CogIcon,
  LightBulbIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

import type { Experience, Skill, Project, Service, Certification, SocialLink, ContactInfo } from '@/types'

export const personalInfo = {
  name: "Ahmed Ziwar",
  title: "Digital Marketing Manager | Strategic Thinker | Creative Problem Solver | ROI-Driven",
  location: "Al Asimah, Kuwait",
  email: "ahmedziwar@gmail.com",
  phone: "+965 60672773",
  linkedin: "https://linkedin.com/in/ahmedziwar",
  personalWebsite: "https://about.me/ahmedziwar",
  summary: `Experience in Consulting Practices with the full business cycle
IT Consulting & Business visualization & Digital Marketer`,
  bio: `Experienced Digital Marketing Manager and IT Consultant with over 8 years of expertise in Kuwait. 
Specialized in ROI-driven campaigns, e-commerce solutions, and strategic business growth. 
Proven track record in delivering measurable results across diverse industries including telecommunications, 
real estate, and technology sectors.`,
  languages: ["English (Full Professional)", "Arabic (Native or Bilingual)"],
  availability: "Available for new projects"
}

export const experiences: Experience[] = [
  {
    company: "Smart Technology (STSCKW)",
    role: "Digital Solutions Manager",
    period: "May 2022 - Present (3 years)",
    description: `Plan, implement, and manage e-commerce websites to align with business objectives, ensuring a seamless user experience that drives online sales and enhances the customer journey. Oversee digital marketing campaigns, including e-commerce strategies, to boost brand visibility, engagement, and lead generation. Execute social media and email marketing campaigns to promote products, increase customer acquisition, retention, and loyalty.`,
    icon: BriefcaseIcon
  },
  {
    company: "Dr Scent",
    role: "Digital Marketing Manager",
    period: "March 2023 - July 2024 (1 year 5 months)",
    description: `Implement digital marketing campaigns that align with business objectives, and plan and execute social media strategies to increase brand awareness, engagement, and lead generation. Manage email marketing campaigns to drive customer acquisition, retention, and loyalty, and optimize website content and user experience to improve search engine rankings and conversion rates.`,
    icon: BriefcaseIcon
  },
  {
    company: "Ooredoo Kuwait",
    role: "Social Media Specialist",
    period: "December 2019 - April 2022 (2 years 5 months)",
    description: `Build and execute social media strategy through competitive research, platform determination, benchmarking, messaging, and audience identification. Publish and share daily content that builds meaningful connections and encourages community members to take action.`,
    icon: BriefcaseIcon
  },
  {
    company: "Golden Gate KW",
    role: "Digital Media Specialist",
    period: "August 2016 - January 2018 (1 year 6 months)",
    description: `Develop relevant content topics to reach the company's target customers. Create, curate, and manage all published content. Monitor, listen and respond to users in a "Social" way while cultivating leads and sales.`,
    icon: BriefcaseIcon
  },
  {
    company: "Amz-IT",
    role: "IT Consultant",
    period: "July 2012 - August 2016 (4 years 2 months)",
    description: `Meeting with clients to determine requirements, planning timescales and resources needed, analyzing Digital requirements within companies, and developing agreed solutions and implementing new solutions.`,
    icon: BriefcaseIcon
  }
]

export const skills: Skill[] = [
  { name: "Digital Marketing Strategy", level: 95, category: 'marketing' },
  { name: "Social Media Analysis", level: 90, category: 'marketing' },
  { name: "PPC Campaigns", level: 88, category: 'marketing' },
  { name: "E-commerce Strategy", level: 92, category: 'marketing' },
  { name: "SEO/SEM", level: 85, category: 'marketing' },
  { name: "Data Analysis with Python", level: 87, category: 'technical' },
  { name: "IT Consulting", level: 90, category: 'technical' },
  { name: "Project Management", level: 88, category: 'soft' },
  { name: "Campaign Management", level: 93, category: 'marketing' },
  { name: "Email Marketing", level: 85, category: 'marketing' },
  { name: "Content Strategy", level: 87, category: 'marketing' },
  { name: "Business Intelligence", level: 82, category: 'technical' }
]

export const projects: Project[] = [
  {
    id: "stsckw-ecommerce",
    title: "Smart Technology E-commerce Growth",
    company: "STSCKW",
    period: "2022 - Present",
    description: "Led comprehensive e-commerce website management and digital marketing campaigns, focusing on ROI optimization and user experience enhancement.",
    results: [
      "150% increase in online conversions",
      "200% growth in organic traffic", 
      "85% improvement in customer retention",
      "300% ROI on PPC campaigns"
    ],
    technologies: ["Google Ads", "SEO", "Analytics", "E-commerce"],
    category: "E-commerce",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: "drscent-digital",
    title: "Dr Scent Digital Transformation",
    company: "Dr Scent",
    period: "2023 - 2024",
    description: "Implemented comprehensive digital marketing strategies including social media campaigns, email marketing, and PPC advertising to boost brand visibility.",
    results: [
      "400% increase in social engagement",
      "250% growth in email subscribers",
      "180% improvement in brand awareness",
      "220% ROI increase"
    ],
    technologies: ["Social Media", "Email Marketing", "Content Strategy", "PPC"],
    category: "Digital Marketing",
    gradient: "from-pink-500 to-red-600"
  },
  {
    id: "ooredoo-social",
    title: "Ooredoo Kuwait Social Strategy",
    company: "Ooredoo Kuwait",
    period: "2019 - 2022",
    description: "Built and executed comprehensive social media strategies, managing community engagement and establishing strong brand presence across platforms.",
    results: [
      "500% increase in social followers",
      "350% growth in engagement rate",
      "90% improvement in customer satisfaction",
      "160% increase in lead generation"
    ],
    technologies: ["Social Media Management", "Community Building", "Content Creation", "Analytics"],
    category: "Social Media",
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: "goldengate-media",
    title: "Golden Gate Digital Media Campaign",
    company: "Golden Gate KW", 
    period: "2016 - 2018",
    description: "Developed and managed comprehensive digital media campaigns, focusing on content creation, social advertising, and online reputation management.",
    results: [
      "300% increase in online visibility",
      "200% growth in customer engagement",
      "150% improvement in conversion rates",
      "180% ROI on digital campaigns"
    ],
    technologies: ["Digital Advertising", "Content Marketing", "SEO", "Social Media"],
    category: "Digital Media",
    gradient: "from-orange-500 to-yellow-600"
  }
]

export const services: Service[] = [
  {
    icon: MegaphoneIcon,
    title: "Digital Marketing Strategy",
    description: "Comprehensive digital marketing strategies tailored to your business objectives, focusing on ROI-driven campaigns and measurable results.",
    features: ["Campaign Strategy", "Content Planning", "Brand Positioning", "Market Analysis"],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: ShoppingCartIcon,
    title: "E-commerce Solutions",
    description: "End-to-end e-commerce website management, optimization, and growth strategies to maximize online sales and customer experience.",
    features: ["Website Optimization", "Conversion Rate Optimization", "User Experience Design", "Sales Funnel Development"],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: ChartBarIcon,
    title: "PPC & Advertising",
    description: "Expert management of Google Ads, social media advertising, and other PPC platforms to maximize visibility and ROI.",
    features: ["Google Ads Management", "Social Media Ads", "Campaign Optimization", "Performance Tracking"], 
    color: "from-orange-500 to-red-600"
  },
  {
    icon: ComputerDesktopIcon,
    title: "IT Consulting",
    description: "Strategic IT consulting services including system analysis, technology implementation, and digital transformation guidance.",
    features: ["System Analysis", "Technology Planning", "Digital Transformation", "Process Optimization"],
    color: "from-indigo-500 to-blue-600"  
  },
  {
    icon: CogIcon,
    title: "Social Media Management",
    description: "Complete social media strategy, content creation, community management, and engagement optimization across all platforms.",
    features: ["Content Creation", "Community Management", "Social Strategy", "Engagement Analytics"],
    color: "from-pink-500 to-purple-600"
  },
  {
    icon: LightBulbIcon,
    title: "Business Intelligence",
    description: "Data-driven insights, performance analytics, and strategic recommendations to drive informed business decisions.",
    features: ["Data Analysis", "Performance Metrics", "Strategic Insights", "ROI Reporting"],
    color: "from-yellow-500 to-orange-600"
  }
]

export const certifications: Certification[] = [
  {
    name: "Data Analysis with Python",
    issuer: "Microsoft Professional Program",
    date: "2017"
  },
  {
    name: "From Likes to Leads: Interact with Customers Online",
    issuer: "Google Digital Marketing",
    date: "2023"
  },
  {
    name: "Foundations of Digital Marketing and E-commerce",
    issuer: "Google Career Certificates",
    date: "2023"
  },
  {
    name: "Microsoft Professional Program - Data Science",
    issuer: "Microsoft",
    date: "2017"
  },
  {
    name: "BerkeleyX: Artificial Intelligence",
    issuer: "UC Berkeley",
    date: "2012"
  }
]

export const socialLinks: SocialLink[] = [
  {
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: "https://linkedin.com/in/ahmedziwar",
    label: "LinkedIn",
    color: "text-blue-600 hover:text-blue-700"
  },
  {
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
      </svg>
    ),
    href: "mailto:ahmedziwar@gmail.com",
    label: "Email",
    color: "text-red-500 hover:text-red-600"
  },
  {
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.116.112.219.085.338-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.012.001 12.017 0z"/>
      </svg>
    ),
    href: "#",
    label: "Pinterest",
    color: "text-red-600 hover:text-red-700"
  }
]

export const contactInfo: ContactInfo[] = [
  {
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
      </svg>
    ),
    title: "Email",
    value: "ahmedziwar@gmail.com",
    href: "mailto:ahmedziwar@gmail.com",
    color: "text-red-500"
  },
  {
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
      </svg>
    ),
    title: "Phone",
    value: "+965 60672773",
    href: "tel:+96560672773",
    color: "text-green-500"
  },
  {
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>
    ),
    title: "Location",
    value: "Kuwait City, Kuwait",
    href: "https://maps.google.com/?q=Kuwait+City",
    color: "text-blue-500"
  }
]

export const stats = [
  { number: "8+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "15+", label: "Happy Clients" },
  { number: "100%", label: "ROI Focused" }
]

export const portfolioStats = [
  { number: "250%", label: "Average ROI Increase" },
  { number: "15+", label: "Successful Campaigns" },
  { number: "50+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" }
]
