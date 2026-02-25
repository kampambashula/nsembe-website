import Layout from "../../components/Layout";

export default function EnterprisePlatform() {
  return (
  <Layout>
    <div className="bg-dark-bg min-h-screen text-white">

      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] bg-green-500/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-green-400 uppercase">
            Enterprise Intelligence Platform
          </span>

          <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight mt-6">
            AI Infrastructure for
            <br />
            <span className="text-green-400">
              High-Performance Organizations.
            </span>
          </h1>

          <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed">
            A scalable, AI-native platform enabling corporations to unify
            operations, analytics, and decision-making into one intelligent system.
          </p>
        </div>
      </section>

      {/* BIG POWER STATEMENT */}
      <section className="py-28 px-6 bg-dark-bg-2 text-center">
        <h2 className="font-display font-800 text-4xl lg:text-6xl leading-tight max-w-4xl mx-auto">
          Data is not an asset
          <br />
          without intelligence.
        </h2>

        <p className="text-white/50 mt-8 max-w-3xl mx-auto text-lg">
          Enterprises generate vast operational data — but fragmentation,
          latency, and siloed systems prevent real advantage.
          This platform converts complexity into clarity.
        </p>
      </section>

      {/* PLATFORM OVERVIEW SPLIT */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h3 className="font-display font-700 text-3xl mb-6">
              Unified Enterprise Operating Layer
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed">
              Integrate and orchestrate data across:
            </p>

            <ul className="space-y-4 text-white/70">
              <li>• Finance & Risk Systems</li>
              <li>• Supply Chain & Logistics</li>
              <li>• Workforce Operations</li>
              <li>• Sales & Customer Intelligence</li>
              <li>• Executive Performance Dashboards</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 h-[420px] bg-dark-bg-3 flex items-center justify-center text-white/30">
            Enterprise Dashboard Mockup Placeholder
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-800 text-4xl mb-16 text-center">
            Core Capabilities
          </h3>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h4 className="font-display text-xl mb-4 text-green-400">
                AI Decision Engine
              </h4>
              <p className="text-white/60 leading-relaxed">
                Predictive analytics and scenario modeling
                to support strategic and operational decisions.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-green-400">
                Real-Time Operational Visibility
              </h4>
              <p className="text-white/60 leading-relaxed">
                Live dashboards connecting departments,
                subsidiaries, and geographies.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-green-400">
                Modular & Extensible Architecture
              </h4>
              <p className="text-white/60 leading-relaxed">
                API-first framework integrating with ERP,
                CRM, legacy systems, and custom tools.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-green-400">
                Sovereign Deployment Options
              </h4>
              <p className="text-white/60 leading-relaxed">
                Deploy on-premise, private cloud,
                or hybrid environments with full data control.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PERFORMANCE SECTION */}
      <section className="py-28 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-10">
          Built for Scale.
        </h3>

        <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
          Whether managing a single regional operation
          or a multinational enterprise, the platform scales
          horizontally across business units without performance degradation.
        </p>
      </section>

      {/* INDUSTRY FLEXIBILITY */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-800 text-4xl mb-16 text-center">
            Industry Applications
          </h3>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-green-400">
                Financial Services
              </h4>
              <p className="text-white/60 text-sm">
                Risk modeling, compliance analytics,
                and executive financial oversight.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-green-400">
                Manufacturing & Logistics
              </h4>
              <p className="text-white/60 text-sm">
                Production visibility, supply chain intelligence,
                and predictive maintenance.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-green-400">
                Telecommunications & Utilities
              </h4>
              <p className="text-white/60 text-sm">
                Infrastructure monitoring,
                outage prediction, and asset management.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXECUTIVE CTA */}
      <section className="py-32 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-6">
          Gain Strategic Intelligence.
        </h3>

        <p className="text-white/50 max-w-2xl mx-auto mb-10">
          Move beyond dashboards. Build an enterprise nervous system.
        </p>

        <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-700 text-3xl mb-6 text-white">See MansaCore in Action</h3>
          <video
            src="/videos/mansacore-demo.mp4"
            controls
            className="w-full rounded-xl shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

        <button className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition">
          Request Enterprise Briefing
        </button>
      </section>

    </div>
    </Layout>
  );
}