'use client'
import Link from 'next/link'
import SmokeCanvas from './SmokeCanvas'

const logos = [
  { name: 'Portfolite', src: 'https://framerusercontent.com/images/6tgxXoNxl1P8llnNFQNUsphYFbU.svg' },
  { name: 'Opal',       src: 'https://framerusercontent.com/images/rsdfnsfNV2eZmyqemfUp9OfTg.png' },
  { name: 'Dune',       src: 'https://framerusercontent.com/images/Yn3MOOL9rTXhK9U8MLvSnEoNP8.svg' },
  { name: 'Oasis',      src: 'https://framerusercontent.com/images/1ph1389RD4RtUDEfqVhWbujyF7s.svg' },
  { name: 'Linear',     src: 'https://framerusercontent.com/images/hhTRf8RciR9bakkAgIckAkEiQM.svg' },
  { name: 'Framer',     src: 'https://framerusercontent.com/images/16y9DeYTedWme4gJdHcPClUSqA.png' },
]

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', background: '#000', padding: '160px 40px 60px' }}>

      {/* Smoke canvas animation — matches Framer site */}
      <SmokeCanvas />

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to bottom, transparent, #000)', pointerEvents: 'none', zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 16px', borderRadius: '100px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: '40px' }}>
          <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', flexShrink: 0 }} />
          Osmanlı Hat Sanatının İzinde
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '92px', fontWeight: 400, color: '#fff', lineHeight: 1, letterSpacing: '-2px', marginBottom: '24px', fontFamily: "'Satoshi', sans-serif" }}>
          Türk Hat Sanatı
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', maxWidth: '420px', marginBottom: '40px', lineHeight: 1.5, letterSpacing: '-0.3px' }}>
          Osmanlı medeniyetinin en köklü sanatlarından biri olan hat sanatı, yüzyıllar boyunca nesiller aktarılmış ve İslam kültürünün ayrılmaz bir parçası hâline gelmiştir.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="#services" style={{ padding: '13px 24px', borderRadius: '100px', background: '#fff', color: '#000', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>
            Hat Sanatı Nedir?
          </Link>
          <Link href="#projects" style={{ padding: '13px 24px', borderRadius: '100px', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>
            Eserleri Keşfet
          </Link>
        </div>
      </div>

      {/* Logo ticker */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', marginTop: '80px', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px' }}>
        <div className="animate-marquee" style={{ display: 'flex', gap: '48px', width: 'max-content', alignItems: 'center' }}>
          {[...logos, ...logos, ...logos].map((l, i) => (
            <img key={i} src={l.src} alt={l.name} style={{ height: '18px', opacity: 0.4, filter: 'brightness(0) invert(1)', objectFit: 'contain' }} />
          ))}
        </div>
      </div>

    </section>
  )
}
