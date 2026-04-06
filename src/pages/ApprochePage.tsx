
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ApprochePage = () => {
  const steps = [
    {
      num: '01',
      title: 'Cadrer',
      desc: 'Comprendre vos enjeux, évaluer votre maturité, prioriser les initiatives à fort impact.',
      deliverables: ['Diagnostic de maturité', 'Cartographie des cas d\'usage', 'Feuille de route priorisée', 'Business case'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '02',
      title: 'Sécuriser',
      desc: 'Intégrer la sécurité et la conformité dès la conception, pas en fin de projet.',
      deliverables: ['Audit de posture sécurité', 'Analyse de risques', 'Plan de conformité', 'Architecture sécurisée'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '03',
      title: 'Déployer',
      desc: 'Mettre en œuvre progressivement, piloter par les résultats et les KPIs.',
      deliverables: ['Plan de déploiement', 'Pilotage de projet', 'Intégration SI', 'Tests et validation'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '04',
      title: 'Faire adopter',
      desc: 'Former, accompagner et ancrer les nouvelles pratiques dans le quotidien des équipes.',
      deliverables: ['Parcours de formation', 'Accompagnement au changement', 'KPIs d\'adoption', 'Transfert de compétences'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Notre approche</p>
              <h1 className="mb-8">Une méthode en quatre temps<br /><span className="italic font-normal">pour des transformations qui durent.</span></h1>
              <p className="editorial-body">
                Nous ne vendons pas de la technologie. Nous accompagnons des transformations — du cadrage stratégique à l&apos;adoption par les équipes.
              </p>
            </div>
          </div>
        </section>

        {steps.map((step, i) => (
          <section key={step.num} className="pb-0">
            <div className="container">
              <div className={`grid md:grid-cols-2 gap-0 ${i > 0 ? 'border-t border-border/50' : ''}`}>
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={`flex flex-col justify-center p-8 md:p-14 lg:p-20 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="font-serif text-5xl font-light text-muted-foreground/20 block mb-4">{step.num}</span>
                  <h2 className="text-3xl mb-4">{step.title}</h2>
                  <p className="text-base font-sans text-muted-foreground mb-8 leading-relaxed">{step.desc}</p>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-4">Livrables types</p>
                    <ul className="space-y-2">
                      {step.deliverables.map(d => (
                        <li key={d} className="text-sm font-sans text-muted-foreground flex items-center gap-3">
                          <span className="w-1 h-1 rounded-full bg-skillia-amber flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6">Appliquons cette méthode à votre contexte.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Un échange structuré pour comprendre vos enjeux et proposer une approche adaptée.</p>
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

export default ApprochePage;
