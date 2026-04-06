
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NousRejoindrePage = () => {
  const openings = [
    { title: 'Consultant(e) IA & Data — Senior', entity: 'Skillia', type: 'CDI', location: 'Paris / Remote' },
    { title: 'Consultant(e) Cybersécurité — GRC', entity: 'Resillia', type: 'CDI', location: 'Paris / Remote' },
    { title: 'Ingénieur(e) ML / IA', entity: 'Skillia Tech', type: 'CDI', location: 'Paris / Remote' },
    { title: 'Formateur(trice) IA & Transformation', entity: 'Skillia Academy', type: 'Freelance', location: 'France' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide uppercase text-skillia-amber mb-4">Nous rejoindre</p>
              <h1 className="mb-6">Rejoignez un collectif qui transforme les organisations.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chez Skillia, vous travaillez sur des missions à fort impact, au croisement de l'IA, de la cybersécurité et de la transformation digitale.
              </p>
            </div>
          </div>
        </section>

        {/* Promesse employeur */}
        <section className="py-16 bg-card border-y">
          <div className="container">
            <h2 className="mb-8">Pourquoi nous rejoindre</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Impact réel', desc: 'Des missions de transformation concrètes chez des clients de premier plan.' },
                { title: 'Complémentarité', desc: 'Conseil, cyber, build, formation — une variété de missions et de compétences.' },
                { title: 'Collectif exigeant', desc: 'Une équipe resserrée, senior, qui privilégie la qualité à la quantité.' },
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offres */}
        <section className="section">
          <div className="container">
            <h2 className="mb-8">Nos offres ouvertes</h2>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <div key={i} className="bg-card rounded-lg border p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>{job.entity}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/contact">Postuler</Link>
                  </Button>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Vous ne trouvez pas votre profil ? Envoyez-nous une candidature spontanée à{' '}
              <a href="mailto:contact@skillia.fr" className="text-foreground hover:underline">contact@skillia.fr</a>.
            </p>
          </div>
        </section>

        <section className="py-20 bg-skillia-navy text-white">
          <div className="container text-center">
            <h2 className="text-white mb-4">Rejoignez-nous</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Envoyez-nous votre candidature ou prenez contact pour en discuter.</p>
            <Button asChild size="lg" className="bg-skillia-amber hover:bg-skillia-amber/90 text-skillia-navy font-semibold">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NousRejoindrePage;
