import React from 'react';
import { Mail, Phone, MapPin, Globe, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
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
                <img 
                  src="/lovable-uploads/634f0105-bef5-4c98-9a8b-04367098d074.png" 
                  alt="Operium Technologies Logo" 
                  className="h-8 w-8 filter brightness-0 invert"
                />
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
                <a href="#" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#solutions" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>Our Solutions</span>
                </a>
              </li>
              <li>
                <a href="#why-choose" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>Why Choose Us</span>
                </a>
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
                <a href="#classbridge" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>ClassBridge</span>
                </a>
              </li>
              <li>
                <a href="#academic-content" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>Academic Content</span>
                </a>
              </li>
              <li>
                <a href="#books" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>Printed Books</span>
                </a>
              </li>
              <li>
                <a href="#ifp" className="group flex items-center hover:text-operium-primary transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mr-2 text-operium-primary group-hover:translate-x-1 transition-transform" />
                  <span>IFP Solutions</span>
                </a>
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
              <a href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-operium-primary transition-colors">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
