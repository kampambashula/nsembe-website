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
      Flexible, Transparent & Tailored to Your Organization
    </h2>
    <p className="text-white/60 mb-16">
      Mansacore adapts to the needs of every Zambian SME — from solo operators to large enterprises. Pricing depends on your organization’s size, selected modules, and deployment requirements.
    </p>

    <div className="grid lg:grid-cols-5 gap-8">

      {/* SOLO */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Solo</h4>
        <p className="text-white/50 text-sm mb-6">Ideal for Individual Operators</p>
        <p className="text-white/40 mb-4">Starting at ZMW 650/month</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• 1 User</li>
          <li>• Basic Accounting & Ledgers</li>
          <li>• Basic Reports</li>
          <li>• Optional AI Add-Ons</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* STARTER */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Starter</h4>
        <p className="text-white/50 text-sm mb-6">Ideal for Small Formal SMEs</p>
        <p className="text-white/40 mb-4">Starting at ZMW 1,200/month</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• Up to 5 Users</li>
          <li>• IFRS-Compliant Accounting</li>
          <li>• Financial Statements & Dashboards</li>
          <li>• Optional AI Add-Ons</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* PROFESSIONAL */}
      <div className="bg-cyan-500/10 border-2 border-cyan-400 rounded-2xl p-8 backdrop-blur scale-105 shadow-xl">
        <span className="text-xs uppercase tracking-widest text-cyan-400">Most Popular</span>
        <h4 className="text-lg font-semibold mb-2 mt-2 text-cyan-400">Professional</h4>
        <p className="text-white/50 text-sm mb-6">Ideal for Growing Businesses</p>
        <p className="text-white/40 mb-4">Starting at ZMW 3,200/month</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• 6–25 Users</li>
          <li>• Accounting + Inventory</li>
          <li>• Financial Dashboards</li>
          <li>• AI Forecasting Included</li>
          <li>• Priority Support</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* BUSINESS PLUS */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Business Plus</h4>
        <p className="text-white/50 text-sm mb-6">Ideal for Expanding SMEs</p>
        <p className="text-white/40 mb-4">Custom Quote</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• 25–60 Users</li>
          <li>• Full ERP Suite</li>
          <li>• Multi-Entity Support</li>
          <li>• Advanced Analytics</li>
          <li>• Semi-Dedicated Support</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* ENTERPRISE */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
        <h4 className="text-lg font-semibold mb-2">Enterprise</h4>
        <p className="text-white/50 text-sm mb-6">Ideal for Large Operations</p>
        <p className="text-white/40 mb-4">Custom Quote</p>
        <ul className="text-white/70 space-y-2 text-left text-sm mt-6">
          <li>• 60+ Users</li>
          <li>• Dedicated Account Manager</li>
          <li>• SLA & Custom Integrations</li>
          <li>• Onsite Training</li>
          <li>• Strategic AI Intelligence</li>
        </ul>
        <Link 
          href="/contact" 
          className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
        >
          Request a Quote
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