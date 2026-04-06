
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TechPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2000&q=80" alt="Développement IA" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <nav className="text-xs font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/80">Skillia</Link>
              <span className="mx-2">/</span>
              <Link to="/deploiement-adoption" className="hover:text-background/80">Déploiement & adoption</Link>
              <span className="mx-2">/</span>
              <span className="text-background/70">Skillia Tech</span>
            </nav>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              L&apos;IA que vous commandez.<br />
              <span className="italic font-normal">Les résultats que vous attendiez.</span>
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Une fois la stratégie posée, nous construisons les solutions — nativement sécurisées et conçues pour être adoptées par vos équipes.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions — editorial */}
        <section className="pb-24">
          <div className="container">
            <div className="max-w-4xl space-y-16">
              <div className="grid md:grid-cols-2 gap-16">
                {[
                  { title: 'Assistants métier', desc: 'Des assistants IA conçus pour des tâches métier spécifiques : analyse, rédaction, support client, aide à la décision.' },
                  { title: 'Agents IA', desc: 'Des agents autonomes capables d\'exécuter des workflows complexes, de collecter et traiter des données à grande échelle.' },
                  { title: 'Plateformes data & IA', desc: 'Architecture et déploiement de plateformes data robustes pour centraliser, traiter et exploiter vos données.' },
                  { title: 'Intégration IA dans le SI', desc: 'Connexion de capacités IA à vos outils métier existants sans rupture, avec sécurité intégrée.' },
                ].map(item => (
                  <div key={item.title}>
                    <h3 className="text-xl mb-3">{item.title}</h3>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image break */}
        <section className="h-[40vh] md:h-[50vh]">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80" alt="Technology" className="w-full h-full object-cover" />
        </section>

        {/* Stack — discret */}
        <section className="py-20 md:py-24">
          <div className="container">
            <p className="editorial-label mb-6">Technologies</p>
            <p className="text-base font-sans text-muted-foreground max-w-2xl mb-8">
              Nous travaillons avec les technologies les plus adaptées à chaque projet, sans dogme ni vendor lock-in.
            </p>
            <p className="text-sm font-sans text-muted-foreground/60">
              Python · LangChain · OpenAI · Azure AI · AWS · GCP · PostgreSQL · Docker · Kubernetes · React · Node.js · FastAPI
            </p>
          </div>
        </section>

        {/* Réalisations */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <p className="editorial-label mb-4">Réalisations</p>
            <div className="space-y-12 max-w-3xl">
              {[
                { sector: 'Industrie', challenge: 'Assistant IA de maintenance prédictive', result: 'Agent IA intégré au SI pour anticiper les pannes. 30 % de temps d\'arrêt en moins.' },
                { sector: 'Finance', challenge: 'Plateforme de détection de fraudes', result: 'Pipeline data et modèles ML en production avec monitoring continu. 95 % de précision.' },
                { sector: 'Services', challenge: 'Automatisation du support client', result: 'Assistant IA multilingue avec escalade intelligente. 60 % de tickets résolus automatiquement.' },
              ].map((cas, i) => (
                <React.Fragment key={i}>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">{cas.sector}</p>
                    <h3 className="text-xl md:text-2xl mb-3">{cas.challenge}</h3>
                    <p className="text-base font-sans text-muted-foreground">{cas.result}</p>
                  </div>
                  {i < 2 && <div className="h-px bg-border/50" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6">Construisons votre solution IA.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">De la conception au déploiement, avec sécurité et adoption intégrées.</p>
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

export default TechPage;
