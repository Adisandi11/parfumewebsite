import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-navy-700 rounded-full blur-3xl mix-blend-multiply filter animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-navy-800 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-gold-600/20 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="text-gold-500 font-semibold tracking-[0.2em] uppercase mb-4 block animate-fade-in-up">
          Welcome to Velixir
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-100 font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          Unveil Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            True Essence
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          Discover a fragrance collection that speaks before you do. 
          Bold, mysterious, and undeniably you. 
          Step into a world where scent defines character.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a 
            href="#products"
            className="px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded hover:bg-gold-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-gold-500/20"
          >
            Explore Collection
          </a>
          <a 
            href="https://wa.me/6285862639161?text=Hello%20Velixir%2C%20I%20want%20to%20know%20more%20about%20your%20perfumes."
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gold-500 text-gold-500 font-bold rounded hover:bg-gold-500/10 transition-all duration-300"
          >
            Consult Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;