
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-skillia-blue hover:bg-skillia-lightblue hover:text-skillia-blue"
    >
      <Globe size={16} />
      <span>{t('language')}</span>
    </Button>
  );
};

export default LanguageSwitcher;
