import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { whatsappHref } from "@/lib/contact";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function WorkSection() {
	return (
		<section id="work" className="py-16 sm:py-20 lg:py-24">
			<Container>
				<div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
					<Eyebrow>05 / SELECTED CAPABILITIES</Eyebrow>
					<span className="text-right text-[8px] font-bold tracking-[.16em] text-muted">
						A VIEW INTO OUR CRAFT
					</span>
				</div>
				<div className="mb-8 grid gap-4 md:mb-10 md:grid-cols-[1.1fr_.9fr] md:items-end md:gap-10">
					<h2 className="font-display text-5xl font-extrabold uppercase leading-[.88] tracking-[-.025em] sm:text-7xl">
						Stories with
						<br />
						<span className="text-[#85858a]">something to do.</span>
					</h2>
					<div className="max-w-md">
						<p className="text-xs leading-[1.9] text-muted sm:text-sm">
							Our work spans campaigns, brand communication, media
							production and digital growth. The examples below
							show the kinds of challenges we help solve.
						</p>
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 inline-flex items-center gap-2 border-b border-brand pb-1.5 text-[10px] font-extrabold transition-all hover:gap-4"
						>
							Ask about our work <ArrowUpRight size={16} />
						</a>
					</div>
				</div>
				<div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:gap-x-6">
					{projects.map((project, i) => (
						<Reveal key={project.id} delay={(i % 2) * 0.06}>
							<article className="group h-full">
								<a
									href={whatsappHref}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Enquire about ${project.title}`}
									className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
								>
									<div className="relative aspect-[1.55] overflow-hidden bg-mist">
										<Image
											src={project.image}
											alt={project.alt}
											fill
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
											unoptimized
											className="object-cover transition-transform duration-700 group-hover:scale-105"
										/>
										<span className="absolute left-4 top-4 bg-night/75 px-2.5 py-1.5 text-[8px] tracking-widest text-white backdrop-blur">
											CC / {project.id}
										</span>
										<span className="absolute bottom-4 right-4 grid size-9 place-items-center border border-white/65 bg-night/40 text-white backdrop-blur transition-colors group-hover:border-brand group-hover:bg-brand">
											<ArrowUpRight size={18} />
										</span>
									</div>
								</a>
								<div className="mt-3 flex items-center justify-between text-[8px] font-extrabold uppercase tracking-[.13em] text-muted">
									<span>{project.type}</span>
									<span>0{i + 1} / 04</span>
								</div>
								<h3 className="mt-2 font-display text-2xl font-bold uppercase leading-none sm:text-3xl">
									{project.title}
								</h3>
								<p className="mt-2 max-w-lg text-[10px] leading-[1.75] text-muted sm:text-xs">
									{project.description}
								</p>
							</article>
						</Reveal>
					))}
				</div>
				<p className="mt-7 border-l-2 border-brand pl-3 text-[9px] leading-relaxed text-muted">
					Illustrative capability areas. Approved client case studies
					and production stills can be added here.
				</p>
			</Container>
		</section>
	);
}
