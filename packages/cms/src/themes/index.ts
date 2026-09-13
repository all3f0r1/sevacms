/**
 * Public site themes.
 * A theme is CSS variables + a label. Switch via SITE_THEME (wrangler / Pages env).
 */
export type ThemeId = 'seva' | 'flare'

export interface Theme {
  id: ThemeId
  name: string
  description: string
}

export const themes: Record<ThemeId, Theme> = {
  seva: {
    id: 'seva',
    name: 'Seva',
    description: 'Thème temple — tons chauds, lisible, peu d’ornement',
  },
  flare: {
    id: 'flare',
    name: 'Flare',
    description: 'Thème amont (docs produit) — à n’utiliser que pour le dogfooding',
  },
}

export const DEFAULT_THEME: ThemeId = 'seva'

export function resolveTheme(raw?: string | null): ThemeId {
  if (raw === 'flare' || raw === 'seva') return raw
  return DEFAULT_THEME
}
