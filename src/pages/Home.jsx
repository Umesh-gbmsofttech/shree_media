import React, { useState, useEffect } from 'react'; // Added useEffect here
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesSection from '../components/sections/ServicesSection';
import Testimonials from '../components/sections/Testimonials';
import ConsultationModal from '../components/sections/ConsultationModal'; 
import CTASection from '../components/sections/CTASection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-popup logic: Triggers after 30 seconds of landing on the page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 30000); 

    // Cleanup the timer if the user leaves the page before 30s is reached
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* We pass onContactClick to these sections so the buttons 
          inside them can also trigger the popup manually.
      */}
      <Hero onContactClick={openModal} />
      
      <AboutPreview />
      
      <ServicesSection />
      
      <Testimonials />
      
      <CTASection/>

      {/* The Modal/Popup component */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
}