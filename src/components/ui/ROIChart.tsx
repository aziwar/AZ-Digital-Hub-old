'use client'

import { TrendingUpIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface ROIMetric {
  category: string
  percentage: number
  value: string
  color: string
  barWidth: number
}

export function ROIChart() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)
  
  const metrics: ROIMetric[] = [
    {
      category: 'E-commerce Optimization',
      percentage: 340,
      value: '+340%',
      color: 'from-green-400 to-emerald-400',
      barWidth: 85
    },
    {
      category: 'Digital Marketing Campaigns',
      percentage: 280,
      value: '+280%',
      color: 'from-purple-400 to-violet-400',
      barWidth: 70
    },
    {
      category: 'Kuwait Market Penetration',
      percentage: 420,
      value: '+420%',
      color: 'from-cyan-400 to-blue-400',
      barWidth: 95
    },
    {
      category: 'IT Infrastructure ROI',
      percentage: 180,
      value: '+180%',
      color: 'from-yellow-400 to-orange-400',
      barWidth: 45
    }
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/30 to-cyan-400/30 blur-lg" />
          <div className="relative bg-slate-700/50 rounded-full p-2">
            <TrendingUpIcon className="size-6 text-green-400" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Performance Metrics</h3>
          <p className="text-sm text-gray-400">Average ROI Increases - Kuwait Market</p>
        </div>
      </div>
      
      {/* Metrics Grid */}
      <div className="space-y-4">
        {metrics.map((metric) => (
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
            
            {/* Progress Bar */}
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div 
                className={`bg-gradient-to-r ${metric.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${metric.barWidth}%` }}
              />
            </div>
            
            {/* Expanded Details */}
            {selectedMetric === metric.category && (
              <div className="mt-3 p-3 bg-slate-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <CurrencyDollarIcon className="size-4" />
                  <span>Based on 200+ Kuwait business implementations</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer Stats */}
      <div className="mt-6 pt-4 border-t border-gray-600/30">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-400">200+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">24-48h</div>
            <div className="text-xs text-gray-400">Response</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-xs text-gray-400">Guarantee</div>
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
      <TrendingUpIcon className="size-4 text-green-400" />
      <span className={`text-sm font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
        {metric.value}
      </span>
    </div>
  )
}