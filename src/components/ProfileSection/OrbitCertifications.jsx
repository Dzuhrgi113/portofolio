import React from "react";

export default function OrbitCertifications({
  orbitData,
  currentIndex,
  total,
  getCardStyle,
  isCenter,
  hoveredCard,
  setHoveredCard,
  handleCardClick,
  lang,
}) {
  return (
    <>
      {orbitData.map((item, index) => {
        if (item.category !== "Certificate") return null;

        const style = getCardStyle(index);
        const centered = isCenter(index);

        return (
          <div
            key={item.id}
            className={`orbit-card ${centered ? "center-card" : ""} ${
              hoveredCard !== null && hoveredCard !== index ? "card-blurred" : ""
            }`}
            style={style}
            onClick={() => handleCardClick(item, centered)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="orbit-card-inner">
              <div className="orbit-card-header">
                <span className="orbit-card-category certificate">CERTIFICATE</span>
              </div>
              <svg
                className="orbit-card-type-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B5CE7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <h3 className="orbit-card-title">{item.title}</h3>
              <p className="orbit-card-tech">{item.tech}</p>
              <div className="orbit-card-img-wrapper">
                <img src={item.img} alt={item.title} className="orbit-card-img" />
              </div>
              <p className="orbit-card-desc">
                {lang === "en" ? item.descEn || item.desc : item.desc}
              </p>
              <button className="orbit-card-arrow" aria-label="View details">
                →
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
