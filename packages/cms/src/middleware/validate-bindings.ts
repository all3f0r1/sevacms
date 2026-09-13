import type { Context } from 'hono'
import type { Bindings } from '@flare-cms/core'

const JWT_SECRET_HARDCODED_DEFAULT = 'your-super-secret-jwt-key-change-in-production'

type MiddlewareFn = (c: Context, next: () => Promise<void>) => Promise<void>

export function validateBindingsMiddleware(): MiddlewareFn {
  return async (c: Context<{ Bindings: Bindings }>, next: () => Promise<void>) => {
    const missing: string[] = []

    if (!c.env.DB) missing.push('DB (D1 database)')
    if (!c.env.MEDIA_BUCKET) missing.push('MEDIA_BUCKET (R2 bucket)')

    if (missing.length > 0) {
      console.error('[Startup] Missing required bindings:', missing.join(', '))
      return c.json(
        { error: 'Service unavailable: infrastructure misconfiguration' },
        500
      )
    }

    const accessTeam = (c.env as any).CF_ACCESS_TEAM_DOMAIN
    const jwtSecret = (c.env as any).JWT_SECRET
    if (!accessTeam && (!jwtSecret || jwtSecret === JWT_SECRET_HARDCODED_DEFAULT)) {
      console.error('[Startup] FATAL: set CF_ACCESS_TEAM_DOMAIN (Zero Trust) or JWT_SECRET for local dev')
      return c.json({
        error: 'Service unavailable: configure Cloudflare Access (CF_ACCESS_TEAM_DOMAIN) or JWT_SECRET'
      }, 500)
    }

    if (!(c.env as any).CACHE_KV) {
      console.warn('[Startup] CACHE_KV binding not configured — rate limiting disabled')
    }

    await next()
  }
}
