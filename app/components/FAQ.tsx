'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Hat sanatı nedir?', a: 'Hat sanatı, Arap alfabesiyle yazılan estetik yazı sanatıdır. Osmanlı medeniyetinin en önemli sanat dallarından biridir.' },
  { q: 'Etkinliklere nasıl katılabilirim?', a: 'İletişim formu veya e-posta aracılığıyla bize ulaşabilirsiniz. Yaklaşan etkinliklerimizi sosyal medya hesaplarımızdan takip edebilirsiniz.' },
  { q: 'Hangi hat stilleri öğretiliyor?', a: "Sülüs, Nesih, Divan, Kûfi, Rik'a ve Celî stillerinde dersler verilmektedir. Başlangıç için Nesih önerilmektedir." },
  { q: 'Başlangıç seviyesi için uygun mu?', a: 'Evet, atölyelerimiz her seviyeye uygundur. Hiç tecrübeniz olmasa bile rahatlıkla katılabilirsiniz.' },
  { q: 'Malzemeler dahil mi?', a: 'Evet, tüm atölye malzemeleri (kamış kalem, is mürekkebi, hat kağıdı) ücrete dahildir.' },
  { q: 'Eser satın alabilir miyim?', a: 'Evet, sergilerimizde satışa sunulan eserler mevcuttur. Özel sipariş için de iletişime geçebilirsiniz.' },
  { q: 'Etkinlikler nerede düzenleniyor?', a: 'Etkinliklerimiz atölyemizde ve çeşitli kültür merkezlerinde düzenlenmektedir.' },
  { q: 'Fiyatlar nasıl belirleniyor?', a: 'Fiyatlarımız etkinlik türüne, süresine ve içeriğine göre belirlenmektedir. Detaylı bilgi için iletişime geçin.' },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', background:'#000', borderTop:'1px solid rgba(255,255,255,0.07)' }} className="md:grid-cols-2 grid-cols-1">
      <div style={{ padding:'80px 60px 80px 40px' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'5px 12px', borderRadius:'100px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.6)', fontSize:'12px', marginBottom:'20px' }}>
          <span style={{ width:'5px', height:'5px', background:'rgba(255,255,255,0.5)', borderRadius:'50%' }} />
          Sık Sorulan Sorular
        </div>
        <h2 style={{ fontSize:'clamp(36px,5vw,52px)', fontWeight:600, letterSpacing:'-1.5px', color:'#fff', marginBottom:'16px' }}>Cevaplar</h2>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.5)', marginBottom:'32px', maxWidth:'340px' }}>Hat sanatı etkinlikleri ve eserler hakkında merak edilenler.</p>
        <img src="https://framerusercontent.com/images/QqqmFNIdzb0HbOiMSHvqZXkwT7w.png" alt="" style={{ width:'100%', borderRadius:'12px', aspectRatio:'1', objectFit:'cover', filter:'grayscale(30%)' }} className="hidden md:block" />
      </div>
      <div style={{ padding:'80px 40px 80px 60px', borderLeft:'1px solid rgba(255,255,255,0.07)' }}>
        {faqs.map((f,i) => (
          <div key={i} style={{ borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
            <button onClick={() => setOpenIdx(openIdx===i ? -1 : i)}
              style={{ width:'100%', background:'none', border:'none', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 0', cursor:'pointer', gap:'16px', textAlign:'left' }}>
              <span style={{ fontSize:'15px', fontWeight:400, color:'#fff' }}>{f.q}</span>
              <span style={{ width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.6)', fontSize:'16px', flexShrink:0, transition:'all 0.2s', transform: openIdx===i ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div style={{ maxHeight: openIdx===i ? '200px' : '0', overflow:'hidden', transition:'max-height 0.35s ease' }}>
              <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, paddingBottom:'18px' }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
