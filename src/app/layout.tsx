import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Creative Crafting | Digital Growth & Technology Studio",
    template: "%s | Creative Crafting",
  },
  description:
    "Creative Crafting is a media, strategy and technology studio helping political and corporate clients communicate clearly, grow their reach and turn ideas into impact.",
  applicationName: "Creative Crafting",
  keywords: [
    "Creative Crafting", "digital growth studio", "media production", "AI video production",
    "social media management", "political consultancy", "market research", "brand communication",
    "content creation", "digital solutions", "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Creative Crafting",
    title: "Creative Crafting | Digital Growth & Technology Studio",
    description:
      "Media, strategy and technology for political and corporate clients. Ideas into influence. Strategy into growth.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Creative Crafting — Digital Growth & Technology Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Crafting | Digital Growth & Technology Studio",
    description: "Media, strategy and technology for political and corporate clients.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Creative Crafting",
  alternateName: "Creative Crafting Media & Consulting",
  description:
    "A media, strategy and technology studio serving political and corporate clients.",
  url: siteUrl,
  telephone: process.env.NEXT_PUBLIC_PHONE || "+919552392904",
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Media production", "Digital growth", "Political consultancy", "Social media management",
    "Content creation", "Market research", "Public relations", "Advertising", "Digital solutions",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
