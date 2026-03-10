// components/ReadMoreLive.jsx
import Link from "next/link";
import AnimatedShapes from "./AnimatedShapes";

export default function ReadMoreLive({
  title = "Insights & Reflections",
  description,
  label = "Read the Letter",
}) {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-dark-bg-2 flex flex-col items-center text-center">
      {/* Animated background shapes */}
      <AnimatedShapes />

      {/* Title */}
      <h2 className="relative z-10 font-display font-800 text-4xl lg:text-5xl text-white mb-6">
        {title}
      </h2>

      {/* Description */}
      <p className="relative z-10 text-white/70 max-w-3xl mb-12 leading-relaxed text-lg">
        {description ||
          "Explore the founder’s letter detailing the inspiration behind Nsembe Technologies — from the ethos of sacrifice and offering to our mission of empowering institutions with offline-first, intelligent software."}
      </p>

      {/* Simple Read More Button linking to /letter */}
      <Link href="/letter" legacyBehavior>
        <a className="relative z-10 px-12 py-4 bg-cyan-400 text-black font-bold rounded-2xl shadow-md hover:bg-cyan-500 hover:scale-105 transition-transform duration-300">
          {label} →
        </a>
      </Link>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}