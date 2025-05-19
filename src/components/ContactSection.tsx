
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Liste des pays EMEA
const emeaCountries = [
  "Allemagne", "Autriche", "Belgique", "Bulgarie", "Chypre", "Croatie", "Danemark", 
  "Espagne", "Estonie", "Finlande", "France", "Grèce", "Hongrie", "Irlande", "Italie", 
  "Lettonie", "Lituanie", "Luxembourg", "Malte", "Pays-Bas", "Pologne", "Portugal", 
  "République tchèque", "Roumanie", "Slovaquie", "Slovénie", "Suède", 
  "Arabie Saoudite", "Bahreïn", "Émirats arabes unis", "Égypte", "Iran", "Irak", "Israël", 
  "Jordanie", "Koweït", "Liban", "Oman", "Qatar", "Turquie", "Yémen",
  "Afrique du Sud", "Algérie", "Angola", "Botswana", "Cameroun", "Côte d'Ivoire", "Éthiopie", 
  "Ghana", "Kenya", "Maroc", "Maurice", "Mozambique", "Namibie", "Nigéria", "Ouganda", 
  "Rwanda", "Sénégal", "Tanzanie", "Tunisie", "Zambie", "Zimbabwe"
];

// English EMEA countries
const emeaCountriesEn = [
  "Germany", "Austria", "Belgium", "Bulgaria", "Cyprus", "Croatia", "Denmark", 
  "Spain", "Estonia", "Finland", "France", "Greece", "Hungary", "Ireland", "Italy", 
  "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", 
  "Czech Republic", "Romania", "Slovakia", "Slovenia", "Sweden", 
  "Saudi Arabia", "Bahrain", "United Arab Emirates", "Egypt", "Iran", "Iraq", "Israel", 
  "Jordan", "Kuwait", "Lebanon", "Oman", "Qatar", "Turkey", "Yemen",
  "South Africa", "Algeria", "Angola", "Botswana", "Cameroon", "Ivory Coast", "Ethiopia", 
  "Ghana", "Kenya", "Morocco", "Mauritius", "Mozambique", "Namibia", "Nigeria", "Uganda", 
  "Rwanda", "Senegal", "Tanzania", "Tunisia", "Zambia", "Zimbabwe"
];

// Sujets basés sur l'image fournie
const subjects = [
  "Skillia services", 
  "Recruitment", 
  "Sustainability", 
  "Learning", 
  "Partnership"
];

const ContactSection = () => {
  const { language } = useLanguage();
  
  const countries = language === 'en' ? emeaCountriesEn : emeaCountries;
  
  return (
    <section id="contact" className="section bg-skillia-gray">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#403AF2]">
            {language === 'en' ? 'Contact Us' : 'Contactez-nous'}
          </h2>
          <p className="text-lg text-skillia-blue opacity-80">
            {language === 'en' 
              ? 'Let\'s discuss your needs and how we can support you in your projects' 
              : 'Discutons de vos besoins et de comment nous pouvons vous accompagner dans vos projets'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="animate-fade-in">
            <Card className="border-t-4 border-t-skillia-blue">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input id="firstname" placeholder={language === 'en' ? "First name*" : "Prénom*"} className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Input id="name" placeholder={language === 'en' ? "Last name*" : "Nom*"} className="w-full" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input id="email" type="email" placeholder="E-mail*" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex">
                        <div className="flex items-center px-3 bg-background border border-r-0 border-input rounded-l-md">
                          <Mail className="h-4 w-4 text-skillia-blue" />
                          <span className="ml-1">+</span>
                        </div>
                        <Input id="phone" placeholder={language === 'en' ? "Mobile" : "Mobile"} className="w-full rounded-l-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={language === 'en' ? "Country*" : "Pays*"} />
                        </SelectTrigger>
                        <SelectContent className="max-h-80">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country.toLowerCase()}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Input id="company" placeholder={language === 'en' ? "Company*" : "Société*"} className="w-full" />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={language === 'en' ? "Industry*" : "Secteur d'activité*"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">{language === 'en' ? "Technology" : "Technologies"}</SelectItem>
                          <SelectItem value="finance">{language === 'en' ? "Finance" : "Finance"}</SelectItem>
                          <SelectItem value="healthcare">{language === 'en' ? "Healthcare" : "Santé"}</SelectItem>
                          <SelectItem value="retail">{language === 'en' ? "Retail" : "Commerce"}</SelectItem>
                          <SelectItem value="manufacturing">{language === 'en' ? "Manufacturing" : "Industrie"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Input id="function" placeholder={language === 'en' ? "Function*" : "Fonction*"} className="w-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={language === 'en' ? "Subject*" : "Sujet*"} />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject.toLowerCase()}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Textarea 
                      id="message" 
                      placeholder={language === 'en' ? "Message*" : "Message*"} 
                      className="w-full min-h-[120px]" 
                    />
                  </div>

                  <p className="text-sm text-skillia-blue opacity-80">
                    {language === 'en' 
                      ? 'Skillia is committed to protecting and respecting your privacy. Your information will be used exclusively to respond to your request and will not be shared with third parties.'
                      : 'Skillia is committed to protecting and respecting your privacy. Your information will be used exclusively to respond to your request and will not be shared with third parties.'}
                  </p>

                  <Button type="submit" className="w-full bg-skillia-blue hover:bg-opacity-90 text-white">
                    {language === 'en' ? 'Send' : 'Envoyer'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#403AF2]">
                  {language === 'en' ? 'Our Contact Details' : 'Nos coordonnées'}
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
