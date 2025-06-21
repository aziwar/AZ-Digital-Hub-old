'use client'

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

  // Generate positions for skills
  const getPosition = (index: number) => {
    if (dimensions.width === 0 || dimensions.height === 0) {
      return { x: 0, y: 0 }
    }
    
    const radius = Math.min(dimensions.width, dimensions.height) * 0.4
    const angle = (index / skills.length) * Math.PI * 2
    const distance = 0.7 + (index % 3) * 0.1 // Varied distance
    
    return {
      x: Math.cos(angle) * radius * distance,
      y: Math.sin(angle) * radius * distance
    }
  }

  if (!mounted) return null

  return (
    <>
      <style jsx>{`
        @keyframes skillFloat {
          0% { 
            opacity: 0; 
            transform: scale(0.5) translate(0px, 0px); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2) translate(var(--mid-x), var(--mid-y)); 
          }
          100% { 
            opacity: 0.7; 
            transform: scale(0.8) translate(var(--final-x), var(--final-y)); 
          }
        }
        
        .skill-item {
          animation: skillFloat linear infinite;
          animation-duration: var(--duration);
          animation-delay: var(--delay);
          animation-direction: alternate;
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
      >
        {skills.map((skill, index) => {
          const position = getPosition(index)
          const delay = (index * 0.2) % 2
          const duration = 5 + (index % 3)
          
          return (
            <div
              key={skill}
              className="absolute text-sm font-medium text-primary/70 dark:text-primary-300/70 whitespace-nowrap skill-item"
              style={{
                '--delay': `${delay}s`,
                '--duration': `${duration}s`,
                '--mid-x': `${position.x * 0.8}px`,
                '--mid-y': `${position.y * 0.8}px`,
                '--final-x': `${position.x}px`,
                '--final-y': `${position.y}px`,
              } as React.CSSProperties}
            >
              {skill}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FloatingSkills
