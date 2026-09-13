import type { CollectionConfig } from '@flare-cms/core'

/** Template article : enseignement / discours. */
export default {
  name: 'enseignements',
  displayName: 'Enseignements',
  description: 'Enseignements et discours',
  icon: '📖',
  schema: {
    type: 'object',
    properties: {
      title: { type: 'string', title: 'Titre', required: true, maxLength: 200 },
      slug: { type: 'slug', title: 'URL', required: true, maxLength: 200 },
      speaker: { type: 'string', title: 'Intervenant', required: true, maxLength: 120 },
      excerpt: { type: 'textarea', title: 'Résumé', maxLength: 400 },
      content: { type: 'quill', title: 'Texte' },
      audioUrl: { type: 'string', title: 'Lien audio / vidéo', maxLength: 500 },
      publishedAt: { type: 'datetime', title: 'Date' },
      status: {
        type: 'select',
        title: 'Statut',
        enum: ['draft', 'published'],
        enumLabels: ['Brouillon', 'Publié'],
        default: 'draft',
      },
    },
    required: ['title', 'slug', 'speaker'],
  },
  listFields: ['title', 'speaker', 'status', 'publishedAt'],
  searchFields: ['title', 'speaker', 'excerpt'],
  defaultSort: 'publishedAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
