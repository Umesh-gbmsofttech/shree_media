import React from 'react';
import { motion } from 'framer-motion';
import ServiceHero from '../components/sections/ServiceHero';
import ServiceGrid from '../components/sections/ServiceGrid';
import ProcessSection from '../components/sections/ProcessSection';
import CTASection from '../components/sections/CTASection';

const WebsiteDevelopment = () => {
  const webServices = [
    {
      title: "UI/UX Design",
      description: "We create intuitive, visually stunning interfaces that provide seamless user experiences across all devices and platforms.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Full-Stack Development",
      description: "From powerful backends to responsive frontends, we build robust, scalable web applications tailored to your specific business needs.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "E-commerce Solutions",
      description: "Launch your online store with high-performance platforms that drive sales, manage inventory, and provide secure payment gateways.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Custom Web Apps",
      description: "Automate your business processes with bespoke web applications designed to solve your unique operational challenges.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "CMS Integration",
      description: "Take control of your content with flexible Content Management Systems like WordPress, Headless CMS, or custom-built solutions.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Maintenance & Support",
      description: "Ensure your website stays fast, secure, and up-to-date with our comprehensive maintenance and technical support packages.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const webSteps = [
    {
      title: "Requirement Discovery",
      description: "We work closely with you to understand your goals, target audience, and the technical requirements for your project.",
      points: ["Stakeholder Interviews", "Feature Roadmapping", "Tech Stack Selection"],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Design & Prototyping",
      description: "Our designers create wireframes and high-fidelity prototypes to visualize the user journey and aesthetic direction.",
      points: ["Wireframe Design", "Interactive Prototypes", "Visual Identity Alignment"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Development & Testing",
      description: "Our engineers build your solution using modern frameworks, followed by rigorous quality assurance across all devices.",
      points: ["Agile Development", "Cross-browser Testing", "Security Audits"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Launch & Optimization",
      description: "We deploy your project to production and provide post-launch monitoring to ensure everything runs perfectly.",
      points: ["Server Configuration", "SEO Setup", "Performance Tuning"],
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
        title="Website Development"
        subtitle="Digital Engineering Excellence"
        description="We build high-performance, scalable web solutions that empower your business and provide exceptional user experiences."
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600"
      />
      
      <ServiceGrid 
        services={webServices}
        sectionTitle="Expert Web Solutions"
        sectionSubtitle="Combining technical precision with creative design to build the future of your business online."
      />

      <ProcessSection 
        steps={webSteps}
        title="Our Engineering Pipeline"
      />

      <CTASection 
        title="Ready to build your next digital masterpiece?"
        description="Partner with Shree Media Solutions for expert web development that takes your business to the next level."
        whatsappMessage="Can I get more info about Website Development"
      />
    </motion.main>
  );
};

export default WebsiteDevelopment;
