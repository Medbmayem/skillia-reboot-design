
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Users, BookOpen, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SkiliaLearningHub = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleFormationsClick = () => {
    navigate('/formations');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleContactClick = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If on home page, jump directly to contact section using anchor
      window.location.hash = 'contact';
    } else {
      // Navigate to home page with contact anchor
      navigate('/#contact', { replace: true });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-skillia-gray to-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left side - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-skillia-blue">
                {t('learning.title')}
              </h2>
              <p className="text-xl text-[#403AF2] font-semibold">
                {t('learning.subtitle')}
              </p>
            </div>
            
            <p className="text-lg text-skillia-blue opacity-80 leading-relaxed mb-12">
              {t('learning.description')}
            </p>
            
            <Button 
              className="bg-[#FA2A88] hover:bg-opacity-90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={handleFormationsClick}
            >
              {t('learning.button')}
            </Button>
          </div>

          {/* Right side - Visual elements */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Card 1 - IA */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-[#403AF2]">
                <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-[#403AF2] mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg text-skillia-blue mb-2">Intelligence Artificielle</h3>
                <p className="text-xs sm:text-sm text-skillia-blue opacity-70">Formations pratiques pour métiers non-techniques</p>
              </div>

              {/* Card 2 - Automatisation */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-[#FA2A88] sm:mt-8">
                <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-[#FA2A88] mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg text-skillia-blue mb-2">Automatisation</h3>
                <p className="text-xs sm:text-sm text-skillia-blue opacity-70">Outils No-Code et processus digitaux</p>
              </div>

              {/* Card 3 - Cybersécurité */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-[#403AF2]">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#403AF2] mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg text-skillia-blue mb-2">Cybersécurité</h3>
                <p className="text-xs sm:text-sm text-skillia-blue opacity-70">Sensibilisation et opérationnel</p>
              </div>

              {/* Card 4 - Sourcing */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-[#FA2A88] sm:mt-8">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#FA2A88] mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg text-skillia-blue mb-2">Sourcing Formateurs</h3>
                <p className="text-xs sm:text-sm text-skillia-blue opacity-70">Réseau d'experts certifiés</p>
              </div>

            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#403AF2] opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FA2A88] opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkiliaLearningHub;
