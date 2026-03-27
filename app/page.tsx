'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { listings } from '@/data/listings'
import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link'

const reveal = {
  hidden: { opacity: 0, y: 60, clipPath: 'inset(20% 0 0 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

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

export default function HomePage() {
  const featuredListings = listings.filter((l) => l.featured)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handleScroll = () => {
      el.style.transform = `scale(1.05) translateY(${window.scrollY * 0.2}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 scale-105"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=75&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex h-full items-end px-8 pb-16 md:px-14 md:pb-20">
          <h1 className="max-w-6xl text-4xl leading-tight text-white md:text-6xl lg:text-7xl" style={{ fontWeight: 350 }}>
            Exceptional homes in the world's finest neighborhoods
          </h1>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <motion.section
        className="border-b border-neutral-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl grid grid-cols-3 divide-x divide-neutral-100">
          {[
            { target: 6, suffix: '', label: 'Active Listings' },
            { target: 10, suffix: '+', label: 'Years Experience' },
            { target: 50, suffix: '+', label: 'Happy Clients' },
          ].map((stat) => (
            <motion.div key={stat.label} variants={reveal} className="py-10 text-center">
              <p className="text-4xl font-semibold text-neutral-900 md:text-5xl">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-sm capitalize tracking-widest text-neutral-400 md:text-base md:text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Featured Listings ── */}
      <motion.section
        className="px-6 py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={reveal} className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-medium text-neutral-400">
                Curated Selection
              </p>
              <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl" style={{ fontWeight: 400 }}>
                Featured Properties
              </h2>
            </div>
            <Link
              href="/listings"
              className="hidden md:block text-sm font-medium px-5 py-2.5 rounded bg-neutral-900 text-white hover:bg-neutral-700 transition-colors duration-200"
            >
              View all →
            </Link>
          </motion.div>

          <div className="mb-8 md:hidden">
            <Link
              href="/listings"
              className="inline-block text-sm font-medium px-5 py-2.5 rounded bg-neutral-900 text-white hover:bg-neutral-700 transition-colors duration-200"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing) => (
              <motion.div key={listing.id} variants={reveal}>
                <PropertyCard listing={listing} />
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* ── Gallery ── */}
      <motion.section
        className="px-6 py-24 md:py-32 bg-neutral-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={reveal} className="mb-12">
            <p className="mb-3 text-xs font-medium text-neutral-400">
              Our Portfolio
            </p>
            <h2 style={{ fontWeight: 400 }}>
              <span className="block text-3xl leading-tight text-neutral-900 md:text-4xl">A Glimpse</span>
              <span className="block text-3xl leading-tight text-neutral-400 md:text-4xl">Into Luxury</span>
              <span className="block text-3xl leading-tight text-neutral-300 md:text-4xl">Living.</span>
            </h2>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {/* Large left image */}
            <motion.div variants={reveal} className="col-span-2 row-span-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[240px] overflow-hidden rounded-md bg-neutral-200">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=75&auto=format" alt="Gallery 1" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
            {/* Top right */}
            <motion.div variants={reveal} className="col-span-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-200">
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=75&auto=format" alt="Gallery 2" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
            <motion.div variants={reveal} className="col-span-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-200">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=75&auto=format" alt="Gallery 3" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
            {/* Bottom right */}
            <motion.div variants={reveal} className="col-span-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-200">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75&auto=format" alt="Gallery 4" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
            <motion.div variants={reveal} className="col-span-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-200">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=75&auto=format" alt="Gallery 5" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Full-bleed Banner ── */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=75&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.p variants={reveal} className="mb-4 text-xs font-medium text-white/50">
            Ready to find your home?
          </motion.p>
          <motion.h2 variants={reveal} className="mb-8 text-3xl font-medium text-white md:text-4xl" style={{ fontWeight: 350 }}>
            Let us guide you home.
          </motion.h2>
          <motion.div variants={reveal}>
            <Link
              href="/listings"
              className="inline-block rounded border border-white px-8 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-neutral-900 transition-colors"
            >
              Explore Properties
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
