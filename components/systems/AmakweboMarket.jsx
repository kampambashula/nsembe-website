import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function AmakweboMarket() {
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
                Amakwebo Informal Market System
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Organizing Local Markets
                <br />
                <span className="text-yellow-400">Digitally.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                Amakwebo brings informal market vendors online, allowing them to track sales, manage inventory, and streamline payments in low-tech environments.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
                >
                  Request System Demo →
                </Link>
              </div>
            </div>

            {/* MOCKUP IMAGE */}
            <div>
              <Image
                src="/images/systems/amakwebo1.png"
                alt="Amakwebo Market Dashboard Mockup"
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
                The system supports informal market management with:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Vendor registration & management</li>
                <li>Sales tracking & inventory management</li>
                <li>Digital payment & transaction tracking</li>
                <li>Market analytics & reporting</li>
                <li>Offline-first mobile and tablet support</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/amakwebo2.png"
                alt="Amakwebo Market Analytics"
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
      Amakwebo Market System — SaaS Pricing
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* BASIC PLAN */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-yellow-400">
          Basic Plan
        </h4>
        <p className="text-3xl font-bold mb-6">
          ZMW 800
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 50 vendors</li>
          <li>Sales & inventory tracking</li>
          <li>Basic reporting dashboards</li>
          <li>Email support</li>
          <li>Offline-first mobile support</li>
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
          ZMW 2,000
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Up to 200 vendors</li>
          <li>Sales & inventory management</li>
          <li>Digital payments & transaction tracking</li>
          <li>Market analytics dashboards</li>
          <li>Priority support & updates</li>
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
          ZMW 4,500
          <span className="text-sm text-white/50"> / month</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Unlimited vendors</li>
          <li>Advanced analytics & reporting</li>
          <li>Custom digital payment integration</li>
          <li>Offline-first mobile & tablet support</li>
          <li>Dedicated account manager & onboarding</li>
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
      Custom pricing and multi-market deployments available upon request.
    </p>

  </div>
</section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Bring Your Market Online.
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy Amakwebo in your local markets to organize vendors, improve efficiency, and increase revenue streams for informal traders.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Schedule Deployment Consultation →
          </Link>
        </section>

      </div>
    </Layout>
  );
}