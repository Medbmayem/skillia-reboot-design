
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Data & AI Platforms & Architecture",
    description: [
      "Conception et déploiement de plateformes Data AI-driven",
      "Conception des architectures Data-Driven et AI-centric"
    ]
  },
  {
    title: "Cloud & Data Infrastructure",
    description: [
      "Migration et optimisation des environnements Cloud pour des charges intensives en IA et Data",
      "Plateformes technologiques robustes pour soutenir des modèles business complexes"
    ]
  },
  {
    title: "DevSecOps",
    description: [
      "Intégration de la sécurité dans les pipelines DevOps",
      "Automatisation des tests de sécurité dans les déploiements"
    ]
  },
  {
    title: "Performance Industrialization",
    description: [
      "Adoption d'une approche AIOps pour l'industrialisation des plateformes",
      "Amélioration des performances des systèmes IA/Data tout en réduisant les coûts opérationnels"
    ]
  }
];

const TechnologyFoundationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-skillia-blue text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Technology Foundations
            </h1>
            <p className="text-xl max-w-3xl">
              Déployer des fondations technologiques performantes pour soutenir l'IA, la Data et la cybersécurité à grande échelle
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
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

export default TechnologyFoundationsPage;
