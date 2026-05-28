import { type Project } from '../types/types';

export const projects: Project[] = [
	{
		title: 'kuma recipes',
		period: 'jan 2026 - present',
		description: [
			'Built a **full-stack recipe app** that centralizes recipes, notes, and photos in one workflow',
			'Implemented **tagging and search features** to quickly find recipes by name or custom labels',
			'Designed low-friction navigation to reduce scrolling and speed up recipe reference during cooking',
			'Owned architecture **end-to-end** across React frontend, Fastify API, Prisma models, and PostgreSQL',
			'Integrated auth, routing, and data-fetching layers (Clerk, React Router, TanStack Query)',
		],
		skills: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Vite',
			'Fastify',
			'Prisma',
			'PostgreSQL',
			'Clerk',
			'TanStack Query',
			'React Router',
			'Vitest',
			'Docker',
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
				src: '/images/projects/kuma-recipes/create-recipe.png',
				thumbSrc: '/images/projects/kuma-recipes/create-recipe-thumb.jpg',
				alt: 'Screenshot of the create recipe form with fields and image upload',
			},
			{
				src: '/images/projects/kuma-recipes/recipe-details.png',
				thumbSrc: '/images/projects/kuma-recipes/recipe-details-thumb.jpg',
				alt: 'Screenshot of the individual recipe page with ingredients, instructions, steps, and notes',
			},
			{
				src: '/images/projects/kuma-recipes/add-tags.png',
				thumbSrc: '/images/projects/kuma-recipes/add-tags-thumb.jpg',
				alt: 'Screenshot of the add tags interface',
			},
		],
	},
	{
		title: 'ui patterns playground',
		period: 'dec 2025 - present',
		description: [
			'Created a **reusable interaction lab** to validate UI patterns before shipping to product code',
			'Implemented **non-trivial behaviors** including debounced search, click-outside handling, and modal focus flows',
			'Applied **accessibility-first patterns** for keyboard navigation and predictable state transitions',
			'Drove **component design and code quality conventions** as sole owner of the codebase',
		],
		skills: [
			'React',
			'TypeScript',
			'Vite',
			'Tailwind CSS',
			'UI interaction patterns',
			'Accessibility (a11y) basics',
			'Event handling (keyboard/mouse/document listeners)',
			'Component architecture',
			'ESLint + Prettier',
		],
		github: 'https://github.com/Jennykuma/ui-patterns-playground#ui-interactions-playground',
		demo: '/ui-patterns-playground',
		screenshots: [
			{
				src: '/images/projects/ui-patterns-playground/home.png',
				thumbSrc: '/images/projects/ui-patterns-playground/home-thumb.jpg',
				alt: 'Screenshot of the UI patterns playground homepage',
			},
		],
	},
	{
		title: 'night market discord bot',
		period: 'jul 2022 - aug 2024',
		description: [
			'**Supported a 400-member Discord community** with automated reminders and utility slash commands',
			'Integrated **external game-status and pricing APIs**, then transformed responses into rich embeds',
			'Managed **reliability of scheduled cron jobs** and hosted runtime operations on Heroku',
			'Owned feature delivery, bot maintenance, and production updates over a **two-year lifecycle**',
		],
		skills: [
			'TypeScript',
			'Nodejs',
			'discordjs',
			'moment',
			'cron',
			'REST API (axios)',
			'dotenv',
			'Heroku',
		],
		github: 'https://github.com/Jennykuma/night-market-discord-bot/tree/main#night-market-discord-bot',
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
