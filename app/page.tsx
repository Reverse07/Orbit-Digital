import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Technologies from '@/components/sections/Technologies'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/sections/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Technologies />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />   {
        
      }
    </main>
  )
}