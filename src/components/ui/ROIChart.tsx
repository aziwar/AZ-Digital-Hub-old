'use client'

import { ArrowTrendingUpIcon, ChartBarIcon, CurrencyDollarIcon, TrophyIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useRef } from 'react'

interface ROIMetric {
  category: string
  percentage: number
  value: string
  color: string
  barWidth: number
  description?: string
  timeline?: string
}

export function ROIChart() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)
  const [animatedWidths, setAnimatedWidths] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)
  
  const metrics: ROIMetric[] = [
    {
      category: 'E-commerce Optimization',
      percentage: 340,
      value: '+340%',
      color: 'from-green-400 to-emerald-400',
      barWidth: 85,
      description: 'Complete e-commerce transformation with KNET integration and conversion optimization',
      timeline: '3-6 months average'
    },
    {
      category: 'Digital Marketing Campaigns',
      percentage: 280,
      value: '+280%',
      color: 'from-purple-400 to-violet-400',
      barWidth: 70,
      description: 'Multi-channel campaigns optimized for Kuwait and GCC markets',
      timeline: '2-4 months average'
    },
    {
      category: 'Kuwait Market Penetration',
      percentage: 420,
      value: '+420%',
      color: 'from-cyan-400 to-blue-400',
      barWidth: 95,
      description: 'Local market dominance with culturally-aware digital strategies',
      timeline: '4-8 months average'
    },
    {
      category: 'IT Infrastructure ROI',
      percentage: 180,
      value: '+180%',
      color: 'from-yellow-400 to-orange-400',
      barWidth: 45,
      description: 'Technology modernization and process optimization',
      timeline: '6-12 months average'
    }
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate bars with staggered delay
          metrics.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedWidths(prev => {
                const newWidths = [...prev]
                newWidths[index] = metrics[index].barWidth
                return newWidths
              })
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Initialize animated widths to 0
  useEffect(() => {
    setAnimatedWidths(new Array(metrics.length).fill(0))
  }, [])

  return (
    <div 
      ref={chartRef}
      className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/30 to-cyan-400/30 blur-lg" />
          <div className="relative bg-slate-700/50 rounded-full p-2">
            <ArrowTrendingUpIcon className="size-6 text-green-400" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Performance Metrics</h3>
          <p className="text-sm text-gray-400">Average ROI Increases - Kuwait Market</p>
        </div>
      </div>
      
      {/* Metrics Grid */}
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div 
            key={metric.category}
            className={`group cursor-pointer transition-all duration-300 ${
              selectedMetric === metric.category ? 'scale-105' : 'hover:scale-102'
            }`}
            onClick={() => setSelectedMetric(selectedMetric === metric.category ? null : metric.category)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-sm font-medium">{metric.category}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </span>
                <ChartBarIcon className="size-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
            
            {/* Enhanced Progress Bar with Animation */}
            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden relative">
              <div 
                className={`bg-gradient-to-r ${metric.color} h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                style={{ 
                  width: `${animatedWidths[index] || 0}%`,
                  transformOrigin: 'left',
                  animation: selectedMetric === metric.category ? 'magneticPull 0.6s ease-in-out infinite' : 'none'
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full animate-shimmer" />
              </div>
              {/* Percentage indicator */}
              {animatedWidths[index] > 0 && (
                <div 
                  className="absolute top-0 h-3 flex items-center"
                  style={{ left: `${Math.min(animatedWidths[index] || 0, 90)}%` }}
                >
                  <div className={`w-1 h-4 bg-gradient-to-b ${metric.color} rounded-full shadow-lg`} />
                </div>
              )}
            </div>
            
            {/* Enhanced Expanded Details with Animation */}
            {selectedMetric === metric.category && (
              <div className="mt-3 p-4 bg-slate-700/30 rounded-lg border border-gray-600/30 animate-slideInUp">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <TrophyIcon className="size-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-300 leading-relaxed">{metric.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs">
                        <span className="text-gray-400 flex items-center gap-1">
                          <CurrencyDollarIcon className="size-3" />
                          Based on 200+ implementations
                        </span>
                        <span className={`font-medium bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                          ⏱️ {metric.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Rate Indicator */}
                  <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded-md">
                    <span className="text-xs text-gray-400">Success Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-slate-600 rounded-full overflow-hidden">
                        <div className="w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse" />
                      </div>
                      <span className="text-xs font-bold text-green-400">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Enhanced Footer Stats */}
      <div className="mt-6 pt-4 border-t border-gray-600/30">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-purple-400 group-hover:animate-pulse">200+</div>
            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Projects</div>
            <div className="w-full h-0.5 bg-purple-400/30 rounded-full mt-1 group-hover:bg-purple-400 transition-colors" />
          </div>
          <div className="group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-cyan-400 group-hover:animate-pulse">24-48h</div>
            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Response</div>
            <div className="w-full h-0.5 bg-cyan-400/30 rounded-full mt-1 group-hover:bg-cyan-400 transition-colors" />
          </div>
          <div className="group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-green-400 group-hover:animate-pulse">100%</div>
            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Guarantee</div>
            <div className="w-full h-0.5 bg-green-400/30 rounded-full mt-1 group-hover:bg-green-400 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Compact ROI Badge for inline use
export function ROIBadge({ metric }: { metric: ROIMetric }) {
  return (
    <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur rounded-full px-3 py-1 border border-purple-500/30">
      <ArrowTrendingUpIcon className="size-4 text-green-400" />
      <span className={`text-sm font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
        {metric.value}
      </span>
    </div>
  )
}