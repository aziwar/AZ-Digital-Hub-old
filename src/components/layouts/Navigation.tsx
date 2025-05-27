'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  // Handle scroll behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest
    const difference = currentScrollY - lastScrollY.current
    
    // Update scroll state
    setIsScrolled(currentScrollY > 10)
    
    // Hide/show navigation based on scroll direction
    if (currentScrollY > 100) {
      if (difference > 0 && currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
    } else {
      // Always show at top
      setIsVisible(true)
    }
    
    lastScrollY.current = currentScrollY
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50" : "bg-transparent"
        )}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-slate-200">Ahmed</span>
                <span className="gradient-text ml-2">Ziwar</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname.startsWith(item.href.replace('/#', '/')))
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 group"
                  >
                    <span className={cn(
                      "relative z-10 text-sm font-medium transition-colors duration-300",
                      isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                    )}>
                      {item.name}
                    </span>
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 gradient-bg rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      layoutId="navbar-hover"
                    />
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 gradient-bg rounded-full"
                        layoutId="navbar-active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                )
              })}
              
              {/* CTA Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2 gradient-bg text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Toggle menu</span>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900 border-l border-slate-800 z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                  <span className="text-xl font-bold gradient-text">Menu</span>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center"
                    whileTap={{ scale: 0.9 }}
                  >
                    <XMarkIcon className="w-6 h-6 text-slate-400" />
                  </motion.button>
                </div>
                
                {/* Mobile Menu Items */}
                <nav className="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href || 
                      (item.href !== '/' && pathname.startsWith(item.href.replace('/#', '/')))
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                            isActive 
                              ? "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-white" 
                              : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>
                
                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-slate-800">
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 gradient-bg text-white text-center font-semibold rounded-full shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download CV
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}