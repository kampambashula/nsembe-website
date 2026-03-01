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
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="font-display font-800 text-4xl mb-4">
      Nsembe ERP Pricing — Tailored to Your Business
    </h2>
    <p className="text-white/60 mb-16">
      Choose the solution that matches your operational needs — from basic control for small SMEs to full AI-powered insights for large enterprises.
    </p>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* STARTER SYSTEM */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Starter System</h4>
        <p className="text-white/50 text-sm mb-6">Entry-Level ERP for Small SMEs</p>
        <p className="text-white/40 mb-4">ZMW 30,000 – 40,000 (One-Time)</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• Pre-configured Offline System</li>
          <li>• Basic Inventory & Workflow Tracking</li>
          <li>• Standard Dashboards</li>
          <li>• Local Installation & Minimal Onboarding</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Get Started
        </Link>
      </div>

      {/* LOWER BAND */}
      <div className="bg-cyan-500/10 border-2 border-cyan-400 rounded-2xl p-8 backdrop-blur scale-105 shadow-xl">
        <h4 className="text-lg font-semibold mb-2 mt-2 text-cyan-400">Lower Band ERP</h4>
        <p className="text-white/50 text-sm mb-6">Full Operational Control, Non-AI</p>
        <p className="text-white/40 mb-4">ZMW 40,000 – 90,000 / Year</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• Cluster-Specific Modules (Production, Distribution, Logistics)</li>
          <li>• Inventory & Stock Movement Tracking</li>
          <li>• Production / Dispatch Dashboards</li>
          <li>• Offline Deployment</li>
          <li>• One-Time Installation or Annual Fee</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request Consultation
        </Link>
      </div>

      {/* PREMIUM */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Premium ERP</h4>
        <p className="text-white/50 text-sm mb-6">Full AI-Powered Operational Intelligence</p>
        <p className="text-white/40 mb-4">ZMW 600,000 – 1,200,000 / Year</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• Predictive Modeling & AI Dashboards</li>
          <li>• Sector Intelligence Layer</li>
          <li>• Decision Simulations & Scenario Planning</li>
          <li>• Workshops & Leadership Insight Sessions</li>
          <li>• Multi-Cluster Operational Insights</li>
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

       {/* PRICING SECTION */}
<section className="py-32 px-6 bg-gradient-to-b from-transparent to-black/40">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="font-display font-800 text-4xl mb-4">
       AI ERP Pricing — Tailored to Your Organization
    </h2>
    <p className="text-white/60 mb-16">
      Mansacore delivers operational intelligence for industrial and mid-sized businesses in Zambia. Pricing reflects operational impact, sector complexity, and strategic value.
    </p>

    <div className="grid lg:grid-cols-4 gap-8">

      {/* STARTER SYSTEM */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Starter System</h4>
        <p className="text-white/50 text-sm mb-6">One-Time Setup for Small Formal SMEs</p>
        <p className="text-white/40 mb-4">ZMW 50,000 – 75,000 (One-Time)</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• Pre-configured Offline System</li>
          <li>• Basic Inventory or Workflow Tracking</li>
          <li>• Local Deployment</li>
          <li>• No Ongoing Support</li>
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
        <span className="text-xs uppercase tracking-widest text-cyan-400">Core Focus</span>
        <h4 className="text-lg font-semibold mb-2 mt-2 text-cyan-400">Professional</h4>
        <p className="text-white/50 text-sm mb-6">Full AI Insight Engine</p>
        <p className="text-white/40 mb-4">ZMW 180,000 – 350,000 / year</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• Cluster Scoring & Behavioral Segmentation</li>
          <li>• Trend Detection & Decision Dashboards</li>
          <li>• Use-Case Customization</li>
          <li>• Quarterly Insight Reviews</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request Consultation
        </Link>
      </div>

      {/* PREMIUM */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Premium</h4>
        <p className="text-white/50 text-sm mb-6">Full Decision Intelligence System</p>
        <p className="text-white/40 mb-4">ZMW 600,000 – 1,200,000 / year</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• Predictive Modeling</li>
          <li>• Sector Intelligence Layer</li>
          <li>• Policy & Growth Dashboards</li>
          <li>• Workshops & Leadership Insight Sessions</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request Consultation
        </Link>
      </div>

      {/* ENTERPRISE */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Enterprise</h4>
        <p className="text-white/50 text-sm mb-6">Custom Institutional AI Platform</p>
        <p className="text-white/40 mb-4">—</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• Multi-Layer Deployment</li>
          <li>• Custom Models & Integrations</li>
          <li>• Policy Simulation & Strategic Insights</li>
          <li>• Ecosystem Intelligence</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request Enterprise Design
        </Link>
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