
import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Operium Technologies</h3>
            <p className="mb-4">Pioneering digital transformation for educational institutions with innovative technology solutions that drive excellence and efficiency.</p>
            <div className="flex items-start mt-4">
              <MapPin className="text-operium-primary h-5 w-5 mt-1 mr-2 flex-shrink-0" />
              <address className="not-italic text-gray-400 text-sm">
                Prajay Princeton Towers, 1017, 10th floor,<br />
                Doctors Colony, Saroornagar, Hyderabad,<br />
                Telangana 500035
              </address>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-operium-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-operium-primary transition-colors">About Us</a></li>
              <li><a href="#solutions" className="hover:text-operium-primary transition-colors">Our Solutions</a></li>
              <li><a href="#why-choose" className="hover:text-operium-primary transition-colors">Why Choose Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#classbridge" className="hover:text-operium-primary transition-colors">ClassBridge</a></li>
              <li><a href="#academic-content" className="hover:text-operium-primary transition-colors">Academic Content</a></li>
              <li><a href="#books" className="hover:text-operium-primary transition-colors">Printed Books</a></li>
              <li><a href="#ifp" className="hover:text-operium-primary transition-colors">IFP Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-operium-primary" />
                <a href="mailto:contact@operium.in" className="hover:text-operium-primary transition-colors">
                  contact@operium.in
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-operium-primary" />
                <a href="tel:+919391906310" className="hover:text-operium-primary transition-colors">
                  +91 9391906310
                </a>
              </div>
              <div className="flex items-center pl-7">
                <a href="tel:+919391906311" className="hover:text-operium-primary transition-colors">
                  +91 9391906311
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Operium Technologies Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
