
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const expertises = [
  { label: 'IA & Data', href: '/ia-data' },
  { label: 'Transformation digitale', href: '/transformation' },
  { label: 'Cyber & résilience', href: '/cyber-resilience' },
  { label: 'Déploiement & adoption', href: '/deploiement-adoption' },
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
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" onClick={handleLinkClick} className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground">
          Skillia
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => handleMouseEnter('expertises')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1.5 text-[13px] font-sans font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Expertises
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${openDropdown === 'expertises' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'expertises' && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-popover rounded-lg shadow-lg py-2 animate-fade-in border border-border/50">
                {expertises.map(item => (
                  <Link key={item.href} to={item.href} onClick={handleLinkClick}
                    className="block px-5 py-2.5 text-[13px] font-sans text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/approche" onClick={handleLinkClick}
            className="text-[13px] font-sans font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors">
            Notre approche
          </Link>

          <div className="relative" onMouseEnter={() => handleMouseEnter('entities')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1.5 text-[13px] font-sans font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors">
              Entités
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${openDropdown === 'entities' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'entities' && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-popover rounded-lg shadow-lg py-2 animate-fade-in border border-border/50">
                {entities.map(item => (
                  <Link key={item.href} to={item.href} onClick={handleLinkClick}
                    className="block px-5 py-2.5 hover:bg-muted/50 transition-colors">
                    <span className="text-[13px] font-sans font-medium text-foreground/80 block">{item.label}</span>
                    <span className="text-[11px] font-sans text-muted-foreground">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/ressources" onClick={handleLinkClick}
            className="text-[13px] font-sans font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors">
            Ressources
          </Link>

          <Link to="/collectif" onClick={handleLinkClick}
            className="text-[13px] font-sans font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors">
            Collectif
          </Link>

          <Link to="/contact" onClick={handleLinkClick}
            className="text-[13px] font-sans font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </Link>

          <Link to="/contact" onClick={handleLinkClick}
            className="ml-4 text-[13px] font-sans font-medium tracking-wide px-5 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors">
            Prendre RDV
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-background border-t border-border/50 absolute w-full left-0 transition-all duration-400 overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
        <div className="container py-8 flex flex-col gap-1">
          <p className="editorial-label mb-3">Expertises</p>
          {expertises.map(item => (
            <Link key={item.href} to={item.href} onClick={handleLinkClick}
              className="py-2 text-sm font-sans text-foreground/70 hover:text-foreground transition-colors pl-4">
              {item.label}
            </Link>
          ))}

          <div className="h-px bg-border/50 my-4" />

          <Link to="/approche" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/70 hover:text-foreground transition-colors">
            Notre approche
          </Link>

          <div className="h-px bg-border/50 my-4" />

          <p className="editorial-label mb-3">Entités spécialisées</p>
          {entities.map(item => (
            <Link key={item.href} to={item.href} onClick={handleLinkClick}
              className="py-2 pl-4">
              <span className="text-sm font-sans text-foreground/70 block">{item.label}</span>
            </Link>
          ))}

          <div className="h-px bg-border/50 my-4" />

          <Link to="/ressources" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/70 hover:text-foreground">Ressources</Link>
          <Link to="/collectif" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/70 hover:text-foreground">Collectif</Link>
          <Link to="/contact" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/70 hover:text-foreground">Contact</Link>

          <div className="mt-6">
            <Link to="/contact" onClick={handleLinkClick}
              className="block text-center text-sm font-sans font-medium px-6 py-3 rounded-full bg-foreground text-background">
              Prendre RDV
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
