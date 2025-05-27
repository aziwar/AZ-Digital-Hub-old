'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Client-side dynamic imports with ssr: false
const ParticleBackground = dynamic(
  () => import('@/components/ui/ParticleBackground'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950" />
  }
)

const PerformanceMetrics = dynamic(
  () => import('@/components/ui/PerformanceMetrics'),
  { ssr: false }
)

interface ClientDynamicComponentsProps {
  showPerformanceMetrics?: boolean
}

export default function ClientDynamicComponents({ 
  showPerformanceMetrics = false 
}: ClientDynamicComponentsProps) {
  return (
    <>
      {/* Performance Metrics (only in development) */}
      {showPerformanceMetrics && (
        <Suspense fallback={null}>
          <PerformanceMetrics />
        </Suspense>
      )}
      
      {/* Advanced Particle Background */}
      <div className="fixed inset-0 -z-10">
        <Suspense fallback={<div className="bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950" />}>
          <ParticleBackground />
        </Suspense>
      </div>
    </>
  )
}
