
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "AI-Driven Strategy",
    description: [
      "Définition de stratégies d'entreprise basées sur l'IA et la Data",
      "Modèles prédictifs et prescriptifs pour guider les décisions"
    ]
  },
  {
    title: "Intelligent Business Models",
    description: [
      "Création de modèles économiques basés sur la valorisation des données",
      "Optimisation des processus grâce à des insights tirés de la Data"
    ]
  },
  {
    title: "Process Automation",
    description: [
      "Automatisation des workflows grâce à l'IA et à la Data",
      "Solutions d'hyper-automatisation augmentées par l'Agentic AI"
    ]
  },
  {
    title: "AI-Powered Data Management",
    description: [
      "Gouvernance des données augmentée par l'IA",
      "Solutions pour la gestion des données en temps réel"
    ]
  },
  {
    title: "Customer Intelligence",
    description: [
      "Optimisez vos décisions et processus métiers grâce à nos solutions innovantes"
    ]
  }
];

const BusinessTransformationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-[#F0F0F0] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-skillia-blue">
              Intelligent Business & Data Transformation
            </h1>
            <p className="text-xl max-w-3xl text-skillia-blue">
              Transformer les modèles business en exploitant l'IA et la Data pour créer des entreprises plus intelligentes, plus performantes et prêtes pour l'avenir.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-skillia-blue">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-skillia-blue">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-skillia-blue opacity-80">
                      {service.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#403AF2] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessTransformationPage;
