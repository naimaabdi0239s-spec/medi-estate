const stroke = { stroke: "#1B4B66", strokeWidth: 1.6, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function CompassRose({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="18" {...stroke} />
      <circle cx="24" cy="24" r="12" {...stroke} />
      <path d="M24 4 L28 24 L24 44 L20 24 Z M4 24 L24 20 L44 24 L24 28 Z" {...stroke} />
      <circle cx="24" cy="24" r="1.6" fill="#1B4B66" />
    </svg>
  );
}

export function KeyIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <circle cx="14" cy="24" r="8" {...stroke} />
      <path d="M22 24 L42 24 M36 24 L36 30 M30 24 L30 32" {...stroke} />
      <circle cx="14" cy="24" r="2" fill="#1B4B66" />
    </svg>
  );
}

export function Archway({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path d="M8 42 L8 22 A16 16 0 0 1 40 22 L40 42" {...stroke} />
      <path d="M8 42 L40 42" {...stroke} />
      <path d="M14 42 L14 26 A10 10 0 0 1 34 26 L34 42" {...stroke} />
    </svg>
  );
}

export function WaveShield({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path d="M24 4 L40 10 L40 24 C40 34 32 42 24 44 C16 42 8 34 8 24 L8 10 Z" {...stroke} />
      <path d="M12 24 C 16 20, 20 28, 24 24 C 28 20, 32 28, 36 24" {...stroke} />
      <path d="M12 30 C 16 26, 20 34, 24 30 C 28 26, 32 34, 36 30" {...stroke} />
    </svg>
  );
}

export function OliveBranch({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path d="M6 42 C 18 32, 30 20, 42 6" {...stroke} />
      <ellipse cx="14" cy="34" rx="4" ry="2" transform="rotate(-30 14 34)" {...stroke} />
      <ellipse cx="22" cy="26" rx="4" ry="2" transform="rotate(-30 22 26)" {...stroke} />
      <ellipse cx="30" cy="18" rx="4" ry="2" transform="rotate(-30 30 18)" {...stroke} />
      <ellipse cx="18" cy="30" rx="4" ry="2" transform="rotate(60 18 30)" {...stroke} />
      <ellipse cx="26" cy="22" rx="4" ry="2" transform="rotate(60 26 22)" {...stroke} />
    </svg>
  );
}

export function Anchor({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <circle cx="24" cy="10" r="3.5" {...stroke} />
      <path d="M24 13.5 L24 40" {...stroke} />
      <path d="M18 20 L30 20" {...stroke} />
      <path d="M10 28 C 12 38, 18 42, 24 42 C 30 42, 36 38, 38 28" {...stroke} />
      <path d="M10 28 L6 30 M38 28 L42 30" {...stroke} />
    </svg>
  );
}
