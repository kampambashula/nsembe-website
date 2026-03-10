// components/OperationalScenarios.jsx

export default function OperationalScenarios() {
  const scenarios = [
    {
      title: "Healthcare",
      text: "Rural clinic reporting delays reduced by 30% through offline-first digital reporting."
    },
    {
      title: "Education",
      text: "School attendance digitized across multiple districts with synchronized reporting."
    },
    {
      title: "Associations",
      text: "Association management platforms deployed across diverse professional sectors."
    },
    {
      title: "Enterprise",
      text: "Business intelligence dashboards providing real-time operational insights."
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-dark-bg-2">

      {/* Abstract Map Grid */}
      <div className="map-grid absolute inset-0 pointer-events-none"></div>

      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-[180px] -translate-x-1/2 -translate-y-1/2"></div>

      <h2 className="relative z-10 font-display font-800 text-4xl mb-20 text-center text-white">
        Operational Scenarios
      </h2>

      <div className="relative max-w-6xl mx-auto">

        {/* network nodes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <div className="network-node node-1"></div>
          <div className="network-node node-2"></div>
          <div className="network-node node-3"></div>
          <div className="network-node node-4"></div>

          {/* connection lines */}
          <div className="connection-line line-1"></div>
          <div className="connection-line line-2"></div>
          <div className="connection-line line-3"></div>

        </div>

        {/* scenario cards */}
        <div className="grid md:grid-cols-2 gap-12 relative z-10">

          {scenarios.map((s) => (
            <div
              key={s.title}
              className="scenario-card p-8 rounded-3xl bg-dark-bg-3/60 backdrop-blur-xl border border-white/10 text-white/70 transition duration-500 hover:scale-[1.04]"
            >

              <div className="text-cyan-300 text-sm font-semibold mb-3">
                {s.title}
              </div>

              <div className="text-lg leading-relaxed">
                {s.text}
              </div>

            </div>
          ))}

        </div>

      </div>

      <style jsx>{`

        /* GRID MAP */

        .map-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: gridDrift 40s linear infinite;
        }

        @keyframes gridDrift {
          0% { transform: translateY(0px); }
          100% { transform: translateY(100px); }
        }

        /* NETWORK NODES */

        .network-node {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #46e9ca;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(70,233,202,0.9);
          animation: pulse 3s infinite;
        }

        .node-1 { top: 20%; left: 30%; }
        .node-2 { top: 45%; left: 60%; }
        .node-3 { top: 70%; left: 40%; }
        .node-4 { top: 35%; left: 75%; }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* CONNECTION LINES */

        .connection-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(70,233,202,0.8),
            transparent
          );
          animation: flow 4s linear infinite;
        }

        .line-1 {
          width: 250px;
          top: 30%;
          left: 30%;
          transform: rotate(20deg);
        }

        .line-2 {
          width: 300px;
          top: 55%;
          left: 40%;
          transform: rotate(-15deg);
        }

        .line-3 {
          width: 200px;
          top: 40%;
          left: 55%;
          transform: rotate(30deg);
        }

        @keyframes flow {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* SCENARIO CARDS */

        .scenario-card {
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }

      `}</style>

    </section>
  );
}