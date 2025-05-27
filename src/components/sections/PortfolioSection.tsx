'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowTopRightOnSquareIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Smart Technology E-commerce Growth",
      company: "STSCKW",
      period: "2022 - Present",
      description: "Led comprehensive e-commerce website management and digital marketing campaigns, focusing on ROI optimization and user experience enhancement.",
      results: [
        "150% increase in online conversions",
        "200% growth in organic traffic", 
        "85% improvement in customer retention",
        "300% ROI on PPC campaigns"
      ],
      technologies: ["Google Ads", "SEO", "Analytics", "E-commerce"],
      category: "E-commerce",
      image: "/projects/stsckw.jpg",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Dr Scent Digital Transformation",
      company: "Dr Scent",
      period: "2023 - 2024",
      description: "Implemented comprehensive digital marketing strategies including social media campaigns, email marketing, and PPC advertising to boost brand visibility.",
      results: [
        "400% increase in social engagement",
        "250% growth in email subscribers",
        "180% improvement in brand awareness",
        "220% ROI increase"
      ],
      technologies: ["Social Media", "Email Marketing", "Content Strategy", "PPC"],
      category: "Digital Marketing",
      image: "/projects/drscent.jpg", 
      gradient: "from-pink-500 to-red-600"
    },
    {
      title: "Ooredoo Kuwait Social Strategy",
      company: "Ooredoo Kuwait",
      period: "2019 - 2022",
      description: "Built and executed comprehensive social media strategies, managing community engagement and establishing strong brand presence across platforms.",
      results: [
        "500% increase in social followers",
        "350% growth in engagement rate",
        "90% improvement in customer satisfaction",
        "160% increase in lead generation"
      ],
      technologies: ["Social Media Management", "Community Building", "Content Creation", "Analytics"],
      category: "Social Media",
      image: "/projects/ooredoo.jpg",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Golden Gate Digital Media Campaign",
      company: "Golden Gate KW", 
      period: "2016 - 2018",
      description: "Developed and managed comprehensive digital media campaigns, focusing on content creation, social advertising, and online reputation management.",
      results: [
        "300% increase in online visibility",
        "200% growth in customer engagement",
        "150% improvement in conversion rates",
        "180% ROI on digital campaigns"
      ],
      technologies: ["Digital Advertising", "Content Marketing", "SEO", "Social Media"],
      category: "Digital Media",
      image: "/projects/goldengate.jpg",
      gradient: "from-orange-500 to-yellow-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-16"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Showcasing successful campaigns and projects that delivered measurable results 
            and significant business growth for clients across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={containerVariants} className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image/Visual */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className={`relative h-96 bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden group cursor-pointer`}>
                  {/* Placeholder for project visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ChartBarIcon className="w-24 h-24 mx-auto mb-4 opacity-80" />
                      <h4 className="text-2xl font-bold opacity-90">{project.company}</h4>
                      <p className="text-lg opacity-75">{project.category}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* View Project Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full`}>
                      {project.category}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-4">
                    {project.company}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                    Key Results:
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`} />
                        <span className="text-slate-600 dark:text-slate-400 text-sm">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="card-elevated p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Overall Impact
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Cumulative results achieved across all projects and campaigns
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "250%", label: "Average ROI Increase" },
              { number: "15+", label: "Successful Campaigns" },
              { number: "50+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}  
        <motion.div variants={itemVariants} className="text-center">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Want to See Similar Results?
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Let's discuss how I can help you achieve measurable growth for your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View Full Portfolio
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PortfolioSection
