import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.png"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative text-center px-6 max-w-5xl">
        
        <h1 className="text-5xl lg:text-7xl font-display font-800 text-white mb-6 leading-tight">
          The Operating System for
          <br />
          <span className="text-cyan-400">
            Financial & Institutional Intelligence
          </span>
        </h1>

        <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
          Nsembe powers how institutions calculate risk, manage financial systems,
          and make decisions — from credit models and pensions to payments and analytics.
        </p>

        <p className="text-white/50 mb-10 text-sm tracking-wide uppercase">
          Built for banks, pension funds, fintechs, and governments in emerging markets
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#use-cases"
            className="px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
          >
            Explore Use Cases
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition"
          >
            Request Demo
          </Link>
        </div>

      </div>
    </section>
  );
}