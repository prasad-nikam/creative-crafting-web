import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { whatsappHref } from "@/lib/contact";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function ServicesSection() {
	return (
		<section id="services" className="py-16 sm:py-20 lg:py-24">
			<Container>
				<div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
					<Eyebrow>03 / OUR SERVICES</Eyebrow>
					<span className="text-right text-[8px] font-bold tracking-[.16em] text-muted">
						IDEAS, CAPABILITY, EXECUTION
					</span>
				</div>
				<div className="mb-8 grid gap-4 md:mb-10 md:grid-cols-[1.1fr_.9fr] md:items-end md:gap-10">
					<h2 className="font-display text-5xl font-extrabold uppercase leading-[.88] tracking-[-.025em] sm:text-7xl">
						A complete range
						<br />
						of capabilities<span className="text-brand">.</span>
					</h2>
					<p className="max-w-md text-xs leading-[1.9] text-muted sm:text-sm">
						From high-impact media production to strategic
						consulting and digital solutions, our integrated
						services help you communicate better, reach wider and
						act with purpose.
					</p>
				</div>
				<div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
					{services.map(
						({ number, title, detail, icon: Icon }, i) => (
							<Reveal
								key={number}
								delay={(i % 4) * 0.04}
								className="h-full"
							>
								<a
									href={whatsappHref}
									target="_blank"
									rel="noopener noreferrer"
									className="group relative flex h-full min-h-[220px] flex-col border-b border-r border-line p-5 transition-colors duration-300 hover:bg-night hover:text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-brand sm:min-h-[245px] sm:p-6"
								>
									<div className="flex items-center justify-between text-[8px] font-extrabold tracking-[.12em] text-muted group-hover:text-white/55">
										<span>{number} / 08</span>
										<ArrowUpRight
											size={17}
											className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
										/>
									</div>
									<Icon
										size={29}
										strokeWidth={1.5}
										className="mb-4 mt-7 text-brand"
									/>
									<h3 className="font-display text-2xl font-bold uppercase leading-[.95] sm:text-[1.7rem]">
										{title}
									</h3>
									<p className="mt-3 text-[10px] leading-[1.7] text-muted group-hover:text-white/65 sm:text-[11px]">
										{detail}
									</p>
									<span
										aria-hidden="true"
										className="mt-auto block h-px w-8 bg-brand pt-0 transition-all duration-300 group-hover:w-full"
									/>
								</a>
							</Reveal>
						),
					)}
				</div>
			</Container>
		</section>
	);
}
