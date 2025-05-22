
import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">About Operium Technologies</h2>
          <p className="section-subtitle">
            Transforming education through innovative technology solutions designed for modern schools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Education technology" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3 text-operium-primary">Our Mission</h3>
              <p className="text-gray-600">
                To create a seamless educational ecosystem that combines technology and content, empowering schools to deliver high-quality education efficiently and effectively.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3 text-operium-primary">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading provider of integrated academic and technological solutions for schools across the country, setting new standards in educational excellence.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-operium-primary">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="bg-operium-light p-1 rounded mr-2">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span><strong>Innovation:</strong> Constantly evolving our solutions to meet changing educational needs</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-operium-light p-1 rounded mr-2">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span><strong>Quality:</strong> Delivering excellence in every aspect of our products and services</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-operium-light p-1 rounded mr-2">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span><strong>Accessibility:</strong> Creating solutions that are user-friendly and accessible for all</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-operium-light p-1 rounded mr-2">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span><strong>Integrity:</strong> Building relationships based on trust and transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
