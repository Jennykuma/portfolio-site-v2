# Setting up the blog (jennyle.dev/blog)

A step-by-step guide to standing up a separate Astro blog, styled to match this
portfolio, and connecting it at `/blog` on the same domain.

For the reasoning behind these choices (separate repo + Astro + path rewrite
instead of a subdomain or building it into this SPA), see the plan this guide
was generated from.

## 1. Scaffold the new project

In a new directory, outside this repo:

```bash
npm create astro@latest jenny-blog -- --template minimal --typescript strict
cd jenny-blog
npx astro add tailwind
# Only if you want interactive React components later; otherwise skip.
npx astro add react
```

Create a new GitHub repo (e.g. `jenny-blog`) and push this project to it.

## 2. Base path config

So the deployed URL matches the `/blog` prefix the rewrite (step 9) will
target — same trick this repo already uses for `kuma-recipes` in
`vercel.json`.

`astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	site: 'https://jennyle.dev',
	base: '/blog',
	integrations: [tailwind()],
});
```

## 3. Match the portfolio's design system

**Colors + fonts** — add to the project's Tailwind entry CSS (e.g.
`src/styles/global.css`), copied from `portfolio-site-v2/src/styles/tailwind.css`:

```css
@import 'tailwindcss';

@theme {
	--color-sage: #8cae73;

	--font-poppins: 'Poppins', 'sans-serif';
	--font-serif-display: 'DM Serif Display', 'sans-serif';
}

@custom-variant dark (&:where(.dark, .dark *));

@layer base {
	* {
		@apply transition-colors duration-300 ease-in-out;
	}

	a,
	a * {
		@apply transition-none;
	}
}
```

**Fonts + dark-mode pre-hydration script** — add to the `<head>` of the shared
`Layout.astro`, copied from `portfolio-site-v2/index.html`:

```astro
---
---
<html lang="en">
	<head>
		<script is:inline>
			const saved = localStorage.theme;
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const theme = saved ?? (prefersDark ? 'dark' : 'light');

			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		</script>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
		/>
		<slot name="head" />
	</head>
	<body class="bg-white text-zinc-700 dark:bg-zinc-800 dark:text-gray-200 min-h-screen py-2">
		<div class="max-w-2xl mx-auto px-4">
			<slot />
		</div>
	</body>
</html>
```

**Theme toggle** — because `/blog` shares an origin with the portfolio (it's a
path rewrite, not a subdomain), reading/writing the same `localStorage.theme`
key means a visitor's preference carries over between the two automatically.
Reuse the toggle logic from `portfolio-site-v2/src/components/Nav.tsx`
(`changeTheme`) if you add a React toggle button, or a small inline script if
you keep the blog framework-agnostic:

```js
function changeTheme() {
	const html = document.documentElement;
	const newTheme = html.classList.contains('dark') ? 'light' : 'dark';
	html.classList.toggle('dark');
	localStorage.theme = newTheme;
}
```

**Layout conventions** — `max-w-2xl mx-auto px-4` container, `rounded-full`
pill tags for post tags, sage (`text-sage` / `hover:text-sage`) for links and
accents, lowercase heading voice to match "about" / "jenny le / ui developer".

**Branding** — link back to the portfolio from the blog header (e.g. "jenny's
corner" or similar), reuse `/favicon.svg`, and add `og:`/`twitter:` meta tags
per post since posts are meant to be shared (the portfolio doesn't have these
yet, but the blog should).

## 4. Content collections

`src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
```

Posts live in `src/content/blog/`, one markdown file per post, e.g.
`src/content/blog/2026-07-07-big-o-refresher.md`:

```md
---
title: 'Refreshing Big-O before interviews'
description: 'Notes on time/space complexity I keep forgetting.'
pubDate: 2026-07-07
tags: ['algorithms', 'interview-prep']
---

Post content here...
```

## 5. Pages

- `src/pages/index.astro` — post list, newest first, filters out `draft: true`,
  using `getCollection('blog')`.
- `src/pages/[...slug].astro` — post detail page via `getStaticPaths()` +
  `render()` on the collection entry.

Both use the shared `Layout.astro` from step 3.

## 6. RSS + sitemap

```bash
npx astro add sitemap
```

`src/pages/rss.xml.js`:

```js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return rss({
		title: "jenny's corner — blog",
		description: 'Notes from senior software engineering interview prep.',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.slug}/`,
		})),
	});
}
```

## 7. Authoring workflow

Once deployed (step 9), publishing a new post is:

1. Add a new `.md` file to `src/content/blog/`.
2. Fill in the frontmatter (`title`, `description`, `pubDate`, `tags`).
3. Commit and push — Vercel auto-deploys on push.

## 8. Deploy to Vercel

- Create a new Vercel project pointed at the `jenny-blog` repo.
- Framework preset: **Astro**.
- Build command: `npm run build`.
- Output directory: `dist`.
- Do **not** attach a custom domain to this project — the rewrite in step 9
  handles routing from `jennyle.dev`.

## 9. Connect it to jennyle.dev/blog (do this last)

Once the blog is deployed and you know its `*.vercel.app` URL, add to
**this repo's** `vercel.json` (matching the existing `kuma-recipes` rewrites):

```json
{
	"rewrites": [
		{ "source": "/blog", "destination": "https://<blog-project>.vercel.app/blog" },
		{ "source": "/blog/:match*", "destination": "https://<blog-project>.vercel.app/blog/:match*" }
	]
}
```

Add these entries alongside the existing `kuma-recipes` rewrites (don't
replace them), then deploy this repo. Verify `jennyle.dev/blog` resolves
without a 404 and that toggling dark mode there matches the portfolio's saved
preference.
