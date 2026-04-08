
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TechPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" alt="Intelligence technologique — vision globale" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / <Link to="/deploiement-adoption" className="hover:text-background/70">Déploiement & adoption</Link> / Skillia Tech
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              L&apos;IA que vous commandez.<br />
              <span className="italic font-normal">Les résultats que vous attendiez.</span>
            </h1>
          </div>
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Une fois la stratégie posée, nous construisons les solutions — nativement sécurisées et conçues pour être adoptées par vos équipes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Nos solutions</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  Quatre familles<br />
                  <span className="italic font-normal">de solutions IA.</span>
                </h2>
              </div>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl mb-2">Assistants métier</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Des assistants IA conçus pour des tâches métier spécifiques : analyse, rédaction, support client, aide à la décision.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Agents IA</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Des agents autonomes capables d&apos;exécuter des workflows complexes et de traiter des données à grande échelle.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Plateformes data & IA</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Architecture et déploiement de plateformes data robustes pour centraliser et exploiter vos données.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Intégration IA dans le SI</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Connexion de capacités IA à vos outils existants sans rupture, avec sécurité intégrée.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[40vh] md:h-[55vh]">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" alt="Architecture technologique — perspective" className="w-full h-full object-cover" />
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Réalisations</p>
              <div className="space-y-16">
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Assistant IA de maintenance prédictive</p>
                  <p className="text-sm font-sans text-muted-foreground">Industrie — 30 % de temps d&apos;arrêt en moins.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Plateforme de détection de fraudes</p>
                  <p className="text-sm font-sans text-muted-foreground">Finance — Détection en temps réel, 95 % de précision.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Automatisation du support client</p>
                  <p className="text-sm font-sans text-muted-foreground">Services — 60 % de tickets résolus automatiquement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Construisons votre<br /><span className="italic font-normal">solution IA.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre RDV</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechPage;
