
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-end pb-24 md:pb-32">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
              alt="Espace de travail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          </div>
          <div className="container relative z-10">
            <h1 className="text-background text-4xl md:text-6xl lg:text-[5.5rem] max-w-4xl mb-8 leading-[1.05]">
              Des organisations<br />plus intelligentes.<br />
              <span className="italic font-normal">Des décisions<br />plus humaines.</span>
            </h1>
            <p className="text-background/60 text-lg max-w-lg mb-10 font-sans font-light leading-relaxed">
              Nous aidons les organisations à cadrer, sécuriser, déployer et faire adopter leurs transformations.
            </p>
            <Link to="/contact"
              className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors">
              Prendre RDV
            </Link>
          </div>
        </section>

        {/* ===== IMAGE BREAK ===== */}
        <section className="h-[50vh] md:h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
            alt="Collaboration"
            className="w-full h-full object-cover"
          />
        </section>

        {/* ===== POSITIONNEMENT ===== */}
        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Cabinet de conseil</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-10">
                Nous accompagnons les transformations<br />
                <span className="italic font-normal">de bout en bout.</span>
              </h2>
              <p className="editorial-body">
                Stratégie IA, transformation digitale, cybersécurité et adoption — quatre expertises réunies dans un même cabinet pour que chaque projet soit cadré, sécurisé, déployé et durablement adopté.
              </p>
            </div>
          </div>
        </section>

        {/* ===== EXPERTISES — Pure editorial, no lists ===== */}
        <section className="pb-0">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" alt="IA & Data" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24">
                <p className="editorial-label mb-5">IA & Data</p>
                <h3 className="text-2xl md:text-3xl leading-[1.2] mb-5">Votre IA doit rapporter. Pas juste fonctionner.</h3>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8] mb-8">Nous partons du business case pour construire des stratégies IA à ROI mesurable. Audit, gouvernance, priorisation, déploiement.</p>
                <Link to="/ia-data" className="editorial-link self-start" onClick={() => window.scrollTo(0, 0)}>Approfondir</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-0">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24 order-2 md:order-1">
                <p className="editorial-label mb-5">Transformation digitale</p>
                <h3 className="text-2xl md:text-3xl leading-[1.2] mb-5">La transformation échoue quand elle oublie les personnes.</h3>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8] mb-8">Diagnostic, refonte de processus, conduite du changement et accompagnement CODIR sur des programmes de 6 à 18 mois.</p>
                <Link to="/transformation" className="editorial-link self-start" onClick={() => window.scrollTo(0, 0)}>Approfondir</Link>
              </div>
              <div className="aspect-[4/3] overflow-hidden order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Transformation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-0">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=1200&q=80" alt="Cybersécurité" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24">
                <p className="editorial-label mb-5">Cyber & résilience</p>
                <h3 className="text-2xl md:text-3xl leading-[1.2] mb-5">La sécurité fait partie du socle. Pas des options.</h3>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8] mb-8">Gouvernance, conformité, protection, détection, continuité. La cybersécurité est intégrée dès le premier jour de chaque projet.</p>
                <Link to="/cyber-resilience" className="editorial-link self-start" onClick={() => window.scrollTo(0, 0)}>Approfondir</Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24 order-2 md:order-1">
                <p className="editorial-label mb-5">Déploiement & adoption</p>
                <h3 className="text-2xl md:text-3xl leading-[1.2] mb-5">Le succès se mesure à l&apos;adoption, pas à la livraison.</h3>
                <p className="text-sm font-sans text-muted-foreground leading-[1.8] mb-8">Co-construction avec les métiers, suivi des KPIs, formation, transfert de compétences. Nous restons jusqu&apos;à l&apos;ancrage.</p>
                <Link to="/deploiement-adoption" className="editorial-link self-start" onClick={() => window.scrollTo(0, 0)}>Approfondir</Link>
              </div>
              <div className="aspect-[4/3] overflow-hidden order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Adoption" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FULL IMAGE BREAK ===== */}
        <section className="h-[40vh] md:h-[55vh]">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            alt="Espace de réflexion"
            className="w-full h-full object-cover"
          />
        </section>

        {/* ===== APPROCHE — Minimal ===== */}
        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="editorial-label mb-8">Notre approche</p>
              <h2 className="text-3xl md:text-4xl leading-[1.2] mb-12">
                Cadrer. Sécuriser. Déployer.<br />
                <span className="italic font-normal">Faire adopter.</span>
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-[1.8] max-w-xl mx-auto mb-12">
                Quatre temps pour des transformations qui ne s&apos;arrêtent pas à la livraison technique.
              </p>
              <Link to="/approche" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>
                Découvrir notre méthode
              </Link>
            </div>
          </div>
        </section>

        {/* ===== MANIFESTE ===== */}
        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl font-normal italic leading-[1.2]">
                « La technologie n&apos;a de valeur que lorsqu&apos;elle sert une vision claire, portée par des équipes qui la comprennent. »
              </blockquote>
            </div>
          </div>
        </section>

        {/* ===== ENTITÉS — Ultra minimal ===== */}
        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl mb-20">
              <p className="editorial-label mb-6">Quand le projet l&apos;exige</p>
              <h2 className="text-3xl md:text-4xl leading-[1.2]">
                Nous mobilisons nos<br />
                <span className="italic font-normal">capacités spécialisées.</span>
              </h2>
            </div>

            <div className="space-y-0 max-w-3xl">
              <div className="py-10 border-t border-border/40">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-2xl mb-2">Resillia</h3>
                    <p className="text-sm font-sans text-muted-foreground">Cybersécurité et résilience dédiées.</p>
                  </div>
                  <Link to="/resillia" className="editorial-link flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>En savoir plus</Link>
                </div>
              </div>
              <div className="py-10 border-t border-border/40">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-2xl mb-2">Skillia Tech</h3>
                    <p className="text-sm font-sans text-muted-foreground">Solutions IA sur mesure, nativement sécurisées.</p>
                  </div>
                  <Link to="/tech" className="editorial-link flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>En savoir plus</Link>
                </div>
              </div>
              <div className="py-10 border-t border-b border-border/40">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-2xl mb-2">Skillia Academy</h3>
                    <p className="text-sm font-sans text-muted-foreground">Formation et montée en compétences.</p>
                  </div>
                  <Link to="/academy" className="editorial-link flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>En savoir plus</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FULL IMAGE ===== */}
        <section className="h-[50vh] md:h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80"
            alt="Réunion d'équipe"
            className="w-full h-full object-cover"
          />
        </section>

        {/* ===== RÉSULTATS — Ultra clean ===== */}
        <section className="py-28 md:py-40">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Résultats</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  Des missions mesurées<br />
                  <span className="italic font-normal">par l&apos;impact réel.</span>
                </h2>
              </div>
              <div className="space-y-12">
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Déploiement IA sur 3 business units</p>
                  <p className="text-sm font-sans text-muted-foreground">Industrie — Réduction de 40 % du temps de traitement.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Conformité réglementaire DORA</p>
                  <p className="text-sm font-sans text-muted-foreground">Finance — Conformité atteinte en 6 mois.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Transformation et adoption</p>
                  <p className="text-sm font-sans text-muted-foreground">Services — 85 % d&apos;adoption en 4 mois.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TÉMOIGNAGE — Single, editorial ===== */}
        <section className="py-28 md:py-40 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl italic leading-[1.4] mb-8">
                « Skillia a su cadrer notre projet IA avec une rigueur et une clarté qui nous ont permis de convaincre le CODIR en un mois. »
              </p>
              <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground/60">CDO — Groupe industriel</p>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8">
                Parlons de<br />
                <span className="italic font-normal">votre projet.</span>
              </h2>
              <Link to="/contact"
                className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors"
                onClick={() => window.scrollTo(0, 0)}>
                Prendre RDV
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
