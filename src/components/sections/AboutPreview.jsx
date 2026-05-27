import React from 'react';
import { Truck, CreditCard, RotateCcw, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/poster1.jpg';

const perks = [
  { icon: Truck, title: 'Fast Delivery', text: 'Get your orders delivered quickly and safely' },
  { icon: CreditCard, title: 'Flexible Payment', text: 'Pay with multiple payment options' },
  { icon: RotateCcw, title: 'Easy Revisions', text: 'Request adjustments before final print' },
  { icon: Headphones, title: 'Premium Support', text: 'Dedicated assistance for every order' },
];

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-shell">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {perks.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-5 flex items-start gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#3884f5]/10 text-[#3884f5] grid place-items-center flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden bg-[#3884f5] text-white grid lg:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-14">
            <p className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-white/80">Season Special</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-black leading-tight">Bold prints for your next big campaign.</h2>
            <p className="mt-4 text-white/85 max-w-md">High-impact print materials built for brand launches, events, and seasonal promotions.</p>
            <Link to="/services" className="mt-7 inline-flex rounded-full bg-white text-[#3884f5] px-6 py-3 text-sm font-bold hover:bg-blue-50 transition-colors">
              Explore Services
            </Link>
          </div>
          <div className="min-h-[260px] lg:min-h-full">
            <img src={bannerImg} alt="Season special" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
