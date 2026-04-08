
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ResilliaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=2000&q=80" alt="Architecture sécurisée — protection" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
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

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Quand vos enjeux exigent une capacité cyber et résilience dédiée, Skillia mobilise Resillia — son entité spécialisée en cybersécurité et résilience opérationnelle.
              </p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
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

        <section className="h-[40vh] md:h-[50vh]">
          <img src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=2000&q=80" alt="Architecture contemporaine — solidité" className="w-full h-full object-cover" />
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <div className="space-y-16">
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Conformité DORA</p>
                  <p className="text-sm font-sans text-muted-foreground">Finance — Conformité en 6 mois.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Posture cyber renforcée</p>
                  <p className="text-sm font-sans text-muted-foreground">Industrie — 60 % de vulnérabilités critiques en moins.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">PCA/PRA et gestion de crise</p>
                  <p className="text-sm font-sans text-muted-foreground">Santé — Temps de reprise divisé par 3.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <Link to="/cyber-resilience" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>
            ← Retour à Cyber & résilience
          </Link>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Renforcez votre<br /><span className="italic font-normal">résilience.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Demander un audit</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResilliaPage;
