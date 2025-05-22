
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 bg-skillia-gray overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 md:w-96 md:h-96 rounded-full bg-white opacity-50 animate-pulse"></div>
        <div className="absolute -left-40 bottom-10 w-80 h-80 md:w-96 md:h-96 rounded-full bg-white opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/4 bottom-1/4 w-40 h-40 md:w-60 md:h-60 rounded-full bg-[#403AF2] opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-skillia-blue leading-tight">
              <span className="text-[#403AF2] relative">
                Smart
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#FA2A88] transform translate-y-1"></span>
              </span> Tech. <br />
              <span className="text-[#403AF2] relative">
                Real
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#FA2A88] transform translate-y-1"></span>
              </span> Impact.
            </h1>
            
            <p className="text-lg md:text-xl text-skillia-blue opacity-80 mb-8 md:pr-10 max-w-xl">
              {t('hero.subtitle') || "Nous vous accompagnons dans la transition vers un Business Intelligent en intégrant l'IA et la Data au cœur de votre stratégie."}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-20 relative">
              <Button 
                className="bg-[#FA2A88] hover:bg-opacity-90 text-white px-6 py-6 text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={() => scrollToSection('services')}
              >
                {t('hero.services.button') || "Découvrir nos services"}
              </Button>
              <Button 
                variant="outline" 
                className="border-skillia-blue text-skillia-blue hover:bg-skillia-gray px-6 py-6 text-base flex items-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                onClick={() => scrollToSection('contact')}
              >
                <Calendar className="mr-2" size={20} />
                {t('hero.contact.button') || "Prendre rendez-vous"}
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white shadow-xl rounded-lg p-2 transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Digital Transformation Solutions" 
                className="w-full h-auto rounded object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#403AF2] text-white py-2 px-4 rounded-lg shadow-lg text-sm font-bold">
                AI-Powered Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
