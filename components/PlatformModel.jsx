// components/PlatformModel.jsx

export default function PlatformModel() {

  const modules = [
    "SchoolTrack",
    "Afrifinance",
    "Association Management",
    "Healthcare Reporting",
    "Council Land System",
    "Traditional Land Registry",
    "SME ERP",
    "Business Intelligence"
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-dark-bg-2">

      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-cyan-400/10 blur-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <h2 className="font-display font-800 text-4xl text-white mb-6">
          The Nsembe Platform
        </h2>

        <p className="text-white/70 max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
          All Nsembe systems run on a unified platform designed for offline-first
          institutions. Organisations start with the core platform and activate
          modules as their operations grow.
        </p>

        {/* Platform core */}
        <div className="relative flex justify-center items-center mb-20">

          <div className="platform-core">

            <div className="text-xl font-semibold text-white mb-2">
              Nsembe IO
            </div>

            <div className="text-white/60 text-sm">
              Identity • Permissions • Reporting • Sync
            </div>

            <div className="text-cyan-300 mt-3 text-sm">
              from K350 / month
            </div>

          </div>

        </div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {modules.map((m) => (
            <div
              key={m}
              className="module-card"
            >
              {m}
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
          padding: 18px;
          text-align: center;
          color: rgba(255,255,255,0.75);
          font-size: 15px;
          transition: all 0.4s ease;
        }

        .module-card:hover {
          transform: translateY(-6px);
          border-color: rgba(70,233,202,0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          color: white;
        }

      `}</style>

    </section>
  );
}