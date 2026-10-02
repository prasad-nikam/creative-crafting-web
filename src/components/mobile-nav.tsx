"use client";
import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";

const links = [["About", "#about"], ["Who we work with", "#audiences"], ["Services", "#services"], ["Our approach", "#approach"], ["Selected work", "#work"], ["Contact", "#contact"]];
export function MobileNav({ phoneHref, whatsappHref }: { phoneHref: string; whatsappHref: string }) {
  const [open, setOpen] = useState(false);
  return <div className="mobile-nav"><button className="mobile-menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button>{open && <div className="mobile-menu"><div className="mobile-menu-head"><span>MENU / CREATIVE CRAFTING</span><button type="button" aria-label="Close menu" onClick={() => setOpen(false)}><X/></button></div><nav aria-label="Mobile navigation">{links.map(([label, href], i) => <a href={href} key={href} onClick={() => setOpen(false)}><span>0{i+1}</span>{label}</a>)}</nav><div className="mobile-menu-actions"><a href={phoneHref}><Phone size={17}/> Call now</a><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/> WhatsApp</a></div></div>}</div>;
}
