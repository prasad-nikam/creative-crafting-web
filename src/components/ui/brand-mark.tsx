import Link from "next/link";

export function BrandMark({
	light = false,
	className,
}: {
	light?: boolean;
	className?: string;
}) {
	return (
		<Link
			href="#top"
			aria-label="Creative Crafting home"
			className={
				"group inline-flex shrink-0 items-center gap-2.5 " + className
			}
		>
			<svg
				aria-hidden="true"
				viewBox="-2 -10 120 120"
				className="size-12 shrink-0"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						id="lens-glass"
						x1="38"
						y1="37"
						x2="75"
						y2="73"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor="#101c28" />
						<stop offset=".35" stopColor="#123c3b" />
						<stop offset=".58" stopColor="#07141f" />
						<stop offset=".78" stopColor="#25143b" />
						<stop offset="1" stopColor="#080d14" />
					</linearGradient>
					<radialGradient
						id="lens-reflection"
						cx="0"
						cy="0"
						r="1"
						gradientTransform="matrix(18 13 -12 17 43 39)"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#f4f1d7" />
						<stop offset=".16" stopColor="#53c9a3" />
						<stop offset=".42" stopColor="#087b81" />
						<stop offset=".68" stopColor="#192e65" />
						<stop offset=".86" stopColor="#9a245f" />
						<stop offset="1" stopColor="#11121a" />
					</radialGradient>
					<radialGradient
						id="lens-glint"
						cx="0"
						cy="0"
						r="1"
						gradientTransform="matrix(6 5 -5 6 39 37)"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#fff" stopOpacity=".95" />
						<stop offset="1" stopColor="#fff" stopOpacity="0" />
					</radialGradient>
				</defs>

				{/* Red circle — keep unchanged */}
				<circle
					cx="43"
					cy="50"
					r="37"
					stroke="#F5F5F5"
					strokeWidth="13"
				/>
				<circle
					cx="43"
					cy="50"
					r="37"
					stroke="#E50914"
					strokeWidth="13"
				/>

				{/* Bold C — shift left by 2 */}
				<circle
					cx="70"
					cy="35"
					r="36"
					stroke="#F5F5F5"
					strokeWidth="14"
					strokeDasharray="166 61"
					transform="rotate(43 56 50)"
				/>
				<circle
					cx="70"
					cy="35"
					r="36"
					stroke="#08090B"
					strokeWidth="13"
					strokeDasharray="166 61"
					transform="rotate(43 56 50)"
				/>

				{/* Camera lens — shift left by 2 */}
				<g transform="translate(16 0)">
					<circle cx="61" cy="50" r="19" fill="#111316" />
					<circle cx="61" cy="50" r="17.5" fill="#45494D" />
					<circle cx="61" cy="50" r="16" fill="#090C10" />
					<circle cx="61" cy="50" r="14.5" fill="url(#lens-glass)" />
					<circle
						cx="61"
						cy="50"
						r="14.5"
						fill="url(#lens-reflection)"
						opacity=".9"
					/>
					<circle
						cx="61"
						cy="50"
						r="12"
						stroke="#202A30"
						strokeWidth=".7"
					/>
					<circle cx="61" cy="50" r="4.5" fill="#071019" />
					<circle cx="61" cy="50" r="2.2" fill="#02070B" />
					<circle
						cx="61"
						cy="50"
						r="6"
						fill="url(#lens-glint)"
						opacity=".7"
					/>
					<circle
						cx="61"
						cy="50"
						r="17.5"
						stroke="#777B7D"
						strokeWidth=".5"
					/>
				</g>
			</svg>

			<span className="flex flex-col gap-px">
				<strong
					className={`text-[14px] font-extrabold leading-[1.15] tracking-[-.04em] ${
						light ? "text-white" : "text-white"
					}`}
				>
					CREATIVE CRAFTING
				</strong>
				<small className="text-[9px] font-semibold tracking-[.16em] text-white/65">
					MEDIA &amp; CONSULTING
				</small>
			</span>
		</Link>
	);
}
