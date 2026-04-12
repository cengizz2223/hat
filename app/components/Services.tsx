import Link from 'next/link'

const styles = ['Sülüs', 'Nesih', 'Divan', 'Kûfi', "Rik'a", 'Celî']
const serviceCards = [
  { icon: '↙', title: 'Sülüs', desc: 'Majestätischste aller Stile. Kalın ve güçlü hatlarıyla camilerde ve büyük eserlerde kullanılan klasik hat stili.' },
  { icon: '⌘', title: 'Nesih', desc: "Kur'an-ı Kerim'in yazımında en çok tercih edilen, ince ve okunaklı hat stilidir." },
  { icon: '⬡', title: 'Divan', desc: 'Osmanlı saray yazışmalarında kullanılan, zarif ve akıcı bir hat stilidir.' },
  { icon: '⊞', title: 'Kûfi', desc: "İslam hat sanatının en eski ve geometrik stili. Mimari eserlerde sıkça kullanılır." },
]
const pills = ['Slide Decks','Copywriting','Brand Graphics','Brand Migration','Package Design','Branding','Optimization','Brand Landing Pages','Social Media','Brand Visibility','Brand Integrations','Icons']

export default function Services() {
  return (
    <>
      <section id="services" className="grid md:grid-cols-2" style={{ background:'#000', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
        <div className="p-10 md:p-20">
          <div className="inline-flex items-center gap-2 px-3 py-[5px] rounded-full text-[12px] mb-5" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.6)' }}>
            <span className="w-[5px] h-[5px] bg-white/50 rounded-full" />
            Hat Hizmetleri
          </div>
          <h2 className="font-semibold text-white mb-4" style={{ fontSize:'clamp(36px,5vw,52px)', letterSpacing:'-1.5px' }}>Hizmetler</h2>
          <p className="mb-7" style={{ fontSize:'14px', color:'rgba(255,255,255,0.5)' }}>Osmanlı geleneğinden ilham alarak, her eser özel olarak sizin için hazırlanır.</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {styles.map(s => <span key={s} className="px-[14px] py-[7px] rounded-full text-[13px]" style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.75)' }}>{s}</span>)}
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="mailto:hello@framebase.design" className="px-5 py-[12px] rounded-full text-[14px] font-medium text-black no-underline hover:opacity-80 transition-opacity" style={{ background:'#fff' }}>İletişime Geç</Link>
            <Link href="#projects" className="px-5 py-[12px] rounded-full text-[14px] font-normal text-white no-underline" style={{ background:'transparent', border:'1px solid rgba(255,255,255,0.25)' }}>Eserleri Gör</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center p-16" style={{ borderLeft:'1px solid rgba(255,255,255,0.07)' }}>
          <img src="https://framerusercontent.com/images/02xn9s33KqIg81miA4IiJTaHA.jpg" alt="" className="rounded-2xl" style={{ width:'85%', boxShadow:'0 40px 80px rgba(0,0,0,0.6)' }} />
        </div>
      </section>
      <section className="px-10 pb-16 pt-3" style={{ background:'#000' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          {serviceCards.map(c => (
            <div key={c.title} className="p-7 rounded-[14px]" style={{ background:'#0f0f0f', border:'1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-xl mb-4" style={{ opacity:0.65 }}>{c.icon}</div>
              <h3 className="text-[20px] font-semibold text-white mb-3" style={{ letterSpacing:'-0.3px' }}>{c.title}</h3>
              <p className="text-[13px] leading-[1.75]" style={{ color:'rgba(255,255,255,0.45)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="overflow-hidden py-7" style={{ borderTop:'1px solid rgba(255,255,255,0.07)', borderBottom:'1px solid rgba(255,255,255,0.07)', background:'#000' }}>
        <div className="flex gap-3 w-max animate-marquee-slow">
          {[...pills,...pills].map((p,i) => (
            <span key={i} className="px-4 py-2 rounded-full text-[13px] whitespace-nowrap" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.65)' }}>{p}</span>
          ))}
        </div>
      </div>
    </>
  )
}
