import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector('nav');
    if (element && navbar) {
      const navbarHeight = navbar.getBoundingClientRect().height;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const handleRequestDemo = () => {
    scrollToSection('contact');
  };
  
  return (
    <nav
      className="bg-white/80 backdrop-blur-xl shadow-soft sticky top-0 z-50 border-b border-gray-100/50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/operium-logo.png" 
              alt="Operium Technologies - Leading EdTech Solutions Provider in India" 
              className="h-8 w-auto md:h-10 transition-opacity group-hover:opacity-80 object-contain"
              width="120"
              height="40"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/operium-logo.svg';
              }}
            />
            <span className="font-bold text-xl md:text-2xl text-gray-900 font-inter group-hover:text-brand-blue transition-colors">
              Operium<span className="text-brand-blue">Technologies</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="font-medium text-gray-700 hover:text-brand-blue transition-colors"
          >
            Home
          </Link>
          <button 
            onClick={() => scrollToSection('about')} 
            className="font-medium text-gray-700 hover:text-brand-blue transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('solutions')} 
            className="font-medium text-gray-700 hover:text-brand-blue transition-colors"
          >
            EdTech Solutions
          </button>
          <button 
            onClick={() => scrollToSection('why-choose')} 
            className="font-medium text-gray-700 hover:text-brand-blue transition-colors"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="font-medium text-gray-700 hover:text-brand-blue transition-colors"
          >
            Contact
          </button>
          <Button 
            variant="outline" 
            className="px-6 py-2 rounded-xl border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200"
            onClick={handleRequestDemo}
          >
            <span className="flex items-center">
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <div className="px-4 py-4 space-y-4 flex flex-col shadow-lg">
              <Link 
                to="/" 
                className="font-medium hover:text-brand-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('about')} 
                className="font-medium hover:text-brand-blue transition-colors py-2 text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="font-medium hover:text-brand-blue transition-colors py-2 text-left"
              >
                EdTech Solutions
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')} 
                className="font-medium hover:text-brand-blue transition-colors py-2 text-left"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="font-medium hover:text-brand-blue transition-colors py-2 text-left"
              >
                Contact
              </button>
              <Button 
                className="bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue-light hover:to-brand-teal-light text-white w-full mt-4"
                onClick={handleRequestDemo}
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
