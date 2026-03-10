// components/OurSystems.jsx
import SystemCard from "./SystemCard";
import { useEffect, useRef } from "react";

const systems = [
  {
    name: "Village Banking System",
    slug: "village-banking-system",
    subtitle: "Community Microfinance",
    category: "Finance",
    description:
      "A microfinance platform for rural and semi-urban communities to manage savings, loans, and financial literacy programs locally.",
    features: [
      "Group savings management",
      "Loan tracking & repayment schedules",
      "Offline-first operations",
      "Community financial reporting",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#46e9ca" strokeWidth="1.5" fill="rgba(70,233,202,0.08)" />
        <path d="M10 14h8M14 10v8" stroke="#46e9ca" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Amakwebo Informal Market System",
    slug: "amakwebo-market-system",
    subtitle: "Informal Trade Management",
    category: "Commerce",
    description:
      "A system for informal markets to track vendors, stalls, payments, and transactions digitally while remaining offline-first.",
    features: [
      "Vendor & stall registration",
      "Transaction recording & reporting",
      "Offline data sync",
      "Market insights & analytics",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#ffb347" strokeWidth="1.5" fill="rgba(255,179,71,0.08)" />
        <path d="M8 12h12M8 16h12" stroke="#ffb347" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "AfriFinance",
    slug: "afrifinance",
    subtitle: "Tokenized Blockchain System",
    category: "Finance Blockchain",
    description:
      "A hybrid tokenized system enabling decentralized finance solutions with offline capabilities, designed for African markets.",
    features: [
      "Tokenized transactions",
      "Decentralized ledger",
      "Hybrid offline & online operation",
      "Smart contract-enabled workflows",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#8e44ad" strokeWidth="1.5" fill="rgba(142,68,173,0.08)" />
        <path d="M10 14l4-4 4 4-4 4-4-4z" stroke="#8e44ad" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
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
    name: "Council Land System",
    slug: "council-land-system",
    subtitle: "Urban Land Administration",
    category: "Land Management",
    description:
      "A land registry and administration system for councils, allowing offline property records, transfers, and land planning.",
    features: [
      "Property records management",
      "Offline-first operations",
      "Permit & transfer tracking",
      "GIS mapping support",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="5" width="18" height="18" rx="2" stroke="#1abc9c" strokeWidth="1.5" fill="rgba(26,188,156,0.08)" />
        <path d="M9 14h10M14 9v10" stroke="#1abc9c" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Traditional Land System",
    slug: "traditional-land-system",
    subtitle: "Customary Land Administration",
    category: "Land Management",
    description:
      "A system for managing customary land records and transfers, supporting traditional authorities and offline operation.",
    features: [
      "Traditional land records",
      "Community approvals & tracking",
      "Offline-first operations",
      "Reporting & mapping tools",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l10-12 10 12H4z" stroke="#2ecc71" strokeWidth="1.5" fill="rgba(46,204,113,0.08)" />
        <path d="M14 8v12" stroke="#2ecc71" strokeWidth="1.5" />
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