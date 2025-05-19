
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Cybersecurity Intelligence",
    description: [
      "Solutions avancées de cybersécurité (SOC & SIEM augmentés par l'IA, détection des menaces, réponse aux incidents)",
      "Protection proactive contre les cyberattaques ciblées"
    ]
  },
  {
    title: "AI Security & Compliance",
    description: [
      "Sécurisation des environnements Data et IA",
      "Mise en conformité avec les réglementations (AI Act, GDPR, ISO 27001, etc.)"
    ]
  },
  {
    title: "Risk Management & Resilience",
    description: [
      "Gestion des risques liés aux données et aux infrastructures",
      "Plans de continuité d'activité (BCP) et de reprise après sinistre (DRP)"
    ]
  },
  {
    title: "Ethical AI & Data Governance",
    description: [
      "Gouvernance éthique des données et des systèmes IA",
      "Gestion de la confidentialité et des consentements pour les utilisateurs"
    ]
  }
];

const SecureEcosystemsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-[#F0F0F0] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-skillia-blue">
              Secure & Trusted Ecosystems
            </h1>
            <p className="text-xl max-w-3xl text-skillia-blue">
              Créer des écosystèmes intelligents sécurisés, conformes aux réglementations, résilients et capables de soutenir une innovation responsable
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

export default SecureEcosystemsPage;
