import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

const faqs = [
	{
		question: "What kind of clients does Creative Crafting work with?",
		answer: "Creative Crafting works with both political and corporate clients, adapting the mix of media, strategy and technology to each project's goals and context.",
	},
	{
		question: "Can I enquire about a single service?",
		answer: "Yes. You can contact the team about an individual service or a project that combines multiple capabilities.",
	},
	{
		question: "How does a new project begin?",
		answer: "A first conversation helps clarify your objectives, audience, timing and requirements. From there, the team can discuss a suitable scope and next steps.",
	},
	{
		question: "How can I contact Creative Crafting?",
		answer: "You can call the team directly or start a conversation through WhatsApp using the contact links on this page.",
	},
];

export function FAQSection() {
	return (
		<section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
			<Container>
				<div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
					<Reveal>
						<Eyebrow className="text-[12px]">
							07 / COMMON QUESTIONS
						</Eyebrow>
						<h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[.9] tracking-tight sm:text-6xl">
							A little more
							<br /> <span className="text-brand">clarity.</span>
						</h2>
						<p className="mt-4 max-w-xs text-xs leading-[1.85] text-muted sm:text-sm">
							A few helpful details about working with Creative
							Crafting.
						</p>
					</Reveal>
					<div className="divide-y divide-line border-y border-line">
						{faqs.map((faq, i) => (
							<details
								key={faq.question}
								className="group py-5 open:[&>summary>svg]:rotate-180"
							>
								<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-xl font-bold uppercase leading-tight marker:hidden sm:text-2xl">
									<span className="flex items-start gap-4">
										<span className="pt-1 font-sans text-[9px] font-bold tracking-wider text-brand">
											0{i + 1}
										</span>
										{faq.question}
									</span>
									<ChevronDown
										size={18}
										className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
									/>
								</summary>
								<p className="ml-8 mt-3 max-w-xl text-xs leading-[1.85] text-muted sm:ml-9 sm:text-sm">
									{faq.answer}
								</p>
							</details>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
