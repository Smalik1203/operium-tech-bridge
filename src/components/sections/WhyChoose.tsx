
import React from 'react';
import { CircleCheck, School, Users, Smartphone } from "lucide-react";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Why Choose Operium</h2>
          <p className="section-subtitle">
            Our unique approach combines cutting-edge technology with educational expertise to provide comprehensive solutions for institutions of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-operium-primary hover:shadow-xl transition-all text-center transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-operium-light to-white p-3 rounded-full">
                <CircleCheck className="text-operium-primary h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Complete Ecosystem</h3>
            <p className="text-gray-600">
              An integrated suite of academic and technology solutions working seamlessly together, from advanced software to premium content to state-of-the-art hardware.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-operium-secondary hover:shadow-xl transition-all text-center transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-operium-light to-white p-3 rounded-full">
                <Smartphone className="text-operium-secondary h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile-First Approach</h3>
            <p className="text-gray-600">
              Built for the digital era, our solutions ensure seamless accessibility and convenience for administrators, educators, students, and parents alike.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-operium-accent hover:shadow-xl transition-all text-center transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-operium-light to-white p-3 rounded-full">
                <School className="text-operium-accent h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Adaptable Solutions</h3>
            <p className="text-gray-600">
              Whether you're a small learning center or a large educational institution, our platform scales and adapts to meet your specific needs and objectives.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-operium-dark hover:shadow-xl transition-all text-center transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-operium-light to-white p-3 rounded-full">
                <Users className="text-operium-dark h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Our specialized team ensures seamless implementation and provides ongoing support to help institutions maximize the potential of our innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
