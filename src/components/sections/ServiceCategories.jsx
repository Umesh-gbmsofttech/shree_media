import React from 'react';
import standy from '../../assets/standy.avif';
import letterhead from '../../assets/letterhead.jpg';
import flyer from '../../assets/flyer.webp';
import banner from '../../assets/banner1.jpg';
import idCard from '../../assets/idcard.webp';
import stamps from '../../assets/stamp.webp';
import certificate from '../../assets/certificate.jpg';
import businesscard from '../../assets/businesscard.jpg';

const categories = [
  { id: 1, name: 'all printing', image: standy, filter: 'all printing' },
  { id: 2, name: 'Packaging printing', image: letterhead, filter: 'Packaging printing' },
  { id: 3, name: 'Gift printing', image: flyer, filter: 'Gift printing' },
  { id: 4, name: 'Outdoor printing', image: banner, filter: 'Outdoor printing' },
  { id: 5, name: 'indoor printing', image: idCard, filter: 'indoor printing' },
  { id: 6, name: 'Industrial Printing', image: businesscard, filter: 'Industrial Printing' },
  { id: 7, name: 'sticker', image: stamps, filter: 'sticker' },
  { id: 8, name: 'box', image: certificate, filter: 'box' },
];

const ServiceCategories = ({ activeFilter, onFilterChange }) => {
  return (
    <section className="pb-10 md:pb-12 bg-white">
      <div className="container-shell">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-3 md:gap-4">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.filter;
            return (
              <button
                key={cat.id}
                onClick={() => (onFilterChange ? onFilterChange(cat.filter, { scroll: true }) : null)}
                className={`group text-left rounded-xl border p-2.5 md:p-3 transition-all ${isActive ? 'border-[#3884f5] shadow-[0_8px_20px_rgba(56,132,245,0.18)]' : 'border-blue-100 hover:border-[#3884f5]/50'}`}
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-white">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className={`mt-2 text-[11px] md:text-[12px] font-bold leading-tight ${isActive ? 'text-[#3884f5]' : 'text-slate-700 group-hover:text-[#3884f5]'}`}>
                  {cat.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
