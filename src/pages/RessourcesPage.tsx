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
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Ressources</p>
              <h1 className="mb-10">Analyses, guides<br /><span className="italic font-normal">et retours d&apos;expérience.</span></h1>
              <p className="editorial-body">
                Des contenus de fond pour éclairer vos décisions en matière d&apos;IA, de transformation digitale et de cybersécurité.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28 md:pb-40">
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

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-4">Cas d&apos;usage</p>
              <p className="text-sm font-sans text-muted-foreground mb-6 leading-[1.8]">Explorez nos typologies d&apos;intervention concrètes.</p>
              <Link to="/use-cases" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Voir les cas d&apos;usage</Link>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Besoin d&apos;un éclairage<br /><span className="italic font-normal">personnalisé ?</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre RDV</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RessourcesPage;
