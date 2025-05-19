
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-skillia-blue">SKILLIA</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors">
            Services
          </a>
          <a href="#about" className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors">
            À propos
          </a>
          <a href="#testimonials" className="text-skillia-blue hover:text-opacity-80 font-medium transition-colors">
            Témoignages
          </a>
          <a href="#contact">
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
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-skillia-blue py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#testimonials" 
              className="text-skillia-blue py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#contact" 
              className="py-2"
              onClick={() => setIsOpen(false)}
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
