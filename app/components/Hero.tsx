'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const logos = ['Portfolite', 'Opal', 'Dune', 'Oasis', 'Framer', 'Linear']

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => { if (videoRef.current) videoRef.current.playbackRate = 1 }, [])

  return (
    <section id="hero" style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', overflow:'hidden', background:'#000', paddingTop:'100px' }}>

      <video ref={videoRef} autoPlay muted loop playsInline preload="metadata"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:0.25, pointerEvents:'none', zIndex:0 }}>
        <source src="/calligraphy-bg.mp4" type="video/mp4" />
      </video>

      <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none', background:'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)' }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'220px', zIndex:1, pointerEvents:'none', background:'linear-gradient(to bottom, transparent 0%, #000 100%)' }} />

      <div style={{ position:'relative', zIndex:2, maxWidth:'820px', padding:'0 24px', display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'7px 16px', borderRadius:'100px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', color:'rgba(255,255,255,0.85)', fontSize:'13px', marginBottom:'32px' }}>
          <span style={{ width:'6px', height:'6px', background:'#fff', borderRadius:'50%', flexShrink:0 }} />
          Osmanlı Hat Sanatının İzinde
        </div>

        <h1 style={{ fontSize:'92px', fontWeight:400, color:'#fff', lineHeight:1, letterSpacing:'-2px', marginBottom:'24px' }}>
          Türk Hat Sanatı
        </h1>

        <p style={{ fontSize:'15px', color:'rgba(255,255,255,0.65)', maxWidth:'420px', marginBottom:'40px', lineHeight:1.5, letterSpacing:'-0.3px', fontWeight:400 }}>
          Osmanlı medeniyetinin en köklü sanatlarından biri olan hat sanatı, yüzyıllar boyunca nesiller aktarılmış ve İslam kültürünün ayrılmaz bir parçası hâline gelmiştir.
        </p>

        <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', justifyContent:'center' }}>
          <Link href="#services" style={{ padding:'13px 24px', borderRadius:'100px', background:'#fff', color:'#000', fontSize:'14px', fontWeight:500, textDecoration:'none' }}>
            Hat Sanatı Nedir?
          </Link>
          <Link href="#projects" style={{ padding:'13px 24px', borderRadius:'100px', background:'transparent', border:'1px solid rgba(255,255,255,0.25)', color:'#fff', fontSize:'14px', fontWeight:400, textDecoration:'none' }}>
            Eserleri Keşfet
          </Link>
        </div>
      </div>

      <div style={{ position:'relative', zIndex:2, width:'100%', marginTop:'64px', overflow:'hidden', borderTop:'1px solid rgba(255,255,255,0.08)', padding:'28px 0' }}>
        <div className="animate-marquee" style={{ display:'flex', gap:'64px', width:'max-content' }}>
          {[...logos,...logos].map((name,i) => (
            <span key={i} style={{ fontSize:'15px', fontWeight:500, color:'rgba(255,255,255,0.3)', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:'10px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
              </svg>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
