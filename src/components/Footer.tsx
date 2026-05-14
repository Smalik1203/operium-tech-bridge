import React from 'react';
import { Link } from "react-router-dom";
import { scrollToSection } from "@/utils/scroll";

const footerLinks = [
  { label: 'Products', action: () => scrollToSection('products') },
  { label: 'For publishers', action: () => scrollToSection('publishers') },
  { label: 'About', action: () => scrollToSection('about') },
  { label: 'Contact', action: () => scrollToSection('contact') },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand - Spans 5 cols */}
          <div className="lg:col-span-5 pr-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                OL
              </div>
              <span className="font-extrabold text-2xl text-gray-900 tracking-tight">
                Operium Labs<span className="text-blue-600">.</span>
              </span>
            </Link>
            <p className="text-base text-gray-500 leading-relaxed md:max-w-sm">
              Three products for Indian K-12 schools — communication, operations, and learning. Built in Hyderabad.
            </p>
          </div>

          {/* Removed spacer to give more room to long email addresses */}

          {/* Navigation - Spans 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-base text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Spans 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@operiumlabs.com" className="text-base text-gray-600 hover:text-blue-600 transition-colors font-medium break-all">
                  contact@operiumlabs.com
                </a>
              </li>
              <li>
                <a href="tel:+919391906310" className="text-base text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  +91 93919 06310
                </a>
              </li>
              <li>
                <a href="tel:+919391906311" className="text-base text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  +91 93919 06311
                </a>
              </li>
            </ul>
          </div>

          {/* Office - Spans 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Office</h4>
            <address className="not-italic text-base text-gray-600 leading-relaxed">
              Prajay Princeton Towers, 1017,<br />
              10th floor, Saroornagar,<br />
              Hyderabad, Telangana 500035
            </address>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-sm text-gray-500 font-medium text-center md:text-left">
            &copy; {currentYear} Operium Labs. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
              Privacy Policy
            </Link>
            <span className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
