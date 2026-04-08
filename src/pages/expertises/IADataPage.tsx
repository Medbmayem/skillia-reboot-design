
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const IADataPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" alt="Data" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / IA & Data
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              L'IA n'a d'intérêt que<br />
              <span className="italic font-normal">lorsqu'elle crée de la valeur.</span>
            </h1>
          </div>
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Beaucoup d&apos;organisations déploient de l&apos;IA, peu captent un ROI réel. Nous partons du business case, pas de l&apos;effet de mode. Nous aidons les CDO, DSI et directions métier à structurer leur stratégie IA pour générer un impact mesurable.
              </p>
            </div>
          </div>
        </section>

        <section className="h-[40vh] md:h-[50vh]">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80" alt="Analyse stratégique — espace de travail" className="w-full h-full object-cover" />
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Ce que nous faisons</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  De l&apos;audit de maturité<br />
                  <span className="italic font-normal">au ROI mesurable.</span>
                </h2>
              </div>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl mb-2">Audit de maturité Data & IA</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Évaluation de votre organisation, vos données, vos outils et votre capacité à tirer profit de l&apos;IA.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Stratégie IA</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Feuille de route alignée sur vos enjeux business, avec priorisation des cas d&apos;usage à fort ROI.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Gouvernance Data</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Processus, rôles et outils pour garantir la qualité et la conformité de vos données.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Business case & ROI</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Modélisation financière et KPIs de performance pour chaque initiative IA.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <div className="space-y-16">
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Déploiement IA sur 3 business units</p>
                  <p className="text-sm font-sans text-muted-foreground">Industrie — Cadrage stratégique, gouvernance data et pilotage de l&apos;adoption. Réduction de 40 % du temps de traitement.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Stratégie IA et feuille de route</p>
                  <p className="text-sm font-sans text-muted-foreground">Services — Audit de maturité, benchmark solutions et business case détaillé. ROI positif dès le premier cas d&apos;usage en 6 mois.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <h3 className="text-2xl mb-4">Besoin de construire la solution ?</h3>
              <p className="text-sm font-sans text-muted-foreground mb-6 leading-[1.8]">Skillia Tech développe des solutions IA sur mesure, nativement sécurisées et conçues pour être adoptées.</p>
              <Link to="/tech" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Skillia Tech</Link>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Parlons de votre<br /><span className="italic font-normal">stratégie IA.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre RDV</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IADataPage;
