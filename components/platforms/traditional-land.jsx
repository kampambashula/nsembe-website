import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function TraditionalLandSystem() {
  return (
    <Layout>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-yellow-500/5 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-yellow-400 uppercase">
                Traditional Land Management
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Manage Customary
                <br />
                <span className="text-yellow-400">Land With Confidence.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                The Traditional Land System helps chiefs, headmen, and local authorities digitally manage customary land allocations, track occupancy, and handle disputes efficiently while respecting local governance structures.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
                >
                  Request Demo →
                </Link>
              </div>
            </div>

            {/* MOCKUP IMAGE */}
            <div>
              <Image
                src="/images/systems/traditional-land-dashboard.png"
                alt="Traditional Land System Dashboard"
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
              <h3 className="font-display font-700 text-3xl mb-6 text-yellow-400">
                Key Features
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                This system provides the following capabilities for traditional land management:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Customary land registry & occupancy tracking</li>
                <li>Allocation approvals & reporting</li>
                <li>Conflict & dispute management tools</li>
                <li>Offline operation with secure sync</li>
                <li>Integration with GIS mapping for plotting</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/traditional-land-map.png"
                alt="Traditional Land Map"
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
      Traditional Land System — SaaS Pricing
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* BASIC PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-yellow-400">
          Basic Plan
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 1,200
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 100 plots/allocations</li>
          <li>Customary land registry & occupancy tracking</li>
          <li>Basic reporting tools</li>
          <li>Email support</li>
          <li>Offline operation with secure sync</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* STANDARD PLAN */}
      <div className="p-8 rounded-2xl border border-yellow-500 bg-yellow-500/5">
        <h4 className="font-display text-xl mb-4 text-yellow-400">
          Standard Plan
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 3,500
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 1,000 plots/allocations</li>
          <li>Allocation approvals & reporting dashboards</li>
          <li>Conflict & dispute management</li>
          <li>Integration with GIS mapping</li>
          <li>Priority email & chat support</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* ENTERPRISE PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-yellow-400">
          Enterprise Plan
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 6,500
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Unlimited plots/allocations</li>
          <li>Full GIS mapping & advanced analytics</li>
          <li>Multi-authority collaboration</li>
          <li>Dedicated account manager</li>
          <li>Custom integrations & onsite onboarding</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
        >
          Request a Quote
        </Link>
      </div>

    </div>

    <p className="text-white/40 mt-10 text-sm">
      Optional offline server packages and district-scale deployments available upon request.
    </p>

  </div>
</section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Empower Traditional Authorities
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Digitize customary land allocation and occupancy tracking while maintaining governance traditions. Simplify reporting and reduce administrative overhead.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Schedule Demo →
          </Link>
        </section>

      </div>
    </Layout>
  );
}