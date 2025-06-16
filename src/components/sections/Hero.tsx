
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInTouch = () => {
    scrollToSection('contact');
  };

  const handleDiscoverEcosystem = () => {
    scrollToSection('solutions');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-operium-light to-operium-light/40 pt-20 pb-24 md:pt-28 md:pb-36">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-operium-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-operium-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 bg-operium-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-fade-in space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center rounded-full border border-operium-primary/20 bg-operium-light px-3 py-1 text-xs sm:px-4 sm:py-1 sm:text-sm font-medium text-operium-primary mb-4 md:mb-6">
                <span className="animate-pulse mr-1">•</span> EdTech Solutions for India
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight font-inter">
                <span className="relative inline-block">
                  Transforming 
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-operium-secondary/20 -rotate-1"></span>
                </span>
                <br />
                <span className="block mt-2">Education Through</span>
                <span className="text-operium-primary block mt-2">Digital Innovation</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-operium-neutral mb-6 md:mb-8 leading-relaxed max-w-2xl">
                Operium Technologies Pvt Ltd empowers educational institutions across India with innovative digital solutions including ClassBridge platform and Interactive Flat Panels for enhanced teaching and learning experiences.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDiscoverEcosystem}
                className="group bg-operium-primary hover:bg-operium-dark text-white px-6 py-6 rounded-xl shadow-lg shadow-operium-primary/20 transition-all hover:shadow-xl hover:shadow-operium-primary/30 text-base w-full sm:w-auto"
              >
                Discover Our EdTech Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleGetInTouch}
                variant="outline" 
                className="border-operium-primary border-2 text-operium-primary hover:bg-operium-primary hover:text-white px-6 py-6 rounded-xl transition-all text-base w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-operium-secondary/20 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-operium-primary/30 rounded-full z-0"></div>
              <div className="absolute top-1/3 right-0 transform translate-x-1/2 w-12 h-12 bg-operium-accent/40 rounded-full z-0"></div>
              
              {/* Main image with stylish frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-operium-primary/20 border-4 border-white transform hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern classroom with students collaborating on digital devices and interactive learning technology" 
                  className="rounded-lg object-cover w-full h-64 sm:h-80 md:h-96"
                />
              </div>
              
              {/* Floating feature cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-3 rounded-xl shadow-lg z-20 max-w-[140px] sm:max-w-[160px] transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-operium-light text-operium-primary mr-2">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900">Mobile-First</h3>
                    <p className="text-xs text-operium-neutral">ClassBridge Platform</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 right-8 bg-white p-3 rounded-xl shadow-lg z-20 max-w-[140px] sm:max-w-[180px] transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-operium-light text-operium-primary mr-2">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900">Complete Solutions</h3>
                    <p className="text-xs text-operium-neutral">Interactive Flat Panels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
