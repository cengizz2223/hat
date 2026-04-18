'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import SmokeCanvas from './SmokeCanvas'

export default function CtaFooter() {
  return (
    <>
      <section id="contact" style={{ position:'relative', overflow:'hidden', textAlign:'center', padding:'160px 24px', background:'#000', borderTop:'1px solid rgba(255,255,255,0.07)' }}>
        {/* Smoke canvas — same as hero */}
        <SmokeCanvas />
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'160px', zIndex:1, pointerEvents:'none', background:'linear-gradient(to bottom, #000, transparent)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'160px', zIndex:1, pointerEvents:'none', background:'linear-gradient(to top, #000, transparent)' }} />

        <div style={{ position:'relative', zIndex:2, maxWidth:'680px', margin:'0 auto', display:'flex', flexDirection:'column', alignItems:'center' }}>
          {/* Badge */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'7px 16px', borderRadius:'100px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.7)', fontSize:'14px', marginBottom:'32px' }}>
            <span style={{ width:'6px', height:'6px', background:'#fff', borderRadius:'50%' }} />
            Hat Eserleri Satışta
          </div>
          <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:400, color:'#fff', letterSpacing:'-1.5px', lineHeight:1.15, marginBottom:'32px' }}>
            Hat sanatıyla ilgileniyor musunuz? Güzelliği evinize taşıyın!
          </h2>
          <Link href="mailto:hello@framebase.design" style={{ padding:'13px 28px', borderRadius:'100px', background:'transparent', border:'1px solid rgba(255,255,255,0.3)', color:'#fff', fontSize:'15px', textDecoration:'none', marginBottom:'28px' }}>
            Bizimle İletişime Geçin
          </Link>
          {/* Social icons */}
          <div style={{ display:'flex', alignItems:'center', gap:'20px' }}>
            {[['Bē','https://behance.net'],['𝕏','#'],['⊛','https://dribbble.com']].map(([l,h],i,arr) => (
              <span key={l} style={{ display:'flex', alignItems:'center', gap:'20px' }}>
                <a href={h} target="_blank" rel="noreferrer" style={{ fontSize:'14px', fontWeight:500, color:'rgba(255,255,255,0.5)', textDecoration:'none' }}>{l}</a>
                {i < arr.length-1 && <span style={{ color:'rgba(255,255,255,0.15)', fontSize:'12px' }}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </section>
      <footer style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:'12px', padding:'24px 40px', background:'#000', borderTop:'1px solid rgba(255,255,255,0.07)', fontSize:'13px', color:'rgba(255,255,255,0.35)' }}>
        <a href="mailto:hello@framebase.design" style={{ color:'rgba(255,255,255,0.35)', textDecoration:'none' }}>hello@framebase.design</a>
        <span>All rights reserved ©2025</span>
      </footer>
    </>
  )
}
