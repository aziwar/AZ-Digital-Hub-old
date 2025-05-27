import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "📊",
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing plans tailored to your business goals with focus on ROI and growth.",
      features: ["Market Analysis", "Campaign Planning", "KPI Setting", "Performance Tracking"]
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce management from platform selection to optimization and growth strategies.",
      features: ["Platform Setup", "Product Management", "Conversion Optimization", "Sales Analytics"]
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Strategic social media management to build brand awareness and drive meaningful engagement.",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Reporting"]
    },
    {
      icon: "🔍",
      title: "SEO & SEM",
      description: "Search engine optimization and marketing to improve visibility and drive qualified traffic.",
      features: ["Keyword Research", "On-page SEO", "PPC Campaigns", "Performance Monitoring"]
    },
    {
      icon: "💼",
      title: "IT Consulting",
      description: "Technology consulting to streamline operations and implement digital transformation.",
      features: ["System Analysis", "Solution Design", "Implementation", "Training & Support"]
    },
    {
      icon: "📈",
      title: "Analytics & Reporting",
      description: "Data-driven insights and comprehensive reporting to measure and improve performance.",
      features: ["Data Analysis", "Custom Dashboards", "ROI Tracking", "Strategic Recommendations"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 hover:border-blue-600/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your digital presence?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;