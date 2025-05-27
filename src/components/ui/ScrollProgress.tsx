'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 background-animate"
      style={{ scaleX }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 blur-sm" />
    </motion.div>
  )
}

export default ScrollProgress
