# Jenny Le Portfolio

Personal portfolio site built with React, TypeScript, Vite, Tailwind CSS, and Sass. It highlights experience, selected projects, and contact links in a compact single-page layout with light/dark theme support.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Sass
- ESLint + Prettier
- Vercel

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Scripts

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start the Vite development server          |
| `npm run build`        | Type-check and build the production bundle |
| `npm run preview`      | Serve the production build locally         |
| `npm run lint`         | Run ESLint                                 |
| `npm run lint:fix`     | Run ESLint and apply automatic fixes       |
| `npm run format`       | Format files with Prettier                 |
| `npm run format:check` | Check formatting with Prettier             |

## Project Structure

```text
src/
  components/       Page sections and shared UI components
  data/             Project and experience content
  styles/           Tailwind and Sass styles
  types/            Shared TypeScript types
public/
  images/           Portfolio assets
```

Key files:

- `src/App.tsx` composes the page sections.
- `src/components/Nav.tsx` contains navigation and theme toggling.
- `src/data/projects.ts` contains featured project content and links.
- `src/data/experience.ts` contains work experience and skills content.
- `vercel.json` configures rewrites for linked project demos.

## Updating Content

Most portfolio text is stored in React components or data files:

- Update project cards in `src/data/projects.ts`.
- Update roles, descriptions, and skill groups in `src/data/experience.ts`.
- Update contact links in `src/components/GetInTouch.tsx`.

## Deployment

The site is configured for Vercel. The production build command is:

```bash
npm run build
```

Vercel rewrites in `vercel.json` forward portfolio project demo paths to their hosted apps.
