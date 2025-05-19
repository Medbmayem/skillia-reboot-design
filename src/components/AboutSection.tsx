
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-skillia-gray">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Skillia Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-skillia-blue p-4 md:p-6 rounded-lg shadow-lg">
                <p className="text-white font-semibold text-lg md:text-xl">
                  Depuis 2021
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-skillia-blue">
              Notre Mission et Nos Valeurs
            </h2>
            
            <p className="text-lg mb-6 text-skillia-blue opacity-80">
              Transformez votre entreprise en combinant advisory, technologies de pointe et programmes de formation adaptés.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-skillia-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-skillia-blue">
                    Advise
                  </h3>
                  <p className="text-skillia-blue opacity-80">
                    A travers notre compréhension du contexte métier, nous identifions les opportunités offertes par les techs AI-Driven pour définir une stratégie claire et des objectifs mesurables.
                  </p>
                  <p className="text-skillia-blue opacity-80 mt-2">
                    Nous vous aidons à prioriser les initiatives à fort impact et à bâtir une feuille de route alignée avec vos ambitions stratégiques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-skillia-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-skillia-blue">
                    Implement
                  </h3>
                  <p className="text-skillia-blue opacity-80">
                    Nous concevons et mettons en œuvre des projets technologiques industrialisables qui exploitent l'IA, la data et les solutions Cloud dans un écosystème sécurisé et durable. Nous sélectionnons les outils et les plateformes les plus adaptés, pilotons leur déploiement de bout en bout et assurons le suivi des performances pour garantir des résultats mesurables.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-skillia-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-skillia-blue">
                    Enable
                  </h3>
                  <p className="text-skillia-blue opacity-80">
                    Nous préparons votre organisation à tirer le meilleur parti de l'IA et des modern techs. Nos programmes d'acculturation et de learning renforcent la culture d'entreprise AI-Driven, favorisent l'adhésion aux nouvelles pratiques et créent une culture d'innovation. Votre organisation gagne ainsi en agilité, en expertise, et en impact durable.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-skillia-blue hover:bg-opacity-90 text-white">
              En savoir plus sur notre équipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
