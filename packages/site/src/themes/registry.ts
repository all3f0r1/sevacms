export type ThemeId = 'seva' | 'flare'

export function resolveTheme(raw?: string | null): ThemeId {
  return raw === 'flare' ? 'flare' : 'seva'
}
