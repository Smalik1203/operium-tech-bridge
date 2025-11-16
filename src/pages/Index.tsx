import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Solutions from '@/components/sections/Solutions';
import WhyChoose from '@/components/sections/WhyChoose';
import Contact from '@/components/sections/Contact';

const Index = () => {
  // Update document title and meta description
  React.useEffect(() => {
    document.title = 'Operium Technologies | Leading EdTech Solutions Provider in India | ClassBridge Platform';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Operium Technologies is a leading EdTech company in India, providing innovative educational technology solutions including ClassBridge - a mobile-first SaaS platform for schools and colleges. Transform your institution with digital learning solutions.');
    }
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
