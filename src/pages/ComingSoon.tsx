
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Sparkles, Clock, Bell } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

export default function ComingSoon() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call for now
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You'll be notified when we launch. Thank you for your interest!",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-operium-light via-white to-operium-muted flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-operium-primary/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-operium-secondary/10 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-operium-accent/5 blur-2xl animate-pulse delay-500"></div>
      
      {/* Floating icons */}
      <div className="absolute top-1/4 left-1/4 animate-bounce delay-300">
        <Sparkles className="text-operium-primary h-8 w-8 opacity-60" />
      </div>
      <div className="absolute top-3/4 right-1/4 animate-bounce delay-700">
        <Sparkles className="text-operium-secondary h-6 w-6 opacity-40" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-bounce delay-1000">
        <Sparkles className="text-operium-accent h-5 w-5 opacity-50" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main content with fade-in animation */}
          <div className="animate-fade-in">
            {/* Clock icon with pulse animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-operium-primary/20 animate-ping"></div>
                <div className="relative bg-white rounded-full p-6 shadow-lg">
                  <Clock className="text-operium-primary h-16 w-16" />
                </div>
              </div>
            </div>

            {/* Coming Soon title */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-slide-in">
              Coming <span className="text-operium-primary">Soon</span>
            </h1>

            {/* Inspiring quote */}
            <div className="mb-12 animate-fade-in delay-300">
              <blockquote className="text-2xl md:text-3xl text-operium-neutral italic font-light leading-relaxed mb-4">
                "The future belongs to those who believe in the beauty of their dreams."
              </blockquote>
              <cite className="text-operium-primary font-semibold text-lg">
                — Eleanor Roosevelt
              </cite>
            </div>

            {/* Description */}
            <p className="text-xl text-operium-neutral mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
              We're working hard to bring you something extraordinary. Our team is crafting innovative solutions that will transform your educational experience.
            </p>

            {/* Notification signup */}
            <div className="mb-12 animate-fade-in delay-700">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Bell className="text-operium-primary h-6 w-6 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Get Notified</h3>
                </div>
                <p className="text-gray-600 mb-4">Be the first to know when we launch!</p>
                <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-operium-primary focus:border-transparent"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-operium-primary hover:bg-operium-dark text-white px-6 py-3"
                  >
                    {isSubmitting ? 'Submitting...' : 'Notify Me'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Back to home button */}
            <div className="animate-fade-in delay-1000">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="border-operium-primary text-operium-primary hover:bg-operium-primary hover:text-white px-8 py-3 text-lg"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-operium-primary/5 to-transparent"></div>
    </div>
  );
}
