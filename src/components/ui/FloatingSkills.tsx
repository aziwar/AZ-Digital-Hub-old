'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const skills = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS',
  'GraphQL', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS',
  'Git', 'CI/CD', 'REST APIs', 'WebSockets', 'Jest',
  'Cypress', 'Figma', 'Agile', 'Scrum', 'Jira'
]

const FloatingSkills = () => {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setMounted(true)
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Generate random positions for skills
  const getRandomPosition = (index: number) => {
    if (dimensions.width === 0 || dimensions.height === 0) {
      return { x: 0, y: 0 }
    }
    
    const radius = Math.min(dimensions.width, dimensions.height) * 0.4
    const angle = (index / skills.length) * Math.PI * 2
    const distance = 0.7 + Math.random() * 0.3 // Keep some distance from center
    
    return {
      x: Math.cos(angle) * radius * distance,
      y: Math.sin(angle) * radius * distance
    }
  }

  if (!mounted) return null

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      {skills.map((skill, index) => {
        const position = getRandomPosition(index)
        const delay = Math.random() * 0.5
        const duration = 5 + Math.random() * 5
        
        return (
          <motion.div
            key={skill}
            className="absolute text-sm font-medium text-primary/70 dark:text-primary-300/70 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.8],
              x: [0, position.x * 0.8, position.x],
              y: [0, position.y * 0.8, position.y]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          >
            {skill}
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingSkills
