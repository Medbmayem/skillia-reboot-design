
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* ===== HERO — Editorial, immersive ===== */}
        <section className="relative min-h-[90vh] flex items-end pb-20 md:pb-28">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
              alt="Espace de travail collaboratif"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>

          <div className="container relative z-10">
            <p className="text-xs tracking-[0.25em] uppercase font-sans font-medium text-background/60 mb-6">
              Cabinet de conseil — IA, transformation digitale et résilience
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-7xl max-w-4xl mb-6 leading-[1.05]">
              Des organisations plus intelligentes.<br />
              <span className="italic font-normal">Des décisions plus humaines.</span>
            </h1>
            <p className="text-background/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-sans font-light">
              Nous aidons les organisations à cadrer, sécuriser, déployer et faire adopter leurs transformations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ia-data"
                className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors">
                Voir nos expertises
              </Link>
              <Link to="/contact"
                className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full border border-background/30 text-background hover:bg-background/10 transition-colors">
                Prendre RDV
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SECTEURS — Bande sobre ===== */}
        <section className="py-10 md:py-12 border-b border-border/50">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {['Industrie', 'Finance', 'Santé', 'Services'].map(sector => (
                <span key={sector} className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EXPERTISES — Editorial grid ===== */}
        <section className="section">
          <div className="container">
            <div className="max-w-2xl mb-16 md:mb-20">
              <p className="editorial-label mb-4">Nos expertises</p>
              <h2>Ce que nous faisons concrètement.</h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: 'IA & Data',
                  desc: 'Votre IA doit rapporter. Pas juste fonctionner. Nous partons du business case, pas de l\'effet de mode.',
                  items: ['Audit de maturité', 'Stratégie IA', 'Gouvernance data', 'Business case & ROI'],
                  href: '/ia-data',
                  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
                },
                {
                  title: 'Transformation digitale',
                  desc: 'La transformation échoue quand elle oublie les personnes. Nous remettons l\'humain au centre.',
                  items: ['Diagnostic de maturité', 'Refonte de processus', 'Conduite du changement', 'Accompagnement CODIR'],
                  href: '/transformation',
                  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                },
                {
                  title: 'Cyber & résilience',
                  desc: 'Une transformation non sécurisée n'est pas une transformation — c'est un risque.',
                  items: ['Gouvernance & conformité', 'Protection & détection', 'Continuité & résilience'],
                  href: '/cyber-resilience',
                  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=800&q=80',
                },
                {
                  title: 'Déploiement & adoption',
                  desc: 'Déployer c'est bien. Que vos équipes l'utilisent vraiment, c'est mieux.',
                  items: ['Co-construction métiers', 'KPIs d\'adoption', 'Formation à l\'usage', 'Transfert de compétences'],
                  href: '/deploiement-adoption',
                  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
                },
              ].map((expertise, i) => (
                <div key={expertise.title} className={`grid md:grid-cols-2 gap-0 ${i > 0 ? 'border-t border-border/50' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={expertise.image} alt={expertise.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className={`flex flex-col justify-center p-8 md:p-14 lg:p-20 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="editorial-label mb-4">{expertise.title}</p>
                    <h3 className="text-2xl md:text-3xl mb-4 leading-[1.2]">{expertise.desc}</h3>
                    <ul className="space-y-2 mb-8">
                      {expertise.items.map(item => (
                        <li key={item} className="text-sm font-sans text-muted-foreground flex items-center gap-3">
                          <span className="w-1 h-1 rounded-full bg-skillia-amber flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to={expertise.href} className="editorial-link self-start" onClick={() => window.scrollTo(0, 0)}>
                      Approfondir
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== APPROCHE — 4 temps sur fond sombre ===== */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl mb-16 md:mb-20">
              <p className="text-xs tracking-[0.25em] uppercase font-sans font-medium text-background/40 mb-4">Notre approche</p>
              <h2 className="text-background">Quatre temps pour des transformations qui durent.</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { num: '01', title: 'Cadrer', desc: 'Diagnostic, priorisation et feuille de route alignée sur vos enjeux business.' },
                { num: '02', title: 'Sécuriser', desc: 'Intégration de la sécurité et de la conformité dès la phase de conception.' },
                { num: '03', title: 'Déployer', desc: 'Mise en œuvre progressive, pilotée par les résultats et les KPIs.' },
                { num: '04', title: 'Faire adopter', desc: 'Formation, accompagnement et ancrage dans les pratiques métier.' },
              ].map(step => (
                <div key={step.num}>
                  <span className="font-serif text-5xl font-light text-background/15 block mb-4">{step.num}</span>
                  <h3 className="text-xl text-background mb-3 font-medium">{step.title}</h3>
                  <p className="text-sm font-sans text-background/50 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <Link to="/approche"
                className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full border border-background/20 text-background hover:bg-background/10 transition-colors"
                onClick={() => window.scrollTo(0, 0)}>
                Notre méthode complète
              </Link>
            </div>
          </div>
        </section>

        {/* ===== ENTITÉS SPÉCIALISÉES ===== */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mb-16 md:mb-20">
              <p className="editorial-label mb-4">Entités spécialisées</p>
              <h2>Quand votre projet l'exige, nous mobilisons nos capacités dédiées.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  name: 'Resillia',
                  role: 'Capacité cyber et résilience dédiée.',
                  offers: ['Audits & GRC', 'SOC & détection avancée', 'PCA/PRA & gestion de crise'],
                  href: '/resillia',
                },
                {
                  name: 'Skillia Tech',
                  role: 'Build IA sur mesure, nativement sécurisé.',
                  offers: ['Assistants métier & agents IA', 'Plateformes data & IA', 'Intégration SI'],
                  href: '/tech',
                },
                {
                  name: 'Skillia Academy',
                  role: 'Formation et montée en compétences.',
                  offers: ['Dirigeants & CODIR', 'Métiers & managers', 'Équipes projet'],
                  href: '/academy',
                },
              ].map(entity => (
                <div key={entity.name}>
                  <h3 className="text-2xl mb-3">{entity.name}</h3>
                  <p className="text-sm font-sans text-muted-foreground mb-6 leading-relaxed">{entity.role}</p>
                  <ul className="space-y-2 mb-8">
                    {entity.offers.map(offer => (
                      <li key={offer} className="text-sm font-sans text-muted-foreground flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-skillia-amber flex-shrink-0" />
                        {offer}
                      </li>
                    ))}
                  </ul>
                  <Link to={entity.href} className="editorial-link" onClick={() => window.scrollTo(0, 0)}>
                    En savoir plus
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CAS CLIENTS — éditorial ===== */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <div className="max-w-2xl mb-16 md:mb-20">
              <p className="editorial-label mb-4">Résultats</p>
              <h2>Résultats concrets.</h2>
            </div>

            <div className="space-y-12 md:space-y-16 max-w-3xl">
              {[
                { sector: 'Industrie', challenge: 'Déploiement IA sur 3 business units', result: 'Réduction de 40 % du temps de traitement.' },
                { sector: 'Finance', challenge: 'Mise en conformité réglementaire DORA', result: 'Conformité atteinte en 6 mois.' },
                { sector: 'Services', challenge: 'Transformation digitale et adoption par les équipes', result: 'Taux d'adoption de 85 % en 4 mois.' },
              ].map((cas, i) => (
                <div key={i}>
                  <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/60 mb-3">{cas.sector}</p>
                  <h3 className="text-xl md:text-2xl mb-3">{cas.challenge}</h3>
                  <p className="text-base font-sans text-muted-foreground leading-relaxed">{cas.result}</p>
                  {i < 2 && <div className="h-px bg-border/50 mt-12 md:mt-16" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MANIFESTE ===== */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="divider mx-auto mb-8" />
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal italic leading-[1.3] mb-6">
                « La technologie n'a de valeur que lorsqu'elle sert une vision claire, portée par des équipes qui la comprennent et l'adoptent. »
              </blockquote>
              <p className="text-sm font-sans text-muted-foreground">— Équipe Skillia</p>
            </div>
          </div>
        </section>

        {/* ===== TÉMOIGNAGES ===== */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <p className="editorial-label mb-4">Témoignages</p>
              <h2>Ce qu'en disent nos clients.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              {[
                { quote: 'Skillia a su cadrer notre projet IA avec une rigueur et une clarté qui nous ont permis de convaincre le CODIR en un mois.', author: 'CDO — Groupe industriel' },
                { quote: 'L\'approche de Skillia sur la cybersécurité est intégrée, pas rajoutée. C\'est exactement ce dont nous avions besoin.', author: 'RSSI — Secteur financier' },
                { quote: 'Les formations Academy ont changé le regard de nos managers sur l\'IA. Concrètes et directement applicables.', author: 'DRH — Secteur services' },
                { quote: 'Un collectif d\'experts qui combine vision stratégique et capacité de livraison. Rare et précieux.', author: 'Directeur de programme — Secteur santé' },
              ].map((t, i) => (
                <div key={i}>
                  <p className="font-serif text-lg italic leading-[1.6] mb-4">« {t.quote} »</p>
                  <p className="text-xs font-sans tracking-wide text-muted-foreground">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT CTA ===== */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-background mb-6">Parlons de votre projet.</h2>
              <p className="text-base font-sans text-background/50 leading-relaxed mb-10 max-w-lg mx-auto">
                Que vous souhaitiez cadrer une stratégie IA, renforcer votre posture cyber ou former vos équipes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact"
                  className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}>
                  Prendre RDV
                </Link>
                <Link to="/contact"
                  className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full border border-background/20 text-background hover:bg-background/10 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}>
                  Demander un audit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
