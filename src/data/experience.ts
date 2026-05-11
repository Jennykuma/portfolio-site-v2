export type Experience = {
	company: string;
	role: string;
	period: string;
	description: string[];
	skills: string[];
};

export type SkillGroup = {
	category: string;
	skills: string[];
};

export const experience: Experience[] = [
	{
		company: 'Cisco Secure Access',
		role: 'Intermediate Software Developer',
		period: 'sept 2025 — present',
		description: [
			'Built and maintained complex UI components for enterprise security workflows using React, TypeScript, and TanStack Query',
			'Drove refactors during migration to a new component system, improving consistency and long-term maintainability across micro-applications',
			'Increased frontend test coverage for micro-applications from ~80% to 91%, reducing regression risk and improving release confidence',
			'Ramped up quickly on a new product team and delivered production-ready features in the first sprint, using AI-assisted development (Codex) to accelerate legacy-page migration',
		],
		skills: ['React.js', 'TypeScript', 'TanStack Query', 'Cypress', 'Codex'],
	},
	{
		company: 'Cisco Secure Endpoint',
		role: 'Intermediate Software Developer',
		period: 'jan 2020 — sept 2025',
		description: [
			'Developed reusable frontend features in React and TypeScript for large-scale security customers',
			'Partnered with Ruby on Rails backend teams to integrate APIs and deliver data-rich UI, including MITRE ATT&CK-related views',
			'Improved reliability through stronger test automation with Jest and Cypress',
		],
		skills: [
			'React.js',
			'Vue.js',
			'Google Analytics',
			'D3.js',
			'Jest',
			'Ruby on Rails',
			'Capybara',
		],
	},
	{
		company: 'CNOOC International',
		role: 'Intern Software Developer',
		period: 'may 2018 — aug 2019',
		description: [
			'Built a production web app to visualize oil well data, reducing manual search time for technical teams',
			'Improved query performance and usability with interactive visualizations',
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'Google Charts', 'SQL', 'Figma'],
	},
];

export const otherSkills: SkillGroup[] = [
	{
		category: 'frontend',
		skills: [
			'JavaScript',
			'TypeScript',
			'React',
			'Vue',
			'HTML',
			'SASS',
			'Tailwind CSS',
			'TanStack Query',
		],
	},
	{
		category: 'backend',
		skills: [
			'REST APIs',
			'Node.js',
			'Ruby on Rails',
			'Fastify',
			'Prisma',
			'PostgreSQL',
			'Authentication (JWT/OAuth)',
		],
	},
	{
		category: 'web & ui',
		skills: ['Responsive Design', 'UX & UI Design', 'User Research'],
	},
	{
		category: 'testing & quality',
		skills: ['Jest', 'Vitest', 'Cypress', 'Capybara', 'SonarQube'],
	},
	{
		category: 'tools',
		skills: ['Git', 'Jira', 'Figma', 'Docker', 'CI/CD', 'AI-Assisted Development'],
	},
];
