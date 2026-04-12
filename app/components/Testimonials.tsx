'use client'

const testimonials = [
  { avatar:'https://framerusercontent.com/images/GTWhJyJde9nAeuMXqgYJh6jQhrU.jpg', name:'Mehmet Yılmaz', role:'Creative Director', context:'Osmanlı Kaligrafi Sergisi Ziyaretçisi', quote:'"Sergiyi gezerken her eserin arkasındaki emeği ve sabrı hissettim. Hat sanatının bu kadar derin bir gelenek olduğunu burada anladım."' },
  { avatar:'https://framerusercontent.com/images/c5E9pkEhKO6BmnqFuXLWa9Xqw34.png', name:'Ayşe Kaya', role:'CEO of GreenRoots', context:'Hat Sanatı Atölyesi Katılımcısı', quote:'"Bu atölye benim için unutulmaz bir deneyimdi. Kalemin kâğıda değdiği o ilk anda tarihin içinde kayboldum. Kesinlikle tavsiye ediyorum!"' },
  { avatar:'https://framerusercontent.com/images/hSbSnYWGLq3elsCJfJAmFGgQZOc.png', name:'Yusuf Demir', role:'Founder of EcoLux', context:'Özel Hat Atölyesi Katılımcısı', quote:'"Hocamızın her harfi nasıl canlandırdığını izlemek başlı başına bir sanattı. Atölyeden ayrılırken ellerimde kendi yazdığım bir levha vardı. Bu deneyimi hiç unutmayacağım."' },
  { avatar:'https://framerusercontent.com/images/Fcv04AxsV7IoJTfoXNkm5ZNMMA.png', name:'Fatima Al-Rashid', role:'Founder at GreenK Studios', context:'Özel Hat Atölyesi Katılımcısı', quote:'"Hocamızın her harfi nasıl canlandırdığını izlemek başlı başına bir sanattı. Bu deneyimi hiç unutmayacağım."' },
]

const stats = [
  { num:'180+', label:'design projects completed.' },
  { num:'96%', label:'Client satisfaction rate.' },
  { num:'15+', label:'Years of experience' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background:'#000' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', borderTop:'1px solid rgba(255,255,255,0.07)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ padding:'60px 40px' }}>
          <img src="https://framerusercontent.com/images/PjaPY2S6qP6ii6fCxTJHhHU66SM.png" alt="" style={{ width:'100%', borderRadius:'12px', objectFit:'cover', aspectRatio:'4/3', filter:'grayscale(50%)' }} />
        </div>
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 40px', borderLeft:'1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'5px 12px', borderRadius:'100px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.6)', fontSize:'12px', marginBottom:'20px', width:'fit-content' }}>
            <span style={{ width:'5px', height:'5px', background:'rgba(255,255,255,0.5)', borderRadius:'50%' }} />
            Katılımcı Görüşleri
          </div>
          <h2 style={{ fontSize:'clamp(36px,4.5vw,52px)', fontWeight:600, letterSpacing:'-1.5px', color:'#fff', lineHeight:1.1, marginBottom:'16px' }}>Katılımcı<br />Görüşleri</h2>
          <p style={{ fontSize:'15px', color:'rgba(255,255,255,0.5)', maxWidth:'340px', lineHeight:1.7 }}>Hat sanatı etkinliklerimize katılan misafirlerimizin gerçek deneyimleri ve değerli görüşleri.</p>
        </div>
      </div>

      <div style={{ padding:'48px 0 32px', position:'relative' }}>
        <div className="tc-fade-left" />
        <div className="tc-fade-right" />
        <div style={{ overflow:'hidden' }}>
          <div className="tc-track">
            {[...testimonials,...testimonials].map((t,i) => (
              <div key={i} style={{ flexShrink:0, width:'340px', padding:'28px', borderRadius:'16px', background:'#111', border:'1px solid rgba(255,255,255,0.08)' }}>
                <img src={t.avatar} alt={t.name} style={{ width:'48px', height:'48px', borderRadius:'50%', objectFit:'cover', marginBottom:'16px', filter:'grayscale(20%)' }} />
                <div style={{ fontSize:'18px', fontWeight:600, color:'#fff', letterSpacing:'-0.3px', marginBottom:'2px' }}>{t.name}</div>
                <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)', marginBottom:'16px' }}>{t.role}</div>
                <div style={{ height:'1px', background:'rgba(255,255,255,0.07)', marginBottom:'14px' }} />
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.4)', marginBottom:'8px' }}>{t.context}</div>
                <p style={{ fontSize:'13px', lineHeight:1.75, color:'rgba(255,255,255,0.7)', marginBottom:'16px' }}>{t.quote}</p>
                <div style={{ display:'flex', alignItems:'center', gap:'4px' }}>
                  <span style={{ fontSize:'13px', fontWeight:600, color:'#fff', marginRight:'4px' }}>5.0</span>
                  <span style={{ color:'#f5a623', letterSpacing:'2px', fontSize:'13px' }}>★ ★ ★ ★ ★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', margin:'0 40px 40px', background:'#141414', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', overflow:'hidden' }}>
        {stats.map((s,i) => (
          <div key={s.num} style={{ padding:'36px', textAlign:'center', borderRight: i<2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
            <span style={{ display:'block', fontSize:'clamp(32px,4vw,48px)', fontWeight:600, color:'#fff', letterSpacing:'-2px', marginBottom:'6px' }}>{s.num}</span>
            <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.4)' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
