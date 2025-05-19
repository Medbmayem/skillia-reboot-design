
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
          <a 
            href="#services" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
          <Link 
            to="/about" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={handleLinkClick}
          >
            Nous découvrir
          </Link>
          <a 
            href="#contact" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-skillia-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-skillia-blue py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              Services
            </a>
            <Link 
              to="/about" 
              className="text-skillia-blue py-2 font-medium"
              onClick={handleLinkClick}
            >
              Nous découvrir
            </Link>
            <a 
              href="#contact" 
              className="text-skillia-blue py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
