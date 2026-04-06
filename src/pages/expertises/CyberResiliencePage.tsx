
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from '@/components/shared/CaseStudyCard';

const CyberResiliencePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container">
          <PageBreadcrumb items={[{ label: 'Expertises' }, { label: 'Cyber & résilience' }]} />
        </div>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-skillia-teal-light text-skillia-teal mb-4">Cyber & résilience</span>
              <h1 className="mb-6">Une transformation non sécurisée n'est pas une transformation — c'est un risque.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Chez Skillia, la sécurité n'est pas une option ajoutée en fin de projet. Elle fait partie du socle de toute transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-skillia-navy hover:bg-skillia-navy/90 text-white">
                  <Link to="/contact">Prendre RDV</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Demander un audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3 blocs resserrés */}
        <section className="section">
          <div className="container">
            <h2 className="mb-10">Ce que nous faisons concrètement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg border p-6 border-l-4 border-l-skillia-teal">
                <h3 className="text-lg font-semibold mb-3">Gouvernance & conformité</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Audit de posture sécurité</li>
                  <li>• Conformité IA Act, ISO 27001, DORA</li>
                  <li>• Gouvernance des risques</li>
                  <li>• Politique de sécurité</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg border p-6 border-l-4 border-l-skillia-teal">
                <h3 className="text-lg font-semibold mb-3">Protection & détection</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SOC et monitoring</li>
                  <li>• Réponse aux incidents</li>
                  <li>• Tests d'intrusion</li>
                  <li>• Sécurisation des SI</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg border p-6 border-l-4 border-l-skillia-teal">
                <h3 className="text-lg font-semibold mb-3">Continuité & résilience</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PCA / PRA</li>
                  <li>• Tests de résistance</li>
                  <li>• Gestion de crise</li>
                  <li>• Plan de reprise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-8">Cas clients</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <CaseStudyCard sector="Finance" challenge="Mise en conformité DORA" solution="Audit de posture, plan de remédiation et mise en place de la gouvernance sécurité." result="Conformité atteinte en 6 mois" />
              <CaseStudyCard sector="Industrie" challenge="Renforcement de la posture cyber" solution="Audit, politique de sécurité et tests d'intrusion sur l'ensemble du SI." result="Réduction de 60 % des vulnérabilités critiques" />
            </div>
          </div>
        </section>

        {/* Lien Resillia */}
        <section className="py-16">
          <div className="container">
            <div className="bg-skillia-teal-light rounded-lg p-8">
              <h3 className="text-lg font-semibold mb-2">Pour les projets nécessitant une capacité cyber dédiée et renforcée</h3>
              <p className="text-sm text-muted-foreground mb-6">Skillia mobilise Resillia, son entité spécialisée en cybersécurité et résilience.</p>
              <Button asChild variant="outline" className="flex-shrink-0">
                <Link to="/resillia">Découvrir Resillia <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Sécurisons votre transformation</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Un premier échange pour évaluer votre posture et identifier les priorités.</p>
            <Button asChild size="lg" className="bg-skillia-amber hover:bg-skillia-amber/90 text-skillia-navy font-semibold">
              <Link to="/contact">Demander un audit</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CyberResiliencePage;
