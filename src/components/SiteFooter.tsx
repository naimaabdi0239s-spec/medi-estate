import { MediLogo } from "@/components/MediLogo";

export function SiteFooter() {
  return (
    <footer className="px-6 pt-14 pb-8" style={{ background: "#1B4B66", color: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "rgba(242,228,204,0.15)" }}>
          <div>
            <MediLogo onDark size="md" />
            <p className="mt-4 text-sm max-w-xs" style={{ color: "rgba(242,228,204,0.8)" }}>
              Homes with a sense of place.
            </p>
          </div>
          <div>
            <p className="font-mono-eyebrow mb-4" style={{ color: "#7FB6D9" }}>EXPLORE</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#properties" className="hover:opacity-70 transition-opacity">Properties</a></li>
              <li><a href="#categories" className="hover:opacity-70 transition-opacity">Categories</a></li>
              <li><a href="#about" className="hover:opacity-70 transition-opacity">About</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono-eyebrow mb-4" style={{ color: "#7FB6D9" }}>CONNECT</p>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(242,228,204,0.85)" }}>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Instagram</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a></li>
              <li><a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 text-xs" style={{ color: "rgba(242,228,204,0.65)" }}>
          <p>Dubai · UAE</p>
          <p>© {new Date().getFullYear()} Med Estate.</p>
        </div>
      </div>
    </footer>
  );
}
