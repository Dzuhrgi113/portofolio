import React from "react";

export default function OrbitExperience({ t, setActiveNav }) {
  return (
    <div className="side-card side-card-right" onClick={() => setActiveNav("Experience")}>
      <div className="side-card-inner exp-inner">
        <div className="side-card-header">
          <span className="side-card-label exp-label">{t.expTitle.toUpperCase()}</span>
          <svg className="side-card-icon" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div className="side-card-body">
          {t.experience.slice(0, 2).map((exp, i) => (
            <div key={i} className="side-exp-item">
              <span className="side-exp-dot" />
              <div className="side-exp-content">
                <span className="side-exp-role">{exp.role}</span>
                {exp.company ? <span className="side-exp-company">{exp.company}</span> : null}
                <span className="side-exp-period">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
