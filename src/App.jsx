import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout & Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/ui/WhatsAppWidget';

// Pages
import Home from './pages/Home';
import Categories from './pages/Categories';
import DigitalMarketing from './pages/DigitalMarketing';
import WebsiteDevelopment from './pages/WebsiteDevelopment';

// Helper component to force scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Printing');

  return (
    <div className="bg-brand-bg text-gray-800 min-h-screen flex flex-col selection:bg-brand-blue/10">
      <ScrollToTop />
      
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />} />
          <Route path="/categories" element={<Categories searchQuery={searchQuery} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
