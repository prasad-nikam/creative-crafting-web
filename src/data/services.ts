import { BarChart3, Clapperboard, Landmark, Megaphone, RadioTower, Search, Share2, Video } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  { number: "01", title: "AI Video Production", detail: "Build compelling video stories with thoughtful creative direction and modern production workflows.", icon: Video },
  { number: "02", title: "Social Media Management", detail: "Plan, publish and improve consistent communication across the channels your audience uses.", icon: Share2 },
  { number: "03", title: "Content Creation", detail: "Turn complex ideas into clear, useful and memorable visual and written content.", icon: Clapperboard },
  { number: "04", title: "Political Consultancy", detail: "Support campaign planning, public communication and ground-level coordination with context and care.", icon: Landmark },
  { number: "05", title: "Market Research", detail: "Understand audiences, local context and market signals to make better-informed decisions.", icon: Search },
  { number: "06", title: "PR & Communication", detail: "Shape a consistent public voice and communicate with clarity across key moments.", icon: RadioTower },
  { number: "07", title: "Advertising & Media Buying", detail: "Connect creative, channel planning and campaign measurement around defined objectives.", icon: Megaphone },
  { number: "08", title: "Digital Solutions", detail: "Use practical digital experiences and technology to improve how organizations work and grow.", icon: BarChart3 },
];
