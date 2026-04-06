## Plan de refonte Skillia.fr

### Phase 1 — Design System & Fondations
- Refonte des couleurs : bleu nuit/marine, accents ambre/doré, fond crème, teal (cyber), violet (tech), ambre (academy)
- Typographie premium, tokens CSS sémantiques
- Composants réutilisables (cartes expertise, cartes entités, sections hero, breadcrumbs)

### Phase 2 — Navigation
- Navbar premium avec dropdowns "Expertises" (4 items) et "Entités spécialisées" (3 items)
- Items : Expertises | Notre approche | Entités spécialisées | Ressources | Collectif | Contact
- CTA "Prendre RDV" en bouton principal
- Menu mobile responsive

### Phase 3 — Homepage (7 sections)
1. **Hero** — Positionnement cabinet + 4 pilules + stats/citation + 2 CTAs
2. **Bande de preuves** — Secteurs clients (industrie, finance, santé, services)
3. **4 Expertises** — Grille 2×2 (IA & Data, Transformation, Cyber & résilience, Déploiement & adoption)
4. **Notre approche** — 4 temps (Cadrer, Sécuriser, Déployer, Faire adopter) sur fond marine
5. **Entités spécialisées** — 3 cartes sobres (Resillia, Skillia Tech, Skillia Academy)
6. **Cas clients** — 3 cas anonymisés format compact
7. **Manifeste + Témoignages + Contact** — Citation + grille 2×2 témoignages + formulaire

### Phase 4 — Pages Expertises (4 pages)
- `/ia-data` — Stratégie IA, gouvernance data, ROI
- `/transformation` — Transformation digitale, conduite du changement
- `/cyber-resilience` — Gouvernance, protection, continuité + lien Resillia
- `/deploiement-adoption` — Adoption, formation, KPIs + liens Tech & Academy

### Phase 5 — Pages Entités spécialisées (3 pages)
- `/resillia` — Capacité cyber dédiée, 3 blocs, cas clients
- `/tech` — Build IA, 4 familles de solutions, stack
- `/academy` — 3 univers formation, formats, témoignages

### Phase 6 — Pages Transverses (5 pages)
- `/approche` — Méthode 4 temps détaillée
- `/collectif` — Équipe, complémentarité, confiance B2B
- `/ressources` — Contenus classés par expertise
- `/nous-rejoindre` — Offres par entité, promesse employeur
- `/contact` — Formulaire avec routing conditionnel + prise de RDV

### Phase 7 — Routing, SEO & Finitions
- Routes React Router pour toutes les pages
- H1 unique par page, balises SEO, maillage interne
- Responsive mobile-first, animations discrètes
- Placeholders élégants pour données manquantes

### Approche technique
- Création de composants partagés (PageHero, ExpertiseCard, EntityCard, ApproachStep, CaseStudyCard, etc.)
- Design system unifié via index.css + tailwind.config.ts
- Contenu i18n-ready via LanguageContext (FR prioritaire)

**Note** : Les données (chiffres, logos, témoignages) seront des placeholders faciles à remplacer. Aucun chiffre inventé.
