import { useEffect, useRef } from "react";

// Abstract tech SVG illustration
function TechIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square animate-float">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer ring */}
        <circle cx="250" cy="250" r="220" stroke="rgba(70,233,202,0.1)" strokeWidth="1" strokeDasharray="8 4"/>
        <circle cx="250" cy="250" r="180" stroke="rgba(107,231,106,0.08)" strokeWidth="1"/>

        {/* Rotating arc */}
        <circle cx="250" cy="250" r="200" stroke="url(#arcGrad)" strokeWidth="2" strokeDasharray="120 1000"
          style={{ transformOrigin: "250px 250px", animation: "spin 8s linear infinite" }}/>

        {/* Center hexagon */}
        <polygon points="250,170 316,210 316,290 250,330 184,290 184,210"
          fill="rgba(70,233,202,0.08)" stroke="rgba(70,233,202,0.4)" strokeWidth="1.5"/>
        <polygon points="250,195 294,219 294,281 250,305 206,281 206,219"
          fill="rgba(107,231,106,0.08)" stroke="rgba(107,231,106,0.3)" strokeWidth="1"/>

        {/* Center node */}
        <circle cx="250" cy="250" r="30" fill="rgba(70,233,202,0.15)" stroke="rgba(70,233,202,0.6)" strokeWidth="1.5"/>
        <circle cx="250" cy="250" r="16" fill="rgba(107,231,106,0.3)" stroke="#6be76a" strokeWidth="1"/>
        <circle cx="250" cy="250" r="6" fill="#46e9ca"/>

        {/* Satellite nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 250 + 140 * Math.cos(rad);
          const y = 250 + 140 * Math.sin(rad);
          return (
            <g key={i}>
              <line x1="250" y1="250" x2={x} y2={y} stroke="rgba(70,233,202,0.15)" strokeWidth="1" strokeDasharray="4 3"/>
              <circle cx={x} cy={y} r={i % 2 === 0 ? 10 : 7}
                fill={i % 2 === 0 ? "rgba(70,233,202,0.2)" : "rgba(107,231,106,0.2)"}
                stroke={i % 2 === 0 ? "#46e9ca" : "#6be76a"} strokeWidth="1"/>
            </g>
          );
        })}

        {/* Outer data points */}
        {[30, 90, 150, 210, 270, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 250 + 200 * Math.cos(rad);
          const y = 250 + 200 * Math.sin(rad);
          return (
            <circle key={i} cx={x} cy={y} r="4"
              fill={i % 3 === 0 ? "#46e9ca" : i % 3 === 1 ? "#6be76a" : "#55ea1d"}
              opacity="0.6"/>
          );
        })}

        {/* Gradient defs */}
        <defs>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#46e9ca" stopOpacity="0"/>
            <stop offset="50%" stopColor="#46e9ca" stopOpacity="1"/>
            <stop offset="100%" stopColor="#6be76a" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#46e9ca" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#46e9ca" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Glow */}
        <circle cx="250" cy="250" r="120" fill="url(#glowGrad)"/>
      </svg>

      {/* Floating badges */}
      <div className="absolute top-8 right-0 bg-dark-bg-2/90 border border-cyan-light/30 rounded-xl px-3 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-light animate-pulse"/>
          <span className="font-mono text-xs text-cyan-light">AI Powered</span>
        </div>
      </div>

      <div className="absolute bottom-16 left-0 bg-dark-bg-2/90 border border-green-light/30 rounded-xl px-3 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L10 3.5V8.5L6 11L2 8.5V3.5L6 1Z" fill="#6be76a" opacity="0.5" stroke="#6be76a" strokeWidth="0.8"/>
          </svg>
          <span className="font-mono text-xs text-green-light">Offline First</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-fade-up").forEach((el) => {
              el.style.animationPlayState = "running";
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyan-light/5 via-transparent to-transparent pointer-events-none"/>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-light/3 blur-3xl pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-light/3 blur-3xl pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Badge */}
          <div
            className="animate-fade-up opacity-0-init inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-cyan-light/30 bg-cyan-light/5"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-light animate-pulse"/>
            <span className="font-mono text-xs text-cyan-light tracking-wide uppercase">
              Technology for the Real World
            </span>
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-up opacity-0-init stagger-1 font-display font-800 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="text-white">Nsembe</span>
            <br />
            <span className="gradient-text-green">Technologies</span>
          </h1>

          {/* Tagline */}
          <p
            className="animate-fade-up opacity-0-init stagger-2 font-display text-xl sm:text-2xl text-white/60 font-400 leading-snug max-w-md"
            style={{ animationFillMode: "forwards" }}
          >
            Accelerating Intelligence,
            <br />
            <span className="text-cyan-light">Empowering Institutions.</span>
          </p>

          {/* Description */}
          <p
            className="animate-fade-up opacity-0-init stagger-3 font-body text-base sm:text-lg text-white/50 leading-relaxed max-w-md"
            style={{ animationFillMode: "forwards" }}
          >
            Our core platforms, Nsembe Alpha and Gamma Risk Intelligence, power a broader suite of enterprise systems for organizations across business, finance, and public sectors. Built for emerging markets, our solutions combine offline-first architecture with intelligent analytics to support reliable operations and informed decisions.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-up opacity-0-init stagger-4 flex flex-wrap gap-4"
            style={{ animationFillMode: "forwards" }}
          >
            <a
              href="#platforms"
              className="btn-primary font-display font-600 text-sm px-7 py-3.5 rounded-full bg-gradient-to-r from-green-light to-cyan-light text-dark-bg hover:shadow-glow-green hover:scale-105 transition-all duration-300"
            >
              Explore Platforms
            </a>
            <a
              href="#contact"
              className="btn-primary font-display font-600 text-sm px-7 py-3.5 rounded-full border border-white/20 text-white hover:border-cyan-light/50 hover:text-cyan-light hover:bg-cyan-light/5 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Stats row */}
          <div
            className="animate-fade-up opacity-0-init stagger-5 flex gap-8 pt-4 border-t border-white/10"
            style={{ animationFillMode: "forwards" }}
          >
            {[
              { value: "4+", label: "Platforms" },
              { value: "100%", label: "Offline Ready" },
              { value: "4", label: "Market Sectors" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-700 text-2xl text-green-light">{stat.value}</div>
                <div className="font-body text-xs text-white/40 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right illustration */}
        <div
          className="animate-fade-in opacity-0-init stagger-2 lg:pl-8"
          style={{ animationFillMode: "forwards" }}
        >
          <TechIllustration />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"/>
      </div>
    </section>
  );
}
