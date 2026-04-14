import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles } from '@/data/articles';
import { useCases } from '@/data/useCases';

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) return <Navigate to="/ressources" replace />;

  const relatedUCs = article.relatedUseCases
    ? useCases.filter(uc => article.relatedUseCases!.includes(uc.slug))
    : [];

  const relatedArticles = articles.filter(a => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero — cinematic */}
        <section className="relative min-h-[65vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Analyse et réflexion — contenu éditorial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.15em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link>
              {' / '}
              <Link to="/ressources" className="hover:text-background/70">Ressources</Link>
              {' / '}
              <span className="text-background/40">{article.category} · {article.type}</span>
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">{article.title}</h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-body">{article.chapeau}</p>
            </div>
          </div>
        </section>

        {article.sections.map((section, i) => (
          <section key={i} className={`py-32 md:py-44 ${i % 2 === 0 ? 'bg-card' : ''}`}>
            <div className="container">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl leading-[1.2] mb-8">{section.title}</h2>
                <p className="text-base font-sans text-muted-foreground leading-[1.8]">{section.text}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="font-serif text-xl md:text-2xl italic leading-[1.4]">{article.conclusion}</p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Expertise associée</p>
              <Link to={article.relatedExpertiseLink} className="editorial-link mb-12 inline-block" onClick={() => window.scrollTo(0, 0)}>
                {article.relatedExpertise}
              </Link>

              {relatedUCs.length > 0 && (
                <div className="mt-12">
                  <p className="editorial-label mb-6">Cas d&apos;usage liés</p>
                  {relatedUCs.map(uc => (
                    <Link
                      key={uc.slug}
                      to={`/use-cases/${uc.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="block py-4 border-b border-border/30 text-foreground/80 hover:text-foreground transition-colors"
                    >
                      <span className="text-sm font-sans">{uc.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className="py-32 md:py-44 bg-card">
            <div className="container">
              <div className="max-w-3xl">
                <p className="editorial-label mb-8">Articles liés</p>
                {relatedArticles.map(a => (
                  <Link
                    key={a.slug}
                    to={`/ressources/${a.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="block py-6 border-b border-border/30 group"
                  >
                    <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-2">{a.category} · {a.type}</p>
                    <p className="text-lg font-serif group-hover:text-muted-foreground transition-colors">{a.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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

export default ArticleDetailPage;
