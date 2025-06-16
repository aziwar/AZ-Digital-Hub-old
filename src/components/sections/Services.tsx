// ENTJ Commander Services - Strategic Leadership Solutions
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "⚡",
      title: "Strategic Digital Transformation",
      description: "End-to-end digital strategy that delivers measurable ROI. From vision to execution, I orchestrate complete business transformation.",
      results: "300% avg revenue increase",
      features: ["Executive Strategy Sessions", "Digital Roadmap Creation", "KPI Framework Design", "Performance Optimization"]
    },
    {
      icon: "🎯",
      title: "E-commerce Command & Control",
      description: "Complete e-commerce ecosystem management. Platform optimization, funnel engineering, and conversion maximization for sustained growth.",
      results: "150% conversion improvement",
      features: ["Platform Architecture", "KNET Payment Integration", "Conversion Rate Optimization", "Sales Performance Analytics"]
    },
    {
      icon: "🚀",
      title: "Kuwait Market Leadership",
      description: "Dominate the GCC digital landscape with culturally-aware campaigns that resonate with local markets while driving international reach.",
      results: "GCC market penetration",
      features: ["Arabic/English Campaigns", "Ramadan Strategy Planning", "Local SEO Mastery", "Regional Social Influence"]
    },
    {
      icon: "💼",
      title: "Enterprise IT Consulting",
      description: "Technology transformation that aligns with business objectives. Strategic IT solutions that enhance operational efficiency and competitive advantage.",
      results: "40% efficiency gains",
      features: ["Infrastructure Assessment", "Digital Process Optimization", "Team Training & Development", "Technology Stack Modernization"]
    },
    {
      icon: "📊",
      title: "Data-Driven Decision Making",
      description: "Transform raw data into strategic insights. Advanced analytics frameworks that drive informed decisions and sustainable competitive advantage.",
      results: "Real-time intelligence",
      features: ["Performance Dashboard Creation", "ROI Tracking Systems", "Predictive Analytics", "Strategic Reporting Automation"]
    },
    {
      icon: "⭐",
      title: "Executive Leadership Coaching",
      description: "Develop your team's strategic thinking capabilities. Leadership development focused on results-driven execution and organizational excellence.",
      results: "Team performance boost",
      features: ["Leadership Strategy Sessions", "Process Optimization Training", "Goal Achievement Systems", "Performance Management"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Commander Leadership Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-purple-600/20 backdrop-blur border border-purple-400/30 rounded-full px-6 py-3 mb-6">
            <span className="text-purple-300 font-bold">Strategic Solutions • Proven Results</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Command Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Strategic digital leadership that transforms vision into measurable results. 
            <span className="text-purple-400 font-semibold"> No compromise on performance.</span>
          </p>
        </div>

        {/* Strategic Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/60 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className="mb-4">
                    <div className="inline-flex items-center bg-purple-600/20 rounded-full px-3 py-1 mb-3">
                      <span className="text-purple-300 text-sm font-semibold">{service.results}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commander CTA */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-slate-900/50 backdrop-blur-md border border-purple-500/30 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Command Your Market?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Strategic consultation sessions that deliver immediate clarity and actionable plans for market dominance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              Strategic Consultation →
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-purple-400/30 transition-all duration-200"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;