import { defineLiveCollection } from 'astro:content'
import { flareLiveLoader } from '@flare-cms/astro'

const API_URL = import.meta.env.PUBLIC_FLARE_API_URL || 'http://localhost:8787'
const API_TOKEN = import.meta.env.PUBLIC_FLARE_API_TOKEN

const blogPosts = defineLiveCollection({
  loader: flareLiveLoader({
    apiUrl: API_URL,
    collection: 'blog-posts',
    apiToken: API_TOKEN,
    filter: { status: 'published' },
  }),
})

const news = defineLiveCollection({
  loader: flareLiveLoader({
    apiUrl: API_URL,
    collection: 'news',
    apiToken: API_TOKEN,
    filter: { status: 'published' },
  }),
})

const docs = defineLiveCollection({
  loader: flareLiveLoader({
    apiUrl: API_URL,
    collection: 'docs',
    apiToken: API_TOKEN,
    filter: { status: 'published' },
  }),
})

const docsSections = defineLiveCollection({
  loader: flareLiveLoader({
    apiUrl: API_URL,
    collection: 'docs-sections',
    apiToken: API_TOKEN,
    filter: { status: 'published' },
  }),
})

const pages = defineLiveCollection({
  loader: flareLiveLoader({
    apiUrl: API_URL,
    collection: 'pages',
    apiToken: API_TOKEN,
    filter: { status: 'published' },
  }),
})

const annonces = defineLiveCollection({
  loader: flareLiveLoader({
    apiUrl: API_URL,
    collection: 'annonces',
    apiToken: API_TOKEN,
    filter: { status: 'published' },
  }),
})

const ceremonies = defineLiveCollection({
  loader: flareLiveLoader({
    apiUrl: API_URL,
    collection: 'ceremonies',
    apiToken: API_TOKEN,
    filter: { status: 'published' },
  }),
})

const enseignements = defineLiveCollection({
  loader: flareLiveLoader({
    apiUrl: API_URL,
    collection: 'enseignements',
    apiToken: API_TOKEN,
    filter: { status: 'published' },
  }),
})

export const collections = {
  blogPosts,
  news,
  docs,
  docsSections,
  pages,
  annonces,
  ceremonies,
  enseignements,
}
