import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceGrid = ({ services, sectionTitle, sectionSubtitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {sectionTitle || 'Our Core Services'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            {sectionSubtitle || 'Empowering your business with cutting-edge technology and data-driven strategies.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Detail Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="w-16 h-1.5 bg-brand-blue rounded-full" />
                <h3 className="text-4xl font-black text-gray-900 leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {activeService.description}
                </p>
                <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/30">
                  Start Your Project
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Icon/Image Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer p-4 rounded-2xl border-2 transition-all ${
                    activeIndex === index
                      ? 'border-brand-blue bg-brand-blue/5 shadow-xl'
                      : 'border-gray-100 bg-white hover:border-brand-blue/30'
                  }`}
                >
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className={`text-[10px] font-black uppercase tracking-widest text-center ${
                    activeIndex === index ? 'text-brand-blue' : 'text-gray-400'
                  }`}>
                    {service.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
