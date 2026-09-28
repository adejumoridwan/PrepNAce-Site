# PrepNAce Design System

PrepNAce uses a calm, academic visual language: deep green as the primary color, gold as a restrained accent, white/light neutral surfaces, readable charcoal text, editorial display type, and clean separators. The site retains the existing Astro + Tailwind system and class-based dark mode.

## Source Files

- `src/styles/global.css` - Tailwind v4 tokens and global styles.
- `src/layouts/Layout.astro` - shared shell, SEO metadata, structured data and dark-mode boot script.
- `src/assets/js/main.js` - menu, theme switch and AOS behavior.
- `src/components/sections/Header.astro` / `Footer.astro` - shared navigation and footer.

## Color Tokens

Defined in `src/styles/global.css`.

| Token | Value | Usage |
| --- | --- | --- |
| `--color-primary` | `#14543b` | Links, buttons, headings and primary controls |
| `--color-primary-strong` | `#0d402c` | Hover/pressed states |
| `--color-primary-light` | `#77b69a` | Readable light-mode/dark-mode accents |
| `--color-accent` | `#d3a943` | Focus accents, status borders and highlights |
| `--color-accent-light` | `#ecd58d` | Dark-mode gold highlights |
| `--color-bg-primary` | `#fbfcf9` | Light page canvas |
| `--color-bg-secondary` | `#fff` | Content surfaces |
| `--color-bg-primary-dark` | `#091b14` | Dark page canvas |
| `--color-bg-secondary-dark` | `#10271d` | Dark content surfaces |
| `--color-text-secondary` | `#34453c` | Body text |

Gold is an accent rather than a dominant background. Use existing neutral tokens for borders, metadata and muted content.

## Typography And Layout

- `--font-brand` (Instrument Serif) is reserved for display headings.
- `--font-sans` / `--font-body` (Inter) is used for body copy, navigation, forms and labels.
- `.site-container` is the main section width (`1200px` maximum); `.inner-container` is for narrow reading layouts (`800px`).
- Keep headings readable on mobile and avoid negative tracking.
- Prefer restrained borders and low-radius repeated items; avoid nested cards and decorative gradients.

## Dark Mode And Motion

Dark mode is class-based and stored in `localStorage` under `dark_mode`. The page canvas is near-black green, surfaces are dark green, body text is light, and gold remains an accent. Keep contrast accessible in both modes.

AOS is initialized in `src/assets/js/main.js`. Use existing reveal attributes sparingly and respect `prefers-reduced-motion`. CSS should handle simple state changes; do not add a frontend framework for small interactions.

## Components

Reuse the existing Astro component system where practical:

- `components/ui/Logo.astro` renders the text-only PrepNAce wordmark. Do not redraw the unavailable graphical logo.
- `components/ui/ComingSoon.astro` renders the consistent unavailable state.
- `components/cards/BlogCard.astro` and `components/sections/BlogSection.astro` render MDX blog content.
- `components/sections/Header.astro` reads menu data from `src/config/site.js` and supports keyboard/mobile dropdowns.
- `components/sections/Footer.astro` reads products and configured social URLs from the same config.

Use semantic HTML, labeled inputs, visible keyboard focus, accessible disclosure controls and proper external link `rel` attributes.
