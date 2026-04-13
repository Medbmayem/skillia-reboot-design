
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AcademyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=2000&q=80" alt="Espace de formation premium" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / <Link to="/deploiement-adoption" className="hover:text-background/70">Déploiement & adoption</Link> / Skillia Academy
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              La transformation ne tient<br />
              <span className="italic font-normal">que si les équipes montent en compétence.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Des formations conçues par des praticiens du groupe, sur des cas issus du terrain. Pas de théorie déconnectée — des outils applicables dès le lendemain.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Nos univers</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  Dirigeants. Métiers.<br />
                  <span className="italic font-normal">Équipes projet.</span>
                </h2>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl mb-3">Dirigeants & CODIR</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Comprendre les enjeux stratégiques de l&apos;IA, de la data et de la cybersécurité pour prendre les bonnes décisions.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Métiers & managers</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">S&apos;approprier les outils et méthodes pour intégrer l&apos;IA et le digital dans le quotidien métier.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Équipes projet</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Monter en compétence sur les aspects techniques et opérationnels des projets de transformation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[45vh] md:h-[60vh]">
          <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=2000&q=80" alt="Couloir de bureau — lumière douce" className="w-full h-full object-cover" />
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-6">Formats</p>
              <p className="text-base font-sans text-muted-foreground leading-[1.8]">
                Présentiel · Distanciel · Intra-entreprise · Coaching individuel
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl italic leading-[1.4] mb-8">
                « Des formations concrètes et directement applicables. On sort avec des outils qu&apos;on peut utiliser dès le lendemain. »
              </p>
              <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground/50">Manager — Secteur services</p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Ce que Skillia Academy accompagne</p>
              <p className="editorial-body mb-12">
                Skillia Academy accompagne la montée en compétence des dirigeants, des managers et des équipes projet pour transformer les dispositifs déployés en pratiques réelles, comprises et maîtrisées.
              </p>
              <p className="editorial-label mb-8">Formats possibles</p>
              <ul className="space-y-5">
                {[
                  'Sensibilisation dirigeants',
                  'Ateliers métiers',
                  'Parcours équipes projet',
                  'Accompagnement à l\'adoption',
                  'Culture cyber et résilience',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xs font-sans text-muted-foreground/40 mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-sans text-foreground/80 leading-[1.8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Formez vos<br /><span className="italic font-normal">équipes.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Demander une session</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademyPage;
