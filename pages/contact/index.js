import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-dark-bg min-h-screen text-white">

        {/* HERO SECTION */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-green-light/5 blur-3xl rounded-full" />
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-cyan-light/5 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto text-center">
            <span className="font-mono text-xs tracking-widest text-green-light uppercase">
              Contact Nsembe Technologies
            </span>

            <h1 className="font-display font-800 text-5xl lg:text-6xl leading-tight mt-6">
              Let’s Build Digital
              <br />
              <span className="text-green-light">Infrastructure That Scales.</span>
            </h1>

            <p className="text-white/60 max-w-2xl mt-8 text-lg leading-relaxed mx-auto">
              Whether you're a ministry, school, NGO, or development partner —
              we’re ready to design and deploy systems that work in real-world,
              low-connectivity environments.
            </p>
          </div>
        </section>

        {/* WHY CONTACT SECTION */}
        <section className="py-24 px-6 bg-dark-bg-2">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display font-800 text-4xl mb-8">
              Strategic Collaboration Starts Here.
            </h2>

            <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
              We work with public institutions, donor agencies, and private
              sector organizations to deliver scalable digital systems across
              education, governance, and service delivery.
            </p>

            <div className="grid md:grid-cols-3 gap-10 text-left">
              <div className="p-6 border border-white/10 rounded-2xl bg-dark-bg-3/40">
                <h3 className="font-display text-lg text-green-light mb-3">
                  Government & Ministries
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  National and district-level digital systems, monitoring
                  dashboards, and scalable infrastructure deployments.
                </p>
              </div>

              <div className="p-6 border border-white/10 rounded-2xl bg-dark-bg-3/40">
                <h3 className="font-display text-lg text-green-light mb-3">
                  Schools & Universities
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Offline-first education systems, SchoolTrack deployments,
                  and School Server OS installations.
                </p>
              </div>

              <div className="p-6 border border-white/10 rounded-2xl bg-dark-bg-3/40">
                <h3 className="font-display text-lg text-green-light mb-3">
                  NGOs & Donor Agencies
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Data systems for program monitoring, evaluation frameworks,
                  and infrastructure solutions in low-resource environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM + CARD SECTION */}
        <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-dark-bg-3 p-10 rounded-2xl shadow-xl">
            <ContactForm />
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-r from-green-light/10 to-cyan-light/10 p-10 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-green-light mb-4">
                Nsembe Technologies
              </h3>
              <p className="text-white/70 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@nsembe.online" className="text-green-light hover:underline">
                  info@nsembe.online
                </a>
              </p>
              <p className="text-white/70 mb-4">
                <strong>Location:</strong> Lusaka, Zambia
              </p>
              <p className="text-white/60 leading-relaxed">
                Reach out to us for inquiries about products, services, pilot
                deployments, or partnerships. We're ready to collaborate on
                digital solutions that scale nationally.
              </p>
            </div>

            <Link
              href="mailto:info@nsembe.online"
              className="mt-6 inline-block px-6 py-3 bg-green-light text-dark-bg font-semibold rounded-xl hover:shadow-glow-green transition text-center"
            >
              Reach Out to Us →
            </Link>
          </div>

        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-28 px-6 text-center">
          <h3 className="font-display font-800 text-4xl mb-6">
            Prefer a Direct Conversation?
          </h3>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a strategic discussion to explore pilot deployments,
            partnerships, or national scale integration.
          </p>

          <Link
            href="mailto:info@nsembe.online"
            className="px-8 py-4 bg-gradient-to-r from-green-light to-cyan-light text-dark-bg rounded-xl font-semibold hover:shadow-glow-green transition"
          >
            Schedule Strategy Call →
          </Link>
        </section>

      </div>
    </Layout>
  );
}