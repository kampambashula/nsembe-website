import Layout from "../Layout";
import Link from "next/link";
import Image from "next/image";

export default function InsuranceManagement() {
  return (
    <Layout>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-500/5 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-purple-400 uppercase">
                Insurance Management Platform
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Simplifying
                <br />
                <span className="text-purple-400">Insurance Operations.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                Our Insurance Management System streamlines policy administration, claims processing, and customer management — allowing insurers to operate efficiently in both offline and online environments.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-purple-500 rounded-xl font-semibold hover:bg-purple-600 transition"
                >
                  Request Demo →
                </Link>
              </div>
            </div>

            {/* MOCKUP IMAGE */}
            <div>
              <Image
                src="/images/systems/insurance1.png"
                alt="Insurance Management Dashboard"
                width={900}
                height={600}
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display font-700 text-3xl mb-6 text-purple-400">
                Key Features
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                The platform provides comprehensive support for:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Policy creation and management</li>
                <li>Claims tracking and automated processing</li>
                <li>Customer records & reporting dashboards</li>
                <li>Agent and broker management</li>
                <li>Offline & online data synchronization</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/insurance2.png"
                alt="Insurance Analytics Dashboard"
                width={800}
                height={500}
                className="rounded-xl border border-white/10 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
<section className="py-32 px-6 bg-dark-bg">
  <div className="max-w-7xl mx-auto text-center">

    <h3 className="font-display font-800 text-4xl mb-16">
      Insurance Management Platform — Pricing
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* BASIC PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-purple-400">
          Basic Plan
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 1,800
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 50 policies</li>
          <li>Basic policy & claims management</li>
          <li>Customer record tracking</li>
          <li>Email support</li>
          <li>Offline & online sync</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-purple-500 rounded-xl font-semibold hover:bg-purple-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* STANDARD PLAN */}
      <div className="p-8 rounded-2xl border border-purple-500 bg-purple-500/5">
        <h4 className="font-display text-xl mb-4 text-purple-400">
          Standard Plan
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 4,200
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 500 policies</li>
          <li>Automated claims processing</li>
          <li>Agent & broker management</li>
          <li>Advanced reporting dashboards</li>
          <li>Priority support</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-purple-500 rounded-xl font-semibold hover:bg-purple-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* ENTERPRISE PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-purple-400">
          Enterprise Plan
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 7,800
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Unlimited policies</li>
          <li>Custom workflow & integration with other systems</li>
          <li>Dedicated account manager & onboarding</li>
          <li>Advanced analytics & KPI dashboards</li>
          <li>Multi-branch or multi-region deployments</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-purple-500 rounded-xl font-semibold hover:bg-purple-600 transition"
        >
          Request a Quote
        </Link>
      </div>

    </div>

    <p className="text-white/40 mt-10 text-sm">
      Optional integration with ERP or CRM systems available upon request.
    </p>

  </div>
</section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Streamline Your Insurance Operations
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy the Insurance Management System today to improve policy administration, enhance customer service, and reduce operational overhead.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-purple-500 rounded-xl font-semibold hover:bg-purple-600 transition"
          >
            Schedule Demo →
          </Link>
        </section>

      </div>
    </Layout>
  );
}