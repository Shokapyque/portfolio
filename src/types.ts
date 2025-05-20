export interface Experience {
	title: string;
	company: string;
	location: string;
	period: string;
	type: string;
	tasks: string[];
}

export interface Project {
	title: string;
	description: string;
	technologies: string[];
	features: string[];
	github?: string;
	demo?: string;
}

export interface Skill {
	name: string;
	level: string;
	percentage: number;
}
