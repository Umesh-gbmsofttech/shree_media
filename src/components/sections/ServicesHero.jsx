import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImg from '../../assets/SERVICEPAPER.jpg';

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white h-screen lg:h-auto lg:pt-[106px] lg:pb-8 md:lg:pt-[116px] md:lg:pb-10">
      <div className="absolute inset-0 lg:hidden">
        <img src={heroImg} alt="Printing services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f264b]/55 via-[#12396f]/65 to-[#0f264b]/85" />
      </div>

      <div className="container-shell relative h-full">
        <div className="h-full grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-0 lg:pb-0">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="z-10">
            <p className="inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-extrabold text-white lg:text-[#3884f5] bg-white/15 lg:bg-[#3884f5]/10 px-4 py-2 rounded-full backdrop-blur-sm lg:backdrop-blur-0 border border-white/25 lg:border-transparent">
              <Sparkles size={13} /> Services
            </p>

            <h1 className="mt-4 text-[40px] sm:text-[52px] md:text-[64px] lg:text-[58px] font-black leading-[0.92] tracking-[-0.02em] text-white lg:text-slate-900">
              Printing Services
              <span className="block text-[#9ac2ff] lg:text-[#3884f5]">for Business Growth</span>
            </h1>

            <p className="mt-4 max-w-[560px] text-white/90 lg:text-slate-600 text-[15px] md:text-[16px] leading-relaxed">
              Browse our complete printing categories and choose the right solution for packaging, branding, gifting and promotions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3884f5] text-white text-sm font-bold hover:brightness-110 transition-colors shadow-lg shadow-[#3884f5]/30">
                Get Quote <ArrowRight size={16} />
              </Link>
              <Link to="#filtered-items" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 lg:border-blue-200 text-white lg:text-slate-800 text-sm font-bold hover:border-white lg:hover:border-[#3884f5] transition-colors backdrop-blur-sm lg:backdrop-blur-0">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[24px] overflow-hidden border border-blue-100 shadow-[0_20px_50px_rgba(56,132,245,0.16)] hidden lg:block">
            <img src={heroImg} alt="Printing services" className="w-full h-[310px] md:h-[360px] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
