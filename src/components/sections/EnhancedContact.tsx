'use client';

import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

const EnhancedContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project_type: '',
    budget_range: '',
    message: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration with actual API keys
      await emailjs.send(
        'service_k0o6pjb',        // Service ID
        'J2bpzRucK3c2SkZ8O',      // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          project_type: formData.project_type,
          budget_range: formData.budget_range,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Ahmed Ziwar'
        },
        'vFeXiuswX_-hBd6vM12zz'  // Public Key
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', company: '', project_type: '', 
        budget_range: '', message: '', phone: ''
      });
    } catch (_error) {
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'E-commerce Development',
    'Digital Marketing Campaign',
    'Website Redesign',
    'SEO Optimization',
    'Social Media Strategy',
    'IT Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under 5,000 KWD',
    '5,000 - 15,000 KWD',
    '15,000 - 50,000 KWD',
    '50,000+ KWD',
    'Enterprise (Custom Quote)'
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-purple-900/30">
      <div className="max-w-7xl mx-auto">
        
        {/* URGENCY HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-red-600/20 backdrop-blur border border-red-400/30 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-bold">⚡ Only 3 Strategic Consultation Slots Available This Month</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Command</span> Your Market?
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-gray-300 mb-6">
              Join 200+ Kuwait businesses that transformed their digital presence with strategic leadership
            </p>
            
            {/* SOCIAL PROOF TICKER */}
            <div className="flex justify-center items-center space-x-8 text-sm text-purple-300">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>24-48 hour response</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Free strategy audit</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>ROI guarantee</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* ENHANCED CONTACT FORM */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Start Your Strategic Session</h3>
              <div className="text-right">
                <div className="text-sm text-purple-300">Usually $2,000 KWD</div>
                <div className="text-lg font-bold text-green-400">FREE Audit</div>
              </div>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                <h4 className="text-green-400 font-bold mb-2">🎯 Strategic Session Booked!</h4>
                <p className="text-green-300 text-sm">Ahmed will personally contact you within 24 hours with your free strategic audit results.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 text-sm">Failed to submit. Please try WhatsApp contact below or email directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Ahmed Al-Rashid"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="ahmed@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Al-Rashid Trading Co."
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="+965 XXXX XXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project_type" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget_range" className="block text-sm font-medium text-gray-300 mb-2">
                    Investment Range *
                  </label>
                  <select
                    id="budget_range"
                    name="budget_range"
                    value={formData.budget_range}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Strategic Objectives *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Describe your current challenges and business goals..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? '⚡ Booking Your Strategic Session...' : '🚀 Book FREE Strategic Session (Worth 2,000 KWD)'}
              </button>
            </form>
          </div>

          {/* CONTACT METHODS + TRUST SIGNALS */}
          <div className="space-y-8">
            
            {/* INSTANT CONTACT */}
            <div className="bg-gradient-to-r from-green-600/20 to-green-800/20 backdrop-blur-md border border-green-500/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-3">💬</span>
                Instant Response Available
              </h3>
              <p className="text-gray-300 mb-6">
                For urgent projects or immediate consultation, contact Ahmed directly via WhatsApp.
              </p>
              <a
                href="https://wa.me/96560672773?text=Hi Ahmed, I'm interested in strategic digital marketing consultation for my business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <span className="mr-2">📱</span>
                WhatsApp: +965 6067 2773
              </a>
            </div>

            {/* TRUST SIGNALS */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">✅ Why Kuwait Businesses Choose Ahmed</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">🏆</span>
                  <span><strong>20+ Years</strong> of proven digital marketing excellence in Kuwait & GCC</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">💼</span>
                  <span><strong>200+ Local Businesses</strong> transformed and scaled successfully</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">🎯</span>
                  <span><strong>300% Average ROI</strong> improvement within first 6 months</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">🌟</span>
                  <span><strong>ENTJ Leadership Style</strong> - Strategic, decisive, results-driven</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">🔒</span>
                  <span><strong>100% Money-Back Guarantee</strong> if no measurable results in 90 days</span>
                </div>
              </div>
            </div>

            {/* AVAILABILITY CALENDAR */}
            <div className="bg-purple-600/10 border border-purple-600/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="mr-2">⏰</span>
                Limited Strategic Sessions
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">January 2025</span>
                  <span className="text-red-400 font-bold">3 slots remaining</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">February 2025</span>
                  <span className="text-yellow-400 font-bold">Waitlist only</span>
                </div>
                <p className="text-purple-300 text-xs mt-4">
                  ⚡ High demand due to Ramadan preparation projects. Book now to secure your strategic consultation.
                </p>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Other Contact Methods</h4>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg">
                <span className="text-2xl">📧</span>
                <div>
                  <h5 className="text-sm font-medium text-gray-400">Email</h5>
                  <a href="mailto:ahmedziwar@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    ahmedziwar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg">
                <span className="text-2xl">💼</span>
                <div>
                  <h5 className="text-sm font-medium text-gray-400">LinkedIn</h5>
                  <a 
                    href="https://www.linkedin.com/in/ahmedziwar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/ahmedziwar
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg">
                <span className="text-2xl">📍</span>
                <div>
                  <h5 className="text-sm font-medium text-gray-400">Location</h5>
                  <span className="text-white">Kuwait City, Kuwait</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FINAL URGENCY CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-red-900/30 to-purple-900/30 backdrop-blur-md border border-red-500/30 rounded-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            ⚡ Don&apos;t Miss Your Strategic Advantage
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            While your competitors struggle with outdated marketing, secure your spot for strategic digital transformation that delivers results.
          </p>
          <div className="text-lg text-red-300 font-bold mb-4">
            ⏰ Only 3 consultation slots remaining this month
          </div>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Secure My Strategic Session Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;