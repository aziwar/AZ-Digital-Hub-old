'use client';

import { useEffect, useRef } from 'react';

interface CursorEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function CursorEffect({ children, className = '' }: CursorEffectProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const cursor = cursorRef.current;
    
    if (!element || !cursor) return;

    let animationId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const animateCursor = () => {
      // Smooth interpolation for cursor following
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
      animationId = requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursor.style.transform = 'scale(1)';
      animateCursor();
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursor.style.transform = 'scale(0.5)';
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`relative ${className}`}>
      {children}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 h-5 w-5 rounded-full bg-blue-500/30 opacity-0 transition-all duration-300 ease-out"
        style={{
          mixBlendMode: 'multiply',
          transform: 'scale(0.5)',
        }}
      />
    </div>
  );
}
