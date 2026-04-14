
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* ===== HERO — Full bleed, cinematic ===== */}
        <section className="relative min-h-screen flex items-end pb-28 md:pb-36">
          <div className="absolute inset-0 z-0">
            <img
src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=2000&q=80"
              alt="Espace de bureau contemporain — lumière naturelle et sobriété"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-foreground/20" />
          </div>
          <div className="container relative z-10">
            <h1 className="text-background text-4xl md:text-6xl lg:text-[5.5rem] max-w-4xl mb-6 leading-[1.05] drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
              Des organisations<br />plus intelligentes.<br />
              <span className="italic font-normal">Des décisions<br />plus humaines.</span>
            </h1>
            <p className="text-background/80 text-lg md:text-xl max-w-lg font-sans font-light leading-relaxed mb-12">
              Nous aidons les organisations à cadrer, sécuriser, déployer et faire adopter leurs transformations.
            </p>
            <div className="flex items-center gap-10">
              <Link to="/contact" className="text-sm font-sans font-medium tracking-wide text-background border-b-2 border-background/40 pb-1.5 hover:border-background transition-colors" onClick={() => window.scrollTo(0, 0)}>
                Prendre rendez-vous
              </Link>
              <button onClick={() => { const el = document.getElementById('expertises-start'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-sans tracking-wide text-background/50 hover:text-background/80 transition-colors">
                Voir nos expertises
              </button>
            </div>
          </div>
        </section>

        {/* ===== CRÉDIBILITÉ — Chiffres & preuves ===== */}
        <section className="py-24 md:py-32 border-b border-border/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="editorial-label mb-6">Qui nous sommes</p>
                <h2 className="text-2xl md:text-3xl leading-[1.2] mb-6">
                  Un cabinet né pour les transformations<br />
                  <span className="italic font-normal">qui comptent vraiment.</span>
                </h2>
                <p className="text-sm font-sans text-muted-foreground leading-[1.9] max-w-md">
                  IA, digital, cybersécurité, adoption — nous réunissons les expertises qui permettent aux organisations de passer de la stratégie à l'impact mesurable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-12">
                <div>
                  <p className="font-serif text-4xl md:text-5xl mb-2">4</p>
                  <p className="text-xs font-sans text-muted-foreground tracking-wide leading-relaxed">expertises intégrées<br />IA · Digital · Cyber · Adoption</p>
                </div>
                <div>
                  <p className="font-serif text-4xl md:text-5xl mb-2">&gt;80%</p>
                  <p className="text-xs font-sans text-muted-foreground tracking-wide leading-relaxed">taux d'adoption constaté<br />sur nos missions</p>
                </div>
                <div>
                  <p className="font-serif text-4xl md:text-5xl mb-2">6–18</p>
                  <p className="text-xs font-sans text-muted-foreground tracking-wide leading-relaxed">mois de programmes<br />de transformation</p>
                </div>
                <div>
                  <p className="font-serif text-4xl md:text-5xl mb-2">3</p>
                  <p className="text-xs font-sans text-muted-foreground tracking-wide leading-relaxed">entités spécialisées<br />Resillia · Tech · Academy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== POSITIONNEMENT — Left-aligned prose ===== */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-10">Cabinet de conseil</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.12] mb-12">
                Nous accompagnons les transformations<br />
                <span className="italic font-normal">de bout en bout.</span>
              </h2>
              <p className="editorial-body">
                Stratégie IA, transformation digitale, cybersécurité et adoption — quatre expertises réunies dans un même cabinet pour que chaque projet soit cadré, sécurisé, déployé et durablement adopté.
              </p>
            </div>
          </div>
        </section>

        {/* ===== EXPERTISE 1 — Full-width image with overlaid text ===== */}
        <section id="expertises-start" className="relative h-[70vh] md:h-[80vh] flex items-end">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80" alt="Bureau sobre — carnet, stylo et décision" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="container relative z-10 pb-16 md:pb-24">
            <p className="text-xs font-sans tracking-[0.2em] uppercase font-medium text-background/50 mb-5">IA & Data</p>
            <h3 className="text-background text-2xl md:text-4xl leading-[1.15] max-w-xl mb-5 drop-shadow-[0_1px_8px_rgba(0,0,0,0.2)]">L'IA n'a d'intérêt que<br /><span className="italic font-normal">lorsqu'elle crée de la valeur.</span></h3>
            <Link to="/ia-data" className="text-sm font-sans text-background/60 border-b border-background/30 pb-0.5 hover:text-background hover:border-background/60 transition-colors" onClick={() => window.scrollTo(0, 0)}>Approfondir</Link>
          </div>
        </section>

        {/* ===== EXPERTISE 2 — Right-aligned text, no image ===== */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-xl ml-auto">
              <p className="editorial-label mb-6">Transformation digitale</p>
              <h3 className="text-2xl md:text-4xl leading-[1.15] mb-8">La transformation échoue quand elle oublie les personnes.</h3>
              <p className="text-sm font-sans text-muted-foreground leading-[1.9] mb-8">Diagnostic, refonte de processus, conduite du changement et accompagnement CODIR sur des programmes de 6 à 18 mois.</p>
              <Link to="/transformation" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Approfondir</Link>
            </div>
          </div>
        </section>

        {/* ===== EXPERTISE 3 — Asymmetric split ===== */}
        <section>
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 aspect-[16/10] md:aspect-auto overflow-hidden">
              <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1400&q=80" alt="Couloir de bureaux — architecture et sobriété" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20">
              <p className="editorial-label mb-5">Cyber & résilience</p>
              <h3 className="text-2xl md:text-3xl leading-[1.2] mb-5">La sécurité fait partie du socle.</h3>
              <p className="text-sm font-sans text-muted-foreground leading-[1.8] mb-8">Gouvernance, conformité, protection, détection, continuité. La cybersécurité est intégrée dès le premier jour.</p>
              <Link to="/cyber-resilience" className="editorial-link self-start" onClick={() => window.scrollTo(0, 0)}>Approfondir</Link>
            </div>
          </div>
        </section>

        {/* ===== EXPERTISE 4 — Centered, typographic only ===== */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <p className="editorial-label mb-8">Déploiement & adoption</p>
              <h3 className="text-2xl md:text-4xl leading-[1.2] mb-8">
                Le succès se mesure à l&apos;adoption,<br />
                <span className="italic font-normal">pas à la livraison.</span>
              </h3>
              <p className="text-sm font-sans text-muted-foreground leading-[1.9] max-w-lg mx-auto mb-10">Co-construction avec les métiers, suivi des KPIs, formation, transfert de compétences. Nous restons jusqu&apos;à l&apos;ancrage.</p>
              <Link to="/deploiement-adoption" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Approfondir</Link>
            </div>
          </div>
        </section>


        {/* ===== APPROCHE — Single statement ===== */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.12] mb-10">
                Cadrer. Sécuriser. Déployer.<br />
                <span className="italic font-normal">Faire adopter.</span>
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-[1.9] max-w-xl mb-10">
                Quatre temps pour des transformations qui ne s&apos;arrêtent pas à la livraison technique.
              </p>
              <Link to="/approche" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>
                Découvrir notre méthode
              </Link>
            </div>
          </div>
        </section>

        {/* ===== MANIFESTE ===== */}
        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl font-normal italic leading-[1.2]">
                « La technologie n&apos;a de valeur que lorsqu&apos;elle sert une vision claire, portée par des équipes qui la comprennent. »
              </blockquote>
            </div>
          </div>
        </section>

        {/* ===== ENTITÉS — Flush, no borders ===== */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-6">Quand le projet l&apos;exige</p>
                <h2 className="text-3xl md:text-4xl leading-[1.15]">
                  Nous mobilisons nos<br />
                  <span className="italic font-normal">capacités spécialisées.</span>
                </h2>
              </div>
              <div className="space-y-14 md:pt-4">
                <div>
                  <h3 className="text-xl mb-2">Resillia</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8] mb-3">Cybersécurité et résilience dédiées.</p>
                  <Link to="/resillia" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>En savoir plus</Link>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Skillia Tech</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8] mb-3">Solutions IA sur mesure, nativement sécurisées.</p>
                  <Link to="/tech" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>En savoir plus</Link>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Skillia Academy</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8] mb-3">Formation et montée en compétences.</p>
                  <Link to="/academy" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>En savoir plus</Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ===== RÉSULTATS — Inline prose, no grid ===== */}
        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <h2 className="text-3xl md:text-4xl leading-[1.15] mb-16">
                Des missions mesurées<br />
                <span className="italic font-normal">par l&apos;impact réel.</span>
              </h2>
              <div className="space-y-10">
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Déploiement IA sur 3 business units — <span className="font-sans text-base text-muted-foreground">Industrie, réduction de 40 % du temps de traitement.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Conformité réglementaire DORA — <span className="font-sans text-base text-muted-foreground">Finance, conformité atteinte en 6 mois.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Transformation et adoption — <span className="font-sans text-base text-muted-foreground">Services, plus de 80 % d&apos;adoption en 4 mois.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TÉMOIGNAGE ===== */}
        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl italic leading-[1.4] mb-8">
                « Skillia a su cadrer notre projet IA avec une rigueur et une clarté qui nous ont permis de convaincre le CODIR en un mois. »
              </p>
              <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground/50">CDO — Groupe industriel</p>
            </div>
          </div>
        </section>

        {/* ===== CONTACT — Text only, no button ===== */}
        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8">
                Parlons de<br />
                <span className="italic font-normal">votre projet.</span>
              </h2>
              <Link to="/contact"
                className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors"
                onClick={() => window.scrollTo(0, 0)}>
                Prendre rendez-vous
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
