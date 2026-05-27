import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, X } from 'lucide-react';

import standy from '../../assets/standy.avif';
import letterhead from '../../assets/letterhead.jpg';
import flyer from '../../assets/flyer.webp';
import banner from '../../assets/banner1.jpg';
import idCard from '../../assets/idcard.webp';
import stamps from '../../assets/stamp.webp';
import certificate from '../../assets/certificate.jpg';
import businesscard from '../../assets/businesscard.jpg';

const categories = [
  { title: 'all printing', img: standy },
  { title: 'Packaging printing', img: letterhead },
  { title: 'Gift printing', img: flyer },
  { title: 'Outdoor printing', img: banner },
  { title: 'indoor printing', img: idCard },
  { title: 'Industrial Printing', img: businesscard },
  { title: 'sticker', img: stamps },
  { title: 'box', img: certificate },
];

const topSellers = [
  { id: 1, title: 'Premium Letterheads', price: 'INR 900', tag: 'Featured', img: letterhead, rating: 4.8 },
  { id: 2, title: 'Business Card Pack', price: 'INR 500', tag: 'Popular', img: businesscard, rating: 5.0 },
  { id: 3, title: 'Stamp Set', price: 'INR 350', tag: 'Professional', img: stamps, rating: 4.7 },
  { id: 4, title: 'PVC ID Cards', price: 'INR 150', tag: 'Durable', img: idCard, rating: 4.9 },
  { id: 5, title: 'Roll-Up Standees', price: 'INR 1200', tag: 'Top Rated', img: standy, rating: 4.6 },
  { id: 6, title: 'Certificate Print', price: 'INR 250', tag: 'Premium', img: certificate, rating: 5.0 },
];

export default function PrintingMarketplace() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (title) => {
    navigate(`/services?category=${encodeURIComponent(title)}&scroll=items`);
  };

  const formatPrice = (value) => {
    const amount = Number(String(value).replace(/[^\d.]/g, ''));
    if (Number.isNaN(amount)) return value;
    return `₹${Math.round(amount).toLocaleString('en-IN')}`;
  };

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#3884f5]">Our categories</p>
            <h3 className="text-[34px] md:text-[40px] font-black leading-tight text-slate-900 mt-2">Explore Printing Categories</h3>
          </div>
          <Link to="/services" className="text-sm font-bold text-slate-700 hover:text-[#3884f5]">Explore all</Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-5 mb-12">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => handleCategoryClick(cat.title)}
              className="group text-center"
            >
              <div className="aspect-square rounded-xl p-2.5 border border-blue-100 bg-white overflow-hidden group-hover:border-[#3884f5] group-hover:-translate-y-1 transition-all">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover rounded-xl" />
              </div>
              <p className="mt-2 text-xs md:text-sm font-bold text-slate-700 group-hover:text-[#3884f5] transition-colors">{cat.title}</p>
            </motion.button>
          ))}
        </div>

        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-slate-400">Top services</p>
            <h2 className="text-[34px] md:text-[40px] font-black leading-tight text-slate-900">Featured Printing Solutions</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 pb-3">
          {topSellers.map((item) => (
            <motion.div key={item.id} whileHover={{ y: -6 }} className="bg-white border border-blue-100 rounded-xl overflow-hidden">
              <button onClick={() => setSelectedProduct(item)} className="w-full text-left">
                <div className="relative bg-white aspect-[4/3] p-3">
                  <img src={item.img} alt={item.title} className="w-full h-full rounded-xl object-cover" />
                  <span className="absolute top-5 left-5 text-[10px] font-bold uppercase bg-[#3884f5] text-white px-2.5 py-1 rounded-full">{item.tag}</span>
                </div>
                <div className="p-4">
                  <p className="text-slate-900 font-bold">{item.title}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-[13px] text-[#3884f5]">Starting from 10 for {formatPrice(item.price)}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500"><Star size={13} className="text-[#3884f5] fill-[#3884f5]" /> {item.rating}</span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[120] bg-black/50 grid place-items-center p-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="bg-white rounded-2xl max-w-xl w-full p-5 relative">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-3"><X size={18} /></button>
              <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-60 object-cover rounded-xl" />
              <h4 className="mt-4 text-2xl font-black text-slate-900">{selectedProduct.title}</h4>
              <p className="text-slate-600 mt-2">Crafted for premium branding and business use.</p>
              <button onClick={() => navigate('/contact')} className="mt-5 inline-flex items-center gap-2 bg-[#3884f5] text-white px-5 py-3 rounded-full text-sm font-bold hover:brightness-110 transition-colors">
                Contact for Quote <ArrowRight size={15} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </section>
  );
}
