import Link from 'next/link'

const tabs = ['Sülüs', 'Nesih', 'Divan', 'Kûfi', "Rik'a", 'Celî']

// Service card icons matching Framer's icon set
const SulusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17l10 5 10-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12l10 5 10-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DivanIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const NesihIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 22H2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 10H7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2h-2.5z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const KufiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
  </svg>
)

const serviceCards = [
  { title: 'Sülüs',  icon: <SulusIcon />, desc: 'Majestätischste aller Stile. Kalın ve güçlü hatlarıyla camilerde ve büyük eserlerde kullanılan klasik hat stili.' },
  { title: 'Nesih',  icon: <NesihIcon />, desc: "Kur'an-ı Kerim'in yazımında en çok tercih edilen, ince ve okunaklı hat stilidir." },
  { title: 'Divan',  icon: <DivanIcon />, desc: 'Osmanlı saray yazışmalarında kullanılan, zarif ve akıcı bir hat stilidir.' },
  { title: 'Kûfi',   icon: <KufiIcon />,  desc: 'İslam hat sanatının en eski ve geometrik stili. Mimari eserlerde sıkça kullanılır.' },
]

const row1 = ['Slide Decks','Copywriting','Brand Graphics','Brand Migration','Package Design','Branding']
const row2 = ['Optimization','Brand Landing Pages','Social Media','Icons','Brand Visibility','Brand Integrations']

export default function Services() {
  return (
    <>
      {/* Main services section — left text, right image */}
      <section id="services" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Left */}
        <div style={{ padding: '100px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgb(13,13,13)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '24px', width: 'fit-content' }}>
            <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', flexShrink: 0 }} />
            Hat Hizmetleri
          </div>
          <h2 style={{ fontSize: 'clamp(56px, 6vw, 92px)', fontWeight: 400, color: '#fff', lineHeight: 1, marginBottom: '24px' }}>Hizmetler</h2>
          <p style={{ fontSize: '18px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', maxWidth: '400px', lineHeight: 1.5, marginBottom: '32px' }}>
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

        {/* Right — large image like Framer */}
        <div style={{ borderLeft: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', position: 'relative' }}>
          <img
            src="https://framerusercontent.com/images/LQHJURs4YM7cosrrm9moWWLwVd8.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', minHeight: '500px' }}
          />
        </div>

      </section>

      {/* Service cards grid — below main section */}
      <section style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '60px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', maxWidth: '100%' }}>
          {serviceCards.map(c => (
            <div key={c.title} style={{ padding: '30px', borderRadius: '20px', background: 'rgb(13,13,13)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ marginBottom: '16px' }}>{c.icon}</div>
              <h3 style={{ fontSize: '28px', fontWeight: 500, color: '#fff', letterSpacing: '-0.3px', marginBottom: '12px', lineHeight: 1 }}>{c.title}</h3>
              <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, letterSpacing: '-0.3px' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee row 1 */}
      <div style={{ overflow: 'hidden', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#000' }}>
        <div className="animate-marquee" style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
          {[...row1, ...row1, ...row1].map((p, i) => (
            <span key={i} style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '15px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.65)', background: 'rgb(13,13,13)', border: '1px solid rgba(255,255,255,0.08)' }}>{p}</span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reverse */}
      <div style={{ overflow: 'hidden', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#000' }}>
        <div className="animate-marquee-slow" style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
          {[...row2, ...row2, ...row2].map((p, i) => (
            <span key={i} style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '15px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.65)', background: 'rgb(13,13,13)', border: '1px solid rgba(255,255,255,0.08)' }}>{p}</span>
          ))}
        </div>
      </div>
    </>
  )
}
