import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function SchoolServerOSPage() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-green-400/5 blur-3xl rounded-full -translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-green-400 uppercase">
                School Server OS — Offline Education Infrastructure
              </span>

              <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
                Digital Learning
                <br />
                <span className="text-green-400">Without Internet Dependence</span>
              </h1>

              <p className="text-white/60 max-w-xl mt-8 text-lg leading-relaxed">
                A Raspberry Pi-based offline school server with integrated LMS,
                digital library, and administrative tools — built for rural and
                infrastructure-constrained schools.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  Request Institutional Proposal →
                </Link>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div>
              <Image
                src="/images/platforms/2.png"
                alt="School Server OS Hardware"
                width={900}
                height={600}
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <h3 className="font-display font-700 text-3xl mb-6">
                Core Capabilities
              </h3>

              <ul className="space-y-4 text-white/70">
                <li>• Full Offline LMS (courses, quizzes, grading)</li>
                <li>• Preloaded Digital Library & Curriculum Content</li>
                <li>• Student & Teacher Record Management</li>
                <li>• Local Wi-Fi Classroom Distribution</li>
                <li>• Secure Offline Data Storage</li>
                <li>• Sync with District / National Systems</li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/platforms/system.png"
                alt="School Server Dashboard"
                width={800}
                height={500}
                className="rounded-xl border border-white/10 shadow-lg"
              />
            </div>

          </div>
        </section>

        {/* SCHOOLTRACK SECTION */}
        <section className="py-28 px-6 bg-dark-bg-2">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <Image
                src="/images/platforms/school-track-system.png"
                alt="SchoolTrack System Dashboard"
                width={800}
                height={500}
                className="rounded-xl border border-white/10 shadow-lg"
              />
            </div>

            <div>
              <h3 className="font-display font-700 text-3xl mb-6 text-green-400">
                SchoolTrack (Cloud or Local)
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                SchoolTrack provides attendance tracking, performance analytics,
                and automated reporting — ideal for schools that require
                monitoring and accountability tools.
              </p>

              <ul className="space-y-3 text-white/70 text-sm">
                <li>• Attendance & Term Reports</li>
                <li>• Student Performance Analytics</li>
                <li>• Teacher Monitoring Tools</li>
                <li>• District Dashboard Sync</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING SECTION */}
<section className="py-32 px-6 bg-dark-bg">
  <div className="max-w-7xl mx-auto text-center">

    <h3 className="font-display font-800 text-4xl mb-16">
      Institutional Pricing
    </h3>

    {/* Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* SCHOOLTRACK BASIC */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-green-400">
          SchoolTrack Basic
        </h4>
        <p className="text-3xl font-bold mb-6">
          Starting at ZMW 8,550
          <span className="text-sm text-white/50"> / year</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Attendance Management</li>
          <li>Student Records</li>
          <li>Basic Reporting</li>
          <li>Email Support</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* SCHOOLTRACK PRO */}
      <div className="p-8 rounded-2xl border border-green-500 bg-green-500/5">
        <h4 className="font-display text-xl mb-4 text-green-400">
          SchoolTrack Pro
        </h4>
        <p className="text-3xl font-bold mb-6">
          Starting at ZMW 15,500
          <span className="text-sm text-white/50"> / year</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Advanced Analytics</li>
          <li>Automated Term Reports</li>
          <li>District-Level Dashboard Sync</li>
          <li>Priority Support</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* SCHOOL SERVER LMS – STANDARD */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-green-400">
          School Server LMS – Standard
        </h4>
        <p className="text-3xl font-bold mb-6">
          Starting at ZMW 22,500
          <span className="text-sm text-white/50"> / once-off</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Offline LMS Deployment</li>
          <li>Local Wi-Fi Setup</li>
          <li>Basic Teacher & Student Accounts</li>
          <li>Onsite Installation</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* SCHOOL SERVER LMS – ADVANCED */}
      <div className="p-8 rounded-2xl border border-green-500 bg-green-500/5">
        <h4 className="font-display text-xl mb-4 text-green-400">
          School Server LMS – Advanced
        </h4>
        <p className="text-3xl font-bold mb-6">
          Starting at ZMW 28,500
          <span className="text-sm text-white/50"> / once-off</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          
          <li>Offline LMS Deployment with Multiple Classes</li>
          <li>Local Wi-Fi Network + Teacher Dashboards</li>
          <li>Automated Term Reports & Analytics</li>
          <li>Onsite Installation & Teacher Training</li>
        </ul>

        <Link 
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* SCHOOL SERVER OS */}
      <div className="p-8 rounded-2xl border border-white/10 bg-dark-bg-3/40">
        <h4 className="font-display text-xl mb-4 text-green-400">
          School Server OS
        </h4>
        <p className="text-3xl font-bold mb-6">
          Starting at ZMW 34,500
          <span className="text-sm text-white/50"> / once-off</span>
        </p>

        <ul className="space-y-3 text-white/70 text-sm">
          <li>Raspberry Pi Hardware</li>
          <li>Offline LMS Deployment</li>
          <li>Local Wi-Fi Network Setup</li>
          <li>Onsite Installation</li>
          <li>Full Training & Support</li>
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
      Custom pricing available for district or national-scale deployments.
    </p>

  </div>
</section>
        {/* FINAL CTA */}
        <section className="py-32 px-6 text-center bg-dark-bg-2">
          <h3 className="font-display font-800 text-4xl mb-6">
            Education Is Infrastructure.
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy resilient digital education systems designed for Zambia’s real infrastructure conditions.
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