
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Database, Users } from 'lucide-react';

const services = [
  {
    title: "Cybersecurity Intelligence",
    description: [
      "Solutions avancées de cybersécurité (SOC & SIEM augmentés par l'IA, détection des menaces, réponse aux incidents)",
      "Protection proactive contre les cyberattaques ciblées"
    ],
    icon: Shield
  },
  {
    title: "AI Security & Compliance",
    description: [
      "Sécurisation des environnements Data et IA",
      "Mise en conformité avec les réglementations (AI Act, GDPR, ISO 27001, etc.)"
    ],
    icon: Lock
  },
  {
    title: "Risk Management & Resilience",
    description: [
      "Gestion des risques liés aux données et aux infrastructures",
      "Plans de continuité d'activité (BCP) et de reprise après sinistre (DRP)"
    ],
    icon: Database
  },
  {
    title: "Ethical AI & Data Governance",
    description: [
      "Gouvernance éthique des données et des systèmes IA",
      "Gestion de la confidentialité et des consentements pour les utilisateurs"
    ],
    icon: Users
  }
];

const SecureEcosystemsPage = () => {
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
              Secure & Trusted Ecosystems
            </h1>
            <p className="text-xl max-w-3xl text-black">
              Créer des écosystèmes intelligents sécurisés, conformes aux réglementations, résilients et capables de soutenir une innovation responsable
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

export default SecureEcosystemsPage;
