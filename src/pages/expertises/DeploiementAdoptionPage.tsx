
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const DeploiementAdoptionPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80" alt="Adoption" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Déploiement & adoption
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              Le succès se mesure<br />
              <span className="italic font-normal">à l&apos;adoption, pas à la livraison.</span>
            </h1>
          </div>
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Le succès d&apos;un projet se mesure à son adoption réelle par les métiers, pas à sa livraison technique. Nous accompagnons le déploiement de bout en bout.
              </p>
            </div>
          </div>
        </section>

        <section className="h-[40vh] md:h-[50vh]">
          <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=2000&q=80" alt="Équipes" className="w-full h-full object-cover" />
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Ce que nous faisons</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  De la co-construction<br />
                  <span className="italic font-normal">à l&apos;ancrage durable.</span>
                </h2>
              </div>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl mb-2">Co-construction avec les métiers</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Impliquer les utilisateurs finaux dès la conception pour garantir l&apos;adéquation avec les besoins réels.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Suivi des KPIs d&apos;adoption</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Tableaux de bord et indicateurs pour mesurer l&apos;adoption réelle et ajuster le dispositif.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Formation et transfert</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Parcours de formation, documentation, mentoring et accompagnement pour rendre les équipes autonomes.</p>
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
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Adoption IA par les métiers</p>
                  <p className="text-sm font-sans text-muted-foreground">Industrie — 85 % d&apos;adoption en 4 mois.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Transfert de compétences IA</p>
                  <p className="text-sm font-sans text-muted-foreground">Services — Équipes autonomes en 3 mois.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 max-w-3xl">
              <div>
                <h3 className="text-xl mb-3">Besoin de construire la solution ?</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4 leading-[1.8]">Skillia Tech construit des solutions IA sur mesure.</p>
                <Link to="/tech" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Skillia Tech</Link>
              </div>
              <div>
                <h3 className="text-xl mb-3">Besoin de former les équipes ?</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4 leading-[1.8]">Skillia Academy propose des formations par des praticiens.</p>
                <Link to="/academy" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Skillia Academy</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Parlons<br /><span className="italic font-normal">adoption.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre RDV</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeploiementAdoptionPage;
