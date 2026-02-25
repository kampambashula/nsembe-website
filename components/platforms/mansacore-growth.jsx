import Layout from "../../components/Layout";
import Image from "next/image";

export default function MansacoreGrowthPage() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-cyan-400/5 blur-3xl rounded-full -translate-y-1/2" />
          <div className="relative max-w-6xl mx-auto">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Mansacore Growth — AI Accounting
            </span>
            <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight mt-6">
              Intelligent Financial Oversight for
              <br />
              <span className="text-cyan-400">Enterprises</span>
            </h1>
            <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed">
              AI-powered bookkeeping, auditing, and financial forecasting platform for organizations requiring automated financial intelligence.
            </p>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="font-display font-700 text-3xl mb-6">Core Capabilities</h3>
              <ul className="space-y-4 text-white/70">
                <li>• AI-driven bookkeeping & ledgers</li>
                <li>• Automated audit trail</li>
                <li>• Financial forecasting & insights</li>
                <li>• Multi-entity & multi-currency support</li>
              </ul>
            </div>
            <Image
              src="/images/platforms/3.png"
              alt="mansa core"
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* VIDEO DEMO */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="font-display font-700 text-3xl mb-6 text-white">
              See MansaCore in Action
            </h3>
            <video
              src="/videos/mansacore-demo.mp4"
              controls
              className="w-full rounded-xl shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent to-black/40">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display font-800 text-4xl mb-4">
              Pricing Plans
            </h2>
            <p className="text-white/60 mb-16">
              Flexible monthly or discounted annual subscriptions for Zambian SMEs.
            </p>

            <div className="grid lg:grid-cols-3 gap-10">

              {/* ESSENTIAL */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur">
                <h4 className="text-xl font-semibold mb-4">Essential</h4>
                <p className="text-white/50 mb-6">For Small Formal Businesses</p>

                <div className="mb-6">
                  <p className="text-3xl font-bold">ZMW 950<span className="text-sm text-white/50">/month</span></p>
                  <p className="text-white/40 mt-2">or ZMW 10,000/year</p>
                  <p className="text-cyan-400 text-sm mt-1">Save 15% annually</p>
                </div>

                <ul className="text-white/70 space-y-3 text-left">
                  <li>• IFRS-compliant accounting</li>
                  <li>• Up to 5 users</li>
                  <li>• Standard financial reports</li>
                  <li>• Audit trail</li>
                  <li>• Email support</li>
                </ul>
              </div>

              {/* PROFESSIONAL */}
              <div className="bg-cyan-500/10 border border-cyan-400 rounded-2xl p-10 backdrop-blur scale-105 shadow-xl">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                  Professional
                </h4>
                <p className="text-white/50 mb-6">For Growing SMEs</p>

                <div className="mb-6">
                  <p className="text-3xl font-bold">ZMW 2,500<span className="text-sm text-white/50">/month</span></p>
                  <p className="text-white/40 mt-2">or ZMW 27,000/year</p>
                  <p className="text-cyan-400 text-sm mt-1">Save 10% annually</p>
                </div>

                <ul className="text-white/70 space-y-3 text-left">
                  <li>• Accounting + Inventory</li>
                  <li>• Up to 25 users</li>
                  <li>• Financial dashboards</li>
                  <li>• AI Forecasting (optional)</li>
                  <li>• Priority support</li>
                </ul>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur">
                <h4 className="text-xl font-semibold mb-4">Enterprise</h4>
                <p className="text-white/50 mb-6">For Large SMEs & Corporates</p>

                <div className="mb-6">
                  <p className="text-3xl font-bold">ZMW 6,800<span className="text-sm text-white/50">/month</span></p>
                  <p className="text-white/40 mt-2">or ZMW 75,000/year</p>
                  <p className="text-cyan-400 text-sm mt-1">Custom SLA & onboarding</p>
                </div>

                <ul className="text-white/70 space-y-3 text-left">
                  <li>• Full ERP suite</li>
                  <li>• Multi-entity support</li>
                  <li>• AI Forecasting included</li>
                  <li>• Dedicated support</li>
                  <li>• Implementation assistance</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 text-center">
          <h3 className="font-display font-800 text-4xl mb-6">
            Automate Accounting with AI
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto mb-10">
            Reduce manual errors, increase transparency, and gain actionable insights.
          </p>
          <button className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition">
            Request a Demo
          </button>
        </section>

      </div>
    </Layout>
  );
}