
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
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80" alt="Formation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
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

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Des formations conçues par des praticiens du groupe, sur des cas issus du terrain. Pas de théorie déconnectée — des outils applicables dès le lendemain.
              </p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
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

        <section className="h-[40vh] md:h-[55vh]">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80" alt="Formation" className="w-full h-full object-cover" />
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-6">Formats</p>
              <p className="text-base font-sans text-muted-foreground leading-[1.8]">
                Présentiel · Distanciel · Intra-entreprise · Coaching individuel
              </p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="font-serif text-2xl md:text-3xl italic leading-[1.4] mb-8">
                « Des formations concrètes et directement applicables. On sort avec des outils qu&apos;on peut utiliser dès le lendemain. »
              </p>
              <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground/60">Manager — Secteur services</p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Formez vos<br /><span className="italic font-normal">équipes.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Demander une session</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademyPage;
