import type { CollectionConfig } from '@flare-cms/core'

/** Template article : cérémonie / puja. */
export default {
  name: 'ceremonies',
  displayName: 'Cérémonies',
  description: 'Cérémonies et pujas à venir',
  icon: '🪔',
  schema: {
    type: 'object',
    properties: {
      title: { type: 'string', title: 'Titre', required: true, maxLength: 160 },
      slug: { type: 'slug', title: 'URL', required: true, maxLength: 160 },
      startsAt: { type: 'datetime', title: 'Début', required: true },
      endsAt: { type: 'datetime', title: 'Fin' },
      place: { type: 'string', title: 'Lieu', maxLength: 160 },
      officiant: { type: 'string', title: 'Officiant', maxLength: 120 },
      description: { type: 'quill', title: 'Description' },
      poster: { type: 'media', title: 'Affiche' },
      status: {
        type: 'select',
        title: 'Statut',
        enum: ['draft', 'published'],
        enumLabels: ['Brouillon', 'Publié'],
        default: 'draft',
      },
    },
    required: ['title', 'slug', 'startsAt'],
  },
  listFields: ['title', 'startsAt', 'place', 'status'],
  searchFields: ['title', 'place', 'officiant'],
  defaultSort: 'startsAt',
  defaultSortOrder: 'asc',
} satisfies CollectionConfig
