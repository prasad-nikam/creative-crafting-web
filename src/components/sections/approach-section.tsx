import {
	ArrowRight,
	Clapperboard,
	Crosshair,
	FileText,
	Megaphone,
	TrendingUp,
} from "lucide-react";
import { processSteps } from "@/data/process";
import { whatsappHref } from "@/lib/contact";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

const symbols = [FileText, Crosshair, Clapperboard, Megaphone, TrendingUp];

export function ApproachSection() {
	return (
		<section
			id="approach"
			className="relative isolate overflow-hidden bg-night py-16 text-white sm:py-20 lg:py-24"
		>
			<div
				aria-hidden="true"
				className="absolute -right-24 top-0 -z-10 size-[460px] rounded-full border border-white/5"
			/>
			<Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
				<Reveal className="max-w-lg">
					<Eyebrow light>04 / OUR APPROACH</Eyebrow>
					<h2 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[.88] tracking-[-.025em] sm:text-7xl">
						From strategy
						<br />
						to{" "}
						<em className="not-italic text-brand">real impact.</em>
					</h2>
					<p className="mt-5 max-w-md text-xs leading-[1.9] text-white/65 sm:text-sm">
						A considered process keeps the work focused, coordinated
						and accountable from the first conversation to the final
						review.
					</p>
					<a
						href={whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 inline-flex min-h-11 items-center gap-3 bg-white px-4 text-[10px] font-extrabold text-ink transition-colors hover:bg-brand hover:text-white"
					>
						Start a conversation <ArrowRight size={16} />
					</a>
				</Reveal>
				<div className="divide-y divide-white/15 border-y border-white/15">
					{processSteps.map(({ number, title, description }, i) => {
						const Icon = symbols[i];
						return (
							<Reveal key={number} delay={i * 0.04}>
								<div className="grid min-h-[86px] grid-cols-[28px_38px_1fr_16px] items-center gap-3 py-4 sm:grid-cols-[36px_48px_1fr_20px] sm:gap-4">
									<span className="text-[9px] font-bold tracking-wider text-brand">
										{number}
									</span>
									<span className="grid size-9 place-items-center border border-white/20 text-white/75 sm:size-11">
										<Icon size={20} strokeWidth={1.5} />
									</span>
									<div>
										<h3 className="font-display text-xl font-bold uppercase leading-none sm:text-2xl">
											{title}
										</h3>
										<p className="mt-1.5 max-w-md text-[9px] leading-[1.65] text-white/55 sm:text-[11px]">
											{description}
										</p>
									</div>
									<ArrowRight
										size={15}
										className="text-white/35"
									/>
								</div>
							</Reveal>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
