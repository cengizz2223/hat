'use client'
import { useState } from 'react'

const IMG = 'https://framerusercontent.com/images/02xn9s33KqIg81miA4IiJTaHA.jpg'

function Card({ hov, idx, setHov, style }: {
  hov: number; idx: number; setHov: (n: number) => void; style?: React.CSSProperties
}) {
  const active = hov === idx
  return (
    <div
      onMouseEnter={() => setHov(idx)}
      onMouseLeave={() => setHov(-1)}
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#fff',
        ...style,
      }}
    >
      <img
        src={IMG} alt=""
        style={{
          width: '100%', height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          display: 'block',
          transition: 'transform 0.5s ease, filter 0.4s ease',
          transform: active ? 'scale(1.04)' : 'scale(1)',
          filter: active ? 'grayscale(0%)' : 'grayscale(100%)',
        }}
      />
    </div>
  )
}

export default function Projects() {
  const [hov, setHov] = useState(-1)

  // All 9 cards same base size
  // Center top: bigger, rises above, box-shadow
  const BASE = 220   // base card size px
  const BIG  = 280   // center-top card size
  const GAP  = 4
  const RISE = 30    // how much center-top rises above the grid

  // 3 equal columns
  const COL = `calc((100% - ${GAP * 2}px) / 3)`

  return (
    <section id="projects" style={{ padding: '80px 40px', background: '#000' }}>

      {/* Header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'40px', flexWrap:'wrap', gap:'24px' }}>
        <div>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'5px 12px', borderRadius:'100px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.6)', fontSize:'12px', marginBottom:'16px' }}>
            <span style={{ width:'5px', height:'5px', background:'rgba(255,255,255,0.5)', borderRadius:'50%' }} />
            Seçili Eserler
          </div>
          <h2 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:600, letterSpacing:'-1.5px', color:'#fff', margin:0 }}>Projeler</h2>
        </div>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.5)', maxWidth:'340px' }}>
          Her eser, yüzyıllık bir geleneğin bugünkü yansımasıdır.
        </p>
      </div>

      {/*
        Grid: 3 equal columns, 3 rows
        Center top card (index 1) rises above and is bigger
        All cards have white bg, contain image
      */}
      <div style={{ paddingTop: `${RISE}px` }}>
        {/* ROW 1 */}
        <div style={{ display:'grid', gridTemplateColumns:`1fr 1fr 1fr`, gap:`${GAP}px`, marginBottom:`${GAP}px`, alignItems:'flex-end' }}>
          {/* Left top */}
          <Card hov={hov} idx={0} setHov={setHov} style={{ height:`${BASE}px` }} />

          {/* CENTER TOP — bigger, rises above via negative marginTop */}
          <Card hov={hov} idx={1} setHov={setHov} style={{
            height:`${BIG}px`,
            marginTop: `-${RISE}px`,
            zIndex: 3,
            boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
            position: 'relative',
          }} />

          {/* Right top */}
          <Card hov={hov} idx={2} setHov={setHov} style={{ height:`${BASE}px` }} />
        </div>

        {/* ROW 2 */}
        <div style={{ display:'grid', gridTemplateColumns:`1fr 1fr 1fr`, gap:`${GAP}px`, marginBottom:`${GAP}px` }}>
          <Card hov={hov} idx={3} setHov={setHov} style={{ height:`${BASE}px` }} />
          <Card hov={hov} idx={4} setHov={setHov} style={{ height:`${BASE}px` }} />
          <Card hov={hov} idx={5} setHov={setHov} style={{ height:`${BASE}px` }} />
        </div>

        {/* ROW 3 */}
        <div style={{ display:'grid', gridTemplateColumns:`1fr 1fr 1fr`, gap:`${GAP}px` }}>
          <Card hov={hov} idx={6} setHov={setHov} style={{ height:`${BASE}px` }} />
          <Card hov={hov} idx={7} setHov={setHov} style={{ height:`${BASE}px` }} />
          <Card hov={hov} idx={8} setHov={setHov} style={{ height:`${BASE}px` }} />
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display:'flex', justifyContent:'center', gap:'12px', marginTop:'48px' }}>
        <a href="#" style={{ padding:'13px 24px', borderRadius:'100px', background:'transparent', border:'1px solid rgba(255,255,255,0.25)', color:'#fff', fontSize:'14px', textDecoration:'none' }}>
          Tüm Projeler
        </a>
        <a href="mailto:hello@framebase.design" style={{ padding:'13px 24px', borderRadius:'100px', background:'#fff', color:'#000', fontSize:'14px', fontWeight:500, textDecoration:'none' }}>
          Ücretsiz Randevu
        </a>
      </div>
    </section>
  )
}
