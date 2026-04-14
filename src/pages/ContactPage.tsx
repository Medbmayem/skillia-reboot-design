import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/skillia-finance-governance.jpg';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    need: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message envoyé',
      description: 'Nous vous répondons sous 24h ouvrées.',
    });
    setFormData({ name: '', email: '', company: '', need: 'general', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative min-h-[55vh] flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Salle de gouvernance — échange et décision" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />
          </div>
          <div className="container relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-background/50 mb-6">
              <Link to="/" className="hover:text-background/70">Skillia</Link> / Contact
            </p>
            <h1 className="text-background text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-[1.1]">
              Parlons de<br />
              <span className="italic font-normal">votre projet.</span>
            </h1>
          </div>
        </section>

        <section className="py-32 md:py-44">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
              <div>
                <p className="editorial-body mb-12">
                  Que vous souhaitiez cadrer une stratégie IA, renforcer votre posture cyber, former vos équipes ou construire une solution, nous pouvons vous aider à structurer la suite.
                </p>

                <div className="space-y-8">
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
                <form onSubmit={handleSubmit} className="space-y-8">
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
                      className="text-sm font-sans font-medium tracking-wide text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
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
