// components/Platforms.jsx
import PlatformCard from "./PlatformCard";
import { useEffect, useRef, useState } from "react";

const platforms = [
  // Finance
  {
    name: "Mansacore Growth",
    slug: "mansacore-growth",
    subtitle: "AI Accounting & Auditing Platform",
    category: "Finance",
    description:
      "An intelligent accounting and financial auditing platform powered by AI. Designed for enterprises and institutions that need smart, automated financial oversight and compliance management.",
    features: [
      "AI-driven bookkeeping & ledgers",
      "Automated audit trail generation",
      "Financial forecasting & insights",
      "Multi-entity & multi-currency support",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 20l5-5 4 4 5-6 4 3" stroke="#46e9ca" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="20" height="18" rx="2" stroke="#46e9ca" strokeWidth="1.5" fill="rgba(70,233,202,0.08)"/>
        <circle cx="22" cy="8" r="4" fill="rgba(85,234,29,0.2)" stroke="#55ea1d" strokeWidth="1.2"/>
        <path d="M21 8.5l.7.7 1.5-1.5" stroke="#55ea1d" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
{
  name: "Member Management System",
  slug: "association-management",
  subtitle: "Association & Chamber Platform",
  category: "AMS",
  description:
    "A complete association management platform designed for chambers of commerce, professional bodies, and industry associations to manage members, events, subscriptions, and policy engagement.",
  features: [
    "Member registry and profiles",
    "Subscription and membership dues management",
    "Event management and registrations",
    "Committee and governance tracking",
    "Policy engagement and communication tools",
    "Reporting dashboards for leadership",
  ],
  icon: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="6" width="20" height="16" rx="2" stroke="#46e9ca" strokeWidth="1.8" fill="rgba(70,233,202,0.1)"/>
      <path d="M4 11h20" stroke="#46e9ca" strokeWidth="1.5"/>
      <circle cx="9" cy="16" r="2" fill="#46e9ca"/>
      <circle cx="14" cy="16" r="2" fill="#46e9ca"/>
      <circle cx="19" cy="16" r="2" fill="#46e9ca"/>
    </svg>
  ),
},

  // Healthcare
  {
    name: "Clinicae",
    slug: "clinicae",
    subtitle: "Offline Health System",
    category: "Healthcare",
    description:
      "A comprehensive offline-first electronic health record and clinical management system designed for health facilities with limited or no internet access. Syncs when connectivity is restored.",
    features: [
      "Patient records & clinical history",
      "Pharmacy & inventory management",
      "Appointment scheduling",
      "Offline data sync & replication",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8.48 3 4 7.48 4 13s4.48 10 10 10 10-4.48 10-10S19.52 3 14 3z" stroke="#46e9ca" strokeWidth="1.5" fill="rgba(70,233,202,0.1)" />
        <path d="M11 14h6M14 11v6" stroke="#46e9ca" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },

  // Education
  {
    name: "School Server OS",
    slug: "school-server-os",
    subtitle: "Offline Education System",
    category: "Education",
    description:
      "A complete offline school server operating system that brings the full power of digital education to institutions without reliable internet. Includes LMS, digital library, and admin tools.",
    features: [
      "Full LMS with courses & assessments",
      "Offline digital library & resources",
      "Student & teacher management",
      "Local Wi-Fi classroom delivery",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5L4 10l10 5 10-5-10-5z" stroke="#6be76a" strokeWidth="1.5" fill="rgba(107,231,106,0.1)" strokeLinejoin="round"/>
        <path d="M4 15l10 5 10-5" stroke="#6be76a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 20l10 5 10-5" stroke="#6be76a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        <circle cx="22" cy="10" r="2" fill="#6be76a" opacity="0.6"/>
        <line x1="22" y1="10" x2="22" y2="17" stroke="#6be76a" strokeWidth="1.2"/>
        <path d="M20 16.5l2 1.5 2-1.5" stroke="#6be76a" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },

  // AMS Systems
  {
    name: "Village Banking System",
    slug: "village-banking",
    subtitle: "Community Microfinance",
    category: "AMS",
    description:
      "Enables community groups to manage savings, provide micro-loans, and improve financial inclusion in rural areas.",
    features: [
      "Group savings & loan management",
      "Automated contribution tracking",
      "Loan application & approval workflows",
      "Financial reporting & dashboards",
      "Mobile and offline access for members",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#6be76a" strokeWidth="2" fill="rgba(107,231,106,0.1)"/>
        <path d="M10 14l4 4 4-8" stroke="#6be76a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Traditional Land System",
    slug: "traditional-land",
    subtitle: "Customary Land Management",
    category: "AMS",
    description:
      "Digitally manages customary land allocations, tracks occupancy, and handles disputes efficiently for local authorities.",
    features: [
      "Customary land registry & occupancy tracking",
      "Allocation approvals & reporting",
      "Conflict & dispute management tools",
      "Offline operation with secure sync",
      "Integration with GIS mapping for plotting",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="2" stroke="#f0d74d" strokeWidth="2" fill="rgba(240,215,77,0.08)"/>
        <path d="M7 20v-8h14v8H7z" stroke="#f0d74d" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Amakwebo Market",
    slug: "amakwebo-market",
    subtitle: "Market Vendor Management",
    category: "AMS",
    description:
      "Organizes informal markets by tracking vendors, sales, inventory, and payments with offline-first support.",
    features: [
      "Vendor registration & management",
      "Sales tracking & inventory management",
      "Digital payment & transaction tracking",
      "Market analytics & reporting",
      "Offline-first mobile and tablet support",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="12" rx="2" stroke="#f05a28" strokeWidth="1.8" fill="rgba(240,90,40,0.1)"/>
        <path d="M4 12h20" stroke="#f05a28" strokeWidth="1.5"/>
        <path d="M10 8v-2h8v2" stroke="#f05a28" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Insurance Management",
    slug: "insurance-management",
    subtitle: "Insurance Administration",
    category: "AMS",
    description:
      "Streamlines policy administration, claims processing, and customer management for insurance companies in offline and online environments.",
    features: [
      "Policy creation & management",
      "Claims tracking & automated processing",
      "Customer & agent management",
      "Advanced reporting dashboards",
      "Offline & online data sync",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="#9b59b6" strokeWidth="1.8" fill="rgba(155,89,182,0.1)"/>
        <path d="M4 12h20M4 18h20" stroke="#9b59b6" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="2" fill="#9b59b6"/>
      </svg>
    ),
  },
];

export default function Platforms() {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(platforms.map(p => p.category))];

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

  const filteredPlatforms =
    selectedCategory === "All"
      ? platforms
      : platforms.filter(p => p.category === selectedCategory);

  return (
    <section id="platforms" ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cyan-light/30 to-transparent"/>
      <div className="absolute inset-0 bg-dark-bg-2/50"/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="section-reveal text-center mb-12 lg:mb-16">
          <span className="inline-block font-mono text-xs text-cyan-light tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border border-cyan-light/20 bg-cyan-light/5">
            Our Platforms
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Built for Where <br /><span className="gradient-text-green">Internet Isn't.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Each platform is engineered for offline-first operation, local deployment, and eventual synchronization — meeting institutions where they are.
          </p>
        </div>

        {/* Category Filter */}
        <div className="section-reveal flex justify-center flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border text-sm font-semibold ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-white border-cyan-500"
                  : "bg-dark-bg-3 text-white/70 border-white/20"
              } transition`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="section-reveal grid md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-6">
          {filteredPlatforms.map((platform, i) => (
            <PlatformCard key={platform.slug} platform={platform} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}