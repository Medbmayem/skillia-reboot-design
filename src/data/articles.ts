export interface ArticleSection {
  title: string;
  text: string;
}

export interface Article {
  slug: string;
  category: string;
  type: string;
  title: string;
  chapeau: string;
  sections: ArticleSection[];
  conclusion: string;
  relatedExpertise: string;
  relatedExpertiseLink: string;
  relatedUseCases?: string[];
}

export const articles: Article[] = [
  {
    slug: 'erreurs-transformation-digitale',
    category: 'Transformation digitale',
    type: 'Article',
    title: 'Les 3 erreurs qui font échouer la transformation digitale',
    chapeau: 'La transformation digitale échoue rarement faute d\'outils. Elle échoue plus souvent par manque de cadrage, de gouvernance et d\'adoption.',
    sections: [
      {
        title: 'Confondre déploiement et transformation',
        text: 'Déployer un outil ne transforme pas une organisation à lui seul. Sans clarification des enjeux, sans adaptation des processus et sans pilotage de l\'appropriation, la transformation reste superficielle.',
      },
      {
        title: 'Sous-estimer la dimension humaine',
        text: 'Les équipes n\'adoptent pas spontanément un nouvel outil ou une nouvelle manière de travailler. Il faut créer les conditions de compréhension, d\'adhésion et d\'usage.',
      },
      {
        title: 'Reporter la gouvernance et la sécurité',
        text: 'Ce qui n\'est pas cadré au départ devient souvent un frein plus tard. Gouvernance, responsabilités, sécurité et résilience doivent être intégrées dès l\'amont.',
      },
    ],
    conclusion: 'Les transformations qui durent commencent rarement par la technologie. Elles commencent par la clarté.',
    relatedExpertise: 'Transformation digitale',
    relatedExpertiseLink: '/transformation',
    relatedUseCases: ['programme-transformation-12-mois'],
  },
  {
    slug: 'projets-ia-sans-impact',
    category: 'IA & Data',
    type: 'Article',
    title: 'Pourquoi tant de projets IA restent sans impact réel',
    chapeau: 'Beaucoup d\'initiatives IA promettent vite. Peu produisent durablement.',
    sections: [
      {
        title: 'Des cas d\'usage mal choisis',
        text: 'Quand les initiatives ne partent pas des irritants métiers réels, elles restent périphériques.',
      },
      {
        title: 'Une gouvernance insuffisante',
        text: 'Sans cadre de pilotage, l\'IA devient un empilement d\'expérimentations difficiles à industrialiser.',
      },
      {
        title: 'Une valeur mal définie',
        text: 'Un projet IA doit être relié à une valeur tangible : temps gagné, qualité améliorée, risque réduit, capacité renforcée.',
      },
    ],
    conclusion: 'L\'IA n\'a d\'intérêt que lorsqu\'elle crée de la valeur clairement reliée au métier.',
    relatedExpertise: 'IA & Data',
    relatedExpertiseLink: '/ia-data',
    relatedUseCases: ['cadrer-portefeuille-ia', 'copilote-metier-documentaire'],
  },
  {
    slug: 'resilience-operationnelle',
    category: 'Cyber & résilience',
    type: 'Guide',
    title: 'Résilience opérationnelle : ce que les organisations sous-estiment encore',
    chapeau: 'La résilience ne se résume pas à un plan de secours. Elle se construit dans la connaissance des dépendances, des scénarios de rupture et des mécanismes de pilotage en crise.',
    sections: [
      {
        title: 'Les dépendances invisibles',
        text: 'Une activité critique dépend souvent d\'éléments moins visibles : applications, équipes, accès, fournisseurs, données, sites.',
      },
      {
        title: 'Les modes dégradés insuffisamment préparés',
        text: 'Sans scénarios de fonctionnement dégradé, une crise paralyse plus qu\'elle ne devrait.',
      },
      {
        title: 'Les tests trop rares',
        text: 'Une résilience non testée est une hypothèse, pas une capacité.',
      },
    ],
    conclusion: 'La résilience opérationnelle se travaille avant la crise, pas pendant.',
    relatedExpertise: 'Cyber & résilience',
    relatedExpertiseLink: '/cyber-resilience',
    relatedUseCases: ['resilience-si-critique', 'securite-programme-transformation'],
  },
];
