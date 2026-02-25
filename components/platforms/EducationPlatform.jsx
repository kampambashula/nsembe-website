import Layout from "../../components/Layout";


export default function EducationPlatform() {
  return (
  <Layout>
    <div className="bg-dark-bg min-h-screen text-white">

      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-blue-400 uppercase">
            Schools & Education Platform
          </span>

          <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight mt-6">
            Building the Digital
            <br />
            <span className="text-blue-400">
              Foundation for Learning.
            </span>
          </h1>

          <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed">
            A complete offline-capable digital ecosystem for schools,
            universities, and ministries of education operating in
            infrastructure-constrained environments.
          </p>
        </div>
      </section>

      {/* BIG STATEMENT */}
      <section className="py-28 px-6 bg-dark-bg-2 text-center">
        <h2 className="font-display font-800 text-4xl lg:text-6xl leading-tight max-w-4xl mx-auto">
          Education should not depend
          <br />
          on internet access.
        </h2>

        <p className="text-white/50 mt-8 max-w-3xl mx-auto text-lg">
          Millions of students operate in low-bandwidth environments.
          This platform ensures learning, assessment, and administration
          continue uninterrupted — online or offline.
        </p>
      </section>

      {/* PLATFORM CONCEPT */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h3 className="font-display font-700 text-3xl mb-6">
              A Complete Education Operating System
            </h3>

            <p className="text-white/60 mb-6 leading-relaxed">
              Designed for national scale and local realities,
              the Education Platform integrates:
            </p>

            <ul className="space-y-4 text-white/70">
              <li>• Learning Management System (LMS)</li>
              <li>• Student Information System (SIS)</li>
              <li>• Offline Digital Library</li>
              <li>• Teacher Performance & Assessment Tools</li>
              <li>• Ministry-Level Analytics Dashboard</li>
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

      {/* FEATURE PILLARS */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-800 text-4xl mb-16 text-center">
            Three System Layers
          </h3>

          <div className="grid md:grid-cols-3 gap-12">

            <div>
              <h4 className="font-display text-xl mb-4 text-blue-400">
                Academic Layer
              </h4>
              <p className="text-white/60 leading-relaxed">
                Course delivery, assignments, grading,
                offline assessments, and digital content
                accessible on low-spec devices.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-blue-400">
                Administrative Layer
              </h4>
              <p className="text-white/60 leading-relaxed">
                Enrollment management, attendance,
                staff records, timetables, and
                financial tracking systems.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4 text-blue-400">
                National Oversight Layer
              </h4>
              <p className="text-white/60 leading-relaxed">
                Ministry dashboards tracking
                performance, enrollment trends,
                resource allocation, and outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OFFLINE ARCHITECTURE */}
      <section className="py-28 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-10">
          Offline by Design.
        </h3>

        <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
          Schools can operate fully without internet.
          Content, assessments, and records are stored locally
          and synchronized securely when connectivity becomes available.
        </p>
      </section>

      {/* IMPLEMENTATION ROADMAP */}
      <section className="py-28 px-6 bg-dark-bg-2">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display font-800 text-4xl mb-16 text-center">
            Implementation Path
          </h3>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Pilot School Deployment",
              "District Rollout",
              "Teacher Training & Onboarding",
              "National Integration"
            ].map((step) => (
              <div key={step} className="p-6 border border-white/10 rounded-2xl">
                <h4 className="font-display text-sm uppercase tracking-wide text-blue-400 mb-3">
                  Phase
                </h4>
                <p className="text-white/70 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATION BUILDING SECTION */}
      <section className="py-32 px-6 text-center">
        <h3 className="font-display font-800 text-4xl mb-6">
          Education Is Infrastructure.
        </h3>

        <p className="text-white/50 max-w-2xl mx-auto mb-10">
          The future workforce, innovators, and leaders
          depend on digital foundations built today.
        </p>

        <button className="px-8 py-4 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition">
          Schedule Education Strategy Session
        </button>
      </section>

    </div>
    </Layout>
  );
}