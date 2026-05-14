import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Context from '@/components/sections/Context';
import Solutions from '@/components/sections/Solutions';
import WhyChoose from '@/components/sections/WhyChoose';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

const Index = () => {
  React.useEffect(() => {
    document.title = 'Operium Labs | Education technology for Indian K-12 schools';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden" role="main" aria-label="Main content">
        <Hero />
        <Context />
        <Solutions />
        <WhyChoose />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
