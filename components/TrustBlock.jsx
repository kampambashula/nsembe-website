// components/TrustBlock.jsx
import { useRef } from "react";

export default function TrustBlock() {
  const trustItems = [
    { title: "Offline-first Architecture", desc: "Systems operate reliably even without internet connectivity, ensuring uninterrupted operations." },
    { title: "Sovereign Data Control", desc: "All data remains secure and locally managed, giving you complete ownership and privacy." },
    { title: "Open Standards Integration", desc: "Seamlessly connects with existing software and protocols, enabling smooth interoperability." },
    { title: "AI-Assisted Decision Support", desc: "Leverage predictive analytics and AI insights to make smarter, faster decisions." },
  ];

  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10; // max 10 deg
    const rotateY = ((x / rect.width) - 0.5) * 10;
    ref.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(0px)`;
  };

  const handleMouseLeave = (ref) => {
    if (!ref.current) return;
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-light/10 rounded-full blur-2xl animate-ping-slow" />

      <h2 className="font-display font-800 text-4xl mb-16 text-center text-white relative z-10">
        Institutional Trust
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {trustItems.map((item, i) => {
          const ref = useRef(null);
          return (
            <div
              key={item.title}
              ref={ref}
              className="relative trust-card p-6 rounded-3xl bg-dark-bg-3/40 border border-white/5 backdrop-blur-md shadow-lg transition-transform duration-500"
              onMouseMove={(e) => handleMouseMove(e, ref)}
              onMouseLeave={() => handleMouseLeave(ref)}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Glowing animated lines behind card */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="glow-line animate-glow-line"></div>
                  <div className="glow-line animate-glow-line delay-200"></div>
                </div>
              </div>

              <h3 className="font-display text-xl mb-4 text-gradient-cyan relative z-10">{item.title}</h3>
              <p className="text-white/60 leading-relaxed relative z-10">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .text-gradient-cyan {
          background: linear-gradient(90deg, #46e9ca, #6be76a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .trust-card { animation: float-card 6s ease-in-out infinite; will-change: transform; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-pulse-slow { animation: float 8s ease-in-out infinite; }
        .animate-ping-slow { animation: float 10s ease-in-out infinite; }

        /* Glowing lines */
        .glow-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, rgba(70,233,202,0), #46e9ca, rgba(70,233,202,0));
          opacity: 0.4;
          top: 50%;
          transform: translateY(-50%);
        }

        .animate-glow-line {
          animation: glow-move 3s ease-in-out infinite alternate;
        }

        .delay-200 { animation-delay: 0.2s; }

        @keyframes glow-move {
          0% { transform: translateX(-100%) translateY(-50%); }
          100% { transform: translateX(100%) translateY(-50%); }
        }
      `}</style>
    </section>
  );
}