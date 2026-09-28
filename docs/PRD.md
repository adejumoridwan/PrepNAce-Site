# PrepNAce Website PRD

## Positioning

PrepNAce is an education and student-development brand helping learners build knowledge, prepare for examinations, develop useful skills and achieve academic success. It serves secondary students, university applicants, university students, parents and learners interested in practical skills.

The site should feel professional, modern, academic, trustworthy and approachable. PrepNAce is broader than examination preparation and clearly labels products that are still being developed.

**Tagline:** Academic Excellence & Success  
**Core message:** Learn. Prepare. Grow. Succeed.

## Current Scope

The site is static-first and uses Astro 6, Tailwind CSS v4, Astro Content Layer/MDX, Lucide icons and minimal browser JavaScript. It has no database, authentication, CMS or self-hosted email backend. Contact submissions are sent through Formspree when configured.

Current first-party routes:

- `/` - education ecosystem overview and featured app
- `/teaching-coaching/` - teaching, coaching, study skills and mentorship
- `/exam-prep/` - JAMB, WAEC, NECO, POST-UTME and CBT preparation
- `/products/` and `/products/[slug]/` - all PrepNAce products and offerings
- `/resources/` and `/resources/[slug]/` - static PDF library
- `/blog/`, `/blog/[slug]/`, `/blog/page/[page]/` - MDX educational articles
- `/about/`, `/contact/`, `/404`, `/rss.xml`

Retired template routes redirect in `astro.config.mjs`.

## Central Configuration

`src/config/site.js` owns identity, metadata, contact, social URLs, the product catalog and navigation. Product slugs/statuses/destinations are maintained centrally. Social links with empty URLs are not rendered. Placeholder URLs remain empty; no broken external URLs are published.

Products:

- PrepNAce Mobile App - Available
- PrepNAce POST-UTME - Coming Soon
- CountDown - Coming Soon
- PrepNAce Store - Coming Soon
- PrepNAce Skills - Coming Soon
- PrepNAce Opportunity - Coming Soon

Unavailable products display the exact message: “Still building, Come back later.”

## Content Maintenance

Blog posts live at `src/content/post/<slug>/index.mdx`. The schema supports title, description, date, author, category, tags, optional featured image and reading time.

PDF files belong under `public/resources/`. Add each resource once to `src/data/resources.js` with title, subject, topic, description, slug and public PDF URL. Subject/topic filters are generated from metadata and reflected in URL parameters. Do not create database or CMS dependencies.

The contact form submits directly to the configured Formspree endpoint. Set `PUBLIC_FORMSPREE_ENDPOINT` in the deployment environment. Without it, the form shows a setup message and provides the configured email address as a fallback.

## Brand And SEO

The visual palette is deep academic green, restrained gold, white/light neutral, and charcoal. Dark mode uses very dark green with light text and gold accents. The header wordmark is text-only until the actual logo image is available.

Astro generates the sitemap; shared metadata includes route-specific canonical URLs, Open Graph/Twitter fields when image/handle values are configured, and EducationalOrganization/WebSite structured data. Blog articles emit BlogPosting structured data. Set `PUBLIC_SITE_URL` to the production domain before deployment.

No PrepNAce logo image or PDF files were present in the workspace during implementation. Add the supplied brand image and real PDFs when available; do not use inherited template graphics in their place.
