'use client'

import { useState, useEffect, useRef } from 'react'

interface NativeTypeAnimationProps {
  sequence: string[]
  className?: string
  style?: React.CSSProperties
  wrapper?: keyof JSX.IntrinsicElements
  speed?: number
  deletionSpeed?: number
  cursor?: boolean
  repeat?: number | typeof Infinity
  omitDeletionAnimation?: boolean
  preRenderFirstString?: boolean
}

/**
 * Ultra-lightweight TypeAnimation using native Web APIs
 * Zero dependencies - pure React + native browser APIs
 * Optimized for performance and bundle size
 */
export default function NativeTypeAnimation({
  sequence,
  className = '',
  style = {},
  wrapper = 'span',
  speed = 50,
  deletionSpeed = 30,
  cursor = true,
  repeat = Infinity,
  omitDeletionAnimation = false,
  preRenderFirstString = false
}: NativeTypeAnimationProps) {
  const [displayText, setDisplayText] = useState(preRenderFirstString ? sequence[0] || '' : '')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [loopCount, setLoopCount] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (sequence.length === 0) return

    // Check if we've reached the repeat limit
    if (repeat !== Infinity && loopCount >= repeat) {
      return
    }

    const currentString = sequence[currentIndex] || ''

    const typeNextChar = () => {
      if (isWaiting) return

      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.substring(0, displayText.length + 1))
          timeoutRef.current = setTimeout(typeNextChar, speed)
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true)
          timeoutRef.current = setTimeout(() => {
            setIsWaiting(false)
            if (!omitDeletionAnimation) {
              setIsDeleting(true)
            } else {
              // Skip to next string
              const nextIndex = (currentIndex + 1) % sequence.length
              setCurrentIndex(nextIndex)
              if (nextIndex === 0) {
                setLoopCount(prev => prev + 1)
              }
              setDisplayText('')
            }
            typeNextChar()
          }, 1500)
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1))
          timeoutRef.current = setTimeout(typeNextChar, deletionSpeed)
        } else {
          // Finished deleting, move to next
          setIsDeleting(false)
          const nextIndex = (currentIndex + 1) % sequence.length
          setCurrentIndex(nextIndex)
          if (nextIndex === 0) {
            setLoopCount(prev => prev + 1)
          }
          timeoutRef.current = setTimeout(typeNextChar, 100)
        }
      }
    }

    timeoutRef.current = setTimeout(typeNextChar, 100)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [sequence, currentIndex, displayText, isDeleting, isWaiting, speed, deletionSpeed, omitDeletionAnimation, repeat, loopCount])

  const Component = wrapper

  return (
    <Component className={className} style={style}>
      {displayText}
      {cursor && (
        <span 
          className="inline-block ml-1 animate-pulse"
          style={{
            animation: 'blink 1s infinite',
          }}
        >
          |
        </span>
      )}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </Component>
  )
}

// Minimal version for maximum performance
export function MinimalTypeAnimation({ 
  sequence, 
  className = '',
  interval = 3000 
}: { 
  sequence: string[]
  className?: string
  interval?: number
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % sequence.length)
    }, interval)
    
    return () => clearInterval(timer)
  }, [sequence.length, interval])

  return <span className={className}>{sequence[index]}</span>
}
