
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="section bg-skillia-gray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#403AF2]">
            {language === 'en' ? 'Our Vision' : 'Notre Vision'}
          </h2>
          
          <div className="space-y-6 mb-8 animate-fade-in">
            <p className="text-lg text-skillia-gray-dark">
              {language === 'en' 
                ? 'At Skillia, we believe that transforming businesses through AI and Data is an inevitable and fundamental evolution.'
                : 'Chez Skillia, nous croyons que la transformation des entreprises par l\'IA et la Data est une évolution inévitable et fondamentale.'}
            </p>
            
            <p className="text-lg text-skillia-gray-dark">
              {language === 'en'
                ? 'These technologies are redefining the rules of the game, transforming not only tools, but also business models, strategic decisions, and how value is created.'
                : 'Ces technologies redéfinissent les règles du jeu, transformant non seulement les outils, mais aussi les modèles économiques, les décisions stratégiques, et la manière de créer de la valeur.'}
            </p>
            
            <p className="text-lg text-skillia-gray-dark">
              {language === 'en'
                ? 'Adopting AI and Data is no longer an option: it\'s the driving force shaping the future of businesses.'
                : 'Adopter l\'IA et la Data n\'est plus une option : c\'est le moteur qui façonne l\'avenir des entreprises.'}
            </p>
          </div>
          
          <Button className="bg-skillia-purple hover:bg-opacity-90 text-white px-6 py-2">
            {language === 'en' ? 'Learn More' : 'En Savoir Plus'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
