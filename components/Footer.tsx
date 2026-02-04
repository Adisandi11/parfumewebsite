import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 py-12 border-t border-navy-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">VELIXIR</h3>
            <p className="text-xs max-w-xs">
              Defining character through the art of perfumery.
            </p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-gold-500 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" className="hover:text-gold-500 transition-colors"><i className="fa-brands fa-tiktok text-xl"></i></a>
            <a href="#" className="hover:text-gold-500 transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-navy-900 text-center md:flex md:justify-between">
          <p>&copy; {new Date().getFullYear()} Velixir. All rights reserved.</p>
          <div className="flex gap-4 justify-center mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;