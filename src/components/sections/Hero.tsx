import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-0" aria-label="Hero section">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/20" />
      
      {/* Soft Light Accent */}
      <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-brand-teal/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8">
            {/* Step 1: Top Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              <span className="text-xs md:text-sm font-medium text-brand-blue">EdTech Solutions for India</span>
            </div>

            {/* Step 2: Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Transforming Education{' '}
              <span className="block mt-2">
                Through{' '}
                <span className="gradient-text-two-tone">Digital Solutions</span>
              </span>
            </h1>

            {/* Step 3: Supporting Text */}
            <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                <span className="text-gray-900">Operium Technologies</span> develops technology solutions for education.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Today, we offer <span className="font-semibold text-brand-blue">ClassBridge</span> — a mobile-first SaaS platform designed to help educational institutions across India manage operations, communication, and learning.
              </p>
            </div>

            {/* Step 4: Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 justify-center items-center">
              <Button
                onClick={handleDiscoverEcosystem}
                className="group relative px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-2xl bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-premium hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center">
                  Discover ClassBridge
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                onClick={handleGetInTouch}
                variant="outline"
                className="px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-2xl border-2 border-gray-200 text-gray-700 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-200 w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
