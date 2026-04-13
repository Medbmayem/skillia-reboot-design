import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCases } from '@/data/useCases';

const UseCaseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const useCase = useCases.find(uc => uc.slug === slug);

  if (!useCase) return <Navigate to="/use-cases" replace />;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.2em] uppercase font-sans text-muted-foreground/50 mb-6">
                <Link to="/" className="hover:text-muted-foreground">Skillia</Link>
                {' / '}
                <Link to="/use-cases" className="hover:text-muted-foreground">Cas d&apos;usage</Link>
                {' / '}
                {useCase.expertise}
              </p>
              <h1 className="mb-8">{useCase.title}</h1>
              <p className="editorial-body">{useCase.summary}</p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Enjeu</p>
              <p className="font-serif text-xl md:text-2xl leading-[1.4]">{useCase.enjeu}</p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Ce que nous faisons</p>
              <ul className="space-y-4">
                {useCase.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xs font-sans text-muted-foreground/40 mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-base font-sans text-foreground/80">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Résultat attendu</p>
              <p className="font-serif text-xl md:text-2xl leading-[1.4]">{useCase.resultat}</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="text-sm font-sans text-muted-foreground mb-4">Expertise associée</p>
              <Link to={useCase.expertiseLink} className="editorial-link" onClick={() => window.scrollTo(0, 0)}>
                {useCase.expertise}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Un enjeu similaire ?<br /><span className="italic font-normal">Parlons-en.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre RDV</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCaseDetailPage;
