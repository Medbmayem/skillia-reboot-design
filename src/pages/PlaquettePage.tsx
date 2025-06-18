import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Brain, BarChart3, Lock, Database, Users, GraduationCap, BookOpen, Award, Mail, Phone, Globe } from 'lucide-react';

const PlaquettePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* White Band with Logo - Top */}
      <div className="w-full bg-white py-4 print:py-2 flex justify-center">
        <img 
          src="/lovable-uploads/71f18a5e-02ac-4a09-8b12-6f093d2b9c4c.png" 
          alt="Skillia Logo" 
          className="h-12 print:h-10"
        />
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-[#403AF2] to-[#FA2A88] text-white py-8 print:py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl print:text-2xl font-bold mb-2">Smart Tech. Real Impact.</h1>
              <p className="text-lg print:text-base">Expert dans la transition vers un business intelligent et secure</p>
            </div>
            <div className="text-right text-sm print:text-xs">
              <p className="flex items-center mb-1"><Mail className="mr-2" size={14} /> contact@skillia.fr</p>
              <p className="flex items-center mb-1"><Phone className="mr-2" size={14} /> +33 1 23 45 67 89</p>
              <p className="flex items-center"><Globe className="mr-2" size={14} /> www.skillia.fr</p>
            </div>
          </div>
        </div>
      </header>

      {/* Vision Section */}
      <section className="py-6 print:py-3 bg-[#F6F6F6]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl print:text-xl font-bold text-[#403AF2] mb-4 text-center">Notre Vision</h2>
          <div className="max-w-6xl mx-auto text-center space-y-2">
            <p className="text-base print:text-sm text-gray-800">
              Chez Skillia, nous croyons que la transformation des entreprises par l'IA et la Data est une évolution inévitable et fondamentale.
            </p>
            <p className="text-base print:text-sm text-gray-800">
              Ces technologies redéfinissent les règles du jeu, transformant non seulement les outils, mais aussi les modèles économiques, les décisions stratégiques, et la manière de créer de la valeur.
            </p>
            <p className="text-base print:text-sm text-gray-800 font-semibold">
              Adopter l'IA et la Data n'est plus une option : c'est le moteur qui façonne l'avenir des entreprises.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Services Section */}
        <section className="py-6 print:py-3">
          <h2 className="text-2xl print:text-xl font-bold text-[#403AF2] mb-6 text-center">Nos Services</h2>
          
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            {/* Business Transformation */}
            <Card className="border-t-4 border-t-[#403AF2]">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-6 h-6 text-[#403AF2]" />
                  <CardTitle className="text-lg print:text-base text-[#403AF2]">Business Transformation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm print:text-xs text-gray-700">
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
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-[#FA2A88]" />
                  <CardTitle className="text-lg print:text-base text-[#403AF2]">Secure Ecosystems</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm print:text-xs text-gray-700">
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
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-6 h-6 text-[#403AF2]" />
                  <CardTitle className="text-lg print:text-base text-[#403AF2]">Technology Foundations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm print:text-xs text-gray-700">
                  <li>• Architecture cloud et edge computing</li>
                  <li>• Intégration de systèmes intelligents</li>
                  <li>• Infrastructures sécurisées</li>
                  <li>• Solutions de monitoring avancées</li>
                  <li>• Support technique expert</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skillia Learning Hub - Each item on separate line */}
        <section className="py-6 print:py-3 bg-[#F6F6F6] rounded-lg p-4 mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-[#403AF2] mb-4 text-center">Skillia Learning Hub</h2>
          <p className="text-lg print:text-base text-center mb-4 text-gray-800">
            Des formations pratiques pour démocratiser l'IA et la cybersécurité
          </p>
          
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-3 rounded-lg shadow-sm border-l-2 border-[#403AF2]">
              <GraduationCap className="w-6 h-6 text-[#403AF2] mb-2" />
              <h3 className="font-bold text-sm text-gray-800 mb-1">Intelligence Artificielle</h3>
              <p className="text-xs text-gray-600">Formations pratiques pour métiers non-techniques</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm border-l-2 border-[#FA2A88]">
              <BookOpen className="w-6 h-6 text-[#FA2A88] mb-2" />
              <h3 className="font-bold text-sm text-gray-800 mb-1">Automatisation</h3>
              <p className="text-xs text-gray-600">Outils No-Code et processus digitaux</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm border-l-2 border-[#403AF2]">
              <Award className="w-6 h-6 text-[#403AF2] mb-2" />
              <h3 className="font-bold text-sm text-gray-800 mb-1">Cybersécurité</h3>
              <p className="text-xs text-gray-600">Sensibilisation et opérationnel</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm border-l-2 border-[#FA2A88]">
              <Users className="w-6 h-6 text-[#FA2A88] mb-2" />
              <h3 className="font-bold text-sm text-gray-800 mb-1">Sourcing Formateurs</h3>
              <p className="text-xs text-gray-600">Réseau d'experts certifiés</p>
            </div>
          </div>
        </section>

        {/* Valeurs - Each item on separate line */}
        <section className="py-6 print:py-3 mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-[#403AF2] mb-6 text-center">Nos Valeurs</h2>
          
          <div className="grid gap-4 grid-cols-1">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#403AF2] rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg print:text-base font-bold text-gray-800 mb-1">Innovation Responsable</h3>
                <p className="text-sm print:text-xs text-gray-600">Nous développons des solutions d'IA éthiques et durables qui respectent les valeurs humaines.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#FA2A88] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg print:text-base font-bold text-gray-800 mb-1">Excellence Collaborative</h3>
                <p className="text-sm print:text-xs text-gray-600">Nous travaillons en partenariat étroit avec nos clients pour garantir leur succès.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#403AF2] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg print:text-base font-bold text-gray-800 mb-1">Éthique & Confiance</h3>
                <p className="text-sm print:text-xs text-gray-600">La sécurité et la confidentialité sont au cœur de toutes nos solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Footer */}
      <footer className="bg-[#2F2F9B] text-white py-4 print:py-2">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg print:text-base font-bold mb-2">Contact</h3>
              <p className="flex items-center mb-1 text-sm print:text-xs"><Mail className="mr-2" size={12} /> contact@skillia.fr</p>
              <p className="flex items-center mb-1 text-sm print:text-xs"><Phone className="mr-2" size={12} /> +33 1 23 45 67 89</p>
              <p className="flex items-center text-sm print:text-xs"><Globe className="mr-2" size={12} /> www.skillia.fr</p>
            </div>
            
            <div>
              <h3 className="text-lg print:text-base font-bold mb-2">Services</h3>
              <ul className="space-y-1 text-sm print:text-xs">
                <li>Business Transformation</li>
                <li>Secure Ecosystems</li>
                <li>Technology Foundations</li>
                <li>Formations & Consulting</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg print:text-base font-bold mb-2">Pourquoi Skillia ?</h3>
              <ul className="space-y-1 text-sm print:text-xs">
                <li>✓ Expertise reconnue en IA & Cybersécurité</li>
                <li>✓ Approche éthique et responsable</li>
                <li>✓ Solutions sur mesure</li>
                <li>✓ Accompagnement complet</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-3 border-t border-white/20">
            <p className="text-xs print:text-xs">&copy; 2024 Skillia. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlaquettePage;
