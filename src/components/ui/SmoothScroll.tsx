'use client'

import type { ReactNode} from 'react';
import { useEffect, useRef, useState } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    // Add smooth scrolling CSS for browsers that support it
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Track scroll progress
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }
    
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (anchor) {
        e.preventDefault()
        const elementId = anchor.getAttribute('href')?.slice(1)
        if (elementId) {
          const element = document.getElementById(elementId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }
    
    // Smooth scroll for keyboard navigation
    const handleKeyboard = (e: KeyboardEvent) => {
      const scrollAmount = window.innerHeight * 0.8
      
      switch(e.key) {
        case 'PageDown':
          e.preventDefault()
          window.scrollBy({ top: scrollAmount, behavior: 'smooth' })
          break
        case 'PageUp':
          e.preventDefault()
          window.scrollBy({ top: -scrollAmount, behavior: 'smooth' })
          break
        case 'Home':
          if (e.ctrlKey) {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          break
        case 'End':
          if (e.ctrlKey) {
            e.preventDefault()
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
          }
          break
      }
    }
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleAnchorClick)
    document.addEventListener('keydown', handleKeyboard)
    
    // Initial scroll position
    handleScroll()
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleAnchorClick)
      document.removeEventListener('keydown', handleKeyboard)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
  
  // Add momentum scrolling for touch devices
  useEffect(() => {
    if ('ontouchstart' in window) {
      // @ts-expect-error - webkitOverflowScrolling is a non-standard property
      document.body.style.webkitOverflowScrolling = 'touch'
    }
  }, [])
  
  return (
    <>
      <style jsx>{`
        .smooth-scroll-progress {
          transform-origin: left;
          transition: transform 0.1s ease-out;
        }
      `}</style>
      
      <div ref={scrollRef} className="smooth-scroll-container">
        {/* Progress indicator */}
        <div
          className="smooth-scroll-progress fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 z-50"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
        
        {children}
      </div>
    </>
  )
}
