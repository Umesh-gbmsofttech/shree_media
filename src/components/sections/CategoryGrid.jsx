import React from 'react';

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
      <div className="flex justify-between items-center mb-6 px-1">
        <h2 className="text-xl font-bold uppercase tracking-wide !text-brand-text">Printing Categories</h2>
        <button className="text-sm font-bold !text-brand-blue hover:underline">View All &rarr;</button>
      </div>

      {/* Horizontal row with padding to prevent cutting */ }
      <div className="flex flex-nowrap overflow-x-auto pb-6 gap-4 md:gap-8 scrollbar-hide snap-x snap-mandatory px-6 md:px-12 scroll-smooth">
        { categories.map((cat) => (
          <button
            key={ cat.name }
            onClick={ () => handleCategoryClick(cat.name) }
            className={ `flex-shrink-0 flex flex-col items-center group transition-all w-28 md:w-28 snap-center ${activeCategory === cat.name ? 'scale-105' : 'opacity-100 hover:opacity-95'
              }` }
          >
            <div className={ `w-full aspect-square rounded-2xl border-2 mb-3 overflow-hidden flex items-center justify-center bg-white transition-all shadow-sm ${activeCategory === cat.name ? 'border-brand-blue shadow-md' : 'border-gray-100 group-hover:border-brand-blue/30'
              }` }>
              <img
                src={ cat.img }
                alt={ cat.name }
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className={ `text-[10px] md:text-xs font-bold text-center leading-tight transition-colors uppercase tracking-wider ${activeCategory === cat.name ? '!text-brand-blue' : '!text-brand-text group-hover:!text-brand-blue'
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
