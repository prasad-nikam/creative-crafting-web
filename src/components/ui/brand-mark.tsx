import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
	return (
		<Link
			href="#top"
			aria-label="Creative Crafting home"
			className="group inline-flex shrink-0 items-center gap-2.5"
		>
			<span className="relative grid size-10 place-items-center rounded-full border-[4px] border-brand border-r-white font-display text-[25px] font-black leading-none tracking-[-.08em] text-white transition-transform duration-300 group-hover:rotate-[-8deg]">
				<span className="-translate-x-px">C</span>
				<i className="absolute -right-[3px] top-px size-2 rounded-full border border-night bg-brand" />
			</span>
			<span className="flex flex-col gap-px">
				<strong
					className={`text-[13px] font-extrabold leading-[1.15] tracking-[-.04em] ${light ? "text-white" : "text-white"}`}
				>
					CREATIVE CRAFTING
				</strong>
				<small className="text-[7px] font-semibold tracking-[.16em] text-white/65">
					MEDIA &amp; CONSULTING
				</small>
			</span>
		</Link>
	);
}
