import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollProgress from '@/components/ui/ScrollProgress'
import PageTransition from '@/components/ui/PageTransition'
import FloatingNav from '@/components/ui/FloatingNav'
import { Footer } from '@/components/layouts/Footer'

// Client-side dynamic components (moved to separate client component)
const ClientDynamicComponents = dynamic(
  () => import('@/components/ui/ClientDynamicComponents'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="smooth-scroll">
      <PageTransition>
        <ScrollProgress />
        <FloatingNav />
        
        {/* Client-side dynamic components */}
        <ClientDynamicComponents 
          showPerformanceMetrics={process.env.NODE_ENV === 'development'} 
        />
        
        <main className="relative overflow-hidden">
          {/* Gradient Orbs for visual depth */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[40%] -left-[20%] h-[80%] w-[80%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
            <div className="absolute -bottom-[40%] -right-[20%] h-[80%] w-[80%] rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-3xl" />
          </div>

          {/* Hero Section with Parallax */}
          <section id="hero" className="relative min-h-screen">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
            </div>
            <HeroSection />
          </section>

          {/* About Section with Glass Effect */}
          <section id="about" className="relative min-h-screen py-20 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950" />
            <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-5" />
            <AboutSection />
          </section>

          {/* Services Section with Mesh Gradient */}
          <section id="services" className="relative min-h-screen py-20 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-slate-950 via-purple-950/10 to-slate-950" />
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 h-full w-full bg-mesh-gradient opacity-10" />
            </div>
            <ServicesSection />
          </section>

          {/* Portfolio Section with Dynamic Background */}
          <section id="portfolio" className="relative min-h-screen py-20 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-indigo-950/10 to-slate-950" />
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,0.9))]" />
            </div>
            <PortfolioSection />
          </section>

          {/* Contact Section with Glassmorphism */}
          <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-900/95 to-slate-950" />
            <div className="absolute inset-0 -z-10">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>
            <ContactSection />
          </section>
        </main>

        {/* Modern Footer */}
        <Footer />
      </PageTransition>
    </div>
  )
}
