import React from 'react';

export default function Timeline({ events }) {
  return (
    <div className="relative mx-auto max-w-3xl py-10">
      {/* The Vertical Line */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-primary/20" />

      <div className="space-y-12">
        {events.map((item, index) => {
          const [year, ...text] = item.split(':');
          return (
            <div key={index} className="relative flex items-center gap-8 pl-20">
              {/* Icon Node */}
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-lg">
                <span className="text-xs font-bold">{index + 1}</span>
              </div>
              
              {/* Content Card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-secondary/10 flex-1">
                <span className="font-bold text-primary">{year}:</span>
                <span className="ml-2 text-secondary/80">{text.join(':')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}