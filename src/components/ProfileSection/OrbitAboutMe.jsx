import React from "react";

export default function OrbitAboutMe({ t, setActiveNav }) {
  return (
    <div className="side-card side-card-left" onClick={() => setActiveNav("About Me")}>
      <div className="side-card-inner">
        <div className="side-card-header">
          <span className="side-card-label about-label">{t.aboutTitle.toUpperCase()}</span>
          <svg className="side-card-icon" viewBox="0 0 24 24" fill="none" stroke="#4ECDC4" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="side-card-body">
          <div className="side-card-mini-photo">
            <img src="/images/foto-profil.png" alt="Rahman" />
          </div>
          <p className="side-card-bio">
            {t.about.length > 130 ? t.about.slice(0, 130) + "..." : t.about}
          </p>
        </div>
      </div>
    </div>
  );
}
