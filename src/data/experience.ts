import { type Experience, type SkillGroup } from '../types/types';

export const experience: Experience[] = [
	{
		company: 'Cisco Secure Access',
		role: 'Software Developer',
		period: 'sept 2025 — present',
		description: [
			'Built scalable, performant, and accessible UI components for enterprise security workflows using **React, TypeScript, Redux, and TanStack Query** with asynchronous API-driven state management',
			'Contributed to adoption of a **shared component system**, improving **UI consistency** and maintainability across multiple applications',
			'Increased automated frontend test coverage for micro-applications from **~80% to 91%**, reducing regression risk',
			'Leveraged **AI-assisted development** workflows to accelerate frontend implementation and iteration',
			'Collaborated closely with backend engineers to integrate **RESTful APIs** and deliver performant, data-driven user experiences with efficient loading, caching, and error handling',
		],
		skills: ['React.js', 'TypeScript', 'TanStack Query (React Query)', 'Cypress', 'Codex'],
	},
	{
		company: 'Cisco Secure Endpoint',
		role: 'Software Developer',
		period: 'jan 2020 — sept 2025',
		description: [
			'Shipped frontend experiences for **endpoint security detection, investigation, and response** workflows used by 300,000+ customers worldwide using **React** and **TypeScript**',
			'Collaborated with UX designers, product managers, and backend engineers to integrate APIs and deliver data-rich UI experiences, including components supporting **MITRE ATT&CK evaluations**',
			'Implemented **Google Analytics** event tracking to measure user engagement and inform **product and UX decisions**',
			'Contributed to modernization initiatives including **reusable component architecture** and **UI modernization efforts**',
			'Improved reliability and regression safety through stronger frontend test automation using **Jest** and **Cypress**',
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
			'TanStack Query (React Query)',
			'Redux',
			'Vue.js',
			'D3.js',
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
		skills: ['Git', 'Jira', 'Figma', 'AI-Assisted Development', 'Google Analytics'],
	},
];
