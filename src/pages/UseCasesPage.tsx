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
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Cas d&apos;usage</p>
              <h1 className="mb-10">Des cas d&apos;usage conçus pour répondre<br /><span className="italic font-normal">à des enjeux réels.</span></h1>
              <p className="editorial-body">
                Explorez quelques typologies d&apos;intervention au croisement de l&apos;IA, de la transformation, de la résilience et de l&apos;adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28 md:pb-40">
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

export default UseCasesPage;
