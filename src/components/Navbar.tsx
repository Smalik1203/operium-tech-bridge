import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-3">
            <span className="font-bold text-xl md:text-2xl text-operium-primary">
              Operium<span className="text-operium-secondary">Technologies</span>
            </span>
          </a>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-medium hover:text-operium-primary transition-colors">Home</a>
          <a href="#about" className="font-medium hover:text-operium-primary transition-colors">About Us</a>
          <a href="#solutions" className="font-medium hover:text-operium-primary transition-colors">Our Solutions</a>
          <a href="#why-choose" className="font-medium hover:text-operium-primary transition-colors">Why Choose Us</a>
          <a href="#contact" className="font-medium hover:text-operium-primary transition-colors">Contact</a>
          <Button variant="outline" className="border-operium-primary text-operium-primary hover:bg-operium-primary hover:text-white">
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
            <a href="#" className="font-medium hover:text-operium-primary transition-colors py-1">Home</a>
            <a href="#about" className="font-medium hover:text-operium-primary transition-colors py-1">About Us</a>
            <a href="#solutions" className="font-medium hover:text-operium-primary transition-colors py-1">Our Solutions</a>
            <a href="#why-choose" className="font-medium hover:text-operium-primary transition-colors py-1">Why Choose Us</a>
            <a href="#contact" className="font-medium hover:text-operium-primary transition-colors py-1">Contact</a>
            <Button className="bg-operium-primary hover:bg-operium-dark text-white w-full">
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
