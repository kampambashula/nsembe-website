// components/Platforms.jsx
import PlatformCard from "./PlatformCard";
import { useEffect, useRef } from "react";

const platforms = [
  {
    name: "Mansacore Growth",
    slug: "mansacore-growth",
    subtitle: "AI Accounting & Auditing Platform",
    category: "Finance AI",
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
        <path
          d="M14 3C8.48 3 4 7.48 4 13s4.48 10 10 10 10-4.48 10-10S19.52 3 14 3z"
          stroke="#46e9ca"
          strokeWidth="1.5"
          fill="rgba(70,233,202,0.1)"
        />
        <path d="M11 14h6M14 11v6" stroke="#46e9ca" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Savara",
    slug: "savara",
    subtitle: "Offline Data Collection App",
    category: "Field Data",
    description:
      "A powerful mobile and desktop data collection platform for surveys, assessments, and monitoring in remote or low-connectivity environments. Built for NGOs, researchers, and field teams.",
    features: [
      "Custom form builder & templates",
      "GPS-tagged offline submissions",
      "Multi-device data synchronization",
      "Advanced reporting & analytics",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="4" width="18" height="20" rx="2" stroke="#6be76a" strokeWidth="1.5" fill="rgba(107,231,106,0.1)"/>
        <path d="M9 9h10M9 13h10M9 17h6" stroke="#6be76a" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="19" r="4" fill="rgba(107,231,106,0.2)" stroke="#6be76a" strokeWidth="1.2"/>
        <path d="M18.5 19l1 1 2-2" stroke="#6be76a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  
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
];

export default function Platforms() {
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
    <section id="platforms" ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cyan-light/30 to-transparent"/>
      <div className="absolute inset-0 bg-dark-bg-2/50"/>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="section-reveal text-center mb-16 lg:mb-20">
          <span className="inline-block font-mono text-xs text-cyan-light tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border border-cyan-light/20 bg-cyan-light/5">
            Our Platforms
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Built for Where
            <br />
            <span className="gradient-text-green">Internet Isn't.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Each platform is engineered for offline-first operation, local deployment, and eventual
            synchronization — meeting institutions where they are.
          </p>
        </div>

        {/* Cards grid */}
        <div className="section-reveal grid md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-6">
          {platforms.map((platform, i) => (
            <PlatformCard key={platform.slug} platform={platform} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}