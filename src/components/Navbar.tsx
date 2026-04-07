
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const expertises = [
  { label: 'IA & Data', href: '/ia-data' },
  { label: 'Transformation digitale', href: '/transformation' },
  { label: 'Cyber & résilience', href: '/cyber-resilience' },
  { label: 'Déploiement & adoption', href: '/deploiement-adoption' },
];

const entities = [
  { label: 'Resillia', href: '/resillia' },
  { label: 'Skillia Tech', href: '/tech' },
  { label: 'Skillia Academy', href: '/academy' },
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
          ? 'bg-background/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" onClick={handleLinkClick} className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground">
          Skillia
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          <div className="relative" onMouseEnter={() => handleMouseEnter('expertises')} onMouseLeave={handleMouseLeave}>
            <button className="text-[13px] font-sans font-medium tracking-wide text-foreground/60 hover:text-foreground transition-colors">
              Expertises
            </button>
            {openDropdown === 'expertises' && (
              <div className="absolute top-full left-0 mt-4 w-56 bg-background py-3 animate-fade-in">
                {expertises.map(item => (
                  <Link key={item.href} to={item.href} onClick={handleLinkClick}
                    className="block px-0 py-2 text-[13px] font-sans text-foreground/50 hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/approche" onClick={handleLinkClick}
            className="text-[13px] font-sans font-medium tracking-wide text-foreground/60 hover:text-foreground transition-colors">
            Notre approche
          </Link>

          <div className="relative" onMouseEnter={() => handleMouseEnter('entities')} onMouseLeave={handleMouseLeave}>
            <button className="text-[13px] font-sans font-medium tracking-wide text-foreground/60 hover:text-foreground transition-colors">
              Entités
            </button>
            {openDropdown === 'entities' && (
              <div className="absolute top-full left-0 mt-4 w-48 bg-background py-3 animate-fade-in">
                {entities.map(item => (
                  <Link key={item.href} to={item.href} onClick={handleLinkClick}
                    className="block py-2 text-[13px] font-sans text-foreground/50 hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/ressources" onClick={handleLinkClick}
            className="text-[13px] font-sans font-medium tracking-wide text-foreground/60 hover:text-foreground transition-colors">
            Ressources
          </Link>

          <Link to="/collectif" onClick={handleLinkClick}
            className="text-[13px] font-sans font-medium tracking-wide text-foreground/60 hover:text-foreground transition-colors">
            Collectif
          </Link>

          <Link to="/contact" onClick={handleLinkClick}
            className="text-[13px] font-sans font-medium tracking-wide text-foreground/60 hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-background absolute w-full left-0 transition-all duration-400 overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
        <div className="container py-8 flex flex-col gap-1">
          <p className="editorial-label mb-3">Expertises</p>
          {expertises.map(item => (
            <Link key={item.href} to={item.href} onClick={handleLinkClick}
              className="py-2 text-sm font-sans text-foreground/60 hover:text-foreground transition-colors pl-4">
              {item.label}
            </Link>
          ))}

          <div className="h-px bg-border/30 my-5" />

          <Link to="/approche" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/60 hover:text-foreground transition-colors">
            Notre approche
          </Link>

          <div className="h-px bg-border/30 my-5" />

          <p className="editorial-label mb-3">Entités</p>
          {entities.map(item => (
            <Link key={item.href} to={item.href} onClick={handleLinkClick}
              className="py-2 pl-4 text-sm font-sans text-foreground/60 hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}

          <div className="h-px bg-border/30 my-5" />

          <Link to="/ressources" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/60 hover:text-foreground">Ressources</Link>
          <Link to="/collectif" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/60 hover:text-foreground">Collectif</Link>
          <Link to="/contact" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/60 hover:text-foreground">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
