
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-skillia-gray overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 md:w-96 md:h-96 rounded-full bg-white opacity-50"></div>
        <div className="absolute -left-40 bottom-10 w-80 h-80 md:w-96 md:h-96 rounded-full bg-white opacity-50"></div>
      </div>
      
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-skillia-blue">
              <span className="text-[#403AF2]">Smart</span> Tech. <span className="text-[#403AF2]">Real</span> Impact.
            </h1>
            
            <p className="text-lg md:text-xl text-skillia-blue opacity-80 mb-8 md:pr-10 max-w-xl">
              Nous vous accompagnons dans la transition vers un Business Intelligent en intégrant l'IA et la Data au cœur de votre stratégie.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-20 relative">
              <Button 
                className="bg-skillia-blue hover:bg-opacity-90 text-white px-6 py-4 text-base"
                onClick={() => scrollToSection('services')}
              >
                Découvrir nos services
              </Button>
              <Button variant="outline" className="border-skillia-blue text-skillia-blue hover:bg-skillia-gray px-6 py-4 text-base">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white shadow-lg rounded-lg p-1">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Digital Transformation Solutions" 
                className="w-full h-auto rounded object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
