import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => window.scrollTo(0, 0);

  return (
    <footer className="section-navy">
      <div className="container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          <div>
            <p className="font-serif text-2xl font-medium mb-6">Skillia</p>
            <p className="text-sm leading-[1.8] text-current opacity-40 max-w-xs">
              Cabinet de transformation IA, digitale et résiliente.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs tracking-[0.15em] uppercase opacity-30 mb-4">Expertises</p>
            <Link to="/ia-data" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">IA & Data</Link>
            <Link to="/transformation" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Transformation digitale</Link>
            <Link to="/cyber-resilience" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Cyber & résilience</Link>
            <Link to="/deploiement-adoption" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Déploiement, adoption & compétences</Link>
          </div>
          <div className="space-y-3">
            <p className="text-xs tracking-[0.15em] uppercase opacity-30 mb-4">Entités spécialisées</p>
            <Link to="/resillia" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Resillia</Link>
            <Link to="/tech" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Skillia Tech</Link>
            <Link to="/academy" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Skillia Academy</Link>
          </div>
          <div className="space-y-3">
            <p className="text-xs tracking-[0.15em] uppercase opacity-30 mb-4">Ressources</p>
            <Link to="/use-cases" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Cas d'usage</Link>
            <Link to="/ressources" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Articles & guides</Link>
            <Link to="/collectif" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Collectif</Link>
            <Link to="/contact" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Contact</Link>
            <Link to="/nous-rejoindre" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Nous rejoindre</Link>
          </div>
        </div>
        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs opacity-25">© {new Date().getFullYear()} Skillia</p>
          <a href="mailto:contact@skillia.fr" className="text-xs opacity-25 hover:opacity-50 transition-opacity">contact@skillia.fr</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
