
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Brain, BarChart3, Lock, Database, Users, GraduationCap, BookOpen, Award, Mail, Phone, Globe } from 'lucide-react';

const PlaquettePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Print Button - Hidden when printing */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button onClick={handlePrint} className="bg-[#403AF2] hover:bg-[#403AF2]/90">
          Imprimer / PDF
        </Button>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-[#403AF2] to-[#FA2A88] text-white py-16 print:py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="bg-white rounded-lg p-3 inline-block mb-4">
                <img 
                  src="/lovable-uploads/71f18a5e-02ac-4a09-8b12-6f093d2b9c4c.png" 
                  alt="Skillia Logo" 
                  className="h-12"
                />
              </div>
              <h1 className="text-4xl font-bold mb-2">Smart Tech. Real Impact.</h1>
              <p className="text-xl">Expert en intelligence artificielle et cybersécurité</p>
            </div>
            <div className="text-right">
              <p className="flex items-center mb-2"><Mail className="mr-2" size={16} /> contact@skillia.fr</p>
              <p className="flex items-center mb-2"><Phone className="mr-2" size={16} /> +33 1 23 45 67 89</p>
              <p className="flex items-center"><Globe className="mr-2" size={16} /> www.skillia.fr</p>
            </div>
          </div>
        </div>
      </header>

      {/* White Band - Full Width */}
      <div className="w-full bg-white py-8 print:py-6"></div>

      {/* Vision Section */}
      <section className="py-12 bg-[#F6F6F6] print:py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#403AF2] mb-6 text-center">Notre Vision</h2>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg text-gray-800">
              Chez Skillia, nous croyons que la transformation des entreprises par l'IA et la Data est une évolution inévitable et fondamentale.
            </p>
            <p className="text-lg text-gray-800">
              Ces technologies redéfinissent les règles du jeu, transformant non seulement les outils, mais aussi les modèles économiques, les décisions stratégiques, et la manière de créer de la valeur.
            </p>
            <p className="text-lg text-gray-800 font-semibold">
              Adopter l'IA et la Data n'est plus une option : c'est le moteur qui façonne l'avenir des entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 print:py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#403AF2] mb-8 text-center">Nos Services</h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {/* Business Transformation */}
            <Card className="border-t-4 border-t-[#403AF2]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="w-8 h-8 text-[#403AF2]" />
                  <CardTitle className="text-xl text-[#403AF2]">Business Transformation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stratégies d'entreprise basées sur l'IA et la Data</li>
                  <li>• Modèles prédictifs et prescriptifs</li>
                  <li>• Automatisation des workflows</li>
                  <li>• Gouvernance des données augmentée par l'IA</li>
                  <li>• Customer Intelligence</li>
                </ul>
              </CardContent>
            </Card>

            {/* Secure Ecosystems */}
            <Card className="border-t-4 border-t-[#FA2A88]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-[#FA2A88]" />
                  <CardTitle className="text-xl text-[#403AF2]">Secure Ecosystems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Solutions avancées de cybersécurité</li>
                  <li>• SOC & SIEM augmentés par l'IA</li>
                  <li>• Conformité réglementaire (AI Act, GDPR)</li>
                  <li>• Gestion des risques et résilience</li>
                  <li>• Gouvernance éthique des données</li>
                </ul>
              </CardContent>
            </Card>

            {/* Technology Foundations */}
            <Card className="border-t-4 border-t-[#403AF2]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-8 h-8 text-[#403AF2]" />
                  <CardTitle className="text-xl text-[#403AF2]">Technology Foundations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Architecture cloud et edge computing</li>
                  <li>• Intégration de systèmes intelligents</li>
                  <li>• Infrastructures sécurisées</li>
                  <li>• Solutions de monitoring avancées</li>
                  <li>• Support technique expert</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skillia Learning Hub */}
      <section className="py-12 bg-[#F6F6F6] print:py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#403AF2] mb-8 text-center">Skillia Learning Hub</h2>
          <p className="text-xl text-center mb-8 text-gray-800">
            Des formations pratiques pour démocratiser l'IA et la cybersécurité
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#403AF2]">
              <GraduationCap className="w-10 h-10 text-[#403AF2] mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Intelligence Artificielle</h3>
              <p className="text-sm text-gray-600">Formations pratiques pour métiers non-techniques</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FA2A88]">
              <BookOpen className="w-10 h-10 text-[#FA2A88] mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Automatisation</h3>
              <p className="text-sm text-gray-600">Outils No-Code et processus digitaux</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#403AF2]">
              <Award className="w-10 h-10 text-[#403AF2] mb-3" />
              <h3 className="font-bold text-gray-800 mb-3">Cybersécurité</h3>
              <p className="text-sm text-gray-600">Sensibilisation et opérationnel</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FA2A88]">
              <Users className="w-10 h-10 text-[#FA2A88] mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Sourcing Formateurs</h3>
              <p className="text-sm text-gray-600">Réseau d'experts certifiés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-12 print:py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#403AF2] mb-8 text-center">Nos Valeurs</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#403AF2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation Responsable</h3>
              <p className="text-gray-600">Nous développons des solutions d'IA éthiques et durables qui respectent les valeurs humaines.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FA2A88] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence Collaborative</h3>
              <p className="text-gray-600">Nous travaillons en partenariat étroit avec nos clients pour garantir leur succès.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#403AF2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Éthique & Confiance</h3>
              <p className="text-gray-600">La sécurité et la confidentialité sont au cœur de toutes nos solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-[#2F2F9B] text-white py-8 print:py-6">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="flex items-center mb-2"><Mail className="mr-2" size={16} /> contact@skillia.fr</p>
              <p className="flex items-center mb-2"><Phone className="mr-2" size={16} /> +33 1 23 45 67 89</p>
              <p className="flex items-center"><Globe className="mr-2" size={16} /> www.skillia.fr</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-1">
                <li>Business Transformation</li>
                <li>Secure Ecosystems</li>
                <li>Technology Foundations</li>
                <li>Formations & Consulting</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Pourquoi Skillia ?</h3>
              <ul className="space-y-1">
                <li>✓ Expertise reconnue en IA & Cybersécurité</li>
                <li>✓ Approche éthique et responsable</li>
                <li>✓ Solutions sur mesure</li>
                <li>✓ Accompagnement complet</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p>&copy; 2024 Skillia. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlaquettePage;
