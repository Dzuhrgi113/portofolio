import React, { useRef } from "react";
import OrbitProjects from "./OrbitProjects";
import OrbitCertifications from "./OrbitCertifications";
import OrbitExperience from "./OrbitExperience";
import OrbitAboutMe from "./OrbitAboutMe";
import TechStack from "../TechStack/TechStack";
import { cardPositions } from "../../data/portfolioData";

export default function ProfileSection({
  lang,
  t,
  setActiveNav,
  orbitData,
  currentIndex,
  goNext,
  goPrev,
  handleCardClick,
  hoveredCard,
  setHoveredCard,
  techStack,
}) {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const total = orbitData.length;

  const getCardStyle = (index) => {
    let offset = index - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (Math.abs(offset) > 4) {
      return {
        opacity: 0,
        transform: "translate3d(0, 0, -500px) scale(0.3)",
        zIndex: 0,
        pointerEvents: "none",
      };
    }

    const pos = cardPositions[String(offset)];
    if (!pos) return { opacity: 0, zIndex: 0, pointerEvents: "none" };

    return {
      opacity: pos.opacity,
      transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${pos.scale}) rotateY(${
        pos.rotateY
      }deg) rotateZ(${pos.rotateZ || 0}deg)`,
      zIndex: pos.zIndex,
    };
  };

  const isCenter = (index) => {
    let offset = index - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset === 0;
  };

  /* Touch/Swipe support for orbit cards */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only trigger if horizontal swipe dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div className="hero-section" style={{ overflow: "visible" }}>
      {/* Orbit Rings */}
      <div className="orbit-rings">
        <div className="orbit-ring ring-1" />
        <div className="orbit-ring ring-2" />
        <div className="orbit-ring ring-3" />
      </div>

      {/* Profile Photo (Center) */}
      <div className="profile-photo-wrapper">
        <img src="/images/foto-profil.png" alt="Rahman Dzuhrgi" />
        <div className="profile-glow" />
      </div>

      {/* Orbit About Me (Left) */}
      <OrbitAboutMe t={t} setActiveNav={setActiveNav} />

      {/* Orbit Experience (Right) */}
      <OrbitExperience t={t} setActiveNav={setActiveNav} />

      {/* Orbit Cards Container with Projects & Certifications */}
      <div
        className="orbit-cards-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <OrbitProjects
          orbitData={orbitData}
          currentIndex={currentIndex}
          total={total}
          getCardStyle={getCardStyle}
          isCenter={isCenter}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          handleCardClick={handleCardClick}
          lang={lang}
        />
        <OrbitCertifications
          orbitData={orbitData}
          currentIndex={currentIndex}
          total={total}
          getCardStyle={getCardStyle}
          isCenter={isCenter}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          handleCardClick={handleCardClick}
          lang={lang}
        />
      </div>

      {/* Navigation Controls (Arrows + Help Text) placed within the interactive view */}
      <div className="orbit-navigation-controls" style={{
        position: "absolute",
        bottom: "-130px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px"
      }}>
        <div className="nav-row">
          <button className="orbit-nav-arrow" onClick={goPrev} aria-label="Previous card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <TechStack techStack={techStack} />

          <button className="orbit-nav-arrow" onClick={goNext} aria-label="Next card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
