
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const categories = [
  { label: 'IA & Data', color: 'bg-skillia-navy-light text-skillia-navy' },
  { label: 'Transformation digitale', color: 'bg-skillia-purple-light text-skillia-purple' },
  { label: 'Cyber & résilience', color: 'bg-skillia-teal-light text-skillia-teal' },
  { label: 'Déploiement & adoption', color: 'bg-skillia-amber-light text-skillia-amber-dark' },
];

const resources = [
  { title: 'Comment cadrer sa stratégie IA en 5 étapes', category: 'IA & Data', type: 'Article', categoryColor: 'bg-skillia-navy-light text-skillia-navy' },
  { title: 'Les 3 erreurs qui font échouer la transformation digitale', category: 'Transformation digitale', type: 'Article', categoryColor: 'bg-skillia-purple-light text-skillia-purple' },
  { title: 'Guide : préparer son organisation à DORA', category: 'Cyber & résilience', type: 'Guide', categoryColor: 'bg-skillia-teal-light text-skillia-teal' },
  { title: 'Mesurer l\'adoption IA : quels KPIs suivre ?', category: 'Déploiement & adoption', type: 'Article', categoryColor: 'bg-skillia-amber-light text-skillia-amber-dark' },
  { title: 'Étude de cas : IA industrielle sur 3 BU', category: 'IA & Data', type: 'Étude de cas', categoryColor: 'bg-skillia-navy-light text-skillia-navy' },
  { title: 'Cybersécurité pour dirigeants : l\'essentiel en 10 points', category: 'Cyber & résilience', type: 'Guide', categoryColor: 'bg-skillia-teal-light text-skillia-teal' },
];

const RessourcesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide uppercase text-skillia-amber mb-4">Ressources</p>
              <h1 className="mb-6">Analyses, guides et retours d'expérience.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Des contenus de fond pour éclairer vos décisions en matière d'IA, de transformation digitale et de cybersécurité.
              </p>
            </div>
          </div>
        </section>

        {/* Filtres */}
        <section className="pb-8">
          <div className="container">
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-foreground text-background cursor-pointer">Tout</span>
              {categories.map(cat => (
                <span key={cat.label} className={`px-4 py-1.5 text-sm font-medium rounded-full cursor-pointer ${cat.color}`}>
                  {cat.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Grid de contenus */}
        <section className="pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((res, i) => (
                <article key={i} className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${res.categoryColor}`}>{res.category}</span>
                    <span className="text-xs text-muted-foreground">{res.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-skillia-purple transition-colors">{res.title}</h3>
                  <p className="text-sm text-muted-foreground">[Résumé de la ressource — placeholder à compléter]</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Besoin d'un éclairage personnalisé ?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Nos experts sont disponibles pour approfondir un sujet avec vous.</p>
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

export default RessourcesPage;
