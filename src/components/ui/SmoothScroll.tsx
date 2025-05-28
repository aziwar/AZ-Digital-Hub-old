'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Create smooth spring animation for scroll
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    mass: 0.5
  })
  
  useEffect(() => {
    // Add smooth scrolling CSS for browsers that support it
    document.documentElement.style.scrollBehavior = 'smooth'
    
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
    
    document.addEventListener('click', handleAnchorClick)
    
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
    
    document.addEventListener('keydown', handleKeyboard)
    
    // Clean up
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      document.removeEventListener('keydown', handleKeyboard)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
  
  // Add momentum scrolling for touch devices
  useEffect(() => {
    if ('ontouchstart' in window) {
      // @ts-ignore - webkitOverflowScrolling is a non-standard property
      document.body.style.webkitOverflowScrolling = 'touch'
    }
  }, [])
  
  return (
    <motion.div ref={scrollRef} className="smooth-scroll-container">
      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 transform-origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />
      
      {children}
    </motion.div>
  )
}
