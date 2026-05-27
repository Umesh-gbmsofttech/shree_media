import React from 'react';
import { Send } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-shell">
        <div className="rounded-3xl bg-[#3884f5] p-8 md:p-12 text-white text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-white/80">Newsletter</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black">Stay updated with latest offers</h2>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">Get first access to new services, seasonal discounts, and printing tips.</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-7 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Enter your email address" className="flex-1 rounded-full px-5 py-3 text-slate-800 outline-none" />
            <button className="rounded-full bg-white text-[#3884f5] px-6 py-3 font-bold inline-flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
              Subscribe <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
