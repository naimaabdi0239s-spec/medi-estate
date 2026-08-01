import { useState } from "react";
import { Link } from "@tanstack/react-router";

export type Property = {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  tag?: string;
  href?: boolean;
  tall?: boolean;
  blurb?: string;
};

export function PropertyCard({ p }: { p: Property }) {
  const [saved, setSaved] = useState(false);

  const body = (
    <>
      <div className="relative overflow-hidden flex-1" style={{ minHeight: p.tall ? 380 : 260 }}>
        <img
          src={p.image}
          alt={p.title}
          className="gallery-img absolute inset-0 h-full w-full object-cover"
          width={1200}
          height={900}
          loading="lazy"
        />

        {p.tag && (
          <span
            className="absolute top-4 left-4 px-2.5 py-1 text-[9px] uppercase font-mono-eyebrow"
            style={{ background: "rgba(31,46,56,0.78)", color: "#F2E4CC", borderRadius: 999, letterSpacing: "0.14em" }}
          >
            {p.tag}
          </span>
        )}
        <button
          type="button"
          aria-label={saved ? "Remove from saved" : "Save property"}
          onClick={(e) => {
            e.preventDefault();
            setSaved((s) => !s);
          }}
          className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center transition-colors"
          style={{ borderRadius: 999, background: "rgba(242,228,204,0.9)", color: saved ? "#C1502E" : "#1B4B66" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
            <path d="M12 20.5S3.5 14.9 3.5 9.2A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.5 2.8c0 5.7-8.5 11.3-8.5 11.3Z" />
          </svg>
        </button>
      </div>

      <div className="p-5 border border-t-0" style={{ borderColor: "rgba(27,75,102,0.16)", background: "rgba(242,228,204,0.55)" }}>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl" style={{ color: "#1F2E38" }}>{p.title}</h3>
          <p className="font-display text-xl whitespace-nowrap" style={{ color: "#1B4B66" }}>{p.price}</p>
        </div>
        <p className="font-mono-eyebrow mt-2" style={{ color: "#7A6B52" }}>{p.location}</p>
        {p.blurb && (
          <p className="text-sm mt-3 max-w-lg leading-relaxed" style={{ color: "rgba(31,46,56,0.75)" }}>{p.blurb}</p>
        )}
        <p className="font-mono-eyebrow text-[10px] mt-4 pt-4 border-t" style={{ color: "#7A6B52", borderColor: "rgba(31,46,56,0.15)" }}>
          {p.beds} BED · {p.baths} BATH · {p.sqft} SQ FT
        </p>
      </div>
    </>
  );

  if (p.href) {
    return (
      <Link to="/property/palm-villa" className="reveal flex h-full flex-col group">
        {body}
      </Link>
    );
  }
  return <article className="reveal flex h-full flex-col group">{body}</article>;
}

