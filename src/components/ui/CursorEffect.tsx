'use client'

import { useEffect, useState, useRef } from 'react'

export default function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const requestRef = useRef<number>()
  const targetPosition = useRef({ x: 0, y: 0 })
  
  useEffect(() => {
    // Check if device has mouse
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!hasPointer) return
    
    setIsVisible(true)
    
    const updatePosition = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.1,
        y: prev.y + (targetPosition.current.y - prev.y) * 0.1
      }))
      requestRef.current = requestAnimationFrame(updatePosition)
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
      
      // Check if hovering over interactive element
      const target = e.target as HTMLElement
      const isInteractive = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        window.getComputedStyle(target).cursor === 'pointer'
      )
      setIsPointer(isInteractive)
    }
    
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    
    requestRef.current = requestAnimationFrame(updatePosition)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])
  
  // Don't render on touch devices or if prefers-reduced-motion
  if (typeof window !== 'undefined') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return null
  }
  
  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor */}
          <div
            className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out"
            style={{
              transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})`,
              opacity: 1,
            }}
          >
            <div className="w-full h-full bg-white rounded-full" />
          </div>
          
          {/* Cursor trail */}
          <div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] transition-all duration-300 ease-out delay-50"
            style={{
              transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 2 : 1.2})`,
              opacity: 0.3,
            }}
          >
            <div className="w-full h-full border border-purple-500 rounded-full" />
          </div>
        </>
      )}
    </>
  )
}
