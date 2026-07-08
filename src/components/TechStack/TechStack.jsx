import React from "react";

export default function TechStack({ techStack }) {
  return (
    <div className="tech-stack-bar">
      {techStack.map((tech) => (
        <div key={tech.name} className="tech-item">
          <div
            className="tech-icon"
            style={{
              backgroundColor: tech.color + "18",
              border: `1px solid ${tech.color}33`,
              color: tech.color,
            }}
          >
            {tech.text}
          </div>
          <span className="tech-label">{tech.name}</span>
          <span className="tech-tooltip">{tech.skill}</span>
        </div>
      ))}
    </div>
  );
}

