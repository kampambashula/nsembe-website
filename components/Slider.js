import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom market slides
const marketSlides = [
  {
    title: "NGOs",
    tagline: "Empowering nonprofit impact with smart digital tools.",
    image: "/images/markets/ngo.jpg",
    slug: "ngo",
    page: "/markets/ngo",
  },
  {
    title: "Health",
    tagline: "Modern healthcare systems for better patient outcomes.",
    image: "/images/markets/health.jpg",
    slug: "health",
    page: "/markets/health",
  },
  {
    title: "Education",
    tagline: "Offline-first platforms for schools and learning institutions.",
    image: "/images/markets/education.png",
    slug: "education",
    page: "/markets/education",
  },
  {
    title: "Business",
    tagline: "Tools to streamline SMEs and enterprise operations.",
    image: "/images/markets/business.png",
    slug: "business",
    page: "/markets/business",
  },
  {
    title: "Government",
    tagline: "Digital governance solutions for ministries and agencies.",
    image: "/images/markets/government.jpg",
    slug: "government",
    page: "/markets/government",
  },
];

// Custom arrow components
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-12 h-12 bg-cyan-light/20 hover:bg-cyan-light/40 rounded-full flex items-center justify-center text-white shadow-lg"
      aria-label="Next Slide"
    >
      <span className="text-2xl font-bold">{">"}</span>
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 w-12 h-12 bg-cyan-light/20 hover:bg-cyan-light/40 rounded-full flex items-center justify-center text-white shadow-lg"
      aria-label="Previous Slide"
    >
      <span className="text-2xl font-bold">{"<"}</span>
    </button>
  );
}

export default function MarketSliderPremium() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll(".section-reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-dark-bg"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <span className="inline-block font-mono text-xs text-green-light tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full border border-green-light/20 bg-green-light/5">
            Our Services
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Tailored Solutions for <br />
            <span className="gradient-text-cyan">Every Sector</span>
          </h2>
          <p className="text-white/55 mt-4 max-w-3xl mx-auto">
            Nsembe Technologies delivers specialized platforms for NGOs, Health, Education,
            Business, and Government institutions.
          </p>
        </div>

        {/* Premium Slider */}
        <div className="section-reveal relative">
          <Slider {...settings}>
            {marketSlides.map((slide) => (
              <div key={slide.slug} className="relative">
                {/* Full-width image */}
                <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 lg:p-12 rounded-2xl">
                    <h3 className="font-display font-800 text-3xl lg:text-4xl text-white mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-white/70 text-lg mb-4">{slide.tagline}</p>
                    <Link
                      href={slide.page}
                      className="inline-block font-display font-600 text-sm px-6 py-3 rounded-full bg-gradient-to-r from-green-light to-cyan-light text-dark-bg hover:shadow-glow-green transition-all duration-300"
                    >
                      Explore {slide.title} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}