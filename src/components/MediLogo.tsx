type Props = { onDark?: boolean; size?: "sm" | "md" | "lg" };

export function MediLogo({ onDark = false, size = "md" }: Props) {
  const scriptSize = size === "lg" ? "text-6xl" : size === "sm" ? "text-3xl" : "text-4xl";
  const iconSize = size === "lg" ? 60 : size === "sm" ? 36 : 44;
  const ink = onDark ? "#F2E4CC" : "#1F2E38";
  const palm = "#7FB6D9";

  return (
    <div className="flex items-end gap-2 leading-none">
      <span className={`font-script ${scriptSize}`} style={{ color: ink, lineHeight: 0.9 }}>
        Med Estate
      </span>
      {/* Two palm trees silhouette */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill={palm}
        className="shrink-0 -mb-1"
        aria-hidden="true"
      >
        {/* Back palm — smaller, left */}
        <g>
          {/* trunk */}
          <path d="M20 60 C 19 48, 18 36, 17 22 C 17 20, 19 20, 19.2 22 C 20 36, 21 48, 22 60 Z" />
          {/* fronds */}
          <path d="M18 22 C 10 18, 4 20, 2 24 C 6 20, 12 20, 18 22 Z" />
          <path d="M18 22 C 12 14, 6 12, 3 14 C 9 12, 14 15, 18 22 Z" />
          <path d="M18 22 C 18 14, 16 8, 12 6 C 17 7, 20 13, 18 22 Z" />
          <path d="M18 22 C 22 14, 26 10, 30 10 C 26 12, 22 16, 18 22 Z" />
          <path d="M18 22 C 26 20, 32 22, 34 26 C 30 22, 24 21, 18 22 Z" />
          <path d="M18 22 C 24 26, 26 30, 26 34 C 22 30, 20 25, 18 22 Z" />
        </g>
        {/* Front palm — bigger, right */}
        <g>
          <path d="M42 60 C 40 46, 38 32, 36 18 C 36 15, 39 15, 39.4 18 C 41 32, 43 46, 45 60 Z" />
          <path d="M37 18 C 27 12, 18 14, 14 20 C 20 14, 28 13, 37 18 Z" />
          <path d="M37 18 C 30 8, 22 4, 17 6 C 25 5, 32 10, 37 18 Z" />
          <path d="M37 18 C 36 8, 32 2, 27 0 C 33 3, 38 9, 37 18 Z" />
          <path d="M37 18 C 40 8, 46 4, 52 4 C 44 6, 40 12, 37 18 Z" />
          <path d="M37 18 C 46 12, 56 12, 60 16 C 54 14, 46 15, 37 18 Z" />
          <path d="M37 18 C 46 20, 54 26, 56 32 C 50 24, 44 20, 37 18 Z" />
          <path d="M37 18 C 42 26, 44 34, 42 40 C 40 32, 38 24, 37 18 Z" />
        </g>
        {/* Sand mound */}
        <ellipse cx="32" cy="61" rx="22" ry="2.5" opacity="0.5" />
      </svg>
    </div>
  );
}
