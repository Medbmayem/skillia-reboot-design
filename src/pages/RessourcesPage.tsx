
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const resources = [
  { title: 'Comment cadrer sa stratégie IA en 5 étapes', category: 'IA & Data', type: 'Article' },
  { title: 'Les 3 erreurs qui font échouer la transformation digitale', category: 'Transformation', type: 'Article' },
  { title: 'Guide : préparer son organisation à DORA', category: 'Cyber & résilience', type: 'Guide' },
  { title: 'Mesurer l\'adoption IA : quels KPIs suivre ?', category: 'Adoption', type: 'Article' },
  { title: 'Étude de cas : IA industrielle sur 3 BU', category: 'IA & Data', type: 'Étude de cas' },
  { title: 'Cybersécurité pour dirigeants : l\'essentiel', category: 'Cyber & résilience', type: 'Guide' },
];

const RessourcesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="editorial-label mb-6">Ressources</p>
              <h1 className="mb-8">Analyses, guides<br /><span className="italic font-normal">et retours d&apos;expérience.</span></h1>
              <p className="editorial-body">
                Des contenus de fond pour éclairer vos décisions en matière d&apos;IA, de transformation digitale et de cybersécurité.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">
            <div className="space-y-0 max-w-4xl">
              {resources.map((res, i) => (
                <article key={i} className={`py-8 ${i > 0 ? 'border-t border-border/50' : ''} cursor-pointer group`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-2">{res.category} · {res.type}</p>
                      <h3 className="text-xl group-hover:text-muted-foreground transition-colors">{res.title}</h3>
                    </div>
                    <span className="editorial-link flex-shrink-0 self-start md:self-center">Lire</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-background mb-6">Besoin d&apos;un éclairage personnalisé ?</h2>
            <p className="text-sm font-sans text-background/50 mb-10 max-w-md mx-auto">Nos experts sont disponibles pour approfondir un sujet avec vous.</p>
            <Link to="/contact" className="inline-block text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-colors" onClick={() => window.scrollTo(0, 0)}>
              Prendre RDV
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RessourcesPage;
