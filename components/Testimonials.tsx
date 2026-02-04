import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Fashion Blogger",
    quote: "Velixir isn't just a perfume; it's an accessory. I get asked what I'm wearing every single time I step out. The 'Midnight Bloom' is simply intoxicating.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Architect",
    quote: "I was looking for something masculine yet subtle. Velixir struck the perfect balance. It lasts all day without being overpowering. Truly premium quality.",
    rating: 5
  },
  {
    id: 3,
    name: "Amanda Roe",
    role: "CEO",
    quote: "The packaging, the scent profile, the longevity—everything screams luxury. It gives me the confidence boost I need for my board meetings.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-4">
            Loved by Thousands
          </h2>
          <div className="flex justify-center gap-1 text-gold-500 mb-4">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p className="text-slate-400">Join the community of those who have found their signature scent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-navy-800 p-8 rounded-xl relative">
              <div className="absolute top-6 right-8 text-6xl text-navy-700 font-serif opacity-50">"</div>
              <p className="text-slate-300 italic mb-6 relative z-10 text-lg">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center text-navy-900 font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gold-500 text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;