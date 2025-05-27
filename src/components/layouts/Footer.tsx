'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

const footerLinks = {
  services: [
    { name: 'Digital Marketing', href: '/#services' },
    { name: 'E-commerce Strategy', href: '/#services' },
    { name: 'IT Consulting', href: '/#services' },
    { name: 'PPC Campaigns', href: '/#services' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About Me', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ],
}

const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/in/ahmedziwar', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/ahmedziwar', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:ahmedziwar@gmail.com', label: 'Email' },
  { icon: FaPhone, href: 'tel:+96560672773', label: 'Phone' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-slate-200">Ahmed</span>
                <span className="gradient-text ml-2">Ziwar</span>
              </h3>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Digital Marketing Manager & IT Consultant helping businesses grow through 
              data-driven strategies and innovative technology solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Ahmed Ziwar. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}