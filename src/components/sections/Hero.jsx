import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';

// Import hero images
import cardOffer from '../../assets/hero/card-offer.jpeg';
import shirtOffer from '../../assets/hero/shirt-offer.jpeg';
import standeeOffer from '../../assets/hero/standee-ffer.jpeg';

const Hero = () => {
  const whatsappUrl = "https://wa.me/917517529133";

  const images = [
    { src: cardOffer, alt: 'Visiting Cards Special Offer' },
    { src: standeeOffer, alt: 'Roll Up Standy Offer' },
    { src: shirtOffer, alt: 'T-Shirt Printing Offer' },
  ];

  const ActionButton = () => (
    <a
      href={ whatsappUrl }
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
    >
      <button className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        Let's talk
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </a>
  );

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gray-50"
    >
      {/* Mobile Carousel */ }
      <div className="md:hidden">
        <Swiper
          modules={ [ Autoplay ] }
          spaceBetween={ 0 }
          slidesPerView={ 1 }
          autoplay={ { delay: 3000, disableOnInteraction: false } }
          loop={ true }
          className="w-full h-auto"
        >
          { images.map((img, index) => (
            <SwiperSlide key={ index }>
              <div className="relative group">
                <img
                  src={ img.src }
                  alt={ img.alt }
                  className="w-full h-auto object-contain border border-gray-400"
                />
                <a
                  href={ whatsappUrl }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    Let's talk
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </SwiperSlide>
          )) }
        </Swiper>
      </div>

      {/* Desktop/Tablet Grid */ }
      <div className="hidden md:block container mx-auto px-6 md:px-12 py-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Main Large Offer */ }
          <div className="col-span-8 relative group">
            <img
              src={ cardOffer }
              alt="Visiting Cards Special Offer"
              className="w-full h-full object-cover rounded-3xl shadow-md border border-gray-400"
            />
            <ActionButton />
          </div>

          {/* Side Offers Stacked */ }
          <div className="col-span-4 flex flex-col gap-4">
            <div className="flex-1 relative group">
              <img
                src={ standeeOffer }
                alt="Roll Up Standy"
                className="w-full h-full object-cover rounded-3xl shadow-md border border-gray-400"
              />
              <ActionButton />
            </div>
            <div className="flex-1 relative group">
              <img
                src={ shirtOffer }
                alt="T-Shirt Printing"
                className="w-full h-full object-cover rounded-3xl shadow-md border border-gray-400"
              />
              <ActionButton />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
