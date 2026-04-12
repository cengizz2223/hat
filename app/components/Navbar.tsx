'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services',      label: 'Hizmetler' },
    { href: '#projects',      label: 'Projeler' },
    { href: '#testimonials',  label: 'Görüşler' },
    { href: '#contact',       label: 'İletişim' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '18px 40px',
      background: scrolled ? 'rgba(0,0,0,0.65)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <ul style={{ display:'flex', gap:'32px', listStyle:'none', alignItems:'center' }}>
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href}
              style={{ fontSize:'14px', color:'rgba(255,255,255,0.75)', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
            >{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
