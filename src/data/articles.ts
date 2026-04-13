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
    chapeau: 'La transformation digitale échoue rarement faute d\'outils. Elle échoue plus souvent par manque de cadrage, de gouvernance et d\'adoption. Voici les trois schémas les plus fréquents que nous observons chez nos clients — et ce qu\'ils révèlent sur la manière d\'aborder le changement.',
    sections: [
      {
        title: 'Confondre déploiement et transformation',
        text: 'Déployer un outil ne transforme pas une organisation. C\'est pourtant le réflexe le plus courant : choisir une solution, planifier un rollout, former les utilisateurs — puis constater que les usages réels ne suivent pas. La transformation suppose de revisiter les processus, de clarifier les responsabilités et d\'ajuster les modes de fonctionnement avant, pendant et après le déploiement. Sans ce travail de fond, l\'outil reste une couche supplémentaire dans un système qui n\'a pas changé. Le risque principal n\'est pas l\'échec technique, mais l\'illusion de progrès : on a déployé, donc on a transformé. Or la vraie question est : qu\'est-ce qui a changé dans les pratiques quotidiennes des équipes ?',
      },
      {
        title: 'Sous-estimer la dimension humaine',
        text: 'Les équipes n\'adoptent pas spontanément un nouvel outil ou une nouvelle manière de travailler. Changer ses habitudes demande du temps, de la compréhension, de la confiance et des preuves concrètes que le changement apporte un bénéfice réel. Trop souvent, l\'accompagnement se limite à une formation technique ponctuelle, sans prise en compte des résistances, des craintes ou des contraintes opérationnelles. Les managers intermédiaires, pourtant essentiels à la diffusion du changement, sont rarement outillés pour jouer ce rôle. Résultat : l\'adoption reste partielle, inégale et fragile. Les organisations qui réussissent leur transformation investissent autant dans l\'humain que dans la technologie — parfois davantage.',
      },
      {
        title: 'Reporter la gouvernance et la sécurité',
        text: 'Gouvernance, sécurité, conformité : ces dimensions sont souvent perçues comme des contraintes à traiter "plus tard". Or ce qui n\'est pas cadré au départ devient un frein structurel en cours de route. Les questions de responsabilité, de traçabilité, de protection des données et de continuité doivent être intégrées dès la conception du programme. Reporter ces sujets, c\'est créer des angles morts qui se révèlent au pire moment — lors d\'un incident, d\'un audit ou d\'un changement d\'échelle. Une transformation bien gouvernée est une transformation plus rapide, pas plus lente.',
      },
    ],
    conclusion: 'Les transformations qui durent ne commencent pas par la technologie. Elles commencent par la clarté sur les enjeux, la rigueur dans la gouvernance et le respect du facteur humain. Ce sont ces fondations qui déterminent la capacité d\'une organisation à changer durablement.',
    relatedExpertise: 'Transformation digitale',
    relatedExpertiseLink: '/transformation',
    relatedUseCases: ['programme-transformation-12-mois'],
  },
  {
    slug: 'projets-ia-sans-impact',
    category: 'IA & Data',
    type: 'Article',
    title: 'Pourquoi tant de projets IA restent sans impact réel',
    chapeau: 'Beaucoup d\'initiatives IA promettent vite. Peu produisent durablement. Le problème ne vient presque jamais de la technologie elle-même, mais de la manière dont les projets sont conçus, gouvernés et reliés aux enjeux métier.',
    sections: [
      {
        title: 'Des cas d\'usage mal choisis',
        text: 'Le point de départ de la plupart des projets IA est une fascination pour la technologie, pas un problème métier clairement identifié. On cherche "où mettre de l\'IA" au lieu de partir des irritants réels, des pertes de temps ou des goulots d\'étranglement. Résultat : des expérimentations séduisantes en démonstration mais déconnectées des priorités opérationnelles. Un bon cas d\'usage IA part d\'un besoin concret, possède des données exploitables, génère une valeur mesurable et peut être adopté par les équipes concernées. Sans cette rigueur de sélection, l\'IA reste un sujet de laboratoire.',
      },
      {
        title: 'Une gouvernance insuffisante',
        text: 'Sans cadre de pilotage, l\'IA devient un empilement d\'expérimentations difficiles à industrialiser. Les POC se multiplient, mais rares sont ceux qui passent en production. Les raisons sont souvent les mêmes : pas de sponsor métier clairement identifié, pas de critères de succès définis en amont, pas de processus de décision pour passer à l\'échelle. La gouvernance IA ne signifie pas bureaucratie — elle signifie clarté : qui décide, sur quels critères, avec quelles ressources, dans quel calendrier. C\'est cette clarté qui permet d\'industrialiser les initiatives prometteuses et d\'arrêter celles qui n\'en sont pas.',
      },
      {
        title: 'Une valeur mal définie',
        text: 'Un projet IA doit être relié à une valeur tangible : temps gagné, qualité améliorée, risque réduit, capacité renforcée. Trop de projets se contentent d\'indicateurs techniques (précision du modèle, volume traité) sans les relier à un impact business vérifiable. La valeur doit être définie avant le projet, pas après. Elle doit être comprise par les métiers, pas seulement par les équipes data. Et elle doit être mesurée dans la durée, pas uniquement lors de la mise en production. Sans cette discipline, l\'IA reste perçue comme un coût d\'innovation, pas comme un levier stratégique.',
      },
    ],
    conclusion: 'L\'IA n\'a d\'intérêt que lorsqu\'elle crée de la valeur clairement reliée au métier. Les organisations qui réussissent ne sont pas celles qui font le plus d\'IA — ce sont celles qui font la bonne IA, au bon endroit, avec le bon niveau de gouvernance.',
    relatedExpertise: 'IA & Data',
    relatedExpertiseLink: '/ia-data',
    relatedUseCases: ['cadrer-portefeuille-ia', 'copilote-metier-documentaire'],
  },
  {
    slug: 'resilience-operationnelle',
    category: 'Cyber & résilience',
    type: 'Guide',
    title: 'Résilience opérationnelle : ce que les organisations sous-estiment encore',
    chapeau: 'La résilience ne se résume pas à un plan de secours. Elle se construit dans la connaissance des dépendances, des scénarios de rupture et des mécanismes de pilotage en crise. Pourtant, la plupart des organisations n\'y consacrent pas l\'attention qu\'elle mérite — jusqu\'au jour où elles en ont besoin.',
    sections: [
      {
        title: 'Les dépendances invisibles',
        text: 'Une activité critique dépend souvent d\'éléments moins visibles : applications secondaires, accès réseau, compétences concentrées sur quelques personnes, fournisseurs mono-source, données non répliquées. Ces dépendances ne sont pas documentées, rarement cartographiées et presque jamais testées. Lorsqu\'un incident survient, la chaîne de défaillance révèle des fragilités que personne n\'avait anticipées. Le premier pas vers la résilience consiste à rendre visible ce qui est invisible : identifier les points de défaillance uniques, cartographier les dépendances réelles et distinguer ce qui est critique de ce qui ne l\'est pas.',
      },
      {
        title: 'Les modes dégradés insuffisamment préparés',
        text: 'Savoir qu\'une application peut tomber ne suffit pas. Il faut savoir comment l\'organisation fonctionnera sans elle : quels processus manuels prendre le relais, quelles données sont récupérables, quels délais sont acceptables, qui prend les décisions. Sans scénarios de fonctionnement dégradé formalisés, testés et connus des équipes opérationnelles, une crise paralyse plus qu\'elle ne devrait. Le PCA (Plan de Continuité d\'Activité) ne doit pas être un document de conformité rangé dans un tiroir — il doit être un outil opérationnel maîtrisé par ceux qui devront l\'activer.',
      },
      {
        title: 'Les tests trop rares',
        text: 'Une résilience non testée est une hypothèse, pas une capacité. La majorité des organisations qui disposent d\'un PCA ne l\'ont jamais testé en conditions réalistes. Les exercices de crise sont rares, souvent théoriques et rarement suivis de plans d\'amélioration. Tester la résilience, c\'est vérifier que les procédures fonctionnent, que les équipes connaissent leur rôle, que les outils de communication de crise sont opérationnels et que les temps de reprise sont réalistes. Chaque exercice révèle des failles — et c\'est précisément leur valeur.',
      },
    ],
    conclusion: 'La résilience opérationnelle se travaille avant la crise, pas pendant. Les organisations qui investissent dans la cartographie de leurs dépendances, la préparation de leurs modes dégradés et la pratique régulière d\'exercices sont celles qui absorbent les chocs sans s\'effondrer.',
    relatedExpertise: 'Cyber & résilience',
    relatedExpertiseLink: '/cyber-resilience',
    relatedUseCases: ['resilience-si-critique', 'securite-programme-transformation'],
  },
];
