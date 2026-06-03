import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Import category images
import allImg from '../../assets/categories/all-printing.jpeg';
import industrialImg from '../../assets/categories/industrial-printing.jpeg';
import packagingImg from '../../assets/categories/packaging.jpeg';
import giftImg from '../../assets/categories/gift-printing.jpeg';
import stickerImg from '../../assets/categories/sticker.jpeg';
import boxImg from '../../assets/categories/box.jpeg';
import outdoorImg from '../../assets/categories/outdoor-printing.jpeg';
import indoorImg from '../../assets/categories/indoor-printing.jpeg';

const categories = [
  { name: 'All Printing', img: allImg },
  { name: 'Industrial Printing', img: industrialImg },
  { name: 'Packaging', img: packagingImg },
  { name: 'Gift printing', img: giftImg },
  { name: 'sticker', img: stickerImg },
  { name: 'Box', img: boxImg },
  { name: 'Outdoor printing', img: outdoorImg },
  { name: 'Indoor printing', img: indoorImg },
];

const CategoryGrid = ({ activeCategory, setActiveCategory }) => {
  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mb-12 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-bold !font-open-sans leading-[28px] !text-section-heading flex items-center gap-2">
          <ChevronRight className="text-brand-blue w-6 h-6 stroke-[3px]" />
          Printing Categories
        </h2>
        <Link to="/categories" className="text-sm font-bold !text-brand-blue hover:underline">View All &rarr;</Link>
      </div>

      {/* Grid layout with 8 columns on large screens */ }
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
        { categories.map((cat) => (
          <button
            key={ cat.name }
            onClick={ () => handleCategoryClick(cat.name) }
            className={ `flex flex-col items-center group transition-all duration-500 ease-out mx-auto ${activeCategory === cat.name ? '' : 'opacity-100'
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
  );
};

export default CategoryGrid;
