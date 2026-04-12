const steps = [
  { num: '1', title: 'Kalem ve Mürekkep Seçimi', desc: 'Her hat eserinin temeli, doğru kalem ve mürekkep seçimiyle başlar. Kamış kalem ve is mürekkebi, geleneksel hat sanatının vazgeçilmez unsurlarıdır.' },
  { num: '2', title: 'Kompozisyon ve Taslak', desc: 'Yazar, yazılacak metni ve kompozisyonu dikkatlice planlar. Her harf, her kelime özenle yerleştirilir.' },
  { num: '3', title: 'Eserin Tamamlanması', desc: 'Sabır ve ustalıkla kaleme alınan eser, kuruttuktan sonra son dokunuşlarla tamamlanır ve ölümsüzleşir.' },
]

export default function Process() {
  return (
    <section id="process" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

      {/* Left — sticky */}
      <div style={{ padding: '100px 80px', position: 'sticky', top: '72px', alignSelf: 'start' }}>
        <p style={{ fontSize: '15px', fontWeight: 400, color: '#fff', letterSpacing: '-0.3px', marginBottom: '16px' }}>Hat Süreci</p>
        <h2 style={{ fontSize: '92px', fontWeight: 400, color: '#fff', lineHeight: 1, marginBottom: '24px' }}>Süreç</h2>
        <p style={{ fontSize: '24px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', maxWidth: '400px', lineHeight: 1.4, marginBottom: '40px' }}>
          Yüzyıllık bir geleneğin izinde, her eser sabır ve özenle hayat bulur.
        </p>
        <img
          src="https://framerusercontent.com/images/hkqCgTywEMRoptWFXq8qYujrFxE.png"
          alt=""
          style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3' }}
        />
      </div>

      {/* Right — steps */}
      <div style={{ padding: '100px 80px', borderLeft: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '0' }}>
        {steps.map((s, i) => (
          <div key={s.num} style={{ padding: '40px 0', borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '36px', fontWeight: 500, color: '#fff', letterSpacing: '-0.36px', lineHeight: 1.1 }}>{s.title}</h3>
              <span style={{ fontSize: '16px', color: '#fff', flexShrink: 0, marginLeft: '16px' }}>{s.num}</span>
            </div>
            <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, letterSpacing: '-0.3px' }}>{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
