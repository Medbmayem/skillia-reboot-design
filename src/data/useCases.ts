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
    enjeu: 'L\'organisation souhaite lancer plusieurs initiatives IA, mais ne sait pas quels cas d\'usage prioriser ni comment articuler ambition, faisabilité et valeur. Les sollicitations sont nombreuses, les attentes hétérogènes et le risque de dispersion est réel.',
    actions: [
      'Animation d\'ateliers métier pour identifier les irritants et les opportunités concrètes',
      'Qualification de chaque cas d\'usage selon des critères de valeur, de faisabilité et de maturité data',
      'Analyse croisée impact / effort pour chaque initiative identifiée',
      'Construction d\'une matrice de priorisation partagée avec le CODIR et les métiers',
      'Formalisation d\'une trajectoire de déploiement progressive avec jalons et gouvernance',
    ],
    resultat: 'Un portefeuille de cas d\'usage priorisé, gouverné et relié à des objectifs business clairs. L\'organisation dispose d\'une feuille de route IA réaliste et d\'un cadre de décision pour arbitrer ses investissements.',
  },
  {
    slug: 'copilote-metier-documentaire',
    title: 'Concevoir un copilote métier pour accélérer la production documentaire',
    summary: 'Concevoir un assistant IA utile, sécurisé et adopté pour réduire le temps consacré à la recherche, à la synthèse et à la rédaction.',
    expertise: 'IA & Data',
    expertiseLink: '/ia-data',
    enjeu: 'Les équipes perdent un temps important à rechercher, structurer, reformuler et rédiger de l\'information. Le volume documentaire croît, les délais se raccourcissent et la qualité attendue ne baisse pas.',
    actions: [
      'Analyse des usages documentaires réels avec les équipes concernées',
      'Cadrage fonctionnel du copilote : périmètre, sources, cas d\'usage prioritaires',
      'Design de l\'expérience utilisateur et des interactions IA',
      'Sécurisation du dispositif : confidentialité, traçabilité, conformité',
      'Accompagnement du déploiement et mesure d\'adoption sur les premières semaines',
    ],
    resultat: 'Un assistant IA utile, cadré et mesurable, intégré dans les pratiques quotidiennes des équipes. Le temps de production documentaire est significativement réduit sans compromis sur la qualité.',
  },
  {
    slug: 'programme-transformation-12-mois',
    title: 'Structurer un programme de transformation digitale sur 12 mois',
    summary: 'Créer une feuille de route claire, une gouvernance pilotable et un dispositif d\'accompagnement pour coordonner plusieurs chantiers de transformation.',
    expertise: 'Transformation digitale',
    expertiseLink: '/transformation',
    enjeu: 'Plusieurs chantiers de transformation existent — outils, processus, organisation — mais l\'ensemble manque de cohérence, de pilotage et de lisibilité. Les sponsors peinent à arbitrer, les équipes projet avancent en silo et les bénéfices attendus restent flous.',
    actions: [
      'Cadrage de la trajectoire : vision cible, périmètre, ambitions et contraintes',
      'Priorisation des chantiers selon leur impact, leur faisabilité et leurs interdépendances',
      'Mise en place de la gouvernance du programme : comités, indicateurs, rituels',
      'Accompagnement des sponsors et des managers dans leur rôle de porteurs du changement',
      'Dispositif de conduite du changement : communication, formation, suivi de l\'adoption',
    ],
    resultat: 'Une transformation plus lisible, mieux pilotée et plus durable dans son exécution. Les parties prenantes disposent d\'une vision partagée et d\'outils pour mesurer les progrès réels.',
  },
  {
    slug: 'resilience-si-critique',
    title: 'Renforcer la résilience d\'un SI critique',
    summary: 'Identifier les dépendances critiques, formaliser les scénarios de rupture et construire les mécanismes de continuité adaptés.',
    expertise: 'Cyber & résilience',
    expertiseLink: '/cyber-resilience',
    enjeu: 'L\'organisation doit mieux anticiper les ruptures possibles et sécuriser la continuité de ses activités essentielles. Les dépendances sont mal connues, les modes dégradés peu formalisés et les exercices de crise inexistants ou théoriques.',
    actions: [
      'Cartographie des activités critiques et de leurs chaînes de dépendance',
      'Analyse des points de défaillance uniques : techniques, humains, organisationnels',
      'Construction de scénarios de rupture réalistes et de leurs impacts opérationnels',
      'Définition des modes dégradés et des procédures de reprise pour chaque activité critique',
      'Conception et animation d\'exercices de crise avec les équipes opérationnelles',
    ],
    resultat: 'Une organisation mieux préparée à absorber, piloter et surmonter une perturbation majeure. Les équipes connaissent leurs rôles en situation de crise et les procédures ont été testées.',
  },
  {
    slug: 'deployer-assistant-ia-equipe',
    title: 'Déployer un assistant IA dans une équipe métier',
    summary: 'Préparer les usages, accompagner les équipes et mesurer l\'adoption réelle pour faire d\'un déploiement un usage durable.',
    expertise: 'Déploiement & adoption',
    expertiseLink: '/deploiement-adoption',
    enjeu: 'La solution est prête ou presque, mais l\'adoption réelle reste faible, partielle ou inégale. Les équipes n\'ont pas été suffisamment impliquées dans la conception et perçoivent l\'outil comme une contrainte supplémentaire plutôt qu\'un gain.',
    actions: [
      'Préparation du déploiement : identification des utilisateurs clés et des résistances prévisibles',
      'Cadrage des usages cibles avec les métiers pour ancrer l\'outil dans les pratiques existantes',
      'Accompagnement terrain : sessions de prise en main, coaching individuel, support de proximité',
      'Formation ciblée par profil d\'utilisateur et par niveau de maturité',
      'Mise en place d\'indicateurs d\'usage réels et boucle d\'ajustement continue',
    ],
    resultat: 'Une adoption réelle, suivie et durable. L\'outil est utilisé quotidiennement par les équipes concernées et génère les bénéfices attendus.',
  },
  {
    slug: 'former-codir-ia',
    title: 'Former un CODIR aux usages de l\'IA',
    summary: 'Donner aux dirigeants une compréhension concrète, stratégique et non technique de l\'IA pour mieux arbitrer et prioriser.',
    expertise: 'Déploiement & adoption',
    expertiseLink: '/deploiement-adoption',
    enjeu: 'Les dirigeants sont sollicités sur l\'IA mais manquent d\'une compréhension concrète, claire et exploitable pour arbitrer, prioriser et décider. Le risque est de valider des initiatives sans en comprendre les implications ou de bloquer des projets prometteurs par excès de prudence.',
    actions: [
      'Session de cadrage préalable pour identifier les enjeux spécifiques de l\'organisation',
      'Pédagogie orientée décision : pas de technique, mais des cas concrets, des arbitrages, des questions clés',
      'Présentation de cas d\'usage sectoriels proches du contexte des participants',
      'Éclairage sur les risques, la gouvernance, les questions éthiques et réglementaires',
      'Projection stratégique : quelles décisions prendre dans les 6 prochains mois',
    ],
    resultat: 'Un CODIR mieux armé pour engager une trajectoire IA crédible, avec une vision partagée des opportunités, des risques et des priorités.',
  },
  {
    slug: 'securite-programme-transformation',
    title: 'Intégrer la sécurité dans un programme de transformation',
    summary: 'Introduire les exigences cyber, conformité et résilience dès le cadrage pour éviter les angles morts en cours de route.',
    expertise: 'Cyber & résilience',
    expertiseLink: '/cyber-resilience',
    enjeu: 'Le programme de transformation avance, mais les dimensions cyber, conformité ou résilience arrivent trop tard — ou pas du tout. Les équipes sécurité sont sollicitées en fin de course, quand les choix structurants sont déjà faits.',
    actions: [
      'Analyse des risques spécifiques au programme de transformation en cours',
      'Intégration des exigences sécurité by design dès les phases de cadrage et de conception',
      'Mise en place de points de contrôle sécurité aux jalons clés du programme',
      'Définition de la gouvernance sécurité : rôles, responsabilités, escalade',
      'Articulation entre les équipes métiers, IT et sécurité pour éviter les silos',
    ],
    resultat: 'Une transformation plus robuste et moins exposée aux risques cyber. La sécurité est intégrée sans ralentir le programme, et les parties prenantes partagent une vision commune des exigences.',
  },
  {
    slug: 'trajectoire-adoption-solution',
    title: 'Concevoir une trajectoire d\'adoption pour une solution nouvellement déployée',
    summary: 'Structurer l\'accompagnement au changement, les parcours d\'appropriation et les indicateurs d\'usage pour renforcer l\'ancrage.',
    expertise: 'Déploiement & adoption',
    expertiseLink: '/deploiement-adoption',
    enjeu: 'L\'outil est disponible, mais les usages restent partiels, inégaux ou superficiels. Les équipes l\'utilisent par obligation plus que par conviction, et les bénéfices attendus ne se matérialisent pas.',
    actions: [
      'Diagnostic des freins à l\'adoption : techniques, organisationnels, culturels',
      'Segmentation des utilisateurs par profil, maturité et besoin d\'accompagnement',
      'Conception de parcours d\'adoption différenciés avec jalons et points de contrôle',
      'Accompagnement spécifique des managers comme relais du changement',
      'Mise en place d\'indicateurs d\'usage et boucle de relance pour les populations à risque',
    ],
    resultat: 'Une adoption mieux pilotée, plus homogène et plus durable. Les usages progressent de manière mesurable et les équipes trouvent une valeur concrète dans l\'outil déployé.',
  },
];
