
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Cloud, Code, Zap } from 'lucide-react';
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
      icon: Server
    },
    {
      title: t('tech.service2.title'),
      description: [
        t('tech.service2.point1'),
        t('tech.service2.point2')
      ],
      icon: Cloud
    },
    {
      title: t('tech.service3.title'),
      description: [
        t('tech.service3.point1'),
        t('tech.service3.point2')
      ],
      icon: Code
    },
    {
      title: t('tech.service4.title'),
      description: [
        t('tech.service4.point1'),
        t('tech.service4.point2')
      ],
      icon: Zap
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

export default TechnologyFoundationsPage;
