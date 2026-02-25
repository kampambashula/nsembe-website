// components/InnerPageNavbar.jsx
import { useState, useEffect } from "react";
import Link from "next/link";

export default function InnerPageNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const markets = [
    { href: "/markets/government", label: "Government" },
    { href: "/markets/health", label: "Health" },
    { href: "/markets/enterprise", label: "Enterprise" },
    { href: "/markets/ngo", label: "NGO" },
    { href: "/markets/education", label: "Education" },
  ];

  const platforms = [
    { href: "/platforms/clinicae", label: "Clinicae" },
    { href: "/platforms/savara", label: "Savara" },
    { href: "/platforms/mansacore-growth", label: "Mansacore Growth" },
    { href: "/platforms/school-server-os", label: "School Server OS" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-xl border-b border-cyan-light/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-light/20 to-cyan-light/20 border border-cyan-light/30 group-hover:border-cyan-light/60 transition-all duration-300" />
          <span className="font-display font-700 text-white text-lg tracking-tight">
            Nsembe
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 relative">
          {/* Markets Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMarketsOpen(true)}
            onMouseLeave={() => setMarketsOpen(false)}
          >
            <button className="nav-link font-body text-sm text-white/70 hover:text-cyan-light transition-colors duration-200">
              Markets ▾
            </button>
            {marketsOpen && (
              <div className="absolute top-full mt-2 w-48 bg-dark-bg border border-cyan-light/20 rounded-xl shadow-lg py-2 flex flex-col">
                {markets.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="px-4 py-2 text-white/80 hover:text-cyan-light text-sm transition-colors duration-200"
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Platforms Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPlatformsOpen(true)}
            onMouseLeave={() => setPlatformsOpen(false)}
          >
            <button className="nav-link font-body text-sm text-white/70 hover:text-cyan-light transition-colors duration-200">
              Platforms ▾
            </button>
            {platformsOpen && (
              <div className="absolute top-full mt-2 w-48 bg-dark-bg border border-cyan-light/20 rounded-xl shadow-lg py-2 flex flex-col">
                {platforms.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="px-4 py-2 text-white/80 hover:text-cyan-light text-sm transition-colors duration-200"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About Page Link */}
          <Link
            href="/about"
            className="nav-link font-body text-sm text-white/70 hover:text-cyan-light transition-colors duration-200"
          >
            About
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-bg-2/95 backdrop-blur-xl border-t border-cyan-light/10 px-6 py-6 flex flex-col gap-4">
          {/* Markets */}
          <div>
            <p className="font-body text-white/80 mb-2">Markets</p>
            {markets.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-white/70 hover:text-cyan-light text-base transition-colors duration-200"
              >
                {m.label}
              </Link>
            ))}
          </div>

          {/* Platforms */}
          <div>
            <p className="font-body text-white/80 mb-2">Platforms</p>
            {platforms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-white/70 hover:text-cyan-light text-base transition-colors duration-200"
              >
                {p.label}
              </Link>
            ))}
          </div>

          {/* About */}
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-2 py-2 text-white/70 hover:text-cyan-light text-base transition-colors duration-200"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}