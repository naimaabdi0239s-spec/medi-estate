import { Link } from "@tanstack/react-router";
import { MediLogo } from "@/components/MediLogo";

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
