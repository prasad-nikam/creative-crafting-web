import { siteConfig } from "@/lib/site";

export const phoneHref = `tel:${siteConfig.phone.replace(/[^+\\d]/g, "")}`;
export const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\\D/g, "")}?text=${encodeURIComponent("Hello Creative Crafting, I'd like to discuss a project.")}`;
