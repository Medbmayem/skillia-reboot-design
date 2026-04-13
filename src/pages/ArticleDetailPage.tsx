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
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-6">
                {article.category} · {article.type}
              </p>
              <h1 className="mb-8">{article.title}</h1>
              <p className="editorial-body">{article.chapeau}</p>
            </div>
          </div>
        </section>

        {article.sections.map((section, i) => (
          <section key={i} className="py-16 md:py-20">
            <div className="container">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl leading-[1.2] mb-6">{section.title}</h2>
                <p className="text-base font-sans text-muted-foreground leading-[1.8]">{section.text}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="font-serif text-xl md:text-2xl italic leading-[1.4]">{article.conclusion}</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-sm font-sans text-muted-foreground mb-4">Expertise associée</p>
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
          <section className="py-20 md:py-28 bg-card">
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

export default ArticleDetailPage;
