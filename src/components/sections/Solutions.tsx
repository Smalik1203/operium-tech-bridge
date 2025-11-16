
import React from 'react';
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="section-title animate-text-slide-up">
            Our <span className="gradient-text">Product</span>
          </h2>
          <p className="section-subtitle animate-text-fade-in animate-stagger-2">
            ClassBridge is a product of Operium Technologies — designed to help educational institutions manage operations and support teaching and learning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div id="classbridge" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-text-slide-up animate-stagger-1 hover:shadow-2xl transition-all duration-300">
            <div className="p-6 md:p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-operium-primary to-operium-secondary p-3 md:p-4 rounded-xl mr-3 md:mr-4 shadow-lg flex-shrink-0">
                  <Smartphone className="text-white h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">ClassBridge</h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">A product of Operium Technologies</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                A mobile-first SaaS platform that helps streamline operations, improve communication, and support educational activities. ClassBridge provides a unified platform for institutions to manage their operations and connect stakeholders.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="flex items-start space-x-3 p-3 md:p-4 bg-operium-light/50 rounded-lg hover:bg-operium-light transition-colors">
                  <div className="bg-operium-primary p-1.5 md:p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">Institution Management System</span>
                </div>
                <div className="flex items-start space-x-3 p-3 md:p-4 bg-operium-light/50 rounded-lg hover:bg-operium-light transition-colors">
                  <div className="bg-operium-primary p-1.5 md:p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">Digital Learning Platform</span>
                </div>
                <div className="flex items-start space-x-3 p-3 md:p-4 bg-operium-light/50 rounded-lg hover:bg-operium-light transition-colors">
                  <div className="bg-operium-primary p-1.5 md:p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">Communication Tools</span>
                </div>
                <div className="flex items-start space-x-3 p-3 md:p-4 bg-operium-light/50 rounded-lg hover:bg-operium-light transition-colors">
                  <div className="bg-operium-primary p-1.5 md:p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">Analytics & Tracking</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-operium-light to-blue-50 rounded-xl p-4 md:p-6 mb-6">
                <p className="text-sm md:text-base text-gray-700 text-center">
                  <span className="font-semibold text-operium-primary">ClassBridge</span> is our first product. 
                  We're working on expanding our product portfolio to better serve the education sector.
                </p>
              </div>
              
              <Link to="/coming-soon">
                <Button className="w-full bg-operium-primary hover:bg-operium-dark text-white py-5 md:py-6 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Learn More About ClassBridge
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
