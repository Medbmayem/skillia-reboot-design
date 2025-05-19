
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
                  Depuis 2015
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-skillia-blue">
              Notre Mission et Nos Valeurs
            </h2>
            
            <p className="text-lg mb-6 text-skillia-blue opacity-80">
              Chez Skillia, nous comprenons que la révolution numérique transforme tous les secteurs d'activité. Notre mission est d'accompagner les entreprises dans cette transition avec des solutions intelligentes et sécurisées.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-skillia-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-skillia-blue">
                    Excellence Technique
                  </h3>
                  <p className="text-skillia-blue opacity-80">
                    Nous maintenons une veille technologique constante pour vous proposer les solutions les plus innovantes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-skillia-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-skillia-blue">
                    Sécurité Sans Compromis
                  </h3>
                  <p className="text-skillia-blue opacity-80">
                    La protection des données et systèmes de nos clients est notre priorité absolue.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-skillia-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-skillia-blue">
                    Approche Collaborative
                  </h3>
                  <p className="text-skillia-blue opacity-80">
                    Nous travaillons en étroite collaboration avec nos clients pour développer des solutions sur mesure.
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
