
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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
                <iframe 
                  data-tally-src="https://tally.so/embed/wLNGEG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="482" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Contactez-nous"
                  className="w-full"
                />
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
