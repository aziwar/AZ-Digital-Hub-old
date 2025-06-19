import { 
  ChartBarIcon,
  ComputerDesktopIcon, 
  RocketLaunchIcon,
  TrophyIcon,
  CogIcon,
  LightBulbIcon
} from '@heroicons/react/24/solid'

interface ServiceIconProps {
  service: 'marketing' | 'development' | 'strategy' | 'optimization' | 'consulting' | 'innovation'
  className?: string
  animated?: boolean
}

export function ServiceIcon({ 
  service, 
  className = "size-12", 
  animated = true 
}: ServiceIconProps) {
  const icons = {
    marketing: ChartBarIcon,
    development: ComputerDesktopIcon,
    strategy: RocketLaunchIcon,
    optimization: TrophyIcon,
    consulting: CogIcon,
    innovation: LightBulbIcon
  }
  
  const Icon = icons[service]
  const animationClass = animated ? 'hover:scale-110 hover:rotate-6' : ''
  
  return (
    <div className={`relative group ${animated ? 'transition-all duration-300' : ''}`}>
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className={`relative bg-slate-800/50 backdrop-blur rounded-full p-4 border border-purple-500/30 group-hover:border-cyan-400/50 transition-all duration-300 ${animationClass}`}>
        <Icon className={`${className} text-purple-400 group-hover:text-cyan-400 transition-colors duration-300`} />
      </div>
    </div>
  )
}

// Service Grid Component for organized display
export function ServiceIconGrid() {
  const services: Array<{
    service: ServiceIconProps['service']
    label: string
    description: string
  }> = [
    {
      service: 'marketing',
      label: 'Digital Marketing',
      description: 'ROI-focused campaigns'
    },
    {
      service: 'development',
      label: 'E-commerce Dev',
      description: 'High-conversion stores'
    },
    {
      service: 'strategy',
      label: 'Growth Strategy',
      description: 'Kuwait market expertise'
    },
    {
      service: 'optimization',
      label: 'Performance',
      description: '300%+ ROI increase'
    },
    {
      service: 'consulting',
      label: 'IT Consulting',
      description: 'Strategic guidance'
    },
    {
      service: 'innovation',
      label: 'Innovation',
      description: 'Cutting-edge solutions'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {services.map(({ service, label, description }) => (
        <div key={service} className="text-center space-y-3">
          <ServiceIcon service={service} />
          <div>
            <h4 className="text-white font-semibold text-sm">{label}</h4>
            <p className="text-gray-400 text-xs">{description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}