
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
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
    }
  };

  const handleGetInTouch = () => {
    scrollToSection('contact');
  };

  const handleDiscoverEcosystem = () => {
    scrollToSection('solutions');
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 pt-4 pb-12 md:pt-8 md:pb-16">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-12 sm:-top-16 md:-top-24 -right-12 sm:-right-16 md:-right-24 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-12 sm:-left-16 md:-left-24 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-gradient-to-br from-indigo-400/15 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 sm:-bottom-24 md:-bottom-32 right-1/3 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-gradient-to-br from-blue-300/10 to-indigo-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)', backgroundSize: 'clamp(2rem, 5vw, 3.125rem) clamp(2rem, 5vw, 3.125rem)' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-operium-primary/20 bg-operium-light px-4 py-2 text-sm font-medium text-operium-primary mb-6 md:mb-8 animate-text-fade-in">
            <span className="animate-pulse mr-2">•</span> 
            <span className="animate-text-slide-right animate-stagger-1">EdTech Solutions for India</span>
          </div>

          {/* Main Heading with Animations */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-4">
            <span className="block animate-text-slide-up">
              Transforming
            </span>
            <span className="block mt-2 animate-text-slide-up animate-stagger-2">
              Education Through
            </span>
            <span className="block mt-2 gradient-text glow-text animate-text-slide-up animate-stagger-3">
              Digital Innovation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-operium-neutral mb-3 md:mb-4 leading-relaxed max-w-3xl mx-auto px-4 animate-text-fade-in animate-stagger-4">
            <span className="font-semibold text-gray-800">Operium Technologies</span> develops technology solutions for education.
          </p>
          
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4 animate-text-fade-in animate-stagger-5">
            Today, we offer <span className="font-semibold text-operium-primary">ClassBridge</span> — a mobile-first SaaS platform designed to help educational institutions across India manage operations, communication, and learning. 
            As we grow, we're working on expanding our product portfolio with additional solutions for the education sector.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-text-fade-in animate-stagger-6">
            <Button 
              onClick={handleDiscoverEcosystem}
              className="group bg-operium-primary hover:bg-operium-dark text-white px-6 py-5 sm:px-8 sm:py-6 md:py-7 rounded-xl shadow-lg shadow-operium-primary/20 transition-all hover:shadow-xl hover:shadow-operium-primary/30 text-sm sm:text-base md:text-lg font-semibold w-full sm:w-auto transform hover:scale-105"
            >
              Discover ClassBridge
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={handleGetInTouch}
              variant="outline" 
              className="border-operium-primary border-2 text-operium-primary hover:bg-operium-primary hover:text-white px-6 py-5 sm:px-8 sm:py-6 md:py-7 rounded-xl transition-all text-sm sm:text-base md:text-lg font-semibold w-full sm:w-auto transform hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 px-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-gray-100 animate-text-slide-up animate-stagger-4 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">ClassBridge</div>
              <p className="text-sm text-gray-600">Our current product — an educational management platform</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-gray-100 animate-text-slide-up animate-stagger-5 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">Innovation</div>
              <p className="text-sm text-gray-600">Continuously improving to meet educational needs</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-gray-100 animate-text-slide-up animate-stagger-6 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">Growth</div>
              <p className="text-sm text-gray-600">Working on more solutions for the education sector</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
