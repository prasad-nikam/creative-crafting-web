import type { ReactNode } from "react";

export function Container({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`mx-auto w-[min(1240px,calc(100%_-_2.25rem))] sm:w-[min(1240px,calc(100%_-_4rem))] xl:w-[min(1240px,calc(100%_-_8rem))] ${className}`}
		>
			{children}
		</div>
	);
}
