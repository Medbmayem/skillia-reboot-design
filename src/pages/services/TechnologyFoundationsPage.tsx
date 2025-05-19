
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Cloud, Code, Zap } from 'lucide-react';

const services = [
  {
    title: "Data & AI Platforms & Architecture",
    description: [
      "Conception et déploiement de plateformes Data AI-driven",
      "Conception des architectures Data-Driven et AI-centric"
    ],
    icon: Server
  },
  {
    title: "Cloud & Data Infrastructure",
    description: [
      "Migration et optimisation des environnements Cloud pour des charges intensives en IA et Data",
      "Plateformes technologiques robustes pour soutenir des modèles business complexes"
    ],
    icon: Cloud
  },
  {
    title: "DevSecOps",
    description: [
      "Intégration de la sécurité dans les pipelines DevOps",
      "Automatisation des tests de sécurité dans les déploiements"
    ],
    icon: Code
  },
  {
    title: "Performance Industrialization",
    description: [
      "Adoption d'une approche AIOps pour l'industrialisation des plateformes",
      "Amélioration des performances des systèmes IA/Data tout en réduisant les coûts opérationnels"
    ],
    icon: Zap
  }
];

const TechnologyFoundationsPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section with increased spacing */}
        <section className="bg-[#F6F6F6] pt-32 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#F6F6F6]">
              Advanced Technology Foundations
            </h1>
            <p className="text-xl max-w-3xl text-black">
              Déployer des fondations technologiques performantes pour soutenir l'IA, la Data et la cybersécurité à grande échelle
            </p>
          </div>
        </section>

        {/* Cards section with improved spacing and layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index} 
                    className="h-full transition-all duration-300 hover:shadow-lg border-t-4 border-t-skillia-blue group"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-skillia-blue/10 rounded-lg text-skillia-blue group-hover:bg-skillia-blue/20 transition-colors">
                          <Icon size={24} />
                        </div>
                        <CardTitle className="text-xl font-semibold text-[#F6F6F6]">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 pb-6 px-6">
                      <ul className="space-y-3 text-black">
                        {service.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-skillia-purple font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TechnologyFoundationsPage;
