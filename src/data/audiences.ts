import { Building2, Landmark } from "lucide-react";
import type { Audience } from "@/types";

export const audiences: Audience[] = [
	{
		number: "01",
		eyebrow: "PUBLIC LIFE",
		title: "Political clients",
		description:
			"Campaigns and communication built around people, place and public priorities.",
		offerings: [
			"Political campaigns",
			"Public communication",
			"Voter engagement",
			"Research & strategy",
		],
		image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
		icon: Landmark,
	},
	{
		number: "02",
		eyebrow: "BUSINESS",
		title: "Corporate clients",
		description:
			"Strategic communication and digital experiences designed for sustainable growth.",
		offerings: [
			"Brand building",
			"Digital growth",
			"Media production",
			"Market research",
		],
		image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
		icon: Building2,
	},
];
