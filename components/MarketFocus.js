import { useEffect, useRef } from "react";
import Link from "next/link";
import { markets } from "../data/marketData";

export default function MarketFocus() {
  // Just remove <HTMLElement> — plain JS/JSX
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

    sectionRef.current?.querySelectorAll(".section-reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="markets"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Header & Mission */}
          <div className="section-reveal">
            <span className="inline-block font-mono text-xs text-green-light tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full border border-green-light/20 bg-green-light/5">
              Who We Serve
            </span>
            <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Designed for <br />
              <span className="gradient-text-cyan">Underserved Markets.</span>
            </h2>
            <p className="font-body text-base text-white/55 leading-relaxed mb-8">
              Nsembe Technologies exists to close the technology gap for institutions that
              need digital tools most but are often left out of mainstream software
              ecosystems.
            </p>
          </div>

          {/* Market Cards */}
          <div className="section-reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            {markets.length ? (
              markets.map((market, i) => (
                <div
                  key={market.slug}
                  className="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: market.bg,
                    borderColor: market.border,
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 group-hover:scale-110"
                    style={{ background: market.bg, borderColor: market.border }}
                  >
                    {market.icon}
                  </div>
                  <h3 className="font-display font-700 text-base text-white mb-2">
                    {market.title}
                  </h3>
                  <p className="font-body text-xs text-white/50 leading-relaxed">
                    {market.description}
                  </p>
                  {/* Slug-based routing to full page */}
                  <Link
                    href={`/markets/${market.slug}`}
                    className="inline-block mt-3 font-display font-600 text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-green-light to-cyan-light text-dark-bg hover:shadow-glow-green transition-all duration-300"
                  >
                    See More →
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-white">No markets found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}