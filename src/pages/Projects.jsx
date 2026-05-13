import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const projects = [
  {
    title: 'Enterprise ERP System',
    industry: 'Manufacturing',
    // High-tech factory floor / dashboard concept
    image: 'https://images.unsplash.com/photo-1558467523-46113f1fef72?auto=format&fit=crop&q=80&w=1200',
    gridSpan: 'lg:col-span-2',
    features: ['Workflow Automation', 'Real-time Analytics'],
  },
  {
    title: 'SaaS CRM Platform',
    industry: 'B2B SaaS',
    // Clean, modern abstract interface
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['Pipeline Tools', 'Reporting'],
  },
  {
    title: 'E-Commerce Marketplace',
    industry: 'Retail',
    // Modern retail/logistics aesthetic
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['Payment Stack', 'Vendor Modules'],
  },
  {
    title: 'AI Analytics Dashboard',
    industry: 'Data Intelligence',
    // Deep blue data visualization/neural network vibe
    image: 'https://images.unsplash.com/photo-1504868584819-f8eec04217fe?auto=format&fit=crop&q=80&w=1200',
    gridSpan: 'lg:col-span-2',
    features: ['Forecasting', 'Anomaly Detection'],
  },
  {
    title: 'FinTech Wallet App',
    industry: 'Finance',
    // Modern mobile payment interface
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['Secure Encryption', 'Instant Transfer'],
  },
  {
    title: 'Cloud Infrastructure',
    industry: 'DevOps',
    // Server room / technical abstract
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['Auto-scaling', 'Load Balancing'],
  },
  {
    title: 'Healthcare Portal',
    industry: 'MedTech',
    // Laboratory / Clean medical tech
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['HIPAA Compliant', 'Telemedicine'],
  },
];

export default function Projects() {
  return (
    // Reduced pt-20 to pt-12 to tighten the gap between Nav and Hero
    <main className="pt-12 min-h-screen bg-white"> 
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          
          {/* Header Section */}
          <div className="max-w-3xl mb-12 lg:mb-20 space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Selected Works</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950">
              Engineered for <br />
              <span className="italic font-serif text-slate-400 font-medium">high-growth impact.</span>
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-100 h-[450px] ${project.gridSpan}`}
              >
                {/* Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  {/* Overlay remains for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                      {project.industry}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {project.features.map(feature => (
                        <span 
                          key={feature} 
                          className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] text-white/90 border border-white/10 uppercase tracking-widest"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner Button */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-4 group">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-950 group-hover:text-blue-600 transition-colors">
                View all case studies
              </span>
              <div className="h-px w-12 bg-slate-200 group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500" />
            </button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}