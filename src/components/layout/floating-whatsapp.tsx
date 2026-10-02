import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/contact";

export function FloatingWhatsApp() {
	return (
		<a
			href={whatsappHref}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat with Creative Crafting on WhatsApp"
			className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#1dbb68] px-3.5 py-3 text-[10px] font-extrabold text-white shadow-xl shadow-black/20 transition duration-200 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:bottom-5 sm:right-5"
		>
			<MessageCircle size={19} />
			<span className="hidden sm:inline">Chat with us</span>
		</a>
	);
}
