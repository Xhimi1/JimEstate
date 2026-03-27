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
  { target: 6, suffix: '', label: 'Active Listings', desc: 'A curated selection of exceptional properties across the country\'s finest neighborhoods.' },
  { target: 10, suffix: '+', label: 'Years Experience', desc: 'Over a decade of expertise in luxury residential real estate transactions.' },
  { target: 50, suffix: '+', label: 'Happy Clients', desc: 'Families and individuals who found their perfect home through our agency.' },
]

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-neutral-50 p-8 text-center">
          <p className="text-5xl font-semibold text-neutral-900 md:text-6xl">
            <CountUp target={stat.target} suffix={stat.suffix} />
          </p>
          <p className="mt-3 mb-2 text-base font-semibold text-neutral-800">{stat.label}</p>
          <p className="text-sm leading-relaxed text-neutral-500">{stat.desc}</p>
        </div>
      ))}
    </div>
  )
}
