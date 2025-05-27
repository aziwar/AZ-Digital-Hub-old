'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa'
import dynamic from 'next/dynamic'

// Dynamic imports for performance
const TypeAnimation = dynamic(() => import('@/components/ui/TypeAnimationFramer'), {
  ssr: false,
  loading: () => <div className="h-8" />
})

const FloatingSkills = dynamic(() => import('@/components/ui/FloatingSkills'), {
  ssr: false
})

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Parallax transforms
  const y = useTransform(scrollY, [0, 1000], [0, -500])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  
  // Mouse parallax
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x * 40)
        mouseY.set(y * 40)
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const roles = [
    "Digital Marketing Manager",
    "E-commerce Strategist", 
    "ROI-Driven Professional",
    "IT Consultant",
    "Business Growth Expert"
  ]

  const stats = [
    { number: "3+", label: "Years at Smart Technology", emphasis: "Digital Solutions" },
    { number: "8+", label: "Years Experience", emphasis: "IT & Marketing" },
    { number: "50+", label: "Successful Campaigns", emphasis: "ROI Focused" },
    { number: "15+", label: "Industry Certifications", emphasis: "Continuous Learning" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  }

  return (
    <motion.div 
      ref={containerRef}
      style={{ y, opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 animate-gradient-x" />
        </div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Skills Background */}
      <FloatingSkills />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div 
              className="relative group"
              style={{ x: mouseXSpring, y: mouseYSpring }}
            >
              {/* Animated Ring */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-40 h-40 bg-slate-900 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-800/50 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20" />
                <motion.div
                  className="text-5xl font-bold bg-gradient-to-br from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  AZ
                </motion.div>
              </motion.div>
              
              {/* Status Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-900"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                Ahmed
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Ziwar
              </span>
            </h1>
            
            {/* Dynamic Role */}
            <div className="h-10 flex items-center justify-center">
              <TypeAnimation
                sequence={roles}
                className="text-2xl md:text-3xl font-semibold text-slate-300"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming businesses through data-driven digital strategies and cutting-edge technology solutions. 
            Currently leading digital transformation at{" "}
            <span className="text-cyan-400 font-semibold">Smart Technology Kuwait</span>, 
            specializing in ROI-focused campaigns and innovative e-commerce solutions.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-300">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  <div className="text-xs text-purple-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.emphasis}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 flex-wrap"
          >
            {[
              { icon: FaLinkedin, href: "https://linkedin.com/in/ahmedziwar", label: "LinkedIn", color: "from-blue-600 to-blue-500" },
              { icon: FaEnvelope, href: "mailto:ahmedziwar@gmail.com", label: "Email", color: "from-red-600 to-pink-500" },
              { icon: FaPhone, href: "tel:+96560672773", label: "Phone", color: "from-green-600 to-emerald-500" },
              { icon: FaGithub, href: "https://github.com/ahmedziwar", label: "GitHub", color: "from-gray-600 to-gray-500" }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="relative bg-slate-900/80 backdrop-blur-xl p-3 rounded-full border border-slate-800/50 group-hover:border-transparent transition-all duration-300">
                  <contact.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {contact.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                View My Work
                <SparklesIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 text-white font-semibold hover:border-purple-500/50 transition-all duration-300"
            >
              <span className="relative flex items-center gap-2">
                <FaEnvelope className="w-4 h-4" />
                Let's Connect
              </span>
            </motion.a>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mt-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-xl rounded-full border border-slate-800/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-400">Available for projects in</span>
              <span className="text-sm font-semibold text-cyan-400">Kuwait City</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span className="text-xs font-medium">Discover More</span>
            <ArrowDownIcon className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroSection
