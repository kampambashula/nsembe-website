// components/OurSystems.jsx
import SystemCard from "./SystemCard";
import { useEffect, useRef } from "react";

const systems = [
    {
    name: "Freight OS",
    slug: "freight-os",
    subtitle: "African Logistics Tracking",
    category: "Logistics",
    description:
      "A logistics tracking platform tailored for African freight operations, enabling offline shipment monitoring and route optimization.",
    features: [
      "Fleet tracking & management",
      "Offline route planning",
      "Shipment documentation",
      "Analytics dashboards",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20h20l-4-12H8l-4 12z" stroke="#3498db" strokeWidth="1.5" fill="rgba(52,152,219,0.08)" />
        <circle cx="8" cy="20" r="2" stroke="#3498db" strokeWidth="1.5" fill="rgba(52,152,219,0.2)" />
        <circle cx="20" cy="20" r="2" stroke="#3498db" strokeWidth="1.5" fill="rgba(52,152,219,0.2)" />
      </svg>
    ),
  },
  {
    name: "Insurance Management System",
    slug: "insurance-mgt-system",
    subtitle: "Policy & Claims System",
    category: "Finance",
    description:
      "A system to manage insurance policies, claims, and client records efficiently, with offline-first capabilities for field agents.",
    features: [
      "Policy management",
      "Claims processing",
      "Offline agent mode",
      "Reporting & analytics",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l10 5v12l-10 5-10-5V8l10-5z" stroke="#e67e22" strokeWidth="1.5" fill="rgba(230,126,34,0.08)" />
        <circle cx="14" cy="14" r="3" stroke="#e67e22" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
  name: "Gamma Risk Intelligence",
  slug: "gamma-risk-intelligence",
  subtitle: "Portfolio & Credit Risk Intelligence",
  category: "Financial Intelligence",
  description:
    "An advanced risk analytics platform for modeling credit exposure, portfolio performance, and macroeconomic scenarios to support financial decision-making.",
  features: [
    "PD, LGD, and EAD modeling",
    "Portfolio risk dashboards",
    "Macroeconomic scenario analysis",
    "Risk grading and segmentation",
  ],
  icon: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="5" width="18" height="18" rx="2" stroke="#f1c40f" strokeWidth="1.5" fill="rgba(241,196,15,0.08)" />
      <path d="M8 18l4-6 4 3 4-7" stroke="#f1c40f" strokeWidth="1.5" />
    </svg>
  ),
},
{
  name: "Nsembe Alpha",
  slug: "nsembe-alpha",
  subtitle: "Stock Market Intelligence",
  category: "Financial Intelligence",
  description:
    "A market analysis platform for evaluating stocks, tracking portfolios, and combining fundamentals, technicals, and macro signals into actionable insights.",
  features: [
    "Stock screening & filtering",
    "Valuation models (DCF, ratios)",
    "Technical indicators & charts",
    "Portfolio tracking & watchlists",
  ],
  icon: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="6" width="20" height="16" rx="2" stroke="#f39c12" strokeWidth="1.5" fill="rgba(243,156,18,0.08)" />
      <path d="M7 18l4-5 4 3 6-8" stroke="#f39c12" strokeWidth="1.5" />
    </svg>
  ),
},
];

export default function OurSystems() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll(".section-reveal")?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="systems" ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cyan-light/30 to-transparent" />
      <div className="absolute inset-0 bg-dark-bg-2/50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="section-reveal text-center mb-16 lg:mb-20">
          <span className="inline-block font-mono text-xs text-cyan-light tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border border-cyan-light/20 bg-cyan-light/5">
            Our Systems
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Transforming Operations
            <br />
            <span className="gradient-text-green">Across Industries.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Each system is designed to operate offline-first, locally deployed, and ready for seamless synchronization when connected.
          </p>
        </div>

        {/* Adaptive grid for systems */}
        <div
          className="section-reveal grid gap-5 lg:gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {systems.map((system, i) => (
            <SystemCard key={system.slug} system={system} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}