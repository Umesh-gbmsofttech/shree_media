import React from 'react';
import whatsappIcon from '../../assets/whatsapp.png';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/917517529133"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] transition-transform hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] drop-shadow-xl"
      />
    </a>
  );
};

export default WhatsAppWidget;
