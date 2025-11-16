import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            school: formData.school || null,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Error submitting inquiry:', error);
        toast({
          title: "Error",
          description: "There was an error submitting your inquiry. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: "Your inquiry has been submitted successfully. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          school: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="section-title">Connect With Us</h2>
          <p className="section-subtitle">
            Have questions about our innovative solutions? Reach out to our expert team for personalized guidance tailored to your institution's needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-t-4 border-operium-primary">
            <h3 className="text-2xl font-bold mb-6 text-operium-primary">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                  value={formData.school}
                  onChange={handleInputChange}
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
                  value={formData.subject}
                  onChange={handleInputChange}
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
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your requirements..." 
                  rows={5} 
                  required 
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-operium-primary to-operium-dark hover:from-operium-dark hover:to-operium-primary text-white"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6 md:mb-8 border-t-4 border-operium-secondary">
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
                      Prajay Princeton Towers, 1017, 10th floor,<br />
                      Doctors Colony, Saroornagar, Hyderabad,<br />
                      Telangana 500035
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
