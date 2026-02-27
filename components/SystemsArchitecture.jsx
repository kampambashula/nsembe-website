// components/SystemsArchitecture.jsx
"use client";
import { useEffect, useRef, useState } from "react";

const COLORS = {
  darkBg: "#143627",
  greenLight: "#6be76a",
  cyanLight: "#46e9ca",
  cyanMedium: "#6aa6b4",
  greenMedium: "#55ea1d",
};

// ── Animated dashed flow line between two points ──
function FlowLine({ x1, y1, x2, y2, color, delay = 0, width = 1.5 }) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color}
      strokeWidth={width}
      strokeDasharray="6 5"
      strokeLinecap="round"
      style={{
        animation: `flowDash 2.4s linear ${delay}s infinite`,
      }}
    />
  );
}

// ── Pulsing neural-network node ──
function NeuralNode({ cx, cy, r, delay = 0, bright = false }) {
  return (
    <circle
      cx={cx} cy={cy} r={r}
      fill={bright ? "rgba(85,234,29,0.35)" : "rgba(85,234,29,0.15)"}
      stroke={COLORS.greenMedium}
      strokeWidth={bright ? 2 : 1.5}
      style={{ animation: `neuralPulse 2.2s ease-in-out ${delay}s infinite` }}
    />
  );
}

