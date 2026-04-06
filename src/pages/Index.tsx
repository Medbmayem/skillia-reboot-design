
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Landmark, HeartPulse, Briefcase, Quote } from 'lucide-react';
import ExpertiseCard from '@/components/shared/ExpertiseCard';
import EntityCard from '@/components/shared/EntityCard';
import CaseStudyCard from '@/components/shared/CaseStudyCard';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* ===== SECTION 1 — HERO ===== */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <p className="text-sm font-medium tracking-wide uppercase text-skillia-amber mb-5">
                  Cabinet de conseil en IA, transformation digitale et résilience — depuis 2021
                </p>
                <h1 className="mb-6">
                  Des organisations plus intelligentes.{' '}
                  <span className="text-skillia-purple">Des décisions plus humaines.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  Nous aidons les organisations à cadrer, sécuriser, déployer et faire adopter leurs transformations.
                </p>
                
                {/* 4 pilules */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['IA & Data', 'Transformation digitale', 'Cyber & résilience', 'Déploiement & adoption'].map(label => (
                    <span key={label} className="inline-block px-4 py-1.5 text-sm font-medium rounded-full border bg-card">
                      {label}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-skillia-navy hover:bg-skillia-navy/90 text-white">
                    <Link to="/ia-data">Voir nos expertises</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Prendre RDV</Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                {/* Stats placeholders */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg border p-5 text-center">
                    <p className="text-2xl font-bold text-skillia-navy">50+</p>
                    <p className="text-xs text-muted-foreground mt-1">Missions réalisées</p>
                  </div>
                  <div className="bg-card rounded-lg border p-5 text-center">
                    <p className="text-2xl font-bold text-skillia-navy">4</p>
                    <p className="text-xs text-muted-foreground mt-1">Expertises socles</p>
                  </div>
                  <div className="bg-card rounded-lg border p-5 text-center">
                    <p className="text-2xl font-bold text-skillia-navy">3</p>
                    <p className="text-xs text-muted-foreground mt-1">Entités spécialisées</p>
                  </div>
                  <div className="bg-card rounded-lg border p-5 text-center">
                    <p className="text-2xl font-bold text-skillia-navy">2021</p>
                    <p className="text-xs text-muted-foreground mt-1">Année de création</p>
                  </div>
                </div>

                {/* Citation */}
                <div className="bg-card rounded-lg border p-5">
                  <Quote className="h-5 w-5 text-skillia-amber mb-2" />
                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    « Un accompagnement structuré qui a permis à nos équipes de s'approprier l'IA au quotidien. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Directeur de la transformation, secteur industriel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2 — BANDE DE PREUVES ===== */}
        <section className="py-8 border-y bg-card">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[
                { icon: Building2, label: 'Industrie' },
                { icon: Landmark, label: 'Finance' },
                { icon: HeartPulse, label: 'Santé' },
                { icon: Briefcase, label: 'Services' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
              <span className="text-xs text-muted-foreground">Nos clients opèrent dans ces secteurs</span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3 — NOS 4 EXPERTISES ===== */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Ce que nous faisons concrètement</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quatre expertises socles pour accompagner votre transformation de bout en bout.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ExpertiseCard
                tag="IA & Data"
                title="Votre IA doit rapporter. Pas juste fonctionner."
                problem="Beaucoup d'organisations déploient de l'IA, peu captent un ROI réel. Nous partons du business case."
                offers={['Audit de maturité IA & Data', 'Stratégie et gouvernance data', 'Priorisation des cas d\'usage', 'Business case et KPI']}
                href="/ia-data"
                accentColor="skillia-navy"
              />
              <ExpertiseCard
                tag="Transformation digitale"
                title="La transformation échoue quand elle oublie les personnes."
                problem="Processus figés, résistance au changement, outils mal adoptés. Nous remettons l'humain au centre."
                offers={['Diagnostic de maturité digitale', 'Refonte de processus', 'Conduite du changement', 'Accompagnement CODIR']}
                href="/transformation"
                accentColor="skillia-purple"
              />
              <ExpertiseCard
                tag="Cyber & résilience"
                title="Une transformation non sécurisée n'est pas une transformation."
                problem="Chez Skillia, la sécurité n'est pas une option ajoutée en fin de projet. Elle fait partie du socle."
                offers={['Gouvernance & conformité', 'Protection & détection', 'Continuité & résilience', 'IA Act, ISO 27001, DORA']}
                href="/cyber-resilience"
                accentColor="skillia-teal"
              />
              <ExpertiseCard
                tag="Déploiement & adoption"
                title="Déployer c'est bien. Que vos équipes l'utilisent, c'est mieux."
                problem="Le succès d'un projet se mesure à son adoption réelle par les métiers, pas à sa livraison technique."
                offers={['Co-construction avec les métiers', 'Pilotage et KPIs d\'adoption', 'Formation à l\'usage', 'Transfert de compétences']}
                href="/deploiement-adoption"
                accentColor="skillia-amber"
              />
            </div>
          </div>
        </section>

        {/* ===== SECTION 4 — NOTRE APPROCHE ===== */}
        <section className="py-20 md:py-28 bg-skillia-navy text-white">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="text-white mb-4">Notre approche en 4 temps</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Une méthode éprouvée, du cadrage stratégique à l'adoption durable.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Cadrer', desc: 'Diagnostic, priorisation et feuille de route alignée sur vos enjeux business.' },
                { num: '02', title: 'Sécuriser', desc: 'Intégration de la sécurité et de la conformité dès la phase de conception.' },
                { num: '03', title: 'Déployer', desc: 'Mise en œuvre progressive, pilotée par les résultats et les KPIs.' },
                { num: '04', title: 'Faire adopter', desc: 'Formation, accompagnement et ancrage dans les pratiques métier.' },
              ].map(step => (
                <div key={step.num} className="relative">
                  <span className="text-4xl font-bold text-skillia-amber/30 mb-3 block">{step.num}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/approche">Notre méthode complète <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5 — ENTITÉS SPÉCIALISÉES ===== */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Quand votre projet l'exige, nous mobilisons nos entités spécialisées</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des capacités dédiées qui prolongent notre accompagnement sur des missions qui requièrent une expertise renforcée.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <EntityCard
                name="Resillia"
                role="Capacité cyber et résilience dédiée. Quand vos enjeux exigent une expertise sécurité renforcée."
                offers={['Audits & GRC', 'SOC & détection avancée', 'PCA/PRA & gestion de crise']}
                href="/resillia"
                accentColor="#0F6E56"
              />
              <EntityCard
                name="Skillia Tech"
                role="Build IA sur mesure. Une fois la stratégie posée, nous construisons les solutions."
                offers={['Assistants métier & agents IA', 'Plateformes data & IA', 'Intégration dans le SI existant']}
                href="/tech"
                accentColor="#534AB7"
              />
              <EntityCard
                name="Skillia Academy"
                role="Formation et montée en compétences. La transformation ne tient que si les équipes montent en compétence."
                offers={['Dirigeants & CODIR', 'Métiers & managers', 'Équipes projet']}
                href="/academy"
                accentColor="#C8943A"
              />
            </div>
          </div>
        </section>

        {/* ===== SECTION 6 — CAS CLIENTS ===== */}
        <section className="section bg-card border-y">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Résultats concrets</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des missions menées avec rigueur, mesurées par l'impact réel.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <CaseStudyCard
                sector="Industrie"
                challenge="Déploiement IA sur 3 BU"
                solution="Cadrage stratégique, gouvernance data et pilotage de l'adoption avec les métiers."
                result="Réduction de 40 % du temps de traitement"
              />
              <CaseStudyCard
                sector="Finance"
                challenge="Mise en conformité réglementaire"
                solution="Audit de posture, plan de remédiation et mise en place de la gouvernance sécurité."
                result="Conformité DORA atteinte en 6 mois"
              />
              <CaseStudyCard
                sector="Services"
                challenge="Transformation digitale et adoption"
                solution="Refonte des processus, formation des équipes et accompagnement au changement."
                result="Taux d'adoption de 85 % en 4 mois"
              />
            </div>
          </div>
        </section>

        {/* ===== SECTION 7 — MANIFESTE + TÉMOIGNAGES + CONTACT ===== */}
        {/* Manifeste */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-8 w-8 text-skillia-amber mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
                « La technologie n'a de valeur que lorsqu'elle sert une vision claire, portée par des équipes qui la comprennent et l'adoptent. »
              </blockquote>
              <p className="text-muted-foreground text-sm">— Équipe Skillia</p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="text-center mb-10">Ce qu'en disent nos clients</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { quote: 'Skillia a su cadrer notre projet IA avec une rigueur et une clarté qui nous ont permis de convaincre le CODIR en un mois.', author: 'CDO', sector: 'Groupe industriel' },
                { quote: 'L\'approche de Skillia sur la cybersécurité est intégrée, pas rajoutée. C\'est exactement ce dont nous avions besoin.', author: 'RSSI', sector: 'Secteur financier' },
                { quote: 'Les formations Academy ont changé le regard de nos managers sur l\'IA. Concrètes et directement applicables.', author: 'DRH', sector: 'Secteur services' },
                { quote: 'Un collectif d\'experts qui combine vision stratégique et capacité de livraison. Rare et précieux.', author: 'Directeur de programme', sector: 'Secteur santé' },
              ].map((t, i) => (
                <div key={i} className="bg-background rounded-lg border p-6">
                  <Quote className="h-4 w-4 text-skillia-amber mb-3" />
                  <p className="text-sm leading-relaxed mb-4 italic">« {t.quote} »</p>
                  <p className="text-xs text-muted-foreground">{t.author} — {t.sector}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 md:py-28 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Parlons de votre projet</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Que vous souhaitiez cadrer une stratégie IA, renforcer votre posture cyber ou former vos équipes, nous sommes là pour en discuter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-skillia-amber hover:bg-skillia-amber/90 text-skillia-navy font-semibold">
                <Link to="/contact">Prendre RDV</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/contact">Demander un audit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
