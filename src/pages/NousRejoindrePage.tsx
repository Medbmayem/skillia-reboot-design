
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
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Nous rejoindre</p>
              <h1 className="mb-10">Rejoignez un collectif<br /><span className="italic font-normal">qui transforme les organisations.</span></h1>
              <p className="editorial-body">
                Chez Skillia, vous travaillez sur des missions à fort impact, au croisement de l&apos;IA, de la cybersécurité et de la transformation digitale.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28 md:pb-40">
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

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Rejoignez-<br /><span className="italic font-normal">nous.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Nous contacter</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NousRejoindrePage;
