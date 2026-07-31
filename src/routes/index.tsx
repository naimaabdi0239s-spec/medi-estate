import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
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
import agent1 from "@/assets/agent1.jpg";
import agent2 from "@/assets/agent2.jpg";
import agent3 from "@/assets/agent3.jpg";
import agent4 from "@/assets/agent4.jpg";
import { MediLogo } from "@/components/MediLogo";
import { CompassRose, KeyIcon, Archway, WaveShield, OliveBranch, Anchor } from "@/components/CoastalIcons";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Medi Estate — Exceptional Homes on the UAE Coast" },
      { name: "description", content: "Beachfront villas, marina penthouses and off-plan homes across Dubai, Abu Dhabi and Ras Al Khaimah. Search verified listings with a coastal specialist." },
      { property: "og:title", content: "Medi Estate — Exceptional Homes on the UAE Coast" },
      { property: "og:description", content: "Exceptional homes for exceptional lifestyles. Browse verified coastal listings across the UAE." },
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
        <a href="#agents" className="text-sm hover:opacity-70 transition-opacity">Agents</a>
        <a href="#about" className="text-sm hover:opacity-70 transition-opacity">About</a>
        <a href="#contact" className="btn-pill btn-on-dark !py-2 !px-5 text-xs">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  const headline = ["Exceptional", "homes", "for", "exceptional", "lifestyles."];
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
        <p className="font-mono-eyebrow hero-fade" style={{ animationDelay: "1.8s", color: "#7FB6D9" }}>
          EST. 2011
        </p>
        <p className="font-mono-eyebrow mt-2 mb-6 hero-fade" style={{ animationDelay: "1.9s", color: "#7FB6D9" }}>
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
          Discover properties designed around the way you live
        </p>
        <p className="max-w-xl mt-6 text-base leading-relaxed hero-fade" style={{ animationDelay: "1.9s", color: "rgba(242,228,204,0.85)" }}>
          Beachfront villas, Dubai skyline apartments and architect-built interiors along the Gulf. Every home walked, measured and verified by our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 hero-fade" style={{ animationDelay: "2.1s" }}>
          <a href="#properties" className="btn-pill btn-on-dark">Explore Properties</a>
          <a href="#contact" className="btn-pill" style={{ background: "#C1502E", color: "#F2E4CC" }}>Sell Your Property</a>
        </div>
      </div>
    </section>
  );
}

function Search() {
  return (
    <section className="px-6 -mt-16 relative z-20 pb-10">
      <div className="max-w-5xl mx-auto">
        <SearchBar />
      </div>
    </section>
  );
}

