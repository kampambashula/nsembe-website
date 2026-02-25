export const markets = [
  {
    slug: "government",
    title: "Government",
    description:
      "Digital transformation tools for public institutions, municipalities, and ministries operating in resource-constrained environments.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 28h24M6 28V14M26 28V14M16 4L4 14h24L16 4z" stroke="#46e9ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(70,233,202,0.08)"/>
        <rect x="11" y="20" width="10" height="8" rx="1" stroke="#46e9ca" strokeWidth="1.3"/>
        <line x1="16" y1="20" x2="16" y2="28" stroke="#46e9ca" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
    bg: "rgba(70,233,202,0.06)",
    border: "rgba(70,233,202,0.2)",
  },
  {
    slug: "health",
    title: "Health & Healthcare",
    description:
      "Secure, offline-capable digital systems for hospitals, clinics, ministries of health, and community health programs managing patient data, logistics, and reporting.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="3" stroke="#ff6b6b" strokeWidth="1.5" fill="rgba(255,107,107,0.08)"/>
        <path d="M16 10v12M10 16h12" stroke="#ff6b6b" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    bg: "rgba(255,107,107,0.06)",
    border: "rgba(255,107,107,0.2)",
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    description:
      "Scalable AI and data systems for corporations and large organizations seeking intelligent, offline-capable business solutions.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="8" width="26" height="18" rx="2" stroke="#6be76a" strokeWidth="1.5" fill="rgba(107,231,106,0.06)"/>
        <path d="M11 8V5h10v3" stroke="#6be76a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 16h26" stroke="#6be76a" strokeWidth="1" opacity="0.4"/>
        <circle cx="16" cy="20" r="3" stroke="#6be76a" strokeWidth="1.3"/>
      </svg>
    ),
    bg: "rgba(107,231,106,0.06)",
    border: "rgba(107,231,106,0.2)",
  },
  {
    slug: "ngos",
    title: "NGOs & INGOs",
    description:
      "Field-ready platforms for non-governmental organizations managing programs, data collection, and reporting in remote communities.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#55ea1d" strokeWidth="1.5" fill="rgba(85,234,29,0.06)"/>
        <path d="M4 16h24M16 4c-4 6-4 18 0 24M16 4c4 6 4 18 0 24" stroke="#55ea1d" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    bg: "rgba(85,234,29,0.06)",
    border: "rgba(85,234,29,0.2)",
  },
  {
    slug: "education",
    title: "Schools & Education",
    description:
      "Comprehensive education technology for schools and universities that need full digital infrastructure without internet dependency.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 5L4 11l12 6 12-6-12-6z" stroke="#6aa6b4" strokeWidth="1.5" fill="rgba(106,166,180,0.1)" strokeLinejoin="round"/>
        <path d="M4 17l12 6 12-6" stroke="#6aa6b4" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="27" cy="11" r="2.5" fill="#6aa6b4" opacity="0.7"/>
        <line x1="27" y1="11" x2="27" y2="19" stroke="#6aa6b4" strokeWidth="1.3"/>
        <path d="M25 18l2 1.5 2-1.5" stroke="#6aa6b4" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    bg: "rgba(106,166,180,0.06)",
    border: "rgba(106,166,180,0.2)",
  },
];