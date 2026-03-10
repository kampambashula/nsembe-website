import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function CouncilLandSystem() {
  return (
    <Layout>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-green-500/5 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-green-400 uppercase">
                Council Land Management
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Efficient
                <br />
                <span className="text-green-400">Council Land Operations.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                The Council Land System is designed to digitize land registry, track land ownership, and manage council-level land allocations seamlessly. It supports offline operation and secure synchronization when connectivity is restored.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  Request Demo →
                </Link>
              </div>
            </div>

            {/* MOCKUP IMAGE */}
            <div>
              <Image
                src="/images/systems/council-land-dashboard.png"
                alt="Council Land System Dashboard"
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
                The system provides comprehensive council land management capabilities:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Land ownership registry & transfers</li>
                <li>Allocation tracking & planning</li>
                <li>Integration with GIS mapping</li>
                <li>Document management & approvals</li>
                <li>Offline support with secure sync</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/council-land-map.png"
                alt="Council Land GIS Map"
                width={800}
                height={500}
                className="rounded-xl border border-white/10 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Digitize Your Council Land Operations
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy the Council Land System to manage land ownership, allocations, and approvals efficiently while reducing administrative overhead.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Schedule Demo →
          </Link>
        </section>

        {/* PRICING SECTION */}
<section className="py-32 px-6 bg-dark-bg">
  <div className="max-w-7xl mx-auto text-center">

    <h3 className="font-display font-800 text-4xl mb-16">
      Council Land System — SaaS Pricing
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* BASIC COUNCIL PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-green-400">
          Basic Council
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 1,200
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 5 Land Officers</li>
          <li>Ownership Registry & Transfers</li>
          <li>Allocation Tracking & Planning</li>
          <li>Document Management</li>
          <li>Email Support & Cloud Updates</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* STANDARD COUNCIL PLAN */}
      <div className="p-8 rounded-2xl border border-green-500 bg-green-500/5">
        <h4 className="font-display text-xl mb-4 text-green-400">
          Standard Council
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 2,500
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 20 Land Officers</li>
          <li>Ownership & Allocation Management</li>
          <li>GIS Map Integration</li>
          <li>Document Approvals & Audit Trails</li>
          <li>Priority Support & Quarterly Reports</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* ENTERPRISE COUNCIL PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-green-400">
          Enterprise Council
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 4,500
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Unlimited Land Officers</li>
          <li>Multi-District Deployment</li>
          <li>Advanced GIS & Mapping Analytics</li>
          <li>Custom Integrations & Reporting</li>
          <li>Onsite Support & Training</li>
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
      Optional GIS hardware or multi-district server packages available upon request.
    </p>

  </div>
</section>

      </div>
    </Layout>
  );
}