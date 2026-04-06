
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CollectifPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide uppercase text-skillia-amber mb-4">Collectif</p>
              <h1 className="mb-6">Un collectif d'experts, une vision commune.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skillia réunit des praticiens expérimentés en IA, transformation digitale, cybersécurité et formation. Chaque mission mobilise les bonnes compétences au bon moment.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-10">Notre couverture d'expertise</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Conseil', desc: 'Stratégie IA, data, transformation digitale, gouvernance.', color: 'border-t-skillia-navy' },
                { title: 'Cyber', desc: 'Audit, conformité, SOC, résilience, gestion de crise.', color: 'border-t-skillia-teal' },
                { title: 'Build', desc: 'Solutions IA sur mesure, intégration, plateformes data.', color: 'border-t-skillia-purple' },
                { title: 'Formation', desc: 'Montée en compétences, adoption, transfert de savoir.', color: 'border-t-skillia-amber' },
              ].map((item, i) => (
                <div key={i} className={`bg-background rounded-lg border border-t-4 ${item.color} p-6`}>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="mb-8">La chaîne complète</h2>
            <div className="flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto">
              {['Conseil', 'Cyber', 'Build', 'Formation'].map((step, i) => (
                <React.Fragment key={step}>
                  <div className="bg-card rounded-lg border px-6 py-4 text-center flex-1 w-full">
                    <p className="text-sm font-semibold">{step}</p>
                  </div>
                  {i < 3 && <span className="text-muted-foreground text-xl hidden md:block">→</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
              De la stratégie au déploiement, en passant par la sécurisation et la formation : une couverture complète sans rupture.
            </p>
          </div>
        </section>

        {/* Placeholder pour les bios */}
        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-8">L'équipe fondatrice</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              <div className="bg-background rounded-lg border p-6">
                <div className="w-16 h-16 rounded-full bg-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-1">[Nom du fondateur]</h3>
                <p className="text-sm text-muted-foreground mb-3">[Titre / Rôle]</p>
                <p className="text-sm text-muted-foreground leading-relaxed">[Bio courte — parcours et expertise principale]</p>
              </div>
              <div className="bg-background rounded-lg border p-6">
                <div className="w-16 h-16 rounded-full bg-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-1">[Nom du co-fondateur]</h3>
                <p className="text-sm text-muted-foreground mb-3">[Titre / Rôle]</p>
                <p className="text-sm text-muted-foreground leading-relaxed">[Bio courte — parcours et expertise principale]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Travaillons ensemble</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Rencontrez notre équipe et discutons de votre projet.</p>
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

export default CollectifPage;
