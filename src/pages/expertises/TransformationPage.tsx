
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TransformationPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" alt="Équipe collaborative" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <nav className="text-xs font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/80">Skillia</Link>
              <span className="mx-2">/</span>
              <span className="text-background/70">Transformation digitale</span>
            </nav>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              La transformation échoue<br />
              <span className="italic font-normal">quand elle oublie les personnes.</span>
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                La transformation digitale ne se résume pas à déployer de nouveaux outils. Elle implique de repenser les processus, d&apos;accompagner le changement et de s&apos;assurer que les équipes s&apos;approprient les nouvelles pratiques.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20 order-2 md:order-1">
                <p className="editorial-label mb-6">Ce que nous faisons</p>
                <ul className="space-y-6">
                  {[
                    { title: 'Diagnostic de maturité digitale', desc: 'Évaluation de votre organisation, vos processus et votre capacité à se transformer.' },
                    { title: 'Refonte de processus', desc: 'Simplification et digitalisation des processus métier pour plus d\'efficacité.' },
                    { title: 'Conduite du changement', desc: 'Accompagnement des équipes dans l\'appropriation des nouvelles pratiques.' },
                  ].map(item => (
                    <li key={item.title}>
                      <h3 className="text-lg mb-1">{item.title}</h3>
                      <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] md:aspect-auto order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Transformation" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0 border-t border-border/50">
              <div className="aspect-[4/3] md:aspect-auto">
                <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80" alt="Stratégie" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20">
                <ul className="space-y-6">
                  {[
                    { title: 'Accompagnement CODIR', desc: 'Alignement stratégique et pilotage de la transformation au niveau direction.' },
                    { title: 'Programme de transformation', desc: 'Planification et exécution de programmes de 6 à 18 mois avec jalons clairs.' },
                    { title: 'Mesure de l\'impact', desc: 'KPIs d\'adoption, de performance et de satisfaction pour piloter par les résultats.' },
                  ].map(item => (
                    <li key={item.title}>
                      <h3 className="text-lg mb-1">{item.title}</h3>
                      <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <p className="editorial-label mb-4">Résultats</p>
            <div className="space-y-12 max-w-3xl">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">Services</p>
                <h3 className="text-xl md:text-2xl mb-3">Transformation digitale et adoption</h3>
                <p className="text-base font-sans text-muted-foreground">Refonte des processus, formation des équipes et accompagnement au changement. Taux d&apos;adoption de 85 % en 4 mois.</p>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">Industrie</p>
                <h3 className="text-xl md:text-2xl mb-3">Programme de transformation 12 mois</h3>
                <p className="text-base font-sans text-muted-foreground">Diagnostic, feuille de route, conduite du changement et mesure d&apos;impact. 30 % de gain de productivité.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-4">Aller plus loin</p>
              <h3 className="text-2xl mb-4">Besoin de former vos équipes ?</h3>
              <p className="text-base font-sans text-muted-foreground mb-6">Skillia Academy propose des formations conçues par des praticiens, sur des cas issus du terrain.</p>
              <Link to="/academy" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Skillia Academy</Link>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6 max-w-xl mx-auto">Engageons la transformation.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Un échange pour comprendre votre contexte et construire ensemble la feuille de route.</p>
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

export default TransformationPage;
