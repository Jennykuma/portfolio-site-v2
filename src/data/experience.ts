import { type Experience, type SkillGroup } from '../types/types';

export const experience: Experience[] = [
	{
		company: 'Cisco Secure Access',
		role: 'Software Developer',
		period: 'sept 2025 — present',
		description: [
			'Increased automated frontend test coverage from **~80% to 91% across 3 micro-applications**, reducing regression risk',
			'Shipped the notification settings panel for the new Endpoint DLP agent **ahead of schedule**, unblocking integration for a rollout targeting **50,000 managed endpoints**',
			'Remediated **20+ dependency vulnerabilities (CVEs)** across **5+ repositories**, leveraging **Codex** and **GitHub Copilot** to accelerate security triage',
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
			'Shipped frontend experiences for **endpoint security detection, investigation, and response** workflows used by **300,000+ customers** worldwide',
			'Improved Inbox page performance **3x**, cutting API latency from **17s to ~5s** by consolidating redundant requests into a single observable fetch',
			'Built **9 shared UI components** supporting **MITRE ATT&CK evaluations**, leading code reviews and mentoring a junior engineer',
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
			'Delivered a production web app centralizing and visualizing oil well data, replacing fragmented legacy tooling and reducing manual search time for geologists',
			'Engineered a daily pipeline ingesting **1M+ rows** of oil well data to power live **D3.js** dashboards, and led UX research and prototyping in **Figma**',
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
		skills: ['REST APIs', 'Ruby on Rails', 'Node.js', 'Fastify', 'Prisma', 'PostgreSQL'],
	},
	{
		category: 'accessibility & ux',
		skills: [
			'WCAG',
			'ARIA',
			'Responsive Design',
			'Cross-Browser Compatibility',
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
		skills: ['Jira', 'Figma', 'Codex', 'GitHub Copilot', 'Google Analytics', 'Lighthouse', 'Storybook'],
	},
];
