// ENTJ Commander Hero - Strategic Leadership & ROI-Driven Results
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900">
      {/* Commander Pattern Background */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]" />
      
      {/* Strategic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* ENTJ Leadership Badge */}
        <div className="mb-8 inline-flex items-center space-x-3 bg-purple-600/20 backdrop-blur border border-purple-400/30 rounded-full px-6 py-3">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <span className="text-purple-300 font-semibold">ENTJ Commander • Strategic Thinker</span>
        </div>

        {/* Confident Commander Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight">
          Ahmed Zewar
        </h1>
        
        {/* ROI-Driven Positioning */}
        <div className="mt-6 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Digital Marketing Commander
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-4xl mx-auto">
            Strategic Vision × Natural Leadership × Relentless Execution
          </p>
        </div>

        {/* Quantified Achievement Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-white">20+ Years</div>
            <div className="text-purple-300">Digital Excellence</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-white">Kuwait + GCC</div>
            <div className="text-purple-300">Market Leadership</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-white">ROI-Driven</div>
            <div className="text-purple-300">Proven Results</div>
          </div>
        </div>

        {/* Commander Action CTAs - FIXED LINKS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="#portfolio"
            className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 border border-purple-500"
          >
            View Results →
          </Link>
          <Link
            href="#services"
            className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-purple-400/30 transition-all duration-200 transform hover:scale-105"
          >
            Strategic Services
          </Link>
        </div>

        {/* Professional Network */}
        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://www.linkedin.com/in/ahmedzewar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn Network</span>
          </a>
          <a
            href="mailto:ahmedzewar@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Direct Contact</span>
          </a>
        </div>

        {/* Strategic Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-pulse">
            <span className="text-purple-400 text-sm font-medium">Strategic Insight Below</span>
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;