import { createFileRoute } from "@tanstack/react-router";
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
import { MediLogo } from "@/components/MediLogo";
import { CompassRose, KeyIcon, Archway, WaveShield, OliveBranch, Anchor } from "@/components/CoastalIcons";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--24f967db-11c1-43ac-bd5a-9bd64aeef82a.lovable.app/og-image.jpg" },
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
      <nav className="hidden md:flex items-center gap-8 text-sand" style={{ color: "#F2E4CC" }}>
        <a href="#properties" className="text-sm hover:opacity-70 transition-opacity">Properties</a>
        <a href="#about" className="text-sm hover:opacity-70 transition-opacity">About</a>
        <a href="#gallery" className="text-sm hover:opacity-70 transition-opacity">Gallery</a>
        <a href="#testimonials" className="text-sm hover:opacity-70 transition-opacity">Testimonials</a>
        <a href="#contact" className="btn-pill btn-on-dark !py-2 !px-5 text-xs">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  const headline = ["The", "Leading", "Real", "Estate", "Company", "in", "the", "UAE"];
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Coastal villa at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1200}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(27,75,102,0.55) 0%, rgba(31,46,56,0.55) 60%, rgba(31,46,56,0.75) 100%)" }} />
      <Nav />
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16" style={{ color: "#F2E4CC" }}>
        <p className="font-mono-eyebrow mb-6 hero-fade" style={{ animationDelay: "1.8s", color: "#7FB6D9" }}>
          EST. 2011 — DUBAI · ABU DHABI · RAS AL KHAIMAH
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
          {headline.map((w, i) => (
            <span key={i} className="hero-word mr-3" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
              {w}
            </span>
          ))}
        </h1>
        <p className="font-display italic text-2xl md:text-3xl mt-6 hero-fade" style={{ animationDelay: "1.5s", color: "#F2E4CC" }}>
          Where the Mediterranean Meets the Gulf
        </p>
        <p className="max-w-xl mt-6 text-base leading-relaxed hero-fade" style={{ animationDelay: "1.9s", color: "rgba(242,228,204,0.85)" }}>
          Beachfront villas, marina penthouses, and courtyard homes along the coast. We list properties we've walked through and represent buyers we've met.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 hero-fade" style={{ animationDelay: "2.1s" }}>
          <a href="#properties" className="btn-pill btn-on-dark">Browse listings</a>
          <a href="#contact" className="btn-pill" style={{ background: "#C1502E", color: "#F2E4CC" }}>Book a viewing</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="py-[52px] px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>ABOUT MEDI ESTATE</p>
        <h2 className="reveal mt-4 font-display text-4xl md:text-5xl leading-tight" style={{ color: "#1F2E38" }}>
          A coastal agency, working the UAE shoreline for fourteen years.
        </h2>
        <p className="reveal mt-5 text-base leading-relaxed" style={{ color: "#1F2E38" }}>
          We started with a single office in Jumeirah and a short list of villas we'd personally inspected. That habit hasn't changed. Every property on our books has been walked, measured, and photographed by someone on our team before it reaches a client — which is why we still sell most homes to buyers we already know.
        </p>
        <p className="reveal mt-4 text-base leading-relaxed" style={{ color: "#1F2E38" }}>
          The name Medi Estate is our promise: we work where the Mediterranean sensibility — sun, stone, water, shade — meets the pace of the Gulf.
        </p>
      </div>
    </section>
  );
}

