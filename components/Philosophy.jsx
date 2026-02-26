// components/Philosophy.jsx
import { motion } from "framer-motion";

export default function Philosophy() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-5 sm:px-6 bg-dark-bg-2 overflow-hidden">
      
      {/* Background accent circles (scaled for mobile) */}
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-green-light/20 to-cyan-light/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-cyan-light/20 to-green-light/10 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        
        {/* Mission heading */}
        <motion.h2
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-snug lg:leading-tight mb-8 sm:mb-10 lg:mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-gradient-green">Mission</span>
        </motion.h2>

        {/* Philosophy statements */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-white/70 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium"
            variants={item}
          >
            Technology should{" "}
            <span className="text-white font-semibold">
              strengthen institutions
            </span>, not replace them.
          </motion.p>

          <motion.p
            className="text-white/70 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium"
            variants={item}
          >
            Intelligence must be accessible{" "}
            <span className="text-white font-semibold">
              beyond capital cities
            </span>.
          </motion.p>

          <motion.p
            className="text-white/70 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium"
            variants={item}
          >
            Systems should{" "}
            <span className="text-white font-semibold">
              work offline
            </span>{" "}
            before they work online.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}