function Categories() {
  const ref = useReveal();
  const cats = [
    { name: "Luxury Villas", count: "212 homes", img: prop1 },
    { name: "Apartments", count: "486 homes", img: prop2 },
    { name: "Commercial", count: "94 units", img: gal2 },
    { name: "Off-plan", count: "37 projects", img: prop3 },
    { name: "Rentals", count: "158 homes", img: gal5 },
  ];
  return (
    <section id="categories" ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>BROWSE BY CATEGORY</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>What are you looking for?</h2>
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
          A coastal agency, working the UAE shoreline for fourteen years.
        </h2>
        <p className="reveal mt-5 text-base leading-relaxed" style={{ color: "#1F2E38" }}>
          For over 14 years, we've helped people find exceptional homes along the UAE coast.
        </p>
        <p className="reveal mt-4 text-base leading-relaxed" style={{ color: "#1F2E38" }}>
          We started with one office in Jumeirah and a small collection of carefully selected properties. Today, we still personally visit every home before listing it because we believe our clients deserve to know exactly what they're buying.
        </p>
        <p className="reveal mt-4 text-base leading-relaxed" style={{ color: "#1F2E38" }}>
          At Medi Estate, we combine local expertise with a passion for beautiful coastal living.
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
              Currently on our books
            </h2>
          </div>
          <Link to="/property/palm-villa" className="reveal btn-pill btn-outline">View a full listing</Link>
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
                tag: "Featured",
                tall: true,
                href: true,
                blurb: "Beachfront on the west crescent. Private pool, 12m frontage, staff quarters and direct sand access.",
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
    { icon: <CompassRose />, title: "Local market expertise", body: "Fourteen years of walking beachfront plots from Jumeirah to Al Hamra." },
    { icon: <KeyIcon />, title: "Direct owner access", body: "Roughly 60% of our listings never reach a public portal." },
    { icon: <Archway />, title: "Verified properties", body: "Every listing is measured, floor-planned, and photographed by our team." },
    { icon: <WaveShield />, title: "Transparent transactions", body: "Independent title, structural, and salinity checks before you sign." },
    { icon: <OliveBranch />, title: "Personalized service", body: "We handle handover, snagging, and rental setup after purchase if you want us to." },
    { icon: <Anchor />, title: "Settled locally", body: "Our agents live in the neighbourhoods they sell. They pick up the phone." },
  ];
  const trust = ["Verified properties", "Local market expertise", "Personalized service", "Transparent transactions"];
  return (
    <section ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>WHY MEDI ESTATE?</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>
            Six things we do differently
          </h2>
          <ul className="reveal mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm" style={{ color: "#1F2E38" }}>
                <span style={{ color: "#C1502E" }}>✓</span> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="reveal p-6 border" style={{ borderColor: "rgba(27,75,102,0.18)", background: "rgba(242,228,204,0.4)" }}>
              <div className="mb-4">{it.icon}</div>
              <h3 className="font-display text-2xl" style={{ color: "#1F2E38" }}>{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(31,46,56,0.78)" }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-10 px-6" style={{ background: "#1B4B66", color: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { n: "1,240+", l: "HOMES SOLD" },
          { n: "14", l: "YEARS ON THE COAST" },
          { n: "AED 6.8B", l: "TRANSACTED VALUE" },
          { n: "38", l: "AGENTS IN-HOUSE" },
        ].map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <p className="font-display text-4xl md:text-5xl tabular-nums" style={{ color: "#F2E4CC", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{s.n}</p>
            <p className="font-mono-eyebrow mt-3" style={{ color: "#7FB6D9" }}>{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Agents() {
  const ref = useReveal();
  const agents = [
    { img: agent1, name: "Layla Nasser", spec: "Beachfront villas · Palm Jumeirah", listings: "38 active listings" },
    { img: agent2, name: "Marc Delacroix", spec: "Penthouses · Dubai Marina", listings: "24 active listings" },
    { img: agent3, name: "Elena Vidal", spec: "Off-plan & investment", listings: "41 active listings" },
    { img: agent4, name: "Rohan Mehta", spec: "Commercial & rentals", listings: "29 active listings" },
  ];
  return (
    <section id="agents" ref={ref} className="py-10 px-6" style={{ background: "#E8D6AE" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>OUR TEAM</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Meet our experts</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((a) => (
            <article key={a.name} className="reveal group">
              <div className="overflow-hidden">
                <img src={a.img} alt={a.name} className="gallery-img w-full h-[340px] object-cover" width={800} height={1000} loading="lazy" />
              </div>
              <div className="p-4 border border-t-0" style={{ borderColor: "rgba(27,75,102,0.16)", background: "rgba(242,228,204,0.55)" }}>
                <h3 className="font-display text-2xl" style={{ color: "#1F2E38" }}>{a.name}</h3>
                <p className="text-sm mt-1" style={{ color: "rgba(31,46,56,0.75)" }}>{a.spec}</p>
                <p className="font-mono-eyebrow text-[10px] mt-3" style={{ color: "#1B4B66" }}>{a.listings}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useReveal();
  return (
    <section id="gallery" ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>GALLERY</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Inside our listings</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="reveal overflow-hidden md:row-span-2">
            <img src={gal1} alt="Archway to pool" className="gallery-img w-full h-full object-cover" width={800} height={1000} loading="lazy" />
          </div>
          <div className="reveal overflow-hidden md:col-span-2">
            <img src={gal2} alt="Terrace at night" className="gallery-img w-full h-full object-cover" width={1000} height={700} loading="lazy" />
          </div>
          <div className="reveal overflow-hidden md:row-span-2">
            <img src={gal3} alt="Bathroom with sea view" className="gallery-img w-full h-full object-cover" width={700} height={900} loading="lazy" />
          </div>
          <div className="reveal overflow-hidden">
            <img src={gal4} alt="Palm trees" className="gallery-img w-full h-full object-cover" width={900} height={700} loading="lazy" />
          </div>
          <div className="reveal overflow-hidden">
            <img src={gal5} alt="Infinity pool at dawn" className="gallery-img w-full h-full object-cover" width={1100} height={800} loading="lazy" />
          </div>
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

function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" ref={ref} className="py-10 px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>GET IN TOUCH</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Talk to an agent</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="reveal p-6 border" style={{ borderColor: "rgba(27,75,102,0.2)", background: "#F2E4CC" }} onSubmit={(e) => e.preventDefault()}>
            <p className="font-mono-eyebrow mb-4" style={{ color: "#1B4B66" }}>INQUIRY</p>
            <div className="space-y-3">
              <input type="text" placeholder="Your name" className="w-full bg-transparent border-b py-2 text-sm outline-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b py-2 text-sm outline-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
              <input type="text" placeholder="Property or area of interest" className="w-full bg-transparent border-b py-2 text-sm outline-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
              <textarea placeholder="Message" rows={3} className="w-full bg-transparent border-b py-2 text-sm outline-none resize-none" style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} />
              <button type="submit" className="btn-pill btn-primary w-full mt-2">Send inquiry</button>
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
      <Search />
      <Categories />
      <About />
      <Featured />
      <Why />
      <Stats />
      <Agents />
      <Gallery />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  );
}

export function SiteFooter() {
  const socials = ["Instagram", "Facebook", "LinkedIn", "YouTube", "TikTok", "WhatsApp"];
  return (
    <footer className="px-6 pt-14 pb-8" style={{ background: "#1B4B66", color: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b" style={{ borderColor: "rgba(242,228,204,0.15)" }}>
          <div className="md:col-span-2">
            <MediLogo onDark size="md" />
            <p className="mt-4 text-sm max-w-sm" style={{ color: "rgba(242,228,204,0.75)" }}>
              A coastal agency working the UAE shoreline since 2011. Beachfront villas, marina penthouses and off-plan homes, personally verified.
            </p>
          </div>
          <div>
            <p className="font-mono-eyebrow mb-4" style={{ color: "#7FB6D9" }}>EXPLORE</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" hash="properties" className="hover:opacity-70">Buy</Link></li>
              <li><Link to="/" hash="categories" className="hover:opacity-70">Rent</Link></li>
              <li><Link to="/" hash="contact" className="hover:opacity-70">Sell</Link></li>
              <li><Link to="/" hash="about" className="hover:opacity-70">About</Link></li>
              <li><Link to="/property/palm-villa" className="hover:opacity-70">Palm Villa</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono-eyebrow mb-4" style={{ color: "#7FB6D9" }}>CONTACT</p>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(242,228,204,0.85)" }}>
              <li>+971 4 555 8210</li>
              <li>hello@mediestate.ae</li>
              <li>Jumeirah Bay, Villa 14<br />Dubai, UAE</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 py-8 justify-center">
          {socials.map((s) => (
            <a key={s} href="#" aria-label={s} className="btn-pill btn-on-dark !py-2 !px-4 text-xs">{s}</a>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t text-xs" style={{ borderColor: "rgba(242,228,204,0.15)", color: "rgba(242,228,204,0.65)" }}>
          <p>Jumeirah Bay, Villa 14, Dubai, UAE · +971 4 555 8210</p>
          <p>© {new Date().getFullYear()} Medi Estate. RERA ORN 12847.</p>
        </div>
      </div>
    </footer>
  );
}
