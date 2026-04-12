'use client'
import { useState } from 'react'

const IMGS = [
  'https://framerusercontent.com/images/02xn9s33KqIg81miA4IiJTaHA.jpg',
  'https://framerusercontent.com/images/uS5GMNBhuxpNDGshJBsPKviVes.jpg',
  'https://framerusercontent.com/images/LQHJURs4YM7cosrrm9moWWLwVd8.jpg',
]

// Left col: 0,1,2 | Center col: 3,4,5 | Right col: 6,7,8
const CARD_IMGS = [IMGS[0], IMGS[1], IMGS[0], IMGS[2], IMGS[0], IMGS[1], IMGS[0], IMGS[1], IMGS[2]]

function Card({ hov, idx, setHov, showLabel, style }: {
  hov: number; idx: number; setHov: (n: number) => void; showLabel?: boolean; style?: React.CSSProperties
}) {
  const active = hov === idx
  return (
    <div
      onMouseEnter={() => setHov(idx)}
      onMouseLeave={() => setHov(-1)}
      style={{ borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', background: '#fff', position: 'relative', ...style }}
    >
      <img
        src={CARD_IMGS[idx]} alt=""
        style={{
          width: '100%', height: '100%',
          objectFit: 'contain', objectPosition: 'center', display: 'block',
          transition: 'transform 0.5s ease, filter 0.4s ease',
          transform: active ? 'scale(1.04)' : 'scale(1)',
          filter: active ? 'grayscale(0%)' : 'grayscale(100%)',
        }}
      />
      {showLabel && (
        <a href="#" style={{
          position: 'absolute', bottom: '12px', right: '12px',
          padding: '6px 14px', borderRadius: '100px',
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
          color: '#fff', fontSize: '15px', textDecoration: 'none',
          opacity: active ? 1 : 0, transition: 'opacity 0.3s ease',
        }}>
          View Casestudy
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const [hov, setHov] = useState(-1)

  const BASE_H = 220
  const BIG_H  = 264
  const RISE   = 66
  const GAP    = 10

  return (
    <section id="projects" style={{ padding: '100px 80px', background: '#000' }}>

      {/* 3-column layout — entire center column elevated */}
      <div style={{ display: 'flex', gap: `${GAP}px`, alignItems: 'flex-start', paddingTop: `${RISE}px` }}>

        {/* LEFT COLUMN */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: `${GAP}px` }}>
          <Card hov={hov} idx={0} setHov={setHov} showLabel style={{ height: `${BASE_H}px` }} />
          <Card hov={hov} idx={1} setHov={setHov} showLabel style={{ height: `${BASE_H}px` }} />
          <Card hov={hov} idx={2} setHov={setHov} showLabel style={{ height: `${BASE_H}px` }} />
        </div>

        {/* CENTER COLUMN — wider, taller, elevated */}
        <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', gap: `${GAP}px`, marginTop: `-${RISE}px`, position: 'relative', zIndex: 3 }}>
          {/* Top center card: no label */}
          <Card hov={hov} idx={3} setHov={setHov} style={{ height: `${BIG_H}px`, boxShadow: '0 24px 60px rgba(0,0,0,0.7)' }} />
          <Card hov={hov} idx={4} setHov={setHov} showLabel style={{ height: `${BIG_H}px`, boxShadow: '0 24px 60px rgba(0,0,0,0.7)' }} />
          <Card hov={hov} idx={5} setHov={setHov} showLabel style={{ height: `${BIG_H}px`, boxShadow: '0 24px 60px rgba(0,0,0,0.7)' }} />
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: `${GAP}px` }}>
          <Card hov={hov} idx={6} setHov={setHov} showLabel style={{ height: `${BASE_H}px` }} />
          <Card hov={hov} idx={7} setHov={setHov} showLabel style={{ height: `${BASE_H}px` }} />
          <Card hov={hov} idx={8} setHov={setHov} showLabel style={{ height: `${BASE_H}px` }} />
        </div>

      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '48px' }}>
        <a href="#" style={{ padding: '13px 24px', borderRadius: '100px', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '18px', fontWeight: 400, textDecoration: 'none' }}>
          All Projects
        </a>
        <a href="mailto:hello@framebase.design" style={{ padding: '13px 24px', borderRadius: '100px', background: '#fff', color: '#000', fontSize: '18px', fontWeight: 400, textDecoration: 'none' }}>
          Book a Free Call
        </a>
      </div>
    </section>
  )
}
