import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/designer-studio.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white h-screen lg:h-auto lg:pt-28 lg:pb-12 md:lg:pt-32 md:lg:pb-16">
      <div className="absolute inset-0 lg:hidden">
        <img src={heroImage} alt="Print services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f264b]/55 via-[#12396f]/65 to-[#0f264b]/85" />
      </div>

      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute -top-28 -right-12 w-80 h-80 rounded-full bg-[#3884f5]/15 blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-[#3884f5]/10 blur-3xl" />
      </div>

      <div className="container-shell relative h-full">
        <div className="h-full grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-0 lg:pb-0">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="z-10">
            <p className="inline-flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-extrabold text-white lg:text-[#3884f5] bg-white/15 lg:bg-[#3884f5]/10 px-4 py-2 rounded-full backdrop-blur-sm lg:backdrop-blur-0 border border-white/25 lg:border-transparent">
              <Sparkles size={13} /> Shree Media Solutions
            </p>

            <h1 className="mt-5 text-[40px] sm:text-[52px] md:text-[64px] lg:text-[74px] font-black leading-[0.9] tracking-[-0.02em] text-white lg:text-slate-900">
              Premium Printing
              <span className="block text-[#9ac2ff] lg:text-[#3884f5]">For Every Brand.</span>
            </h1>

            <p className="mt-5 text-white/90 lg:text-slate-600 max-w-[560px] text-[15px] md:text-[17px] leading-relaxed">
              Industrial, packaging, gifting, outdoor and indoor printing services with reliable quality and fast delivery.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 bg-[#3884f5] text-white px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-colors shadow-lg shadow-[#3884f5]/30">
                View Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/15 lg:bg-white border border-white/40 lg:border-blue-200 text-white lg:text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:border-white lg:hover:border-[#3884f5] transition-colors backdrop-blur-sm lg:backdrop-blur-0">
                Contact Us
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <Badge icon={<Truck size={14} />} text="Fast Delivery" />
              <Badge icon={<ShieldCheck size={14} />} text="Quality Assured" />
              <Badge icon={<Sparkles size={14} />} text="Custom Finishes" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative hidden lg:block">
            <div className="rounded-[28px] overflow-hidden border-8 border-white shadow-[0_20px_60px_rgba(56,132,245,0.18)]">
              <img src={heroImage} alt="Print services" className="w-full h-[500px] lg:h-[540px] object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }) {
  return (
    <div className="bg-white/12 lg:bg-white border border-white/25 lg:border-blue-100 rounded-xl px-3 py-2 inline-flex items-center gap-2 text-sm font-semibold text-white lg:text-slate-700 backdrop-blur-sm lg:backdrop-blur-0">
      <span className="text-[#9ac2ff] lg:text-[#3884f5]">{icon}</span>
      {text}
    </div>
  );
}
