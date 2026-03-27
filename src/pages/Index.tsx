import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Solutions from '@/components/sections/Solutions';
import WhyChoose from '@/components/sections/WhyChoose';
import Contact from '@/components/sections/Contact';

const Index = () => {
  React.useEffect(() => {
    document.title = 'Operium Technologies | EdTech Solutions Provider in India';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden" role="main" aria-label="Main content">
        <Hero />
        <About />
        <Solutions />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
