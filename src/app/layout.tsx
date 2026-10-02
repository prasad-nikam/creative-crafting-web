import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: "Creative Crafting | Digital Growth & Technology Studio",
		template: "%s | Creative Crafting",
	},
	description: siteConfig.description,
	applicationName: siteConfig.name,
	keywords: [
		"Creative Crafting",
		"digital growth studio",
		"media production",
		"AI video production",
		"social media management",
		"political consultancy",
		"market research",
		"brand communication",
		"content creation",
		"digital solutions",
		"India",
	],
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		locale: siteConfig.locale,
		url: "/",
		siteName: siteConfig.name,
		title: "Creative Crafting | Digital Growth & Technology Studio",
		description:
			"Media, strategy and technology for political and corporate clients. Ideas into influence. Strategy into growth.",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Creative Crafting — Digital Growth & Technology Studio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Creative Crafting | Digital Growth & Technology Studio",
		description:
			"Media, strategy and technology for political and corporate clients.",
		images: ["/opengraph-image"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#09090c",
};

const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: siteConfig.name,
	alternateName: siteConfig.legalName,
	description: siteConfig.description,
	url: siteConfig.url,
	telephone: siteConfig.phone,
	areaServed: { "@type": "Country", name: "India" },
	knowsAbout: [
		"Media production",
		"Digital growth",
		"Political consultancy",
		"Social media management",
		"Content creation",
		"Market research",
		"Public relations",
		"Advertising",
		"Digital solutions",
	],
};

const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: siteConfig.name,
	url: siteConfig.url,
	inLanguage: "en-IN",
};

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<body className="font-sans antialiased">
				{children}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationJsonLd).replace(
							/</g,
							"\\u003c",
						),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteJsonLd).replace(
							/</g,
							"\\u003c",
						),
					}}
				/>
			</body>
		</html>
	);
}
