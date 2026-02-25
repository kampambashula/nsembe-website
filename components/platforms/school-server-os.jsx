import Layout from "../../components/Layout";
import Image from "next/image";

export default function SchoolServerOSPage() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-green-400/5 blur-3xl rounded-full -translate-y-1/2" />
          <div className="relative max-w-6xl mx-auto">
            <span className="font-mono text-xs tracking-widest text-green-400 uppercase">
              School Server OS — Offline Education System
            </span>
            <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight mt-6">
              Offline Digital Learning for
              <br />
              <span className="text-green-400">Schools & Institutions</span>
            </h1>
            <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed">
              A full offline school server OS with LMS, digital library, and admin tools for reliable digital education in low-connectivity environments.
            </p>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="font-display font-700 text-3xl mb-6">Core Features</h3>
              <ul className="space-y-4 text-white/70">
                <li>• Full LMS with courses & assessments</li>
                <li>• Offline digital library & resources</li>
                <li>• Student & teacher management</li>
                <li>• Local Wi-Fi classroom delivery</li>
              </ul>
            </div>
            <Image
              src="/images/platforms/2.png"
              alt="Clinicae Mockup"
              width={800}   // set actual width
              height={500}  // set actual height
              className="rounded-lg"
            />

          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center">
          <h3 className="font-display font-800 text-4xl mb-6">
            Empower Digital Education Offline
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto mb-10">
            Provide reliable, offline-first digital education to every classroom.
          </p>
          <button className="px-8 py-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition">
            Request a Demo
          </button>
        </section>

      </div>
    </Layout>
  );
}