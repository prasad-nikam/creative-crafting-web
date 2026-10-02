import { ArrowUpRight, MessageCircle, Phone, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { phoneHref, whatsappHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";

export function ContactSection() {
	return (
		<section
			id="contact"
			className="relative isolate overflow-hidden bg-night py-16 text-white sm:py-20 lg:py-24"
		>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,#e3131b22,transparent_42%),linear-gradient(115deg,#09090c,#141419)]"
			/>
			<Container className="grid gap-9 lg:grid-cols-[1fr_.8fr] lg:items-center lg:gap-20">
				<Reveal className="max-w-xl">
					<Eyebrow light>07 / LET&apos;S TALK</Eyebrow>
					<h2 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[.88] tracking-[-.025em] sm:text-7xl">
						Let’s build your
						<br />
						next{" "}
						<em className="not-italic text-brand">
							success story.
						</em>
					</h2>
					<p className="mt-5 max-w-lg text-xs leading-[1.9] text-white/65 sm:text-sm">
						Tell us what you&apos;re working toward. We&apos;ll help
						you explore the right approach for your campaign, brand
						or business.
					</p>
					<div className="mt-6 flex items-center gap-3">
						<span className="grid size-10 place-items-center border border-white/20">
							<Users size={17} />
						</span>
						<span className="flex flex-col gap-1">
							<strong className="text-[10px]">
								Political &amp; corporate clients
							</strong>
							<small className="text-[9px] text-white/55">
								One studio, integrated capabilities
							</small>
						</span>
					</div>
				</Reveal>
				<Reveal
					delay={0.1}
					className="border border-white/15 bg-white/[.04] p-5 sm:p-7"
				>
					<span className="text-[8px] font-extrabold tracking-[.15em] text-white/60">
						START A CONVERSATION
					</span>
					<p className="mt-2 text-xs leading-relaxed text-white/65">
						Choose the way that works for you. We&apos;ll take it
						from there.
					</p>
					<a
						href={phoneHref}
						className="mt-5 flex min-h-[72px] items-center gap-3 border border-brand bg-brand p-3.5 transition-colors hover:bg-brand-deep"
					>
						<span className="grid size-9 place-items-center border border-white/50">
							<Phone size={17} />
						</span>
						<span className="flex flex-1 flex-col gap-1">
							<small className="text-[7px] font-extrabold tracking-[.13em] text-white/75">
								CALL OUR TEAM
							</small>
							<strong className="text-xs sm:text-sm">
								{siteConfig.phone}
							</strong>
						</span>
						<ArrowUpRight size={17} />
					</a>
					<a
						href={whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-2 flex min-h-[72px] items-center gap-3 border border-white/20 p-3.5 transition-colors hover:border-white/60 hover:bg-white/5"
					>
						<span className="grid size-9 place-items-center border border-white/40">
							<MessageCircle size={17} />
						</span>
						<span className="flex flex-1 flex-col gap-1">
							<small className="text-[7px] font-extrabold tracking-[.13em] text-white/65">
								MESSAGE US ON WHATSAPP
							</small>
							<strong className="text-xs sm:text-sm">
								Chat with Creative Crafting
							</strong>
						</span>
						<ArrowUpRight size={17} />
					</a>
					<span className="mt-4 flex items-center gap-2 text-[8px] text-white/50">
						<i className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_#34d39920]" />
						Direct contact · Project enquiries welcome
					</span>
				</Reveal>
			</Container>
		</section>
	);
}
