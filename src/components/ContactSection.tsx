
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-skillia-gray">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-skillia-blue">
            Contactez-nous
          </h2>
          <p className="text-lg text-skillia-blue opacity-80">
            Discutons de vos besoins et de comment nous pouvons vous accompagner dans vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="animate-fade-in">
            <Card className="border-t-4 border-t-skillia-blue">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input id="firstname" placeholder="Prénom*" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Input id="name" placeholder="Nom*" className="w-full" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input id="email" type="email" placeholder="E-mail*" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex">
                        <div className="flex items-center px-3 bg-background border border-r-0 border-input rounded-l-md">
                          <Phone className="h-4 w-4 text-skillia-blue" />
                          <span className="ml-1">+</span>
                        </div>
                        <Input id="phone" placeholder="Mobile" className="w-full rounded-l-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pays*" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="belgium">Belgique</SelectItem>
                          <SelectItem value="switzerland">Suisse</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Input id="company" placeholder="Société*" className="w-full" />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Secteur d'activité*" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technologies</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Santé</SelectItem>
                          <SelectItem value="retail">Commerce</SelectItem>
                          <SelectItem value="manufacturing">Industrie</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Input id="function" placeholder="Fonction*" className="w-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sujet*" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="project">Nouveau projet</SelectItem>
                        <SelectItem value="quote">Demande de devis</SelectItem>
                        <SelectItem value="partnership">Partenariat</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Textarea 
                      id="message" 
                      placeholder="Message*" 
                      className="w-full min-h-[120px]" 
                    />
                  </div>

                  <p className="text-sm text-skillia-blue opacity-80">
                    Skillia is committed to protecting and respecting your privacy. Your information will be used exclusively to respond to your request and will not be shared with third parties.
                  </p>

                  <Button type="submit" className="w-full bg-skillia-blue hover:bg-opacity-90 text-white">
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-skillia-blue">
                  Nos coordonnées
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-skillia-blue rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-skillia-blue">Email</h4>
                      <p className="text-skillia-blue opacity-80">contact@skillia.fr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
