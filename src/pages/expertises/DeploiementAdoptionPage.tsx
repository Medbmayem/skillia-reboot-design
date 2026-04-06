
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const DeploiementAdoptionPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80" alt="Équipe en formation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <nav className="text-xs font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/80">Skillia</Link>
              <span className="mx-2">/</span>
              <span className="text-background/70">Déploiement & adoption</span>
            </nav>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              Déployer c&apos;est bien.<br />
              <span className="italic font-normal">Que vos équipes l&apos;utilisent, c&apos;est mieux.</span>
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Le succès d&apos;un projet se mesure à son adoption réelle par les métiers, pas à sa livraison technique. Nous accompagnons le déploiement de bout en bout.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20 order-2 md:order-1">
                <p className="editorial-label mb-6">Ce que nous faisons</p>
                <ul className="space-y-6">
                  {[
                    { title: 'Co-construction avec les métiers', desc: 'Impliquer les utilisateurs finaux dès la conception pour garantir l\'adéquation avec les besoins réels.' },
                    { title: 'Pilotage de projets IA', desc: 'Gestion de projet rigoureuse avec jalons, livrables et suivi des risques.' },
                    { title: 'Suivi des KPIs d\'adoption', desc: 'Tableaux de bord et indicateurs pour mesurer l\'adoption réelle et ajuster le dispositif.' },
                  ].map(item => (
                    <li key={item.title}>
                      <h3 className="text-lg mb-1">{item.title}</h3>
                      <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] md:aspect-auto order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80" alt="Adoption" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0 border-t border-border/50">
              <div className="aspect-[4/3] md:aspect-auto">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Formation" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20">
                <ul className="space-y-6">
                  {[
                    { title: 'Formation à l\'usage', desc: 'Parcours de formation adaptés aux profils et aux niveaux de maturité des équipes.' },
                    { title: 'Transfert de compétences', desc: 'Documentation, mentoring et accompagnement pour rendre les équipes autonomes.' },
                    { title: 'Ancrage dans les pratiques', desc: 'Suivi post-déploiement pour s\'assurer que les nouvelles pratiques sont durablement adoptées.' },
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

        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <p className="editorial-label mb-4">Résultats</p>
            <div className="space-y-12 max-w-3xl">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">Industrie</p>
                <h3 className="text-xl md:text-2xl mb-3">Adoption IA par les métiers</h3>
                <p className="text-base font-sans text-muted-foreground">Co-construction, formation et suivi des KPIs d&apos;adoption sur 3 BU. 85 % d&apos;adoption en 4 mois.</p>
              </div>
              <div className="h-px bg-border/50" />
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">Services</p>
                <h3 className="text-xl md:text-2xl mb-3">Transfert de compétences IA</h3>
                <p className="text-base font-sans text-muted-foreground">Parcours de formation, documentation et mentoring post-déploiement. Équipes autonomes en 3 mois.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Liens entités */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 max-w-3xl">
              <div>
                <p className="editorial-label mb-4">Build</p>
                <h3 className="text-xl mb-3">Besoin de développer la solution ?</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">Skillia Tech construit des solutions IA sur mesure.</p>
                <Link to="/tech" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Skillia Tech</Link>
              </div>
              <div>
                <p className="editorial-label mb-4">Formation</p>
                <h3 className="text-xl mb-3">Besoin de former les équipes ?</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">Skillia Academy propose des formations conçues par des praticiens.</p>
                <Link to="/academy" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Skillia Academy</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6">Parlons adoption.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Un échange pour comprendre vos enjeux de déploiement et d&apos;adoption.</p>
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

export default DeploiementAdoptionPage;
