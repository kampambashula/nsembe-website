import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function AfriFinance() {
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
                AfriFinance Hybrid Blockchain System
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Decentralized Finance
                <br />
                <span className="text-purple-400">For Africa.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                AfriFinance provides a tokenized, hybrid blockchain system for secure payments, microfinance, and decentralized financial operations across institutions and individuals.
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
                src="/images/systems/afrifinance1.png"
                alt="AfriFinance Dashboard Mockup"
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
                AfriFinance empowers financial operations with:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Tokenized asset management</li>
                <li>Hybrid blockchain ledger (private + public chains)</li>
                <li>Secure microfinance and loan tracking</li>
                <li>Decentralized payments and remittances</li>
                <li>Real-time transaction analytics & reporting</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/systems/afrifinance2.png"
                alt="AfriFinance Analytics"
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
            Revolutionize Finance in Africa
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bring decentralized, tokenized, and secure financial systems to institutions and communities across Africa.
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