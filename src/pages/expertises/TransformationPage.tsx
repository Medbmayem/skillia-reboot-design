
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/skillia-services-travail.jpg';

const TransformationPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Échange professionnel — transformation et accompagnement" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
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

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                La transformation digitale ne se résume pas à déployer de nouveaux outils. Elle implique de repenser les processus, d&apos;accompagner le changement et de s&apos;assurer que les équipes s&apos;approprient les nouvelles pratiques.
              </p>
            </div>
          </div>
        </section>


        <section className="py-32 md:py-44">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Ce que nous faisons</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  Du diagnostic<br />
                  <span className="italic font-normal">à l&apos;adoption durable.</span>
                </h2>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl mb-3">Diagnostic de maturité digitale</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Évaluation de votre organisation, vos processus et votre capacité à se transformer.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Refonte de processus</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Simplification et digitalisation des processus métier pour plus d&apos;efficacité.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Conduite du changement</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Accompagnement des équipes dans l&apos;appropriation des nouvelles pratiques.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Accompagnement CODIR</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Alignement stratégique et pilotage de la transformation au niveau direction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Résultats</p>
              <div className="space-y-10">
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Transformation digitale et adoption — <span className="font-sans text-base text-muted-foreground">Services, taux d&apos;adoption supérieur à 80 % en 4 mois.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Programme de transformation 12 mois — <span className="font-sans text-base text-muted-foreground">Industrie, 30 % de gain de productivité sur les processus cibles.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Problèmes traités</p>
              <ul className="space-y-5">
                {[
                  'Outils déployés sans adoption réelle',
                  'Processus encore trop manuels ou fragmentés',
                  'Gouvernance floue',
                  'Résistance au changement',
                  'Manque de lisibilité sur la trajectoire',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xs font-sans text-muted-foreground/40 mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-sans text-foreground/80 leading-[1.8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-label mb-6">Ressources liées</p>
              <div className="space-y-4">
                <Link to="/ressources/erreurs-transformation-digitale" className="editorial-link block" onClick={() => window.scrollTo(0, 0)}>Les 3 erreurs qui font échouer la transformation digitale</Link>
                <Link to="/use-cases/programme-transformation-12-mois" className="editorial-link block" onClick={() => window.scrollTo(0, 0)}>Structurer un programme de transformation sur 12 mois</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <h3 className="text-2xl mb-4">Besoin de former vos équipes ?</h3>
              <p className="text-sm font-sans text-muted-foreground mb-6 leading-[1.8]">Skillia Academy propose des formations conçues par des praticiens, sur des cas issus du terrain.</p>
              <Link to="/academy" className="editorial-link" onClick={() => window.scrollTo(0, 0)}>Découvrir Skillia Academy</Link>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Engageons la<br /><span className="italic font-normal">transformation.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre rendez-vous</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TransformationPage;
