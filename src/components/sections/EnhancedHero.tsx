// ENHANCED Hero - Maximum Customer Conversion Focus
import React from 'react';
import Link from 'next/link';

const EnhancedHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 overflow-hidden">
      
      {/* Strategic Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      
      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* URGENT AVAILABILITY ALERT */}
        <div className="mb-8 inline-flex items-center space-x-3 bg-red-600/20 backdrop-blur border border-red-400/50 rounded-full px-6 py-3 animate-bounce">
          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-red-300 font-bold text-sm md:text-base">🔥 URGENT: Only 3 Strategic Slots Left This Month</span>
        </div>

        {/* Commanding Headlines */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight mb-6">
          <span className="block">Ahmed Ziwar</span>
          <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Commands Results
          </span>
        </h1>
        
        {/* VALUE PROPOSITION */}
        <div className="mb-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4">
            Kuwait's #1 Digital Marketing Strategist
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Transform your business with <span className="text-purple-400 font-bold">proven strategies</span> that generated 
            <span className="text-green-400 font-bold"> 300% ROI</span> for 200+ Kuwait companies
          </p>
        </div>

        {/* SOCIAL PROOF TICKER */}
        <div className="mb-12 flex flex-wrap justify-center items-center gap-6 text-sm">
          <div className="flex items-center space-x-2 bg-green-600/20 rounded-full px-4 py-2">
            <span className="text-green-400">✓</span>
            <span className="text-green-300">200+ Kuwait Businesses Transformed</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-600/20 rounded-full px-4 py-2">
            <span className="text-blue-400">✓</span>
            <span className="text-blue-300">20+ Years Kuwait Market Expertise</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-600/20 rounded-full px-4 py-2">
            <span className="text-purple-400">✓</span>
            <span className="text-purple-300">ENTJ Strategic Leadership</span>
          </div>
        </div>

        {/* RESULTS METRICS */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-purple-400/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">300%</div>
            <div className="text-purple-300 font-medium">Average ROI Increase</div>
            <div className="text-xs text-gray-400 mt-1">Within 6 months</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">150%</div>
            <div className="text-cyan-300 font-medium">Conversion Rate Boost</div>
            <div className="text-xs text-gray-400 mt-1">E-commerce clients</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-green-400/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">24-48h</div>
            <div className="text-green-300 font-medium">Response Time</div>
            <div className="text-xs text-gray-400 mt-1">Guaranteed</div>
          </div>
        </div>

        {/* PRIMARY CTAs */}
        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 border border-purple-500"
          >
            <span className="flex items-center justify-center">
              🚀 Book FREE Strategic Session
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="text-sm font-normal opacity-90 mt-1">Usually 2,000 KWD - Limited Time</div>
          </Link>
          
          <a
            href="https://wa.me/96560672773?text=Hi Ahmed, I need urgent strategic consultation for my business"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
          >
            <span className="flex items-center justify-center">
              💬 WhatsApp Instant Response
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="text-sm font-normal opacity-90 mt-1">+965 6067 2773</div>
          </a>
        </div>

        {/* GUARANTEES & RISK REVERSAL */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-md border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              🛡️ 100% Risk-Free Guarantee
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Money-back if no results in 90 days</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Free strategy audit included</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Cancel anytime, no questions asked</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL NETWORKS */}
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://www.linkedin.com/in/ahmedziwar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>Professional Network</span>
          </a>
          <a
            href="mailto:ahmedziwar@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>ahmedziwar@gmail.com</span>
          </a>
        </div>

        {/* URGENCY COUNTDOWN */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 bg-red-600/20 backdrop-blur border border-red-400/30 rounded-full px-6 py-3">
            <span className="text-red-300 font-bold">⏰ Strategic Sessions Filling Fast:</span>
            <div className="flex space-x-4 text-sm">
              <div className="text-center">
                <div className="text-red-400 font-bold">3</div>
                <div className="text-red-300 text-xs">Slots Left</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold">48h</div>
                <div className="text-yellow-300 text-xs">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold">90%</div>
                <div className="text-green-300 text-xs">Book Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-purple-400 text-sm font-medium">See Success Stories</span>
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;