export type Experience = {
	company: string;
	role: string;
	period: string;
	description: string[];
	skills: string[];
	relatedLink?: ExperienceRelatedLink;
};

export type ExperienceRelatedLink = {
	label: string;
	href: string;
};

export type Project = {
	title: string;
	period: string;
	description: string[];
	skills: string[];
	github: string;
	demo?: string;
	screenshots?: { src: string; thumbSrc?: string; alt: string }[];
};

export type SkillGroup = {
	category: string;
	skills: string[];
};
export interface Slide {
	imagePath: string;
	imageSrcSet?: string;
	sizes?: string;
	altText: string;
	width?: number;
	height?: number;
}
