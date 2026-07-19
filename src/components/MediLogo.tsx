type Props = { onDark?: boolean; size?: "sm" | "md" | "lg" };

export function MediLogo({ onDark = false, size = "md" }: Props) {
  const scriptSize = size === "lg" ? "text-6xl" : size === "sm" ? "text-3xl" : "text-4xl";
  const iconSize = size === "lg" ? 56 : size === "sm" ? 32 : 40;
  const ink = onDark ? "#F2E4CC" : "#1F2E38";
  const blue = onDark ? "#7FB6D9" : "#1B4B66";
  const tan = onDark ? "#7A6B52" : "#A88F63";

  return (
    <div className="flex items-baseline gap-1 leading-none">
      <span className={`font-script ${scriptSize}`} style={{ color: ink, lineHeight: 0.9 }}>
        Medi Estate
      </span>
      {/* Palm tree */}
      <svg width={iconSize} height={iconSize} viewBox="0 0 64 64" fill="none" className="shrink-0 -mb-1">
        {/* Withering fronds (tan) — drooping down/outward */}
        <path d="M32 22 C 20 26, 12 34, 8 44" stroke={tan} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M32 22 C 44 26, 52 34, 56 44" stroke={tan} strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Five upright fronds (blue) */}
        <path d="M32 22 C 30 12, 28 8, 22 4" stroke={blue} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M32 22 C 34 12, 36 8, 42 4" stroke={blue} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M32 22 L 32 2" stroke={blue} strokeWidth="2" strokeLinecap="round" />
        <path d="M32 22 C 26 16, 22 12, 14 12" stroke={blue} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M32 22 C 38 16, 42 12, 50 12" stroke={blue} strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Trunk */}
        <path d="M32 22 L 32 60" stroke={blue} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M28 30 L 36 30 M27 38 L 37 38 M28 46 L 36 46 M29 54 L 35 54" stroke={blue} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
  );
}
