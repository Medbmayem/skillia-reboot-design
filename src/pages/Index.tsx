
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <VisionSection />
        <ServiceSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
