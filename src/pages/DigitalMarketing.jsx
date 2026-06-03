import React from 'react';
import { motion } from 'framer-motion';
import ServiceHero from '../components/sections/ServiceHero';
import ServiceGrid from '../components/sections/ServiceGrid';
import ProcessSection from '../components/sections/ProcessSection';
import CTASection from '../components/sections/CTASection';

const DigitalMarketing = () => {
  const dmServices = [
    {
      title: "Search Engine Optimization",
      description: "Boost your organic visibility and drive high-quality traffic with our data-driven SEO strategies, technical audits, and content optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Social Media Management",
      description: "Engage your audience where they live. We create compelling social content and manage communities to build brand loyalty and drive conversions.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Maximize your ROI with precision-targeted ad campaigns across Google, Meta, and LinkedIn. We optimize every penny of your ad spend.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Content Marketing",
      description: "Tell your brand story with authority. We create value-driven content that educates your audience and positions you as an industry leader.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and drive repeat business with personalized email automation workflows that deliver the right message at the right time.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Analytics & Reporting",
      description: "Make informed decisions with deep-dive performance tracking and transparent reporting that shows exactly how your digital growth is progressing.",
      image: "https://images.unsplash.com/photo-1551288049-bbda4e3a897d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const dmSteps = [
    {
      title: "Market Analysis",
      description: "We dive deep into your industry, competitors, and audience behavior to identify the most effective growth levers.",
      points: ["Competitor Benchmarking", "Audience Persona Mapping", "Keyword Research"],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Strategic Planning",
      description: "We design a cross-channel digital roadmap aligned with your business objectives and budget.",
      points: ["Channel Selection", "Content Calendar", "KPI Definition"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Campaign Execution",
      description: "Our experts launch and manage your campaigns, constantly monitoring performance and adjusting for maximum impact.",
      points: ["Ad Creative Development", "A/B Testing", "Real-time Optimization"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Performance Tracking",
      description: "We provide transparent, data-rich reports that demonstrate ROI and guide future strategy adjustments.",
      points: ["Conversion Analysis", "ROI Calculation", "Future Roadmap Refinement"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <ServiceHero 
        title="Digital Marketing Solutions"
        subtitle="Grow Your Digital Footprint"
        description="Precision-engineered digital strategies that connect your brand with the right audience and drive measurable growth."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
        gradientClass="from-indigo-900/60 to-transparent"
        overlayOpacity="opacity-50"
      />
      
      <ServiceGrid 
        services={dmServices}
        sectionTitle="Comprehensive Marketing"
        sectionSubtitle="Everything you need to dominate the digital landscape and scale your business."
      />

      <ProcessSection 
        steps={dmSteps}
        title="Our Growth Pipeline"
      />

      <CTASection 
        title="Ready to scale your digital presence?"
        description="Join leading brands that trust Shree Media Solutions for their digital growth. Let's build your success story together."
        whatsappMessage="Can I get more info about Digital Marketing"
      />
    </motion.main>
  );
};

export default DigitalMarketing;
