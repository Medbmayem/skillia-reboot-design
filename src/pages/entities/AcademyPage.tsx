
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AcademyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80" alt="Formation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <nav className="text-xs font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/80">Skillia</Link>
              <span className="mx-2">/</span>
              <Link to="/deploiement-adoption" className="hover:text-background/80">Déploiement & adoption</Link>
              <span className="mx-2">/</span>
              <span className="text-background/70">Skillia Academy</span>
            </nav>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              Une transformation ne tient<br />
              <span className="italic font-normal">que si les équipes montent en compétence.</span>
            </h1>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Des formations conçues par des praticiens du groupe, sur des cas issus du terrain. Pas de théorie déconnectée — des outils applicables dès le lendemain.
              </p>
            </div>
          </div>
        </section>

        {/* 3 univers */}
        <section className="pb-24">
          <div className="container">
            <div className="max-w-4xl space-y-16">
              {[
                {
                  title: 'Dirigeants & CODIR',
                  desc: 'Comprendre les enjeux stratégiques de l\'IA, de la data et de la cybersécurité pour prendre les bonnes décisions.',
                  items: ['Vision stratégique IA & Data', 'Enjeux cyber pour dirigeants', 'Gouvernance de la transformation'],
                },
                {
                  title: 'Métiers & managers',
                  desc: 'S\'approprier les outils et méthodes pour intégrer l\'IA et le digital dans le quotidien métier.',
                  items: ['IA appliquée aux métiers', 'Automatisation & No-Code', 'Conduite du changement'],
                },
                {
                  title: 'Équipes projet',
                  desc: 'Monter en compétence sur les aspects techniques et opérationnels des projets de transformation.',
                  items: ['Data engineering & ML ops', 'Cybersécurité opérationnelle', 'Gestion de projet agile'],
                },
              ].map((univers, i) => (
                <div key={univers.title}>
                  <h3 className="text-2xl mb-3">{univers.title}</h3>
                  <p className="text-base font-sans text-muted-foreground mb-6">{univers.desc}</p>
                  <ul className="space-y-2">
                    {univers.items.map(item => (
                      <li key={item} className="text-sm font-sans text-muted-foreground flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-skillia-amber flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {i < 2 && <div className="h-px bg-border/50 mt-16" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image break */}
        <section className="h-[40vh] md:h-[50vh]">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80" alt="Salle de formation" className="w-full h-full object-cover" />
        </section>

        {/* Formats & thématiques */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-6">Formats</p>
              <p className="text-sm font-sans text-muted-foreground">
                Présentiel · Distanciel · Intra-entreprise · Coaching individuel
              </p>
            </div>
            <div className="h-px bg-border/50 my-12 max-w-2xl" />
            <div className="max-w-2xl">
              <p className="editorial-label mb-6">Thématiques</p>
              <p className="text-sm font-sans text-muted-foreground">
                Intelligence artificielle · Transformation digitale · Cybersécurité · Data & analytics · Automatisation · No-Code · Conduite du changement · Agilité
              </p>
              <p className="text-sm font-sans text-muted-foreground/60 mt-4">
                La sensibilisation cybersécurité est conçue en collaboration avec <Link to="/resillia" className="editorial-link text-sm" onClick={() => window.scrollTo(0, 0)}>Resillia</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container">
            <p className="editorial-label mb-12">Ce qu&apos;en disent les participants</p>
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
              <div>
                <p className="font-serif text-lg italic leading-[1.6] mb-4">« Des formations concrètes et directement applicables. On sort avec des outils qu&apos;on peut utiliser dès le lendemain. »</p>
                <p className="text-xs font-sans tracking-wide text-muted-foreground">Manager — Secteur services</p>
              </div>
              <div>
                <p className="font-serif text-lg italic leading-[1.6] mb-4">« L&apos;approche praticienne fait toute la différence. Ce ne sont pas des formateurs théoriques, ce sont des gens du terrain. »</p>
                <p className="text-xs font-sans tracking-wide text-muted-foreground">Chef de projet — Secteur industriel</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6">Formez vos équipes.</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Discutons de vos enjeux de formation. Nous concevons avec vous un parcours adapté.</p>
            <Link to="/contact" className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>
              Demander une session
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademyPage;
