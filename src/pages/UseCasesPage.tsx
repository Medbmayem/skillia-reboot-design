import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useCases } from '@/data/useCases';

const UseCasesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero — cinematic like homepage */}
        <section className="relative min-h-[65vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80" alt="Équipe au travail — cas concrets et impact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Cas d&apos;usage
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              Des cas d&apos;usage conçus pour répondre<br />
              <span className="italic font-normal">à des enjeux réels.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Explorez quelques typologies d&apos;intervention au croisement de l&apos;IA, de la transformation, de la résilience et de l&apos;adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-32 md:pb-44">
          <div className="container">
            <div className="max-w-4xl">
              {useCases.map((uc, i) => (
                <Link
                  key={uc.slug}
                  to={`/use-cases/${uc.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`block py-10 ${i > 0 ? 'border-t border-border/40' : ''} group`}
                >
                  <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-3">{uc.expertise}</p>
                  <h3 className="text-xl md:text-2xl group-hover:text-muted-foreground transition-colors mb-3">{uc.title}</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8] max-w-2xl">{uc.summary}</p>
                </Link>
              ))}
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

export default UseCasesPage;
