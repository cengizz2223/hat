'use client'

const testimonials = [
  { avatar: 'https://framerusercontent.com/images/GTWhJyJde9nAeuMXqgYJh6jQhrU.jpg',  name: 'Mehmet Yılmaz',   role: 'Creative Director & Lead Designer', context: 'Osmanlı Kaligrafi Sergisi Ziyaretçisi', quote: '"Sergiyi gezerken her eserin arkasındaki emeği ve sabrı hissettim. Hat sanatının bu kadar derin bir gelenek olduğunu burada anladım."' },
  { avatar: 'https://framerusercontent.com/images/c5E9pkEhKO6BmnqFuXLWa9Xqw34.png',  name: 'Ayşe Kaya',       role: 'CEO of GreenRoots',                 context: 'Hat Sanatı Atölyesi Katılımcısı',       quote: '"Bu atölye benim için unutulmaz bir deneyimdi. Kalemin kâğıda değdiği o ilk anda tarihin içinde kayboldum. Kesinlikle tavsiye ediyorum!"' },
  { avatar: 'https://framerusercontent.com/images/hSbSnYWGLq3elsCJfJAmFGgQZOc.png',  name: 'Yusuf Demir',     role: 'Founder of EcoLux',                 context: 'Özel Hat Atölyesi Katılımcısı',          quote: '"Hocamızın her harfi nasıl canlandırdığını izlemek başlı başına bir sanattı. Atölyeden ayrılırken ellerimde kendi yazdığım bir levha vardı. Bu deneyimi hiç unutmayacağım."' },
  { avatar: 'https://framerusercontent.com/images/Fcv04AxsV7IoJTfoXNkm5ZNMMA.png',   name: 'Fatima Al-Rashid', role: 'Founder at GreenK Studios',          context: 'Özel Hat Atölyesi Katılımcısı',          quote: '"Hocamızın her harfi nasıl canlandırdığını izlemek başlı başına bir sanattı. Bu deneyimi hiç unutmayacağım."' },
]

const stats = [
  { num: '180+', label: 'design projects completed.' },
  { num: '96%',  label: 'Client satisfaction rate.' },
  { num: '15+',  label: 'Years of experience' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#000' }}>

      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ padding: '100px 80px' }}>
          <img src="https://framerusercontent.com/images/PjaPY2S6qP6ii6fCxTJHhHU66SM.png" alt="" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '4/3' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 80px', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
          <p style={{ fontSize: '15px', fontWeight: 400, color: '#fff', letterSpacing: '-0.3px', marginBottom: '16px' }}>Katılımcı Görüşleri</p>
          <h2 style={{ fontSize: '92px', fontWeight: 400, color: '#fff', lineHeight: 1, marginBottom: '24px' }}>Katılımcı<br />Görüşleri</h2>
          <p style={{ fontSize: '24px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', maxWidth: '400px', lineHeight: 1.4 }}>
            Hat sanatı etkinliklerimize katılan misafirlerimizin gerçek deneyimleri ve değerli görüşleri.
          </p>
        </div>
      </div>

      {/* Scrolling testimonial cards */}
      <div style={{ padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="tc-fade-left" />
        <div className="tc-fade-right" />
        <div className="tc-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} style={{ flexShrink: 0, width: '380px', padding: '32px', borderRadius: '16px', background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={t.avatar} alt={t.name} style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '36px', fontWeight: 500, color: '#fff', letterSpacing: '-0.36px', lineHeight: 1, marginBottom: '4px' }}>{t.name}</h3>
              <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', letterSpacing: '-0.3px', marginBottom: '20px' }}>{t.role}</p>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '16px' }} />
              <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', letterSpacing: '-0.3px', marginBottom: '12px' }}>{t.context}</p>
              <p style={{ fontSize: '18px', fontWeight: 400, color: '#fff', lineHeight: 1.5, marginBottom: '20px' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '15px', fontWeight: 400, color: '#fff' }}>5.0</span>
                <span style={{ color: '#f5a623', fontSize: '13px', letterSpacing: '2px' }}>★ ★ ★ ★ ★</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', margin: '0 80px 80px', background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
        {stats.map((s, i) => (
          <div key={s.num} style={{ padding: '40px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
            <span style={{ display: 'block', fontSize: '92px', fontWeight: 400, color: '#fff', lineHeight: 1, marginBottom: '8px' }}>{s.num}</span>
            <span style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', letterSpacing: '-0.3px' }}>{s.label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}
