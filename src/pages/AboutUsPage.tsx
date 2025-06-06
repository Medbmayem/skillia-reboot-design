
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const AboutUsPage = () => {
  // Scroll to the top of the page when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with increased top padding */}
        <section className="bg-[#F6F6F6] py-16 pt-32 md:pt-40">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#403AF2]">
              Qui sommes nous ?
            </h1>
            <p className="text-xl max-w-3xl text-black">
              Les experts AI-powered de la transformation de votre business
            </p>
          </div>
        </section>
        
        {/* Company Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#403AF2] text-center">
              SKILLIA est une entreprise de services numériques AI-Powered
            </h2>
            <p className="text-lg text-black text-center max-w-3xl mx-auto">
              Chez Skillia, nous accompagnons les entreprises dans leur transition vers un Business Intelligent, 
              en plaçant l'Intelligence Artificielle (IA) et la Data au cœur de leurs stratégies.
            </p>
            <p className="text-lg text-black text-center max-w-3xl mx-auto mt-4">
              Nous proposons des solutions innovantes et performantes qui transforment les business model, 
              renforcent la sécurité des écosystèmes, et s'appuient sur des infrastructures technologiques robustes.
            </p>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-[#F6F6F6]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-[#403AF2] text-center">Nos Valeurs</h2>
            <p className="text-lg text-black text-center max-w-3xl mx-auto mb-12">
              Chez Skillia, nous plaçons l'innovation responsable au cœur de nos actions, 
              en utilisant l'IA et la Data pour créer un impact durable et éthique.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="h-full bg-[#FA2A88] hover:bg-white transition-colors duration-300 group border-none shadow-md hover:shadow-lg">
                <CardContent className="pt-6 flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#403AF2] mb-4 text-center transition-colors duration-300">
                    Innovation Responsable
                  </h3>
                  <p className="text-transparent h-0 group-hover:h-auto group-hover:text-black group-hover:mt-4 text-center transition-all duration-300 overflow-hidden group-hover:overflow-visible">
                    Placer l'IA et la Data au service de solutions éthiques, durables
                    et adaptées aux défis de demain
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full bg-[#FA2A88] hover:bg-white transition-colors duration-300 group border-none shadow-md hover:shadow-lg">
                <CardContent className="pt-6 flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#403AF2] mb-4 text-center transition-colors duration-300">
                    Excellence Collaborative
                  </h3>
                  <p className="text-transparent h-0 group-hover:h-auto group-hover:text-black group-hover:mt-4 text-center transition-all duration-300 overflow-hidden group-hover:overflow-visible">
                    Encourager une collaboration transparente entre experts, partneaires et clients 
                    pour atteindre des résultats stratégiques et concrets
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full bg-[#FA2A88] hover:bg-white transition-colors duration-300 group border-none shadow-md hover:shadow-lg">
                <CardContent className="pt-6 flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#403AF2] mb-4 text-center transition-colors duration-300">
                    Éthique & confiance
                  </h3>
                  <p className="text-transparent h-0 group-hover:h-auto group-hover:text-black group-hover:mt-4 text-center transition-all duration-300 overflow-hidden group-hover:overflow-visible">
                    Garantir des écosystèmes numériques sûrs et éthique, où la confiance 
                    est le pilier des relations avec nos clients
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
