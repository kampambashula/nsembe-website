// components/TrustedByCarousel.jsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedByCarousel() {
  const clients = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
  ];

  // Duplicate logos for seamless scroll
  const logos = clients.concat(clients);

  return (
    <section className="py-8 px-4 text-center bg-white">
      
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }} // pause on hover
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 sm:p-6 rounded-3xl border border-gray-200 hover:scale-105 hover:shadow-xl transition-transform duration-300 flex items-center justify-center min-w-[120px] sm:min-w-[140px]"
            >
              <Image
                src={`/images/clients/${logo}`}
                alt={logo.replace(".png", "")}
                width={120}
                height={60}
                className="object-contain sm:w-[140px] sm:h-[80px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}