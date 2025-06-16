
import React from 'react';
import { Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-subtitle">
            Operium offers comprehensive educational technology solutions designed to transform teaching and learning experiences across all types of educational institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="classbridge" className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-operium-light p-3 rounded-lg mr-4">
                  <Smartphone className="text-operium-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">ClassBridge</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A revolutionary mobile-first SaaS platform that streamlines operations, enhances communication, and delivers educational solutions seamlessly. ClassBridge connects all stakeholders in one unified digital ecosystem.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Comprehensive Institution Management System</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Advanced Digital Learning Platform</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Seamless Communication Tools for All Users</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Comprehensive Progress Tracking Analytics</span>
                </li>
              </ul>
              <Link to="/coming-soon">
                <Button className="bg-operium-primary hover:bg-operium-dark text-white">Learn More</Button>
              </Link>
            </div>
          </div>
          
          <div id="ifp" className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-operium-light p-3 rounded-lg mr-4">
                  <Monitor className="text-operium-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Interactive Flat Panel Solutions</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Cutting-edge interactive flat panels specifically designed for diverse educational environments, enhancing teaching methodologies and learner engagement through immersive technology.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Advanced Multi-Touch Display Technology</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Intuitive Collaboration Software</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Powerful Interactive Teaching Tools</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Seamless ClassBridge Integration</span>
                </li>
              </ul>
              <Link to="/coming-soon">
                <Button className="bg-operium-primary hover:bg-operium-dark text-white">Discover IFP</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
