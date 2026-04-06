
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CaseStudyCard from '@/components/shared/CaseStudyCard';

const TechPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container">
          <PageBreadcrumb items={[
            { label: 'Déploiement & adoption', href: '/deploiement-adoption' },
            { label: 'Skillia Tech' }
          ]} />
        </div>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 rounded-full bg-skillia-purple" />
                <span className="text-sm font-semibold tracking-wider uppercase text-skillia-purple">Skillia Tech</span>
              </div>
              <h1 className="mb-6">L'IA que vous commandez. Les résultats que vous attendiez.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Une fois la stratégie posée, nous construisons les solutions — nativement sécurisées et conçues pour être adoptées.
              </p>
              <Button asChild size="lg" className="bg-skillia-navy hover:bg-skillia-navy/90 text-white">
                <Link to="/contact">Prendre RDV</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 4 familles de solutions */}
        <section className="section">
          <div className="container">
            <h2 className="mb-10">Nos solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Assistants métier', desc: 'Des assistants IA conçus pour des tâches métier spécifiques : analyse, rédaction, support client, aide à la décision.' },
                { title: 'Agents IA', desc: 'Des agents autonomes capables d\'exécuter des workflows complexes, de collecter et traiter des données à grande échelle.' },
                { title: 'Plateformes data & IA', desc: 'Architecture et déploiement de plateformes data robustes pour centraliser, traiter et exploiter vos données.' },
                { title: 'Intégration IA dans le SI existant', desc: 'Connexion de capacités IA à vos outils métier existants sans rupture, avec sécurité intégrée.' },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-lg border p-6 border-l-4 border-l-skillia-purple">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-6">Stack & technologies</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Nous travaillons avec les technologies les plus adaptées à chaque projet, sans dogme ni vendor lock-in.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'LangChain', 'OpenAI', 'Azure AI', 'AWS', 'GCP', 'PostgreSQL', 'Docker', 'Kubernetes', 'React', 'Node.js', 'FastAPI'].map(tech => (
                <span key={tech} className="px-3 py-1.5 text-sm bg-background rounded-full border">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-8">Réalisations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <CaseStudyCard sector="Industrie" challenge="Assistant IA de maintenance prédictive" solution="Agent IA intégré au SI pour anticiper les pannes sur les lignes de production." result="30 % de temps d'arrêt en moins" />
              <CaseStudyCard sector="Finance" challenge="Plateforme de détection de fraudes" solution="Pipeline data et modèles ML déployés en production avec monitoring continu." result="Détection en temps réel, 95 % de précision" />
              <CaseStudyCard sector="Services" challenge="Automatisation du support client" solution="Assistant IA multilingue avec escalade intelligente vers les agents humains." result="60 % de tickets résolus automatiquement" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Construisons votre solution IA</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">De la conception au déploiement, avec sécurité et adoption intégrées.</p>
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

export default TechPage;
