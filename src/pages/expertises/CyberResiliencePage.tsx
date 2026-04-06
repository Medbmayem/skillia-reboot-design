
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
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=2000&q=80" alt="Sécurité" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
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

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Chez Skillia, la sécurité n&apos;est pas une option ajoutée en fin de projet. Elle fait partie du socle de toute transformation responsable.
              </p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
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

        <section className="h-[40vh] md:h-[50vh]">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80" alt="Cybersécurité" className="w-full h-full object-cover" />
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <div className="space-y-16">
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Mise en conformité DORA</p>
                  <p className="text-sm font-sans text-muted-foreground">Finance — Conformité atteinte en 6 mois.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Renforcement de la posture cyber</p>
                  <p className="text-sm font-sans text-muted-foreground">Industrie — Réduction de 60 % des vulnérabilités critiques.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="max-w-2xl">
              <h3 className="text-2xl mb-4">Capacité cyber renforcée</h3>
              <p className="text-sm font-sans text-muted-foreground mb-6 leading-[1.8]">Pour les projets nécessitant une expertise dédiée, Skillia mobilise Resillia.</p>
              <Link to="/resillia" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Resillia</Link>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Sécurisons votre<br /><span className="italic font-normal">transformation.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Demander un audit</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CyberResiliencePage;
