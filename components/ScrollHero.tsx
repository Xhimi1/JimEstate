'use client'

import { useEffect, useRef } from 'react'

interface ScrollHeroProps {
  image: string
  alt?: string
  height?: string
  initialOpacity?: number
  children?: React.ReactNode
}

export default function ScrollHero({
  image,
  alt = '',
  height = 'h-[60vh] min-h-[420px]',
  initialOpacity = 0.6,
  children,
}: ScrollHeroProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.45), 1)
      const opacity = initialOpacity + progress * 0.45
      overlay.style.backgroundColor = `rgba(0,0,0,${opacity})`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [initialOpacity])

  return (
    <section className={`relative ${height} overflow-hidden`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${initialOpacity})` }}
      />
      {children}
    </section>
  )
}