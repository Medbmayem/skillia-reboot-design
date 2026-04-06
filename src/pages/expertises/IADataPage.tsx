
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const IADataPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" alt="Data visualization" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <nav className="text-xs font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/80">Skillia</Link>
              <span className="mx-2">/</span>
              <Link to="/ia-data" className="hover:text-background/80">Expertises</Link>
              <span className="mx-2">/</span>
              <span className="text-background/70">IA & Data</span>
            </nav>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Votre IA doit rapporter.<br />
              <span className="italic font-normal">Pas juste fonctionner.</span>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Beaucoup d&apos;organisations déploient de l&apos;IA, peu captent un ROI réel. Nous partons du business case, pas de l&apos;effet de mode. Nous aidons les CDO, DSI, directions innovation et directions métier à structurer leur stratégie IA et data pour générer un impact mesurable.
              </p>
            </div>
          </div>
        </section>

        {/* Offres — alternance texte/image */}
        <section className="pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20 order-2 md:order-1">
                <p className="editorial-label mb-6">Ce que nous faisons</p>
                <ul className="space-y-6">
                  {[
                    { title: 'Audit de maturité Data & IA', desc: 'Évaluation de votre organisation, vos données, vos outils et votre capacité à tirer profit de l\'IA.' },
                    { title: 'Stratégie IA', desc: 'Feuille de route alignée sur vos enjeux business, avec priorisation des cas d\'usage à fort ROI.' },
                    { title: 'Gouvernance Data', desc: 'Processus, rôles et outils pour garantir la qualité et la conformité de vos données.' },
                  ].map(item => (
                    <li key={item.title}>
                      <h3 className="text-lg mb-1">{item.title}</h3>
                      <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] md:aspect-auto order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Data strategy" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0 border-t border-border/50">
              <div className="aspect-[4/3] md:aspect-auto">
                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80" alt="Business analytics" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20">
                <ul className="space-y-6">
                  {[
                    { title: 'Business case & ROI', desc: 'Modélisation financière et KPIs de performance pour chaque initiative IA.' },
                    { title: 'Benchmark solutions', desc: 'Évaluation objective des solutions du marché selon vos contraintes techniques et métier.' },
                    { title: 'Priorisation cas d\'usage', desc: 'Identification et classement selon impact, faisabilité et maturité de vos données.' },
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

        {/* Cas clients */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <p className="editorial-label mb-4">Résultats</p>
            <div className="space-y-12 max-w-3xl">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">Industrie</p>
                <h3 className="text-xl md:text-2xl mb-3">Déploiement IA sur 3 business units</h3>
                <p className="text-base font-sans text-muted-foreground">Cadrage stratégique, priorisation des cas d&apos;usage et gouvernance data. Réduction de 40 % du temps de traitement.</p>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">Services</p>
                <h3 className="text-xl md:text-2xl mb-3">Stratégie IA et feuille de route</h3>
                <p className="text-base font-sans text-muted-foreground">Audit de maturité, benchmark solutions et business case détaillé. ROI positif dès le premier cas d&apos;usage en 6 mois.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lien entité */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-4">Aller plus loin</p>
              <h3 className="text-2xl mb-4">Besoin de construire la solution ?</h3>
              <p className="text-base font-sans text-muted-foreground mb-6">Skillia Tech développe des solutions IA sur mesure, nativement sécurisées et conçues pour être adoptées.</p>
              <Link to="/tech" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Skillia Tech</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6 max-w-xl mx-auto">Parlons de votre stratégie IA.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Un échange de 30 minutes pour comprendre vos enjeux et identifier les premiers leviers.</p>
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

export default IADataPage;
