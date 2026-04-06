import Layout from "../Layout";
import Link from "next/link";
import Image from "next/image";

export default function NsembeAlpha() {
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
                Nsembe Alpha
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Stock Market Analysis
                <br />
                <span className="text-yellow-400">Built for Decisions.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                Nsembe Alpha is an investment analysis platform used to explore markets, evaluate securities, and track portfolios. 
                It brings together market data, valuation tools, and performance views into a single working environment.
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

            {/* DASHBOARD SCREENSHOT */}
            <div>
              <Image
                src="/images/systems/alpha-dashboard.png"
                alt="Nsembe Alpha Dashboard"
                width={900}
                height={600}
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </section>

        {/* FEATURES / CAPABILITIES */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display font-700 text-3xl mb-6 text-yellow-400">
                What the Platform Does
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                Alpha is structured around analysis workflows rather than isolated tools:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Screen and filter stocks using financial and market criteria</li>
                <li>Review company fundamentals and historical performance</li>
                <li>Apply valuation methods and compare across peers</li>
                <li>Track portfolios and monitor allocation exposure</li>
                <li>View charts and indicators for market timing context</li>
                <li>Maintain watchlists and follow selected instruments</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/alpha-dashboard.png"
                alt="Alpha Analytics View"
                width={800}
                height={500}
                className="rounded-xl border border-white/10 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-32 px-6 bg-dark-bg">
          <div className="max-w-7xl mx-auto text-center">

            <h3 className="font-display font-800 text-4xl mb-16">
              Nsembe Alpha — Pricing
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-yellow-400">
                  Starter
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 1,500
                  <span className="text-sm text-white/50"> / month</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Basic screening tools</li>
                  <li>Limited watchlists</li>
                  <li>Fundamental data access</li>
                  <li>Standard charts</li>
                </ul>

                <Link href="/contact" className="mt-6 inline-block px-6 py-3 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition">
                  Request a Quote
                </Link>
              </div>

              <div className="p-8 rounded-2xl border border-yellow-500 bg-yellow-500/5">
                <h4 className="font-display text-xl mb-4 text-yellow-400">
                  Professional
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 4,500
                  <span className="text-sm text-white/50"> / month</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Advanced valuation tools</li>
                  <li>Full charting & indicators</li>
                  <li>Portfolio tracking</li>
                  <li>Custom dashboards</li>
                </ul>

                <Link href="/contact" className="mt-6 inline-block px-6 py-3 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition">
                  Request a Quote
                </Link>
              </div>

              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-yellow-400">
                  Enterprise
                </h4>
                <p className="text-3xl font-bold mb-6">
                  Custom Pricing
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Team workspaces</li>
                  <li>API / data integrations</li>
                  <li>Custom models & workflows</li>
                  <li>Dedicated support</li>
                </ul>

                <Link href="/contact" className="mt-6 inline-block px-6 py-3 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition">
                  Request a Quote
                </Link>
              </div>

            </div>

            <p className="text-white/40 mt-10 text-sm">
              Pricing scales based on usage, data requirements, and deployment needs.
            </p>

          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            One Platform for Market Analysis
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nsembe Alpha is designed to support practical investment workflows—from screening and analysis to monitoring and review.
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