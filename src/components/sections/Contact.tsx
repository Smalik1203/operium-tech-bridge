
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
    // You could add toast notification here in the future
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions about our solutions? Contact us and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-operium-primary">
            <h3 className="text-2xl font-bold mb-6 text-operium-primary">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Smith" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                  School / Organization
                </label>
                <Input 
                  id="school" 
                  placeholder="Your School Name" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your requirements..." 
                  rows={5} 
                  required 
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-operium-primary to-operium-dark hover:from-operium-dark hover:to-operium-primary text-white"
              >
                Submit Inquiry
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-operium-secondary">
              <h3 className="text-2xl font-bold mb-6 text-operium-secondary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-operium-primary h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:contact@operium.in" className="text-operium-primary hover:underline">
                      contact@operium.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-operium-primary h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+919391906310" className="text-operium-primary hover:underline">
                      +91 9391906310
                    </a>
                    <br />
                    <a href="tel:+919391906311" className="text-operium-primary hover:underline">
                      +91 9391906311
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-operium-primary h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <address className="not-italic text-gray-600">
                      Operium Technologies Pvt Ltd<br />
                      123 Business Park,<br />
                      Tech Hub, Bengaluru - 560001<br />
                      India
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-operium-accent">
              <h3 className="text-xl font-bold mb-4 text-operium-primary">Business Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