// ── Stage card wrapper ──
function Stage({ children, accentColor, glowing = false, style = {} }) {
  return (
    <div
      style={{
        flex: 1,
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${accentColor}40`,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10%",
        padding: "5% 4%",
        position: "relative",
        boxShadow: glowing ? `0 0 32px ${accentColor}22, inset 0 0 40px ${accentColor}08` : "none",
        transition: "box-shadow 0.3s",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function SystemsArchitecture() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      style={{
        padding: "7rem 1.5rem",
        background: "var(--color-dark-bg-2, #0e2019)",
        textAlign: "center",
      }}
    >
      {/* Inject keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Syne:wght@700;800&display=swap');

        @keyframes flowDash {
          0%   { stroke-dashoffset: 44; }
          100% { stroke-dashoffset: 0;  }
        }
        @keyframes neuralPulse {
          0%,100% { r: inherit; opacity: 1; }
          50%     { opacity: 0.55; }
        }
        @keyframes blink {
          0%,100% { opacity: 0.35; }
          50%     { opacity: 1; }
        }
        @keyframes rotateBlade {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanLine {
          0%   { transform: translateY(0%);   opacity: 0.6; }
          100% { transform: translateY(400%); opacity: 0;   }
        }
        .arch-stage {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .arch-stage:hover {
          transform: translateY(-3px);
        }
      `}</style>

      {/* Section header */}
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          color: "#fff",
          marginBottom: "1rem",
          letterSpacing: "-0.5px",
          animation: mounted ? "fadeUp 0.6s ease both" : "none",
        }}
      >
        Platform Architecture
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.55)",
          maxWidth: "44rem",
          margin: "0 auto 3rem",
          fontSize: "1.1rem",
          lineHeight: 1.7,
          fontFamily: "'Share Tech Mono', monospace",
          letterSpacing: "0.02em",
          animation: mounted ? "fadeUp 0.6s ease 0.1s both" : "none",
        }}
      >
        End-to-end design: field devices → secure sync layer → AI engine → decision dashboards.
      </p>

      {/* ── Architecture diagram ── */}
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          background: "#143627",
          borderRadius: 16,
          padding: "clamp(1rem, 3vw, 2rem)",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0 0 1px rgba(70,233,202,0.15), 0 32px 80px rgba(0,0,0,0.6)",
          animation: mounted ? "fadeUp 0.6s ease 0.2s both" : "none",
        }}
      >
        {/* Circuit-board grid background */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
          backgroundImage: `
            linear-gradient(${COLORS.cyanMedium} 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.cyanMedium} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none",
          backgroundImage: `radial-gradient(circle, ${COLORS.cyanLight} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          backgroundPosition: "40px 40px",
        }} />

        {/* Top nav strip */}
        <div style={{
          display: "flex", alignItems: "center", gap: "1.5rem",
          borderBottom: `1px solid rgba(70,233,202,0.18)`,
          paddingBottom: "0.75rem", marginBottom: "1.5rem",
        }}>
          <span style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "0.8rem", letterSpacing: "3px",
            color: COLORS.greenMedium,
            textShadow: `0 0 10px ${COLORS.greenMedium}`,
          }}>⬡ NSEMBE·IO</span>
          <div style={{ display: "flex", gap: "1.5rem", marginLeft: "auto" }}>
            {["Overview", "Architecture", "Analytics", "Settings"].map(l => (
              <span key={l} style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "0.65rem", letterSpacing: "2px",
                color: COLORS.cyanMedium, opacity: 0.75,
              }}>{l}</span>
            ))}
          </div>
        </div>

        {/* Stage title */}
        <div style={{ marginBottom: "1.2rem" }}>
          <div style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "0.6rem", letterSpacing: "4px",
            color: `${COLORS.cyanLight}80`, textTransform: "uppercase",
          }}>Platform Overview</div>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "clamp(0.9rem, 2vw, 1.25rem)",
            color: "#fff", letterSpacing: "5px", textTransform: "uppercase",
          }}>
            System <span style={{ color: COLORS.greenMedium }}>Architecture</span> Flow
          </div>
        </div>

        {/* ── Four stages + connector SVG ── */}
        <div style={{ position: "relative", display: "flex", gap: "1%", alignItems: "stretch", minHeight: 220 }}>

          {/* SVG connector lines (absolute overlay) */}
          <svg
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
          >
            {/* Stage 1 → 2 */}
            <FlowLine x1={208} y1={150} x2={252} y2={150} color={COLORS.cyanLight} delay={0} width={2} />
            <FlowLine x1={208} y1={120} x2={252} y2={108} color={COLORS.greenLight} delay={0.3} width={1.2} />
            <FlowLine x1={208} y1={180} x2={252} y2={192} color={COLORS.greenLight} delay={0.6} width={1.2} />
            {/* Arrow */}
            <polygon points="252,146 242,140 242,160" fill={COLORS.cyanLight} opacity={0.9} />

            {/* Stage 2 → 3 */}
            <FlowLine x1={458} y1={150} x2={502} y2={150} color={COLORS.cyanLight} delay={1} width={2} />
            <FlowLine x1={458} y1={128} x2={502} y2={120} color={COLORS.cyanMedium} delay={1.3} width={1.2} />
            <FlowLine x1={458} y1={172} x2={502} y2={180} color={COLORS.cyanMedium} delay={1.6} width={1.2} />
            <polygon points="502,146 492,140 492,160" fill={COLORS.cyanLight} opacity={0.9} />

            {/* Stage 3 → 4 */}
            <FlowLine x1={708} y1={150} x2={752} y2={150} color={COLORS.greenMedium} delay={2} width={2.5} />
            <FlowLine x1={708} y1={122} x2={752} y2={112} color={COLORS.greenMedium} delay={2.3} width={1.4} />
            <FlowLine x1={708} y1={178} x2={752} y2={188} color={COLORS.greenMedium} delay={2.6} width={1.4} />
            <polygon points="752,146 742,140 742,160" fill={COLORS.greenMedium} />
          </svg>

          {/* ── STAGE 1: Field Devices ── */}
          <div className="arch-stage" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8%", padding: "5% 4%", background: "rgba(107,231,106,0.03)", border: `1px solid ${COLORS.greenLight}30`, borderRadius: 10, position: "relative", zIndex: 2 }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.25)", letterSpacing: "2px" }}>01</span>
            <svg viewBox="0 0 100 90" width="70%" style={{ overflow: "visible" }}>
              {/* Wind turbine */}
              <line x1="22" y1="82" x2="22" y2="32" stroke={COLORS.greenLight} strokeWidth="2" />
              <g style={{ transformOrigin: "22px 32px", animation: "rotateBlade 4s linear infinite" }}>
                <line x1="22" y1="32" x2="22" y2="10" stroke={COLORS.greenLight} strokeWidth="2.5" />
                <line x1="22" y1="32" x2="42" y2="48" stroke={COLORS.greenLight} strokeWidth="2.5" />
                <line x1="22" y1="32" x2="2"  y2="48" stroke={COLORS.greenLight} strokeWidth="2.5" />
              </g>
              <circle cx="22" cy="32" r="3.5" fill={COLORS.greenLight} />
              {/* Sensor box */}
              <rect x="52" y="30" width="34" height="28" rx="4" fill="none" stroke={COLORS.greenLight} strokeWidth="1.5" />
              <line x1="58" y1="40" x2="80" y2="40" stroke={COLORS.greenLight} strokeWidth="1" opacity="0.6" />
              <line x1="58" y1="47" x2="80" y2="47" stroke={COLORS.greenLight} strokeWidth="1" opacity="0.4" />
              <line x1="58" y1="54" x2="72" y2="54" stroke={COLORS.greenLight} strokeWidth="1" opacity="0.5" />
              <circle cx="69" cy="63" r="2.5" fill={COLORS.greenLight} style={{ animation: "blink 1.8s ease-in-out infinite" }} />
              {/* Signal arcs */}
              <path d="M88 35 Q97 42 88 50" stroke={COLORS.greenLight} strokeWidth="1.5" fill="none" opacity="0.5" style={{ animation: "blink 2s ease-in-out 0.3s infinite" }} />
              <path d="M88 28 Q102 42 88 57" stroke={COLORS.greenLight} strokeWidth="1" fill="none" opacity="0.3" style={{ animation: "blink 2s ease-in-out 0.7s infinite" }} />
              {/* Ground */}
              <line x1="0" y1="85" x2="100" y2="85" stroke={COLORS.greenLight} strokeWidth="0.8" opacity="0.18" />
            </svg>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "clamp(0.45rem, 1vw, 0.65rem)", color: COLORS.greenLight, letterSpacing: "2px", textTransform: "uppercase", textAlign: "center" }}>Field Devices</span>
          </div>

          {/* ── STAGE 2: Secure Sync ── */}
          <div className="arch-stage" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8%", padding: "5% 4%", background: "rgba(70,233,202,0.03)", border: `1px solid ${COLORS.cyanLight}28`, borderRadius: 10, position: "relative", zIndex: 2 }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.25)", letterSpacing: "2px" }}>02</span>
            <svg viewBox="0 0 100 100" width="62%" style={{ overflow: "visible" }}>
              <path d="M14 68 Q9 68 9 56 Q9 42 21 40 Q19 20 37 17 Q51 9 62 27 Q76 24 79 38 Q92 40 90 56 Q90 68 78 68 Z"
                fill="none" stroke={COLORS.cyanLight} strokeWidth="2" />
              <rect x="36" y="52" width="28" height="20" rx="4" fill="none" stroke={COLORS.cyanLight} strokeWidth="2" />
              <path d="M42 52 Q42 38 50 38 Q58 38 58 52" fill="none" stroke={COLORS.cyanLight} strokeWidth="2" />
              <circle cx="50" cy="62" r="3.5" fill={COLORS.cyanLight} />
              {/* Scan line */}
              <line x1="14" y1="80" x2="86" y2="80" stroke={COLORS.cyanMedium} strokeWidth="1" opacity="0.4" style={{ animation: "blink 2.2s ease-in-out infinite" }} />
              <line x1="14" y1="87" x2="70" y2="87" stroke={COLORS.cyanMedium} strokeWidth="1" opacity="0.25" style={{ animation: "blink 2.2s ease-in-out 0.4s infinite" }} />
              <circle cx="18" cy="72" r="3" fill={COLORS.cyanLight} opacity="0.55" />
              <circle cx="82" cy="72" r="3" fill={COLORS.cyanLight} opacity="0.55" />
              <circle cx="50" cy="92" r="3" fill={COLORS.cyanMedium} opacity="0.5" style={{ animation: "blink 1.8s ease-in-out infinite" }} />
            </svg>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "clamp(0.45rem, 1vw, 0.65rem)", color: COLORS.cyanLight, letterSpacing: "2px", textTransform: "uppercase", textAlign: "center" }}>Secure Sync Layer</span>
          </div>

          {/* ── STAGE 3: AI Engine ── */}
          <div className="arch-stage" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8%", padding: "5% 4%", background: "rgba(85,234,29,0.04)", border: `1px solid ${COLORS.greenMedium}50`, borderRadius: 10, position: "relative", zIndex: 2, boxShadow: `0 0 36px rgba(85,234,29,0.1), inset 0 0 50px rgba(85,234,29,0.04)` }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.25)", letterSpacing: "2px" }}>03</span>
            <svg viewBox="0 0 120 110" width="72%" style={{ overflow: "visible" }}>
              {/* Layer 1 */}
              <NeuralNode cx={18} cy={22} r={7} delay={0} />
              <NeuralNode cx={18} cy={55} r={7} delay={0.3} />
              <NeuralNode cx={18} cy={88} r={7} delay={0.6} />
              {/* Layer 2 */}
              <NeuralNode cx={55} cy={14} r={8} delay={0.2} />
              <NeuralNode cx={55} cy={40} r={8} delay={0.5} />
              <NeuralNode cx={55} cy={66} r={8} delay={0.8} />
              <NeuralNode cx={55} cy={92} r={8} delay={1.1} />
              {/* Layer 3 – bright outputs */}
              <NeuralNode cx={92} cy={28} r={10} delay={0.4} bright />
              <NeuralNode cx={92} cy={55} r={13} delay={0}   bright />
              <NeuralNode cx={92} cy={82} r={10} delay={0.8} bright />
              {/* Connections L1→L2 */}
              {[[18,22,55,14],[18,22,55,40],[18,55,55,40],[18,55,55,66],[18,88,55,66],[18,88,55,92]].map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLORS.greenMedium} strokeWidth="0.8" opacity="0.45" />
              ))}
              {/* Connections L2→L3 */}
              {[[55,14,82,28],[55,40,82,55],[55,66,82,55],[55,92,82,82],[55,40,82,28],[55,66,82,82]].map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLORS.greenMedium} strokeWidth="1" opacity="0.55" />
              ))}
              {/* Central ambient glow */}
              <ellipse cx="60" cy="55" rx="52" ry="48" fill="rgba(85,234,29,0.04)" />
            </svg>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "clamp(0.45rem, 1vw, 0.65rem)", color: COLORS.greenMedium, letterSpacing: "2px", textTransform: "uppercase", textAlign: "center" }}>AI Engine</span>
          </div>

          {/* ── STAGE 4: Decision Dashboards ── */}
          <div className="arch-stage" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8%", padding: "5% 4%", background: "rgba(106,166,180,0.03)", border: `1px solid ${COLORS.cyanMedium}28`, borderRadius: 10, position: "relative", zIndex: 2 }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.25)", letterSpacing: "2px" }}>04</span>
            <svg viewBox="0 0 120 100" width="82%" style={{ overflow: "visible" }}>
              {/* Frame */}
              <rect x="0" y="0" width="120" height="78" rx="5" fill="rgba(8,20,14,0.85)" stroke={COLORS.cyanMedium} strokeWidth="1.5" />
              {/* Title bar */}
              <rect x="0" y="0" width="120" height="10" rx="5" fill={`${COLORS.cyanLight}18`} />
              <circle cx="7"  cy="5" r="2.2" fill={COLORS.cyanLight} />
              <circle cx="15" cy="5" r="2.2" fill={COLORS.cyanMedium} />
              <circle cx="23" cy="5" r="2.2" fill={COLORS.greenLight} />
              {/* Line chart */}
              <polyline points="5,55 18,45 32,50 47,34 62,40 78,27 94,31 112,20"
                stroke={COLORS.cyanLight} strokeWidth="2" fill="none" />
              <polyline points="5,55 18,45 32,50 47,34 62,40 78,27 94,31 112,20 112,70 5,70"
                fill={`${COLORS.cyanLight}0d`} />
              {/* Bars */}
              {[
                { x: 8,  h: 18, c: COLORS.greenLight },
                { x: 19, h: 24, c: COLORS.cyanLight  },
                { x: 30, h: 15, c: COLORS.greenLight  },
                { x: 41, h: 28, c: COLORS.greenMedium },
                { x: 52, h: 19, c: COLORS.cyanLight   },
              ].map(({ x, h, c }, i) => (
                <rect key={i} x={x} y={70 - h} width={8} height={h} fill={c} rx="1.5" opacity="0.85"
                  style={{ animation: `fadeUp 0.6s ease ${0.2 + i * 0.1}s both` }} />
              ))}
              {/* Circular gauge */}
              <circle cx="94" cy="52" r="18" fill="none" stroke={`${COLORS.cyanMedium}35`} strokeWidth="5" />
              <circle cx="94" cy="52" r="18" fill="none" stroke={COLORS.cyanLight} strokeWidth="5"
                strokeDasharray="75 38" strokeDashoffset="28" strokeLinecap="round"
                transform="rotate(-90 94 52)" />
              <text x="94" y="56" textAnchor="middle" fill={COLORS.cyanLight}
                fontSize="7" fontFamily="'Share Tech Mono', monospace">78%</text>
              {/* KPI chips */}
              {[
                { x: 4,  label: "99.8%", color: COLORS.cyanLight  },
                { x: 44, label: "4.2ms", color: COLORS.greenLight  },
                { x: 84, label: "↑ 12%", color: COLORS.greenMedium },
              ].map(({ x, label, color }) => (
                <g key={label}>
                  <rect x={x} y={80} width={34} height={15} rx="3"
                    fill={`${color}12`} stroke={`${color}55`} strokeWidth="0.8" />
                  <text x={x + 17} y={91} textAnchor="middle" fill={color}
                    fontSize="6" fontFamily="'Share Tech Mono', monospace">{label}</text>
                </g>
              ))}
            </svg>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "clamp(0.45rem, 1vw, 0.65rem)", color: COLORS.cyanMedium, letterSpacing: "2px", textTransform: "uppercase", textAlign: "center" }}>Decision Dashboards</span>
          </div>
        </div>

        {/* Bottom status bar */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          marginTop: "1.25rem",
          borderTop: "1px solid rgba(70,233,202,0.12)",
          paddingTop: "0.75rem",
        }}>
          {[
            { label: "● SYSTEM ONLINE · 847 DEVICES CONNECTED", color: `${COLORS.cyanLight}55` },
            { label: "LATENCY: 3.1ms · UPTIME: 99.97%",         color: `${COLORS.greenLight}80` },
            { label: "NSEMBE·IO v4.2.1 ● 2024",                  color: `${COLORS.cyanLight}45` },
          ].map(({ label, color }) => (
            <span key={label} style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "clamp(0.45rem, 0.9vw, 0.65rem)",
              color, letterSpacing: "2px",
            }}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}