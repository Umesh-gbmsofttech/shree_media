import React from 'react';
import ContactHero from '../components/sections/ContactHero';
import OfficeLocations from '../components/sections/OfficeLocations';
import ContactFormSection from '../components/sections/ContactFormSection';

const Contact = () => {
  return (
    <main > 
      <ContactHero />
      <OfficeLocations />
      <ContactFormSection />
    </main>
  );
};

export default Contact;