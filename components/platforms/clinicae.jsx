import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function ClinicaePage() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-cyan-400/5 blur-3xl rounded-full -translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
                Clinicae — Offline Health Infrastructure
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Resilient Digital Health
                <br />
                <span className="text-cyan-400">For Clinics & Hospitals</span>
              </h1>

              <p className="text-white/60 max-w-xl mt-8 text-lg leading-relaxed">
                Clinicae is an offline-first electronic health record (EHR)
                and facility management system designed for healthcare
                environments with limited connectivity.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
                >
                  Request Health Deployment Proposal →
                </Link>
              </div>
            </div>

            <div>
              <Image
                src="/images/platforms/1.png"
                alt="Clinicae System Dashboard"
                width={900}
                height={600}
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

            <div>
              <h3 className="font-display font-700 text-3xl mb-6">
                Core Clinical Capabilities
              </h3>

              <ul className="space-y-4 text-white/70">
                <li>• Electronic Patient Records & Clinical History</li>
                <li>• Outpatient & Inpatient Workflow Management</li>
                <li>• Pharmacy & Drug Inventory Tracking</li>
                <li>• Laboratory & Diagnostics Recording</li>
                <li>• Appointment & Queue Management</li>
                <li>• Offline Data Replication & Secure Sync</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-700 text-3xl mb-6 text-cyan-400">
                AI-Enhanced Features
              </h3>

              <ul className="space-y-4 text-white/70">
                <li>• AI-assisted clinical decision support prompts</li>
                <li>• Risk flagging for high-priority patients</li>
                <li>• Automated triage recommendations</li>
                <li>• Drug interaction alerts</li>
                <li>• Health trend analytics & outbreak pattern signals</li>
                <li>• Predictive stock-level alerts for pharmacy</li>
              </ul>

              <p className="text-white/50 text-sm mt-6">
                AI modules operate locally and do not require continuous internet connectivity.
              </p>
            </div>

          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-32 px-6 bg-dark-bg">
          <div className="max-w-6xl mx-auto text-center">

            <h3 className="font-display font-800 text-4xl mb-16">
              SaaS Pricing for Clinicae
            </h3>

            <div className="grid md:grid-cols-3 gap-10">

              {/* CLINIC PLAN */}
              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-cyan-400">
                  Clinic
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 15,000
                  <span className="text-sm text-white/50"> / year</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Up to 10 Users</li>
                  <li>Patient Records & OPD</li>
                  <li>Workflow Module</li>
                  <li>Basic Risk Alerts</li>
                  <li>Email Support</li>
                </ul>

                <Link 
                  href="/contact" 
                  className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
                >
                  Request a Quote
                </Link>
              </div>

              {/* HOSPITAL PLAN */}
              <div className="p-8 rounded-2xl border border-cyan-500 bg-cyan-500/5">
                <h4 className="font-display text-xl mb-4 text-cyan-400">
                  Hospital
                </h4>
                <p className="text-3xl font-bold mb-6">
                  ZMW 45,000
                  <span className="text-sm text-white/50"> / year</span>
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Unlimited Users</li>
                  <li>Inpatient & Ward Management</li>
                  <li>Laboratory Module</li>
                  <li>Advanced AI Clinical Support</li>
                  <li>Priority Support & Training</li>
                </ul>

                <Link 
                  href="/contact" 
                  className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
                >
                  Request a Quote
                </Link>
              </div>

              {/* NATIONAL / DISTRICT */}
              <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
                <h4 className="font-display text-xl mb-4 text-cyan-400">
                  District / National
                </h4>
                <p className="text-3xl font-bold mb-6">
                  Custom Pricing
                </p>

                <ul className="space-y-3 text-white/70 text-sm">
                  <li>Multi-Facility Deployment</li>
                  <li>Central Analytics Dashboard</li>
                  <li>National Reporting Framework</li>
                  <li>Custom Integration with MoH Systems</li>
                  <li>Onsite Deployment & Capacity Building</li>
                </ul>

                <Link 
                  href="/contact" 
                  className="mt-6 inline-block px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
                >
                  Request a Quote
                </Link>
              </div>

            </div>

            <p className="text-white/40 mt-10 text-sm">
              Optional hardware-based offline server packages available upon request.
            </p>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Health Infrastructure Should Not Depend on Internet
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy resilient, AI-enabled digital health systems across
            clinics, hospitals, and national programs.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
          >
            Schedule Health Strategy Consultation →
          </Link>
        </section>

      </div>
    </Layout>
  );
}