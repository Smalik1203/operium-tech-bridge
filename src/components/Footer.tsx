
import React from 'react';
import { Mail, Phone, MapPin, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-operium-primary via-operium-accent to-operium-secondary"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-operium-primary/5 blur-xl"></div>
      <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-operium-secondary/5 blur-xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-2xl font-bold text-white">Operium Technologies</h3>
              </div>
              <div className="h-1 w-16 bg-operium-primary rounded"></div>
            </div>
            <p className="mb-4 text-gray-400 leading-relaxed">
              Pioneering digital transformation for educational institutions with innovative technology solutions that drive excellence and efficiency.
            </p>
            <div className="flex items-start">
              <MapPin className="text-operium-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
              <address className="not-italic text-gray-400 text-sm leading-relaxed">
                Prajay Princeton Towers, 1017, 10th floor,<br />
                Doctors Colony, Saroornagar, Hyderabad,<br />
                Telangana 500035
              </address>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
              <div className="h-1 w-12 bg-operium-secondary rounded"></div>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solutions')} className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>Our Solutions</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-choose')} className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>Why Choose Us</span>
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Solutions</h4>
              <div className="h-1 w-12 bg-operium-accent rounded"></div>
            </div>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('classbridge')} className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>ClassBridge</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ifp')} className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>IFP Solutions</span>
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
              <div className="h-1 w-12 bg-operium-primary rounded"></div>
            </div>
            <div className="space-y-4">
              <a href="mailto:contact@operium.in" className="flex items-center group hover:text-operium-primary transition-colors duration-300">
                <div className="mr-3 h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-operium-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-operium-primary" />
                </div>
                <span>contact@operium.in</span>
              </a>
              <a href="tel:+919391906310" className="flex items-center group hover:text-operium-primary transition-colors duration-300">
                <div className="mr-3 h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-operium-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-operium-primary" />
                </div>
                <span>+91 9391906310</span>
              </a>
              <a href="tel:+919391906311" className="flex items-center group hover:text-operium-primary transition-colors duration-300">
                <div className="mr-3 h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-operium-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-operium-primary" />
                </div>
                <span>+91 9391906311</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; {currentYear} Operium Technologies Pvt Ltd. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://operium.in" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-operium-primary transition-colors">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
