// components/PlatformCard.jsx
import Link from "next/link";

export default function PlatformCard({ platform, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="platform-card group relative bg-dark-bg-3/40 border border-white/8 rounded-2xl p-6 lg:p-8 backdrop-blur-sm overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient corner accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 transition-opacity duration-300 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle, ${isEven ? "#46e9ca" : "#6be76a"}, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110"
        style={{
          background: isEven ? "rgba(70,233,202,0.1)" : "rgba(107,231,106,0.1)",
          borderColor: isEven ? "rgba(70,233,202,0.3)" : "rgba(107,231,106,0.3)",
        }}
      >
        {platform.icon}
      </div>

      {/* Category tag */}
      <span
        className="inline-block font-mono text-xs px-2.5 py-1 rounded-full mb-3"
        style={{
          background: isEven ? "rgba(70,233,202,0.1)" : "rgba(107,231,106,0.1)",
          color: isEven ? "#46e9ca" : "#6be76a",
          border: `1px solid ${isEven ? "rgba(70,233,202,0.2)" : "rgba(107,231,106,0.2)"}`,
        }}
      >
        {platform.category}
      </span>

      {/* Title & Subtitle */}
      <h3 className="font-display font-700 text-xl text-white mb-1 group-hover:text-cyan-light transition-colors duration-300">
        {platform.name}
      </h3>
      <p className="font-mono text-sm text-white/40 mb-4">{platform.subtitle}</p>

      {/* Description */}
      <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
        {platform.description}
      </p>

      {/* Features list */}
      <ul className="space-y-2 mb-4">
        {platform.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm text-white/50">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: isEven ? "#46e9ca" : "#6be76a" }}
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* See More button */}
      <Link href={`/platforms/${platform.slug}`} legacyBehavior>
        <a
          className={`inline-block mt-3 text-sm font-semibold transition-colors duration-300 ${
            isEven
              ? "text-cyan-light hover:text-green-light"
              : "text-green-light hover:text-cyan-light"
          }`}
        >
          See More →
        </a>
      </Link>

      {/* Bottom border glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${isEven ? "#46e9ca" : "#6be76a"}, transparent)`,
        }}
      />
    </div>
  );
}