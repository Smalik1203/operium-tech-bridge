import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
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

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you shortly.",
        variant: "default",
      });
      setFormData({ name: '', email: '', school: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-gray-100 scroll-mt-20" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Info & CTA */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Contact</p>

            <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.01em] text-gray-900 mb-4">
              Talk to us.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-10 max-w-md">
              If you run a school, work in one, or distribute content into one — we'd like to hear from you. Reply by email or use the form; both reach the same inbox.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Email Us</h4>
                  <a href="mailto:contact@operiumlabs.com" className="text-base text-gray-600 hover:text-blue-600 transition-colors">
                    contact@operiumlabs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Call Us</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919391906310" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                      +91 93919 06310
                    </a>
                    <a href="tel:+919391906311" className="text-base text-gray-600 hover:text-emerald-600 transition-colors">
                      +91 93919 06311
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Visit Us</h4>
                  <address className="not-italic text-base text-gray-600 leading-relaxed">
                    Prajay Princeton Towers, 1017, 10th floor,<br />
                    Doctors Colony, Saroornagar,<br />
                    Hyderabad, Telangana 500035
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-xl border border-gray-200 p-7">
            <h3 className="text-base font-semibold text-gray-900 mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 px-4"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@institution.edu"
                    required
                    className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 px-4"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="school" className="text-sm font-semibold text-gray-700">Institution Name</label>
                <Input
                  id="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  placeholder="E.g. Oxford Learning Institute"
                  className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 px-4"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  required
                  className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 px-4"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  required
                  className="bg-gray-50 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 p-4 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 h-14 text-base font-semibold text-white bg-gray-900 hover:bg-black disabled:opacity-70 rounded-xl transition-all shadow-md mt-4"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-4 h-4 ml-1" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
