import { MediLogo } from "@/components/MediLogo";

export function SiteFooter() {
  return (
    <footer className="px-6 py-5" style={{ background: "#1B4B66", color: "#F2E4CC" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <MediLogo onDark size="sm" />
          <p className="hidden lg:block text-xs truncate" style={{ color: "rgba(242,228,204,0.7)" }}>
            Transparent transactions, verified listings, expert guidance.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs">
          <a href="#properties" className="hover:opacity-70 transition-opacity">Properties</a>
          <a href="#categories" className="hover:opacity-70 transition-opacity">Categories</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          <span style={{ color: "rgba(242,228,204,0.55)" }}>© {new Date().getFullYear()} Med Estate · Dubai, UAE</span>
        </nav>
      </div>
    </footer>
  );
}