function Featured() {
  const ref = useReveal();
  return (
    <section id="properties" ref={ref} className="py-[52px] px-6" style={{ background: "#E8D6AE" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>FEATURED PROPERTIES</p>
            <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>
              Currently on our books
            </h2>
          </div>
          <a href="#contact" className="reveal btn-pill btn-outline">See all listings</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Large featured — spans 2 cols */}
          <article className="reveal lg:col-span-2 relative group">
            <div className="relative overflow-hidden">
              <img src={prop1} alt="Beachfront villa" className="w-full h-[520px] object-cover" width={1400} height={1100} loading="lazy" />
              <span className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-widest uppercase font-mono-eyebrow" style={{ background: "#C1502E", color: "#F2E4CC", borderRadius: 999 }}>
                Featured
              </span>
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono-eyebrow" style={{ color: "#7A6B52" }}>PALM JUMEIRAH · 6 BED</p>
                <h3 className="font-display text-3xl mt-1" style={{ color: "#1F2E38" }}>Villa Azzurra</h3>
                <p className="text-sm mt-2 max-w-lg" style={{ color: "rgba(31,46,56,0.75)" }}>
                  Beachfront on the west crescent. Private pool, 12m frontage, staff quarters, direct sand access.
                </p>
              </div>
              <p className="font-display text-2xl whitespace-nowrap" style={{ color: "#1B4B66" }}>AED 42.5M</p>
            </div>
          </article>

          {/* Right column: two stacked */}
          <div className="grid grid-cols-1 gap-4">
            <article className="reveal">
              <div className="overflow-hidden">
                <img src={prop2} alt="Marina penthouse" className="w-full h-[250px] object-cover" width={900} height={700} loading="lazy" />
              </div>
              <div className="mt-3">
                <p className="font-mono-eyebrow" style={{ color: "#7A6B52" }}>DUBAI MARINA · 3 BED</p>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl" style={{ color: "#1F2E38" }}>Marina Penthouse</h3>
                  <p className="font-display text-lg" style={{ color: "#1B4B66" }}>AED 11.8M</p>
                </div>
              </div>
            </article>
            <article className="reveal">
              <div className="overflow-hidden">
                <img src={prop3} alt="Courtyard townhouse" className="w-full h-[250px] object-cover" width={900} height={700} loading="lazy" />
              </div>
              <div className="mt-3">
                <p className="font-mono-eyebrow" style={{ color: "#7A6B52" }}>SAADIYAT · 4 BED</p>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl" style={{ color: "#1F2E38" }}>Casa del Patio</h3>
                  <p className="font-display text-lg" style={{ color: "#1B4B66" }}>AED 8.2M</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <article className="reveal">
            <div className="overflow-hidden">
              <img src={prop4} alt="Desert villa" className="w-full h-[280px] object-cover" width={900} height={700} loading="lazy" />
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <div>
                <p className="font-mono-eyebrow" style={{ color: "#7A6B52" }}>AL BARARI · 5 BED</p>
                <h3 className="font-display text-2xl" style={{ color: "#1F2E38" }}>Palm Grove House</h3>
              </div>
              <p className="font-display text-lg" style={{ color: "#1B4B66" }}>AED 17.4M</p>
            </div>
          </article>
          <article className="reveal">
            <div className="overflow-hidden">
              <img src={gal5} alt="Coastal home" className="w-full h-[280px] object-cover" width={1100} height={800} loading="lazy" />
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <div>
                <p className="font-mono-eyebrow" style={{ color: "#7A6B52" }}>RAS AL KHAIMAH · 4 BED</p>
                <h3 className="font-display text-2xl" style={{ color: "#1F2E38" }}>Hayat Cove</h3>
              </div>
              <p className="font-display text-lg" style={{ color: "#1B4B66" }}>AED 9.6M</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const ref = useReveal();
  const items = [
    { icon: <CompassRose />, title: "We know the coast", body: "Fourteen years of walking beachfront plots from Jumeirah to Al Hamra." },
    { icon: <KeyIcon />, title: "Direct owner access", body: "Roughly 60% of our listings never reach a public portal." },
    { icon: <Archway />, title: "Architectural detail", body: "Every listing is measured, floor-planned, and photographed by our team." },
    { icon: <WaveShield />, title: "Buyer protection", body: "Independent title, structural, and salinity checks before you sign." },
    { icon: <OliveBranch />, title: "Long-term care", body: "We handle handover, snagging, and rental setup after purchase if you want us to." },
    { icon: <Anchor />, title: "Settled locally", body: "Our agents live in the neighbourhoods they sell. They pick up the phone." },
  ];
  return (
    <section ref={ref} className="py-[52px] px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>WHY MEDI ESTATE</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>
            Six things we do differently
          </h2>
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
    <section className="py-[52px] px-6" style={{ background: "#1B4B66", color: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { n: "1,240+", l: "HOMES SOLD" },
          { n: "14", l: "YEARS ON THE COAST" },
          { n: "AED 6.8B", l: "TRANSACTED VALUE" },
          { n: "38", l: "AGENTS IN-HOUSE" },
        ].map((s, i) => (
          <div key={i}>
            <p className="font-display text-5xl md:text-6xl" style={{ color: "#F2E4CC" }}>{s.n}</p>
            <p className="font-mono-eyebrow mt-2" style={{ color: "#7FB6D9" }}>{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useReveal();
  return (
    <section id="gallery" ref={ref} className="py-[52px] px-6" style={{ background: "#E8D6AE" }}>
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
    <section id="testimonials" ref={ref} className="py-[52px] px-6" style={{ background: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>TESTIMONIALS</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="reveal p-6 relative border-l-2" style={{ borderColor: "#C1502E", background: "rgba(232,214,174,0.4)" }}>
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
    <section id="contact" ref={ref} className="py-[52px] px-6" style={{ background: "#E8D6AE" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono-eyebrow reveal" style={{ color: "#1B4B66" }}>GET IN TOUCH</p>
          <h2 className="reveal mt-3 font-display text-4xl md:text-5xl" style={{ color: "#1F2E38" }}>Talk to an agent</h2>
        </div>

        {/* Row 1: Inquiry form + Office hours */}
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

          <div className="reveal p-6 border" style={{ borderColor: "rgba(27,75,102,0.2)", background: "#F2E4CC" }}>
            <p className="font-mono-eyebrow mb-4" style={{ color: "#1B4B66" }}>OFFICE HOURS</p>
            <ul className="text-sm space-y-3" style={{ color: "#1F2E38" }}>
              <li className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(31,46,56,0.15)" }}><span>Sunday — Thursday</span><span className="font-mono-eyebrow">9:00 – 19:00</span></li>
              <li className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(31,46,56,0.15)" }}><span>Friday</span><span className="font-mono-eyebrow">14:00 – 19:00</span></li>
              <li className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(31,46,56,0.15)" }}><span>Saturday</span><span className="font-mono-eyebrow">10:00 – 17:00</span></li>
              <li className="pt-2 text-xs" style={{ color: "rgba(31,46,56,0.65)" }}>Private viewings available outside these hours by appointment.</li>
            </ul>
          </div>
        </div>

        {/* Row 2: Contact info */}
        <div className="reveal mt-6 p-6 border" style={{ borderColor: "rgba(27,75,102,0.2)", background: "#F2E4CC" }}>
          <p className="font-mono-eyebrow mb-4" style={{ color: "#1B4B66" }}>CONTACT INFORMATION</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm" style={{ color: "#1F2E38" }}>
            <div>
              <p className="font-mono-eyebrow text-[10px] mb-1" style={{ color: "#7A6B52" }}>PHONE</p>
              <p>+971 4 555 8210</p>
            </div>
            <div>
              <p className="font-mono-eyebrow text-[10px] mb-1" style={{ color: "#7A6B52" }}>EMAIL</p>
              <p>hello@mediestate.ae</p>
            </div>
            <div>
              <p className="font-mono-eyebrow text-[10px] mb-1" style={{ color: "#7A6B52" }}>OFFICE</p>
              <p>Jumeirah Bay, Villa 14<br />Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Row 3: Map */}
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

function Footer() {
  const socials = ["Instagram", "Facebook", "LinkedIn", "YouTube", "TikTok", "WhatsApp"];
  return (
    <footer className="px-6 py-14" style={{ background: "#1B4B66", color: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b" style={{ borderColor: "rgba(242,228,204,0.15)" }}>
          <MediLogo onDark size="md" />
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#properties" className="hover:opacity-70">Properties</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#gallery" className="hover:opacity-70">Gallery</a>
            <a href="#testimonials" className="hover:opacity-70">Testimonials</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
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

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
      <Why />
      <Stats />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
