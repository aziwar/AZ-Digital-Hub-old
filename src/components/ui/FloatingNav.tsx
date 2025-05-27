'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HomeIcon, UserIcon, BriefcaseIcon, FolderIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()
  const pathname = usePathname()

  // Only show on home page
  if (pathname !== '/') return null

  const navItems = [
    { id: 'hero', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About', icon: UserIcon },
    { id: 'services', label: 'Services', icon: BriefcaseIcon },
    { id: 'portfolio', label: 'Portfolio', icon: FolderIcon },
    { id: 'contact', label: 'Contact', icon: ChatBubbleLeftIcon }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)

      // Update active section
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        >
          <motion.div
            className="flex items-center gap-1 p-2 bg-slate-900/90 backdrop-blur-xl rounded-full border border-slate-800/50 shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {/* Icon */}
                  <div className={`relative z-10 p-3 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'} transition-colors`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  >
                    <div className="px-2 py-1 bg-slate-800 text-xs text-white rounded whitespace-nowrap">
                      {item.label}
                    </div>
                  </motion.div>
                </motion.button>
              )
            })}
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default FloatingNav
