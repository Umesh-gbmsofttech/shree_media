import React from 'react';

// Asset Imports
import standy from '../../assets/standy.avif';
import letterhead from '../../assets/letterhead.jpg';
import flyer from '../../assets/flyer.webp';
import banner from '../../assets/banner1.jpg';
import idCard from '../../assets/idcard.webp'; 
import stamps from '../../assets/stamp.webp';
import certificate from '../../assets/certificate.jpg';
import businesscard from '../../assets/businesscard.jpg';
const categories = [
  { id: 1, name: 'Industrial Printing', image: standy, filter: 'Industrial Printing' },
  { id: 2, name: 'Packaging Printing', image: letterhead, filter: 'Packaging Printing' },
  { id: 3, name: 'Gift Printing', image: flyer, filter: 'Gift Printing' },
  { id: 4, name: 'Outdoor Printing', image: banner, filter: 'Outdoor Printing' },
  { id: 5, name: 'Indoor Printing', image: idCard, filter: 'Indoor Printing' },
  { id: 6, name: 'Sticker / Label', image: stamps, filter: 'Packaging Printing' },
  { id: 7, name: 'Pouch Printing', image: certificate, filter: 'Packaging Printing' },
  { id: 8, name: 'Business Stationery', image: businesscard, filter: 'Industrial Printing' },
];

const ServiceCategories = ({ activeFilter, onFilterChange }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-10 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => (onFilterChange ? onFilterChange(cat.filter) : null)}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Circular Image Container */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ease-in-out bg-slate-50">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Category Name */}
              <span className={`mt-4 text-[13px] font-bold tracking-tight transition-colors text-center ${activeFilter === cat.filter ? 'text-blue-600' : 'text-[#2d3a54] group-hover:text-blue-600'}`}>
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
