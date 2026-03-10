// pages/letter.jsx
import Layout from "../components/Layout";
import { useEffect, useRef } from "react";

export default function LetterPage() {
  const pulseRef = useRef(null);

  // Simple pulsing animation for decorative element
  useEffect(() => {
    let frame;
    const el = pulseRef.current;
    let scale = 1;
    let direction = 0.005;
    const animate = () => {
      scale += direction;
      if (scale > 1.05 || scale < 0.95) direction *= -1;
      if (el) el.style.transform = `scale(${scale})`;
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg text-white min-h-screen">

        {/* HERO / LETTER INTRO */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full animate-ping-slow" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-light/20 rounded-full animate-pulse-slow" />
            <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full -translate-x-1/2 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto text-center z-10">
            <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight">
              A Letter from the Founder
            </h1>
            <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Kampamba Shula shares the inspiration behind Nsembe Technologies, reflecting on the ethos, values, and vision that guide our work. "Nsembe" means sacrifice or offering in Nyanja — embodying the commitment we bring to every solution and institution we serve.
            </p>
          </div>
        </section>

        {/* FOUNDER BACKGROUND / INSPIRATION */}
        <section className="py-28 px-6 bg-dark-bg-2">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div>
              <h2 className="font-display font-700 text-4xl mb-6 text-cyan-400">
                The Journey
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Growing up in Zambia, I visited schools, hospitals, and local institutions — only to find that many “systems” were down or unreliable. These experiences planted the seed for Nsembe Technologies: a commitment to build resilient, offline-first software that works where it is needed most.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                The name “Nsembe” resonates deeply with our ethos. Just as an offering is made with care and purpose, every platform we create is designed to empower institutions, improve efficiency, and enable access to critical technology in challenging environments.
              </p>
              <p className="text-white/70 leading-relaxed">
                This letter is an invitation to understand our philosophy, the stories that inspired our innovations, and the tangible impact we aim to deliver — one institution at a time.
              </p>
            </div>

            {/* Founder illustration / pulse effect */}
            <div className="relative w-full h-80 lg:h-[400px] flex items-center justify-center">
              <div
                ref={pulseRef}
                className="w-48 h-48 bg-cyan-400/20 rounded-full flex items-center justify-center text-6xl text-cyan-400 font-bold select-none"
              >
                📝
              </div>
              <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute w-80 h-80 bg-green-light/10 rounded-full blur-3xl animate-ping-slow" />
            </div>
          </div>
        </section>

        {/* CORE ETHOS / VALUES */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display font-800 text-5xl mb-16">Our Ethos</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Sacrifice & Commitment",
                  description: "We commit fully to delivering reliable solutions for institutions that depend on us, embracing the ethos of 'Nsembe' in all we do.",
                },
                {
                  title: "Resilience",
                  description: "Our platforms are designed to work offline, withstand connectivity challenges, and operate under real-world constraints.",
                },
                {
                  title: "Empowerment",
                  description: "We aim to provide organizations with tools that improve efficiency, transparency, and access to data, enabling impactful decision-making.",
                },
              ].map((val) => (
                <div key={val.title} className="p-6 border border-white/10 rounded-2xl hover:shadow-lg transition">
                  <h3 className="font-display font-700 text-2xl mb-4 text-cyan-400">{val.title}</h3>
                  <p className="text-white/70 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}