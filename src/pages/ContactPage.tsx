
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

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
    // TODO: Connect to form backend
    alert('Message envoyé (placeholder). Connectez un backend pour le traitement réel.');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-sm font-medium tracking-wide uppercase text-skillia-amber mb-4">Contact</p>
                <h1 className="mb-6">Parlons de votre projet.</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Que vous souhaitiez cadrer une stratégie IA, renforcer votre posture cyber, former vos équipes ou construire une solution, nous sommes là pour en discuter.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-skillia-amber mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:contact@skillia.fr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">contact@skillia.fr</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-skillia-amber mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Téléphone</p>
                      <p className="text-sm text-muted-foreground">[Numéro — placeholder]</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-skillia-amber mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Adresse</p>
                      <p className="text-sm text-muted-foreground">Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="bg-card rounded-lg border p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Nom complet</label>
                    <input type="text" required className="w-full px-4 py-2.5 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email professionnel</label>
                    <input type="email" required className="w-full px-4 py-2.5 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Entreprise</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Votre besoin</label>
                    <select className="w-full px-4 py-2.5 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2.5 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-skillia-navy hover:bg-skillia-navy/90 text-white">
                    Envoyer
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
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
