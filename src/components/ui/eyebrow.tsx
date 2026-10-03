import type { ReactNode } from "react";

export function Eyebrow({
	children,
	light = false,
	className,
}: {
	children: ReactNode;
	light?: boolean;
	className?: string;
}) {
	return (
		<div
			className={`flex items-center gap-2.5 text-[10px] font-extrabold tracking-[.15em] ${light ? "text-white/70" : "text-muted"} ${className}`}
		>
			<span className="h-0.5 w-6 shrink-0 bg-brand" />
			{children}
		</div>
	);
}
