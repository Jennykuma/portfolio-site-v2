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
		role: 'Intermiediate Software Developer',
		period: 'september 2025-present',
		description: ['bullet 1', 'bullet 2'],
		skills: ['React.js', 'TypeScript', 'React Query', 'Jest', 'Cypress', 'SASS'],
	},
	{
		company: 'Cisco Secure Endpoint',
		role: 'Intermiediate Software Developer',
		period: 'january 2020-september 2025',
		description: ['bullet 1', 'bullet 2'],
		skills: ['React.js', 'Vue.js', 'Jest', 'Ruby on Rails', 'Capybara', 'SASS'],
	},
	{
		company: 'CNOOC International',
		role: 'Intern Software Developer',
		period: 'may 2018-august 2019',
		description: ['bullet 1', 'bullet 2'],
		skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'Google Charts', 'SQL', 'Figma'],
	},
];

export const otherSkills: SkillGroup[] = [
	{
		category: 'Frontend',
		skills: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Tailwind CSS', 'React Query'],
	},
	{
		category: 'Backend',
		skills: ['Node.js', 'Ruby on Rails', 'Fastify', 'Prisma', 'PostgreSQL'],
	},
	{
		category: 'Web & UI',
		skills: ['HTML', 'SASS', 'Responsive Design', 'UX & UI Design', 'User Research'],
	},
	{
		category: 'Testing & Quality',
		skills: ['Jest', 'Vitest', 'Cypress', 'Capybara', 'SonarQube'],
	},
	{
		category: 'Tools',
		skills: ['Git', 'Jira', 'Figma', 'OpenAI Codex', 'Docker', 'CI/CD'],
	},
];
