
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: "Sophie Martin",
    position: "Directrice IT, Finance Corp",
    text: "Skillia a transformé notre approche de la cybersécurité. Leur expertise nous a permis d'identifier et de corriger des vulnérabilités critiques que nous ignorions. Un partenaire précieux pour notre entreprise.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Thomas Dubois",
    position: "CTO, Tech Innovations",
    text: "L'implémentation de solutions d'IA par Skillia a révolutionné notre analyse de données. Nous avons maintenant une vision claire des tendances du marché, ce qui nous permet de prendre des décisions stratégiques plus efficaces.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Marie Leroy",
    position: "RSSI, Groupe Hospitalier",
    text: "Dans un secteur aussi sensible que la santé, la sécurité des données est primordiale. Skillia nous a aidés à mettre en place un système robuste qui protège les informations de nos patients tout en facilitant le travail de nos équipes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Philippe Lambert",
    position: "CEO, Retail Solutions",
    text: "La formation spécialisée fournie par Skillia a considérablement amélioré les compétences de notre équipe en matière de sécurité informatique. Un investissement qui porte déjà ses fruits face aux menaces actuelles.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-skillia-blue">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-skillia-blue opacity-80">
            Découvrez les retours d'expérience de nos clients sur notre accompagnement et nos solutions
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-fade-in hover:shadow-lg transition-shadow border-l-4 border-l-skillia-blue"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-skillia-blue">{testimonial.name}</h3>
                    <p className="text-sm text-skillia-blue opacity-70">{testimonial.position}</p>
                  </div>
                </div>
                <p className="mt-4 text-skillia-blue opacity-90 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="lg:hidden">
          <Card className="border-l-4 border-l-skillia-blue">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-skillia-blue">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-skillia-blue opacity-70">{testimonials[currentIndex].position}</p>
                </div>
              </div>
              <p className="mt-4 text-skillia-blue opacity-90 italic">"{testimonials[currentIndex].text}"</p>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-4">
            <Button variant="outline" onClick={prevTestimonial} className="border-skillia-blue text-skillia-blue">
              Précédent
            </Button>
            <Button variant="outline" onClick={nextTestimonial} className="border-skillia-blue text-skillia-blue">
              Suivant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
