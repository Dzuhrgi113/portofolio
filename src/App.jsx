import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { orbitData } from "./data/orbitData";
import {
  codeSnippets,
  navItems,
  socialLinks,
  techStack,
  translations,
} from "./data/portfolioData";
import "./components/Orbit.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import ActiveCardDetail from "./components/ActiveCardDetail/ActiveCardDetail";
import FloatingContact from "./components/FloatingContact/FloatingContact";
import HorizontalSlider from "./components/HorizontalSlider/HorizontalSlider";

export default function App() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderDragStart = useRef(null);
  const sliderScrollStart = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(4);
  const [activeNav, setActiveNav] = useState("Home");
  const [lang, setLang] = useState("id");
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filterTab, setFilterTab] = useState("All");

  const t = translations[lang];
  const total = orbitData.length;

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  const filteredData =
    filterTab === "All"
      ? orbitData
      : orbitData.filter((item) => item.category === filterTab);

  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"));

  const handleCardClick = (item, centered) => {
    if (centered && item.link) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    } else if (centered) {
      setSelectedCard(item);
    } else {
      setCurrentIndex(item.id - 1);
    }
  };

  /* Loading screen timer */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  /* Entrance animations */
  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      gsap.from(".navbar", { duration: 0.8, y: -30, opacity: 0, ease: "power2.out" });
      gsap.from(".profile-photo-wrapper", {
        duration: 1.2,
        scale: 0.6,
        opacity: 0,
        ease: "back.out(1.4)",
        delay: 0.3,
      });
      gsap.from(".orbit-ring", {
        duration: 1.2,
        opacity: 0,
        scale: 0.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".side-card", {
        duration: 0.9,
        opacity: 0,
        x: -50,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.15,
      });
      gsap.from(".orbit-card", {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.4,
      });
      gsap.from(".social-btn", {
        duration: 0.5,
        x: 30,
        opacity: 0,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.7,
      });
      gsap.from(".tech-stack-bar", { duration: 0.7, y: 30, opacity: 0, ease: "power2.out", delay: 0.9 });
      gsap.from(".orbit-nav-arrow", {
        duration: 0.5,
        opacity: 0,
        scale: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.8,
      });
    }, containerRef);
    return () => ctx.revert();
  }, [loading]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [total]);

  /* Custom cursor tracking */
  useEffect(() => {
    if (loading) return;
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [loading]);

  /* Close detail on Escape */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCard(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* Mouse drag-to-scroll for slider track */
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onMouseDown = (e) => {
      sliderDragStart.current = e.clientX;
      sliderScrollStart.current = el.scrollLeft;
      el.style.userSelect = "none";
    };

    const onMouseMove = (e) => {
      if (sliderDragStart.current === null) return;
      const dx = e.clientX - sliderDragStart.current;
      el.scrollLeft = sliderScrollStart.current - dx;
    };

    const onMouseUp = () => {
      sliderDragStart.current = null;
      el.style.userSelect = "";
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [loading, filterTab]);

  return (
    <div ref={containerRef} className="portfolio-container">
      {/* ===== LOADING SCREEN ===== */}
      {loading && (
        <div className="loading-screen">
          <div className="loading-orbit">
            <div className="loading-orbit-ring" />
            <div className="loading-orbit-ring2" />
            <div className="loading-orbit-core" />
          </div>
          <div className="loading-name">Rahman Dzuhrgi</div>
          <div className="loading-bar">
            <div className="loading-bar-fill" />
          </div>
        </div>
      )}

      {/* ===== CUSTOM CURSOR ===== */}
      {!loading && <div ref={cursorRef} className="custom-cursor" />}

      {/* ===== HERO SECTION (Background Effects) ===== */}
      <HeroSection codeSnippets={codeSnippets} />

      {/* ===== NAVBAR ===== */}
      <Navbar
        lang={lang}
        toggleLang={toggleLang}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        navItems={navItems}
        setFilterTab={setFilterTab}
        t={t}
      />

      {/* ===== PROFILE SECTION (Orbit UI) ===== */}
      <ProfileSection
        lang={lang}
        t={t}
        setActiveNav={setActiveNav}
        orbitData={orbitData}
        currentIndex={currentIndex}
        goNext={goNext}
        goPrev={goPrev}
        handleCardClick={handleCardClick}
        hoveredCard={hoveredCard}
        setHoveredCard={setHoveredCard}
        techStack={techStack}
      />

      {/* ===== HORIZONTAL SLIDER SECTION ===== */}
      <HorizontalSlider
        filteredData={filteredData}
        filterTab={filterTab}
        setFilterTab={setFilterTab}
        orbitData={orbitData}
        setSelectedCard={setSelectedCard}
        lang={lang}
        sliderRef={sliderRef}
      />


      {/* ===== FLOATING CONTACT ===== */}
      <FloatingContact socialLinks={socialLinks} />

      {/* ===== ACTIVE CARD DETAIL (Modal Overlay) ===== */}
      <ActiveCardDetail
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        t={t}
        lang={lang}
        socialLinks={socialLinks}
      />
    </div>
  );
}
