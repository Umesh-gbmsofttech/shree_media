import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ProcessSection = ({ steps, title, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-brand-blue font-black tracking-widest uppercase text-sm mb-4 block">
            Execution Pipeline
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {title || 'How We Deliver Success'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Steps List */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border-2 ${
                  activeIndex === index
                    ? 'bg-white border-brand-blue shadow-xl'
                    : 'bg-transparent border-transparent hover:bg-white/50'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-2xl font-black ${
                    activeIndex === index ? 'text-brand-blue' : 'text-gray-300'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`text-xl font-bold ${
                    activeIndex === index ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Step Detail */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100 h-full flex flex-col md:flex-row gap-8"
              >
                <div className="flex-1 space-y-6">
                  <span className="text-brand-blue font-black tracking-widest uppercase text-xs">
                    Phase {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-black text-gray-900">
                    {steps[activeIndex].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                  <ul className="space-y-3">
                    {steps[activeIndex].points?.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                        <CheckCircle2 size={18} className="text-brand-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/3 rounded-3xl overflow-hidden h-48 md:h-auto">
                  <img 
                    src={steps[activeIndex].image} 
                    alt={steps[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
