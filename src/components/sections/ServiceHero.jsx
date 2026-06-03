import React from 'react';
import { motion } from 'framer-motion';

const ServiceHero = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage,
  gradientClass = "from-brand-blue/80 to-transparent",
  overlayOpacity = "opacity-40"
}) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-brand-blue">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-fixed ${overlayOpacity}`}
          style={{ backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600'})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/80 font-black tracking-widest uppercase text-sm mb-4 block">
            {subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default ServiceHero;
