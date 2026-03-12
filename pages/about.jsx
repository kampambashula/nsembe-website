// pages/about.jsx
import Layout from "../components/Layout";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FounderPhoto from "../public/images/team/one.jpg"; // replace with your photo path

export default function AboutPage() {
  const pulseRef = useRef(null);

  // Pulsing mission icon
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

  // Scroll animation variants
  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const slideInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };
  const slideInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg text-white min-h-screen">

        {/* HERO SECTION WITH ANIMATED GRADIENT */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full animate-ping-slow bg-gradient-to-tr from-cyan-500/30 to-green-400/30" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full animate-pulse-slow bg-gradient-to-br from-green-light/20 to-cyan-400/20" />
            <div className="absolute bottom-10 left-1/2 w-96 h-96 rounded-full -translate-x-1/2 blur-3xl bg-gradient-to-tl from-cyan-400/10 to-green-300/10 animate-gradient" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-6xl mx-auto text-center z-10"
          >
            <h1 className="font-display font-800 text-5xl lg:text-7xl leading-tight">
              About <span className="text-cyan-400">Nsembe</span>
            </h1>
            <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              We build offline-first, intelligent software platforms for organizations where internet connectivity is limited. 
              Our goal is to bring enterprise-grade tools to every institution, making advanced technology accessible everywhere.
            </p>
          </motion.div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-display font-700 text-4xl mb-6">Our Mission</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                To empower organizations in remote and low-connectivity environments with intelligent digital platforms that simplify operations, improve transparency, and enable data-driven decision making.
              </p>
              <h2 className="font-display font-700 text-4xl mb-6">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">
                To be the leading provider of offline-first technology solutions that bridge the digital divide and enable global access to enterprise-grade software.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full h-80 lg:h-[400px] flex items-center justify-center"
            >
              <div
                ref={pulseRef}
                className="w-48 h-48 bg-cyan-400/20 rounded-full flex items-center justify-center text-6xl text-cyan-400 font-bold select-none"
              >
                ⚡
              </div>
              <div className="absolute w-64 h-64 rounded-full blur-2xl animate-pulse-slow bg-gradient-to-tr from-cyan-500/20 to-green-400/20" />
              <div className="absolute w-80 h-80 rounded-full blur-3xl animate-ping-slow bg-gradient-to-br from-green-light/10 to-cyan-400/10" />
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-28 px-6 bg-dark-bg-2">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-800 text-5xl mb-16"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Innovation", description: "We embrace cutting-edge technology to solve real-world challenges in resource-limited environments." },
                { title: "Accessibility", description: "Technology should be accessible everywhere. Our platforms are designed for offline-first deployment and low-bandwidth environments." },
                { title: "Impact", description: "Every product we build aims to make a meaningful impact by increasing efficiency, transparency, and data-driven insights." },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="p-6 border border-white/10 rounded-2xl hover:shadow-lg transition"
                >
                  <h3 className="font-display font-700 text-2xl mb-4 text-cyan-400">{val.title}</h3>
                  <p className="text-white/70 leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MEET THE FOUNDER WITH DYNAMIC GRADIENT */}
        <section className="py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-full h-full bg-gradient-to-r from-cyan-500/20 via-green-light/20 to-cyan-400/20 animate-gradient-slow rounded-3xl" />
          </div>
          <div className="max-w-6xl mx-auto lg:flex lg:items-center lg:gap-20 relative z-10">
            {/* Founder photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="flex-shrink-0 mb-8 lg:mb-0"
            >
              <Image
                src={FounderPhoto}
                alt="Founder of Nsembe Technologies"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                width={350}
                height={350}
              />
            </motion.div>

            {/* Founder narrative */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <h2 className="font-display font-700 text-4xl mb-6">Meet the Founder - Kampamba Shula</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Growing up in Zambia, I often visited schools, hospitals, government offices, and local businesses—and almost everywhere, I heard the same oddly frustrating phrase: <span className="italic">“The system is down.”</span>
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                It wasn’t just a comment, it reflected real struggles. Students couldn’t access records, hospitals wrestled with patient data, and businesses stalled over processes that should have been simple. Over time, <span className="italic">“the system is down”</span> became almost proverbial, a sign of how unreliable technology can stall progress.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                For years, I worked quietly on a solution, an AI-driven platform that works offline and delivers real-time insights. Today, I’m proud to introduce <strong>Nsembe IO</strong>, a platform designed to support schools, hospitals, businesses, and government offices wherever traditional systems fail.
              </p>
              <p className="text-white/70 leading-relaxed">
                With Nsembe IO, <span className="italic">“the system is down”</span> stops being an excuse. It becomes a story of solutions, a story of institutions that can function, even when the world around them can’t.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}