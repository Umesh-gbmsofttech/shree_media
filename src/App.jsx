import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout & Components
import IntegratedHeader from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';

import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

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
  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100">
      <ScrollToTop />
      
      {/* Navigation */}
      <IntegratedHeader />
      
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
