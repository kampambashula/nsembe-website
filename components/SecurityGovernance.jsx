// components/SecurityGovernance.jsx

import { ShieldCheck, Lock, FileText } from "lucide-react";

export default function SecurityGovernance() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Role-Based Access",
      desc: "Granular role-based permissions ensure each user accesses only the information required for their responsibilities."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      desc: "All institutional data is protected through strong encryption both at rest and in transit."
    },
    {
      icon: FileText,
      title: "Audit & Compliance",
      desc: "Comprehensive audit trails and governance frameworks ensure transparency and accountability."
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Infrastructure Grid Background */}
      <div className="absolute inset-0 grid-background pointer-events-none"></div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10">

        {/* Title */}
        <h2 className="font-display font-800 text-4xl text-center text-white mb-20">
          Security & Governance
        </h2>

        {/* Security Pillars */}
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-14">

          {/* animated connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] data-flow"></div>

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="group relative text-center">

                {/* glowing node */}
                <div className="absolute inset-0 bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 rounded-full"></div>

                <div className="relative bg-dark-bg-3/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl transition duration-500 group-hover:scale-[1.04]">

                  {/* icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-green-400/20 text-cyan-300 group-hover:scale-110 transition">
                      <Icon size={30} />
                    </div>
                  </div>

                  {/* title */}
                  <h3 className="text-xl text-white font-display mb-4">
                    {item.title}
                  </h3>

                  {/* description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* node pulse */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 pulse-node"></div>

                </div>

              </div>
            );
          })}

        </div>
      </div>

      <style jsx>{`

        /* DIGITAL INFRASTRUCTURE GRID */

        .grid-background {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: gridMove 30s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(80px);
          }
        }


        /* DATA FLOW LINE */

        .data-flow {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(70,233,202,0.9),
            transparent
          );
          animation: dataFlow 3s linear infinite;
        }

        @keyframes dataFlow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }


        /* NODE PULSE */

        .pulse-node {
          animation: pulseNode 2.5s ease-in-out infinite;
        }

        @keyframes pulseNode {
          0% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) scale(1.6);
            opacity: 0.4;
          }
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
        }

      `}</style>
    </section>
  );
}