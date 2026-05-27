import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ServicesHero from '../components/sections/ServicesHero';
import ServiceCategories from '../components/sections/ServiceCategories';
import ProjectShowcase from '../components/sections/ProjectShowcase';
import StrategySection from '../components/sections/StrategySection';
import TechMarquee from '../components/sections/TechMarquee';
import CTASection from '../components/sections/CTASection';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get('category') || 'All';

  const handleFilterChange = (filterValue) => {
    const next = new URLSearchParams(searchParams);
    if (filterValue === 'All') {
      next.delete('category');
    } else {
      next.set('category', filterValue);
    }
    setSearchParams(next);
  };

  return (
    <main className="bg-white overflow-x-hidden">
      <div className="relative">
        <ServicesHero />
        <ServiceCategories activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      </div>

      <ProjectShowcase activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <StrategySection />

      <div className="bg-[#1a1a1a] py-4">
        <TechMarquee />
      </div>

      <CTASection />
    </main>
  );
}
