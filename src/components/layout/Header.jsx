import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const navLinks = [
    { name: 'PRINTING', path: '/' },
    { name: 'DIGITAL MARKETING', path: '/digital-marketing' },
    { name: 'WEBSITE DEVELOPMENT', path: '/website-development' },
  ];

  return (
    <motion.header
      initial={ { y: -100, opacity: 0 } }
      animate={ { y: 0, opacity: 1 } }
      transition={ { duration: 0.5, ease: "easeOut" } }
      className="bg-brand-blue text-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */ }
        <Link to="/" className="flex items-center flex-shrink-0" onClick={ () => setIsMenuOpen(false) }>
          <img
            src="/ShreeMediaSolutions.png"
            alt="Shree Media Solutions"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Mobile Menu Toggle */ }
        <button
          className="md:hidden p-2 text-white"
          onClick={ () => setIsMenuOpen(!isMenuOpen) }
        >
          { isMenuOpen ? <X size={ 28 } /> : <Menu size={ 28 } /> }
        </button>

        {/* Desktop: Navigation + Search */ }
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-5 lg:gap-7">
            { navLinks.map((link) => (
              <Link
                key={ link.name }
                to={ link.path }
                className={ `text-base lg:text-md xl:text-md font-poppins font-medium tracking-tight transition-all duration-200 py-1 whitespace-nowrap ${location.pathname === link.path
                  ? 'text-white border-b-2 border-white'
                  : 'text-white hover:text-gray-200'
                  }` }
              >
                { link.name }
              </Link>
            )) }
          </nav>

          <div className="relative w-48 lg:w-64">
            <input
              type="text"
              placeholder="Search"
              value={ searchQuery }
              onChange={ (e) => setSearchQuery(e.target.value) }
              className="w-full h-7 pl-9 pr-4 rounded-md bg-white text-gray-800 text-sm border-none focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */ }
      { isMenuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-6">
              { navLinks.map((link) => (
                <Link
                  key={ link.name }
                  to={ link.path }
                  onClick={ () => setIsMenuOpen(false) }
                  className={ `text-xl font-black tracking-tight ${location.pathname === link.path
                    ? 'text-white'
                    : 'text-white/80'
                    }` }
                >
                  { link.name }
                </Link>
              )) }
            </nav>

            <div className="relative w-full mt-4">
              <input
                type="text"
                placeholder="Search printing solutions..."
                value={ searchQuery }
                onChange={ (e) => setSearchQuery(e.target.value) }
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-white text-gray-800 text-lg border-none focus:outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>
        </div>
      ) }
    </motion.header>
  );
};

export default Header;