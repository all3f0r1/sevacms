export const articleTemplates = {
  annonces: {
    id: 'annonce',
    path: '/annonces',
    collection: 'annonces',
    title: 'Annonces',
  },
  ceremonies: {
    id: 'ceremonie',
    path: '/ceremonies',
    collection: 'ceremonies',
    title: 'Cérémonies',
  },
  enseignements: {
    id: 'enseignement',
    path: '/enseignements',
    collection: 'enseignements',
    title: 'Enseignements',
  },
} as const

export type ArticleTemplateId = keyof typeof articleTemplates
