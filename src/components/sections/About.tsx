
import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="section-title animate-text-slide-up">
            About <span className="gradient-text">Operium Technologies</span>
          </h2>
          <p className="section-subtitle animate-text-fade-in animate-stagger-2">
            We develop technology solutions to help educational institutions manage operations, teaching, and learning more effectively.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Company Introduction */}
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-gray-100 animate-text-slide-up animate-stagger-1">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Our Story</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Operium Technologies focuses on developing technology solutions for education. 
                <span className="font-semibold text-operium-primary"> ClassBridge</span> is our first product — a mobile-first SaaS platform that helps institutions manage operations, improve communication, and support educational activities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                As we grow, we're working on expanding our product portfolio with additional solutions that address the needs of the education sector.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all animate-text-slide-left animate-stagger-2">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-operium-primary">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To develop technology solutions that help educational institutions manage operations more effectively and support better learning experiences.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all animate-text-slide-up animate-stagger-3">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-operium-primary">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To be a trusted provider of educational technology solutions, helping institutions improve their operations and educational delivery.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all animate-text-slide-right animate-stagger-4">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-operium-primary">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We focus on continuous improvement and expanding our product portfolio to better serve the education sector.
              </p>
            </div>
          </div>

          {/* Values List */}
          <div className="bg-gradient-to-br from-operium-light to-blue-50 rounded-2xl p-6 md:p-8 lg:p-12 animate-text-fade-in animate-stagger-5">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center gradient-text">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-operium-primary p-2 rounded-lg flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Innovation</h4>
                  <p className="text-gray-600">Continuously evolving our solutions to meet changing educational demands</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-operium-primary p-2 rounded-lg flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Quality</h4>
                  <p className="text-gray-600">Focusing on quality in our products and services</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-operium-primary p-2 rounded-lg flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Accessibility</h4>
                  <p className="text-gray-600">Creating solutions that are user-friendly and accessible for all</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-operium-primary p-2 rounded-lg flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Integrity</h4>
                  <p className="text-gray-600">Building relationships based on trust, transparency and reliability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
