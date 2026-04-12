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
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px',
      background: scrolled ? 'rgba(0,0,0,0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>

      {/* Logo */}
      <Link href="/" style={{ display:'flex', alignItems:'center', gap:'8px', textDecoration:'none' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" rx="1.5" fill="white"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5" fill="white"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5" fill="white"/>
          <rect x="14" y="14" width="7" height="7" rx="1.5" fill="white"/>
        </svg>
        <span style={{ fontSize:'15px', fontWeight:500, color:'#fff' }}>Portfolite</span>
      </Link>

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

      {/* CTA */}
      <Link href="#contact"
        style={{ display:'flex', alignItems:'center', gap:'6px', padding:'9px 18px', borderRadius:'100px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', color:'rgba(255,255,255,0.85)', fontSize:'15px', fontWeight:400, textDecoration:'none', transition:'background 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
      >
        <span style={{ fontSize:'13px' }}>✦</span>
        Get Template
      </Link>
    </header>
  )
}
