# PrepNAce

**Academic Excellence & Success**  
Learn. Prepare. Grow. Succeed.

PrepNAce is an education and student-development website built with Astro. It brings together teaching and coaching, exam preparation, learning resources, products and student growth.

## Development

Requirements: Node.js `>=22.12.0` and pnpm `>=9`.

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The development server uses port `5200`. Set `PUBLIC_SITE_URL` to the canonical production site origin before deployment. Analytics environment variables are optional.

## Adding Content

### Products

Edit the centralized product catalog in `src/config/site.js`. A coming-soon item should have an empty `url` and `status: "coming-soon"`; its local detail route is generated from its stable `slug`. When an actual destination is ready, set its URL and `status: "available"`.

Products are PrepNAce Mobile App, PrepNAce POST-UTME, CountDown, PrepNAce Store, PrepNAce Skills and PrepNAce Opportunity.

### PDF resources

Place PDF files under `public/resources/`, then add one metadata entry to `src/data/resources.js`:

```js
{
  slug: "introduction-to-algebra",
  title: "Introduction to Algebra",
  subject: "Mathematics",
  topic: "Algebra",
  description: "A short introduction to algebraic concepts.",
  file: "/resources/mathematics/algebra/introduction-to-algebra.pdf"
}
```

Search and subject/topic filters are generated from this metadata. The resource directory currently has no supplied PDF files.

### Blog posts

Add MDX at `src/content/post/<slug>/index.mdx`. Include `title`, `description`, `publishDate`, `author`, `category`, and `tags`; `img`, `img_alt`, `featured`, and `read` are optional.

### Social and contact details

Set contact and social URLs in `src/config/site.js`. Empty social URLs are omitted automatically. The contact form sends directly through Formspree when its endpoint is configured.

Create a form in Formspree for `admin@prepnace.com`, confirm the recipient address, and copy the endpoint URL. Add it to your local `.env` file:

```env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Restart the dev server or rebuild/redeploy after changing the endpoint. The endpoint is public; do not put a private API key in a `PUBLIC_` variable. Without an endpoint, the form works locally by opening a prefilled draft in the visitor's default email app. The visitor still needs to review and send that draft.

## Project Notes

- Astro static output; no database, authentication service, CMS or self-hosted email backend.
- Styling uses Tailwind CSS v4 theme tokens in `src/styles/global.css`.
- Site identity, products and navigation live in `src/config/site.js`.
- Design guidance: `docs/DESIGN.md`; current scope: `docs/PRD.md`.
- The workspace did not include the supplied graphical logo. The header uses a text-only wordmark until the real image asset is added.
