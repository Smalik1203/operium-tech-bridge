
import React from 'react';
import { Book, Laptop, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-subtitle">
            Operium offers a comprehensive suite of educational products and services designed to enhance teaching and learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div id="classbridge" className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-operium-light p-3 rounded-lg mr-4">
                  <Smartphone className="text-operium-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">ClassBridge</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A mobile-first SaaS platform that streamlines school operations, enhances communication, and delivers academic content seamlessly. ClassBridge connects administrators, teachers, students, and parents in one unified ecosystem.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">School Management System</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Digital Academic Content Delivery</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Parent-Teacher Communication Tools</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Student Progress Tracking</span>
                </li>
              </ul>
              <Button className="bg-operium-primary hover:bg-operium-dark text-white">Learn More</Button>
            </div>
          </div>
          
          <div id="academic-content" className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-operium-light p-3 rounded-lg mr-4">
                  <Laptop className="text-operium-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Academic Content</h3>
              </div>
              <p className="text-gray-600 mb-6">
                High-quality digital academic content aligned with curriculum standards. Our content is designed by education experts to enhance classroom instruction and student engagement.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Interactive Learning Materials</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Subject-specific Resources</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Assessment Materials</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Customized Learning Paths</span>
                </li>
              </ul>
              <Button className="bg-operium-primary hover:bg-operium-dark text-white">Explore Content</Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="books" className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-operium-light p-3 rounded-lg mr-4">
                  <Book className="text-operium-primary h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Printed Academic Books</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our carefully crafted academic books complement our digital offerings, providing comprehensive educational materials for traditional classroom settings.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Curriculum-aligned Textbooks</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Workbooks and Practice Materials</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Teacher Resources</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Supplementary Reading Materials</span>
                </li>
              </ul>
              <Button className="bg-operium-primary hover:bg-operium-dark text-white">View Books</Button>
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
                State-of-the-art interactive flat panels designed specifically for classroom environments, enhancing teaching and student engagement through technology-enabled learning.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Touch-enabled Display Technology</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Classroom Integration Software</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">Interactive Teaching Tools</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-operium-light p-1 rounded-full mr-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-operium-primary"></div>
                  </div>
                  <span className="text-gray-600">ClassBridge Integration</span>
                </li>
              </ul>
              <Button className="bg-operium-primary hover:bg-operium-dark text-white">Discover IFP</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
