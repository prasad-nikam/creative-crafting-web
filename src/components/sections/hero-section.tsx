import {
	ArrowDownRight,
	ArrowUpRight,
	BarChart3,
	Clapperboard,
	Layers3,
	Play,
	Target,
	Users,
} from "lucide-react";
import { ContactActions } from "@/components/ui/contact-actions";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

const metrics = [
	{ value: "10+", label: "Years of industry experience", icon: Target },
	{ value: "500+", label: "Projects delivered", icon: Layers3 },
	{ value: "98%", label: "Client success rate", icon: Users },
	{ value: "50M+", label: "Audience net reach", icon: BarChart3 },
];

const capabilities = [
	{
		title: "Strategy",
		description: "Understand the goal before choosing the approach.",
		icon: Target,
	},
	{
		title: "Creative",
		description: "Shape ideas into clear, compelling communication.",
		icon: Clapperboard,
	},
	{
		title: "Technology",
		description: "Use digital tools to turn plans into experiences.",
		icon: Layers3,
	},
	{
		title: "Execution",
		description: "Coordinate the details from concept to delivery.",
		icon: Users,
	},
];
export function HeroSection() {
	return (
		<section
			aria-labelledby="hero-title"
			className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-night text-white md:min-h-[calc(100svh-5rem)]"
		>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-30 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-position-[center_43%] opacity-55"
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#08090df5_0%,#08090de8_35%,#08090d80_70%,#08090d55_100%),linear-gradient(0deg,#08090df5_0%,transparent_42%,#08090d55_100%)]"
			/>
			<Container className="grid flex-1 grid-cols-1 items-center gap-9 pb-16 pt-12 sm:pb-20 sm:pt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,.9fr)] lg:gap-12 lg:pb-14 lg:pt-10 xl:gap-20">
				<Reveal className="relative z-10 max-w-2xl">
					<Eyebrow light>
						{" "}
						DIGITAL GROWTH, STRATEGY &amp; TECHNOLOGY STUDIO
					</Eyebrow>
					<h1
						id="hero-title"
						className="mt-7 font-display text-[clamp(4.5rem,10vw,8.6rem)] font-extrabold uppercase leading-[.78] tracking-[-.035em]"
					>
						ideas into
						<br />
						<span className="text-brand">influence.</span>
					</h1>
					<p className="mt-6 max-w-xl text-xl font-semibold leading-snug tracking-[-.045em] sm:text-2xl">
						Media. Strategy. Technology.
						<br className="hidden sm:block" /> For a stronger
						tomorrow.
					</p>
					<p className="mt-4 max-w-lg text-sm leading-[1.85] text-white/75 sm:text-sm">
						Creative Crafting is a media, strategy and technology
						studio helping political and corporate clients
						communicate, grow their reach and execute their vision
						with impact.
					</p>
					<div className="mt-6">
						<ContactActions />
					</div>
					<a
						href="#work"
						className="group mt-7 inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white"
					>
						<span className="grid size-9 place-items-center rounded-full bg-brand transition-transform duration-300 group-hover:scale-110">
							<Play size={14} fill="currentColor" />
						</span>
						<span className="flex flex-col gap-1">
							<strong className="text-[10px]">
								See our work in action
							</strong>
							<small className="text-[9px] text-white/55">
								Explore selected capabilities
							</small>
						</span>
						<ArrowUpRight
							size={16}
							className="ml-2 text-white/55 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
						/>
					</a>
				</Reveal>
				<Reveal
					delay={0.12}
					className="relative mx-auto w-full max-w-105 lg:mr-2 lg:ml-auto"
				>
					<div className="relative rotate-[1.5deg] border border-white/40 bg-black/40 p-2 shadow-2xl shadow-black/50 transition-transform duration-500 hover:rotate-0">
						<div
							role="img"
							aria-label="Crowd at a live music and media event"
							className="aspect-[4/4.1] bg-[url('https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85')] bg-cover bg-center saturate-75"
						/>
						<span className="absolute left-5 top-5 text-[8px] tracking-[.12em] text-white drop-shadow">
							CC / 001
						</span>
						<span
							aria-hidden="true"
							className="absolute -bottom-2 -right-2 size-8 border-b-[3px] border-r-[3px] border-brand"
						/>
					</div>
					<p className="ml-5 mt-5 font-display text-2xl leading-[1.05] text-white/75 sm:text-3xl">
						Stories that move
						<br />
						<strong className="font-bold text-white">
							people forward.
						</strong>
					</p>
				</Reveal>
			</Container>
			<Container className="relative z-10 border-t border-white/20 py-4 sm:py-5">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-0">
					<div className="flex items-center sm:pr-4">
						<p className="font-display text-lg font-semibold uppercase leading-tight sm:text-xl">
							From first brief
							<br />
							to final delivery.
						</p>
					</div>

					{capabilities.map(({ title, description, icon: Icon }) => (
						<div
							key={title}
							className="flex items-start gap-2.5 border-white/15 sm:border-l sm:px-4 lg:px-5"
						>
							<Icon
								aria-hidden="true"
								className="hidden size-5 shrink-0 text-brand sm:block"
							/>

							<div>
								<strong className="font-display text-sm font-semibold leading-none sm:text-base">
									{title}
								</strong>

								<p className="mt-1 max-w-32 text-[10px] leading-snug text-white/60 sm:text-xs">
									{description}
								</p>
							</div>
						</div>
					))}
				</div>
			</Container>
			<a
				href="#about"
				aria-label="Scroll to about section"
				className="absolute bottom-26 right-[4vw] hidden size-8 place-items-center rounded-full border border-white/35 text-white/75 transition-colors hover:border-brand hover:bg-brand lg:grid"
			>
				<ArrowDownRight size={17} />
			</a>
		</section>
	);
}
