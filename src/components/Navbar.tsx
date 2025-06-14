
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleRequestDemo = () => {
    scrollToSection('contact');
  };
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <span className="font-bold text-xl md:text-2xl text-operium-primary font-playfair">
              Operium<span className="text-operium-secondary">Technologies</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-operium-primary transition-colors">Home</Link>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-operium-primary transition-colors">About Us</button>
          <button onClick={() => scrollToSection('solutions')} className="font-medium hover:text-operium-primary transition-colors">Our Solutions</button>
          <button onClick={() => scrollToSection('why-choose')} className="font-medium hover:text-operium-primary transition-colors">Why Choose Us</button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-operium-primary transition-colors">Contact</button>
          <Button 
            variant="outline" 
            className="border-operium-primary text-operium-primary hover:bg-operium-primary hover:text-white"
            onClick={handleRequestDemo}
          >
            Request Demo
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-4 space-y-4 flex flex-col shadow-lg animate-fade-in">
            <Link to="/" className="font-medium hover:text-operium-primary transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <button onClick={() => scrollToSection('about')} className="font-medium hover:text-operium-primary transition-colors py-1 text-left">About Us</button>
            <button onClick={() => scrollToSection('solutions')} className="font-medium hover:text-operium-primary transition-colors py-1 text-left">Our Solutions</button>
            <button onClick={() => scrollToSection('why-choose')} className="font-medium hover:text-operium-primary transition-colors py-1 text-left">Why Choose Us</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-operium-primary transition-colors py-1 text-left">Contact</button>
            <Button 
              className="bg-operium-primary hover:bg-operium-dark text-white w-full"
              onClick={handleRequestDemo}
            >
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
