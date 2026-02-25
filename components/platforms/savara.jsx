import Layout from "../../components/Layout";

export default function SavaraPage() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-green-400/5 blur-3xl rounded-full -translate-y-1/2" />
          <div className="relative max-w-6xl mx-auto">
            <span className="font-mono text-xs tracking-widest text-green-400 uppercase">
              Savara — Offline Data Collection
            </span>
            <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight mt-6">
              Field Data Collection for
              <br />
              <span className="text-green-400">Remote Environments</span>
            </h1>
            <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed">
              Mobile and desktop platform for offline surveys, assessments, and monitoring, built for NGOs and field researchers.
            </p>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="font-display font-700 text-3xl mb-6">Core Features</h3>
              <ul className="space-y-4 text-white/70">
                <li>• Custom form builder & templates</li>
                <li>• GPS-tagged offline submissions</li>
                <li>• Multi-device synchronization</li>
                <li>• Advanced reporting & analytics</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 h-[420px] bg-dark-bg-3 flex items-center justify-center text-white/30">
              Field Data Dashboard Placeholder
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center">
          <h3 className="font-display font-800 text-4xl mb-6">
            Collect Data Anywhere, Anytime
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto mb-10">
            Enable offline-first, GPS-aware, and multi-device synchronized data collection.
          </p>
          <button className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition">
            Request a Demo
          </button>
        </section>

      </div>
    </Layout>
  );
}