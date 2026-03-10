import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

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
              AI-powered bookkeeping, auditing, and financial forecasting platform for organizations requiring automated financial intelligence, offline access, and seamless integration with ZRA.
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
                <li>• Offline operation & optional ZRA integration</li>
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
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-display font-800 text-4xl mb-4">
              Nsembe ERP — Subscription & Setup Fees
            </h2>
            <p className="text-white/60 mb-16">
              Choose a plan that fits your business size and needs. Monthly subscriptions include updates, cloud hosting, offline support, and ongoing assistance. One-time setup fees cover installation, configuration, and training.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">

              {/* STARTER */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
                <h4 className="text-lg font-semibold mb-2">Starter</h4>
                <p className="text-white/50 text-sm mb-6">Small SMEs & New Businesses</p>
                <p className="text-white/40 mb-2">ZMW 350 / month</p>
                <p className="text-white/40 text-sm mb-4">One-time Setup: ZMW 2,500</p>
                <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
                  <li>• Basic Financial Management</li>
                  <li>• Core Accounting & Inventory</li>
                  <li>• Standard Reporting Dashboards</li>
                  <li>• Offline Access & ZRA Integration</li>
                </ul>
                <Link 
                  href="/contact" 
                  className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
                >
                  Get Started
                </Link>
              </div>

              {/* PROFESSIONAL */}
              <div className="bg-cyan-500/10 border-2 border-cyan-400 rounded-2xl p-8 backdrop-blur scale-105 shadow-xl">
                <h4 className="text-lg font-semibold mb-2 mt-2 text-cyan-400">Professional</h4>
                <p className="text-white/50 text-sm mb-6">Growing SMEs & Multi-User Teams</p>
                <p className="text-white/40 mb-2">ZMW 1,500 / month</p>
                <p className="text-white/40 text-sm mb-4">One-time Setup: ZMW 7,500</p>
                <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
                  <li>• Full Operational Modules</li>
                  <li>• Multi-User Management (up to 25 users)</li>
                  <li>• Advanced Reporting & Dashboards</li>
                  <li>• Continuous Updates</li>
                  <li>• Monthly Support Included</li>
                </ul>
                <Link 
                  href="/contact" 
                  className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
                >
                  Request Consultation
                </Link>
              </div>

              {/* INSTITUTIONAL */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
                <h4 className="text-lg font-semibold mb-2">Institutional</h4>
                <p className="text-white/50 text-sm mb-6">Large Institutions & Enterprise Deployment</p>
                <p className="text-white/40 mb-2">ZMW 36,000 / year</p>
                <p className="text-white/40 text-sm mb-4">One-time Setup: ZMW 18,000+</p>
                <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
                  <li>• Unlimited Users</li>
                  <li>• Full ERP & AI Insights Modules</li>
                  <li>• Deployment & Setup Support Included</li>
                  <li>• Quarterly Analytics & Strategy Workshops</li>
                  <li>• Advanced Dashboards & Reporting</li>
                </ul>
                <Link 
                  href="/contact" 
                  className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
                >
                  Request Consultation
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* OPTIONAL ADD-ONS */}
        <section className="py-24 px-6 text-center bg-dark-bg-2">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display font-800 text-3xl mb-8 text-white">Optional Add-Ons</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left text-white/70 text-lg">
              <div className="bg-dark-bg-3 p-6 rounded-2xl border border-white/10 hover:shadow-lg transition">
                <h4 className="font-semibold text-cyan-400 mb-2">AI Analytics Module</h4>
                <p>ZMW 500 / month</p>
              </div>
              <div className="bg-dark-bg-3 p-6 rounded-2xl border border-white/10 hover:shadow-lg transition">
                <h4 className="font-semibold text-cyan-400 mb-2">Advanced Dashboards</h4>
                <p>ZMW 350 / month</p>
              </div>
              <div className="bg-dark-bg-3 p-6 rounded-2xl border border-white/10 hover:shadow-lg transition">
                <h4 className="font-semibold text-cyan-400 mb-2">Custom Integrations</h4>
                <p>ZMW 5,000 one-time</p>
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
          <Link 
            href="/contact" 
            className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
          >
            Request a Quote
          </Link>
        </section>

      </div>
    </Layout>
  );
}