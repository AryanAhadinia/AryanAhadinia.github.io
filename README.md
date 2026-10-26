# Aryan Ahadinia

My personal homepage, built with [Astro](https://astro.build/) on top of the
[AstroPaper](https://github.com/satnaing/astro-paper) theme by Sat Naing.
It is hosted on [GitHub Pages](https://pages.github.com/) at
[aryanahadinia.github.io](https://aryanahadinia.github.io).

## Local development

```bash
npm install
npm run dev      # dev server on http://localhost:4321
npm run build    # type-check, build to dist/, and index with Pagefind
npm run preview  # serve the production build
```

Requires Node 22.12 or newer.

## Where things live

| What                                          | Where                          |
| --------------------------------------------- | ------------------------------ |
| Site title, socials, feature flags, analytics | `astro-paper.config.ts`        |
| Home page bio and layout                      | `src/pages/index.astro`        |
| News posts                                    | `src/content/posts/*.md`       |
| Highlight entries                             | `src/data/timeline.ts`         |
| Publications list                             | `src/data/publications.ts`     |
| Publications page                             | `src/pages/publications.astro` |
| Paper thumbnails, portrait                    | `src/assets/images/`           |
| Institution logos                             | `src/assets/images/logos/`     |
| Post images                                   | `src/assets/images/posts/`     |
| Videos, other static files                    | `public/`                      |

### Adding a news item

Drop a Markdown file into `src/content/posts/`:

```markdown
---
author: Aryan Ahadinia
pubDatetime: 2026-09-01T09:00:00+02:00
title: Some news
featured: false
draft: false
description: One-line summary shown on the home page and in listings.
---

The body of the post.
```

The six most recent posts appear in the **News** section on the home page, and
every post is also reachable from `/posts`, `/archives`, the search page, and
`rss.xml`.

### Highlight

`src/data/timeline.ts` drives the **Highlight** section on the home page, newest
first. Each entry needs a `role`, `org`, optional `orgUrl`, a `period` such as
`Sep 2024 – Present`, and one or more `logos` imported from
`src/assets/images/logos/`. Each entry gets a square light tile so dark
wordmarks stay legible in dark mode; an entry with two logos stacks them in the
same tile.

### Adding a publication

Add an entry to the `publications` array in `src/data/publications.ts` and put
its thumbnail in `src/assets/images/papers/`. An optional `video` (a path under
`public/`) plays in place of the thumbnail.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages
on every push to `main`. The repository's **Settings → Pages → Build and
deployment → Source** must be set to **GitHub Actions**.

## License

The AstroPaper theme is MIT licensed — see
[satnaing/astro-paper](https://github.com/satnaing/astro-paper/blob/main/LICENSE).
Site content is © Aryan Ahadinia.
