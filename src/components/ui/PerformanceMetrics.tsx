'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PerformanceMetrics() {
  const [isVisible, setIsVisible] = useState(false)
  const [fps, setFps] = useState(60)
  const [memory, setMemory] = useState<number | null>(null)
  const [renderTime, setRenderTime] = useState(0)
  
  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let rafId: number
    
    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)))
        frameCount = 0
        lastTime = currentTime
      }
      
      // Measure render time
      const renderStart = performance.now()
      requestAnimationFrame(() => {
        setRenderTime(Math.round(performance.now() - renderStart))
      })
      
      // Measure memory if available
      if ('memory' in performance && (performance as any).memory) {
        const memoryUsage = (performance as any).memory.usedJSHeapSize / 1048576
        setMemory(Math.round(memoryUsage))
      }
      
      rafId = requestAnimationFrame(measureFPS)
    }
    
    measureFPS()
    
    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])
  
  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle performance metrics"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </motion.button>
      
      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-20 right-4 z-50 bg-slate-900 border border-slate-800 rounded-lg p-4 min-w-[200px]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xs font-semibold text-slate-400 mb-3">Performance</h3>
            
            {/* FPS */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-500">FPS</span>
              <span className={`text-sm font-mono ${
                fps >= 50 ? 'text-green-400' : 
                fps >= 30 ? 'text-yellow-400' : 
                'text-red-400'
              }`}>
                {fps}
              </span>
            </div>
            
            {/* Memory */}
            {memory !== null && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500">Memory</span>
                <span className="text-sm font-mono text-slate-400">
                  {memory} MB
                </span>
              </div>
            )}
            
            {/* Render Time */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Render</span>
              <span className={`text-sm font-mono ${
                renderTime <= 16 ? 'text-green-400' : 
                renderTime <= 33 ? 'text-yellow-400' : 
                'text-red-400'
              }`}>
                {renderTime} ms
              </span>
            </div>
            
            {/* Performance Tips */}
            {fps < 30 && (
              <div className="mt-3 pt-3 border-t border-slate-800">
                <p className="text-xs text-red-400">
                  Low FPS detected. Consider reducing animations.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
