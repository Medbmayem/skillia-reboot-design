
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctas?: Array<{ label: string; href: string; variant?: 'default' | 'outline' }>;
  dark?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, ctas, dark = false }) => {
  return (
    <section className={`py-20 md:py-28 ${dark ? 'bg-skillia-navy text-white' : ''}`}>
      <div className="container">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className={`text-sm font-medium tracking-wide uppercase mb-4 ${dark ? 'text-skillia-amber' : 'text-skillia-amber'}`}>
              {eyebrow}
            </p>
          )}
          <h1 className={`mb-6 ${dark ? 'text-white' : ''}`}>{title}</h1>
          <p className={`text-lg md:text-xl leading-relaxed mb-8 ${dark ? 'text-gray-300' : 'text-muted-foreground'}`}>
            {subtitle}
          </p>
          {ctas && ctas.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {ctas.map((cta, index) => (
                <Button key={index} asChild variant={cta.variant || 'default'} size="lg"
                  className={index === 0 && !cta.variant ? 'bg-skillia-navy hover:bg-skillia-navy/90 text-white' : ''}>
                  <Link to={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
