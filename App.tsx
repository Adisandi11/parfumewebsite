import React from 'react';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-navy-900 min-h-screen text-slate-300 font-sans selection:bg-gold-500 selection:text-white">
      {/* Navigation Overlay */}
      <nav className="absolute top-0 w-full z-50 py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-white tracking-widest">VELIXIR</div>
          <div className="hidden md:flex gap-8">
            <a href="#why-us" className="text-slate-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider font-semibold">Philosophy</a>
            <a href="#products" className="text-slate-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider font-semibold">Collection</a>
          </div>
        </div>
      </nav>

      <Hero />
      <WhyUs />
      <ProductList />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;