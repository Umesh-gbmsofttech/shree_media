import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import CategoryGrid from '../components/sections/CategoryGrid';
import ProductsGrid from '../components/sections/ProductsGrid';
import ContactBar from '../components/layout/ContactBar';

const Home = ({ searchQuery, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ContactBar />
      <div className="container mx-auto px-6 md:px-12 py-8">
        <CategoryGrid
          activeCategory={ activeCategory }
          setActiveCategory={ setActiveCategory }
        />
        <ProductsGrid
          activeCategory={ activeCategory }
          searchQuery={ searchQuery }
        />
      </div>
    </div>
  );
};

export default Home;
