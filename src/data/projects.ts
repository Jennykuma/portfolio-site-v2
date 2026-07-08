import { type Project } from '../types/types';

export const projects: Project[] = [
	{
		title: 'kuma recipes',
		period: 'jan 2026 — present',
		description: [
			'Architected and shipped a full-stack recipe journal with **end-to-end ownership** across frontend, REST API, database schema, and authentication, including **AI-powered recipe parsing** using the **Anthropic API**',
			'Built a **Research & Design Lab** letting users spin off recipe variants, log attempts with ratings and notes, and pin annotations to specific ingredients and steps',
			'Enabled users to **create, edit, delete, search, filter, and share recipes** through unique links, backed by **Prisma, PostgreSQL, and Supabase**',
		],
		skills: [
			'React',
			'TypeScript',
			'Fastify',
			'Prisma',
			'Supabase',
			'Clerk',
			'PostgreSQL',
			'Anthropic API',
		],
		github: 'https://github.com/Jennykuma/kuma-recipes/tree/main#kuma-recipes',
		demo: '/kuma-recipes',
		screenshots: [
			{
				src: '/images/projects/kuma-recipes/home.png',
				thumbSrc: '/images/projects/kuma-recipes/home-thumb.jpg',
				alt: 'Screenshot of the recipe list page with search and filter tags',
			},
			{
				src: '/images/projects/kuma-recipes/recipe-details.png',
				thumbSrc: '/images/projects/kuma-recipes/recipe-details-thumb.jpg',
				alt: 'Screenshot of the individual recipe page with ingredients, instructions, steps, and notes',
			},
			{
				src: '/images/projects/kuma-recipes/rd-lab.png',
				thumbSrc: '/images/projects/kuma-recipes/rd-lab-thumb.jpg',
				alt: 'Screenshot of the R&D Lab interface for tracking recipe variants, notes, and attempt logs',
			},
			{
				src: '/images/projects/kuma-recipes/tag-design.jpeg',
				thumbSrc: '/images/projects/kuma-recipes/tag-design-thumb.jpg',
				alt: 'Screenshot of the recipe tag design exploration with category chips',
			},
		],
	},
	{
		title: 'ui patterns playground',
		period: 'jan 2026 — present',
		description: [
			'Built and documented a **Storybook component library** covering design tokens and **ARIA-compliant React patterns**, including modals, tooltips, tabs, toasts, and form inputs',
			'Implemented all **7 components from scratch** with no third-party UI libraries, owning **keyboard navigation and focus management** end-to-end',
		],
		skills: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Accessibility / a11y',
			'ARIA',
			'Keyboard Navigation',
			'Focus Management',
		],
		github: 'https://github.com/Jennykuma/ui-patterns-playground#ui-interactions-playground',
		demo: 'https://storybook.jennyle.dev',
		screenshots: [
			{
				src: '/images/projects/ui-patterns-playground/home.png',
				thumbSrc: '/images/projects/ui-patterns-playground/home-thumb.jpg',
				alt: 'Screenshot of the UI patterns playground homepage',
			},
			{
				src: '/images/projects/ui-patterns-playground/storybook.png',
				thumbSrc: '/images/projects/ui-patterns-playground/storybook-thumb.jpg',
				alt: 'Screenshot of the Storybook documentation view for the DebouncedSearch component with its controls panel',
			},
		],
	},
	{
		title: 'night market discord bot',
		period: 'jul 2022 — aug 2024',
		description: [
			'Owned full lifecycle delivery of a bot serving a **400-member Discord community**, including automated reminders, slash commands, and **external API integrations** transformed into rich embeds',
			'Managed **scheduled cron job reliability** and hosted runtime operations on Heroku over a **two-year** maintenance lifecycle',
		],
		skills: ['TypeScript', 'Node.js', 'discord.js', 'REST APIs', 'Scheduled Jobs', 'Heroku'],
		github:
			'https://github.com/Jennykuma/night-market-discord-bot/tree/main#night-market-discord-bot',
		demo: '',
		screenshots: [
			{
				src: '/images/projects/night-market-discord-bot/server-status.png',
				thumbSrc: '/images/projects/night-market-discord-bot/server-status-thumb.jpg',
				alt: 'Screenshot of the server status command showing rich embed with server status',
			},
			{
				src: '/images/projects/night-market-discord-bot/shop-reminder.png',
				thumbSrc: '/images/projects/night-market-discord-bot/shop-reminder-thumb.jpg',
				alt: 'Screenshot of the shop reminder command showing rich embed with weekly shop/task reminders',
			},
			{
				src: '/images/projects/night-market-discord-bot/crystal-price.png',
				thumbSrc: '/images/projects/night-market-discord-bot/crystal-price-thumb.jpg',
				alt: 'Screenshot of the crystal price command showing rich embed with current blue crystal currency pricing',
			},
		],
	},
];
