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
        {/* Hero — cinematic */}
        <section className="relative min-h-[65vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Environnement professionnel — cas d'usage" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link>
              {' / '}
              <Link to="/use-cases" className="hover:text-background/70">Cas d&apos;usage</Link>
              {' / '}
              <span className="text-background/40">{useCase.expertise}</span>
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">{useCase.title}</h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">{useCase.summary}</p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Enjeu</p>
              <p className="font-serif text-xl md:text-2xl leading-[1.4]">{useCase.enjeu}</p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Ce que nous faisons</p>
              <ul className="space-y-5">
                {useCase.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xs font-sans text-muted-foreground/40 mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-sans text-foreground/80 leading-[1.8]">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Résultat attendu</p>
              <p className="font-serif text-xl md:text-2xl leading-[1.4]">{useCase.resultat}</p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-6">Expertise associée</p>
              <Link to={useCase.expertiseLink} className="editorial-link" onClick={() => window.scrollTo(0, 0)}>
                {useCase.expertise}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Un enjeu similaire ?<br /><span className="italic font-normal">Parlons-en.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre rendez-vous</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCaseDetailPage;
