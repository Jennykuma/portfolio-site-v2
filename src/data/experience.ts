import { type Experience, type SkillGroup } from '../types/types';

export const experience: Experience[] = [
	{
		company: 'Cisco Secure Access',
		role: 'Software Developer',
		period: 'sept 2025 — present',
		description: [
			'Built and maintained complex UI components for enterprise security workflows using **React, TypeScript, Redux, and TanStack Query**',
			'Contributed to migration toward a **shared component system**, improving consistency, scalability, and long-term maintainability across frontend micro-applications',
			'Increased automated frontend test coverage from approximately **80% to 91%**, reducing regression risk and improving release confidence',
			'Delivered production-ready features after ramping up quickly, leveraging **AI-assisted development** to accelerate implementation and legacy-page migration',
			'Collaborated closely with backend engineers to integrate **REST APIs** and build responsive, data-driven user experiences',
		],
		skills: ['React.js', 'TypeScript', 'TanStack Query (React Query)', 'Cypress', 'Codex'],
	},
	{
		company: 'Cisco Secure Endpoint',
		role: 'Software Developer',
		period: 'jan 2020 — sept 2025',
		description: [
			'Developed reusable and accessible frontend features in React and TypeScript for **Cisco Secure Endpoint**, a cybersecurity platform serving **300,000+ customers** worldwide',
			'Partnered with Ruby on Rails backend teams to integrate APIs and deliver data-rich UI, including **MITRE ATT&CK**-related views',
			'Contributed to frontend modernization initiatives, including **reusable component architecture**, UI rebuilds, and migration toward more scalable design patterns',
			'Improved reliability through stronger test automation with **Jest, Cypress, and Capybara**',
		],
		relatedLink: {
			label: 'View public MITRE ATT&CK evaluation screenshots',
			href: 'https://evals.mitre.org/results/enterprise?vendor=cisco&evaluation=wizard-spider-sandworm&scenario=1&view=individualParticipant',
		},
		skills: [
			'React.js',
			'Vue.js',
			'TanStack Query (React Query)',
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
			'Built a production web application to visualize large-scale oil well data, reducing manual search time for technical teams',
			'Improved data-loading performance and usability through optimized queries and interactive visualizations',
			'Conducted interface research, analyzed datasets containing **1M+ rows**, and designed wireframes and prototypes using **Figma**',
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'Google Charts', 'SQL', 'Figma'],
	},
];

export const otherSkills: SkillGroup[] = [
	{
		category: 'frontend',
		skills: [
			'React',
			'TypeScript',
			'JavaScript',
			'TanStack Query (React Query)',
			'Redux',
			'Vue.js',
			'Tailwind CSS',
			'Vite',
		],
	},
	{
		category: 'backend',
		skills: [
			'REST APIs',
			'Ruby on Rails',
			'Node.js',
			'Fastify',
			'Prisma',
			'PostgreSQL',
			'Authentication (JWT/OAuth)',
		],
	},
	{
		category: 'accessibility & ux',
		skills: [
			'Semantic HTML',
			'Accessibility (a11y)',
			'Responsive Design',
			'UX/UI Design',
			'User Research',
		],
	},
	{
		category: 'testing & quality',
		skills: ['Jest', 'Vitest', 'Cypress', 'SonarQube', 'Capybara'],
	},
	{
		category: 'tools',
		skills: ['Git', 'Jira', 'Figma', 'AI-Assisted Development'],
	},
];
