// components/HeroVideo.jsx
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
        poster="/images/hero-poster.png" // low-res fallback while video loads
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        {/* Fallback text for unsupported browsers */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative text-center px-6 max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-display font-800 text-white mb-6">
          Infrastructure for
          <br />
          <span className="text-cyan-400">Intelligence in Emerging Markets</span>
        </h1>
        <p className="text-white/70 mb-8 text-lg">
          Offline AI for smarter decisions in any environment
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#platforms"
            className="px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
          >
            Explore Platforms
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}