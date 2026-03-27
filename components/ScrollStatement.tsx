'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATEMENT = 'Your next chapter begins with finding a home that truly feels like yours.'

export default function ScrollStatement() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll<HTMLSpanElement>('.word')
    if (!words || words.length === 0) return

    words.forEach((word, i) => {
      gsap.fromTo(
        word,
        { color: '#d4d4d4' },
        {
          color: '#171717',
          scrollTrigger: {
            trigger: word,
            start: 'top 85%',
            end: 'top 55%',
            scrub: true,
          },
          ease: 'none',
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const words = STATEMENT.split(' ')

  return (
    <div ref={containerRef} className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-4xl leading-tight md:text-5xl lg:text-6xl" style={{ fontWeight: 350 }}>
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em]" style={{ color: '#d4d4d4' }}>
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
