import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform Optimization",
      client: "Smart Technology (STSCKW)",
      description: "Led the complete overhaul of e-commerce platform resulting in 200% increase in conversion rates",
      tags: ["E-commerce", "SEO", "UX Optimization"],
      results: ["200% conversion increase", "150% ROI improvement", "50% faster load times"]
    },
    {
      title: "Digital Marketing Campaign",
      client: "Dr Scent",
      description: "Developed and executed comprehensive digital marketing strategy across multiple channels",
      tags: ["Social Media", "PPC", "Email Marketing"],
      results: ["300% social engagement", "250% lead generation", "180% sales growth"]
    },
    {
      title: "Social Media Transformation",
      client: "Ooredoo Kuwait",
      description: "Built social media presence from ground up for major telecommunications provider",
      tags: ["Social Strategy", "Content Creation", "Community Management"],
      results: ["500K+ followers", "400% engagement rate", "Top telecom brand on social"]
    },
    {
      title: "IT Infrastructure Modernization",
      client: "Multiple Clients",
      description: "Consulted on digital transformation projects for various businesses in Kuwait",
      tags: ["IT Consulting", "System Design", "Implementation"],
      results: ["60% cost reduction", "99.9% uptime", "Streamlined operations"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing successful projects and measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-blue-600/50 transition-all duration-300 group"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-blue-400 mb-4">{project.client}</p>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-sm text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY RESULTS</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-green-400">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 8.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Want to see more detailed case studies?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Request Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;