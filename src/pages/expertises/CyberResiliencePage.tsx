
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CyberResiliencePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=2000&q=80" alt="Sécurité" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <nav className="text-xs font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/80">Skillia</Link>
              <span className="mx-2">/</span>
              <span className="text-background/70">Cyber & résilience</span>
            </nav>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              Une transformation non sécurisée<br />
              <span className="italic font-normal">n&apos;est pas une transformation.</span>
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Chez Skillia, la sécurité n&apos;est pas une option ajoutée en fin de projet. Elle fait partie du socle de toute transformation responsable.
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
                  items: ['Audit de posture sécurité', 'Conformité IA Act, ISO 27001, DORA', 'Gouvernance des risques', 'Politique de sécurité'],
                },
                {
                  title: 'Protection & détection',
                  items: ['SOC et monitoring', 'Réponse aux incidents', 'Tests d\'intrusion', 'Sécurisation des SI'],
                },
                {
                  title: 'Continuité & résilience',
                  items: ['PCA / PRA', 'Tests de résistance', 'Gestion de crise', 'Plan de reprise'],
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

        {/* Cas clients */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <p className="editorial-label mb-4">Résultats</p>
            <div className="space-y-12 max-w-3xl">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">Finance</p>
                <h3 className="text-xl md:text-2xl mb-3">Mise en conformité DORA</h3>
                <p className="text-base font-sans text-muted-foreground">Audit de posture, plan de remédiation et mise en place de la gouvernance sécurité. Conformité atteinte en 6 mois.</p>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">Industrie</p>
                <h3 className="text-xl md:text-2xl mb-3">Renforcement de la posture cyber</h3>
                <p className="text-base font-sans text-muted-foreground">Audit, politique de sécurité, pentest sur l&apos;ensemble du SI. Réduction de 60 % des vulnérabilités critiques.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lien Resillia */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-4">Capacité dédiée</p>
              <h3 className="text-2xl mb-4">Pour les projets nécessitant une capacité cyber renforcée</h3>
              <p className="text-base font-sans text-muted-foreground mb-6">Skillia mobilise Resillia, son entité spécialisée en cybersécurité et résilience.</p>
              <Link to="/resillia" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Resillia</Link>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6 max-w-xl mx-auto">Sécurisons votre transformation.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Un premier échange pour évaluer votre posture et identifier les priorités.</p>
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

export default CyberResiliencePage;
