import type { LucideIcon } from "lucide-react";

export type Service = {
	number: string;
	title: string;
	detail: string;
	icon: LucideIcon;
};

export type Audience = {
	number: string;
	eyebrow: string;
	title: string;
	description: string;
	offerings: string[];
	image: string;
	icon: LucideIcon;
};

export type ProcessStep = {
	number: string;
	title: string;
	description: string;
};
export type Project = {
	id: string;
	type: string;
	title: string;
	description: string;
	image: string;
	alt: string;
};
