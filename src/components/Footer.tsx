import React from 'react';
import { Link } from "react-router-dom";
import { scrollToSection } from "@/utils/scroll";

const footerLinks = [
  { label: 'Products', action: () => scrollToSection('products') },
  { label: 'About', action: () => scrollToSection('about') },
  { label: 'Contact', action: () => scrollToSection('contact') },
];

const products = [
  { label: 'ClassBridge', href: 'https://classbridge.in' },
  { label: 'LearnLab', href: 'https://learnlab.in' },
  { label: 'Relay', href: 'https://relayhq.in' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B0E14] text-gray-300 pt-20 pb-10 overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* faint brand glow */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 60% at 90% 0%, rgba(26,86,219,0.18), transparent 60%), radial-gradient(35% 50% at 5% 100%, rgba(245,158,11,0.08), transparent 60%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:col-span-5 pr-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-900 font-bold text-sm">
                OL
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Operium Labs<span className="text-blue-400">.</span>
              </span>
            </Link>
            <p className="text-base text-gray-400 leading-relaxed md:max-w-sm">
              Software for Indian K-12 schools. Built in Hyderabad.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-5">Explore</h4>
            <ul className="space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-[15px] text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-5">Products</h4>
            <ul className="space-y-3.5">
              {products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-gray-400 hover:text-white transition-colors"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:contact@operiumlabs.com" className="text-[15px] text-gray-400 hover:text-white transition-colors break-all">
                  contact@operiumlabs.com
                </a>
              </li>
              <li>
                <a href="tel:+919391906310" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  +91 93919 06310
                </a>
              </li>
              <li className="text-[15px] text-gray-500 pt-1">Hyderabad, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {currentYear} Operium Labs. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
