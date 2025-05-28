
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.business.title'),
      description: t('services.business.description'),
      icon: (
        <svg className="w-12 h-12 text-skillia-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "/services/business-transformation"
    },
    {
      title: t('services.secure.title'),
      description: t('services.secure.description'),
      icon: (
        <svg className="w-12 h-12 text-[#FA2A88]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      link: "/services/secure-ecosystems"
    },
    {
      title: t('services.technology.title'),
      description: t('services.technology.description'),
      icon: (
        <svg className="w-12 h-12 text-[#403AF2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: "/services/technology-foundations"
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#403AF2]">
            {t('services.title')}
          </h2>
          <p className="text-lg text-skillia-blue opacity-80">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-skillia-blue flex flex-col">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#403AF2]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-skillia-blue opacity-80 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link to={service.link} className="self-start mt-auto">
                    <Button variant="outline" className="border-skillia-blue text-skillia-blue hover:bg-skillia-gray">
                      {t('services.discover')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
