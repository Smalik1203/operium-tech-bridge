
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-operium-light/20 to-operium-light/40 pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-operium-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-operium-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 bg-operium-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1E88E5 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-in space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center rounded-full border border-operium-primary/20 bg-operium-light px-3 py-1 text-xs sm:px-4 sm:py-1 sm:text-sm font-medium text-operium-primary mb-4 md:mb-6">
                <span className="animate-pulse mr-1">•</span> Transforming Education
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                <span className="relative">
                  Transforming 
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-operium-secondary/20 -rotate-1"></span>
                </span>
                <br />Education Through 
                <span className="text-operium-primary">Innovation</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-xl">
                Empowering educational institutions with cutting-edge digital solutions that enhance teaching, learning, and administrative efficiency.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-5">
              <Button className="group bg-operium-primary hover:bg-operium-dark text-white px-4 sm:px-6 py-5 sm:py-6 rounded-xl shadow-lg shadow-operium-primary/20 transition-all hover:shadow-xl hover:shadow-operium-primary/30 text-sm sm:text-base">
                Discover Our Ecosystem
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-operium-primary border-2 text-operium-primary hover:bg-operium-primary hover:text-white px-4 sm:px-6 py-5 sm:py-6 rounded-xl transition-all text-sm sm:text-base">
                Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center space-x-3 md:space-x-4 pt-2 md:pt-4 text-xs sm:text-sm">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=1" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white" alt="Customer" />
                <img src="https://i.pravatar.cc/100?img=2" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white" alt="Customer" />
                <img src="https://i.pravatar.cc/100?img=3" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white" alt="Customer" />
              </div>
              <div className="text-gray-600">
                Trusted by <span className="font-bold">200+</span> educational institutions
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fade-in">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-operium-secondary/20 rounded-full z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-operium-primary/30 rounded-full z-0"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-operium-accent/40 rounded-full z-0"></div>
              
              {/* Main image with stylish frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-operium-primary/20 border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Digital learning" 
                  className="rounded-lg object-cover h-auto md:h-80 lg:h-96 w-full"
                />
              </div>
              
              {/* Floating feature cards - hidden on small screens, visible on medium and up */}
              <div className="absolute -bottom-10 -left-10 bg-white p-3 md:p-4 rounded-xl shadow-lg z-20 max-w-[160px] md:max-w-xs transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-operium-light text-operium-primary mr-2 md:mr-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base text-gray-900">Mobile-First</h3>
                    <p className="text-xs md:text-sm text-gray-600">Accessible anywhere</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 right-10 bg-white p-3 md:p-4 rounded-xl shadow-lg z-20 max-w-[160px] md:max-w-xs transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-operium-light text-operium-primary mr-2 md:mr-3">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base text-gray-900">Complete Solutions</h3>
                    <p className="text-xs md:text-sm text-gray-600">End-to-end integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile hero image - only visible on small screens */}
          <div className="md:hidden relative mx-auto max-w-[80%] mt-6">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg shadow-operium-primary/20 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Digital learning" 
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-operium-secondary/20 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
