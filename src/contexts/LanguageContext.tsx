
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = 'fr';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'Nous découvrir',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Nous vous accompagnons dans la transition vers un Business Intelligent en intégrant l\'IA et la Data au cœur de votre stratégie.',
    'hero.services.button': 'Découvrir nos services',
    'hero.contact.button': 'Prendre rendez-vous',
    
    // Vision section
    'vision.title': 'Notre Vision',
    'vision.paragraph1': 'Chez Skillia, nous croyons que la transformation des entreprises par l\'IA et la Data est une évolution inévitable et fondamentale.',
    'vision.paragraph2': 'Ces technologies redéfinissent les règles du jeu, transformant non seulement les outils, mais aussi les modèles économiques, les décisions stratégiques, et la manière de créer de la valeur.',
    'vision.paragraph3': 'Adopter l\'IA et la Data n\'est plus une option : c\'est le moteur qui façonne l\'avenir des entreprises.',
    'vision.button': 'En Savoir Plus',
    
    // Services
    'services.title': 'Nos Services Spécialisés',
    'services.subtitle': 'Boostez votre transformation numérique grâce à des écosystèmes intelligents, sécurisés et performants.',
    'services.business.title': 'Intelligent Business & Data Transformation',
    'services.business.description': 'Transformer les modèles business en exploitant l\'IA et la Data pour créer des entreprises plus intelligentes, plus performantes et prêtes pour l\'avenir.',
    'services.secure.title': 'Secure & Trusted Ecosystems',
    'services.secure.description': 'Créer des écosystèmes intelligents sécurisés, conformes aux réglementations, résilients et capables de soutenir une innovation responsable',
    'services.technology.title': 'Advanced Technology Foundations',
    'services.technology.description': 'Déployer des fondations technologiques performantes pour soutenir l\'IA, la Data et la cybersécurité à grande échelle',
    'services.discover': 'Découvrir',

    // Technology Foundations Page
    'tech.subtitle': 'Déployer des fondations technologiques performantes pour soutenir l\'IA, la Data et la cybersécurité à grande échelle',
    'tech.service1.title': 'Data & AI Platforms & Architecture',
    'tech.service1.point1': 'Conception et déploiement de plateformes Data AI-driven',
    'tech.service1.point2': 'Conception des architectures Data-Driven et AI-centric',
    'tech.service2.title': 'Cloud & Data Infrastructure',
    'tech.service2.point1': 'Migration et optimisation des environnements Cloud pour des charges intensives en IA et Data',
    'tech.service2.point2': 'Plateformes technologiques robustes pour soutenir des modèles business complexes',
    'tech.service3.title': 'DevSecOps',
    'tech.service3.point1': 'Intégration de la sécurité dans les pipelines DevOps',
    'tech.service3.point2': 'Automatisation des tests de sécurité dans les déploiements',
    'tech.service4.title': 'Performance Industrialization',
    'tech.service4.point1': 'Adoption d\'une approche AIOps pour l\'industrialisation des plateformes',
    'tech.service4.point2': 'Amélioration des performances des systèmes IA/Data tout en réduisant les coûts opérationnels',
    
    // Business Transformation Page
    'business.subtitle': 'Transformer les modèles business en exploitant l\'IA et la Data pour créer des entreprises plus intelligentes, plus performantes et prêtes pour l\'avenir.',
    
    // About Section
    'about.title': 'Notre Mission et Nos Valeurs',
    'about.subtitle': 'Transformez votre entreprise en combinant advisory, technologies de pointe et programmes de formation adaptés.',
    'about.since': 'Depuis 2021',
    'about.button': 'En savoir plus sur notre équipe',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Discutons de vos besoins et de comment nous pouvons vous accompagner dans vos projets',
    'contact.details': 'Nos coordonnées',
    'contact.send': 'Envoyer',
    
    // Language selector
    'language': 'FR',
    'language.switch': 'Switch to English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'We guide you in the transition to Intelligent Business by integrating AI and Data at the core of your strategy.',
    'hero.services.button': 'Discover our services',
    'hero.contact.button': 'Book a meeting',
    
    // Vision section
    'vision.title': 'Our Vision',
    'vision.paragraph1': 'At Skillia, we believe that transforming businesses through AI and Data is an inevitable and fundamental evolution.',
    'vision.paragraph2': 'These technologies are redefining the rules of the game, transforming not only tools, but also business models, strategic decisions, and how value is created.',
    'vision.paragraph3': 'Adopting AI and Data is no longer an option: it\'s the driving force shaping the future of businesses.',
    'vision.button': 'Learn More',
    
    // Services
    'services.title': 'Our Specialized Services',
    'services.subtitle': 'Boost your digital transformation with intelligent, secure and performant ecosystems.',
    'services.business.title': 'Intelligent Business & Data Transformation',
    'services.business.description': 'Transform business models by leveraging AI and Data to create smarter, more effective companies ready for the future.',
    'services.secure.title': 'Secure & Trusted Ecosystems',
    'services.secure.description': 'Create secure intelligent ecosystems, compliant with regulations, resilient and capable of supporting responsible innovation',
    'services.technology.title': 'Advanced Technology Foundations',
    'services.technology.description': 'Deploy high-performance technology foundations to support AI, Data and cybersecurity at scale',
    'services.discover': 'Learn More',
    
    // Technology Foundations Page
    'tech.subtitle': 'Deploy high-performance technology foundations to support AI, Data and cybersecurity at scale',
    'tech.service1.title': 'Data & AI Platforms & Architecture',
    'tech.service1.point1': 'Design and deployment of AI-driven Data platforms',
    'tech.service1.point2': 'Design of Data-Driven and AI-centric architectures',
    'tech.service2.title': 'Cloud & Data Infrastructure',
    'tech.service2.point1': 'Migration and optimization of Cloud environments for AI and Data intensive workloads',
    'tech.service2.point2': 'Robust technological platforms to support complex business models',
    'tech.service3.title': 'DevSecOps',
    'tech.service3.point1': 'Integration of security in DevOps pipelines',
    'tech.service3.point2': 'Automation of security tests in deployments',
    'tech.service4.title': 'Performance Industrialization',
    'tech.service4.point1': 'Adoption of an AIOps approach for platform industrialization',
    'tech.service4.point2': 'Improvement of AI/Data systems performance while reducing operational costs',
    
    // Business Transformation Page
    'business.subtitle': 'Transform business models by leveraging AI and Data to create smarter, more effective companies ready for the future.',
    
    // About Section
    'about.title': 'Our Mission and Values',
    'about.subtitle': 'Transform your business by combining advisory, cutting-edge technologies and tailored training programs.',
    'about.since': 'Since 2021',
    'about.button': 'Learn more about our team',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s discuss your needs and how we can support you in your projects',
    'contact.details': 'Our Contact Details',
    'contact.send': 'Send',
    
    // Language selector
    'language': 'EN',
    'language.switch': 'Passer en Français',
  }
};

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    return savedLanguage || defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
