
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TransformationPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" alt="Équipe" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Transformation digitale
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              La transformation échoue<br />
              <span className="italic font-normal">quand elle oublie les personnes.</span>
            </h1>
          </div>
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                La transformation digitale ne se résume pas à déployer de nouveaux outils. Elle implique de repenser les processus, d&apos;accompagner le changement et de s&apos;assurer que les équipes s&apos;approprient les nouvelles pratiques.
              </p>
            </div>
          </div>
        </section>

        <section className="h-[40vh] md:h-[50vh]">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80" alt="Transformation" className="w-full h-full object-cover" />
        </section>

        <section className="py-28 md:py-40">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Ce que nous faisons</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  Du diagnostic<br />
                  <span className="italic font-normal">à l&apos;adoption durable.</span>
                </h2>
              </div>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl mb-2">Diagnostic de maturité digitale</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Évaluation de votre organisation, vos processus et votre capacité à se transformer.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Refonte de processus</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Simplification et digitalisation des processus métier pour plus d&apos;efficacité.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Conduite du changement</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Accompagnement des équipes dans l&apos;appropriation des nouvelles pratiques.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Accompagnement CODIR</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Alignement stratégique et pilotage de la transformation au niveau direction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <div className="space-y-16">
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Transformation digitale et adoption</p>
                  <p className="text-sm font-sans text-muted-foreground">Services — Taux d&apos;adoption de 85 % en 4 mois.</p>
                </div>
                <div>
                  <p className="font-serif text-xl md:text-2xl leading-[1.3] mb-3">Programme de transformation 12 mois</p>
                  <p className="text-sm font-sans text-muted-foreground">Industrie — 30 % de gain de productivité sur les processus cibles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <h3 className="text-2xl mb-4">Besoin de former vos équipes ?</h3>
              <p className="text-sm font-sans text-muted-foreground mb-6 leading-[1.8]">Skillia Academy propose des formations conçues par des praticiens, sur des cas issus du terrain.</p>
              <Link to="/academy" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Skillia Academy</Link>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-background text-3xl md:text-4xl leading-[1.1] mb-8">Engageons la<br /><span className="italic font-normal">transformation.</span></h2>
              <Link to="/contact" className="inline-block text-[13px] font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre RDV</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TransformationPage;
