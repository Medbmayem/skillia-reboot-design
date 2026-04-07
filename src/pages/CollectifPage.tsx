
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
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          </div>
          <div className="container relative z-10">
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Un collectif d&apos;experts,<br />
              <span className="italic font-normal">une vision commune.</span>
            </h1>
          </div>
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Skillia réunit des praticiens expérimentés en IA, transformation digitale, cybersécurité et formation. Chaque mission mobilise les bonnes compétences au bon moment.
              </p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
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

        <section className="h-[40vh] md:h-[55vh]">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Salle de réunion — lumière naturelle" className="w-full h-full object-cover" />
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <p className="editorial-label mb-12">L&apos;équipe fondatrice</p>
            <div className="grid md:grid-cols-2 gap-20 max-w-3xl">
              <div>
                <div className="w-20 h-20 rounded-full bg-muted mb-6" />
                <h3 className="text-xl mb-1">[Nom du fondateur]</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">[Titre / Rôle]</p>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8]">[Bio courte — parcours et expertise principale]</p>
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-muted mb-6" />
                <h3 className="text-xl mb-1">[Nom du co-fondateur]</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">[Titre / Rôle]</p>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8]">[Bio courte — parcours et expertise principale]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Travaillons<br /><span className="italic font-normal">ensemble.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre RDV</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectifPage;
