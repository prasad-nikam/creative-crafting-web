import { ArrowUpRight, Check } from "lucide-react";
import { audiences } from "@/data/audiences";
import { whatsappHref } from "@/lib/contact";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function AudienceSection() {
	return (
		<section
			id="audiences"
			className="relative overflow-hidden bg-mist py-16 sm:py-20 lg:py-24"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 -top-44 size-[360px] rounded-full border border-black/5"
			/>
			<Container className="relative">
				<div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
					<Eyebrow>02 / WHO WE WORK WITH</Eyebrow>
					<span className="text-right text-[8px] font-bold tracking-[.16em] text-muted">
						TWO AUDIENCES. ONE INTEGRATED STUDIO.
					</span>
				</div>
				<div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
					<h2 className="font-display text-5xl font-extrabold uppercase leading-[.88] tracking-[-.025em] sm:text-7xl">
						Different arenas.
						<br />
						<span className="text-[#85858a]">Shared ambition.</span>
					</h2>
					<p className="max-w-xs text-xs leading-[1.9] text-muted sm:text-sm">
						Every organization has a story to tell and a result to
						achieve. We shape the right mix of communication,
						creative and execution for the context.
					</p>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					{audiences.map(
						(
							{
								number,
								eyebrow,
								title,
								description,
								offerings,
								image,
								icon: Icon,
							},
							i,
						) => (
							<Reveal key={number} delay={i * 0.08}>
								<article className="group relative isolate flex min-h-[390px] flex-col justify-end overflow-hidden bg-ink text-white sm:min-h-[440px]">
									<div
										aria-hidden="true"
										className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
										style={{
											backgroundImage: `url("${image}")`,
										}}
									/>
									<div
										aria-hidden="true"
										className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/10"
									/>
									<div className="p-6 sm:p-8 lg:p-10">
										<div className="mb-5 flex items-center justify-between">
											<span className="grid size-11 place-items-center border border-white/40 bg-black/20">
												<Icon size={22} />
											</span>
											<span className="text-[8px] font-extrabold tracking-[.15em] text-white/70">
												{number} / {eyebrow}
											</span>
										</div>
										<h3 className="font-display text-4xl font-bold uppercase leading-[.9] sm:text-5xl">
											{title}
										</h3>
										<p className="mt-3 max-w-md text-xs leading-[1.8] text-white/75 sm:text-sm">
											{description}
										</p>
										<ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
											{offerings.map((item) => (
												<li
													key={item}
													className="flex items-center gap-2 text-[9px] font-semibold text-white/85 sm:text-[10px]"
												>
													<Check
														size={13}
														className="shrink-0 text-brand"
													/>
													{item}
												</li>
											))}
										</ul>
										<a
											href={whatsappHref}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`Discuss ${title.toLowerCase()} services on WhatsApp`}
											className="absolute bottom-6 right-6 grid size-10 place-items-center border border-white/50 transition-colors hover:border-brand hover:bg-brand sm:bottom-8 sm:right-8"
										>
											<ArrowUpRight size={19} />
										</a>
									</div>
								</article>
							</Reveal>
						),
					)}
				</div>
			</Container>
		</section>
	);
}
