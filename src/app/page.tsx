import Navigation from '@/components/Navigation'
import About from '@/components/sections/About'
import EnhancedContact from '@/components/sections/EnhancedContact'
import EnhancedHero from '@/components/sections/EnhancedHero'
import Portfolio from '@/components/sections/Portfolio'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Main Content */}
      <div className="pt-16">
        <section id="hero">
          <EnhancedHero />
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
          <EnhancedContact />
        </section>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Footer CTA */}
          <div className="text-center mb-8 p-6 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">
              🚀 Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-4">
              Join 200+ Kuwait businesses that chose strategic excellence
            </p>
            <a 
              href="#contact"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-200"
            >
              Book Your FREE Strategic Session →
            </a>
          </div>
          
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Strategic Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>📧 ahmed@zewar.xyz</p>
                <p>📱 +965 6067 2773 (WhatsApp)</p>
                <p>📍 Kuwait City, Kuwait</p>
                <p>💼 linkedin.com/in/ahmedziwar</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Digital Marketing Strategy</p>
                <p>E-commerce Development</p>
                <p>Kuwait Market Expertise</p>
                <p>IT Consulting</p>
                <p>ROI Optimization</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Guarantees</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>✅ 24-48 hour response</p>
                <p>✅ 300% avg ROI increase</p>
                <p>✅ 100% money-back guarantee</p>
                <p>✅ Free strategic audit</p>
                <p>✅ Kuwait market specialist</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-gray-400">
              © 2025 Ahmed Zewar - ENTJ Commander • Strategic Digital Marketing Excellence • Kuwait & GCC
            </p>
            <p className="text-gray-500 text-sm mt-2">
              All rights reserved. Transforming businesses through strategic digital leadership since 2005.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}