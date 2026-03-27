'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PART1 = ['Your', 'next', 'chapter', 'begins']
const PART2 = ['with', 'finding', 'a', 'home', 'that', 'truly', 'feels', 'like', 'yours.']

export default function ScrollStatement() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const darkWords = containerRef.current?.querySelectorAll<HTMLSpanElement>('.word-dark')
    const lightWords = containerRef.current?.querySelectorAll<HTMLSpanElement>('.word-light')
    if (!darkWords || !lightWords) return

    darkWords.forEach((word) => {
      gsap.fromTo(word, { color: '#d4d4d4' }, {
        color: '#000000',
        scrollTrigger: { trigger: word, start: 'top 85%', end: 'top 55%', scrub: true },
        ease: 'none',
      })
    })

    lightWords.forEach((word) => {
      gsap.fromTo(word, { color: '#d4d4d4' }, {
        color: '#6B7280',
        scrollTrigger: { trigger: word, start: 'top 85%', end: 'top 55%', scrub: true },
        ease: 'none',
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="py-32 md:py-40">
      <p className="text-3xl leading-snug md:text-5xl lg:text-6xl" style={{ fontWeight: 350, textWrap: 'balance' } as React.CSSProperties}>
        <span className="block mb-1">
          {PART1.map((word, i) => (
            <span key={i} className="word-dark inline-block mr-[0.3em]" style={{ color: '#d4d4d4' }}>
              {word}
            </span>
          ))}
        </span>
        <span className="block">
          {PART2.map((word, i) => (
            <span key={i} className="word-light inline-block mr-[0.3em]" style={{ color: '#d4d4d4' }}>
              {word}
            </span>
          ))}
        </span>
      </p>
    </div>
  )
}
