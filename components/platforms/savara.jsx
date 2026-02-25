import Layout from "../../components/Layout";
import Image from "next/image";

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
              Capture, manage, and analyze offline field data with AI-powered insights for researchers and NGOs operating in low-connectivity environments.
            </p>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="font-display font-700 text-3xl mb-6">Core Features</h3>
              <ul className="space-y-4 text-white/70">
                <li>• Custom form builder & prebuilt templates</li>
                <li>• GPS-tagged offline submissions</li>
                <li>• Multi-device synchronization & cloud upload when online</li>
                <li>• Role-based access for teams and field staff</li>
                <li>• Advanced analytics & AI-generated insights</li>
              </ul>
            </div>
            {/* Dummy Mockup Placeholder */}
            <div className="rounded-2xl border border-white/10 h-[420px] bg-dark-bg-3 flex items-center justify-center text-white/30 font-mono text-xl">
              Savara Mockup Placeholder
            </div>
          </div>
        </section>

        {/* AI / ANALYTICS BENEFITS */}
        <section className="py-28 px-6 bg-dark-bg-2">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="font-display font-800 text-4xl mb-12">
              AI & Analytics for Smarter Decisions
            </h3>
            <p className="text-white/60 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
              Across all tiers, Savara not only collects data but analyzes it to provide actionable insights. Predict trends, visualize outcomes, and optimize field operations effortlessly.
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-green-400">Researcher</h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 5,000<span className="text-sm text-white/50"> / year</span>
                </p>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Up to 5 users</li>
                  <li>Offline survey collection</li>
                  <li>Multi-device sync</li>
                  <li>Basic reporting & CSV export</li>
                  <li>AI-assisted pattern detection & basic analytics</li>
                  <li>Email support</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-green-500 bg-green-500/5">
                <h4 className="font-display text-xl mb-4 text-green-400">Small NGO</h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 15,000<span className="text-sm text-white/50"> / year</span>
                </p>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Up to 20 users</li>
                  <li>Offline + cloud sync</li>
                  <li>GPS-tagged data collection</li>
                  <li>Team management & role-based access</li>
                  <li>AI-driven dashboards & insights</li>
                  <li>Email + Chat support</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-green-400">Large NGO / Custom</h4>
                <p className="text-3xl font-bold mb-6">Custom Pricing</p>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Multi-project & multi-country deployment</li>
                  <li>Custom integrations & dashboards</li>
                  <li>Dedicated training & capacity building</li>
                  <li>AI-powered predictive analytics & advanced reporting</li>
                  <li>Priority support & SLA</li>
                  <li>Pricing tailored to scale & needs</li>
                </ul>
              </div>
            </div>
            <p className="text-white/40 mt-10 text-sm">
              Hardware-based field kits available upon request.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-6 text-center">
          <h3 className="font-display font-800 text-4xl mb-6">
            Collect & Analyze Field Data Smarter
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto mb-10">
            Deploy Savara to capture accurate offline data, gain AI-driven insights, and scale from research projects to large NGO programs.
          </p>
          <button className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition">
            Request a Demo
          </button>
        </section>

      </div>
    </Layout>
  );
}