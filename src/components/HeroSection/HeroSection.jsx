import React from "react";

export default function HeroSection({ codeSnippets }) {
  return (
    <>
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="bg-grid" />
      <div className="bg-glow-center" />
      <div className="bg-glow-left" />
      <div className="bg-glow-right" />
      <div className="bg-top-line" />
      <div className="bg-particle bg-particle-1" />
      <div className="bg-particle bg-particle-2" />
      <div className="bg-particle bg-particle-3" />
      <div className="bg-particle bg-particle-4" />
      <div className="bg-motion-gradient" />

      {/* Code Rain */}
      <div className="code-rain">
        {codeSnippets.map((s, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7 + 5) % 90}%`,
              animationDelay: `${i * 0.35}s`,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </>
  );
}
