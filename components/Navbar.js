import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      href: "#platforms",
      label: "Platforms",
      submenu: ["Village Banking System", "Amakwebo Informal Market System", "AfriFinance", "Freight OS", "Insurance MGT System", "Council Land System", "Traditional Land System"],
    },
    { href: "#markets", label: "Markets" },
    { href: "#contact", label: "Contact" },
  ];

  // Handle dropdown hover with a small delay
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 150); // 150ms delay
  };

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
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-light/20 to-cyan-light/20 border border-cyan-light/30 group-hover:border-cyan-light/60 transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1L16.5 5.25V12.75L9 17L1.5 12.75V5.25L9 1Z"
                stroke="#46e9ca"
                strokeWidth="1.5"
                fill="none"
              />
              <path d="M9 5L12.5 7V11L9 13L5.5 11V7L9 5Z" fill="#46e9ca" opacity="0.5" />
              <circle cx="9" cy="9" r="1.5" fill="#6be76a" />
            </svg>
          </div>
          <span className="font-display font-700 text-white text-lg tracking-tight">Nsembe</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 relative">
          {links.map((l) => (
            <div
              key={l.href}
              className="relative"
              onMouseEnter={l.submenu ? handleMouseEnter : undefined}
              onMouseLeave={l.submenu ? handleMouseLeave : undefined}
            >
              <a
                href={l.href}
                className="nav-link font-body text-sm text-white/70 hover:text-cyan-light transition-colors duration-200"
              >
                {l.label}
              </a>

              {/* Dropdown */}
              {l.submenu && dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-dark-bg-2 border border-cyan-light/20 rounded-md shadow-lg min-w-[220px] z-50">
                  {l.submenu.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-white/80 hover:text-cyan-light hover:bg-cyan-light/10 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:hello@nsembe.tech"
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
          {links.map((l) => (
            <div key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base text-white/80 hover:text-cyan-light transition-colors py-2 border-b border-white/5"
              >
                {l.label}
              </a>
              {/* Mobile submenu */}
              {l.submenu && (
                <div className="pl-4 flex flex-col gap-2">
                  {l.submenu.map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="text-white/70 hover:text-cyan-light text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="mailto:hello@nsembe.tech"
            className="mt-2 btn-primary font-display text-sm font-600 px-5 py-3 rounded-full border border-cyan-light/40 text-cyan-light hover:bg-cyan-light/10 text-center transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}