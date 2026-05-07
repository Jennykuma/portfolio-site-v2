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
		period: 'september 2025-present',
		description: [
			'Built and maintained complex UI components for enterprise security workflows using React, TypeScript, and React Query',
			'Drove refactors during migration to a new component system, improving consistency and long-term maintainability across micro-applications.',
			'Increased frontend test coverage for micro-applications from ~80% to 91%, reducing regression risk and improving release confidence',
			'Ramped up quickly on a new product team and delivered production-ready features in the first sprint, using AI-assisted development (Codex) to accelerate legacy-page migration',
		],
		skills: ['React.js', 'TypeScript', 'React Query', 'Cypress', 'SASS', 'Codex'],
	},
	{
		company: 'Cisco Secure Endpoint',
		role: 'Intermediate Software Developer',
		period: 'january 2020-september 2025',
		description: [
			'Developed reusable frontend features in React and TypeScript for large-scale security customers',
			'Partnered with Ruby on Rails backend teams to integrate APIs and deliver data-rich UI, including MITRE ATT&CK-related views',
			'Improved reliability through stronger test automation with Jest and Cypress',
		],
		skills: ['React.js', 'Vue.js', 'D3.js', 'Jest', 'Ruby on Rails', 'Capybara', 'SASS'],
	},
	{
		company: 'CNOOC International',
		role: 'Intern Software Developer',
		period: 'may 2018-august 2019',
		description: [
			'Built a production web app to visualize oil well data, reducing manual search time for technical teams',
			'Improved query performance and usability with interactive visualizations',
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'Google Charts', 'SQL', 'Figma'],
	},
];

export const otherSkills: SkillGroup[] = [
	{
		category: 'Frontend',
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
		category: 'Backend',
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
		category: 'Web & UI',
		skills: ['Responsive Design', 'UX & UI Design', 'User Research'],
	},
	{
		category: 'Testing & Quality',
		skills: ['Jest', 'Vitest', 'Cypress', 'Capybara', 'SonarQube'],
	},
	{
		category: 'Tools',
		skills: ['Git', 'Jira', 'Figma', 'Docker', 'CI/CD', 'AI-Assisted Development'],
	},
];
