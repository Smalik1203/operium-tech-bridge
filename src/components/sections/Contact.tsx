import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@operium.in",
      link: "mailto:contact@operium.in",
      gradient: "from-brand-blue to-brand-blue-light"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9391906310 / +91 9391906311",
      link: "tel:+919391906310",
      gradient: "from-brand-teal to-brand-teal-light"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Operium Technologies Pvt Ltd, Prajay Princeton Towers, 1017, 10th floor, Doctors Colony, Saroornagar, Hyderabad, Telangana 500035",
      link: null,
      gradient: "from-brand-blue to-brand-teal"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white via-gray-50/50 to-white scroll-mt-20 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Connect <span className="gradient-text-two-tone">With Us</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about our innovative solutions? Reach out to our expert team for personalized guidance tailored to your institution's needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-premium p-8 lg:p-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center mr-4">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text-two-tone">Send us a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith" 
                    required 
                    className="w-full rounded-xl border-2 border-gray-200 focus:border-brand-blue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    required 
                    className="w-full rounded-xl border-2 border-gray-200 focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="school" className="block text-sm font-semibold text-gray-700 mb-2">
                  School / Organization
                </label>
                <Input 
                  id="school" 
                  value={formData.school}
                  onChange={handleInputChange}
                  placeholder="Your School Name" 
                  className="w-full rounded-xl border-2 border-gray-200 focus:border-brand-blue transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?" 
                  required 
                  className="w-full rounded-xl border-2 border-gray-200 focus:border-brand-blue transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your requirements..." 
                  rows={5} 
                  required 
                  className="w-full rounded-xl border-2 border-gray-200 focus:border-brand-blue transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group relative px-8 py-6 text-lg font-semibold rounded-2xl bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-premium hover:shadow-glow-hover transition-all duration-200"
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  {!isSubmitting && (
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </span>
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="card-premium p-6 lg:p-8"
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mr-4 flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-brand-blue hover:text-brand-teal transition-colors font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <address className="not-italic text-gray-600 leading-relaxed">
                          {info.content.split(', ').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < info.content.split(', ').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </address>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
