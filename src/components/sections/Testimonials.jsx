import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Robert S.', country: 'USA', text: 'Great quality, quick support, and very clean printing results every time.' },
  { name: 'Allen L.', country: 'France', text: 'The product range is impressive and output quality is consistently excellent.' },
  { name: 'Peter R.', country: 'USA', text: 'A reliable print partner for business materials and custom branding items.' },
  { name: 'Hellen A.', country: 'Japan', text: 'Fast turnaround and clear communication. Highly recommended for bulk jobs.' },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-shell">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#3884f5]">Customer Reviews</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-black text-slate-900">What clients say about us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-[#3884f5] mb-4">
                {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={14} className="fill-[#3884f5]" />)}
              </div>
              <p className="text-sm leading-relaxed text-slate-600">"{item.text}"</p>
              <p className="mt-5 text-sm font-bold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">Customer from {item.country}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
