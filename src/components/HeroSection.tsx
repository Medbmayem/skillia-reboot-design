
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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
              Skillia accompagne votre transformation numérique avec des solutions intelligentes et sécurisées, adaptées aux enjeux de demain.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-skillia-blue hover:bg-opacity-90 text-white px-8 py-6 text-lg">
                Découvrir nos services
              </Button>
              <Button variant="outline" className="border-skillia-blue text-skillia-blue hover:bg-skillia-gray px-8 py-6 text-lg">
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
            <div className="absolute -bottom-5 -left-5 bg-skillia-blue p-4 rounded-lg shadow-lg">
              <p className="text-white font-semibold">
                +200 clients satisfaits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
