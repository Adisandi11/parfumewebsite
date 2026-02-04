import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gold-600 z-0">
         <div className="absolute inset-0 bg-navy-900 opacity-80 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Ready to Make a Statement?
        </h2>
        <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
          Don't let your presence go unnoticed. Consult with our fragrance specialists today and find the scent that defines you.
        </p>
        <a 
          href="https://wa.me/6285862639161?text=Hi%20Velixir%2C%20I%27m%20ready%20to%20find%20my%20signature%20scent."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy-900 font-bold rounded-full hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          <i className="fa-brands fa-whatsapp text-2xl text-green-600"></i>
          <span className="text-lg">Chat on WhatsApp</span>
        </a>
        <p className="mt-4 text-sm text-slate-400 opacity-75">
          Fast response 09:00 - 21:00 WIB
        </p>
      </div>
    </section>
  );
};

export default CTA;