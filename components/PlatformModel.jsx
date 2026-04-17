// components/PlatformModel.jsx

export default function PlatformModel() {

  const modules = [
    {
      title: "Financial Computation",
      desc: "Credit risk (ECL), pricing models, forecasting, simulations"
    },
    {
      title: "Pension & Fund Systems",
      desc: "Contributions, benefits, member lifecycle, compliance"
    },
    {
      title: "Payments Infrastructure",
      desc: "Collections, disbursements, wallets, bank integrations"
    },
    {
      title: "Agent & SME Networks",
      desc: "Agent banking, float management, commissions, SME tools"
    },
    {
      title: "Market & Portfolio Intelligence",
      desc: "Market data, portfolio analytics, risk monitoring"
    },
    {
      title: "Geospatial & Scenario Modeling",
      desc: "Location intelligence, simulations, planning tools"
    },
    {
      title: "Data & Decision Intelligence",
      desc: "Dashboards, reporting, pipelines, real-time insights"
    },
    {
      title: "Institutional Workflow Systems",
      desc: "Association management systems, case management, operations"
    }
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden bg-dark-bg-2">

      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-cyan-400/10 blur-[220px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 w-full px-6 lg:px-16">

        {/* HEADER (controlled width) */}
        <div className="max-w-4xl mx-auto text-center mb-20">

          <h2 className="font-display font-800 text-4xl text-white mb-6">
            What Nsembe Powers
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            A unified computation and infrastructure layer for financial systems and institutional operations —
            from risk modeling and pensions to payments, data, and decision intelligence.
          </p>

        </div>

        {/* CORE (centered but not boxed too tight) */}
        <div className="flex justify-center items-center mb-24">
          <div className="platform-core">

            <div className="text-xl font-semibold text-white mb-2">
              Nsembe Core
            </div>

            <div className="text-white/60 text-sm text-center px-4">
              Identity • Permissions • Data Layer • APIs • Sync
            </div>

            <div className="text-cyan-300 mt-3 text-sm">
              Offline-First • Cloud-Ready
            </div>

          </div>
        </div>

        {/* GRID (FULL WIDTH — this is the big change) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {modules.map((m) => (
            <div key={m.title} className="module-card">

              <div className="text-white font-semibold mb-2">
                {m.title}
              </div>

              <div className="text-white/60 text-sm leading-relaxed">
                {m.desc}
              </div>

            </div>
          ))}

        </div>

      </div>

      <style jsx>{`

        .platform-core {
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: rgba(20,25,28,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(70,233,202,0.25);
          animation: pulseCore 4s ease-in-out infinite;
        }

        @keyframes pulseCore {
          0% { box-shadow: 0 0 20px rgba(70,233,202,0.15); }
          50% { box-shadow: 0 0 60px rgba(70,233,202,0.35); }
          100% { box-shadow: 0 0 20px rgba(70,233,202,0.15); }
        }

        .module-card {
          background: rgba(25,30,34,0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 20px;
          text-align: left;
          transition: all 0.4s ease;
        }

        .module-card:hover {
          transform: translateY(-6px);
          border-color: rgba(70,233,202,0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

      `}</style>

    </section>
  );
}