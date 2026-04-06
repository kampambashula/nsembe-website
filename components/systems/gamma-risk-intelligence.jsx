import Layout from "../Layout";
import Link from "next/link";
import Image from "next/image";

export default function GammaRiskIntelligence() {
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
                Gamma Risk Intelligence
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Understand Risk.
                <br />
                <span className="text-yellow-400">Control Outcomes.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                Gamma is a portfolio risk intelligence platform designed for financial institutions, 
                investment firms, and decision-makers. It combines credit risk modeling, macroeconomic 
                signals, and portfolio analytics to provide a unified view of exposure, performance, and future risk.
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
                src="/images/systems/gamma-dashboard.png"
                alt="Gamma Risk Intelligence Dashboard"
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
                Core Capabilities
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                Gamma delivers deep analytical capabilities across credit, portfolio performance, 
                and macroeconomic risk:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Probability of Default (PD) modeling using logistic regression</li>
                <li>Loss Given Default (LGD) estimation and recovery analytics</li>
                <li>Exposure at Default (EAD) tracking and forecasting</li>
                <li>Macroeconomic scenario overlays (inflation, shocks, stress testing)</li>
                <li>Portfolio segmentation, scoring, and risk grading</li>
                <li>Real-time dashboards for risk monitoring and reporting</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/gamma-dashboard.png"
                alt="Gamma Analytics View"
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
              Gamma — Pricing
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

              {/* STARTER */}
              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-yellow-400">
                  Starter
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 2,500
                  <span className="text-sm text-white/50"> / month</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Basic portfolio dashboards</li>
                  <li>PD modeling (standard)</li>
                  <li>Loan book segmentation</li>
                  <li>Monthly reporting</li>
                  <li>Email support</li>
                </ul>

                <Link 
                  href="/contact"
                  className="mt-6 inline-block px-6 py-3 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
                >
                  Request a Quote
                </Link>
              </div>

              {/* PROFESSIONAL */}
              <div className="p-8 rounded-2xl border border-yellow-500 bg-yellow-500/5">
                <h4 className="font-display text-xl mb-4 text-yellow-400">
                  Professional
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 6,500
                  <span className="text-sm text-white/50"> / month</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Advanced PD, LGD, EAD modeling</li>
                  <li>Macroeconomic scenario integration</li>
                  <li>Risk grading & scoring engine</li>
                  <li>Interactive dashboards</li>
                  <li>Priority support</li>
                </ul>

                <Link 
                  href="/contact"
                  className="mt-6 inline-block px-6 py-3 bg-yellow-500 rounded-xl font-semibold hover:bg-yellow-600 transition"
                >
                  Request a Quote
                </Link>
              </div>

              {/* ENTERPRISE */}
              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-yellow-400">
                  Enterprise
                </h4>
                <p className="text-3xl font-bold mb-6">
                  Custom Pricing
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Full portfolio risk infrastructure</li>
                  <li>Custom macroeconomic models</li>
                  <li>API integrations with core banking systems</li>
                  <li>On-premise or cloud deployment</li>
                  <li>Dedicated support & onboarding</li>
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
              Custom deployments for banks, fintechs, and investment firms available on request.
            </p>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Turn Data Into Risk Intelligence
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Move beyond static reports. Gamma gives you a living, dynamic view of your portfolio—so you can anticipate risk, optimize performance, and make confident decisions.
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