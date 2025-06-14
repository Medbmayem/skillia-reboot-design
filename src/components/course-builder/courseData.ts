
export interface Activity {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  category: string;
}

export interface Resource {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  category: string;
}

export const activities: Activity[] = [
  {
    id: 'test',
    title: 'Test',
    icon: '📝',
    shortDescription: 'Quiz avec notation automatique',
    description: 'Créez des quiz avec notation automatique (QCM, vrai/faux, champs libres). Sert à évaluer les connaissances à la fin d\'un module.',
    category: 'evaluation'
  },
  {
    id: 'devoir',
    title: 'Devoir',
    icon: '📋',
    shortDescription: 'Soumission de livrables par les apprenants',
    description: 'Permet aux apprenants de soumettre un livrable (PDF, lien GitHub, etc.). Le mentor peut corriger et noter.',
    category: 'evaluation'
  },
  {
    id: 'forum',
    title: 'Forum',
    icon: '💬',
    shortDescription: 'Espace de discussion par module',
    description: 'Espace de discussion par module. Peut être public (entre apprenants) ou modéré par le mentor.',
    category: 'interaction'
  },
  {
    id: 'atelier',
    title: 'Atelier',
    icon: '🔄',
    shortDescription: 'Activité de peer review',
    description: 'Activité de peer review. Les apprenants évaluent les travaux des autres selon des critères définis.',
    category: 'interaction'
  },
  {
    id: 'feedback',
    title: 'Feedback',
    icon: '📊',
    shortDescription: 'Sondage ou évaluation de satisfaction',
    description: 'Sondage ou évaluation de satisfaction. Sert au mentor/admin à récolter du feedback anonyme.',
    category: 'evaluation'
  },
  {
    id: 'h5p',
    title: 'H5P',
    icon: '🎮',
    shortDescription: 'Contenus interactifs avancés',
    description: 'Intégration de contenus interactifs (vidéo annotée, glisser-déposer, flashcards). Nécessite l\'éditeur H5P.',
    category: 'interactive'
  },
  {
    id: 'lecon',
    title: 'Leçon',
    icon: '📚',
    shortDescription: 'Séquence pédagogique structurée',
    description: 'Séquence pédagogique linéaire ou à embranchements (type parcours scénarisé). Permet de structurer des étapes d\'apprentissage.',
    category: 'structure'
  }
];

export const resources: Resource[] = [
  {
    id: 'fichier',
    title: 'Fichier',
    icon: '📎',
    shortDescription: 'Téléversement de documents',
    description: 'Téléversez un fichier que l\'apprenant peut lire/télécharger (PDF, Excel, etc.).',
    category: 'content'
  },
  {
    id: 'page',
    title: 'Page',
    icon: '📄',
    shortDescription: 'Contenu texte enrichi',
    description: 'Bloc de contenu texte enrichi (images, liens, titres). Utilisé pour les explications ou consignes.',
    category: 'content'
  },
  {
    id: 'livre',
    title: 'Livre',
    icon: '📖',
    shortDescription: 'Collection de pages chapitrees',
    description: 'Regroupe plusieurs pages dans un format "chapitré". Navigation par table des matières.',
    category: 'content'
  },
  {
    id: 'glossaire',
    title: 'Glossaire',
    icon: '📚',
    shortDescription: 'Base de termes définis',
    description: 'Créez une base de termes définis liés à un parcours. Utile pour les vocabulaires métiers ou techniques.',
    category: 'reference'
  },
  {
    id: 'zone-texte-media',
    title: 'Zone texte & média',
    icon: '🎬',
    shortDescription: 'Bloc libre pour médias variés',
    description: 'Bloc libre pour ajouter des vidéos YouTube, images, citations, audio.',
    category: 'media'
  },
  {
    id: 'certificat',
    title: 'Certificat personnalisé',
    icon: '🏆',
    shortDescription: 'Génération de certificats',
    description: 'Génère un certificat à la fin d\'un sprint ou parcours. Conditionnable par note ou complétion.',
    category: 'recognition'
  },
  {
    id: 'scorm',
    title: 'SCORM / IMS Content',
    icon: '📦',
    shortDescription: 'Intégration de contenu externe',
    description: 'Permet d\'intégrer du contenu SCORM ou IMS exporté depuis un autre LMS. Suivi du scoring automatique si connecté.',
    category: 'integration'
  },
  {
    id: 'url',
    title: 'URL',
    icon: '🔗',
    shortDescription: 'Lien vers ressource externe',
    description: 'Lien externe vers ressource web (article, outil tiers). Peut s\'ouvrir dans un nouvel onglet.',
    category: 'reference'
  },
  {
    id: 'dossier',
    title: 'Dossier',
    icon: '📁',
    shortDescription: 'Groupement de fichiers',
    description: 'Permet de grouper plusieurs fichiers dans un seul bloc.',
    category: 'organization'
  }
];
