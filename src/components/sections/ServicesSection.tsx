'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ChartBarIcon, 
  ComputerDesktopIcon, 
  MegaphoneIcon, 
  ShoppingCartIcon,
  CogIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: MegaphoneIcon,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business objectives, focusing on ROI-driven campaigns and measurable results.",
      features: ["Campaign Strategy", "Content Planning", "Brand Positioning", "Market Analysis"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: ShoppingCartIcon,
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce website management, optimization, and growth strategies to maximize online sales and customer experience.",
      features: ["Website Optimization", "Conversion Rate Optimization", "User Experience Design", "Sales Funnel Development"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: ChartBarIcon,
      title: "PPC & Advertising",
      description: "Expert management of Google Ads, social media advertising, and other PPC platforms to maximize visibility and ROI.",
      features: ["Google Ads Management", "Social Media Ads", "Campaign Optimization", "Performance Tracking"], 
      color: "from-orange-500 to-red-600"
    },
    {
      icon: ComputerDesktopIcon,
      title: "IT Consulting",
      description: "Strategic IT consulting services including system analysis, technology implementation, and digital transformation guidance.",
      features: ["System Analysis", "Technology Planning", "Digital Transformation", "Process Optimization"],
      color: "from-indigo-500 to-blue-600"  
    },
    {
      icon: CogIcon,
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, community management, and engagement optimization across all platforms.",
      features: ["Content Creation", "Community Management", "Social Strategy", "Engagement Analytics"],
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: LightBulbIcon,
      title: "Business Intelligence",
      description: "Data-driven insights, performance analytics, and strategic recommendations to drive informed business decisions.",
      features: ["Data Analysis", "Performance Metrics", "Strategic Insights", "ROI Reporting"],
      color: "from-yellow-500 to-orange-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to drive growth, optimize performance, 
            and deliver measurable results for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="card-elevated p-8 hover-lift group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className="card-elevated p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              My Process
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A systematic approach to deliver exceptional results for every project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business goals, target audience, and current challenges"
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Developing a comprehensive strategy tailored to your specific needs and objectives"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Executing the strategy with precision, monitoring progress, and making adjustments"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous improvement based on data analysis and performance metrics"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {process.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Grow Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how I can help you achieve your digital marketing goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-200"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ServicesSection
