import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function IntegratedHeader() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[#3884f5] text-white text-center text-[11px] font-semibold tracking-wide py-1.5">
        Professional Printing Services
      </div>

      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/95 border-b border-blue-100 shadow-sm backdrop-blur-md' : 'bg-white border-b border-blue-50'}`}>
        <nav className="max-w-[1320px] mx-auto px-4 md:px-8 h-[68px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/shreemediasolutions.png" alt="Shree Media" className="w-10 h-10 object-contain" />
              <span className="font-extrabold text-slate-900 tracking-tight text-[21px]">ShreeMedia</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-[14px] font-semibold transition-colors ${isActive ? 'text-[#3884f5]' : 'text-slate-600 hover:text-[#3884f5]'}`}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#3884f5] text-white px-4 py-2 text-xs font-bold uppercase tracking-wide hover:brightness-110 transition">
            <PhoneCall size={13} /> Get Quote
          </Link>
        </nav>

        <div className="lg:hidden border-t border-blue-100">
          <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[13px] font-semibold ${isActive ? 'text-[#3884f5]' : 'text-slate-600'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
