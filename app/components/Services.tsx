import Link from 'next/link'

const tabs = ['Sülüs', 'Nesih', 'Divan', 'Kûfi', "Rik'a", 'Celî']

const serviceCards = [
  { title: 'Sülüs',  desc: 'Majestätischste aller Stile. Kalın ve güçlü hatlarıyla camilerde ve büyük eserlerde kullanılan klasik hat stili.' },
  { title: 'Divan',  desc: 'Osmanlı saray yazışmalarında kullanılan, zarif ve akıcı bir hat stilidir.' },
  { title: 'Nesih',  desc: "Kur'an-ı Kerim'in yazımında en çok tercih edilen, ince ve okunaklı hat stilidir." },
  { title: 'Kûfi',   desc: 'İslam hat sanatının en eski ve geometrik stili. Mimari eserlerde sıkça kullanılır.' },
]

const row1 = ['Slide Decks','Copywriting','Brand Graphics','Brand Migration','Package Design','Branding']
const row2 = ['Optimization','Brand Landing Pages','Social Media','Icons','Brand Visibility','Brand Integrations']

export default function Services() {
  return (
    <>
      {/* Main services section */}
      <section id="services" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Left */}
        <div style={{ padding: '100px 80px' }}>
          <p style={{ fontSize: '15px', fontWeight: 400, color: '#fff', letterSpacing: '-0.3px', marginBottom: '16px' }}>Hat Hizmetleri</p>
          <h2 style={{ fontSize: '92px', fontWeight: 400, color: '#fff', lineHeight: 1, marginBottom: '24px' }}>Hizmetler</h2>
          <p style={{ fontSize: '24px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', maxWidth: '400px', lineHeight: 1.4, marginBottom: '40px' }}>
            Osmanlı geleneğinden ilham alarak, her eser özel olarak sizin için hazırlanır.
          </p>

          {/* Style tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
            {tabs.map(t => (
              <span key={t} style={{ padding: '7px 14px', borderRadius: '100px', fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="mailto:hello@framebase.design" style={{ padding: '13px 24px', borderRadius: '100px', background: '#fff', color: '#000', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>İletişime Geç</Link>
            <Link href="#projects" style={{ padding: '13px 24px', borderRadius: '100px', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>Eserleri Gör</Link>
          </div>
        </div>

        {/* Right — service cards grid */}
        <div style={{ padding: '100px 80px', borderLeft: '1px solid rgba(255,255,255,0.07)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignContent: 'start' }}>
          {serviceCards.map(c => (
            <div key={c.title} style={{ padding: '28px', borderRadius: '14px', background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ fontSize: '36px', fontWeight: 500, color: '#fff', letterSpacing: '-0.36px', marginBottom: '12px', lineHeight: 1 }}>{c.title}</h3>
              <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, letterSpacing: '-0.3px' }}>{c.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Marquee row 1 */}
      <div style={{ overflow: 'hidden', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#000' }}>
        <div className="animate-marquee" style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
          {[...row1, ...row1, ...row1].map((p, i) => (
            <span key={i} style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '15px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.65)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>{p}</span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reverse */}
      <div style={{ overflow: 'hidden', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#000' }}>
        <div className="animate-marquee-slow" style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
          {[...row2, ...row2, ...row2].map((p, i) => (
            <span key={i} style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '15px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.65)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>{p}</span>
          ))}
        </div>
      </div>
    </>
  )
}
