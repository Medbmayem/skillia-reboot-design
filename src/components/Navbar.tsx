
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then to section
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" onClick={handleLinkClick} className="flex items-center">
          <img 
            src="/lovable-uploads/71f18a5e-02ac-4a09-8b12-6f093d2b9c4c.png" 
            alt="SKILLIA Logo" 
            className="h-10" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.home')}
          </Link>
          <a 
            href="#services" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            {t('nav.services')}
          </a>
          <Link 
            to="/about" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.about')}
          </Link>
          <a 
            href="#contact" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            {t('nav.contact')}
          </a>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <button 
            className="ml-4 text-skillia-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-skillia-blue py-2 font-medium"
              onClick={handleLinkClick}
            >
              {t('nav.home')}
            </Link>
            <a 
              href="#services" 
              className="text-skillia-blue py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              {t('nav.services')}
            </a>
            <Link 
              to="/about" 
              className="text-skillia-blue py-2 font-medium"
              onClick={handleLinkClick}
            >
              {t('nav.about')}
            </Link>
            <a 
              href="#contact" 
              className="text-skillia-blue py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
