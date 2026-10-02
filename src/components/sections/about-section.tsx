import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function AboutSection() {
	return (
		<section id="about" className="py-16 sm:py-20 lg:py-24">
			<Container>
				<div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
					<Eyebrow>01 / THE STUDIO</Eyebrow>
					<span className="text-right text-[8px] font-bold tracking-[.16em] text-muted">
						CREATIVE CRAFTING — INDIA
					</span>
				</div>
				<div className="grid items-end gap-7 lg:grid-cols-[1.15fr_.85fr] lg:gap-[9%]">
					<Reveal>
						<h2 className="font-display text-5xl font-extrabold uppercase leading-[.88] tracking-[-.025em] sm:text-7xl lg:text-[5.5rem]">
							Make the message
							<br />
							matter<span className="text-brand">.</span>
						</h2>
					</Reveal>
					<Reveal delay={0.08} className="max-w-lg">
						<p className="mb-3 text-base font-extrabold leading-snug tracking-[-.04em] sm:text-lg">
							Different goals. Same commitment to clarity.
						</p>
						<p className="text-xs leading-[1.9] text-muted sm:text-sm">
							We bring media production, strategic thinking and
							technology together to help organizations
							communicate with purpose. From a campaign that needs
							a clear voice to a business ready for its next stage
							of growth, we build around the real objective—not a
							one-size-fits-all formula.
						</p>
						<a
							href="#services"
							className="mt-5 inline-flex items-center gap-2 border-b border-brand pb-1.5 text-[10px] font-extrabold transition-all hover:gap-4"
						>
							Explore what we do <ArrowUpRight size={16} />
						</a>
					</Reveal>
				</div>
			</Container>
		</section>
	);
}
