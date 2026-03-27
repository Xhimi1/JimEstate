'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { target: 6, suffix: '', label: 'Active Listings' },
  { target: 10, suffix: '+', label: 'Years Experience' },
  { target: 50, suffix: '+', label: 'Happy Clients' },
]

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="mb-2 text-6xl font-semibold text-neutral-900 md:text-7xl">
            <CountUp target={stat.target} suffix={stat.suffix} />
          </p>
          <p className="text-base font-medium text-neutral-400 md:text-lg">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
