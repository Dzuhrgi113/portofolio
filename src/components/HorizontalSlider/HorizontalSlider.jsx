import React from "react";

export default function HorizontalSlider({
  filteredData,
  filterTab,
  setFilterTab,
  orbitData,
  setSelectedCard,
  lang,
  sliderRef,
}) {
  return (
    <div className="slider-section">
      {/* Filter Tabs */}
      <div className="slider-tabs">
        {["All", "Project", "Certificate"].map((tab) => (
          <button
            key={tab}
            className={`slider-tab ${filterTab === tab ? "active" : ""}`}
            onClick={() => setFilterTab(tab)}
          >
            {tab === "All" ? "✦ Semua" : tab === "Project" ? "⬡ Projects" : "🏅 Sertifikat"}
            <span className="slider-tab-count">
              {tab === "All"
                ? orbitData.length
                : orbitData.filter((d) => d.category === tab).length}
            </span>
          </button>
        ))}
        <div className="slider-progress-label">
          {filteredData.length} item{filteredData.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Swipeable / Scrollable Cards Row */}
      <div className="slider-track-wrapper">
        <div className="slider-track" ref={sliderRef}>
          {filteredData.map((item) => {
            const isProject = item.category === "Project";
            return (
              <div
                key={item.id}
                className="slider-card"
                onClick={() => setSelectedCard(item)}
              >
                <div className={`slider-card-badge ${isProject ? "project" : "certificate"}`}>
                  {isProject ? "PROJECT" : "CERT"}
                </div>
                <div className="slider-card-img-wrapper">
                  <img src={item.img} alt={item.title} className="slider-card-img" />
                </div>
                <div className="slider-card-body">
                  <h4 className="slider-card-title">{item.title}</h4>
                  <p className="slider-card-tech">{item.tech}</p>
                  <p className="slider-card-desc">
                    {(lang === "en" ? item.descEn || item.desc : item.desc).slice(0, 80)}...
                  </p>
                  <div className="slider-card-footer">
                    <span className="slider-card-status">{item.status}</span>
                    <span className="slider-card-arrow">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Gradient fade edges */}
        <div className="slider-fade-left" />
        <div className="slider-fade-right" />
      </div>
    </div>
  );
}
