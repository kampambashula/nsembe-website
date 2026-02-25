import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
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
    setForm({ name: "", email: "", org: "", message: "" });
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    setSending(false);
  }
};

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg-2/70"/>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-green-light/30 to-transparent"/>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-light/4 blur-3xl pointer-events-none"/>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-light/4 blur-3xl pointer-events-none"/>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block font-mono text-xs text-green-light tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border border-green-light/20 bg-green-light/5">
            Get In Touch
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
            Ready to Transform
            <br />
            <span className="gradient-text-green">Your Institution?</span>
          </h2>
          <p className="font-body text-base text-white/50 max-w-lg mx-auto">
            Whether you're a government agency, clinic, NGO, school or enterprise — let's talk about
            how Nsembe Technologies can work for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4h12a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#46e9ca" strokeWidth="1.3"/>
                    <path d="M2 5l7 5 7-5" stroke="#46e9ca" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Email",
                value: "info@nsembe.online",
                href: "mailto:info@nsembe.online",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#6be76a" strokeWidth="1.3"/>
                    <path d="M4 9h10M9 2c-2.5 3-2.5 11 0 14M9 2c2.5 3 2.5 11 0 14" stroke="#6be76a" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Website",
                value: "www.nsembe.online",
                href: "https://nsembe.online",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2C6.24 2 4 4.24 4 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="#55ea1d" strokeWidth="1.3"/>
                    <circle cx="9" cy="7" r="2" stroke="#55ea1d" strokeWidth="1.3"/>
                  </svg>
                ),
                label: "Location",
                value: "Africa & Emerging Markets",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-dark-bg-3/40 border border-white/6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-dark-bg-2/60 border border-white/10 flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-xs text-white/40 mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="font-body text-sm text-white hover:text-cyan-light transition-colors duration-200">
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-sm text-white">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Quick email CTA */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-light/8 to-cyan-light/5 border border-green-light/20">
              <p className="font-body text-sm text-white/60 mb-3">
                Prefer to reach us directly?
              </p>
              <a
                href="mailto:info@nsembe.online"
                className="btn-primary inline-block font-display font-600 text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-green-light to-cyan-light text-dark-bg hover:shadow-glow-green transition-all duration-300"
              >
                Send Email Directly →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-dark-bg-3/40 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-light/15 border border-green-light/40 flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l6 6L23 8" stroke="#6be76a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display font-700 text-xl text-white mb-2">Message Sent!</h3>
                <p className="font-body text-sm text-white/50">
                  We'll get back to you within 1-2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-white/50 mb-2 tracking-wide uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Banda"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 font-body"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-white/50 mb-2 tracking-wide uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@institution.org"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/50 mb-2 tracking-wide uppercase">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    placeholder="Business / NGO / School"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 font-body"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/50 mb-2 tracking-wide uppercase">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your institution's needs and how we can help..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 font-body resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full font-display font-600 text-sm py-3.5 rounded-xl bg-gradient-to-r from-green-light to-cyan-light text-dark-bg hover:shadow-glow-green hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:scale-100"
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
                        <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
