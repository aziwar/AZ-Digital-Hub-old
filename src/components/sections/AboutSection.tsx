'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CalendarIcon, BriefcaseIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const skills = [
    { name: "Digital Marketing", level: 95 },
    { name: "Social Media Analysis", level: 90 },
    { name: "PPC Campaigns", level: 88 },
    { name: "E-commerce Strategy", level: 92 },
    { name: "SEO/SEM", level: 85 },
    { name: "Data Analysis", level: 87 },
    { name: "IT Consulting", level: 90 },
    { name: "Project Management", level: 88 }
  ]

  const experience = [
    {
      company: "Smart Technology (STSCKW)",
      role: "Digital Solutions Manager",
      period: "May 2022 - Present",
      description: "Leading e-commerce website management and digital marketing campaigns with focus on ROI optimization.",
      icon: BriefcaseIcon
    },
    {
      company: "Dr Scent",
      role: "Digital Marketing Manager", 
      period: "March 2023 - July 2024",
      description: "Implemented comprehensive digital marketing strategies, managing PPC campaigns and content creation.",
      icon: BriefcaseIcon
    },
    {
      company: "Ooredoo Kuwait",
      role: "Social Media Specialist",
      period: "December 2019 - April 2022", 
      description: "Built and executed social media strategies, managed community engagement and brand presence.",
      icon: BriefcaseIcon
    }
  ]

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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A passionate digital marketing professional with extensive IT consulting experience, 
            dedicated to driving measurable business growth through innovative strategies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Personal Story */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                My Journey
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  With over 8 years of experience in digital marketing and IT consulting, 
                  I've had the privilege of working with diverse companies across Kuwait, 
                  from startups to established enterprises.
                </p>
                <p>
                  My unique combination of technical expertise and marketing acumen allows me 
                  to bridge the gap between technology and business objectives, delivering 
                  solutions that drive real ROI.
                </p>
                <p>
                  I specialize in creating comprehensive digital strategies that encompass 
                  e-commerce optimization, social media management, PPC campaigns, and 
                  data-driven decision making.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                            {exp.role}
                          </h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
                Certifications
              </h3>
              <div className="space-y-3">
                {[
                  "Data Analysis with Python",
                  "From Likes to Leads: Interact with Customers Online",
                  "Foundations of Digital Marketing and E-commerce",
                  "Microsoft Professional Program - Data Science"
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                  >
                    <AcademicCapIcon className="w-5 h-5 text-primary" />
                    <span className="text-slate-700 dark:text-slate-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages & Contact Info */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
          <div className="card-elevated p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Experience</h4>
            <p className="text-slate-600 dark:text-slate-400">8+ Years</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Languages</h4>
            <p className="text-slate-600 dark:text-slate-400">English, Arabic</p>
          </div>

          <div className="card-elevated p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BriefcaseIcon className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Location</h4>
            <p className="text-slate-600 dark:text-slate-400">Kuwait City</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutSection
