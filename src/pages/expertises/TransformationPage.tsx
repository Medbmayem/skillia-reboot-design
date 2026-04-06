
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from '@/components/shared/CaseStudyCard';

const TransformationPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container">
          <PageBreadcrumb items={[{ label: 'Expertises' }, { label: 'Transformation digitale' }]} />
        </div>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-skillia-purple-light text-skillia-purple mb-4">Transformation digitale</span>
              <h1 className="mb-6">La transformation digitale échoue quand elle oublie les personnes.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Processus figés, résistance au changement, outils mal adoptés. Nous remettons l'humain au centre de chaque projet de transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-skillia-navy hover:bg-skillia-navy/90 text-white">
                  <Link to="/contact">Prendre RDV</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card border-y">
          <div className="container max-w-3xl">
            <h2 className="mb-6">Le problème que nous résolvons</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La transformation digitale ne se résume pas à déployer de nouveaux outils. Elle implique de repenser les processus, d'accompagner le changement et de s'assurer que les équipes s'approprient les nouvelles pratiques.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sans cette dimension humaine, les projets échouent. Nous accompagnons les CODIR et les équipes sur des programmes de 6 à 18 mois.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="mb-10">Ce que nous faisons concrètement</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Diagnostic de maturité digitale', desc: 'Évaluation de votre organisation, vos processus et votre capacité à se transformer.' },
                { title: 'Refonte de processus', desc: 'Simplification et digitalisation des processus métier pour plus d\'efficacité.' },
                { title: 'Conduite du changement', desc: 'Accompagnement des équipes dans l\'appropriation des nouvelles pratiques.' },
                { title: 'Accompagnement CODIR', desc: 'Alignement stratégique et pilotage de la transformation au niveau direction.' },
                { title: 'Programme de transformation', desc: 'Planification et exécution de programmes de 6 à 18 mois avec jalons clairs.' },
                { title: 'Mesure de l\'impact', desc: 'KPIs d\'adoption, de performance et de satisfaction pour piloter par les résultats.' },
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
              <CaseStudyCard sector="Services" challenge="Transformation digitale et adoption" solution="Refonte des processus, formation des équipes et accompagnement au changement." result="Taux d'adoption de 85 % en 4 mois" />
              <CaseStudyCard sector="Industrie" challenge="Programme de transformation 12 mois" solution="Diagnostic, feuille de route, conduite du changement et mesure d'impact." result="30 % de gain de productivité sur les processus cibles" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="bg-skillia-amber-light rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Besoin de former vos équipes ?</h3>
                <p className="text-sm text-muted-foreground">Skillia Academy propose des formations conçues par des praticiens, sur des cas issus du terrain.</p>
              </div>
              <Button asChild variant="outline" className="flex-shrink-0">
                <Link to="/academy">Découvrir Skillia Academy <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Engageons la transformation</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Un échange pour comprendre votre contexte et construire ensemble la feuille de route.</p>
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

export default TransformationPage;
