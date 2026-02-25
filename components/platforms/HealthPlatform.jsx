import Layout from "../../components/Layout";

export default function HealthPlatform() {
  return (
  <Layout>
    <div className="bg-dark-bg min-h-screen text-white">

      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-red-500/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-red-400 uppercase">
            Health & Healthcare Platform
          </span>

          <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight mt-6">
            Digital Infrastructure for
            <br />
            <span className="text-red-400">
              Hospitals. Clinics. Ministries.
            </span>
          </h1>

          <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed">
            A secure, offline-capable health intelligence system designed
            for national health systems, district hospitals, and rural clinics
            operating in low-connectivity environments.
          </p>
        </div>
      </section>

      {/* BIG STATEMENT */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-800 text-4xl lg:text-6xl leading-tight">
            Healthcare systems fail
            <br />
            when data fails.
          </h2>

          <p className="text-white/50 mt-8 max-w-3xl mx-auto text-lg">
            Fragmented patient records, unreliable connectivity,
            delayed reporting, and poor logistics visibility cost lives.
            This platform unifies clinical, operational, and policy data
            into one sovereign system.
          </p>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h3 className="font-display font-700 text-3xl mb-6">
              A National Health Operating System
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed">
              Built for ministries of health and public hospital networks,
              the Nsembe Health Platform integrates:
            </p>

            <ul className="space-y-4 text-white/70">
              <li>• Electronic Medical Records (EMR)</li>
              <li>• Drug & Supply Chain Management</li>
              <li>• Epidemiological Surveillance</li>
              <li>• District & National Reporting</li>
              <li>• AI-assisted diagnostics</li>
            </ul>
          </div>

          {/* IMAGE MOCKUP SPACE */}
          <div className="rounded-2xl border border-white/10 h-[400px] bg-dark-bg-3 flex items-center justify-center text-white/30">
            Platform Mockup Placeholder
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
            {[
              {
                title: "Offline-First Architecture",
                text: "Clinics operate fully without internet. Sync occurs automatically when connectivity returns."
              },
              {
                title: "National-Level Data Visibility",
                text: "Ministries gain real-time dashboards across districts, provinces, and facilities."
              },
              {
                title: "Secure & Sovereign",
                text: "Host on-premise or national cloud infrastructure. Full data ownership."
              },
              {
                title: "AI Clinical Assist",
                text: "Decision-support tools for diagnosis, triage, and treatment protocols."
              }
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-display text-xl mb-3 text-red-400">
                  {item.title}
                </h4>
                <p className="text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display font-800 text-4xl mb-10">
            Built for Infrastructure Reality
          </h3>

          <p className="text-white/60 text-lg leading-relaxed">
            Designed for environments with intermittent power,
            low bandwidth, and legacy hardware.
            Deployable via local servers, district hubs,
            or hybrid sovereign cloud infrastructure.
          </p>
        </div>
      </section>

      {/* DEPLOYMENT MODEL */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-800 text-4xl mb-12 text-center">
            Deployment Models
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              "Single Hospital Deployment",
              "District Health Network",
              "National Health System Rollout"
            ].map((model) => (
              <div key={model} className="p-8 border border-white/10 rounded-2xl">
                <h4 className="font-display text-lg mb-3">{model}</h4>
                <p className="text-white/50 text-sm">
                  Scalable implementation with phased integration support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-6">
          Ready to Modernize Health Infrastructure?
        </h3>

        <button className="px-8 py-4 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition">
          Request Briefing
        </button>
      </section>

    </div>
    </Layout>
  );
}