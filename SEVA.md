# SevaCMS — conventions

Fork Flare/SonicJS recentré sur un temple.

## Stack figée (Cloudflare only)

- Compute : Workers
- Données : D1
- Médias : R2 (`MEDIA_BUCKET`)
- Cache : KV (`CACHE_KV`)
- Front : Pages / Astro
- Auth admin : **Cloudflare Access uniquement**

Pas de S3, pas de stockage local, pas de Postgres/Turso, pas de login mot de passe / OTP / magic-link en production.

## Auth

1. Créer une application Access sur `admin.` (et le Worker).
2. `CF_ACCESS_TEAM_DOMAIN = <team>.cloudflareaccess.com`
3. En local : `CF_ACCESS_DEV_EMAIL` dans `.dev.vars`

Le header `Cf-Access-Authenticated-User-Email` devient l’identité éditeur.

## Thèmes

`SITE_THEME=seva` (défaut) ou `flare`.
Tokens : `packages/site/src/themes/`.

## Templates d’articles

Collections + pages Astro du même nom :

| Collection | URL | Usage |
|---|---|---|
| `annonces` | `/annonces/[slug]` | texte court |
| `ceremonies` | `/ceremonies/[slug]` | date, lieu, affiche |
| `enseignements` | `/enseignements/[slug]` | intervenant, texte, audio |

Ajouter un template = 1 fichier `packages/cms/src/collections/*.collection.ts` + 1 page Astro + 1 entrée dans `live.config.ts` et `article-templates.ts`.
