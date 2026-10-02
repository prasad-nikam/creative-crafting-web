import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { phoneHref, whatsappHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

export function ContactActions({ compact = false }: { compact?: boolean }) {
	return (
		<div className="flex flex-wrap gap-2.5">
			<a
				href={phoneHref}
				className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-brand bg-brand px-4 text-[10px] font-extrabold tracking-[.015em] text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
			>
				<Phone size={16} aria-hidden="true" />
				<span>{compact ? "Call now" : `Call ${siteConfig.phone}`}</span>
				<ArrowUpRight size={15} aria-hidden="true" />
			</a>
			<a
				href={whatsappHref}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-white/40 bg-night/70 px-4 text-[10px] font-extrabold tracking-[.015em] text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
			>
				<MessageCircle size={17} aria-hidden="true" />
				<span>{compact ? "WhatsApp" : "Chat on WhatsApp"}</span>
				<ArrowUpRight size={15} aria-hidden="true" />
			</a>
		</div>
	);
}
