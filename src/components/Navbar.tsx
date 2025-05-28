
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ease-in-out ${
        scrolled ? 'shadow-lg py-2' : 'shadow-md py-3'
      }`}
    >
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
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors hover:text-[#403AF2] py-2"
            onClick={handleLinkClick}
          >
            {t('nav.home')}
          </Link>
          <a 
            href="#services" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors hover:text-[#403AF2] py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Consulting
          </a>
          <Link 
            to="/formations" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors hover:text-[#403AF2] py-2"
            onClick={handleLinkClick}
          >
            Formation
          </Link>
          <Link 
            to="/about" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors hover:text-[#403AF2] py-2"
            onClick={handleLinkClick}
          >
            {t('nav.about')}
          </Link>
          <a 
            href="#contact" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors hover:text-[#403AF2] py-2"
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
            className="ml-4 text-skillia-blue p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with improved animation */}
      <div 
        className={`md:hidden bg-white shadow-lg absolute w-full left-0 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container py-4 flex flex-col space-y-6 px-6">
          <Link 
            to="/" 
            className="text-skillia-blue py-3 font-medium text-lg border-b border-gray-100 hover:text-[#403AF2] transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.home')}
          </Link>
          <a 
            href="#services" 
            className="text-skillia-blue py-3 font-medium text-lg border-b border-gray-100 hover:text-[#403AF2] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Consulting
          </a>
          <Link 
            to="/formations" 
            className="text-skillia-blue py-3 font-medium text-lg border-b border-gray-100 hover:text-[#403AF2] transition-colors"
            onClick={handleLinkClick}
          >
            Formation
          </Link>
          <Link 
            to="/about" 
            className="text-skillia-blue py-3 font-medium text-lg border-b border-gray-100 hover:text-[#403AF2] transition-colors"
            onClick={handleLinkClick}
          >
            {t('nav.about')}
          </Link>
          <a 
            href="#contact" 
            className="text-skillia-blue py-3 font-medium text-lg hover:text-[#403AF2] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
