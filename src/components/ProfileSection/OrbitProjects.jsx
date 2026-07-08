import React from "react";

export default function OrbitProjects({
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
        if (item.category !== "Project") return null;

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
                <span className="orbit-card-category project">PROJECT</span>
              </div>
              <svg
                className="orbit-card-type-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4ECDC4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
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
