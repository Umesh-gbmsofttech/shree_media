import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductsGrid from '../components/sections/ProductsGrid';

// Import category images
import allImg from '../assets/categories/all-printing.jpeg';
import industrialImg from '../assets/categories/industrial-printing.jpeg';
import packagingImg from '../assets/categories/packaging.jpeg';
import giftImg from '../assets/categories/gift-printing.jpeg';
import stickerImg from '../assets/categories/sticker.jpeg';
import boxImg from '../assets/categories/box.jpeg';
import outdoorImg from '../assets/categories/outdoor-printing.jpeg';
import indoorImg from '../assets/categories/indoor-printing.jpeg';

const categories = [
  { name: 'All Printing', img: allImg },
  { name: 'Industrial Printing', img: industrialImg },
  { name: 'Packaging', img: packagingImg },
  { name: 'Gift printing', img: giftImg },
  { name: 'sticker', img: stickerImg },
  { name: 'Box', img: boxImg },
  { name: 'Hospital Printings', img: allImg },
  { name: 'Outdoor printing', img: outdoorImg },
  { name: 'Indoor printing', img: indoorImg },
];

const Categories = ({ activeCategory, setActiveCategory, searchQuery }) => {
  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full min-h-screen"
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="mb-12">
          <h1 className="text-[24px] md:text-[22px] font-bold mb-8 !font-open-sans !text-section-heading flex items-center gap-2">
            <ChevronRight className="text-brand-blue w-8 h-8 stroke-[3px]" />
            Printing Categories
          </h1>

          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 md:gap-4 pb-2 -mx-2 px-2 justify-between">
            { categories.map((cat) => (
              <button
                key={ cat.name }
                onClick={ () => handleCategoryClick(cat.name) }
                className={ `flex flex-col items-center group transition-all duration-500 ease-out flex-shrink-0 ${activeCategory === cat.name ? '' : ''
                  }` }
              >
                <div className={ `w-24 h-24 rounded-2xl mb-3 overflow-hidden flex items-center justify-center bg-white transition-all duration-500 ease-out shadow-md ${activeCategory === cat.name ? 'shadow-xl ring-2 ring-brand-blue/20' : 'group-hover:shadow-xl'
                  }` }>
                  <img
                    src={ cat.img }
                    alt={ cat.name }
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <p className={ `w-24 text-[14px] font-bold text-center leading-[20px] transition-colors duration-500 !font-open-sans ${activeCategory === cat.name ? '!text-brand-blue' : 'text-[#1F2937] group-hover:!text-brand-blue'
                  }` }>
                  { cat.name }
                </p>
              </button>
            )) }
          </div>
        </div>

        <ProductsGrid
          activeCategory={ activeCategory }
          searchQuery={ searchQuery }
        />
      </div>
    </motion.div>
  );
};

export default Categories;
