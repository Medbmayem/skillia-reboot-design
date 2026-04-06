
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-skillia-navy text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/lovable-uploads/71f18a5e-02ac-4a09-8b12-6f093d2b9c4c.png" alt="Skillia" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Cabinet de conseil en IA, transformation digitale et résilience.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-skillia-amber">Expertises</h4>
            <ul className="space-y-2.5">
              <li><Link to="/ia-data" className="text-sm text-gray-400 hover:text-white transition-colors">IA & Data</Link></li>
              <li><Link to="/transformation" className="text-sm text-gray-400 hover:text-white transition-colors">Transformation digitale</Link></li>
              <li><Link to="/cyber-resilience" className="text-sm text-gray-400 hover:text-white transition-colors">Cyber & résilience</Link></li>
              <li><Link to="/deploiement-adoption" className="text-sm text-gray-400 hover:text-white transition-colors">Déploiement & adoption</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-skillia-amber">Entités</h4>
            <ul className="space-y-2.5">
              <li><Link to="/resillia" className="text-sm text-gray-400 hover:text-white transition-colors">Resillia</Link></li>
              <li><Link to="/tech" className="text-sm text-gray-400 hover:text-white transition-colors">Skillia Tech</Link></li>
              <li><Link to="/academy" className="text-sm text-gray-400 hover:text-white transition-colors">Skillia Academy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-skillia-amber">Skillia</h4>
            <ul className="space-y-2.5">
              <li><Link to="/approche" className="text-sm text-gray-400 hover:text-white transition-colors">Notre approche</Link></li>
              <li><Link to="/collectif" className="text-sm text-gray-400 hover:text-white transition-colors">Collectif</Link></li>
              <li><Link to="/ressources" className="text-sm text-gray-400 hover:text-white transition-colors">Ressources</Link></li>
              <li><Link to="/nous-rejoindre" className="text-sm text-gray-400 hover:text-white transition-colors">Nous rejoindre</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Skillia. Tous droits réservés.</p>
          <a href="mailto:contact@skillia.fr" className="text-xs text-gray-500 hover:text-white transition-colors">contact@skillia.fr</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
