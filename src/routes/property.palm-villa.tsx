import { createFileRoute, Link } from "@tanstack/react-router";
import prop1 from "@/assets/prop1.jpg";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal5 from "@/assets/gal5.jpg";
import agent1 from "@/assets/agent1.jpg";
import { MediLogo } from "@/components/MediLogo";
import { SiteFooter } from "@/routes/index";

export const Route = createFileRoute("/property/palm-villa")({
  component: PalmVilla,
  head: () => ({
    meta: [
      { title: "Villa Azzurra, Palm Jumeirah — Medi Estate" },
      { name: "description", content: "Six-bedroom beachfront villa on the west crescent of Palm Jumeirah. Private pool, sea view, smart home. AED 42.5M — schedule a viewing." },
      { property: "og:title", content: "Villa Azzurra, Palm Jumeirah — Medi Estate" },
      { property: "og:description", content: "Six-bedroom beachfront villa with private pool, sea views and smart home systems on Palm Jumeirah." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b pb-2 text-sm" style={{ borderColor: "rgba(31,46,56,0.15)", color: "#1F2E38" }}>
      <span className="font-mono-eyebrow text-[10px]" style={{ color: "#7A6B52" }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function PalmVilla() {
  const features = [
    "6 bedrooms, all en-suite",
    "Private 18m infinity pool",
    "Uninterrupted sea view",
    "Full smart home system",
    "Direct private beach access",
    "Staff quarters & 4-car garage",
  ];
  return (
    <main style={{ background: "#F2E4CC" }}>
      <header className="px-6 md:px-12 py-6 flex items-center justify-between" style={{ background: "#1B4B66" }}>
        <Link to="/"><MediLogo onDark size="md" /></Link>
        <Link to="/" className="btn-pill btn-on-dark !py-2 !px-5 text-xs">Back to listings</Link>
      </header>

      <section className="px-6 pt-10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono-eyebrow" style={{ color: "#1B4B66" }}>PALM JUMEIRAH · WEST CRESCENT · DUBAI</p>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-3">
            <h1 className="font-display text-5xl md:text-6xl" style={{ color: "#1F2E38" }}>Villa Azzurra</h1>
            <p className="font-display text-3xl" style={{ color: "#1B4B66" }}>AED 42,500,000</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-6">
            <div className="md:col-span-2 md:row-span-2 overflow-hidden">
              <img src={prop1} alt="Villa Azzurra exterior at dusk" className="w-full h-full object-cover" width={1400} height={1100} />
            </div>
            <div className="overflow-hidden"><img src={gal1} alt="Archway to the pool deck" className="gallery-img w-full h-[200px] object-cover" width={800} height={1000} loading="lazy" /></div>
            <div className="overflow-hidden"><img src={gal2} alt="Terrace at night" className="gallery-img w-full h-[200px] object-cover" width={1000} height={700} loading="lazy" /></div>
            <div className="overflow-hidden"><img src={gal3} alt="Bathroom with sea view" className="gallery-img w-full h-[200px] object-cover" width={700} height={900} loading="lazy" /></div>
            <div className="overflow-hidden"><img src={gal5} alt="Infinity pool at dawn" className="gallery-img w-full h-[200px] object-cover" width={1100} height={800} loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl" style={{ color: "#1F2E38" }}>About this home</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(31,46,56,0.82)" }}>
              Villa Azzurra sits on 12 metres of private beach frontage on the west crescent, positioned for sunset over the Gulf. The ground floor opens fully to the pool deck through pocketing glass, with a shaded majlis, chef's kitchen and a separate service wing. Upstairs, the principal suite spans the full sea-facing elevation with a private terrace and outdoor bath.
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(31,46,56,0.82)" }}>
              Completed in 2019 and refurbished in 2024 by the original architect. Title verified, structural and salinity survey on file.
            </p>

            <h3 className="font-display text-2xl mt-8" style={{ color: "#1F2E38" }}>Details</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#1F2E38" }}>
                  <span style={{ color: "#C1502E" }}>✓</span> {f}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-6 border-t" style={{ borderColor: "rgba(31,46,56,0.15)" }}>
              {[
                { n: "6", l: "BEDS" },
                { n: "7", l: "BATHS" },
                { n: "12,400", l: "SQ FT" },
                { n: "2019", l: "BUILT" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl tabular-nums" style={{ color: "#1B4B66", lineHeight: 1 }}>{s.n}</p>
                  <p className="font-mono-eyebrow text-[10px] mt-2" style={{ color: "#7A6B52" }}>{s.l}</p>
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl mt-10" style={{ color: "#1F2E38" }}>Location</h3>
            <div className="mt-4 overflow-hidden border" style={{ borderColor: "rgba(27,75,102,0.2)" }}>
              <iframe
                title="Villa Azzurra location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=55.10%2C25.10%2C55.17%2C25.14&layer=mapnik&marker=25.12%2C55.135"
                className="w-full h-[340px]"
                style={{ filter: "sepia(0.15) hue-rotate(-10deg) saturate(0.85)", border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          <aside className="lg:sticky lg:top-8 self-start p-6 border" style={{ borderColor: "rgba(27,75,102,0.2)", background: "rgba(232,214,174,0.5)" }}>
            <p className="font-mono-eyebrow mb-4" style={{ color: "#1B4B66" }}>SCHEDULE A VIEWING</p>
            <div className="flex items-center gap-3 pb-5 mb-5 border-b" style={{ borderColor: "rgba(31,46,56,0.15)" }}>
              <img src={agent1} alt="Layla Nasser" className="h-14 w-14 object-cover" style={{ borderRadius: 999 }} width={800} height={1000} loading="lazy" />
              <div>
                <p className="font-display text-xl" style={{ color: "#1F2E38" }}>Layla Nasser</p>
                <p className="text-xs" style={{ color: "rgba(31,46,56,0.7)" }}>Beachfront villas · Palm Jumeirah</p>
              </div>
            </div>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full bg-transparent border-b py-2 text-sm outline-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b py-2 text-sm outline-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
              <input type="date" className="w-full bg-transparent border-b py-2 text-sm outline-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
              <button type="submit" className="btn-pill btn-primary w-full mt-2">Schedule a viewing</button>
            </form>
            <div className="mt-6 space-y-2">
              <Detail label="REF" value="ME-PJ-4482" />
              <Detail label="TENURE" value="Freehold" />
              <Detail label="SERVICE FEE" value="AED 118,000 / yr" />
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
