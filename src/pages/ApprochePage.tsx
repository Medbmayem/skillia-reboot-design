
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ApprochePage = () => {
  const steps = [
    {
      num: '01',
      title: 'Cadrer',
      desc: 'Comprendre vos enjeux, évaluer votre maturité, prioriser les initiatives à fort impact.',
      deliverables: ['Diagnostic de maturité', 'Cartographie des cas d\'usage', 'Feuille de route priorisée', 'Business case'],
    },
    {
      num: '02',
      title: 'Sécuriser',
      desc: 'Intégrer la sécurité et la conformité dès la conception, pas en fin de projet.',
      deliverables: ['Audit de posture sécurité', 'Analyse de risques', 'Plan de conformité', 'Architecture sécurisée'],
    },
    {
      num: '03',
      title: 'Déployer',
      desc: 'Mettre en œuvre progressivement, piloter par les résultats et les KPIs.',
      deliverables: ['Plan de déploiement', 'Pilotage de projet', 'Intégration SI', 'Tests et validation'],
    },
    {
      num: '04',
      title: 'Faire adopter',
      desc: 'Former, accompagner et ancrer les nouvelles pratiques dans le quotidien des équipes.',
      deliverables: ['Parcours de formation', 'Accompagnement au changement', 'KPIs d\'adoption', 'Transfert de compétences'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide uppercase text-skillia-amber mb-4">Notre approche</p>
              <h1 className="mb-6">Une méthode en 4 temps pour des transformations qui durent.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous ne vendons pas de la technologie. Nous accompagnons des transformations — du cadrage stratégique à l'adoption par les équipes.
              </p>
            </div>
          </div>
        </section>

        {steps.map((step, i) => (
          <section key={step.num} className={`py-16 ${i % 2 === 0 ? 'bg-card border-y' : ''}`}>
            <div className="container">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <span className="text-5xl font-bold text-skillia-amber/20 block mb-2">{step.num}</span>
                  <h2 className="mb-4">{step.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Livrables types</h4>
                  <ul className="space-y-3">
                    {step.deliverables.map((d, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-skillia-navy flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Appliquons cette méthode à votre contexte</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Un échange structuré pour comprendre vos enjeux et proposer une approche adaptée.</p>
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

export default ApprochePage;
