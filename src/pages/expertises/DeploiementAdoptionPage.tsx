
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from '@/components/shared/CaseStudyCard';

const DeploiementAdoptionPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container">
          <PageBreadcrumb items={[{ label: 'Expertises' }, { label: 'Déploiement, adoption & compétences' }]} />
        </div>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-skillia-amber-light text-skillia-amber-dark mb-4">Déploiement & adoption</span>
              <h1 className="mb-6">Déployer une solution IA, c'est bien. Que vos équipes l'utilisent vraiment, c'est mieux.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Le succès d'un projet se mesure à son adoption réelle par les métiers, pas à sa livraison technique.
              </p>
              <Button asChild size="lg" className="bg-skillia-navy hover:bg-skillia-navy/90 text-white">
                <Link to="/contact">Prendre RDV</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="mb-10">Ce que nous faisons concrètement</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Co-construction avec les métiers', desc: 'Impliquer les utilisateurs finaux dès la conception pour garantir l\'adéquation avec les besoins réels.' },
                { title: 'Pilotage de projets IA', desc: 'Gestion de projet rigoureuse avec jalons, livrables et suivi des risques.' },
                { title: 'Suivi des KPIs d\'adoption', desc: 'Tableaux de bord et indicateurs pour mesurer l\'adoption réelle et ajuster le dispositif.' },
                { title: 'Formation à l\'usage', desc: 'Parcours de formation adaptés aux profils et aux niveaux de maturité des équipes.' },
                { title: 'Transfert de compétences', desc: 'Documentation, mentoring et accompagnement pour rendre les équipes autonomes.' },
                { title: 'Ancrage dans les pratiques', desc: 'Suivi post-déploiement pour s\'assurer que les nouvelles pratiques sont durablement adoptées.' },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-8">Cas clients</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <CaseStudyCard sector="Industrie" challenge="Adoption IA par les métiers" solution="Co-construction, formation et suivi des KPIs d'adoption sur 3 BU." result="85 % d'adoption en 4 mois" />
              <CaseStudyCard sector="Services" challenge="Transfert de compétences IA" solution="Parcours de formation, documentation et mentoring post-déploiement." result="Équipes autonomes en 3 mois" />
            </div>
          </div>
        </section>

        {/* Liens entités */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-skillia-purple-light rounded-lg p-8">
                <h3 className="text-lg font-semibold mb-2">Besoin de développer la solution ?</h3>
                <p className="text-sm text-muted-foreground mb-4">Skillia Tech construit des solutions IA sur mesure, nativement sécurisées.</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/tech">Skillia Tech <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="bg-skillia-amber-light rounded-lg p-8">
                <h3 className="text-lg font-semibold mb-2">Besoin de former les équipes ?</h3>
                <p className="text-sm text-muted-foreground mb-4">Skillia Academy propose des formations conçues par des praticiens du terrain.</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/academy">Skillia Academy <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Parlons adoption</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Un échange pour comprendre vos enjeux de déploiement et d'adoption.</p>
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

export default DeploiementAdoptionPage;
