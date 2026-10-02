export const siteConfig = {
	name: "Creative Crafting",
	legalName: "Creative Crafting Media & Consulting",
	motto: "Digital Growth & Technology Studio",
	description:
		"Creative Crafting is a media, strategy and technology studio helping political and corporate clients communicate, grow their reach and execute their vision with impact.",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
	phone: process.env.NEXT_PUBLIC_PHONE || "+919552392904",
	whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919552392904",
	locale: "en_IN",
} as const;
