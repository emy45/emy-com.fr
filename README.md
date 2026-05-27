# emy-com.fr — refonte 2026

Site vitrine d'Emy Communication, refondu sur **Astro 5 + Tailwind 4**, optimisé pour la performance.

## Stack

- **Astro 5** en mode statique (HTML pré-rendu, JS minimal)
- **Tailwind 4** (CSS-first config dans `src/styles/global.css`)
- **Sharp** pour la conversion automatique PNG/JPG → WebP au build
- **Adapter Vercel** : pages statiques + 1 fonction serverless (`/api/contact`)

## Démarrer

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # ./dist/ (statique + serverless)
npm run preview        # vérifier le build
```

## Structure

```
src/
  components/    Header, Footer, ContactForm, CategoryGrid, CaseStudy, …
  data/          site.ts (coordonnées, nav), realisations.ts (études de cas)
  layouts/       BaseLayout.astro (SEO, fonts, JSON-LD)
  pages/         13 pages statiques + api/contact.ts
  styles/        global.css (palette, typo, utilities)
public/images/   sources PNG (converties en WebP au build)
scripts/         optimize-images.mjs (Sharp)
```

## Performance

| Avant (WordPress + Divi) | Après (Astro statique) |
|---|---|
| JS : jQuery + Divi + ~10 plugins | JS : ~2 kB (menu mobile) |
| CSS : ~1 MB Divi compilé | CSS : ~20 kB Tailwind purgé |
| Images : 109 MB PNG non optimisés | Images : 6.5 MB WebP |
| HTML : généré PHP à chaque hit | HTML : pré-rendu, cache CDN |

Chaque page HTML pèse 13-25 kB gzip.

## Déploiement Vercel

1. `vercel link` (ou push sur un repo GitHub connecté à Vercel)
2. Vercel détecte Astro automatiquement
3. `vercel.json` contient :
   - redirections SEO depuis les anciennes URLs WordPress
   - en-têtes `Cache-Control immutable` sur les assets statiques
4. Le formulaire `/api/contact` est déployé comme fonction serverless

## Formulaire de contact

Le endpoint `src/pages/api/contact.ts` valide les champs côté serveur (captcha math + honeypot)
mais ne fait que logger pour l'instant. Pour envoyer un vrai email :

```ts
// 1. npm i resend
// 2. Variable d'env sur Vercel : RESEND_API_KEY
// 3. Décommenter le bloc Resend dans api/contact.ts
```

Autres options : SMTP via `nodemailer`, Sendgrid, ou Formspree (côté client uniquement).

## Notes éditoriales

- Toutes les anciennes URLs WordPress sont redirigées en 301 (`vercel.json`)
- Fautes de l'ancien site corrigées : `journeaux trismestriels` → `journaux trimestriels`,
  `commmerciale` → `commerciale`, `Saint Avertin` → `Saint-Avertin`
- Le formulaire est présent sur toutes les pages sauf `/realisations` (variante
  « Vous avez un projet ? ») et `/mentions-legales`
