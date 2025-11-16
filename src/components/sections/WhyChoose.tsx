import React from 'react';
import { CircleCheck, School, Users, Smartphone } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: CircleCheck,
      title: "Focused on Innovation",
      desc: "We focus on continuous improvement, building products like ClassBridge and working on expanding our offerings to serve education better.",
      gradient: "from-brand-blue to-brand-blue-light",
      border: "border-brand-blue"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      desc: "Our solutions are designed for mobile devices, making them accessible for administrators, educators, students, and parents.",
      gradient: "from-brand-teal to-brand-teal-light",
      border: "border-brand-teal"
    },
    {
      icon: School,
      title: "Scalable Solutions",
      desc: "Our platform is designed to work for small learning centers and large institutions, adapting to different needs.",
      gradient: "from-brand-blue to-brand-teal",
      border: "border-brand-blue"
    },
    {
      icon: Users,
      title: "Support",
      desc: "Our team helps with implementation and provides ongoing support to help you get the most out of our solutions.",
      gradient: "from-brand-teal-light to-brand-blue",
      border: "border-brand-teal"
    }
  ];

  return (
    <section id="why-choose" className="section-padding bg-white scroll-mt-20 relative overflow-hidden" aria-labelledby="why-choose-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 parallax-grid opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 id="why-choose-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text-two-tone">Operium Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We combine technology with educational understanding to provide practical solutions for institutions of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-premium p-6 lg:p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-2xl shadow-premium`}>
                    <Icon className="text-white h-6 w-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 gradient-text-two-tone">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
