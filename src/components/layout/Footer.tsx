'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaHeart } from 'react-icons/fa'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/ahmedziwar",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: FaEnvelope,
      href: "mailto:ahmedziwar@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    },
    {
      icon: FaPhone,
      href: "tel:+96560672773",
      label: "Phone",
      color: "hover:text-green-500"
    },
    {
      icon: FaGithub,
      href: "#",
      label: "GitHub",
      color: "hover:text-gray-600"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    "Digital Marketing Strategy",
    "E-commerce Solutions", 
    "PPC & Advertising",
    "IT Consulting",
    "Social Media Management",
    "Business Intelligence"
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AZ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ahmed Ziwar</h3>
                  <p className="text-slate-400 text-sm">Digital Hub</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Digital Marketing Manager & IT Consultant specializing in ROI-driven campaigns, 
                e-commerce solutions, and strategic business growth.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-slate-400 text-sm hover:text-white transition-colors duration-200 cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:ahmedziwar@gmail.com"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    ahmedziwar@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-primary" />
                  <a 
                    href="tel:+96560672773"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    +965 60672773
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-400">
                    Kuwait City, Kuwait
                  </span>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium text-sm">Available for new projects</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Response time: Within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-slate-400 text-sm"
              >
                <span>© {currentYear} Ahmed Ziwar. Made with</span>
                <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in Kuwait</span>
              </div>

              <div className="flex items-center space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms of Service
                </motion.a>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-200"
                aria-label="Back to top"
              >
                <ArrowUpIcon className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
      </div>
    </footer>
  )
}

export default Footer
