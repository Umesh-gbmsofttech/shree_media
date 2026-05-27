import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ServicesHero from '../components/sections/ServicesHero';
import ServiceCategories from '../components/sections/ServiceCategories';
import ProjectShowcase from '../components/sections/ProjectShowcase';
import CTASection from '../components/sections/CTASection';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get('category') || 'All';
  const scrollIntent = searchParams.get('scroll');

  const handleFilterChange = (filterValue, options = { scroll: false }) => {
    const next = new URLSearchParams(searchParams);
    if (filterValue === 'All') {
      next.delete('category');
    } else {
      next.set('category', filterValue);
    }
    if (options.scroll) {
      next.set('scroll', 'items');
    } else {
      next.delete('scroll');
    }
    setSearchParams(next);
  };

  useEffect(() => {
    if (!scrollIntent) return;
    const target = document.getElementById('filtered-items');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const next = new URLSearchParams(searchParams);
    next.delete('scroll');
    setSearchParams(next, { replace: true });
  }, [scrollIntent, searchParams, setSearchParams]);

  return (
    <main className="bg-white overflow-x-hidden">
      <ServicesHero />
      <ServiceCategories activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <ProjectShowcase activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <CTASection />
    </main>
  );
}
