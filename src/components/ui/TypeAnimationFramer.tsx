'use client'

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
}

/**
 * High-Performance TypeAnimation using CSS animations
 * React 19 compatible - no external dependencies
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
  const [textKey, setTextKey] = useState(0)

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
            setTextKey(prev => prev + 1)
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
        setTextKey(prev => prev + 1)
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
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .text-fade-in {
          animation: fadeIn 0.1s ease-in;
        }
        
        .cursor-blink {
          animation: cursorBlink 0.8s infinite;
        }
      `}</style>
      
      <Component className={className} style={style}>
        <span key={textKey} className="text-fade-in">
          {currentText}
        </span>
        {cursor && (
          <span className="inline-block ml-1 cursor-blink">
            |
          </span>
        )}
      </Component>
    </>
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
    <>
      <style jsx>{`
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0px); 
          }
        }
        
        @keyframes slideOutUp {
          from { 
            opacity: 1; 
            transform: translateY(0px); 
          }
          to { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
        }
        
        .text-transition {
          animation: slideInUp 0.5s ease-out;
        }
      `}</style>
      
      <span
        key={index}
        className={`text-transition ${className}`}
        style={style}
      >
        {sequence[index]}
      </span>
    </>
  )
}
