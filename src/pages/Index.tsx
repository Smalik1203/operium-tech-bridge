
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Solutions from '@/components/sections/Solutions';
import WhyChoose from '@/components/sections/WhyChoose';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <About />
        <Solutions />
        <WhyChoose />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
