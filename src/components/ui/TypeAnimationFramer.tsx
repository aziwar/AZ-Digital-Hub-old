'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

interface TypeAnimationProps {
  sequence: string[]
  className?: string
  style?: React.CSSProperties
  wrapper?: keyof JSX.IntrinsicElements
  speed?: number
  deletionSpeed?: number
  cursor?: boolean
  omitDeletionAnimation?: boolean
  preRenderFirstString?: boolean
  // No repeat prop - removed to fix build error
}

/**
 * High-Performance TypeAnimation using Framer Motion
 * Zero additional dependencies - uses existing Framer Motion
 */
export default function TypeAnimation({
  sequence,
  className = '',
  style = {},
  wrapper = 'span',
  speed = 50,
  deletionSpeed = 30,
  cursor = true,
  omitDeletionAnimation = false,
  preRenderFirstString = false
}: TypeAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState(preRenderFirstString ? sequence[0] || '' : '')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  const typeSpeed = speed
  const deleteSpeed = deletionSpeed

  const handleTyping = useCallback(() => {
    const current = sequence[currentIndex]
    
    if (!current) return

    if (isWaiting) return

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < current.length) {
        setCurrentText(current.substring(0, currentText.length + 1))
      } else {
        // Finished typing, wait before deleting
        setIsWaiting(true)
        setTimeout(() => {
          setIsWaiting(false)
          if (!omitDeletionAnimation) {
            setIsDeleting(true)
          } else {
            // Skip deletion, move to next
            setCurrentIndex((prev) => (prev + 1) % sequence.length)
            setCurrentText('')
          }
        }, 1500) // Wait 1.5s before starting to delete
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(currentText.substring(0, currentText.length - 1))
      } else {
        // Finished deleting
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % sequence.length)
      }
    }
  }, [currentText, currentIndex, isDeleting, isWaiting, sequence, omitDeletionAnimation])

  useEffect(() => {
    if (sequence.length === 0) return

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timeout)
  }, [handleTyping, isDeleting, typeSpeed, deleteSpeed])

  const Component = wrapper

  return (
    <Component className={className} style={style}>
      <motion.span
        key={currentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {currentText}
      </motion.span>
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </Component>
  )
}

// Export alternative minimal version for better performance
export function FastTypeAnimation({ 
  sequence, 
  className = '', 
  style = {} 
}: { 
  sequence: string[]
  className?: string
  style?: React.CSSProperties
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % sequence.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [sequence])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className={className}
        // @ts-ignore - Framer Motion's style prop is compatible with React.CSSProperties
        style={style}
      >
        {sequence[index]}
      </motion.span>
    </AnimatePresence>
  )
}
