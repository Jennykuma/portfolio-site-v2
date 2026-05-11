export type Project = {
	title: string;
	period: string;
	description: string;
	skills: string[];
};

export const projects: Project[] = [
	{
		title: 'kuma recipes',
		period: 'jan 2026 - present',
		description:
			'A cozy recipe notetaking app built with React, designed to help store recipes, notes and photos in one place. It uses a simple and intuitive interface without unecessary scrolling, with a focus on ease of use and organization. The app allows users to create and manage their own recipe collections, making it easy to find and share recipes with friends and family.',
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
	},
	{
		title: 'ui patterns playground',
		period: 'dec 2025 - present',
		description:
			'A React + TypeScript playground for building and testing reusable UI interaction patterns with local state isolation and accessibility basics. The project implements components like debounced search, click-outside dropdown, keyboard-accessible toggle, and modal behavior, focusing on event handling, keyboard interactions, and clean component composition',
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
	},
	{
		title: 'night market discord bot',
		period: 'jul 2022 - aug 2024',
		description:
			'A TypeScript Discord bot for a 400-member Lost Ark community server (“Night Market”). It provides slash commands for server status and crystal price lookups via external APIs, posts rich embed responses with images, and runs an automated weekly shop-reminder on a cron schedule.',
		skills: [
			'TypeScript',
			'Node.js',
			'discord.js',
			'moment',
			'cron',
			'REST API (axios)',
			'dotenv',
			'Heroku',
		],
	},
];
