import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    need: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message envoyé (placeholder). Connectez un backend pour le traitement réel.');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">
              <div>
                <p className="editorial-label mb-6">Contact</p>
                <h1 className="mb-8">Parlons de<br /><span className="italic font-normal">votre projet.</span></h1>
                <p className="editorial-body mb-12">
                  Que vous souhaitiez cadrer une stratégie IA, renforcer votre posture cyber, former vos équipes ou construire une solution, nous pouvons vous aider à structurer la suite.
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-2">Email</p>
                    <a href="mailto:contact@skillia.fr" className="text-sm font-sans text-foreground hover:text-muted-foreground transition-colors">contact@skillia.fr</a>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground/50 mb-2">Adresse</p>
                    <p className="text-sm font-sans text-muted-foreground">Paris, France</p>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase font-sans text-muted-foreground/60 mb-2">Nom complet</label>
                    <input type="text" required
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-sm font-sans focus:outline-none focus:border-foreground transition-colors"
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase font-sans text-muted-foreground/60 mb-2">Email professionnel</label>
                    <input type="email" required
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-sm font-sans focus:outline-none focus:border-foreground transition-colors"
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase font-sans text-muted-foreground/60 mb-2">Entreprise</label>
                    <input type="text"
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-sm font-sans focus:outline-none focus:border-foreground transition-colors"
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase font-sans text-muted-foreground/60 mb-2">Votre besoin</label>
                    <select
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-sm font-sans focus:outline-none focus:border-foreground transition-colors appearance-none"
                      value={formData.need} onChange={e => setFormData({...formData, need: e.target.value})}>
                      <option value="general">Besoin transversal</option>
                      <option value="ia-data">IA & Data</option>
                      <option value="transformation">Transformation digitale</option>
                      <option value="cyber">Cybersécurité & résilience</option>
                      <option value="build">Build / Solutions IA</option>
                      <option value="formation">Formation</option>
                      <option value="recrutement">Recrutement / Nous rejoindre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase font-sans text-muted-foreground/60 mb-2">Message</label>
                    <textarea rows={4}
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-sm font-sans focus:outline-none focus:border-foreground transition-colors resize-none"
                      value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <div className="pt-4">
                    <button type="submit"
                      className="text-sm font-sans font-medium tracking-wide px-7 py-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors">
                      Envoyer
                    </button>
                  </div>
                  <p className="text-xs font-sans text-muted-foreground/50">
                    Nous vous répondons sous 24h ouvrées.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
