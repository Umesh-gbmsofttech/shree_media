import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  GOOGLE_MAPS_URL,
  EXTERNAL_PHONE_LINK_PROPS,
} from '../../data/contact';

const quickLinks = [
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-blue-100">
      <div className="container-shell py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-slate-900">Shree Media Solutions</h3>
            <p className="mt-3 text-slate-600 max-w-md">Premium printing solutions for businesses, events, and branding requirements.</p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-full border border-blue-200 text-[#3884f5] grid place-items-center hover:bg-[#3884f5] hover:text-white transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {quickLinks.map((link) => (
                <li key={link.label}><Link to={link.to} className="hover:text-[#3884f5]">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-[#3884f5]" /><a href={CONTACT_PHONE_HREF} {...EXTERNAL_PHONE_LINK_PROPS}>{CONTACT_PHONE}</a></li>
              <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-[#3884f5]" /><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-[#3884f5]" /><a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">{CONTACT_ADDRESS}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-100 text-sm text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {currentYear} Shree Media Solutions. All rights reserved.</span>
          <span>Built for reliable print delivery.</span>
        </div>
      </div>
    </footer>
  );
}
