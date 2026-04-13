
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CyberResiliencePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" alt="Architecture moderne — structure et protection" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Cyber & résilience
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              La sécurité fait partie<br />
              <span className="italic font-normal">du socle. Pas des options.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Chez Skillia, la sécurité n&apos;est pas une option ajoutée en fin de projet. Elle fait partie du socle de toute transformation responsable.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Ce que nous faisons</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  Gouvernance. Protection.<br />
                  <span className="italic font-normal">Continuité.</span>
                </h2>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl mb-3">Gouvernance & conformité</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Audit de posture, conformité IA Act, ISO 27001, DORA. Gouvernance des risques et politique de sécurité.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Protection & détection</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">SOC et monitoring, réponse aux incidents, tests d&apos;intrusion, sécurisation des systèmes d&apos;information.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Continuité & résilience</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">PCA / PRA, tests de résistance, gestion de crise, plan de reprise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[45vh] md:h-[60vh]">
          <img src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=2000&q=80" alt="Lignes architecturales — perspective et rigueur" className="w-full h-full object-cover" />
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <div className="space-y-10">
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Mise en conformité DORA — <span className="font-sans text-base text-muted-foreground">Finance, conformité atteinte en 6 mois.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Renforcement de la posture cyber — <span className="font-sans text-base text-muted-foreground">Industrie, réduction de 60 % des vulnérabilités critiques.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Situations adressées</p>
              <ul className="space-y-5">
                {[
                  'Montée d\'exigence réglementaire',
                  'Dépendances critiques mal connues',
                  'Continuité insuffisamment formalisée',
                  'Gouvernance cyber incomplète',
                  'Besoin d\'exercices et de préparation à la crise',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xs font-sans text-muted-foreground/40 mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-sans text-foreground/80 leading-[1.8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-2xl">
              <h3 className="text-2xl mb-4">Capacité cyber renforcée</h3>
              <p className="text-sm font-sans text-muted-foreground mb-6 leading-[1.8]">Pour les projets nécessitant une expertise dédiée, Skillia mobilise Resillia.</p>
              <Link to="/resillia" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Resillia</Link>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Sécurisons votre<br /><span className="italic font-normal">transformation.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Demander un audit</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CyberResiliencePage;
