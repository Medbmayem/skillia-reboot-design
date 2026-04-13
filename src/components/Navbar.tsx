
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
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); // Set initial state immediately
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

  // On homepage at top: light text on dark hero. Otherwise: dark text on light bg.
  const isTransparent = isHomePage && !scrolled;

  const textClass = isTransparent ? 'text-white' : 'text-foreground';
  const textMutedClass = isTransparent ? 'text-white/70' : 'text-foreground/60';
  const textHoverClass = isTransparent ? 'hover:text-white' : 'hover:text-foreground';
  const burgerClass = isTransparent ? 'text-white' : 'text-foreground';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          onClick={handleLinkClick}
          className={`font-serif text-2xl md:text-[1.7rem] font-semibold tracking-[-0.02em] transition-colors duration-300 ${textClass}`}
          style={isTransparent ? { textShadow: '0 1px 8px rgba(0,0,0,0.3)' } : undefined}
        >
          Skillia
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-baseline gap-9"
          style={{ marginTop: 'auto', marginBottom: 'auto' }}
        >
          {/* Shared styles for all nav items */}
          {/* Expertises dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('expertises')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-[13px] leading-none font-sans font-medium tracking-wide transition-colors duration-300 ${textMutedClass} ${textHoverClass}`}
              style={isTransparent ? { textShadow: '0 1px 6px rgba(0,0,0,0.25)' } : undefined}
            >
              Expertises
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                openDropdown === 'expertises'
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-1'
              }`}
            >
              <div className="w-56 bg-background rounded-md shadow-lg border border-border/40 py-2">
                {expertises.map(item => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleLinkClick}
                    className="block px-5 py-2.5 text-[13px] font-sans text-foreground/60 hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/approche"
            onClick={handleLinkClick}
            className={`text-[13px] leading-none font-sans font-medium tracking-wide transition-colors duration-300 ${textMutedClass} ${textHoverClass}`}
            style={isTransparent ? { textShadow: '0 1px 6px rgba(0,0,0,0.25)' } : undefined}
          >
            Notre approche
          </Link>

          {/* Entities dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('entities')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-[13px] leading-none font-sans font-medium tracking-wide transition-colors duration-300 ${textMutedClass} ${textHoverClass}`}
              style={isTransparent ? { textShadow: '0 1px 6px rgba(0,0,0,0.25)' } : undefined}
            >
              Entités spécialisées
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                openDropdown === 'entities'
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-1'
              }`}
            >
              <div className="w-48 bg-background rounded-md shadow-lg border border-border/40 py-2">
                {entities.map(item => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleLinkClick}
                    className="block px-5 py-2.5 text-[13px] font-sans text-foreground/60 hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/ressources"
            onClick={handleLinkClick}
            className={`text-[13px] leading-none font-sans font-medium tracking-wide transition-colors duration-300 ${textMutedClass} ${textHoverClass}`}
            style={isTransparent ? { textShadow: '0 1px 6px rgba(0,0,0,0.25)' } : undefined}
          >
            Ressources
          </Link>

          <Link
            to="/use-cases"
            onClick={handleLinkClick}
            className={`text-[13px] leading-none font-sans font-medium tracking-wide transition-colors duration-300 ${textMutedClass} ${textHoverClass}`}
            style={isTransparent ? { textShadow: '0 1px 6px rgba(0,0,0,0.25)' } : undefined}
          >
            Cas d&apos;usage
          </Link>

          <Link
            to="/collectif"
            onClick={handleLinkClick}
            className={`text-[13px] leading-none font-sans font-medium tracking-wide transition-colors duration-300 ${textMutedClass} ${textHoverClass}`}
            style={isTransparent ? { textShadow: '0 1px 6px rgba(0,0,0,0.25)' } : undefined}
          >
            Collectif
          </Link>

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`text-[13px] leading-none font-sans font-medium tracking-wide transition-colors duration-300 ${textMutedClass} ${textHoverClass}`}
            style={isTransparent ? { textShadow: '0 1px 6px rgba(0,0,0,0.25)' } : undefined}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${burgerClass}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-background absolute w-full left-0 top-full transition-all duration-300 ${
          isOpen
            ? 'max-h-[80vh] opacity-100 overflow-y-auto shadow-lg'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
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
          <Link to="/use-cases" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/60 hover:text-foreground">Cas d'usage</Link>
          <Link to="/collectif" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/60 hover:text-foreground">Collectif</Link>
          <Link to="/contact" onClick={handleLinkClick} className="py-2 text-sm font-sans text-foreground/60 hover:text-foreground">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
