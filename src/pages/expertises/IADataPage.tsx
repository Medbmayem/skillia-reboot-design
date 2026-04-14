
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/skillia-ia-transformation.jpg';

const IADataPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero — cinematic, aligned with homepage */}
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="IA appliquée — échange stratégique et transformation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
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

        {/* Introduction — editorial prose */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Beaucoup d&apos;organisations déploient de l&apos;IA, peu captent un ROI réel. Nous partons du business case, pas de l&apos;effet de mode. Nous aidons les CDO, DSI et directions métier à structurer leur stratégie IA pour générer un impact mesurable.
              </p>
            </div>
          </div>
        </section>


        {/* Offre — asymmetric grid */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Ce que nous faisons</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  De l&apos;audit de maturité<br />
                  <span className="italic font-normal">au ROI mesurable.</span>
                </h2>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl mb-3">Audit de maturité Data & IA</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Évaluation de votre organisation, vos données, vos outils et votre capacité à tirer profit de l&apos;IA.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Stratégie IA</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Feuille de route alignée sur vos enjeux business, avec priorisation des cas d&apos;usage à fort ROI.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Gouvernance Data</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Processus, rôles et outils pour garantir la qualité et la conformité de vos données.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Business case & ROI</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Modélisation financière et KPIs de performance pour chaque initiative IA.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Résultats — inline prose like homepage */}
        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <div className="space-y-10">
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Déploiement IA sur 3 business units — <span className="font-sans text-base text-muted-foreground">Industrie, réduction de 40 % du temps de traitement.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Stratégie IA et feuille de route — <span className="font-sans text-base text-muted-foreground">Services, ROI positif dès le premier cas d&apos;usage en 6 mois.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problèmes traités */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Problèmes traités</p>
              <ul className="space-y-5">
                {[
                  'Difficulté à prioriser les bons cas d\'usage',
                  'Initiatives dispersées sans gouvernance claire',
                  'Faible lien entre expérimentation IA et valeur métier',
                  'Manque d\'alignement entre métiers, IT et direction',
                  'Déploiements sans mesure d\'impact',
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

        {/* Liens croisés */}
        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-6">Cas d&apos;usage liés</p>
              <div className="space-y-4">
                <Link to="/use-cases/cadrer-portefeuille-ia" className="editorial-link block" onClick={() => window.scrollTo(0, 0)}>Cadrer un portefeuille de cas d&apos;usage IA</Link>
                <Link to="/use-cases/copilote-metier-documentaire" className="editorial-link block" onClick={() => window.scrollTo(0, 0)}>Concevoir un copilote métier</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Entité liée */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <h3 className="text-2xl mb-4">Besoin de construire la solution ?</h3>
              <p className="text-sm font-sans text-muted-foreground mb-6 leading-[1.8]">Skillia Tech développe des solutions IA sur mesure, nativement sécurisées et conçues pour être adoptées.</p>
              <Link to="/tech" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Skillia Tech</Link>
            </div>
          </div>
        </section>

        {/* CTA final — section-navy like homepage */}
        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Parlons de votre<br /><span className="italic font-normal">stratégie IA.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre rendez-vous</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IADataPage;
