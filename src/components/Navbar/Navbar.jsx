import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar({
  lang,
  toggleLang,
  activeNav,
  setActiveNav,
  navItems,
  setFilterTab,
  t,
}) {
  const getLabel = (key) => (t?.navLabels?.[key] || key);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shrink and glow effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync scroll lock with mobile drawer open state
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleItemClick = (item) => {
    setActiveNav(item);
    setMobileMenuOpen(false);

    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item === "Projects") {
      if (setFilterTab) setFilterTab("Project");
      setTimeout(() => {
        const el = document.querySelector(".slider-section");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else if (item === "Certifications") {
      if (setFilterTab) setFilterTab("Certificate");
      setTimeout(() => {
        const el = document.querySelector(".slider-section");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else if (item === "About Me" || item === "Experience") {
      // Modals will automatically trigger in App.jsx / ActiveCardDetail.jsx
    } else if (item === "Contact") {
      // The Contact overlay modal will appear automatically via activeNav state
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Brand logo */}
        <div className="navbar-brand" onClick={() => handleItemClick("Home")}>
          Rahman<span className="brand-accent">.Dev</span>
        </div>

        {/* Desktop menu */}
        <div className="navbar-menu-desktop">
          {navItems.map((item) => (
            <button
              key={item}
              className={`navbar-item-link ${activeNav === item ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              <span className="navbar-item-text">{getLabel(item)}</span>
              {activeNav === item && <span className="active-glow-dot" />}
            </button>
          ))}
        </div>

        {/* Right actions (Lang switch + Hamburg) */}
        <div className="navbar-actions">
          {/* Custom sliding language toggle */}
          <div className="lang-toggle-wrapper" onClick={toggleLang} title="Ubah Bahasa / Change Language">
            <span className={`lang-label ${lang === "en" ? "active" : ""}`}>EN</span>
            <div className={`lang-switch-track ${lang === "id" ? "id" : "en"}`}>
              <div className="lang-switch-knob" />
            </div>
            <span className={`lang-label ${lang === "id" ? "active" : ""}`}>ID</span>
          </div>

          {/* Hamburger button for mobile */}
          <button
            className={`hamburger-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="hamburger-line line-1" />
            <div className="hamburger-line line-2" />
            <div className="hamburger-line line-3" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-navbar-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-brand">
            Rahman<span className="brand-accent">.Dev</span>
          </div>
          <div className="mobile-drawer-links">
            {navItems.map((item, idx) => (
              <button
                key={item}
                className={`mobile-drawer-link-item ${activeNav === item ? "active" : ""}`}
                onClick={() => handleItemClick(item)}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                {getLabel(item)}
              </button>
            ))}
          </div>
          <div className="mobile-drawer-footer">
            <div className="lang-toggle-wrapper" onClick={toggleLang}>
              <span className={`lang-label ${lang === "en" ? "active" : ""}`}>EN</span>
              <div className={`lang-switch-track ${lang === "id" ? "id" : "en"}`}>
                <div className="lang-switch-knob" />
              </div>
              <span className={`lang-label ${lang === "id" ? "active" : ""}`}>ID</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
