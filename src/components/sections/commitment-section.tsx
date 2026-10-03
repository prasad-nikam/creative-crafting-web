import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function CommitmentSection() {
	return (
		<section className="border-y border-line bg-mist py-14 sm:py-16">
			<Container className="grid gap-7 md:grid-cols-[1fr_1fr] md:items-center md:gap-14">
				<Reveal>
					<Eyebrow className="text-[12px]">
						06 / THE COMMITMENT
					</Eyebrow>
					<h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[.9] tracking-[-.025em] sm:text-6xl">
						Good work starts
						<br />
						with <span className="text-brand">understanding.</span>
					</h2>
				</Reveal>
				<Reveal
					delay={0.08}
					className="relative border-l border-line pl-6 sm:pl-8"
				>
					<span
						aria-hidden="true"
						className="absolute -left-1 top-0 font-display text-5xl leading-none text-brand"
					>
						“
					</span>
					<p className="text-sm leading-[1.85] text-ink/75 sm:text-base">
						We listen first, align on what matters, and bring the
						right creative and technical capabilities to the table.
						The goal is work that feels clear, considered and
						connected to a real outcome.
					</p>
					<span className="mt-5 block text-[10px] font-extrabold tracking-[.15em] text-muted">
						THE CREATIVE CRAFTING APPROACH
					</span>
				</Reveal>
			</Container>
		</section>
	);
}
