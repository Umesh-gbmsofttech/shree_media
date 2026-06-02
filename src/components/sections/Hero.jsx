import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// Import hero images
import cardOffer from '../../assets/hero/card-offer.jpeg';
import shirtOffer from '../../assets/hero/shirt-offer.jpeg';
import standeeOffer from '../../assets/hero/standee-ffer.jpeg';

const Hero = () => {
  const images = [
    { src: cardOffer, alt: 'Visiting Cards Special Offer' },
    { src: standeeOffer, alt: 'Roll Up Standy Offer' },
    { src: shirtOffer, alt: 'T-Shirt Printing Offer' },
  ];

  return (
    <section className="w-full bg-gray-50">
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
              <img
                src={ img.src }
                alt={ img.alt }
                className="w-full h-auto object-contain border border-gray-400"
              />
            </SwiperSlide>
          )) }
        </Swiper>
      </div>

      {/* Desktop/Tablet Grid */ }
      <div className="hidden md:block container mx-auto px-6 md:px-12 py-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Main Large Offer */ }
          <div className="col-span-8">
            <img
              src={ cardOffer }
              alt="Visiting Cards Special Offer"
              className="w-full h-full object-cover rounded-3xl shadow-md border border-gray-400"
            />
          </div>

          {/* Side Offers Stacked */ }
          <div className="col-span-4 flex flex-col gap-4">
            <div className="flex-1 relative">
              <img
                src={ standeeOffer }
                alt="Roll Up Standy"
                className="w-full h-full object-cover rounded-3xl shadow-md border border-gray-400"
              />
            </div>
            <div className="flex-1 relative">
              <img
                src={ shirtOffer }
                alt="T-Shirt Printing"
                className="w-full h-full object-cover rounded-3xl shadow-md border border-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
