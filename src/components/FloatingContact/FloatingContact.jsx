import React from "react";

export default function FloatingContact({ socialLinks }) {
  return (
    <>
      {/* ===== SOCIAL SIDEBAR ===== */}
      <div className="social-sidebar">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="social-btn"
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24">
              {social.stroke ? (
                <path
                  d={social.path}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path d={social.path} fill="currentColor" />
              )}
            </svg>
          </a>
        ))}
      </div>

      {/* ===== LIVE CHAT BUTTON ===== */}
      <button
        className="live-chat-btn"
        title="Live Chat"
        aria-label="Live Chat"
        onClick={() => window.open("https://wa.me/6285664701324", "_blank", "noopener,noreferrer")}
      >
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>
    </>
  );
}
