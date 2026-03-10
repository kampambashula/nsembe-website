// components/AnimatedShapes.jsx
import { useEffect, useRef } from "react";

export default function AnimatedShapes() {
  const containerRef = useRef(null);

  useEffect(() => {
    const shapes = containerRef.current.querySelectorAll(".shape");
    const particles = containerRef.current.querySelectorAll(".particle");

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xRatio = e.clientX / innerWidth - 0.5;
      const yRatio = e.clientY / innerHeight - 0.5;

      shapes.forEach((shape, i) => {
        const speed = (i + 1) * 12;
        shape.style.transform = `translate3d(${xRatio * speed}px, ${yRatio * speed}px, 0) rotate(${xRatio * speed}deg)`;
      });

      particles.forEach((p, i) => {
        const speed = (i + 1) * 6;
        const rotate = (xRatio + yRatio) * 360;
        const scale = 0.8 + Math.sin(Date.now() / 1000 + i) * 0.2;
        p.style.transform = `translate3d(${xRatio * speed}px, ${yRatio * speed}px, 0) rotate(${rotate}deg) scale(${scale})`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* Large moving blobs */}
      <span className="shape absolute w-72 h-72 bg-cyan-400/20 rounded-full top-10 left-10 animate-float-slow"></span>
      <span className="shape absolute w-60 h-60 bg-green-400/20 rounded-full top-1/3 left-1/2 animate-float"></span>
      <span className="shape absolute w-80 h-80 bg-purple-400/20 rounded-full top-2/3 left-2/3 animate-float-slower"></span>

      {/* Floating particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <span
          key={i}
          className="particle absolute rounded-full"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            background: `rgba(255,255,255,${Math.random() * 0.3 + 0.1})`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `particleFloat ${Math.random() * 6 + 4}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes particleFloat {
          0% { transform: translate3d(0px, 0px, 0) scale(1); }
          50% { transform: translate3d(5px, -10px, 2px) scale(1.1); }
          100% { transform: translate3d(-5px, 5px, -2px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}