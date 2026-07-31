const field = "w-full bg-transparent border-b py-2 text-sm outline-none appearance-none";

export function SearchBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-6 border shadow-sm"
      style={{ background: "#F2E4CC", borderColor: "rgba(27,75,102,0.2)" }}
    >
      <p className="font-mono-eyebrow mb-5" style={{ color: "#1B4B66" }}>
        SEARCH YOUR NEXT HOME
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-end">
        <label className="block">
          <span className="font-mono-eyebrow text-[10px]" style={{ color: "#7A6B52" }}>LOCATION</span>
          <select className={field} style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} defaultValue="Dubai Marina">
            {["Dubai Marina", "Palm Jumeirah", "Saadiyat Island", "Al Barari", "Ras Al Khaimah"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono-eyebrow text-[10px]" style={{ color: "#7A6B52" }}>PROPERTY TYPE</span>
          <select className={field} style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} defaultValue="Villa">
            {["Villa", "Apartment", "Penthouse", "Townhouse", "Commercial"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono-eyebrow text-[10px]" style={{ color: "#7A6B52" }}>PRICE RANGE</span>
          <select className={field} style={{ borderColor: "rgba(31,46,56,0.3)", color: "#1F2E38" }} defaultValue="AED 1M – 5M">
            {["AED 1M – 5M", "AED 5M – 10M", "AED 10M – 25M", "AED 25M+"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <button type="submit" className="btn-pill btn-primary w-full">Search</button>
      </div>
    </form>
  );
}
