
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/71f18a5e-02ac-4a09-8b12-6f093d2b9c4c.png" 
            alt="SKILLIA Logo" 
            className="h-10" 
          />
        </a>
        
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
          <a 
            href="#about" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault(); 
              scrollToSection('about');
            }}
          >
            À propos
          </a>
          <a 
            href="#testimonials" 
            className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('testimonials');
            }}
          >
            Témoignages
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <Button className="bg-skillia-blue hover:bg-opacity-90 text-white">
              Contact
            </Button>
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
            <a 
              href="#about" 
              className="text-skillia-blue py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              À propos
            </a>
            <a 
              href="#testimonials" 
              className="text-skillia-blue py-2 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('testimonials');
              }}
            >
              Témoignages
            </a>
            <a 
              href="#contact" 
              className="py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <Button className="w-full bg-skillia-blue hover:bg-opacity-90 text-white">
                Contact
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
