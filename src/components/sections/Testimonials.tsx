import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah K.',
    role: 'E-commerce Entrepreneur',
    quote:
      'Ahmed transformed our online store and tripled our conversion rate. His strategies simply work.',
  },
  {
    name: 'David M.',
    role: 'Marketing Director',
    quote:
      'The SEO and analytics insights Ahmed provided were game changers for our lead generation efforts.',
  },
  {
    name: 'Lina R.',
    role: 'Small Business Owner',
    quote:
      'Thanks to Ahmed\'s social media campaigns, our brand engagement has skyrocketed.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from clients who have partnered with Ahmed Ziwar to elevate their digital presence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center"
            >
              <p className="text-gray-300 mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;