export interface UseCase {
  slug: string;
  title: string;
  summary: string;
  expertise: string;
  expertiseLink: string;
  enjeu: string;
  actions: string[];
  resultat: string;
}

export const useCases: UseCase[] = [
  {
    slug: 'cadrer-portefeuille-ia',
    title: 'Cadrer un portefeuille de cas d\'usage IA pour une ETI',
    summary: 'Identifier, qualifier et prioriser les cas d\'usage IA les plus pertinents pour construire une trajectoire réaliste et créatrice de valeur.',
    expertise: 'IA & Data',
    expertiseLink: '/ia-data',
    enjeu: 'L\'organisation souhaite lancer plusieurs initiatives IA, mais ne sait pas quels cas d\'usage prioriser ni comment articuler ambition, faisabilité et valeur.',
    actions: [
      'Animation d\'ateliers métier',
      'Identification des irritants et opportunités',
      'Qualification des cas d\'usage',
      'Analyse impact / faisabilité',
      'Priorisation et trajectoire de déploiement',
    ],
    resultat: 'Un portefeuille de cas d\'usage priorisé, gouverné et relié à des objectifs business clairs.',
  },
  {
    slug: 'copilote-metier-documentaire',
    title: 'Concevoir un copilote métier pour accélérer la production documentaire',
    summary: 'Concevoir un assistant IA utile, sécurisé et adopté pour réduire le temps consacré à la recherche, à la synthèse et à la rédaction.',
    expertise: 'IA & Data',
    expertiseLink: '/ia-data',
    enjeu: 'Les équipes perdent un temps important à rechercher, structurer, reformuler et rédiger de l\'information.',
    actions: [
      'Analyse des usages réels',
      'Cadrage fonctionnel',
      'Design du copilote',
      'Sécurisation du dispositif',
      'Accompagnement du déploiement',
    ],
    resultat: 'Un assistant utile, cadré, mesurable et adopté dans les pratiques quotidiennes.',
  },
  {
    slug: 'programme-transformation-12-mois',
    title: 'Structurer un programme de transformation digitale sur 12 mois',
    summary: 'Créer une feuille de route claire, une gouvernance pilotable et un dispositif d\'accompagnement pour coordonner plusieurs chantiers de transformation.',
    expertise: 'Transformation digitale',
    expertiseLink: '/transformation',
    enjeu: 'Plusieurs chantiers existent, mais l\'ensemble manque de cohérence, de pilotage et de lisibilité pour les parties prenantes.',
    actions: [
      'Cadrage de la trajectoire',
      'Priorisation des chantiers',
      'Gouvernance du programme',
      'Accompagnement des sponsors',
      'Conduite du changement',
    ],
    resultat: 'Une transformation plus lisible, mieux pilotée et plus durable dans son exécution.',
  },
  {
    slug: 'resilience-si-critique',
    title: 'Renforcer la résilience d\'un SI critique',
    summary: 'Identifier les dépendances critiques, formaliser les scénarios de rupture et construire les mécanismes de continuité adaptés.',
    expertise: 'Cyber & résilience',
    expertiseLink: '/cyber-resilience',
    enjeu: 'L\'organisation doit mieux anticiper les ruptures possibles et sécuriser la continuité de ses activités essentielles.',
    actions: [
      'Cartographie des activités critiques',
      'Analyse des dépendances',
      'Scénarios de rupture',
      'Définition des modes dégradés',
      'PCA / PRA / exercices',
    ],
    resultat: 'Une organisation mieux préparée à absorber, piloter et surmonter une perturbation majeure.',
  },
  {
    slug: 'deployer-assistant-ia-equipe',
    title: 'Déployer un assistant IA dans une équipe métier',
    summary: 'Préparer les usages, accompagner les équipes et mesurer l\'adoption réelle pour faire d\'un déploiement un usage durable.',
    expertise: 'Déploiement & adoption',
    expertiseLink: '/deploiement-adoption',
    enjeu: 'La solution est prête ou presque, mais l\'adoption réelle reste faible, partielle ou inégale.',
    actions: [
      'Préparation du déploiement',
      'Cadrage des usages',
      'Accompagnement des équipes',
      'Formation ciblée',
      'Mesure d\'usage et ajustements',
    ],
    resultat: 'Une adoption réelle, suivie et durable.',
  },
  {
    slug: 'former-codir-ia',
    title: 'Former un CODIR aux usages de l\'IA',
    summary: 'Donner aux dirigeants une compréhension concrète, stratégique et non technique de l\'IA pour mieux arbitrer et prioriser.',
    expertise: 'Déploiement & adoption',
    expertiseLink: '/deploiement-adoption',
    enjeu: 'Les dirigeants ont besoin d\'une compréhension concrète, claire et exploitable de l\'IA pour arbitrer, prioriser et décider.',
    actions: [
      'Session de cadrage',
      'Pédagogie orientée décision',
      'Cas d\'usage sectoriels',
      'Risques, gouvernance, opportunités',
      'Projection stratégique',
    ],
    resultat: 'Un CODIR mieux armé pour engager une trajectoire crédible.',
  },
  {
    slug: 'securite-programme-transformation',
    title: 'Intégrer la sécurité dans un programme de transformation',
    summary: 'Introduire les exigences cyber, conformité et résilience dès le cadrage pour éviter les angles morts en cours de route.',
    expertise: 'Cyber & résilience',
    expertiseLink: '/cyber-resilience',
    enjeu: 'Le programme avance, mais les dimensions cyber, conformité ou résilience arrivent trop tard.',
    actions: [
      'Analyse des risques',
      'Intégration sécurité by design',
      'Points de contrôle',
      'Gouvernance',
      'Articulation métiers / IT / sécurité',
    ],
    resultat: 'Une transformation plus robuste et moins exposée.',
  },
  {
    slug: 'trajectoire-adoption-solution',
    title: 'Concevoir une trajectoire d\'adoption pour une solution nouvellement déployée',
    summary: 'Structurer l\'accompagnement au changement, les parcours d\'appropriation et les indicateurs d\'usage pour renforcer l\'ancrage.',
    expertise: 'Déploiement & adoption',
    expertiseLink: '/deploiement-adoption',
    enjeu: 'L\'outil est disponible, mais les usages restent partiels, inégaux ou superficiels.',
    actions: [
      'Diagnostic des freins',
      'Segmentation des utilisateurs',
      'Parcours d\'adoption',
      'Accompagnement managers',
      'Mesure et relance',
    ],
    resultat: 'Une adoption mieux pilotée, plus homogène et plus durable.',
  },
];
