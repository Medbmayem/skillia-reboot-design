
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with anchor
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#F0F0F0] text-skillia-blue">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/71f18a5e-02ac-4a09-8b12-6f093d2b9c4c.png" 
                alt="SKILLIA Logo" 
                className="h-10" 
              />
            </div>
            <p className="text-black mb-6">
              <span className="text-[#403AF2] font-medium">Smart</span> Tech. <span className="text-[#403AF2] font-medium">Real</span> Impact.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/skilliatech" target="_blank" rel="noopener noreferrer" className="text-skillia-blue hover:text-opacity-70 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-black opacity-80 hover:opacity-100 transition-colors"
                  onClick={handleLinkClick}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-black opacity-80 hover:opacity-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Consulting
                </a>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-black opacity-80 hover:opacity-100 transition-colors"
                  onClick={handleLinkClick}
                >
                  Nous découvrir
                </Link>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-black opacity-80 hover:opacity-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Formation</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/formations" 
                  className="text-black opacity-80 hover:opacity-100 transition-colors"
                  onClick={handleLinkClick}
                >
                  Formations sur-mesure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Consulting</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services/business-transformation" 
                  className="text-black opacity-80 hover:opacity-100 transition-colors"
                  onClick={handleLinkClick}
                >
                  Intelligent Business & Data Transformation
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/secure-ecosystems" 
                  className="text-black opacity-80 hover:opacity-100 transition-colors"
                  onClick={handleLinkClick}
                >
                  Secure & Trusted Ecosystems
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/technology-foundations" 
                  className="text-black opacity-80 hover:opacity-100 transition-colors"
                  onClick={handleLinkClick}
                >
                  Advanced Technology Foundations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-black opacity-80 mb-4">Inscrivez-vous pour recevoir nos dernières actualités</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-l focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-skillia-blue text-white px-4 py-2 rounded-r hover:bg-opacity-90 transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-skillia-gray-medium">
          <p className="text-center text-black opacity-70">
            &copy; {currentYear} Skillia. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
