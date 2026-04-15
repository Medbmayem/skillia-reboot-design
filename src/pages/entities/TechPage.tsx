
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/skillia-tech-conception.jpg';

const TechPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Supervision industrielle — précision et exécution" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / <Link to="/deploiement-adoption" className="hover:text-background/70">Déploiement & adoption</Link> / Skillia Tech
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              L&apos;IA que vous commandez.<br />
              <span className="italic font-normal">Les résultats que vous attendiez.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Une fois la stratégie posée, nous construisons les solutions — nativement sécurisées et conçues pour être adoptées par vos équipes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-label mb-8">Nos solutions</p>
                <h2 className="text-3xl md:text-4xl leading-[1.2]">
                  Quatre familles<br />
                  <span className="italic font-normal">de solutions IA.</span>
                </h2>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl mb-3">Assistants métier</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Des assistants IA conçus pour des tâches métier spécifiques : analyse, rédaction, support client, aide à la décision.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Agents IA</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Des agents autonomes capables d&apos;exécuter des workflows complexes et de traiter des données à grande échelle.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Plateformes data & IA</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Architecture et déploiement de plateformes data robustes pour centraliser et exploiter vos données.</p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Intégration IA dans le SI</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-[1.8]">Connexion de capacités IA à vos outils existants sans rupture, avec sécurité intégrée.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[45vh] md:h-[60vh]">
          <img src={heroImage} alt="Environnement technique — précision et rigueur" className="w-full h-full object-cover" loading="lazy" />
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-8">Réalisations</p>
              <div className="space-y-10">
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Assistant IA de maintenance prédictive — <span className="font-sans text-base text-muted-foreground">Industrie, 30 % de temps d&apos;arrêt en moins.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Plateforme de détection de fraudes — <span className="font-sans text-base text-muted-foreground">Finance, détection en temps réel, précision supérieure à 90 %.</span>
                </p>
                <p className="font-serif text-xl md:text-2xl leading-[1.4]">
                  Automatisation du support client — <span className="font-sans text-base text-muted-foreground">Services, majorité des tickets résolus automatiquement.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-44 bg-card">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Ce que Skillia Tech conçoit</p>
              <p className="editorial-body mb-12">
                Skillia Tech conçoit et déploie les solutions qui prolongent les cadrages menés avec Skillia. L&apos;ambition n&apos;est pas de produire un démonstrateur de plus, mais un outil utile, robuste et exploitable dans les conditions réelles de travail.
              </p>
              <p className="editorial-label mb-8">Exemples de solutions</p>
              <ul className="space-y-5">
                {[
                  'Assistants métier',
                  'Copilotes documentaires',
                  'Agents de recherche et qualification',
                  'Automatisation de traitements documentaires',
                  'Outils d\'assistance à l\'expertise',
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

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Construisons votre<br /><span className="italic font-normal">solution IA.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre rendez-vous</Link>
              <a href="https://skillia-tech.com" target="_blank" rel="noopener noreferrer" className="block mt-6 text-sm font-sans text-background/30 border-b border-background/10 pb-0.5 hover:text-background/60 hover:border-background/30 transition-colors w-fit">skillia-tech.com ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechPage;
