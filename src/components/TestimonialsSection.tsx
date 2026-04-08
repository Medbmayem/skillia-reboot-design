
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-32 md:py-44 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-20">
          <div>
            <p className="font-serif text-2xl md:text-3xl italic leading-[1.4] mb-8">
              « Skillia a su cadrer notre projet IA avec une rigueur et une clarté qui nous ont permis de convaincre le CODIR en un mois. »
            </p>
            <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground/50">
              Directeur transformation — Groupe industriel
            </p>
          </div>
          <div className="h-px bg-border/30" />
          <div>
            <p className="font-serif text-2xl md:text-3xl italic leading-[1.4] mb-8">
              « Un accompagnement sobre, structuré et réellement orienté résultat. Pas de buzzwords, du concret. »
            </p>
            <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground/50">
              DSI — ETI multisites
            </p>
          </div>
          <div className="h-px bg-border/30" />
          <div>
            <p className="font-serif text-2xl md:text-3xl italic leading-[1.4] mb-8">
              « La sécurité a été intégrée dès le premier jour, sans ralentir le projet. C&apos;est exactement ce qu&apos;on cherchait. »
            </p>
            <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground/50">
              Responsable cybersécurité — Secteur finance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
