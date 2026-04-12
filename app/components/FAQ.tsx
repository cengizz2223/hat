'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Hat sanatı nedir?',                   a: 'Hat sanatı, Arap alfabesiyle yazılan estetik yazı sanatıdır. Osmanlı medeniyetinin en önemli sanat dallarından biridir.' },
  { q: 'Etkinliklere nasıl katılabilirim?',   a: 'İletişim formu veya e-posta aracılığıyla bize ulaşabilirsiniz. Yaklaşan etkinliklerimizi sosyal medya hesaplarımızdan takip edebilirsiniz.' },
  { q: 'Hangi hat stilleri öğretiliyor?',     a: "Sülüs, Nesih, Divan, Kûfi, Rik'a ve Celî stillerinde dersler verilmektedir. Başlangıç için Nesih önerilmektedir." },
  { q: 'Başlangıç seviyesi için uygun mu?',   a: 'Evet, atölyelerimiz her seviyeye uygundur. Hiç tecrübeniz olmasa bile rahatlıkla katılabilirsiniz.' },
  { q: 'Malzemeler dahil mi?',                a: 'Evet, tüm atölye malzemeleri (kamış kalem, is mürekkebi, hat kağıdı) ücrete dahildir.' },
  { q: 'Eser satın alabilir miyim?',          a: 'Evet, sergilerimizde satışa sunulan eserler mevcuttur. Özel sipariş için de iletişime geçebilirsiniz.' },
  { q: 'Etkinlikler nerede düzenleniyor?',    a: 'Etkinliklerimiz atölyemizde ve çeşitli kültür merkezlerinde düzenlenmektedir.' },
  { q: 'Fiyatlar nasıl belirleniyor?',        a: 'Fiyatlarımız etkinlik türüne, süresine ve içeriğine göre belirlenmektedir. Detaylı bilgi için iletişime geçin.' },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>

      {/* Left */}
      <div style={{ padding: '100px 80px' }}>
        <p style={{ fontSize: '15px', fontWeight: 400, color: '#fff', letterSpacing: '-0.3px', marginBottom: '16px' }}>Sık Sorulan Sorular</p>
        <h2 style={{ fontSize: '92px', fontWeight: 400, color: '#fff', lineHeight: 1, marginBottom: '24px' }}>Cevaplar</h2>
        <p style={{ fontSize: '24px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', maxWidth: '400px', lineHeight: 1.4, marginBottom: '48px' }}>
          Hat sanatı etkinlikleri ve eserler hakkında merak edilenler.
        </p>
        <img
          src="https://framerusercontent.com/images/QqqmFNIdzb0HbOiMSHvqZXkwT7w.png"
          alt=""
          style={{ width: '100%', borderRadius: '12px', aspectRatio: '1', objectFit: 'cover' }}
        />
      </div>

      {/* Right — accordion */}
      <div style={{ padding: '100px 80px', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              style={{ width: '100%', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', cursor: 'pointer', gap: '16px', textAlign: 'left' }}
            >
              <span style={{ fontSize: '18px', fontWeight: 400, color: '#fff', letterSpacing: '-0.3px' }}>{f.q}</span>
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '18px', flexShrink: 0, transition: 'transform 0.2s', transform: openIdx === i ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div style={{ maxHeight: openIdx === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
              <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, letterSpacing: '-0.3px', paddingBottom: '24px' }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
