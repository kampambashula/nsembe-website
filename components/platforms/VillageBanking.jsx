import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function VillageBanking() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-green-500/5 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-green-400 uppercase">
                Village Banking System
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Empowering Communities
                <br />
                <span className="text-green-400">Through Microfinance.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                The Village Banking System enables small community groups to manage savings, 
                provide micro-loans, and improve financial inclusion in rural and underbanked areas.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  Request System Demo →
                </Link>
              </div>
            </div>

            {/* MOCKUP IMAGE */}
            <div>
              <Image
                src="/images/systems/village-banking.png"
                alt="Village Banking Dashboard Mockup"
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
              <h3 className="font-display font-700 text-3xl mb-6 text-green-400">
                Key Features
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                The system supports community-focused microfinance with:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Group savings & loan management</li>
                <li>Automated contribution tracking</li>
                <li>Loan application & approval workflows</li>
                <li>Financial reporting & dashboards</li>
                <li>Mobile and offline access for members</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/village-banking-analytics.png"
                alt="Village Banking Analytics"
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
              Village Banking System — SaaS Pricing
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

              {/* BASIC PLAN */}
              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-green-400">
                  Basic Plan
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 1,200
                  <span className="text-sm text-white/50"> / month</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Up to 25 members</li>
                  <li>Group savings & loan management</li>
                  <li>Contribution tracking</li>
                  <li>Basic financial dashboards</li>
                  <li>Email support</li>
                  <li>Offline & online access</li>
                </ul>

                <Link 
                  href="/contact"
                  className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  Request a Quote
                </Link>
              </div>

              {/* STANDARD PLAN */}
              <div className="p-8 rounded-2xl border border-green-500 bg-green-500/5">
                <h4 className="font-display text-xl mb-4 text-green-400">
                  Standard Plan
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 3,000
                  <span className="text-sm text-white/50"> / month</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Up to 100 members</li>
                  <li>Automated savings & loan workflows</li>
                  <li>Loan approvals & disbursement tracking</li>
                  <li>Advanced dashboards & reports</li>
                  <li>Priority support</li>
                </ul>

                <Link 
                  href="/contact"
                  className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  Request a Quote
                </Link>
              </div>

              {/* ENTERPRISE PLAN */}
              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-green-400">
                  Enterprise Plan
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 5,500
                  <span className="text-sm text-white/50"> / month</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Unlimited members & multiple groups</li>
                  <li>Custom workflows & integrations</li>
                  <li>Dedicated account manager & onboarding</li>
                  <li>Comprehensive analytics & KPI dashboards</li>
                  <li>Multi-community deployment support</li>
                </ul>

                <Link 
                  href="/contact"
                  className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  Request a Quote
                </Link>
              </div>

            </div>

            <p className="text-white/40 mt-10 text-sm">
              Optional integration with mobile payment or accounting systems available upon request.
            </p>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Build Financial Resilience.
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy the Village Banking System in your community to strengthen savings, improve access to credit, and empower local members.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Schedule Deployment Consultation →
          </Link>
        </section>

      </div>
    </Layout>
  );
}