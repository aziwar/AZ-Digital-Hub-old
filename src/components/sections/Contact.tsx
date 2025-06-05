'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const Contact: React.FC = () => {
  const schema = {
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
  } as const;

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(z.object(schema)) });

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    reset();
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "ahmedziwar@gmail.com",
      link: "mailto:ahmedziwar@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+965 60672773",
      link: "tel:+96560672773"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Kuwait City, Kuwait",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/ahmedziwar",
      link: "https://www.linkedin.com/in/ahmedziwar"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let&apos;s discuss how I can help transform your digital presence and drive business growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register('name')}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register('email')}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  {...register('subject')}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  {...register('message')}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
              {isSubmitSuccessful && (
                <p className="mt-4 text-green-500" role="status">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of the following channels. 
                I typically respond within 24-48 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  <div className="text-3xl">{info.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-400">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 bg-blue-600/10 border border-blue-600/30 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">Office Hours</h4>
              <p className="text-gray-300">
                Sunday - Thursday: 9:00 AM - 6:00 PM (Kuwait Time)<br />
                Friday - Saturday: Available for urgent matters
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;