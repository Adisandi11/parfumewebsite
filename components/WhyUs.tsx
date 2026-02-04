import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-navy-800 p-8 rounded-lg border border-navy-700 hover:border-gold-500/50 transition-colors duration-300 group">
    <div className="w-14 h-14 bg-navy-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <i className={`fa-solid ${icon} text-2xl text-gold-500`}></i>
    </div>
    <h3 className="text-xl font-serif text-slate-100 font-bold mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-4">
            Why Choose Velixir?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don't just sell perfumes; we craft identities. Here is why discerning individuals choose our scents to tell their story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="fa-flask" 
            title="Master Craftsmanship" 
            description="Created by world-renowned perfumers using rare ingredients sourced globally to ensure a unique olfactory experience."
          />
          <FeatureCard 
            icon="fa-fingerprint" 
            title="Distinct Character" 
            description="Every bottle contains a personality. Our formulas are designed to react with your skin chemistry, creating a scent that is uniquely yours."
          />
          <FeatureCard 
            icon="fa-hourglass-half" 
            title="Lasting Impression" 
            description="Concentrated formulations ensure your presence lingers. A high oil concentration means the scent stays with you from dawn to dusk."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;