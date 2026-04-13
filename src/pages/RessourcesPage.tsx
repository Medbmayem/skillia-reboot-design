import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { articles } from '@/data/articles';

const RessourcesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[65vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80" alt="Discussion professionnelle — réflexion" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Ressources
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              Analyses, guides<br />
              <span className="italic font-normal">et retours d&apos;expérience.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Des contenus de fond pour éclairer vos décisions en matière d&apos;IA, de transformation digitale et de cybersécurité.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-32 md:pb-44">
          <div className="container">
            <div className="max-w-4xl">
              {articles.map((article, i) => (
                <Link
                  key={article.slug}
                  to={`/ressources/${article.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`block py-10 ${i > 0 ? 'border-t border-border/40' : ''} group`}
                >
                  <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-3">{article.category} · {article.type}</p>
                  <h3 className="text-xl md:text-2xl group-hover:text-muted-foreground transition-colors mb-3">{article.title}</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8] max-w-2xl">{article.chapeau}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-4">Cas d&apos;usage</p>
              <p className="text-sm font-sans text-muted-foreground mb-6 leading-[1.8]">Explorez nos typologies d&apos;intervention concrètes.</p>
              <Link to="/use-cases" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Voir les cas d&apos;usage</Link>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Besoin d&apos;un éclairage<br /><span className="italic font-normal">personnalisé ?</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre rendez-vous</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RessourcesPage;
