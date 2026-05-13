import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Briefcase, Zap } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '../../data/contact';

const jobs = [
  { title: "Senior React Developer", type: "Full-Time", location: "Pune / Remote", vacancies: 2, tags: ["React", "Node.js"] },
  { title: "UI/UX Designer", type: "Full-Time", location: "Remote", vacancies: 1, tags: ["Figma", "Branding"] },
  { title: "Java Backend Engineer", type: "Internship", location: "Pune", vacancies: 3, tags: ["Spring Boot", "SQL"] },
  { title: "Digital Marketing Specialist", type: "Contract", location: "Remote", vacancies: 1, tags: ["SEO", "Ads"] }
];

export default function OpenPositions() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50/50 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6"
            >
              <Zap size={12} fill="currentColor" /> Hiring Now
            </motion.div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Join the <span className="text-blue-600">NexGen</span> Squad.
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              We’re looking for innovators, dreamers, and builders to help us engineer the digital future.
            </p>
          </div>
          
          <div className="hidden md:block text-right">
            <span className="text-6xl font-black text-slate-100 block leading-none">
              {jobs.reduce((acc, job) => acc + job.vacancies, 0)}
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Open Opportunities</span>
          </div>
        </div>

        {/* Jobs List */}
        <div className="grid gap-4">
          {jobs.map((job, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Subtle hover background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="text-[10px] font-bold uppercase tracking-tighter text-slate-400 border border-slate-100 px-2 py-0.5 rounded-md group-hover:border-blue-100 group-hover:text-blue-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h4>
                <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-400">
                  <span className="flex items-center gap-2"><Briefcase size={16} className="text-slate-300"/> {job.type}</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-slate-300"/> {job.location}</span>
                  <span className="text-blue-500/60 font-bold">{job.vacancies} {job.vacancies > 1 ? 'Spots' : 'Spot'} Left</span>
                </div>
              </div>
              
              <div className="relative z-10 mt-8 md:mt-0 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-200 group-hover:-translate-y-1">
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info matching your branding */}
        <div className="mt-24 py-12 border-t border-slate-100 text-center relative">
          <p className="text-slate-400 font-medium">
            Don't see your perfect role? <br className="md:hidden" />
            <a href={ CONTACT_EMAIL_HREF } className="text-slate-900 font-bold border-b-2 border-blue-600 pb-0.5 hover:text-blue-600 transition-colors mx-2">
              Send your CV to { CONTACT_EMAIL }
            </a>
          </p>
          <div className="mt-8 flex justify-center gap-8 opacity-20 grayscale">
             {/* Add small grayscale client logos or tech stack icons here */}
          </div>
        </div>

      </div>
    </section>
  );
}
