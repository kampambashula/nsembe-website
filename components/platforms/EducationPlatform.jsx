import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function EducationPlatform() {
  return (
    <Layout>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">
                Education Infrastructure Platform
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Digital Systems Built
                <br />
                <span className="text-blue-400">For Real Schools.</span>
              </h1>

              <p className="text-white/60 mt-8 text-lg leading-relaxed">
                SchoolTrack and School Server OS form a complete offline-capable
                education ecosystem for institutions operating in low-connectivity
                environments.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
                >
                  Request Institutional Proposal →
                </Link>
              </div>
            </div>

            {/* MOCKUP IMAGE BACK */}
            <div>
              <Image
                src="/images/platforms/school-track-system.png"
                alt="SchoolTrack Dashboard Mockup"
                width={900}
                height={600}
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>

          </div>
        </section>

        

        {/* SCHOOL TRACK SECTION */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h3 className="font-display font-700 text-3xl mb-6 text-blue-400">
                SchoolTrack System
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                A comprehensive school management and monitoring system providing:
              </p>

              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Attendance tracking</li>
                <li>Student performance dashboards</li>
                <li>Teacher reporting tools</li>
                <li>Automated term reports</li>
                <li>District-level analytics integration</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/platforms/school-track-system.png"
                alt="SchoolTrack Analytics"
                width={800}
                height={500}
                className="rounded-xl border border-white/10 shadow-lg"
              />
            </div>

          </div>
        </section>

        {/* SCHOOL SERVER OS SECTION */}
        <section className="py-28 px-6 bg-dark-bg-2">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <Image
                src="/images/platforms/2.png"
                alt="School Server OS Hardware"
                width={800}
                height={500}
                className="rounded-xl border border-white/10 shadow-lg"
              />
            </div>

            <div>
              <h3 className="font-display font-700 text-3xl mb-6 text-blue-400">
                School Server OS
              </h3>

              <p className="text-white/60 leading-relaxed mb-4">
                A physical Raspberry Pi-based school server combined with LMS software,
                enabling fully offline content hosting and local student data management.
              </p>

              <p className="text-white/60 leading-relaxed">
                Designed for rural and infrastructure-constrained schools,
                School Server OS ensures continuity of learning even without internet.
              </p>
            </div>

          </div>
        </section>

        

        {/* FINAL CTA */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Education Is Infrastructure.
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy scalable systems today that strengthen learning outcomes tomorrow.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
          >
            Schedule Deployment Consultation →
          </Link>
        </section>

      </div>
    </Layout>
  );
}