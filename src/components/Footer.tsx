
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-foreground text-background/70">
      <div className="container py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl font-medium text-background mb-4">Skillia</p>
            <p className="text-sm leading-relaxed text-background/50 max-w-xs">
              Cabinet de conseil en IA, transformation digitale et résilience.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-medium text-background/40 mb-5">Expertises</p>
            <ul className="space-y-3">
              <li><Link to="/ia-data" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">IA & Data</Link></li>
              <li><Link to="/transformation" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Transformation digitale</Link></li>
              <li><Link to="/cyber-resilience" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Cyber & résilience</Link></li>
              <li><Link to="/deploiement-adoption" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Déploiement & adoption</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-medium text-background/40 mb-5">Entités</p>
            <ul className="space-y-3">
              <li><Link to="/resillia" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Resillia</Link></li>
              <li><Link to="/tech" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Skillia Tech</Link></li>
              <li><Link to="/academy" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Skillia Academy</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-medium text-background/40 mb-5">Skillia</p>
            <ul className="space-y-3">
              <li><Link to="/approche" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Notre approche</Link></li>
              <li><Link to="/collectif" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Collectif</Link></li>
              <li><Link to="/ressources" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Ressources</Link></li>
              <li><Link to="/nous-rejoindre" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Nous rejoindre</Link></li>
              <li><Link to="/contact" onClick={handleClick} className="text-sm text-background/60 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="h-px bg-background/10 mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30">© {new Date().getFullYear()} Skillia. Tous droits réservés.</p>
          <a href="mailto:contact@skillia.fr" className="text-xs text-background/30 hover:text-background/60 transition-colors">contact@skillia.fr</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
