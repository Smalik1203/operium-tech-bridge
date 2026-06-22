import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToSection } from "@/utils/scroll";

const navLinks = [
  { label: 'Products', section: 'products' },
  { label: 'About', section: 'about' },
  { label: 'Contact', section: 'contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled
        ? 'border-b border-gray-100 shadow-sm'
        : 'border-b border-transparent'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Operium Labs"
              className="h-8 md:h-10 w-auto object-contain"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/operium-logo.svg';
              }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleScrollTo(link.section)}
                className="px-3.5 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo('contact')}
              className="ml-3 px-5 py-2 text-[13px] font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors"
            >
              Talk to us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-5 py-3 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.section}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleScrollTo(link.section)}
                  className="py-3 text-left text-[15px] font-medium text-gray-700 hover:text-brand-blue transition-colors border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleScrollTo('contact')}
                className="mt-3 mb-2 w-full py-2.5 text-[14px] font-semibold text-white bg-brand-blue rounded-lg"
              >
                Talk to us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
