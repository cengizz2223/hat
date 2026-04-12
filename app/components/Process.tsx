const steps = [
  { num: '1', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>, title: 'Kalem ve Mürekkep Seçimi', desc: 'Her hat eserinin temeli, doğru kalem ve mürekkep seçimiyle başlar. Kamış kalem ve is mürekkebi, geleneksel hat sanatının vazgeçilmez unsurlarıdır.' },
  { num: '2', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>, title: 'Kompozisyon ve Taslak', desc: 'Yazar, yazılacak metni ve kompozisyonu dikkatlice planlar. Her harf, her kelime özenle yerleştirilir.' },
  { num: '3', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, title: 'Eserin Tamamlanması', desc: 'Sabır ve ustalıkla kaleme alınan eser, kuruttuktan sonra son dokunuşlarla tamamlanır ve ölümsüzleşir.' },
]

export default function Process() {
  return (
    <section id="process" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', background:'#0a0a0a', borderTop:'1px solid rgba(255,255,255,0.07)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ padding:'80px 60px 80px 40px', position:'sticky', top:'80px', alignSelf:'start' }} className="hidden md:block">
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'5px 12px', borderRadius:'100px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.6)', fontSize:'12px', marginBottom:'20px' }}>
          <span style={{ width:'5px', height:'5px', background:'rgba(255,255,255,0.5)', borderRadius:'50%' }} />
          Hat Süreci
        </div>
        <h2 style={{ fontSize:'clamp(36px,5vw,52px)', fontWeight:600, letterSpacing:'-1.5px', color:'#fff', marginBottom:'16px' }}>Süreç</h2>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.5)', marginBottom:'32px', maxWidth:'340px' }}>Yüzyıllık bir geleneğin izinde, her eser sabır ve özenle hayat bulur.</p>
        <img src="https://framerusercontent.com/images/hkqCgTywEMRoptWFXq8qYujrFxE.png" alt="" style={{ width:'100%', borderRadius:'12px', objectFit:'cover', aspectRatio:'4/3', filter:'grayscale(20%)' }} />
      </div>
      <div style={{ padding:'80px 40px 80px 60px', borderLeft:'1px solid rgba(255,255,255,0.07)', display:'flex', flexDirection:'column', gap:'12px' }}>
        {steps.map(s => (
          <div key={s.num} style={{ position:'relative', padding:'24px', borderRadius:'14px', background:'#111', border:'1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ position:'absolute', top:'18px', right:'18px', fontSize:'13px', color:'rgba(255,255,255,0.3)', fontWeight:500 }}>{s.num}</span>
            <div style={{ color:'rgba(255,255,255,0.7)', marginBottom:'16px' }}>{s.icon}</div>
            <h3 style={{ fontSize:'18px', fontWeight:600, color:'#fff', letterSpacing:'-0.3px', marginBottom:'10px' }}>{s.title}</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:1.75 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
