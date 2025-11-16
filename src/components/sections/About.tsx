import React from 'react';
import { Target, Lightbulb, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white scroll-mt-20 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text-two-tone">Operium Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We develop technology solutions to help educational institutions manage operations, teaching, and learning more effectively.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Company Introduction */}
          <div className="card-premium p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-two-tone">
                Our Story
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Operium Technologies focuses on developing technology solutions for education. 
                <span className="font-semibold text-brand-blue"> ClassBridge</span> is our first product — a mobile-first SaaS platform that helps institutions manage operations, improve communication, and support educational activities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As we grow, we're working on expanding our product portfolio with additional solutions that address the needs of the education sector.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-premium p-6 lg:p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To develop technology solutions that help educational institutions manage operations more effectively and support better learning experiences.
              </p>
            </div>
            
            <div className="card-premium p-6 lg:p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted provider of educational technology solutions, helping institutions improve their operations and educational delivery.
              </p>
            </div>
            
            <div className="card-premium p-6 lg:p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-light to-brand-teal-light flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on continuous improvement and expanding our product portfolio to better serve the education sector.
              </p>
            </div>
          </div>

          {/* Values List */}
          <div className="bg-gradient-to-br from-brand-blue/5 via-brand-teal/5 to-brand-blue/5 rounded-3xl p-8 lg:p-12 border border-brand-blue/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text-two-tone">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Innovation", desc: "Continuously evolving our solutions to meet changing educational demands", icon: Sparkles },
                { title: "Quality", desc: "Focusing on quality in our products and services", icon: Target },
                { title: "Accessibility", desc: "Creating solutions that are user-friendly and accessible for all", icon: Lightbulb },
                { title: "Integrity", desc: "Building relationships based on trust, transparency and reliability", icon: Target },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm"
                  >
                    <div className="bg-gradient-to-br from-brand-blue to-brand-teal p-3 rounded-xl flex-shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
