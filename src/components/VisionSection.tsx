
import React from 'react';
import { Button } from '@/components/ui/button';

const VisionSection = () => {
  return (
    <section className="section bg-skillia-gray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-skillia-blue">
            Notre Vision
          </h2>
          
          <div className="space-y-6 mb-8 animate-fade-in">
            <p className="text-lg text-skillia-gray-dark">
              Chez Skillia, nous croyons que la transformation des entreprises par l'IA et la Data est une évolution inévitable et fondamentale.
            </p>
            
            <p className="text-lg text-skillia-gray-dark">
              Ces technologies redéfinissent les règles du jeu, transformant non seulement les outils, mais aussi les modèles économiques, les décisions stratégiques, et la manière de créer de la valeur.
            </p>
            
            <p className="text-lg text-skillia-gray-dark">
              Adopter l'IA et la Data n'est plus une option : c'est le moteur qui façonne l'avenir des entreprises.
            </p>
          </div>
          
          <Button className="bg-skillia-purple hover:bg-opacity-90 text-white px-6 py-2">
            En Savoir Plus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
