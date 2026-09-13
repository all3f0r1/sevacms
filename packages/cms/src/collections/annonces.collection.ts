import type { CollectionConfig } from '@flare-cms/core'

/** Template article : annonce courte vers les dévôts. */
export default {
  name: 'annonces',
  displayName: 'Annonces',
  description: 'Annonces courtes pour les dévôts',
  icon: '📣',
  schema: {
    type: 'object',
    properties: {
      title: { type: 'string', title: 'Titre', required: true, maxLength: 160 },
      slug: { type: 'slug', title: 'URL', required: true, maxLength: 160 },
      body: { type: 'textarea', title: 'Texte', required: true, maxLength: 2000 },
      pinned: { type: 'boolean', title: 'Épingler en haut', default: false },
      publishedAt: { type: 'datetime', title: 'Date' },
      status: {
        type: 'select',
        title: 'Statut',
        enum: ['draft', 'published'],
        enumLabels: ['Brouillon', 'Publié'],
        default: 'draft',
      },
    },
    required: ['title', 'slug', 'body'],
  },
  listFields: ['title', 'pinned', 'status', 'publishedAt'],
  searchFields: ['title', 'body'],
  defaultSort: 'publishedAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
