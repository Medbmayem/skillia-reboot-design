
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/skillia-cyber-resilience.jpg';

const ResilliaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Salle de pilotage — cyber-résilience et contrôle" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / <Link to="/cyber-resilience" className="hover:text-background/70">Cyber & résilience</Link> / Resillia
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Votre organisation tient.<br />
              <span className="italic font-normal">Quoi qu&apos;il arrive.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Quand vos enjeux exigent une capacité cyber et résilience dédiée, Skillia mobilise Resillia — son entité spécialisée en cybersécurité et résilience opérationnelle.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Nos capacités</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  Gouvernance. Protection.<br />
                  <span className="italic font-normal">Continuité.</span>
                </h2>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl mb-3">Gouvernance & conformité</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Audits de posture, GRC, IA Act, ISO 27001, DORA.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Protection & détection</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">SOC augmenté, SIEM, pentest, threat intelligence, réponse aux incidents.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Continuité & résilience</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">PCA / PRA, tests de crise, tests de résistance, plan de reprise, exercices de simulation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[45vh] md:h-[60vh]">
          <img src={heroImage} alt="Contrôle et vigilance — environnement sécurisé" className="w-full h-full object-cover" loading="lazy" />
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <div className="space-y-10">
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Conformité DORA — <span className="font-sans text-base text-muted-foreground">Finance, conformité en 6 mois.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Posture cyber renforcée — <span className="font-sans text-base text-muted-foreground">Industrie, 60 % de vulnérabilités critiques en moins.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  PCA/PRA et gestion de crise — <span className="font-sans text-base text-muted-foreground">Santé, temps de reprise divisé par 3.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Ce que Resillia renforce</p>
              <p className="editorial-body mb-12">
                Resillia intervient lorsque les enjeux exigent une capacité dédiée en cybersécurité, continuité et résilience. L&apos;objectif n&apos;est pas d&apos;ajouter une couche de complexité, mais de renforcer la robustesse des transformations et la continuité des activités critiques.
              </p>
              <p className="editorial-label mb-8">Interventions typiques</p>
              <ul className="space-y-5">
                {[
                  'Audit de posture cyber',
                  'Structuration de dispositifs PCA / PRA',
                  'Cartographie des dépendances critiques',
                  'Préparation à la gestion de crise',
                  'Exercices et tests de résilience',
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

        <section className="py-16 text-center">
          <Link to="/cyber-resilience" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>
            ← Retour à Cyber & résilience
          </Link>
        </section>

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Renforcez votre<br /><span className="italic font-normal">résilience.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Demander un audit</Link>
              <a href="https://resillia.fr" target="_blank" rel="noopener noreferrer" className="block mt-6 text-sm font-sans text-background/30 border-b border-background/10 pb-0.5 hover:text-background/60 hover:border-background/30 transition-colors w-fit">resillia.fr ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResilliaPage;
