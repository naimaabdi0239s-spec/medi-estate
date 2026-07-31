import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import prop1 from "@/assets/prop1.jpg";
import prop2 from "@/assets/prop2.jpg";
import prop3 from "@/assets/prop3.jpg";
import prop4 from "@/assets/prop4.jpg";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import { MediLogo } from "@/components/MediLogo";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Medi Estate — Homes with a sense of place" },
      { name: "description", content: "A considered collection of coastal residences across Dubai, Abu Dhabi and Ras Al Khaimah. A boutique brokerage for the UAE shore." },
      { property: "og:title", content: "Medi Estate — Homes with a sense of place" },
      { property: "og:description", content: "Homes with a sense of place. A considered collection of coastal residences across the UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://id-preview--24f967db-11c1-43ac-bd5a-9bd64aeef82a.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://id-preview--24f967db-11c1-43ac-bd5a-9bd64aeef82a.lovable.app/og-image.jpg" },
    ],
  }),
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("in"), i * 90);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between">
      <MediLogo onDark size="md" />
      <nav className="hidden md:flex items-center gap-8" style={{ color: "#F2E4CC" }}>
        <a href="#properties" className="text-sm hover:opacity-70 transition-opacity">Properties</a>
        <a href="#categories" className="text-sm hover:opacity-70 transition-opacity">Categories</a>
        <a href="#about" className="text-sm hover:opacity-70 transition-opacity">About</a>
        <a href="#contact" className="btn-pill btn-on-dark !py-2 !px-5 text-xs">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  const headline = ["A", "different", "way", "to", "find", "home."];
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        src={heroVideo.url}
        poster={heroImg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(27,75,102,0.55) 0%, rgba(31,46,56,0.55) 60%, rgba(31,46,56,0.78) 100%)" }} />
      <Nav />
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16" style={{ color: "#F2E4CC" }}>
        <p className="font-mono-eyebrow mb-6 hero-fade" style={{ animationDelay: "1.8s", color: "#7FB6D9" }}>
          DUBAI · ABU DHABI · RAS AL KHAIMAH
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
          {headline.map((w, i) => (
            <span key={i} className="hero-word mr-3" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
              {w}
            </span>
          ))}
        </h1>
        <p className="font-display italic text-2xl md:text-3xl mt-6 hero-fade" style={{ animationDelay: "1.5s", color: "#F2E4CC" }}>
          Homes with a sense of place.
        </p>
        <p className="max-w-xl mt-6 text-base leading-relaxed hero-fade" style={{ animationDelay: "1.9s", color: "rgba(242,228,204,0.85)" }}>
          Carefully selected residences across the UAE's most remarkable coastlines.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 hero-fade" style={{ animationDelay: "2.1s" }}>
          <a href="#properties" className="btn-pill btn-on-dark">Explore the collection</a>
          <a href="#contact" className="btn-pill" style={{ background: "#C1502E", color: "#F2E4CC" }}>Sell your property</a>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const ref = useReveal();
  const cats = [
    { name: "Villas", count: "212 homes", img: prop1 },
    { name: "Apartments", count: "486 homes", img: prop2 },
    { name: "Beachfront", count: "94 homes", img: gal2 },
    { name: "Off-plan", count: "37 projects", img: prop3 },
    { name: "Private Listings", count: "By appointment", img: gal5 },
  ];
  return (
    <section id="categories" ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-8 max-w-3xl">
          <SearchBar />
        </div>
        <div className="mb-8">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>BROWSE BY CATEGORY</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Find your place.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {cats.map((c) => (
            <a key={c.name} href="#properties" className="reveal group block relative overflow-hidden">
              <img src={c.img} alt={c.name} className="gallery-img w-full h-[220px] object-cover" width={600} height={800} loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(27,75,102,0) 40%, rgba(31,46,56,0.8) 100%)" }} />
              <div className="absolute bottom-4 left-4 right-4" style={{ color: "#F2E4CC" }}>
                <h3 className="font-display text-xl leading-tight">{c.name}</h3>
                <p className="font-mono-eyebrow text-[10px] mt-1" style={{ color: "#7FB6D9" }}>{c.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>ABOUT MEDI ESTATE</p>
        <h2 className="reveal mt-4 font-display text-4xl md:text-5xl leading-tight" style={{ color: "#1F2E38" }}>
          A boutique brokerage for the UAE coast.
        </h2>
        <p className="reveal mt-5 text-base leading-relaxed" style={{ color: "#1F2E38" }}>
          We're a small, specialist agency focused on the homes and coastlines we know best.
        </p>
        <p className="reveal mt-4 text-base leading-relaxed" style={{ color: "#1F2E38" }}>
          Every property in our collection is chosen with care, and every client is looked after by one advisor — from the first viewing to the day they move in.
        </p>
      </div>
    </section>
  );
}

function Featured() {
  const ref = useReveal();
  return (
    <section id="properties" ref={ref} className="py-10 px-6" style={{ background: "#E8D6AE" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>FEATURED PROPERTIES</p>
            <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>
              A considered collection
            </h2>
          </div>
          <Link to="/property/palm-villa" className="reveal btn-pill btn-outline">Explore the collection →</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <PropertyCard
              p={{
                title: "Villa Azzurra",
                location: "PALM JUMEIRAH, DUBAI",
                price: "AED 42,500,000",
                beds: 6,
                baths: 7,
                sqft: "12,400",
                image: prop1,
                tag: "MEDI SELECTED",
                tall: true,
                href: true,
                blurb: "A private beachfront residence on the western crescent, with direct access to the sand and uninterrupted views across the Gulf.",
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <PropertyCard p={{ title: "Marina Penthouse", location: "DUBAI MARINA, DUBAI", price: "AED 11,800,000", beds: 3, baths: 4, sqft: "4,100", image: prop2 }} />
            <PropertyCard p={{ title: "Casa del Patio", location: "SAADIYAT ISLAND, ABU DHABI", price: "AED 8,200,000", beds: 4, baths: 5, sqft: "5,600", image: prop3 }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <PropertyCard p={{ title: "Palm Grove House", location: "AL BARARI, DUBAI", price: "AED 17,400,000", beds: 5, baths: 6, sqft: "8,900", image: prop4 }} />
          <PropertyCard p={{ title: "Hayat Cove", location: "AL HAMRA, RAS AL KHAIMAH", price: "AED 9,600,000", beds: 4, baths: 4, sqft: "5,200", image: gal5 }} />
        </div>
      </div>
    </section>
  );
}

function Why() {
  const ref = useReveal();
  const items = [
    { num: "01", title: "Local knowledge", body: "We know the streets, coastlines and communities we represent." },
    { num: "02", title: "Carefully selected", body: "Every property is considered before it becomes part of our collection." },
    { num: "03", title: "A personal approach", body: "One advisor from the first viewing to the final signature." },
    { num: "04", title: "Beyond the sale", body: "From handover to settling in, we're here after the keys change hands." },
  ];
  return (
    <section ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>WHY MEDI ESTATE</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>
            The way we work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.num} className="reveal p-6 border" style={{ borderColor: "rgba(27,75,102,0.18)", background: "rgba(242,228,204,0.4)" }}>
              <p className="font-mono-eyebrow text-[11px]" style={{ color: "#C1502E" }}>{it.num}</p>
              <h3 className="font-display text-2xl mt-3" style={{ color: "#1F2E38" }}>{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(31,46,56,0.78)" }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useReveal();
  const shots = [
    { img: gal1, label: "Architecture", alt: "Archway to pool", cls: "md:row-span-2" },
    { img: gal2, label: "Interior detail", alt: "Terrace at night", cls: "md:col-span-2" },
    { img: gal3, label: "Material / texture", alt: "Bathroom with sea view", cls: "md:row-span-2" },
    { img: gal4, label: "Coastline", alt: "Palm trees", cls: "" },
    { img: gal5, label: "Pool", alt: "Infinity pool at dawn", cls: "" },
  ];
  return (
    <section id="gallery" ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>THE MEDI JOURNAL</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Places worth looking twice at.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {shots.map((s) => (
            <figure key={s.label} className={`reveal overflow-hidden relative ${s.cls}`}>
              <img src={s.img} alt={s.alt} className="gallery-img w-full h-full object-cover" width={1000} height={900} loading="lazy" />
              <figcaption className="absolute bottom-3 left-3 font-mono-eyebrow text-[10px] px-2.5 py-1" style={{ color: "#F2E4CC", background: "rgba(31,46,56,0.6)", borderRadius: 999 }}>
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useReveal();
  const items = [
    { quote: "They found us a house that wasn't listed anywhere. Two viewings, offer accepted in a week.", name: "Sara & Omar K.", place: "Buyers, Palm Jumeirah" },
    { quote: "Handover took four months and Medi handled every meeting with the developer. I signed things; that was it.", name: "James R.", place: "Buyer, Dubai Marina" },
    { quote: "Sold our Saadiyat villa above asking. They knew the buyer before they knew the property.", name: "Leila H.", place: "Seller, Saadiyat Island" },
  ];
  return (
    <section id="testimonials" ref={ref} className="py-10 px-6" style={{ background: "#E8D6AE" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>TESTIMONIALS</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="reveal p-6 relative border-l-2" style={{ borderColor: "#C1502E", background: "rgba(242,228,204,0.5)" }}>
              <blockquote className="font-display italic text-xl leading-snug" style={{ color: "#1F2E38" }}>
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4">
                <p className="font-mono-eyebrow" style={{ color: "#1B4B66" }}>{t.name}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(31,46,56,0.65)" }}>{t.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Choice({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            type="button"
            key={o}
            onClick={() => onChange(o)}
            className="px-4 py-2 text-xs tracking-wide transition-colors"
            style={{
              borderRadius: 999,
              background: active ? "#1B4B66" : "transparent",
              color: active ? "#F2E4CC" : "#1F2E38",
              border: active ? "1px solid #1B4B66" : "1px solid rgba(31,46,56,0.25)",
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Contact() {
  const ref = useReveal();
  const [intent, setIntent] = useState("Buy");
  const [where, setWhere] = useState("Dubai");
  const [budget, setBudget] = useState("AED 5M – 10M");
  return (
    <section id="contact" ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>GET IN TOUCH</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Let's find your place.</h2>
          <p className="reveal mt-4 text-base" style={{ color: "rgba(31,46,56,0.75)" }}>Tell us what you're looking for and we'll take it from there.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <form className="reveal p-6 border" style={{ borderColor: "rgba(27,75,102,0.2)", background: "#F2E4CC" }} onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5">
              <div>
                <p className="font-mono-eyebrow text-[10px] mb-2" style={{ color: "#7A6B52" }}>I'M LOOKING TO</p>
                <Choice options={["Buy", "Sell", "Rent", "Invest"]} value={intent} onChange={setIntent} />
              </div>
              <div>
                <p className="font-mono-eyebrow text-[10px] mb-2" style={{ color: "#7A6B52" }}>WHERE</p>
                <Choice options={["Dubai", "Abu Dhabi", "Ras Al Khaimah"]} value={where} onChange={setWhere} />
              </div>
              <div>
                <p className="font-mono-eyebrow text-[10px] mb-2" style={{ color: "#7A6B52" }}>BUDGET</p>
                <Choice options={["Under AED 5M", "AED 5M – 10M", "AED 10M – 25M", "Above AED 25M"]} value={budget} onChange={setBudget} />
              </div>

              <div className="pt-2 border-t" style={{ borderColor: "rgba(31,46,56,0.15)" }}>
                <p className="font-mono-eyebrow text-[10px] mb-3 mt-3" style={{ color: "#7A6B52" }}>YOUR DETAILS</p>
                <div className="space-y-3">
                  <input type="text" placeholder="Your name" className="w-full bg-transparent border-b py-2 text-sm outline-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
                  <input type="email" placeholder="Email" className="w-full bg-transparent border-b py-2 text-sm outline-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
                  <textarea placeholder="A little about what you're after" rows={3} className="w-full bg-transparent border-b py-2 text-sm outline-none resize-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
                  <button type="submit" className="btn-pill btn-primary w-full mt-2">Send enquiry</button>
                </div>
              </div>
            </div>
          </form>

          <div className="reveal p-6 border flex flex-col" style={{ borderColor: "rgba(27,75,102,0.2)", background: "#F2E4CC" }}>
            <p className="font-mono-eyebrow mb-4" style={{ color: "#1B4B66" }}>OFFICE HOURS</p>
            <ul className="text-sm space-y-3" style={{ color: "#1F2E38" }}>
              <li className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(31,46,56,0.15)" }}><span>Sunday — Thursday</span><span className="font-mono-eyebrow">9:00 – 19:00</span></li>
              <li className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(31,46,56,0.15)" }}><span>Friday</span><span className="font-mono-eyebrow">14:00 – 19:00</span></li>
              <li className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(31,46,56,0.15)" }}><span>Saturday</span><span className="font-mono-eyebrow">10:00 – 17:00</span></li>
              <li className="pt-1 text-xs" style={{ color: "rgba(31,46,56,0.65)" }}>Private viewings available outside these hours by appointment.</li>
            </ul>

            <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(31,46,56,0.15)" }}>
              <p className="font-mono-eyebrow mb-4" style={{ color: "#1B4B66" }}>CONTACT</p>
              <ul className="text-sm space-y-3" style={{ color: "#1F2E38" }}>
                <li className="flex justify-between gap-3">
                  <span className="font-mono-eyebrow text-[10px]" style={{ color: "#7A6B52" }}>PHONE</span>
                  <span>+971 4 555 8210</span>
                </li>
                <li className="flex justify-between gap-3">
                  <span className="font-mono-eyebrow text-[10px]" style={{ color: "#7A6B52" }}>EMAIL</span>
                  <span>hello@mediestate.ae</span>
                </li>
                <li className="flex justify-between gap-3">
                  <span className="font-mono-eyebrow text-[10px]" style={{ color: "#7A6B52" }}>OFFICE</span>
                  <span className="text-right">Jumeirah Bay, Villa 14<br />Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="reveal mt-6 overflow-hidden border" style={{ borderColor: "rgba(27,75,102,0.2)" }}>
          <iframe
            title="Medi Estate office map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.22%2C25.19%2C55.27%2C25.22&layer=mapnik&marker=25.205%2C55.245"
            className="w-full h-[320px]"
            style={{ filter: "sepia(0.15) hue-rotate(-10deg) saturate(0.85)", border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <About />
      <Featured />
      <Why />
      <Gallery />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  );
}
