export type Experience = {
	company: string;
	role: string;
	period: string;
	description: string[];
	skills: string[];
};

export const experience: Experience[] = [
	{
		company: 'Cisco Secure Access',
		role: 'Intermiediate Software Developer',
		period: 'september 2025-present',
		description: ['bullet 1', 'bullet 2'],
		skills: ['React.js', 'TypeScript', 'Jest', 'Java', 'SASS'],
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
