
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
              <h1 className="mb-10">Analyses, guides<br /><span className="italic font-normal">et retours d&apos;expérience.</span></h1>
              <p className="editorial-body">
                Des contenus de fond pour éclairer vos décisions en matière d&apos;IA, de transformation digitale et de cybersécurité.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28 md:pb-40">
          <div className="container">
            <div className="max-w-4xl">
              {resources.map((res, i) => (
                <article key={i} className={`py-10 ${i > 0 ? 'border-t border-border/40' : ''} cursor-pointer group`}>
                  <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-3">{res.category} · {res.type}</p>
                  <h3 className="text-xl md:text-2xl group-hover:text-muted-foreground transition-colors">{res.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

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

export default RessourcesPage;
