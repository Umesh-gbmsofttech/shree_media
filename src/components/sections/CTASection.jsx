import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = ({ title, description, buttonText, targetPath, whatsappMessage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (whatsappMessage) {
      const phoneNumber = "917517529133";
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    } else {
      navigate(targetPath || '/contact');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gray-900 rounded-[40px] p-12 md:p-20 text-center"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center items-center gap-2 mb-8">
              <Zap className="text-green-500 fill-green-500" size={24} />
              <span className="text-green-500 font-black tracking-[0.2em] uppercase text-sm">
                SYSTEM READY
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              {title || 'Ready to engineer your next impact?'}
            </h2>

            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              {description || 'Join 50+ enterprises scaling with Shree Media Solutions. From digital strategy to full-scale development, we deploy excellence.'}
            </p>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-brand-blue/40"
              >
                {buttonText || 'Get Started'}
                <ArrowRight size={24} />
              </motion.button>
            </div>
          </div>

          {/* Decorative Corner Accent */}
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-brand-blue opacity-30 rounded-br-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
