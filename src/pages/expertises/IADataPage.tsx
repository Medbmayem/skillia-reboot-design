
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from '@/components/shared/CaseStudyCard';

const IADataPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container">
          <PageBreadcrumb items={[{ label: 'Expertises' }, { label: 'IA & Data' }]} />
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-skillia-navy-light text-skillia-navy mb-4">IA & Data</span>
              <h1 className="mb-6">Votre IA doit rapporter. Pas juste fonctionner.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Beaucoup d'organisations déploient de l'IA, peu captent un ROI réel. Nous partons du business case, pas de l'effet de mode.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-skillia-navy hover:bg-skillia-navy/90 text-white">
                  <Link to="/contact">Prendre RDV</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Demander un audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problème central */}
        <section className="py-16 bg-card border-y">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="mb-6">Le problème que nous résolvons</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'IA est partout. Mais dans la plupart des organisations, elle reste à l'état de POC, déconnectée des enjeux métier et sans mesure de ROI. Les investissements s'accumulent sans retour tangible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous aidons les CDO, DSI, directions innovation et directions métier à structurer leur stratégie IA et data pour générer un impact mesurable.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que nous faisons */}
        <section className="section">
          <div className="container">
            <h2 className="mb-10">Ce que nous faisons concrètement</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Audit de maturité Data & IA', desc: 'Évaluation de votre organisation, vos données, vos outils et votre capacité à tirer profit de l\'IA.' },
                { title: 'Stratégie IA', desc: 'Feuille de route alignée sur vos enjeux business, avec priorisation des cas d\'usage à fort ROI.' },
                { title: 'Gouvernance Data', desc: 'Mise en place des processus, rôles et outils pour garantir la qualité et la conformité de vos données.' },
                { title: 'Business case & ROI', desc: 'Modélisation financière et KPIs de performance pour chaque initiative IA.' },
                { title: 'Benchmark solutions', desc: 'Évaluation objective des solutions du marché selon vos contraintes techniques et métier.' },
                { title: 'Priorisation cas d\'usage', desc: 'Identification et classement des cas d\'usage selon leur impact, faisabilité et maturité de vos données.' },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cas clients */}
        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-8">Cas clients</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <CaseStudyCard
                sector="Industrie"
                challenge="Déploiement IA sur 3 BU"
                solution="Cadrage stratégique, priorisation des cas d'usage et gouvernance data."
                result="Réduction de 40 % du temps de traitement"
              />
              <CaseStudyCard
                sector="Services"
                challenge="Stratégie IA et feuille de route"
                solution="Audit de maturité, benchmark solutions et business case détaillé."
                result="ROI positif dès le premier cas d'usage en 6 mois"
              />
            </div>
          </div>
        </section>

        {/* Lien entité */}
        <section className="py-16">
          <div className="container">
            <div className="bg-skillia-purple-light rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Besoin de construire la solution ?</h3>
                <p className="text-sm text-muted-foreground">Skillia Tech développe des solutions IA sur mesure, nativement sécurisées et conçues pour être adoptées.</p>
              </div>
              <Button asChild variant="outline" className="flex-shrink-0">
                <Link to="/tech">Découvrir Skillia Tech <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Contact */}
        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Parlons de votre stratégie IA</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Un échange de 30 minutes pour comprendre vos enjeux et identifier les premiers leviers.
            </p>
            <Button asChild size="lg" className="bg-skillia-amber hover:bg-skillia-amber/90 text-skillia-navy font-semibold">
              <Link to="/contact">Prendre RDV</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IADataPage;
