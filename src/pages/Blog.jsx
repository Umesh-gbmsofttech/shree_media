import React from 'react';
import BlogHero from '../components/sections/BlogHero';
import BlogGrid from '../components/sections/BlogGrid';

const Blog = () => {
  return (
    <main className="bg-white min-h-screen">

      {/* 1. HERO SECTION */ }
      <BlogHero />

      {/* 2. ARTICLES GRID & FILTERS */ }
      <BlogGrid />

    </main>
  );
};

export default Blog;