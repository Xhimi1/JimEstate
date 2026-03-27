'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/listings', label: 'Buy' },
  { href: '/about', label: 'About' },
]

function Logo({ white }: { white: boolean }) {
  const stroke = white ? '#ffffff' : '#171717'
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {/* House + Key SVG logo */}
      <svg width="36" height="30" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'stroke 0.3s' }}>
        {/* Roof */}
        <polyline points="10,52 60,8 110,52" stroke={stroke} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        {/* Left wall down to key shaft */}
        <line x1="10" y1="52" x2="10" y2="80" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
        {/* Key shaft (bottom) */}
        <line x1="10" y1="80" x2="62" y2="80" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
        {/* Key teeth */}
        <line x1="28" y1="80" x2="28" y2="70" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
        <line x1="44" y1="80" x2="44" y2="70" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
        {/* Right wall */}
        <line x1="110" y1="52" x2="110" y2="62" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
        {/* Key bow outer circle */}
        <circle cx="88" cy="76" r="18" stroke={stroke} strokeWidth="7" fill="none" />
        {/* Key bow inner hole */}
        <circle cx="88" cy="76" r="7" stroke={stroke} strokeWidth="5" fill="none" />
      </svg>
      <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: stroke, transition: 'color 0.3s' }}>
        JimsEstate
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/about' || /^\/listings\/.+/.test(pathname)

  useEffect(() => {
    setScrolled(window.scrollY > 60)
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: transparent ? 'transparent' : '#ffffff',
        borderBottom: transparent ? '1px solid rgba(255,255,255,0.12)' : '1px solid #f5f5f5',
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">

        {/* Logo — left */}
        <div className="flex-1">
          <Logo white={transparent} />
        </div>

        {/* Links — center */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm transition-colors duration-300"
              style={{
                fontWeight: 400,
                color: transparent ? 'rgba(255,255,255,0.75)' : '#404040',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = transparent ? '#ffffff' : '#171717' }}
              onMouseLeave={e => { e.currentTarget.style.color = transparent ? 'rgba(255,255,255,0.75)' : '#404040' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Reserve CTA — right */}
        <div className="flex-1 hidden md:flex justify-end">
          <Link
            href="/listings"
            className="text-sm font-medium px-5 py-2.5 rounded transition-all duration-200"
            style={{
              backgroundColor: transparent ? '#ffffff' : '#171717',
              color: transparent ? '#171717' : '#ffffff',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = transparent ? 'rgba(255,255,255,0.85)' : '#404040'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = transparent ? '#ffffff' : '#171717'
            }}
          >
            Reserve
          </Link>
        </div>

        {/* Reserve + Hamburger (mobile) */}
        <div className="flex items-center gap-3 md:hidden ml-auto">
          {!mobileOpen && (
            <Link
              href="/listings"
              className="text-sm font-medium px-4 py-2 rounded transition-all duration-200"
              style={{
                backgroundColor: transparent ? '#ffffff' : '#171717',
                color: transparent ? '#171717' : '#ffffff',
              }}
            >
              Reserve
            </Link>
          )}
          <button
            className="flex items-center justify-center"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="h-5 w-5" style={{ color: transparent ? '#fff' : '#171717' }} />
              : <Menu className="h-5 w-5" style={{ color: transparent ? '#fff' : '#171717' }} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 bg-white md:hidden overflow-y-auto">
          <nav className="flex flex-col px-6 py-4 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-neutral-100 py-4 text-sm text-neutral-500"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/listings"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded bg-neutral-900 py-3 text-center text-sm font-medium text-white"
            >
              Reserve
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
