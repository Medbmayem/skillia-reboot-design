
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AcademyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container">
          <PageBreadcrumb items={[
            { label: 'Déploiement & adoption', href: '/deploiement-adoption' },
            { label: 'Skillia Academy' }
          ]} />
        </div>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 rounded-full bg-skillia-amber" />
                <span className="text-sm font-semibold tracking-wider uppercase text-skillia-amber-dark">Skillia Academy</span>
              </div>
              <h1 className="mb-6">Une transformation ne tient que si les équipes montent en compétence.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Des formations conçues par des praticiens du groupe, sur des cas issus du terrain.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-skillia-navy hover:bg-skillia-navy/90 text-white">
                  <Link to="/contact">Demander une session</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3 univers */}
        <section className="section">
          <div className="container">
            <h2 className="mb-10">Nos univers de formation</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg border p-6 border-t-4 border-t-skillia-amber">
                <h3 className="text-lg font-semibold mb-3">Dirigeants & CODIR</h3>
                <p className="text-sm text-muted-foreground mb-4">Comprendre les enjeux stratégiques de l'IA, de la data et de la cybersécurité pour prendre les bonnes décisions.</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Vision stratégique IA & Data</li>
                  <li>• Enjeux cyber pour dirigeants</li>
                  <li>• Gouvernance de la transformation</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg border p-6 border-t-4 border-t-skillia-amber">
                <h3 className="text-lg font-semibold mb-3">Métiers & managers</h3>
                <p className="text-sm text-muted-foreground mb-4">S'approprier les outils et méthodes pour intégrer l'IA et le digital dans le quotidien métier.</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• IA appliquée aux métiers</li>
                  <li>• Automatisation & No-Code</li>
                  <li>• Conduite du changement</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg border p-6 border-t-4 border-t-skillia-amber">
                <h3 className="text-lg font-semibold mb-3">Équipes projet</h3>
                <p className="text-sm text-muted-foreground mb-4">Monter en compétence sur les aspects techniques et opérationnels des projets de transformation.</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Data engineering & ML ops</li>
                  <li>• Cybersécurité opérationnelle</li>
                  <li>• Gestion de projet agile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-8">Formats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Présentiel', 'Distanciel', 'Intra-entreprise', 'Coaching individuel'].map(format => (
                <div key={format} className="bg-background rounded-lg border p-4 text-center">
                  <p className="text-sm font-medium">{format}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thématiques */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-8">Thématiques couvertes</h2>
            <div className="flex flex-wrap gap-3">
              {['Intelligence artificielle', 'Transformation digitale', 'Cybersécurité', 'Data & analytics', 'Automatisation', 'No-Code', 'Conduite du changement', 'Agilité'].map(theme => (
                <span key={theme} className="px-4 py-2 text-sm bg-card rounded-full border">{theme}</span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              La sensibilisation cybersécurité est conçue en collaboration avec <Link to="/resillia" className="text-skillia-teal hover:underline">Resillia</Link>.
            </p>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-8">Ce qu'en disent les participants</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              <div className="bg-background rounded-lg border p-6">
                <p className="text-sm italic text-muted-foreground mb-3">« Des formations concrètes et directement applicables. On sort avec des outils qu'on peut utiliser dès le lendemain. »</p>
                <p className="text-xs text-muted-foreground">— Manager, secteur services</p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <p className="text-sm italic text-muted-foreground mb-3">« L'approche praticienne fait toute la différence. Ce ne sont pas des formateurs théoriques, ce sont des gens du terrain. »</p>
                <p className="text-xs text-muted-foreground">— Chef de projet, secteur industriel</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Formez vos équipes</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Discutons de vos enjeux de formation. Nous concevons avec vous un parcours adapté.</p>
            <Button asChild size="lg" className="bg-skillia-amber hover:bg-skillia-amber/90 text-skillia-navy font-semibold">
              <Link to="/contact">Demander une session</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademyPage;
