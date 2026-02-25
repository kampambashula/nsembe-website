// pages/about.jsx
import Layout from "../components/Layout";
import { useEffect, useRef } from "react";

export default function AboutPage() {
  const pulseRef = useRef(null);

  // Simple pulsing animation for the mission icon
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

        {/* HERO SECTION */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* Background circles */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full animate-ping-slow" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-light/20 rounded-full animate-pulse-slow" />
            <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full -translate-x-1/2 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto text-center z-10">
            <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight">
              About <span className="text-cyan-400">Nsembe</span>
            </h1>
            <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              We build offline-first, intelligent software platforms for organizations where internet connectivity is limited. 
              Our goal is to bring enterprise-grade tools to every institution, making advanced technology accessible everywhere.
            </p>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display font-700 text-4xl mb-6">Our Mission</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                To empower organizations in remote and low-connectivity environments with intelligent digital platforms that simplify operations, improve transparency, and enable data-driven decision making.
              </p>
              <h2 className="font-display font-700 text-4xl mb-6">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">
                To be the leading provider of offline-first technology solutions that bridge the digital divide and enable global access to enterprise-grade software.
              </p>
            </div>

            {/* Dynamic icon effect in place of image */}
            <div className="relative w-full h-80 lg:h-[400px] flex items-center justify-center">
              <div
                ref={pulseRef}
                className="w-48 h-48 bg-cyan-400/20 rounded-full flex items-center justify-center text-6xl text-cyan-400 font-bold select-none"
              >
                ⚡
              </div>
              <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute w-80 h-80 bg-green-light/10 rounded-full blur-3xl animate-ping-slow" />
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-28 px-6 bg-dark-bg-2">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display font-800 text-5xl mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Innovation",
                  description: "We embrace cutting-edge technology to solve real-world challenges in resource-limited environments.",
                },
                {
                  title: "Accessibility",
                  description: "Technology should be accessible everywhere. Our platforms are designed for offline-first deployment and low-bandwidth environments.",
                },
                {
                  title: "Impact",
                  description: "Every product we build aims to make a meaningful impact by increasing efficiency, transparency, and data-driven insights.",
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

        {/* TEAM */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display font-800 text-5xl mb-16">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "Kampamba", role: "Founder & CEO", img: "/images/team/kampamba.jpg" },
                { name: "Mumba", role: "CTO", img: "/images/team/mumba.jpg" },
              ].map((member) => (
                <div key={member.name} className="p-6 rounded-2xl border border-white/10 hover:shadow-lg transition">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                  </div>
                  <h3 className="font-display font-700 text-xl mb-1">{member.name}</h3>
                  <p className="text-white/60">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}