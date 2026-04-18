'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '#services',     label: 'Services' },
  { href: '#projects',     label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 40px',
      background: scrolled ? 'rgba(0,0,0,0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>

      {/* Nav links */}
      <nav style={{ display:'flex', gap:'32px', alignItems:'center' }}>
        {links.map(l => (
          <Link key={l.href} href={l.href}
            style={{ fontSize:'15px', fontWeight:400, color:'rgba(255,255,255,0.65)', textDecoration:'none', transition:'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
          >{l.label}</Link>
        ))}
      </nav>
    </header>
  )
}
