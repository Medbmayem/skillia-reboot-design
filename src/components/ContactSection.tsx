
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Interface pour les données du formulaire
interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  industry: string;
  function: string;
  subject: string;
  message: string;
}

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
  const { toast } = useToast();
  
  const countries = language === 'en' ? emeaCountriesEn : emeaCountries;
  
  const form = useForm<ContactFormData>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      country: '',
      company: '',
      industry: '',
      function: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Submitting form data:', data);
    
    try {
      // URL du formulaire Tally - remplacez cette URL par votre vrai formulaire Tally
      const tallyFormUrl = 'https://tally.so/r/w2jM8k';
      
      // Créer les données du formulaire pour Tally
      const formData = new FormData();
      formData.append('firstname', data.firstname);
      formData.append('lastname', data.lastname);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('country', data.country);
      formData.append('company', data.company);
      formData.append('industry', data.industry);
      formData.append('function', data.function);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      const response = await fetch(tallyFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      toast({
        title: language === 'en' ? 'Message sent!' : 'Message envoyé !',
        description: language === 'en' 
          ? 'Thank you for your message. We will get back to you soon at contact@skillia.fr.'
          : 'Merci pour votre message. Nous vous répondrons rapidement à contact@skillia.fr.',
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: language === 'en' ? 'Error' : 'Erreur',
        description: language === 'en' 
          ? 'There was an error sending your message. Please try again.'
          : 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
        variant: 'destructive',
      });
    }
  };

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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstname"
                        rules={{ required: 'Ce champ est requis' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder={language === 'en' ? "First name*" : "Prénom*"} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastname"
                        rules={{ required: 'Ce champ est requis' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder={language === 'en' ? "Last name*" : "Nom*"} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        rules={{ 
                          required: 'Ce champ est requis',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email invalide'
                          }
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="E-mail*" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex">
                                <div className="flex items-center px-3 bg-background border border-r-0 border-input rounded-l-md">
                                  <Mail className="h-4 w-4 text-skillia-blue" />
                                  <span className="ml-1">+</span>
                                </div>
                                <Input 
                                  placeholder={language === 'en' ? "Mobile" : "Mobile"} 
                                  className="rounded-l-none" 
                                  {...field} 
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="country"
                        rules={{ required: 'Ce champ est requis' }}
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={language === 'en' ? "Country*" : "Pays*"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="max-h-80">
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country.toLowerCase()}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        rules={{ required: 'Ce champ est requis' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder={language === 'en' ? "Company*" : "Société*"} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="industry"
                        rules={{ required: 'Ce champ est requis' }}
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={language === 'en' ? "Industry*" : "Secteur d'activité*"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="technology">{language === 'en' ? "Technology" : "Technologies"}</SelectItem>
                                <SelectItem value="finance">{language === 'en' ? "Finance" : "Finance"}</SelectItem>
                                <SelectItem value="healthcare">{language === 'en' ? "Healthcare" : "Santé"}</SelectItem>
                                <SelectItem value="retail">{language === 'en' ? "Retail" : "Commerce"}</SelectItem>
                                <SelectItem value="manufacturing">{language === 'en' ? "Manufacturing" : "Industrie"}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="function"
                        rules={{ required: 'Ce champ est requis' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder={language === 'en' ? "Function*" : "Fonction*"} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      rules={{ required: 'Ce champ est requis' }}
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={language === 'en' ? "Subject*" : "Sujet*"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {subjects.map((subject) => (
                                <SelectItem key={subject} value={subject.toLowerCase()}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      rules={{ required: 'Ce champ est requis' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder={language === 'en' ? "Message*" : "Message*"} 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <p className="text-sm text-skillia-blue opacity-80">
                      {language === 'en' 
                        ? 'Skillia is committed to protecting and respecting your privacy. Your information will be used exclusively to respond to your request and will not be shared with third parties.'
                        : 'Skillia s\'engage à protéger et à respecter votre vie privée. Vos informations seront utilisées exclusivement pour répondre à votre demande et ne seront pas partagées avec des tiers.'}
                    </p>

                    <Button 
                      type="submit" 
                      className="w-full bg-skillia-blue hover:bg-opacity-90 text-white"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting 
                        ? (language === 'en' ? 'Sending...' : 'Envoi...') 
                        : (language === 'en' ? 'Send' : 'Envoyer')
                      }
                    </Button>
                  </form>
                </Form>
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
