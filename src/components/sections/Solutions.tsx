import React from 'react';
import { Smartphone, BarChart3, MessageSquare, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Solutions() {
  const features = [
    { icon: Smartphone, title: "Institution Management System", color: "from-brand-blue to-brand-blue-light" },
    { icon: BookOpen, title: "Digital Learning Platform", color: "from-brand-teal to-brand-teal-light" },
    { icon: MessageSquare, title: "Communication Tools", color: "from-brand-blue to-brand-teal" },
    { icon: BarChart3, title: "Analytics & Tracking", color: "from-brand-teal-light to-brand-blue" },
  ];

  return (
    <section id="solutions" className="section-padding bg-gradient-to-b from-white via-gray-50/50 to-white scroll-mt-20 relative overflow-hidden" aria-labelledby="solutions-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 id="solutions-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text-two-tone">Product</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            ClassBridge is a product of Operium Technologies — designed to help educational institutions manage operations and support teaching and learning.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div
            id="classbridge"
            className="card-premium p-8 lg:p-12 overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-brand-blue to-brand-teal p-4 rounded-2xl mr-4 shadow-premium">
                  <Smartphone className="text-white h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-two-tone">ClassBridge</h3>
                  <p className="text-sm text-gray-500 mt-1">A product of Operium Technologies</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A mobile-first SaaS platform that helps streamline operations, improve communication, and support educational activities. ClassBridge provides a unified platform for institutions to manage their operations and connect stakeholders.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-5 bg-gradient-to-br from-white to-gray-50/50 rounded-xl border border-gray-100 hover:border-brand-blue/30 transition-all"
                    >
                      <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl flex-shrink-0`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-base text-gray-700 font-medium pt-1">{feature.title}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-gradient-to-r from-brand-blue/10 via-brand-teal/10 to-brand-blue/10 rounded-2xl p-6 mb-8 border border-brand-blue/20">
                <p className="text-base text-gray-700 text-center">
                  <span className="font-semibold text-brand-blue">ClassBridge</span> is our first product. 
                  We're working on expanding our product portfolio to better serve the education sector.
                </p>
              </div>
              
              <a href="https://classbridge.in" target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full group relative px-8 py-6 text-lg font-semibold rounded-2xl bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-premium hover:shadow-glow-hover transition-all duration-200"
                >
                  <span className="flex items-center justify-center">
                    Learn More About ClassBridge
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
