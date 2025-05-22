
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-operium-light to-white pt-16 pb-20 md:pt-20 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Transforming Education Through Innovation
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Empowering educational institutions with cutting-edge digital solutions that enhance teaching, learning, and administrative efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-operium-primary hover:bg-operium-dark text-white px-6 py-6">
                Discover Our Ecosystem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-operium-primary text-operium-primary hover:bg-operium-primary hover:text-white px-6 py-6">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-operium-secondary/10 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Digital learning" 
                className="rounded-lg shadow-2xl z-10 relative object-cover h-96 w-full"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-operium-primary/20 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
