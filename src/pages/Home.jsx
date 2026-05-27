import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import AboutPreview from '../components/sections/AboutPreview';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-0 h-screen overflow-hidden">
        <Hero />
      </div>

      <div className="relative z-10 bg-white">
        <ServicesSection />
        <AboutPreview />
        <Testimonials />
        <CTASection />
      </div>
    </div>
  );
}
