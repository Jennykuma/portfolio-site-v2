import { type Experience, type SkillGroup } from '../types/types';

export const experience: Experience[] = [
	{
		company: 'Cisco Secure Access',
		role: 'Software Developer',
		period: 'sept 2025 — present',
		description: [
			'Building accessible UI components for enterprise security workflows in **React, TypeScript, and TanStack Query**, raising automated test coverage to **91%** across 3 micro-applications',
			'Cleared **20+ CVEs** across 5+ repos, leveraging **AI-assisted tools** like Codex and GitHub Copilot along the way',
		],
		skills: [
			'React.js',
			'TypeScript',
			'Redux',
			'TanStack Query (React Query)',
			'Cypress',
			'AI-Assisted Development',
		],
	},
	{
		company: 'Cisco Secure Endpoint',
		role: 'Software Developer',
		period: 'jan 2020 — sept 2025',
		description: [
			'Shipped frontend experiences for **endpoint security detection, investigation, and response** workflows used by **300,000+ customers** worldwide, using **React** and **TypeScript**',
			'Built **9 shared UI components** supporting **MITRE ATT&CK evaluations** and enhanced a **D3.js** forensic visualization tool supporting **22,000+ monthly views**',
		],
		relatedLink: {
			label: 'View public MITRE ATT&CK evaluation screenshots',
			href: 'https://evals.mitre.org/results/enterprise?vendor=cisco&evaluation=wizard-spider-sandworm&scenario=1&view=individualParticipant',
		},
		skills: [
			'React.js',
			'TypeScript',
			'TanStack Query (React Query)',
			'Google Analytics',
			'Jest',
			'Cypress',
			'Shared Component Design',
		],
	},
	{
		company: 'CNOOC International',
		role: 'Intern Software Developer',
		period: 'may 2018 — aug 2019',
		description: [
			'Built a production web application visualizing large-scale oil well data for geologists, replacing fragmented legacy tooling with interactive **D3.js** visualizations',
			'Engineered a daily data pipeline processing **1M+ rows** of oil well data, and designed prototypes using **Figma** informed by interface research',
		],
		skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'D3.js', 'SQL', 'Figma'],
	},
];

export const otherSkills: SkillGroup[] = [
	{
		category: 'frontend',
		skills: [
			'React',
			'TypeScript',
			'JavaScript',
			'HTML5',
			'CSS3',
			'Redux',
			'TanStack Query (React Query)',
			'React Router',
			'Vue.js',
			'D3.js',
			'Tailwind CSS',
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
			'Supabase',
			'Clerk',
		],
	},
	{
		category: 'accessibility & ux',
		skills: [
			'WCAG',
			'ARIA',
			'UX/UI Design',
			'Responsive Design',
			'User Research',
			'Performance Optimization',
		],
	},
	{
		category: 'testing & quality',
		skills: ['Jest', 'React Testing Library', 'Cypress', 'SonarQube', 'Capybara'],
	},
	{
		category: 'tools',
		skills: [
			'Figma',
			'GitHub Copilot',
			'Codex',
			'Anthropic API',
			'Google Analytics',
			'Lighthouse',
			'Storybook',
			'Jira',
			'CircleCI',
		],
	},
];
