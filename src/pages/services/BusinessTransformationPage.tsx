
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, BarChart3, Bot, Database, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BusinessTransformationPage = () => {
  const { t, language } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = language === 'en' ? [
    {
      title: "AI-Driven Strategy",
      description: [
        "AI and Data-based business strategy definition",
        "Predictive and prescriptive models to guide decisions"
      ],
      icon: Brain
    },
    {
      title: "Intelligent Business Models",
      description: [
        "Creating business models based on data valuation",
        "Process optimization through data-driven insights"
      ],
      icon: BarChart3
    },
    {
      title: "Process Automation",
      description: [
        "Workflow automation using AI and Data",
        "Hyper-automation solutions enhanced by Agentic AI"
      ],
      icon: Bot
    },
    {
      title: "AI-Powered Data Management",
      description: [
        "AI-enhanced data governance",
        "Real-time data management solutions"
      ],
      icon: Database
    },
    {
      title: "Customer Intelligence",
      description: [
        "Optimize your business decisions and processes with our innovative solutions"
      ],
      icon: Users
    }
  ] : [
    {
      title: "AI-Driven Strategy",
      description: [
        "Définition de stratégies d'entreprise basées sur l'IA et la Data",
        "Modèles prédictifs et prescriptifs pour guider les décisions"
      ],
      icon: Brain
    },
    {
      title: "Intelligent Business Models",
      description: [
        "Création de modèles économiques basés sur la valorisation des données",
        "Optimisation des processus grâce à des insights tirés de la Data"
      ],
      icon: BarChart3
    },
    {
      title: "Process Automation",
      description: [
        "Automatisation des workflows grâce à l'IA et à la Data",
        "Solutions d'hyper-automatisation augmentées par l'Agentic AI"
      ],
      icon: Bot
    },
    {
      title: "AI-Powered Data Management",
      description: [
        "Gouvernance des données augmentée par l'IA",
        "Solutions pour la gestion des données en temps réel"
      ],
      icon: Database
    },
    {
      title: "Customer Intelligence",
      description: [
        "Optimisez vos décisions et processus métiers grâce à nos solutions innovantes"
      ],
      icon: Users
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
              {t('services.business.title')}
            </h1>
            <p className="text-xl max-w-3xl text-black">
              {t('business.subtitle')}
            </p>
          </div>
        </section>

        {/* Cards section with improved spacing and layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessTransformationPage;
