# CLAUDE.md

Working context and conventions for AI coding assistants in this repository.

## Project

PrepNAce is a static-first education and student-development website built with Astro, Tailwind CSS v4, MDX, and reusable components. It covers teaching and coaching, exam preparation, resources, products, student growth, and blog content. It is not a backend SaaS product.

Primary references:

- `docs/PRD.md` - implemented site scope and content rules.
- `docs/DESIGN.md` - design tokens and UI conventions.

## Stack And Commands

| Area | Implementation |
| --- | --- |
| Framework | Astro 6 |
| Styling | Tailwind CSS v4 and CSS custom properties |
| Content | Astro Content Layer and MDX |
| Icons | `@lucide/astro` |
| SEO | Astro sitemap/RSS and shared metadata layout |
| Type checking | `astro check` |
| Dev server | port 5200 |

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm check
```

`pnpm build` runs Astro diagnostics and the static production build. `pnpm check` applies Biome fixes across the repository; inspect the diff before using it.

## Important Files

- `src/config/site.js` - brand identity, contact/social details, products, and navigation.
- `src/data/resources.js` - metadata entries for static PDF resources.
- `src/content.config.js` - blog and changelog collection schemas.
- `src/content/post/<slug>/index.mdx` - blog articles.
- `src/components/sections/Header.astro` and `Footer.astro` - shared navigation/footer.
- `src/components/ui/ComingSoon.astro` - reusable unavailable state.
- `src/styles/global.css` - Tailwind v4 theme and PrepNAce design tokens.
- `src/layouts/Layout.astro` and `Meta.astro` - global shell, canonical/SEO metadata and structured data.
- `public/resources/` - static PDF files.

## Routes

- `/`, `/about/`, `/contact/`
- `/teaching-coaching/`, `/exam-prep/`
- `/products/`, `/products/[slug]/`
- `/resources/`, `/resources/[slug]/`
- `/blog/`, `/blog/[slug]/`, `/blog/page/[page]/`
- `/rss.xml`, `/404`

Old SaaS-template routes redirect to relevant PrepNAce pages or home through `astro.config.mjs`.

## Configuration Rules

- Add/edit products only in `src/config/site.js`. Keep each stable `slug`, description, destination URL, and `status` together.
- Coming-soon destinations use an empty `url`; the UI routes to its generated local detail page. When a destination is real, set its URL and change status to `available`.
- Products include PrepNAce Mobile App, PrepNAce POST-UTME, CountDown, PrepNAce Store, PrepNAce Skills, and PrepNAce Opportunity.
- Social URLs start empty. Render social links only when configured. External links use `target="_blank"` with `rel="noopener noreferrer"`.
- Add a PDF under `public/resources/` and one metadata entry to `src/data/resources.js`. Do not invent or link to files that do not exist. Resource filters are static and serialize filters in URL query parameters.
- Blog posts use `src/content/post/`; add title, description, publish date, author, category, tags, optional image and reading time.
- Do not add authentication, database, or CMS without an explicit request. Contact submissions use Formspree via `PUBLIC_FORMSPREE_ENDPOINT`; keep its endpoint configurable and never expose private API keys in public variables.

## Design Rules

- Brand palette: deep green `#14543b`, gold `#d3a943`, white/light neutral backgrounds, charcoal text. Gold is an accent, not a dominant fill.
- Keep dark mode green-black with readable light text and restrained gold accents.
- Use existing tokens/components, semantic HTML, visible focus states, keyboard-operable dropdowns, and `prefers-reduced-motion` support.
- Keep pages responsive; check long navigation labels and mobile menu behavior.
- The logo graphic was not included in the workspace. Use the text wordmark in `Logo.astro`; do not recreate the supplied graphical logo.
- Do not use old RicoFast assets/copy, demo pricing, fake auth, or unsupported public claims.

## Before And After Changes

Read the owning route/component first and preserve unrelated working-tree changes. Run `pnpm build` for route/content/type changes. For visual work, inspect desktop and mobile in a browser. Keep documentation consistent with the shipped behavior.
