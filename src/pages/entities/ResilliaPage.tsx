
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ResilliaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80" alt="Cybersécurité" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <nav className="text-xs font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/80">Skillia</Link>
              <span className="mx-2">/</span>
              <Link to="/cyber-resilience" className="hover:text-background/80">Cyber & résilience</Link>
              <span className="mx-2">/</span>
              <span className="text-background/70">Resillia</span>
            </nav>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Votre organisation tient.<br />
              <span className="italic font-normal">Quoi qu&apos;il arrive.</span>
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Quand vos enjeux exigent une capacité cyber et résilience dédiée, Skillia mobilise Resillia — son entité spécialisée en cybersécurité et résilience opérationnelle.
              </p>
            </div>
          </div>
        </section>

        {/* 3 blocs éditoriaux */}
        <section className="pb-24">
          <div className="container">
            <div className="max-w-4xl space-y-16">
              {[
                {
                  title: 'Gouvernance & conformité',
                  items: ['Audits de posture', 'GRC (Gouvernance, Risques, Conformité)', 'IA Act', 'ISO 27001', 'DORA'],
                },
                {
                  title: 'Protection & détection',
                  items: ['SOC augmenté', 'SIEM', 'Pentest', 'Threat intelligence', 'Réponse aux incidents'],
                },
                {
                  title: 'Continuité & résilience',
                  items: ['PCA / PRA', 'Tests de crise', 'Tests de résistance', 'Plan de reprise', 'Exercices de simulation'],
                },
              ].map((bloc, i) => (
                <div key={bloc.title}>
                  <h3 className="text-2xl mb-6">{bloc.title}</h3>
                  <ul className="space-y-3">
                    {bloc.items.map(item => (
                      <li key={item} className="text-sm font-sans text-muted-foreground flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-skillia-teal flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {i < 2 && <div className="h-px bg-border/50 mt-16" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <p className="editorial-label mb-4">Résultats</p>
            <div className="space-y-12 max-w-3xl">
              {[
                { sector: 'Finance', challenge: 'Conformité DORA', result: 'Audit, plan de remédiation, gouvernance sécurité. Conformité en 6 mois.' },
                { sector: 'Industrie', challenge: 'Posture cyber renforcée', result: 'Audit, politique de sécurité, pentest sur l\'ensemble du SI. 60 % de vulnérabilités critiques en moins.' },
                { sector: 'Santé', challenge: 'PCA/PRA et gestion de crise', result: 'Plan de continuité, tests de résistance et exercices. Temps de reprise divisé par 3.' },
              ].map((cas, i) => (
                <React.Fragment key={i}>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">{cas.sector}</p>
                    <h3 className="text-xl md:text-2xl mb-3">{cas.challenge}</h3>
                    <p className="text-base font-sans text-muted-foreground">{cas.result}</p>
                  </div>
                  {i < 2 && <div className="h-px bg-border/50" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container text-center">
            <Link to="/cyber-resilience" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>
              ← Retour à l&apos;expertise Cyber & résilience
            </Link>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6">Renforcez votre résilience.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Un premier échange pour évaluer votre posture et définir les priorités.</p>
            <Link to="/contact" className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>
              Demander un audit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResilliaPage;
