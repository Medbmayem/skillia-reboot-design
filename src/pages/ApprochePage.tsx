
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ApprochePage = () => {
  const steps = [
    { num: '01', title: 'Cadrer', desc: 'Comprendre vos enjeux, évaluer votre maturité, prioriser les initiatives à fort impact.', image: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?auto=format&fit=crop&w=1200&q=80' },
    { num: '02', title: 'Sécuriser', desc: 'Intégrer la sécurité et la conformité dès la conception, pas en fin de projet.', image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1200&q=80' },
    { num: '03', title: 'Déployer', desc: 'Mettre en œuvre progressivement, piloter par les résultats et les KPIs.', image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80' },
    { num: '04', title: 'Faire adopter', desc: 'Former, accompagner et ancrer les nouvelles pratiques dans le quotidien des équipes.', image: 'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?auto=format&fit=crop&w=1200&q=80' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero — cinematic */}
        <section className="relative min-h-[65vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=2000&q=80" alt="Architecture géométrique — méthode et structure" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Notre approche
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
              Une méthode en quatre temps<br />
              <span className="italic font-normal">pour des transformations qui durent.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="max-w-2xl">
              <p className="editorial-body">
                Nous ne vendons pas de la technologie. Nous accompagnons des transformations — du cadrage stratégique à l&apos;adoption par les équipes.
              </p>
            </div>
          </div>
        </section>

        {steps.map((step, i) => (
          <section key={step.num}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`flex flex-col justify-center p-10 md:p-16 lg:p-24 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <span className="font-serif text-6xl font-light text-muted-foreground/15 block mb-4">{step.num}</span>
                <h2 className="text-3xl md:text-4xl mb-5">{step.title}</h2>
                <p className="text-base font-sans text-muted-foreground leading-[1.8]">{step.desc}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="py-32 md:py-44 section-navy">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8">Appliquons cette méthode<br /><span className="italic font-normal">à votre contexte.</span></h2>
              <Link to="/contact" className="text-sm font-sans text-background/50 border-b border-background/20 pb-0.5 hover:text-background hover:border-background/50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Prendre rendez-vous</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApprochePage;
