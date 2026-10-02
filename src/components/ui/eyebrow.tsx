import type { ReactNode } from "react";

export function Eyebrow({
	children,
	light = false,
}: {
	children: ReactNode;
	light?: boolean;
}) {
	return (
		<div
			className={`flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.15em] ${light ? "text-white/80" : "text-muted"}`}
		>
			<span className="h-0.5 w-6 shrink-0 bg-brand" />
			{children}
		</div>
	);
}
