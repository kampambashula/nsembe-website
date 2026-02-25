// components/HomePageNavbar.jsx
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePageNavbar() {
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
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-light/20 to-cyan-light/20 border border-cyan-light/30 group-hover:border-cyan-light/60 transition-all duration-300">
            {/* SVG Icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1L16.5 5.25V12.75L9 17L1.5 12.75V5.25L9 1Z"
                stroke="#46e9ca"
                strokeWidth="1.5"
              />
              <path
                d="M9 5L12.5 7V11L9 13L5.5 11V7L9 5Z"
                fill="#46e9ca"
                opacity="0.5"
              />
              <circle cx="9" cy="9" r="1.5" fill="#6be76a" />
            </svg>
          </div>
          <span className="font-display font-700 text-white text-lg tracking-tight">
            Nsembe
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 relative">

          {/* About link */}
          <Link
            href="/about"
            className="nav-link font-body text-sm text-white/70 hover:text-cyan-light transition-colors duration-200"
          >
            About
          </Link>

          {/* Markets dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setMarketsOpen(true)}
              onMouseLeave={() => setMarketsOpen(false)}
              className="nav-link font-body text-sm text-white/70 hover:text-cyan-light transition-colors duration-200"
            >
              Markets ▾
            </button>
            {marketsOpen && (
              <div
                onMouseEnter={() => setMarketsOpen(true)}
                onMouseLeave={() => setMarketsOpen(false)}
                className="absolute top-full mt-2 w-48 bg-dark-bg border border-cyan-light/20 rounded-xl shadow-lg py-2 flex flex-col"
              >
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

          {/* Platforms dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setPlatformsOpen(true)}
              onMouseLeave={() => setPlatformsOpen(false)}
              className="nav-link font-body text-sm text-white/70 hover:text-cyan-light transition-colors duration-200"
            >
              Platforms ▾
            </button>
            {platformsOpen && (
              <div
                onMouseEnter={() => setPlatformsOpen(true)}
                onMouseLeave={() => setPlatformsOpen(false)}
                className="absolute top-full mt-2 w-48 bg-dark-bg border border-cyan-light/20 rounded-xl shadow-lg py-2 flex flex-col"
              >
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
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary font-display text-sm font-600 px-5 py-2 rounded-full border border-cyan-light/40 text-cyan-light hover:bg-cyan-light/10 hover:border-cyan-light transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
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
          {/* About */}
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-2 py-2 text-white/70 hover:text-cyan-light text-base transition-colors duration-200"
          >
            About
          </Link>

          {/* Markets */}
          <p className="font-body text-white/80 mb-2 mt-2">Markets</p>
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

          {/* Platforms */}
          <p className="font-body text-white/80 mb-2 mt-2">Platforms</p>
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

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 btn-primary font-display text-sm font-600 px-5 py-3 rounded-full border border-cyan-light/40 text-cyan-light hover:bg-cyan-light/10 text-center transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}