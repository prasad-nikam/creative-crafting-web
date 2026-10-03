"use client";

import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { phoneHref, whatsappHref } from "@/lib/contact";

const links = [
	["About", "#about"],
	["Who we work with", "#audiences"],
	["Services", "#services"],
	["Our approach", "#approach"],
	["Selected work", "#work"],
	["FAQ", "#faq"],
	["Contact", "#contact"],
] as const;

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	return (
		<header className="sticky top-0 z-50 h-16 border-b border-white/10 bg-night/95 text-white backdrop-blur-xl md:h-20">
			<Container className="flex h-full items-center justify-between gap-5">
				<BrandMark />
				<nav
					aria-label="Main navigation"
					className="ml-auto hidden items-center gap-4 lg:flex xl:gap-7"
				>
					{links.map(([label, href]) => (
						<a
							key={href}
							href={href}
							className="text-[13px] font-medium text-white/60 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-brand"
						>
							{label}
						</a>
					))}
				</nav>
				<div className="hidden gap-2 md:flex">
					<a
						href={phoneHref}
						className="inline-flex h-10 items-center gap-2 border border-brand bg-brand px-3 text-[11px] font-extrabold transition-colors hover:bg-white hover:text-ink"
					>
						<Phone size={15} />
						Call now
					</a>
					<a
						href={whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex h-10 items-center gap-2 border border-white/35 px-3 text-[11px] font-extrabold transition-colors hover:border-white hover:bg-white hover:text-ink"
					>
						<MessageCircle size={16} />
						WhatsApp
					</a>
				</div>
				<button
					type="button"
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					aria-controls="mobile-menu"
					onClick={() => setOpen((v) => !v)}
					className="grid size-10 place-items-center border border-white/30 text-white md:grid lg:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
				>
					{open ? <X size={20} /> : <Menu size={20} />}
				</button>
			</Container>
			{open && (
				<div
					id="mobile-menu"
					className="absolute inset-x-0 top-full border-b border-white/15 bg-night px-5 pb-5 pt-3 shadow-2xl md:px-8 lg:hidden"
				>
					<nav
						aria-label="Mobile navigation"
						className="mx-auto grid max-w-5xl"
					>
						{links.map(([label, href], i) => (
							<a
								key={href}
								href={href}
								onClick={() => setOpen(false)}
								className="flex items-center gap-4 border-b border-white/10 py-3.5 font-display text-2xl font-bold uppercase text-white transition-colors hover:text-brand"
							>
								<span className="font-sans text-[9px] tracking-widest text-brand">
									0{i + 1}
								</span>
								{label}
							</a>
						))}
					</nav>
					<div className="mx-auto mt-4 grid max-w-5xl grid-cols-2 gap-2">
						<a
							href={phoneHref}
							className="flex min-h-11 items-center justify-center gap-2 bg-brand text-xs font-bold text-white"
						>
							<Phone size={16} />
							Call now
						</a>
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="flex min-h-11 items-center justify-center gap-2 border border-white/40 text-xs font-bold text-white"
						>
							<MessageCircle size={16} />
							WhatsApp
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
