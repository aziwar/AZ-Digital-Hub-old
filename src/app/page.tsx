import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Portfolio from '@/components/sections/Portfolio'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Main Content */}
      <div className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Ahmed Ziwar - ENTJ Commander. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}