/**
 * SevaCMS — Cloudflare-only CMS (D1 + R2 + KV + Access)
 */
import { createFlareApp, registerCollections, SchedulerService } from '@flare-cms/core'
import type { FlareConfig } from '@flare-cms/core'
import { validateBindingsMiddleware } from './middleware/validate-bindings'

import annoncesCollection from './collections/annonces.collection'
import ceremoniesCollection from './collections/ceremonies.collection'
import enseignementsCollection from './collections/enseignements.collection'
import docsSectionsCollection from './collections/docs-sections.collection'
import docsCollection from './collections/docs.collection'

registerCollections([
  annoncesCollection,
  ceremoniesCollection,
  enseignementsCollection,
  docsSectionsCollection,
  docsCollection,
])

const config: FlareConfig = {
  collections: {
    autoSync: true
  },
  plugins: {
    directory: './src/plugins',
    autoLoad: false
  },
  middleware: {
    beforeAuth: [validateBindingsMiddleware()]
  }
}

const app = createFlareApp(config)

export default {
  fetch: app.fetch.bind(app),
  async scheduled(controller: ScheduledController, env: any, ctx: ExecutionContext) {
    const scheduler = new SchedulerService(env.DB, env, ctx)
    ctx.waitUntil(scheduler.processScheduledContent())
  },
}
