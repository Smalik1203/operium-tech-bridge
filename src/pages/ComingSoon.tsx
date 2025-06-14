
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
    <div className="min-h-screen bg-gradient-to-br from-operium-light via-white to-operium-muted flex items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Animated background elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-operium-primary/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-operium-secondary/10 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-operium-accent/5 blur-2xl animate-pulse delay-500"></div>
      
      {/* Floating icons - hidden on very small screens */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 animate-bounce delay-300">
        <Sparkles className="text-operium-primary h-6 w-6 sm:h-8 sm:w-8 opacity-60" />
      </div>
      <div className="hidden sm:block absolute top-3/4 right-1/4 animate-bounce delay-700">
        <Sparkles className="text-operium-secondary h-4 w-4 sm:h-6 sm:w-6 opacity-40" />
      </div>
      <div className="hidden md:block absolute top-1/3 right-1/3 animate-bounce delay-1000">
        <Sparkles className="text-operium-accent h-4 w-4 sm:h-5 sm:w-5 opacity-50" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <div className="w-full">
          {/* Main content with fade-in animation */}
          <div className="animate-fade-in">
            {/* Clock icon with pulse animation */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-operium-primary/20 animate-ping"></div>
                <div className="relative bg-white rounded-full p-4 sm:p-6 shadow-lg">
                  <Clock className="text-operium-primary h-12 w-12 sm:h-16 sm:w-16" />
                </div>
              </div>
            </div>

            {/* Coming Soon title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 animate-slide-in leading-tight">
              Coming <span className="text-operium-primary">Soon</span>
            </h1>

            {/* Inspiring quote */}
            <div className="mb-8 sm:mb-12 animate-fade-in delay-300 px-2">
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-operium-neutral italic font-light leading-relaxed mb-3 sm:mb-4">
                "The future belongs to those who believe in the beauty of their dreams."
              </blockquote>
              <cite className="text-operium-primary font-semibold text-sm sm:text-base lg:text-lg">
                — Eleanor Roosevelt
              </cite>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-operium-neutral mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500 px-2">
              We're working hard to bring you something extraordinary. Our team is crafting innovative solutions that will transform your educational experience.
            </p>

            {/* Notification signup */}
            <div className="mb-8 sm:mb-12 animate-fade-in delay-700">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl max-w-sm sm:max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Bell className="text-operium-primary h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">Get Notified</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Be the first to know when we launch!</p>
                <form onSubmit={handleNotifyMe} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-operium-primary focus:border-transparent text-sm sm:text-base"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-operium-primary hover:bg-operium-dark text-white px-6 py-3 text-sm sm:text-base"
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
                className="border-operium-primary text-operium-primary hover:bg-operium-primary hover:text-white px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-operium-primary/5 to-transparent"></div>
    </div>
  );
}
