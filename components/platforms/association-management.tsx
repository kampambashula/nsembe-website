import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function AssociationManagement() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">
                Association Management Platform
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Simplifying
                <br />
                <span className="text-blue-400">Association Operations.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                Our AMS helps associations manage memberships, track events, handle fees, and communicate with members efficiently — online and offline.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
                >
                  Request Demo →
                </Link>
              </div>
            </div>

            <div>
              <Image
                src="/images/systems/association-dashboard.png"
                alt="Association Management Dashboard"
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
              <h3 className="font-display font-700 text-3xl mb-6 text-blue-400">
                Key Features
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                The platform provides comprehensive support for association operations:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Membership registration & management</li>
                <li>Event scheduling & attendance tracking</li>
                <li>Subscription & fee management</li>
                <li>Communication tools (email/SMS)</li>
                <li>Offline & online data synchronization</li>
                <li>Reporting dashboards & analytics</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/association-analytics.png"
                alt="Association Analytics Dashboard"
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
      Association Management — SaaS Pricing
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* BASIC PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-blue-400">
          Basic Plan
        </h4>
        <p className="text-3xl font-bold mb-2">
          ZMW 1,200
          <span className="text-sm text-white/50"> / month</span>
        </p>
        <p className="text-sm text-white/50 mb-6">
          One-time Setup Fee: ZMW 2,000
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 1000 members</li>
          <li>Membership & event management</li>
          <li>Fee tracking & basic reporting</li>
          <li>Email support</li>
          <li>Offline & online sync</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* STANDARD PLAN */}
      <div className="p-8 rounded-2xl border border-blue-500 bg-blue-500/5">
        <h4 className="font-display text-xl mb-4 text-blue-400">
          Standard Plan
        </h4>
        <p className="text-3xl font-bold mb-2">
          ZMW 2,500
          <span className="text-sm text-white/50"> / month</span>
        </p>
        <p className="text-sm text-white/50 mb-6">
          One-time Setup Fee: ZMW 4,000
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 2000 members</li>
          <li>Automated event notifications</li>
          <li>Fee & subscription management</li>
          <li>Advanced dashboards & analytics</li>
          <li>Priority support & onboarding</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* ENTERPRISE PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-blue-400">
          Enterprise Plan
        </h4>
        <p className="text-3xl font-bold mb-2">
          ZMW 7,000
          <span className="text-sm text-white/50"> / month</span>
        </p>
        <p className="text-sm text-white/50 mb-6">
          One-time Setup Fee: ZMW 13,500
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Unlimited members & associations</li>
          <li>Custom workflows & integrations</li>
          <li>Dedicated account manager & onboarding</li>
          <li>Advanced analytics & KPI dashboards</li>
          <li>Multi-branch or multi-region deployments</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Request a Quote
        </Link>
      </div>

    </div>

    <p className="text-white/40 mt-10 text-sm">
      Optional integration with ERP, CRM, or member portals available upon request.
    </p>

  </div>
</section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Modernize Your Association Management
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy the Association Management System today to improve member engagement, simplify operations, and reduce administrative overhead.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
          >
            Schedule Demo →
          </Link>
        </section>

      </div>
    </Layout>
  );
}