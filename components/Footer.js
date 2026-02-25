// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const platforms = [
    { href: "/platforms/clinicae", label: "Clinicae" },
    { href: "/platforms/savara", label: "Savara" },
    { href: "/platforms/mansacore-growth", label: "Mansacore Growth" },
    { href: "/platforms/school-server-os", label: "School Server OS" },
  ];

  const markets = [
    { href: "/markets/government", label: "Government" },
    { href: "/markets/enterprise", label: "Enterprise" },
    { href: "/markets/ngo", label: "NGOs" },
    { href: "/markets/education", label: "Schools" },
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/nsembe-technologies",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M4 6.5V11M4 4v.5M7 11V8.5c0-1 .5-2 2-2s2 1 2 2V11M7 6.5V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: "Twitter/X",
      href: "https://twitter.com/nsembetech",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2.5l5 6L2 13.5h1.5l3.9-4.5 3.1 4.5H14l-5.3-7.5L13.5 2.5H12l-3.5 4L5.5 2.5H2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/nsembe-tech",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2.01 5.71 4.79 6.64.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.77-1.02-.77-1.02-.63-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.06 1.63.75 2.02.58.06-.45.24-.75.44-.92-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.39.72-1.88-.07-.18-.31-.89.07-1.85 0 0 .59-.19 1.93.72A6.7 6.7 0 018 4.87c.6.003 1.2.08 1.76.23 1.34-.91 1.93-.72 1.93-.72.38.96.14 1.67.07 1.85.45.49.72 1.11.72 1.88 0 2.7-1.64 3.29-3.2 3.47.25.22.48.65.48 1.31v1.94c0 .19.13.4.48.34C12.99 13.71 15 11.09 15 8c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.8"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative border-t border-white/8 bg-dark-bg-2/80">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-light/20 to-cyan-light/20 border border-cyan-light/30">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L16.5 5.25V12.75L9 17L1.5 12.75V5.25L9 1Z" stroke="#46e9ca" strokeWidth="1.5" fill="none"/>
                <path d="M9 5L12.5 7V11L9 13L5.5 11V7L9 5Z" fill="#46e9ca" opacity="0.5"/>
                <circle cx="9" cy="9" r="1.5" fill="#6be76a"/>
              </svg>
            </div>
            <span className="font-display font-700 text-white text-lg tracking-tight">
              Nsembe<span className="text-cyan-light">.</span>
            </span>
          </div>
          <p className="font-body text-sm text-white/45 leading-relaxed max-w-xs mb-6">
            Accelerating Intelligence, Empowering Institutions. Building offline-first AI platforms
            for governments, NGOs, clinics, schools, and enterprises in emerging markets.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-cyan-light hover:border-cyan-light/40 transition-all duration-300"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Platforms links */}
        <div>
          <h4 className="font-display font-600 text-xs text-white/50 tracking-widest uppercase mb-4">
            Platforms
          </h4>
          <ul className="space-y-2.5">
            {platforms.map((p) => (
              <li key={p.label}>
                <Link
                  href={p.href}
                  className="font-body text-sm text-white/55 hover:text-green-light transition-colors duration-200"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Markets links */}
        <div>
          <h4 className="font-display font-600 text-xs text-white/50 tracking-widest uppercase mb-4">
            Markets
          </h4>
          <ul className="space-y-2.5 mb-8">
            {markets.map((m) => (
              <li key={m.label}>
                <Link
                  href={m.href}
                  className="font-body text-sm text-white/55 hover:text-cyan-light transition-colors duration-200"
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="font-display font-600 text-xs text-white/50 tracking-widest uppercase mb-4">
            Contact
          </h4>
          <a
            href="mailto:info@nsembe.online"
            className="font-body text-sm text-white/55 hover:text-cyan-light transition-colors duration-200"
          >
            info@nsembe.online <br></br>
            +260973833383 <br></br>
            3rd Street Ibex Hill, Lusaka, Zambia 
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-white/30">
          © {year} Nsembe Technologies. All rights reserved. A tech start up by Kasanda Mwila Enterprise Ltd.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/legal/privacy" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/legal/terms" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}