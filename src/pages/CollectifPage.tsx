import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CollectifPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[65vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80" alt="Espace de travail premium" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Collectif
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Un collectif d&apos;experts,<br />
              <span className="italic font-normal">une vision commune.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Skillia réunit des profils complémentaires en stratégie, transformation, IA, cybersécurité, résilience et accompagnement des usages. Chaque mission mobilise les compétences nécessaires au bon moment, avec une logique de continuité entre cadrage, sécurisation, déploiement et adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-3xl leading-[1.3] mb-8">
                Conseil → Cyber → Build → Formation
              </p>
              <p className="text-sm font-sans text-muted-foreground max-w-xl mx-auto">
                De la stratégie au déploiement, en passant par la sécurisation et la formation : une couverture complète sans rupture.
              </p>
            </div>
          </div>
        </section>

        <section className="h-[45vh] md:h-[60vh]">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80" alt="Salle de réunion — environnement de décision" className="w-full h-full object-cover" />
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <p className="editorial-label mb-12">L&apos;équipe fondatrice</p>
            <div className="grid md:grid-cols-2 gap-20 max-w-3xl">
              <div>
                <div className="w-20 h-20 rounded-full bg-muted mb-6" />
                <h3 className="text-xl mb-1">À compléter</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">Co-fondateur · Stratégie, transformation et développement</p>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Accompagne les organisations dans le cadrage de leurs transformations, la structuration de leur trajectoire et l&apos;alignement entre vision stratégique, exécution et impact.</p>
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-muted mb-6" />
                <h3 className="text-xl mb-1">À compléter</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">Co-fondateur · IA, data et dispositifs d&apos;exécution</p>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Intervient sur la conception de solutions IA, la structuration de dispositifs data et le pilotage d&apos;initiatives visant une adoption réelle et durable.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Travaillons<br /><span className="italic font-normal">ensemble.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre rendez-vous</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectifPage;
