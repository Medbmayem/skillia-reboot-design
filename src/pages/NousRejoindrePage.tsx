
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const NousRejoindrePage = () => {
  const openings = [
    { title: 'Consultant(e) IA & Data — Senior', meta: 'Skillia · CDI · Paris / Remote' },
    { title: 'Consultant(e) Cybersécurité — GRC', meta: 'Resillia · CDI · Paris / Remote' },
    { title: 'Ingénieur(e) ML / IA', meta: 'Skillia Tech · CDI · Paris / Remote' },
    { title: 'Formateur(trice) IA & Transformation', meta: 'Skillia Academy · Freelance · France' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero — cinematic like homepage */}
        <section className="relative min-h-[65vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=2000&q=80" alt="Fenêtre et lumière — perspective et ouverture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Nous rejoindre
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Rejoignez un collectif<br />
              <span className="italic font-normal">qui transforme les organisations.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Chez Skillia, vous travaillez sur des missions à fort impact, au croisement de l&apos;IA, de la cybersécurité et de la transformation digitale.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-32 md:pb-44">
          <div className="container">
            <p className="editorial-label mb-12">Offres ouvertes</p>
            <div className="max-w-4xl">
              {openings.map((job, i) => (
                <div key={i} className={`py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 ${i > 0 ? 'border-t border-border/40' : ''}`}>
                  <div>
                    <h3 className="text-xl mb-1">{job.title}</h3>
                    <p className="text-xs font-sans text-muted-foreground/60">{job.meta}</p>
                  </div>
                  <Link to="/contact" className="editorial-link flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>Postuler</Link>
                </div>
              ))}
            </div>
            <p className="text-sm font-sans text-muted-foreground mt-12 max-w-2xl">
              Candidature spontanée : <a href="mailto:contact@skillia.fr" className="editorial-link text-sm">contact@skillia.fr</a>
            </p>
          </div>
        </section>

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Rejoignez-<br /><span className="italic font-normal">nous.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Nous contacter</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NousRejoindrePage;
