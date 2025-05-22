
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Cloud, Code, Zap, Database, Shield, Cpu, Network } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TechnologyFoundationsPage = () => {
  const { t } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: t('tech.service1.title'),
      description: [
        t('tech.service1.point1'),
        t('tech.service1.point2')
      ],
      icon: Server,
      color: 'bg-blue-100'
    },
    {
      title: t('tech.service2.title'),
      description: [
        t('tech.service2.point1'),
        t('tech.service2.point2')
      ],
      icon: Cloud,
      color: 'bg-purple-100'
    },
    {
      title: t('tech.service3.title'),
      description: [
        t('tech.service3.point1'),
        t('tech.service3.point2')
      ],
      icon: Database,
      color: 'bg-green-100'
    },
    {
      title: t('tech.service4.title'),
      description: [
        t('tech.service4.point1'),
        t('tech.service4.point2')
      ],
      icon: Cpu,
      color: 'bg-rose-100'
    }
  ];
  
  // New additional services
  const additionalServices = [
    {
      title: "Automatisation des processus",
      description: [
        "Création de workflows automatisés pour optimiser les opérations",
        "Intégration de solutions d'automatisation dans l'infrastructure existante"
      ],
      icon: Code,
      color: 'bg-amber-100'
    },
    {
      title: "Sécurité des infrastructures",
      description: [
        "Mise en place de systèmes de protection avancés",
        "Audits et renforcement des infrastructures existantes"
      ],
      icon: Shield,
      color: 'bg-red-100'
    },
    {
      title: "Optimisation des performances",
      description: [
        "Analyse et amélioration des performances des systèmes",
        "Solutions de scaling pour les infrastructures à forte charge"
      ],
      icon: Zap,
      color: 'bg-cyan-100'
    },
    {
      title: "Connectivité & Intégration",
      description: [
        "Solutions d'interconnexion entre systèmes hétérogènes",
        "APIs et microservices pour une architecture modulaire"
      ],
      icon: Network,
      color: 'bg-indigo-100'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section with increased spacing */}
        <section className="bg-[#F6F6F6] pt-32 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#403AF2]">
              {t('services.technology.title')}
            </h1>
            <p className="text-xl max-w-3xl text-black">
              {t('tech.subtitle')}
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
                    className={`h-full transition-all duration-300 hover:shadow-xl border-t-4 border-t-skillia-blue group transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:translate-y-4' : ''}`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${service.color} rounded-lg text-skillia-blue group-hover:bg-skillia-blue/20 transition-colors`}>
                          <Icon size={28} />
                        </div>
                        <CardTitle className="text-xl font-semibold text-[#403AF2]">
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

        {/* Alternating section with colored background */}
        <section className="py-20 bg-skillia-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-[#403AF2] text-center">
              Services complémentaires
            </h2>

            <div className="grid gap-10 md:grid-cols-2">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index} 
                    className={`h-full transition-all duration-300 hover:shadow-xl border-none group transform hover:-translate-y-1 overflow-hidden`}
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 ${service.color} rounded-bl-full -z-0 opacity-50`}></div>
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${service.color} rounded-lg text-skillia-blue group-hover:bg-skillia-blue/20 transition-colors`}>
                          <Icon size={28} />
                        </div>
                        <CardTitle className="text-xl font-semibold text-[#403AF2]">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 pb-6 px-6 relative z-10">
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
