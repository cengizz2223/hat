// Lucide-style SVG icons matching Framer's icon set
const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PenToolIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 2l7.586 7.586" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="11" r="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
  </svg>
)

const FlameIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const steps = [
  {
    num: '1',
    icon: <LightbulbIcon />,
    title: 'Kalem ve Mürekkep Seçimi',
    desc: 'Her hat eserinin temeli, doğru kalem ve mürekkep seçimiyle başlar. Kamış kalem ve is mürekkebi, geleneksel hat sanatının vazgeçilmez unsurlarıdır.',
  },
  {
    num: '2',
    icon: <PenToolIcon />,
    title: 'Kompozisyon ve Taslak',
    desc: 'Yazar, yazılacak metni ve kompozisyonu dikkatlice planlar. Her harf, her kelime özenle yerleştirilir.',
  },
  {
    num: '3',
    icon: <FlameIcon />,
    title: 'Eserin Tamamlanması',
    desc: 'Sabır ve ustalıkla kaleme alınan eser, kuruttuktan sonra son dokunuşlarla tamamlanır ve ölümsüzleşir.',
  },
]

export default function Process() {
  return (
    <section id="process" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

      {/* Left — sticky */}
      <div style={{ padding: '100px 80px', position: 'sticky', top: '72px', alignSelf: 'start' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgb(13,13,13)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '24px' }}>
          <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', flexShrink: 0 }} />
          Hat Süreci
        </div>
        <h2 style={{ fontSize: 'clamp(56px, 6vw, 92px)', fontWeight: 400, color: '#fff', lineHeight: 1, marginBottom: '24px' }}>Süreç</h2>
        <p style={{ fontSize: '18px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', maxWidth: '400px', lineHeight: 1.5, marginBottom: '40px' }}>
          Yüzyıllık bir geleneğin izinde, her eser sabır ve özenle hayat bulur.
        </p>
        <img
          src="https://framerusercontent.com/images/hkqCgTywEMRoptWFXq8qYujrFxE.png"
          alt=""
          style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', aspectRatio: '4/3' }}
        />
      </div>

      {/* Right — step cards like Framer */}
      <div style={{ padding: '100px 80px', borderLeft: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {steps.map((s) => (
          <div key={s.num} style={{
            background: 'rgb(13,13,13)',
            borderRadius: '30px',
            padding: '44px 32px 32px',
            boxShadow: 'rgba(0,0,0,0.4) 16px 24px 20px 8px',
            position: 'relative',
          }}>
            {/* Icon */}
            <div style={{ marginBottom: '20px' }}>
              {s.icon}
            </div>
            {/* Title + Number row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 500, color: '#fff', letterSpacing: '-0.3px', lineHeight: 1.2, flex: 1 }}>{s.title}</h3>
              <span style={{ fontSize: '16px', fontWeight: 400, color: '#fff', flexShrink: 0, marginLeft: '16px', background: 'rgb(13,13,13)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.num}</span>
            </div>
            <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, letterSpacing: '-0.3px' }}>{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
