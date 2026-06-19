import { type Project } from '../types/types';

export const projects: Project[] = [
	{
		title: 'kuma recipes',
		period: 'jan 2026 — present',
		description: [
			'Built an **accessible full-stack recipe application** using **React, Fastify, Prisma, Clerk, and PostgreSQL**',
			'Enabled users to **create, edit, delete, search, filter, and share recipes** through unique links',
			'Designed low-friction recipe browsing and management flows for day-to-day usability',
			'Owned architecture **end-to-end** across frontend, API, database models, and authentication',
		],
		skills: ['React', 'TypeScript', 'Fastify', 'Prisma', 'Clerk', 'PostgreSQL'],
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
				src: '/images/projects/kuma-recipes/add-tags.png',
				thumbSrc: '/images/projects/kuma-recipes/add-tags-thumb.jpg',
				alt: 'Screenshot of the add tags interface',
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
			'Built a **react playground** for reusable accessibility patterns featuring **focus management, keyboard navigation, and ARIA-compliant UI components**',
			'Implemented interaction patterns including **modals, tooltips, tabs, and toasts**',
			'Used the project as a focused environment to validate accessible frontend behaviors before product integration',
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
		],
	},
	{
		title: 'night market discord bot',
		period: 'jul 2022 — aug 2024',
		description: [
			'**Supported a 400-member Discord community** with automated reminders and utility slash commands',
			'Integrated **external game-status and pricing APIs**, then transformed responses into rich embeds',
			'Managed **reliability of scheduled cron jobs** and hosted runtime operations on Heroku',
			'Owned feature delivery, bot maintenance, and production updates over a **two-year lifecycle**',
		],
		skills: ['TypeScript', 'Node.js', 'discord.js', 'REST APIs', 'Scheduled Jobs', 'Heroku'],
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
