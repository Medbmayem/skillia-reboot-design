
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => window.scrollTo(0, 0);

  return (
    <footer className="section-navy">
      <div className="container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <div>
            <p className="font-serif text-2xl font-medium mb-6">Skillia</p>
            <p className="text-sm leading-[1.8] text-current opacity-40 max-w-xs">
              Cabinet de conseil en IA, transformation digitale et résilience.
            </p>
          </div>
          <div className="space-y-3">
            <Link to="/ia-data" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">IA & Data</Link>
            <Link to="/transformation" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Transformation digitale</Link>
            <Link to="/cyber-resilience" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Cyber & résilience</Link>
            <Link to="/deploiement-adoption" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Déploiement & adoption</Link>
            <div className="h-4" />
            <Link to="/resillia" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Resillia</Link>
            <Link to="/tech" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Skillia Tech</Link>
            <Link to="/academy" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Skillia Academy</Link>
          </div>
          <div className="space-y-3">
            <Link to="/approche" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Notre approche</Link>
            <Link to="/collectif" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Collectif</Link>
            <Link to="/ressources" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Ressources</Link>
            <Link to="/nous-rejoindre" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Nous rejoindre</Link>
            <Link to="/contact" onClick={handleClick} className="block text-sm opacity-40 hover:opacity-70 transition-opacity">Contact</Link>
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
