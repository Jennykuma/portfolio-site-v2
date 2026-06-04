import { type Experience, type SkillGroup } from '../types/types';

export const experience: Experience[] = [
	{
		company: 'Cisco Secure Access',
		role: 'Software Developer',
		period: 'sept 2025 — present',
		description: [
			'Built scalable, performant, and accessible UI components for enterprise security workflows using **React, TypeScript, Redux, and TanStack Query** with asynchronous API-driven state management',
			'Increased automated frontend test coverage from **~80% to 91% across 3 micro-applications**, reducing regression risk',
			'Leveraged **Codex** and **GitHub Copilot** for codebase analysis, feature delivery, and security remediation',
			'Integrated **RESTful APIs** to deliver data-rich user experiences with efficient loading, caching, and error handling',
			'Remediated **20+ dependency vulnerabilities (CVEs)** across **5+ repositories** through package upgrades, testing, and release validation',
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
			'Shipped frontend experiences for **endpoint security detection, investigation, and response** workflows used by **300,000+ customers** worldwide using **React** and **TypeScript**',
			'Built **9 shared UI components** supporting **MITRE ATT&CK evaluations**, delivering data-rich security workflows in collaboration with UX designers, product managers, and backend engineers',
			'Implemented **30+ Google Analytics events** to measure feature adoption and inform **product and UX decisions**',
			'Modernized legacy security workflows across **10+ pages** using **React** and **TanStack Query**, improving maintainability and interaction patterns',
			'Improved reliability and regression safety through frontend test automation using **Jest** and **Cypress**',
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
			'Built a production web application to visualize large-scale oil well data, reducing manual search time for geologists',
			'Improved data loading performance and usability through optimized queries and interactive **D3.js** visualizations',
			'Conducted interface research, data analysis on **1M+ rows**, and designed wireframes and prototypes using **Figma**',
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
			'Redux',
			'TanStack Query (React Query)',
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
			'Clerk',
		],
	},
	{
		category: 'accessibility & ux',
		skills: [
			'WCAG Accessibility',
			'ARIA',
			'UX/UI Design',
			'User Research',
			'Performance Optimization',
		],
	},
	{
		category: 'testing & quality',
		skills: ['Jest', 'Cypress', 'SonarQube', 'Capybara'],
	},
	{
		category: 'tools',
		skills: ['Figma', 'AI-Assisted Development', 'Google Analytics', 'Lighthouse', 'Storybook'],
	},
];
