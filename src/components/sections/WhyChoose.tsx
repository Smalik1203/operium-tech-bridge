
import React from 'react';
import { CircleCheck, School, Users, Smartphone } from "lucide-react";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section-padding bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="section-title animate-text-slide-up">
            Why Choose <span className="gradient-text">Operium Technologies</span>
          </h2>
          <p className="section-subtitle animate-text-fade-in animate-stagger-2">
            We combine technology with educational understanding to provide practical solutions for institutions of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-l-4 border-operium-primary hover:shadow-2xl transition-all text-center transform hover:-translate-y-2 animate-text-slide-up animate-stagger-1">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-operium-primary to-operium-secondary p-3 md:p-4 rounded-full shadow-lg">
                <CircleCheck className="text-white h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 gradient-text">Focused on Innovation</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We focus on continuous improvement, building products like ClassBridge and working on expanding our offerings to serve education better.
            </p>
          </div>
          
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-l-4 border-operium-secondary hover:shadow-2xl transition-all text-center transform hover:-translate-y-2 animate-text-slide-up animate-stagger-2">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-operium-secondary to-operium-primary p-3 md:p-4 rounded-full shadow-lg">
                <Smartphone className="text-white h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 gradient-text">Mobile-First Design</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our solutions are designed for mobile devices, making them accessible for administrators, educators, students, and parents.
            </p>
          </div>
          
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-l-4 border-operium-accent hover:shadow-2xl transition-all text-center transform hover:-translate-y-2 animate-text-slide-up animate-stagger-3">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-operium-accent to-operium-primary p-3 md:p-4 rounded-full shadow-lg">
                <School className="text-white h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 gradient-text">Scalable Solutions</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our platform is designed to work for small learning centers and large institutions, adapting to different needs.
            </p>
          </div>
          
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-l-4 border-operium-dark hover:shadow-2xl transition-all text-center transform hover:-translate-y-2 animate-text-slide-up animate-stagger-4">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-operium-dark to-operium-primary p-3 md:p-4 rounded-full shadow-lg">
                <Users className="text-white h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 gradient-text">Support</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our team helps with implementation and provides ongoing support to help you get the most out of our solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
