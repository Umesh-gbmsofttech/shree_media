import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Info, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { products as projects, filters } from '../../data/products';

export default function ProjectShowcase({ activeFilter = 'All', onFilterChange }) {
  const navigate = useNavigate();
  const [ selectedProduct, setSelectedProduct ] = useState(null);

  const normalized = activeFilter.trim().toLowerCase();
  const filteredProjects =
    normalized === 'all' || normalized === 'all printing'
      ? projects
      : projects.filter((item) => {
        const category = item.category.toLowerCase();
        if (normalized === 'packaging printing') return category === 'packaging printing';
        if (normalized === 'gift printing') return category === 'gift printing';
        if (normalized === 'outdoor printing') return category === 'outdoor printing';
        if (normalized === 'indoor printing') return category === 'indoor printing';
        if (normalized === 'industrial printing') return category === 'industrial printing';
        if (normalized === 'sticker') return category === 'packaging printing';
        if (normalized === 'box') return category === 'packaging printing';
        return category === normalized;
      });

  const formatPrice = (value) => {
    const amount = Number(String(value).replace(/[^\d.]/g, ''));
    if (Number.isNaN(amount)) return value;
    return `₹${Math.round(amount).toLocaleString('en-IN')}`;
  };

  return (
    <section id="filtered-items" className="py-14 md:py-16 bg-white relative">
      <div className="container-shell">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-5">
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#3884f5]">Our solutions</p>
            <h2 className="text-[34px] md:text-[40px] font-black leading-tight text-slate-900 tracking-tight mt-2">Printing Solutions</h2>
            <p className="text-slate-500 text-sm mt-2">Professional quality prints with fast turnaround.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            { filters.map((filter) => (
              <button
                key={ filter }
                onClick={ () => (onFilterChange ? onFilterChange(filter, { scroll: false }) : null) }
                className={ `px-5 py-2.5 rounded-full border text-xs font-bold whitespace-nowrap transition-colors ${activeFilter === filter
                    ? 'bg-[#3884f5] border-[#3884f5] text-white'
                    : 'bg-white border-blue-200 text-slate-600 hover:border-[#3884f5] hover:text-[#3884f5]'
                  }` }
              >
                { filter }
              </button>
            )) }
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            { filteredProjects.map((item) => (
              <motion.div
                layout
                key={ item.id }
                initial={ { opacity: 0, scale: 0.96 } }
                animate={ { opacity: 1, scale: 1 } }
                exit={ { opacity: 0, scale: 0.96 } }
                whileHover={ { y: -6 } }
                className="bg-white rounded-xl border border-blue-100 overflow-hidden group transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                <button className="relative aspect-[4/3] p-3 bg-white flex items-center justify-center overflow-hidden" onClick={ () => setSelectedProduct(item) }>
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-[#3884f5] text-white shadow">
                    { item.tag }
                  </span>
                  <img src={ item.img } alt={ item.title } className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-xs font-semibold bg-white rounded-full px-2 py-1 text-slate-700 border border-blue-100">
                    <Star size={ 12 } className="text-[#3884f5] fill-[#3884f5]" /> 4.9
                  </div>
                  <div className="absolute inset-0 bg-[#3884f5]/0 group-hover:bg-[#3884f5]/10 transition-colors flex items-center justify-center">
                    <Info className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" />
                  </div>
                </button>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-800 text-[14px] leading-tight min-h-[38px] line-clamp-2 group-hover:text-[#3884f5] transition-colors">
                    { item.title }
                  </h3>

                  <div className="mt-auto pt-4 border-t border-blue-50">
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[#3884f5] font-semibold text-[13px] leading-relaxed">
                        Starting from { item.qty } for { formatPrice(item.price) }
                      </p>
                      <motion.button onClick={ () => setSelectedProduct(item) } whileTap={ { scale: 0.95 } } className="w-10 h-10 rounded-full bg-[#3884f5] text-white grid place-items-center">
                        <ArrowRight size={ 14 } />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )) }
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        { selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={ { opacity: 0 } } animate={ { opacity: 1 } } exit={ { opacity: 0 } } onClick={ () => setSelectedProduct(null) } className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            <motion.div initial={ { scale: 0.94, opacity: 0, y: 20 } } animate={ { scale: 1, opacity: 1, y: 0 } } exit={ { scale: 0.94, opacity: 0, y: 20 } } className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <button onClick={ () => setSelectedProduct(null) } className="absolute top-5 right-5 z-20 w-10 h-10 bg-white rounded-full grid place-items-center shadow text-slate-500"><X size={ 20 } /></button>

              <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
                <img src={ selectedProduct.img } alt={ selectedProduct.title } className="w-full h-auto object-contain rounded-xl" />
              </div>

              <div className="md:w-1/2 p-8 flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3884f5] bg-[#3884f5]/10 px-3 py-1 rounded-full mb-4 inline-block">{ selectedProduct.category }</span>
                <h2 className="text-2xl font-black text-slate-900 mb-3">{ selectedProduct.title }</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{ selectedProduct.description }</p>

                <div className="mt-auto space-y-5 pt-6">
                  <div className="flex items-center justify-between border-b border-blue-100 pb-4">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pricing starts from</p>
                      <p className="text-2xl font-black text-[#3884f5]">{ formatPrice(selectedProduct.price) }</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Starting from</p>
                      <p className="text-lg font-bold text-slate-900">{ selectedProduct.qty }</p>
                    </div>
                  </div>

                  <motion.button whileTap={ { scale: 0.98 } } onClick={ () => navigate('/contact') } className="w-full py-3.5 bg-[#3884f5] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-colors flex items-center justify-center gap-2">
                    Contact for Quote <ArrowRight size={ 16 } />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        ) }
      </AnimatePresence>

      <style>{ `.no-scrollbar::-webkit-scrollbar { display: none; }` }</style>
    </section>
  );
}
