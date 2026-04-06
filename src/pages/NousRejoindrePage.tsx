
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Nous rejoindre</p>
              <h1 className="mb-8">Rejoignez un collectif<br /><span className="italic font-normal">qui transforme les organisations.</span></h1>
              <p className="editorial-body">
                Chez Skillia, vous travaillez sur des missions à fort impact, au croisement de l&apos;IA, de la cybersécurité et de la transformation digitale.
              </p>
            </div>
          </div>
        </section>

        {/* Promesse */}
        <section className="pb-24">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-12 max-w-4xl">
              {[
                { title: 'Impact réel', desc: 'Des missions de transformation concrètes chez des clients de premier plan.' },
                { title: 'Complémentarité', desc: 'Conseil, cyber, build, formation — une variété de missions et de compétences.' },
                { title: 'Collectif exigeant', desc: 'Une équipe resserrée, senior, qui privilégie la qualité à la quantité.' },
              ].map(item => (
                <div key={item.title}>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offres */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <p className="editorial-label mb-12">Nos offres ouvertes</p>
            <div className="space-y-0 max-w-4xl">
              {openings.map((job, i) => (
                <div key={i} className={`py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 ${i > 0 ? 'border-t border-border/50' : ''}`}>
                  <div>
                    <h3 className="text-lg font-serif mb-1">{job.title}</h3>
                    <p className="text-xs font-sans text-muted-foreground/60">{job.entity} · {job.type} · {job.location}</p>
                  </div>
                  <Link to="/contact" className="editorial-link flex-shrink-0 self-start md:self-center" onClick={() => window.scrollTo(0, 0)}>
                    Postuler
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-sm font-sans text-muted-foreground mt-12 max-w-2xl">
              Vous ne trouvez pas votre profil ? Envoyez-nous une candidature spontanée à{' '}
              <a href="mailto:contact@skillia.fr" className="editorial-link text-sm">contact@skillia.fr</a>.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6">Rejoignez-nous.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Envoyez-nous votre candidature ou prenez contact pour en discuter.</p>
            <Link to="/contact" className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>
              Nous contacter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NousRejoindrePage;
