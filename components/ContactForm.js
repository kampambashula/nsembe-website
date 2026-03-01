import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
    company: "" // honeypot
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSent(true);
      setForm({ name: "", email: "", org: "", message: "", company: "" });

    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg-2/70" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <div className="bg-dark-bg-3/40 border border-white/8 rounded-2xl p-8 sm:p-10 backdrop-blur-sm shadow-lg">
            {sent ? (
              <div className="text-center py-12">
                <h3 className="font-display font-700 text-2xl text-white mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-sm text-white/50">
                  We'll get back to you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Honeypot Spam Protection */}
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-white/50 mb-2 uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl text-sm text-white bg-dark-bg-2 border border-white/20 focus:ring-2 focus:ring-green-light outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/50 mb-2 uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl text-sm text-white bg-dark-bg-2 border border-white/20 focus:ring-2 focus:ring-green-light outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/50 mb-2 uppercase">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl text-sm text-white bg-dark-bg-2 border border-white/20 focus:ring-2 focus:ring-green-light outline-none transition"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/50 mb-2 uppercase">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl text-sm text-white bg-dark-bg-2 border border-white/20 focus:ring-2 focus:ring-green-light outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full font-display text-sm py-3.5 rounded-xl bg-gradient-to-r from-green-light to-cyan-light text-dark-bg hover:shadow-glow-green transition disabled:opacity-70"
                >
                  {sending ? "Sending..." : "Send Message →"}
                </button>

              </form>
            )}
          </div>

          {/* Company Info Card */}
          <div className="bg-gradient-to-r from-green-light/10 to-cyan-light/10 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
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
                We're excited to collaborate with ministries, schools, NGOs, and 
                partners. Reach out to discuss digital solutions, pilot deployments, 
                or national scale projects. Let's build infrastructure that scales.
              </p>
            </div>

            <Link
              href="mailto:info@nsembe.online"
              className="mt-6 inline-block px-6 py-3 bg-green-light text-dark-bg font-semibold rounded-xl hover:shadow-glow-green transition text-center"
            >
              Reach Out to Us →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}