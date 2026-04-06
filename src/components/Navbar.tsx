
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const expertises = [
  { label: 'IA & Data', href: '/ia-data' },
  { label: 'Transformation digitale', href: '/transformation' },
  { label: 'Cyber & résilience', href: '/cyber-resilience' },
  { label: 'Déploiement, adoption & compétences', href: '/deploiement-adoption' },
];

const entities = [
  { label: 'Resillia', desc: 'Cyber & résilience expert', href: '/resillia' },
  { label: 'Skillia Tech', desc: 'Solutions IA sur mesure', href: '/tech' },
  { label: 'Skillia Academy', desc: 'Formation & compétences', href: '/academy' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'shadow-sm py-3' : 'py-4'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" onClick={handleLinkClick} className="flex items-center">
          <img src="/lovable-uploads/71f18a5e-02ac-4a09-8b12-6f093d2b9c4c.png" alt="Skillia" className="h-8" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {/* Expertises Dropdown */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('expertises')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-skillia-purple transition-colors rounded-md">
              Expertises <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === 'expertises' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'expertises' && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg border p-2 animate-fade-in">
                {expertises.map(item => (
                  <Link key={item.href} to={item.href} onClick={handleLinkClick}
                    className="block px-3 py-2.5 text-sm rounded-md hover:bg-secondary transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/approche" onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-skillia-purple transition-colors rounded-md">
            Notre approche
          </Link>

          {/* Entités Dropdown */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('entities')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-skillia-purple transition-colors rounded-md">
              Entités spécialisées <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === 'entities' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'entities' && (
              <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border p-2 animate-fade-in">
                {entities.map(item => (
                  <Link key={item.href} to={item.href} onClick={handleLinkClick}
                    className="block px-3 py-2.5 rounded-md hover:bg-secondary transition-colors">
                    <span className="text-sm font-medium block">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/ressources" onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-skillia-purple transition-colors rounded-md">
            Ressources
          </Link>

          <Link to="/collectif" onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-skillia-purple transition-colors rounded-md">
            Collectif
          </Link>

          <Link to="/contact" onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-skillia-purple transition-colors rounded-md">
            Contact
          </Link>

          <Button asChild size="sm" className="ml-3 bg-skillia-navy hover:bg-skillia-navy/90 text-white">
            <Link to="/contact">Prendre RDV</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden bg-white border-t absolute w-full left-0 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
        <div className="container py-4 flex flex-col gap-1">
          <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground px-3 py-2">Expertises</p>
          {expertises.map(item => (
            <Link key={item.href} to={item.href} onClick={handleLinkClick}
              className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors pl-6">
              {item.label}
            </Link>
          ))}
          
          <div className="border-t my-2" />
          
          <Link to="/approche" onClick={handleLinkClick} className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
            Notre approche
          </Link>
          
          <div className="border-t my-2" />
          
          <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground px-3 py-2">Entités spécialisées</p>
          {entities.map(item => (
            <Link key={item.href} to={item.href} onClick={handleLinkClick}
              className="px-3 py-2.5 rounded-md hover:bg-secondary transition-colors pl-6">
              <span className="text-sm font-medium block">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
            </Link>
          ))}

          <div className="border-t my-2" />
          
          <Link to="/ressources" onClick={handleLinkClick} className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors">Ressources</Link>
          <Link to="/collectif" onClick={handleLinkClick} className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors">Collectif</Link>
          <Link to="/contact" onClick={handleLinkClick} className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors">Contact</Link>
          
          <div className="mt-3">
            <Button asChild className="w-full bg-skillia-navy hover:bg-skillia-navy/90 text-white">
              <Link to="/contact" onClick={handleLinkClick}>Prendre RDV</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
