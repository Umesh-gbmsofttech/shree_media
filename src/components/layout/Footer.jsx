import React from 'react';
import ContactBar from './ContactBar';

const Footer = () => {
  return (
    <footer className="mt-auto">
      <ContactBar isFooter />
      <div className="bg-brand-blue text-white py-4 border-t border-white/20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/ShreeMediaSolutions.png"
              alt="Shree Media Solutions"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-lg font-bold opacity-90 !text-white">
            &copy; { new Date().getFullYear() } All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
