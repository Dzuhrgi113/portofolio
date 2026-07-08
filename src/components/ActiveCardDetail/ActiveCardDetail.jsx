import React from "react";

export default function ActiveCardDetail({
  selectedCard,
  setSelectedCard,
  activeNav,
  setActiveNav,
  t,
  lang,
  socialLinks = [],
}) {
  // Filter only the 3 contact links the user wants to highlight
  const contactItems = socialLinks.filter((s) =>
    ["Email", "Instagram", "WhatsApp"].includes(s.name)
  );

  return (
    <>
      {/* ===== ABOUT ME OVERLAY ===== */}
      {activeNav === "About Me" && (
        <div className="info-overlay" onClick={() => setActiveNav("Home")}>
          <div className="info-overlay-panel" onClick={(e) => e.stopPropagation()}>
            <button className="info-overlay-close" onClick={() => setActiveNav("Home")}>
              ✕
            </button>
            <h2 className="info-overlay-title">{t.aboutTitle}</h2>
            <div className="info-overlay-body">
              <p className="about-text">{t.about}</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== EXPERIENCE OVERLAY ===== */}
      {activeNav === "Experience" && (
        <div className="info-overlay" onClick={() => setActiveNav("Home")}>
          <div className="info-overlay-panel" onClick={(e) => e.stopPropagation()}>
            <button className="info-overlay-close" onClick={() => setActiveNav("Home")}>
              ✕
            </button>
            <h2 className="info-overlay-title">{t.expTitle}</h2>
            <div className="info-overlay-body">
              {t.experience.map((exp, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-header">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  {exp.company && <span className="exp-company">{exp.company}</span>}
                  <ul className="exp-list">
                    {exp.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== CONTACT OVERLAY ===== */}
      {activeNav === "Contact" && (
        <div className="info-overlay" onClick={() => setActiveNav("Home")}>
          <div className="info-overlay-panel contact-panel" onClick={(e) => e.stopPropagation()}>
            <button className="info-overlay-close" onClick={() => setActiveNav("Home")}>
              ✕
            </button>
            <h2 className="info-overlay-title">
              {lang === "id" ? "Hubungi Saya" : "Contact Me"}
            </h2>
            <p className="contact-subtitle">
              {lang === "id"
                ? "Jangan ragu untuk menghubungi saya melalui platform berikut!"
                : "Feel free to reach out to me through any of the following platforms!"}
            </p>
            <div className="contact-cards-grid">
              {contactItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-card contact-card-${item.name.toLowerCase()}`}
                >
                  <div className="contact-card-icon">
                    <svg viewBox="0 0 24 24">
                      <path
                        d={item.path}
                        fill={item.stroke ? "none" : "currentColor"}
                        stroke={item.stroke ? "currentColor" : "none"}
                        strokeWidth={item.stroke ? "1.5" : undefined}
                        strokeLinecap={item.stroke ? "round" : undefined}
                        strokeLinejoin={item.stroke ? "round" : undefined}
                      />
                    </svg>
                  </div>
                  <div className="contact-card-info">
                    <span className="contact-card-label">{item.name}</span>
                    <span className="contact-card-value">
                      {item.name === "Email" && "rdzuhrgi@gmail.com"}
                      {item.name === "Instagram" && "@rahman_dzuhrgi_"}
                      {item.name === "WhatsApp" && "+62 856-6470-1324"}
                    </span>
                  </div>
                  <span className="contact-card-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== CARD DETAIL OVERLAY ===== */}
      {selectedCard && (
        <div className="info-overlay" onClick={() => setSelectedCard(null)}>
          <div className="info-overlay-panel detail-panel" onClick={(e) => e.stopPropagation()}>
            <button className="info-overlay-close" onClick={() => setSelectedCard(null)}>
              ✕
            </button>
            <div className="detail-header">
              <span
                className={`orbit-card-category ${
                  selectedCard.category === "Project" ? "project" : "certificate"
                }`}
              >
                {selectedCard.category === "Project"
                  ? lang === "id"
                    ? "PROYEK"
                    : "PROJECT"
                  : lang === "id"
                  ? "SERTIFIKAT"
                  : "CERTIFICATE"}
              </span>
              <h2 className="info-overlay-title">{selectedCard.title}</h2>
              <div className="detail-meta">
                <span className="detail-tech">{selectedCard.tech}</span>
                <span className="detail-status">{selectedCard.status}</span>
              </div>
            </div>
            <div className="detail-img-wrapper">
              <img src={selectedCard.img} alt={selectedCard.title} className="detail-img" />
            </div>
            <div className="detail-body">
              <h3 className="detail-section-title">{t.overview}</h3>
              <p className="detail-desc">
                {lang === "en" ? selectedCard.descEn || selectedCard.desc : selectedCard.desc}
              </p>
              {selectedCard.link && (
                <a
                  href={selectedCard.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-link-btn"
                >
                  {t.liveDemo} →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
