import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Users, BookOpen, Award, Zap, Heart, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FormationsPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    // Navigate to home page with contact anchor
    navigate('/#contact', { replace: true });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-skillia-gray to-white">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-skillia-blue">
              {t('formations.title')}
            </h1>
            <p className="text-xl text-skillia-blue opacity-80 max-w-3xl mx-auto mb-8">
              {t('formations.subtitle')}
            </p>
            <Button 
              className="bg-[#FA2A88] hover:bg-opacity-90 text-white px-8 py-6 text-lg"
              onClick={handleContactClick}
            >
              {t('formations.cta')}
            </Button>
          </div>
        </section>

        {/* Formations sur-mesure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-skillia-blue mb-4">
                {t('formations.custom.title')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <GraduationCap className="w-16 h-16 text-[#403AF2] mx-auto mb-4" />
                  <CardTitle className="text-skillia-blue">
                    {t('formations.custom.ai.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-skillia-blue opacity-70 text-center">
                    {t('formations.custom.ai.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <BookOpen className="w-16 h-16 text-[#FA2A88] mx-auto mb-4" />
                  <CardTitle className="text-skillia-blue">
                    {t('formations.custom.automation.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-skillia-blue opacity-70 text-center">
                    {t('formations.custom.automation.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <Award className="w-16 h-16 text-[#403AF2] mx-auto mb-4" />
                  <CardTitle className="text-skillia-blue">
                    {t('formations.custom.cyber.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-skillia-blue opacity-70 text-center">
                    {t('formations.custom.cyber.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <Users className="w-16 h-16 text-[#FA2A88] mx-auto mb-4" />
                  <CardTitle className="text-skillia-blue">
                    {t('formations.custom.digital.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-skillia-blue opacity-70 text-center">
                    {t('formations.custom.digital.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-skillia-blue opacity-80">
                {t('formations.custom.target')}
              </p>
            </div>
          </div>
        </section>

        {/* Sourcing formateurs */}
        <section className="py-20 bg-skillia-gray">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-skillia-blue mb-8">
                {t('formations.sourcing.title')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#FA2A88] mt-1 flex-shrink-0" />
                  <p className="text-skillia-blue">
                    {t('formations.sourcing.point1')}
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#FA2A88] mt-1 flex-shrink-0" />
                  <p className="text-skillia-blue">
                    {t('formations.sourcing.point2')}
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#FA2A88] mt-1 flex-shrink-0" />
                  <p className="text-skillia-blue">
                    {t('formations.sourcing.point3')}
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#FA2A88] mt-1 flex-shrink-0" />
                  <p className="text-skillia-blue">
                    {t('formations.sourcing.point4')}
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Users className="w-20 h-20 text-[#403AF2] mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-skillia-blue mb-4">+100 Formateurs</h3>
                  <p className="text-skillia-blue opacity-70">
                    Experts certifiés et évalués dans tous les domaines tech et métiers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Skillia */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-skillia-blue mb-8">
                {t('formations.why.title')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <BookOpen className="w-16 h-16 text-[#403AF2] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-skillia-blue mb-4">
                  {t('formations.why.method.title')}
                </h3>
                <p className="text-skillia-blue opacity-70">
                  {t('formations.why.method.description')}
                </p>
              </div>
              
              <div className="text-center p-6">
                <Zap className="w-16 h-16 text-[#FA2A88] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-skillia-blue mb-4">
                  {t('formations.why.reactivity.title')}
                </h3>
                <p className="text-skillia-blue opacity-70">
                  {t('formations.why.reactivity.description')}
                </p>
              </div>
              
              <div className="text-center p-6">
                <Heart className="w-16 h-16 text-[#403AF2] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-skillia-blue mb-4">
                  {t('formations.why.quality.title')}
                </h3>
                <p className="text-skillia-blue opacity-70">
                  {t('formations.why.quality.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-[#403AF2] to-[#FA2A88]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('formations.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('formations.cta.description')}
            </p>
            <Button 
              className="bg-white text-[#403AF2] hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={handleContactClick}
            >
              {t('formations.cta.button')}
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FormationsPage;
