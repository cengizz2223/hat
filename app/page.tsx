import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Process from './components/Process'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CtaFooter from './components/CtaFooter'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Process />
        <Services />
        <Testimonials />
        <FAQ />
        <CtaFooter />
      </main>
    </>
  )
}
