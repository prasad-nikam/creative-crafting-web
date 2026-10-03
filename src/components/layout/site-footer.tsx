import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { phoneHref, whatsappHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

const links = [
	["About", "#about"],
	["Who we work with", "#audiences"],
	["Services", "#services"],
	["Our approach", "#approach"],
	["Selected work", "#work"],
	["FAQ", "#faq"],
] as const;

export function SiteFooter() {
	return (
		<footer className="border-t border-white/10 bg-[#08080a] py-9 text-white">
			<Container>
				<div className="grid gap-8 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.7fr_40px]">
					<div>
						<BrandMark light />
						<p className="mt-4 text-[12px] font-bold">
							{siteConfig.motto}
						</p>
						<span className="mt-1 block text-[11px] text-white/50">
							Media. Strategy. Technology.
						</span>
					</div>
					<nav
						aria-label="Footer explore"
						className="flex flex-col items-start gap-2.5"
					>
						<span className="mb-1 text-[8px] font-extrabold tracking-[.14em] text-white/55">
							EXPLORE
						</span>
						{links.map(([label, href]) => (
							<a
								key={href}
								href={href}
								className="text-xs text-white/75 transition-colors hover:text-white"
							>
								{label}
							</a>
						))}
					</nav>
					<div className="flex flex-col items-start gap-2.5">
						<span className="mb-1 text-[10px] font-extrabold tracking-[.14em] text-white/55">
							GET IN TOUCH
						</span>
						<a
							href={phoneHref}
							className="text-xs text-white/75 hover:text-white"
						>
							Call {siteConfig.phone}
						</a>
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs text-white/75 hover:text-white"
						>
							WhatsApp
						</a>
						<a
							href="#contact"
							className="text-xs text-white/75 hover:text-white"
						>
							Project enquiries
						</a>
					</div>
					<a
						href="#top"
						aria-label="Back to top"
						className="grid size-9 place-items-center border border-white/30 transition-colors hover:border-brand hover:bg-brand"
					>
						<ArrowUpRight size={18} />
					</a>
				</div>
				<div className="flex flex-wrap justify-between gap-3 pt-4 text-[12px] text-white/45">
					<span>
						© {new Date().getFullYear()} Creative Crafting. All
						rights reserved.
					</span>
					<span>Built around clarity, craft and impact.</span>
					<a href="#top" className="text-white/70 hover:text-white">
						Back to top ↑
					</a>
				</div>
			</Container>
		</footer>
	);
}
