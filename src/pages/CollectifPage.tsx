
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CollectifPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80" alt="Collectif" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.25em] uppercase font-sans font-medium text-background/50 mb-6">Collectif</p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Un collectif d&apos;experts,<br />
              <span className="italic font-normal">une vision commune.</span>
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Skillia réunit des praticiens expérimentés en IA, transformation digitale, cybersécurité et formation. Chaque mission mobilise les bonnes compétences au bon moment.
              </p>
            </div>
          </div>
        </section>

        {/* Couverture */}
        <section className="pb-24">
          <div className="container">
            <p className="editorial-label mb-12">Notre couverture</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: 'Conseil', desc: 'Stratégie IA, data, transformation digitale, gouvernance.' },
                { title: 'Cyber', desc: 'Audit, conformité, SOC, résilience, gestion de crise.' },
                { title: 'Build', desc: 'Solutions IA sur mesure, intégration, plateformes data.' },
                { title: 'Formation', desc: 'Montée en compétences, adoption, transfert de savoir.' },
              ].map(item => (
                <div key={item.title}>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chaîne */}
        <section className="py-20 md:py-24 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-sans text-muted-foreground/60 mb-8">La chaîne complète</p>
              <p className="font-serif text-2xl md:text-3xl leading-[1.3]">
                Conseil → Cyber → Build → Formation
              </p>
              <p className="text-sm font-sans text-muted-foreground mt-6">
                De la stratégie au déploiement, en passant par la sécurisation et la formation : une couverture complète sans rupture.
              </p>
            </div>
          </div>
        </section>

        {/* Équipe */}
        <section className="py-24 md:py-32">
          <div className="container">
            <p className="editorial-label mb-12">L&apos;équipe fondatrice</p>
            <div className="grid md:grid-cols-2 gap-16 max-w-3xl">
              <div>
                <div className="w-20 h-20 rounded-full bg-muted mb-6" />
                <h3 className="text-xl mb-1">[Nom du fondateur]</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">[Titre / Rôle]</p>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">[Bio courte — parcours et expertise principale]</p>
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-muted mb-6" />
                <h3 className="text-xl mb-1">[Nom du co-fondateur]</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">[Titre / Rôle]</p>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">[Bio courte — parcours et expertise principale]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6">Travaillons ensemble.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Rencontrez notre équipe et discutons de votre projet.</p>
            <Link to="/contact" className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>
              Prendre RDV
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectifPage;
