```tsx
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import hero from "@/assets/hero.jpg";
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

export default function Index() {
  const categories = [
    {
      title: "Villas",
      image: gal1,
      description: "Private residences shaped around space, light and privacy.",
    },
    {
      title: "Apartments",
      image: gal2,
      description: "Refined city living in Dubai's most sought-after addresses.",
    },
    {
      title: "Beachfront",
      image: gal3,
      description: "Coastal homes where architecture meets the water.",
    },
    {
      title: "Off-plan",
      image: gal4,
      description: "Considered opportunities in the UAE's next destinations.",
    },
    {
      title: "Private Listings",
      image: gal5,
      description: "Quietly represented homes available through our network.",
    },
  ];

  const properties = [
    {
      name: "Villa Azzurra",
      location: "Palm Jumeirah, Dubai",
      price: "AED 42,000,000",
      details: "6 BEDROOMS · 7 BATHROOMS · 12,400 SQ FT",
      image: prop1,
      label: "Private Listing",
    },
    {
      name: "Marina Penthouse",
      location: "Dubai Marina, Dubai",
      price: "AED 18,500,000",
      details: "4 BEDROOMS · 5 BATHROOMS · 5,200 SQ FT",
      image: prop2,
      label: "Medi Selected",
    },
    {
      name: "Casa del Patio",
      location: "Saadiyat Island, Abu Dhabi",
      price: "AED 12,800,000",
      details: "5 BEDROOMS · 6 BATHROOMS · 6,850 SQ FT",
      image: prop3,
      label: "Off-plan",
    },
    {
      name: "Palm Grove House",
      location: "Dubai Hills Estate, Dubai",
      price: "AED 16,900,000",
      details: "5 BEDROOMS · 6 BATHROOMS · 7,100 SQ FT",
      image: prop4,
      label: "Medi Selected",
    },
  ];

  const reasons = [
    {
      number: "01",
      title: "Local knowledge",
      text: "We know the streets, coastlines and communities we represent — and what makes each one worth calling home.",
    },
    {
      number: "02",
      title: "Carefully selected",
      text: "Every property is considered before it becomes part of our collection. Quality matters more than quantity.",
    },
    {
      number: "03",
      title: "A personal approach",
      text: "From the first conversation to the final signature, your search is guided by one dedicated advisor.",
    },
    {
      number: "04",
      title: "Beyond the sale",
      text: "Our relationship doesn't end when the keys change hands. We're here to make settling in feel effortless.",
    },
  ];

  const agents = [
    {
      name: "Layla Hassan",
      role: "Palm Jumeirah · Waterfront Residences",
      image: agent1,
    },
    {
      name: "Omar Khalil",
      role: "Dubai Hills · Contemporary Villas",
      image: agent2,
    },
    {
      name: "Mariam Saeed",
      role: "Saadiyat Island · Coastal Homes",
      image: agent3,
    },
    {
      name: "Youssef Karim",
      role: "Dubai Marina · City Residences",
      image: agent4,
    },
  ];

  return (
    <main className="bg-background text-foreground">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={hero}
          alt="Contemporary luxury residence overlooking the water"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 text-white md:px-12 md:py-10">

          <div className="flex items-start justify-between">
            <p className="text-xs tracking-[0.3em] uppercase">
              MEDI ESTATE
            </p>

            <p className="hidden text-xs tracking-[0.2em] uppercase md:block">
              Dubai · Abu Dhabi · Ras Al Khaimah
            </p>
          </div>

          <div className="max-w-5xl pb-8">
            <p className="mb-6 text-xs tracking-[0.3em] uppercase opacity-70">
              Boutique Property Advisory
            </p>

            <h1 className="max-w-4xl font-display text-6xl leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-[9rem]">
              A different
              <br />
              <span className="italic">way to find home.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-sm leading-relaxed text-white/75">
                Carefully selected residences across the UAE's most remarkable
                coastlines, communities and city addresses.
              </p>

              <a
                href="#properties"
                className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase"
              >
                Explore properties
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* CATEGORIES */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-5 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                The Collection
              </p>

              <h2 className="font-display text-5xl leading-none md:text-7xl">
                Find your
                <br />
                <span className="italic">place.</span>
              </h2>
            </div>

            <p className="max-w-md self-end text-sm leading-relaxed text-muted-foreground">
              From quiet coastal residences to contemporary city apartments,
              we represent properties chosen for the way they feel — not simply
              the way they look.
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <a
                key={category.title}
                href="#properties"
                className="group relative min-h-[420px] overflow-hidden bg-background"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />

                <div className="relative flex h-full flex-col justify-between p-6 text-white">
                  <span className="self-end">
                    <ArrowUpRight size={20} />
                  </span>

                  <div>
                    <h3 className="font-display text-3xl">
                      {category.title}
                    </h3>

                    <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-white/70">
                      {category.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>


      {/* FEATURED PROPERTIES */}
      <section id="properties" className="border-t border-border px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                The Medi Collection
              </p>

              <h2 className="font-display text-5xl leading-none md:text-7xl">
                A considered
                <br />
                <span className="italic">collection.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A selection of residences currently represented by Medi Estate,
              from private waterfront homes to contemporary city living.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {properties.map((property, index) => (
              <article
                key={property.name}
                className={index % 2 === 1 ? "md:mt-24" : ""}
              >
                <div className="group relative aspect-[4/5] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 bg-background/90 px-3 py-2 text-[10px] tracking-[0.2em] uppercase">
                    {property.label}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-3xl">
                        {property.name}
                      </h3>

                      <p className="mt-2 text-xs tracking-wide text-muted-foreground">
                        {property.location}
                      </p>
                    </div>

                    <p className="text-sm whitespace-nowrap">
                      {property.price}
                    </p>
                  </div>

                  <p className="border-t border-border pt-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    {property.details}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 border-t border-border pt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase"
            >
              Explore the collection
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="bg-foreground px-6 py-24 text-background md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">

          <div>
            <p className="mb-5 text-xs tracking-[0.25em] uppercase opacity-50">
              About Medi
            </p>

            <h2 className="font-display text-5xl leading-none md:text-7xl">
              Homes with
              <br />
              <span className="italic">a sense of place.</span>
            </h2>
          </div>

          <div className="max-w-lg self-end">
            <p className="text-lg leading-relaxed opacity-80">
              Medi Estate is a boutique property advisory built around a
              simple idea: finding a home should feel personal.
            </p>

            <p className="mt-6 text-sm leading-relaxed opacity-50">
              We work across Dubai, Abu Dhabi and the UAE's emerging coastal
              destinations, connecting people with properties that suit the
              life they want to build.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 border-b border-background/30 pb-2 text-xs tracking-[0.2em] uppercase"
            >
              Get to know Medi
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>
      </section>


      {/* WHY MEDI */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">

            <div>
              <p className="mb-5 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                Why Medi
              </p>

              <h2 className="font-display text-5xl leading-none md:text-7xl">
                The difference
                <br />
                <span className="italic">is in the details.</span>
              </h2>
            </div>

            <div className="grid border-t border-border">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="grid gap-6 border-b border-border py-8 md:grid-cols-[60px_1fr_1.2fr]"
                >
                  <span className="text-xs text-muted-foreground">
                    {reason.number}
                  </span>

                  <h3 className="font-display text-2xl">
                    {reason.title}
                  </h3>

                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* AGENTS */}
      <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16">
            <p className="mb-5 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              The People
            </p>

            <h2 className="font-display text-5xl leading-none md:text-7xl">
              The people
              <br />
              <span className="italic">behind the properties.</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent) => (
              <article key={agent.name}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-2xl">
                    {agent.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {agent.role}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* JOURNAL / GALLERY */}
      <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                The Medi Journal
              </p>

              <h2 className="font-display text-5xl leading-none md:text-7xl">
                Places worth
                <br />
                <span className="italic">looking twice at.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Architecture, interiors and the places shaping the way we live
              across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="aspect-[3/4] overflow-hidden md:col-span-1">
              <img
                src={gal1}
                alt="Contemporary architectural detail"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-[3/4] overflow-hidden md:col-span-2 md:aspect-auto">
              <img
                src={gal2}
                alt="Luxury beachfront residence"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={gal3}
                alt="Refined luxury interior"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="col-span-2 aspect-[16/9] overflow-hidden md:col-span-2">
              <img
                src={gal4}
                alt="Dubai skyline at sunset"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="col-span-2 aspect-[16/9] overflow-hidden md:col-span-2">
              <img
                src={gal5}
                alt="Luxury villa with swimming pool"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* CONTACT CTA */}
      <section
        id="contact"
        className="bg-foreground px-6 py-24 text-background md:px-12 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="mb-5 text-xs tracking-[0.25em] uppercase opacity-50">
              Begin your search
            </p>

            <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
              Let's find
              <br />
              <span className="italic">your place.</span>
            </h2>
          </div>

          <div className="max-w-lg self-end">
            <p className="text-lg leading-relaxed opacity-70">
              Tell us what you're looking for. We'll take it from there.
            </p>

            <form className="mt-10 space-y-8">

              <div>
                <label className="mb-3 block text-[10px] tracking-[0.2em] uppercase opacity-50">
                  I'm looking to
                </label>

                <select className="w-full border-b border-background/20 bg-transparent py-3 text-sm outline-none">
                  <option>Buy</option>
                  <option>Sell</option>
                  <option>Rent</option>
                  <option>Invest</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-[10px] tracking-[0.2em] uppercase opacity-50">
                  Preferred location
                </label>

                <select className="w-full border-b border-background/20 bg-transparent py-3 text-sm outline-none">
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Ras Al Khaimah</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-[10px] tracking-[0.2em] uppercase opacity-50">
                  Your email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-b border-background/20 bg-transparent py-3 text-sm outline-none placeholder:text-background/30"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 border-b border-background/40 pb-2 text-xs tracking-[0.2em] uppercase"
              >
                Start a conversation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
```
