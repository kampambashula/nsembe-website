import Layout from "../../components/Layout";


export default function GovernmentPlatform() {
  return (
  <Layout>
    <div className="bg-dark-bg min-h-screen text-white">

      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-cyan-400/5 blur-3xl rounded-full -translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
            Government Intelligence Platform
          </span>

          <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight mt-6">
            Digital Infrastructure for
            <br />
            <span className="text-cyan-400">
              Modern States.
            </span>
          </h1>

          <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed">
            A sovereign, secure, AI-enabled operating system
            designed for ministries, agencies, municipalities,
            and national institutions.
          </p>
        </div>
      </section>

      {/* STRATEGIC STATEMENT */}
      <section className="py-28 px-6 bg-dark-bg-2 text-center">
        <h2 className="font-display font-800 text-4xl lg:text-6xl leading-tight max-w-4xl mx-auto">
          Governance requires clarity.
        </h2>

        <p className="text-white/50 mt-8 max-w-3xl mx-auto text-lg">
          Fragmented systems, siloed departments,
          and manual reporting slow decision-making.
          This platform unifies data across government
          into a single intelligence layer.
        </p>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h3 className="font-display font-700 text-3xl mb-6">
              A National Operating System
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed">
              Integrating cross-ministerial operations:
            </p>

            <ul className="space-y-4 text-white/70">
              <li>• Inter-Ministry Data Integration</li>
              <li>• Budget & Expenditure Monitoring</li>
              <li>• Infrastructure & Asset Tracking</li>
              <li>• Citizen Service Dashboards</li>
              <li>• National Performance Analytics</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 h-[420px] bg-dark-bg-3 flex items-center justify-center text-white/30">
            National Intelligence Dashboard Mockup Placeholder
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-800 text-4xl mb-16 text-center">
            Core Capabilities
          </h3>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h4 className="font-display text-xl mb-4 text-cyan-400">
                Sovereign Deployment
              </h4>
              <p className="text-white/60 leading-relaxed">
                Full on-premise or national cloud deployment
                ensuring complete state data ownership.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-cyan-400">
                Secure Architecture
              </h4>
              <p className="text-white/60 leading-relaxed">
                Role-based access, encryption standards,
                and compliance-ready infrastructure.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-cyan-400">
                AI Policy Intelligence
              </h4>
              <p className="text-white/60 leading-relaxed">
                Predictive analytics to support planning,
                budgeting, and strategic initiatives.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-cyan-400">
                Cross-Agency Collaboration
              </h4>
              <p className="text-white/60 leading-relaxed">
                Shared visibility across ministries,
                provinces, and municipal authorities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NATIONAL SCALE SECTION */}
      <section className="py-28 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-10">
          Built for National Scale.
        </h3>

        <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
          From municipal councils to central ministries,
          the platform scales horizontally across
          administrative levels while maintaining
          consistent governance visibility.
        </p>
      </section>

      {/* USE CASES */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-800 text-4xl mb-16 text-center">
            Government Applications
          </h3>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-cyan-400">
                Finance & Treasury
              </h4>
              <p className="text-white/60 text-sm">
                Budget tracking, revenue monitoring,
                and fiscal transparency systems.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-cyan-400">
                Infrastructure & Public Works
              </h4>
              <p className="text-white/60 text-sm">
                Asset tracking, project oversight,
                and contractor performance monitoring.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-cyan-400">
                Social Services & Public Programs
              </h4>
              <p className="text-white/60 text-sm">
                Service delivery monitoring,
                beneficiary tracking,
                and performance analytics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STRATEGIC CTA */}
      <section className="py-32 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-6">
          Build the Digital Backbone of Governance.
        </h3>

        <p className="text-white/50 max-w-2xl mx-auto mb-10">
          Enable data-driven policy, transparency,
          and operational efficiency at national scale.
        </p>

        <button className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition">
          Request Government Briefing
        </button>
      </section>

    </div>
    </Layout>
  );
}