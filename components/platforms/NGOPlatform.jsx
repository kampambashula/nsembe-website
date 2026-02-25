import Layout from "../../components/Layout";

export default function NGOPlatform() {
  return (
  <Layout>
    <div className="bg-dark-bg min-h-screen text-white">

      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/5 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-lime-400 uppercase">
            NGOs & INGOs Platform
          </span>

          <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight mt-6">
            Technology for
            <br />
            <span className="text-lime-400">
              Field Operations.
            </span>
          </h1>

          <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed">
            A field-ready digital platform enabling non-governmental
            organizations to manage programs, collect data, track impact,
            and report to donors — even in remote, low-connectivity regions.
          </p>
        </div>
      </section>

      {/* BIG STATEMENT */}
      <section className="py-28 px-6 bg-dark-bg-2 text-center">
        <h2 className="font-display font-800 text-4xl lg:text-6xl leading-tight max-w-4xl mx-auto">
          Impact requires visibility.
        </h2>

        <p className="text-white/50 mt-8 max-w-3xl mx-auto text-lg">
          Field teams operate in challenging environments.
          Without reliable data systems, program delivery,
          accountability, and reporting suffer.
          This platform ensures transparency from field to funder.
        </p>
      </section>

      {/* PLATFORM OVERVIEW SPLIT */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h3 className="font-display font-700 text-3xl mb-6">
              A Program Management Operating System
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed">
              Integrating the full lifecycle of development programs:
            </p>

            <ul className="space-y-4 text-white/70">
              <li>• Field Data Collection (Offline)</li>
              <li>• Beneficiary Registration & Tracking</li>
              <li>• Grant & Budget Monitoring</li>
              <li>• Impact Measurement Dashboards</li>
              <li>• Donor Reporting Automation</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 h-[420px] bg-dark-bg-3 flex items-center justify-center text-white/30">
            Field Operations Dashboard Mockup Placeholder
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
              <h4 className="font-display text-xl mb-4 text-lime-400">
                Offline Field Collection
              </h4>
              <p className="text-white/60 leading-relaxed">
                Mobile and tablet-based data capture
                designed for low-bandwidth and
                intermittent connectivity environments.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-lime-400">
                Real-Time Program Monitoring
              </h4>
              <p className="text-white/60 leading-relaxed">
                Headquarters gain visibility into
                active projects, resource use,
                and geographic performance.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-lime-400">
                Donor-Ready Reporting
              </h4>
              <p className="text-white/60 leading-relaxed">
                Automated report generation aligned
                with funding requirements and KPIs.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-lime-400">
                Secure Beneficiary Data Management
              </h4>
              <p className="text-white/60 leading-relaxed">
                Role-based access controls and secure
                data storage to protect sensitive
                community information.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DEPLOYMENT CONTEXT */}
      <section className="py-28 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-10">
          Designed for Complex Environments.
        </h3>

        <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
          Whether operating in rural districts,
          refugee camps, post-disaster zones,
          or underserved urban communities,
          the platform adapts to field realities
          without compromising accountability.
        </p>
      </section>

      {/* PROGRAM TYPES */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-800 text-4xl mb-16 text-center">
            Program Applications
          </h3>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-lime-400">
                Health & Nutrition Programs
              </h4>
              <p className="text-white/60 text-sm">
                Community outreach tracking,
                vaccination campaigns,
                and supply monitoring.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-lime-400">
                Education & Youth Programs
              </h4>
              <p className="text-white/60 text-sm">
                Attendance tracking,
                resource distribution,
                and performance evaluation.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl">
              <h4 className="font-display text-lg mb-3 text-lime-400">
                Emergency & Humanitarian Response
              </h4>
              <p className="text-white/60 text-sm">
                Rapid beneficiary registration,
                logistics coordination,
                and relief monitoring.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-6">
          Deliver Programs With Confidence.
        </h3>

        <p className="text-white/50 max-w-2xl mx-auto mb-10">
          Empower your teams with systems built
          for impact, transparency, and scale.
        </p>

        <button className="px-8 py-4 bg-lime-500 rounded-xl font-semibold hover:bg-lime-600 transition">
          Request NGO Platform Brief
        </button>
      </section>

    </div>
    </Layout>
  );
}