
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from '@/components/shared/CaseStudyCard';

const ResilliaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container">
          <PageBreadcrumb items={[
            { label: 'Cyber & résilience', href: '/cyber-resilience' },
            { label: 'Resillia' }
          ]} />
        </div>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 rounded-full bg-skillia-teal" />
                <span className="text-sm font-semibold tracking-wider uppercase text-skillia-teal">Resillia</span>
              </div>
              <h1 className="mb-6">Votre organisation tient. Quoi qu'il arrive.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Quand vos enjeux exigent une capacité cyber et résilience dédiée, Skillia mobilise Resillia.
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

        {/* 3 blocs */}
        <section className="section">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg border p-6 border-t-4 border-t-skillia-teal">
                <h3 className="text-lg font-semibold mb-4">Gouvernance & conformité</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Audits de posture</li>
                  <li>• GRC (Gouvernance, Risques, Conformité)</li>
                  <li>• IA Act</li>
                  <li>• ISO 27001</li>
                  <li>• DORA</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg border p-6 border-t-4 border-t-skillia-teal">
                <h3 className="text-lg font-semibold mb-4">Protection & détection</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SOC augmenté</li>
                  <li>• SIEM</li>
                  <li>• Pentest</li>
                  <li>• Threat intelligence</li>
                  <li>• Réponse aux incidents</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg border p-6 border-t-4 border-t-skillia-teal">
                <h3 className="text-lg font-semibold mb-4">Continuité & résilience</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PCA / PRA</li>
                  <li>• Tests de crise</li>
                  <li>• Tests de résistance</li>
                  <li>• Plan de reprise</li>
                  <li>• Exercices de simulation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-8">Cas clients</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <CaseStudyCard sector="Finance" challenge="Conformité DORA" solution="Audit, plan de remédiation, gouvernance sécurité." result="Conformité en 6 mois" />
              <CaseStudyCard sector="Industrie" challenge="Posture cyber renforcée" solution="Audit, politique de sécurité, pentest sur l'ensemble du SI." result="60 % de vulnérabilités critiques en moins" />
              <CaseStudyCard sector="Santé" challenge="PCA/PRA et gestion de crise" solution="Plan de continuité, tests de résistance et exercices." result="Temps de reprise divisé par 3" />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                <Link to="/cyber-resilience" className="text-skillia-teal hover:underline inline-flex items-center gap-1">
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" /> Retour à l'expertise Cyber & résilience
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Renforcez votre résilience</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Un premier échange pour évaluer votre posture et définir les priorités.</p>
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

export default ResilliaPage;
