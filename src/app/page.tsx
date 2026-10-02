import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { WorkSection } from "@/components/sections/work-section";
import { CommitmentSection } from "@/components/sections/commitment-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";

export default function HomePage() {
	return (
		<>
			<SiteHeader />
			<main id="top">
				<HeroSection />
				<AboutSection />
				<AudienceSection />
				<ServicesSection />
				<ApproachSection />
				<WorkSection />
				<CommitmentSection />
				<FAQSection />
				<ContactSection />
			</main>
			<SiteFooter />
			<FloatingWhatsApp />
		</>
	);
}
