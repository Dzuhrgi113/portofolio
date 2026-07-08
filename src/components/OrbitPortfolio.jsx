import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { orbitData } from "../data/orbitData";
import "./Orbit.css";

/* ===== CODE RAIN SNIPPETS ===== */
const codeSnippets = [
  "const app = express();", "function fetchData() {", "import React from 'react'",
  "SELECT * FROM users", "npm install gsap", "export default App",
  "console.log('hello')", "async function load() {", "return res.json(data)",
  "class Component extends", "useEffect(() => {}, [])", "const [state, setState]",
  "if (condition) {", "for (let i = 0; i < n; i++)", "import { gsap } from 'gsap'",
  "document.querySelector()", "addEventListener('click')", "fetch('/api/data')",
];

/* ===== NAVBAR ITEMS ===== */
const navItems = ["Home", "Projects", "Certifications", "About Me", "Experience", "Contact"];

/* ===== SOCIAL LINKS ===== */
const socialLinks = [
  {
    name: "Email", href: "mailto:rahmandzuhrgi@email.com",
    path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    stroke: true,
  },
  {
    name: "Phone", href: "tel:+62",
    path: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    stroke: true,
  },
  {
    name: "LinkedIn", href: "#",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
    stroke: true,
  },
  {
    name: "GitHub", href: "#",
    path: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
    stroke: false,
  },
  {
    name: "WhatsApp", href: "#",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    stroke: false,
  },
];

/* ===== TECH STACK DATA ===== */
const techStack = [
  { name: "PHP", color: "#777BB3", text: "php", skill: "85%" },
  { name: "JavaScript", color: "#F7DF1E", text: "JS", skill: "80%" },
  { name: "MySQL", color: "#00758F", text: "SQL", skill: "82%" },
  { name: "API", color: "#ffffff", text: "API", skill: "75%" },
  { name: "CodeIgniter", color: "#EE4623", text: "CI", skill: "70%" },
  { name: "Laravel", color: "#FF2D20", text: "Lv", skill: "65%" },
  { name: "Python", color: "#3776AB", text: "🐍", skill: "72%" },
  { name: "React", color: "#61DAFB", text: "⚛", skill: "68%" },
  { name: "GSAP", color: "#88CE02", text: "GS", skill: "60%" },
  { name: "Tailwind", color: "#06B6D4", text: "TW", skill: "75%" },
  { name: "Bootstrap", color: "#7952B3", text: "BS", skill: "78%" },
  { name: "Git", color: "#F05032", text: "Git", skill: "70%" },
];

/* ===== ABOUT ME TEXT ===== */
const aboutText = "Halo! Gw seorang mahasiswa Teknik Informatika (Semester 4) yang punya passion besar di bidang Web Development dan Data Analysis. Fokus utama gw saat ini adalah membangun aplikasi web yang responsif, efisien, dan aman menggunakan ekosistem PHP (seperti CodeIgniter & Native) serta JavaScript. Selain coding, gw juga tertarik dengan perancangan basis data dan implementasi sistem pendukung keputusan (DSS) menggunakan metode analitis. Gw selalu haus buat belajar teknologi baru dan siap buat kolaborasi bareng tim!";

/* ===== EXPERIENCE DATA ===== */
const experienceData = [
  {
    role: "Web Developer (Freelance / Project-Based)",
    period: "Project Based",
    company: "",
    items: [
      "Sistem Informasi Perpustakaan (SMA N MURATARA) — Merancang dan mengembangkan aplikasi manajemen perpustakaan sekolah berbasis web menggunakan PHP dan MySQL.",
      "Mengimplementasikan fitur dashboard admin, data keanggotaan, inventaris buku, hingga sistem rekapitulasi transaksi peminjaman secara real-time.",
      "Sistem Absensi Karyawan & Sistem Informasi Klinik — Membangun sistem informasi rekam medis dan pendaftaran pasien terintegrasi.",
      "Membuat modul absensi karyawan berbasis web untuk memudahkan manajemen rekapitulasi kehadiran dan data jabatan.",
    ],
  },
  {
    role: "Business Development / Staff",
    period: "2025 - Sekarang",
    company: "PT. Bestprofit Futures",
    items: [
      "Terlibat aktif dalam analisis data, komunikasi bisnis, dan mendukung operasional perusahaan di industri perdagangan berjangka.",
      "Mengembangkan kemampuan decision-making yang kuat dalam situasi pasar yang dinamis.",
    ],
  },
];

/* ===== TRANSLATIONS (ID / EN) ===== */
const translations = {
  id: {
    swipe: "GESER KIRI / KANAN UNTUK MENJELAJAHI",
    click: "KLIK KARTU UNTUK MELIHAT DETAIL",
    aboutTitle: "About Me",
    expTitle: "Experience",
    detailTitle: "Detail Proyek",
    overview: "Overview",
    features: "Fitur Utama",
    techLabel: "Tech Stack",
    statusLabel: "Status",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    about: aboutText,
    experience: experienceData,
  },
  en: {
    swipe: "SWIPE LEFT / RIGHT TO EXPLORE",
    click: "CLICK CARD TO VIEW DETAILS",
    aboutTitle: "About Me",
    expTitle: "Experience",
    detailTitle: "Project Detail",
    overview: "Overview",
    features: "Key Features",
    techLabel: "Tech Stack",
    statusLabel: "Status",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    about: "Hello! I'm a 4th-semester Informatics Engineering student with a strong passion for Web Development and Data Analysis. My current focus is building responsive, efficient, and secure web applications using the PHP ecosystem (CodeIgniter & Native) and JavaScript. Beyond coding, I'm also interested in database design and decision support systems (DSS) using analytical methods. I'm always eager to learn new technologies and ready to collaborate with teams!",
    experience: [
      {
        role: "Web Developer (Freelance / Project-Based)",
        period: "Project Based",
        company: "",
        items: [
          "Library Information System (SMA N MURATARA) — Designed and developed a web-based school library management application using PHP and MySQL.",
          "Implemented admin dashboard, membership data, book inventory, and real-time lending transaction recap features.",
          "Employee Attendance System & Clinic Information System — Built integrated medical records and patient registration systems.",
          "Created web-based employee attendance module for easy attendance recap and position data management.",
        ],
      },
      {
        role: "Business Development / Staff",
        period: "2025 - Present",
        company: "PT. Bestprofit Futures",
        items: [
          "Actively involved in data analysis, business communication, and supporting company operations in the futures trading industry.",
          "Developed strong decision-making skills in dynamic market situations.",
        ],
      },
    ],
  },
};

/* ===== CARD ORBIT POSITIONS ===== */
const cardPositions = {
  "-4": { x: -480, y: -20, scale: 0.38, rotateY: 48, rotateZ: 12, opacity: 0.13, zIndex: 1 },
  "-3": { x: -350, y: -55, scale: 0.48, rotateY: 36, rotateZ: 8, opacity: 0.22, zIndex: 2 },
  "-2": { x: -230, y: -75, scale: 0.6, rotateY: 22, rotateZ: 4, opacity: 0.36, zIndex: 3 },
  "-1": { x: -120, y: -65, scale: 0.78, rotateY: 9, rotateZ: 1, opacity: 0.62, zIndex: 4 },
  "0": { x: 0, y: 55, scale: 1.08, rotateY: 0, rotateZ: 0, opacity: 1, zIndex: 10 },
  "1": { x: 120, y: -65, scale: 0.78, rotateY: -9, rotateZ: -1, opacity: 0.62, zIndex: 4 },
  "2": { x: 230, y: -75, scale: 0.6, rotateY: -22, rotateZ: -4, opacity: 0.36, zIndex: 3 },
  "3": { x: 350, y: -55, scale: 0.48, rotateY: -36, rotateZ: -8, opacity: 0.22, zIndex: 2 },
  "4": { x: 480, y: -20, scale: 0.38, rotateY: -48, rotateZ: -12, opacity: 0.13, zIndex: 1 },
};

/* ===== MAIN COMPONENT ===== */
export default function OrbitPortfolio() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const sliderDragStart = useRef(null);
  const sliderScrollStart = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(4);
  const [activeNav, setActiveNav] = useState("Home");
  const [lang, setLang] = useState("id");
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filterTab, setFilterTab] = useState("All"); // "All" | "Project" | "Certificate"
  const t = translations[lang];

  const total = orbitData.length;

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  /* Filtered data for slider section */
  const filteredData = filterTab === "All"
    ? orbitData
    : orbitData.filter((item) => item.category === filterTab);

  const getCardStyle = (index) => {
    let offset = index - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (Math.abs(offset) > 4) {
      return { opacity: 0, transform: "translate3d(0, 0, -500px) scale(0.3)", zIndex: 0, pointerEvents: "none" };
    }

    const pos = cardPositions[String(offset)];
    if (!pos) return { opacity: 0, zIndex: 0, pointerEvents: "none" };

    return {
      opacity: pos.opacity,
      transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${pos.scale}) rotateY(${pos.rotateY}deg) rotateZ(${pos.rotateZ || 0}deg)`,
      zIndex: pos.zIndex,
    };
  };

  const isCenter = (index) => {
    let offset = index - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset === 0;
  };

  /* Entrance animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".navbar", { duration: 0.8, y: -30, opacity: 0, ease: "power2.out" });
      gsap.from(".profile-photo-wrapper", { duration: 1.2, scale: 0.6, opacity: 0, ease: "back.out(1.4)", delay: 0.3 });
      gsap.from(".orbit-ring", { duration: 1.2, opacity: 0, scale: 0.2, stagger: 0.15, ease: "power3.out", delay: 0.2 });
      gsap.from(".side-card", { duration: 0.9, opacity: 0, x: -50, ease: "power3.out", delay: 0.5, stagger: 0.15 });
      gsap.from(".orbit-card", { duration: 0.8, opacity: 0, y: 50, stagger: 0.06, ease: "power3.out", delay: 0.4 });
      gsap.from(".social-btn", { duration: 0.5, x: 30, opacity: 0, stagger: 0.08, ease: "power2.out", delay: 0.7 });
      gsap.from(".tech-stack-bar", { duration: 0.7, y: 30, opacity: 0, ease: "power2.out", delay: 0.9 });
      gsap.from(".orbit-nav-arrow", { duration: 0.5, opacity: 0, scale: 0.5, stagger: 0.1, ease: "back.out(1.7)", delay: 0.8 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [total]);

  /* Touch/Swipe support for orbit cards */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only trigger if horizontal swipe dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  /* Loading screen */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  /* Custom cursor */
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
  }, []);

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

      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="bg-grid" />
      <div className="bg-glow-center" />
      <div className="bg-glow-left" />
      <div className="bg-glow-right" />
      <div className="bg-top-line" />
      <div className="bg-particle bg-particle-1" />
      <div className="bg-particle bg-particle-2" />
      <div className="bg-particle bg-particle-3" />
      <div className="bg-particle bg-particle-4" />
      <div className="bg-motion-gradient" />

      {/* Code Rain */}
      <div className="code-rain">
        {codeSnippets.map((s, i) => (
          <span key={i} style={{ left: `${(i * 7.3) % 100}%`, top: `${(i * 11.7 + 5) % 90}%`, animationDelay: `${i * 0.35}s` }}>
            {s}
          </span>
        ))}
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-brand">Rahman Dzuhrgi&apos;s Portfolio</div>
        <div className="navbar-menu">
          {navItems.map((item) => (
            <button
              key={item}
              className={`navbar-item ${activeNav === item ? "active" : ""}`}
              onClick={() => setActiveNav(item)}
            >
              [ {item} ]
            </button>
          ))}
        </div>
        <button className="lang-toggle" onClick={toggleLang}>
          <span className="lang-toggle-inner">{lang.toUpperCase()}</span>
        </button>
      </nav>

      {/* ===== HERO / ORBIT SECTION ===== */}
      <div className="hero-section">
        {/* Orbit Rings */}
        <div className="orbit-rings">
          <div className="orbit-ring ring-1" />
          <div className="orbit-ring ring-2" />
          <div className="orbit-ring ring-3" />
        </div>

        {/* Profile Photo */}
        <div className="profile-photo-wrapper">
          <img src="/images/foto-profil.png" alt="Rahman Dzuhrgi" />
          <div className="profile-glow" />
        </div>

        {/* ABOUT ME Fixed Card - Left */}
        <div className="side-card side-card-left" onClick={() => setActiveNav("About Me")}>
          <div className="side-card-inner">
            <div className="side-card-header">
              <span className="side-card-label about-label">{t.aboutTitle.toUpperCase()}</span>
              <svg className="side-card-icon" viewBox="0 0 24 24" fill="none" stroke="#4ECDC4" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="side-card-body">
              <div className="side-card-mini-photo">
                <img src="/images/foto-profil.png" alt="Rahman" />
              </div>
              <p className="side-card-bio">{t.about.length > 130 ? t.about.slice(0, 130) + '...' : t.about}</p>
            </div>
          </div>
        </div>

        {/* EXPERIENCE Fixed Card - Right */}
        <div className="side-card side-card-right" onClick={() => setActiveNav("Experience")}>
          <div className="side-card-inner exp-inner">
            <div className="side-card-header">
              <span className="side-card-label exp-label">{t.expTitle.toUpperCase()}</span>
              <svg className="side-card-icon" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><circle cx="12" cy="12" r="3" />
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

        {/* Orbit Cards - with touch/swipe support */}
        <div
          className="orbit-cards-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {orbitData.map((item, index) => {
            const style = getCardStyle(index);
            const centered = isCenter(index);
            const isProject = item.category === "Project";

            return (
              <div
                key={item.id}
                className={`orbit-card ${centered ? "center-card" : ""} ${hoveredCard !== null && hoveredCard !== index ? "card-blurred" : ""}`}
                style={style}
                onClick={() => handleCardClick(item, centered)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="orbit-card-inner">
                  <div className="orbit-card-header">
                    <span className={`orbit-card-category ${isProject ? "project" : "certificate"}`}>
                      {isProject ? "PROJECT" : "CERTIFICATE"}
                    </span>
                  </div>
                  {isProject ? (
                    <svg className="orbit-card-type-icon" viewBox="0 0 24 24" fill="none" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                    </svg>
                  ) : (
                    <svg className="orbit-card-type-icon" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  )}
                  <h3 className="orbit-card-title">{item.title}</h3>
                  <p className="orbit-card-tech">{item.tech}</p>
                  <div className="orbit-card-img-wrapper">
                    <img src={item.img} alt={item.title} className="orbit-card-img" />
                  </div>
                  <p className="orbit-card-desc">{lang === "en" ? (item.descEn || item.desc) : item.desc}</p>
                  <button className="orbit-card-arrow" aria-label="View details">→</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== HORIZONTAL SLIDER SECTION (Projects & Certificates) ===== */}
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
                {tab === "All" ? orbitData.length : orbitData.filter(d => d.category === tab).length}
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
                      {(lang === "en" ? (item.descEn || item.desc) : item.desc).slice(0, 80)}...
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

      {/* ===== BOTTOM SECTION: Arrows + Text + Tech Stack ===== */}
      <div className="bottom-section">
        <div className="nav-row">
          <button className="orbit-nav-arrow" onClick={goPrev} aria-label="Previous card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="orbit-nav-text">
            <div className="orbit-nav-text-line1">
              <span className="swipe-icon">☝</span>
              {t.swipe}
            </div>
            <div className="orbit-nav-text-line2">{t.click}</div>
          </div>

          <button className="orbit-nav-arrow" onClick={goNext} aria-label="Next card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

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
      </div>

      {/* ===== SOCIAL SIDEBAR ===== */}
      <div className="social-sidebar">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.href} className="social-btn" title={social.name}>
            <svg viewBox="0 0 24 24">
              {social.stroke ? (
                <path d={social.path} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d={social.path} fill="currentColor" />
              )}
            </svg>
          </a>
        ))}
      </div>

      {/* ===== LIVE CHAT BUTTON ===== */}
      <button className="live-chat-btn" title="Live Chat" aria-label="Live Chat">
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </button>

      {/* ===== ABOUT ME OVERLAY ===== */}
      {(activeNav === "About Me") && (
        <div className="info-overlay" onClick={() => setActiveNav("Home")}>
          <div className="info-overlay-panel" onClick={(e) => e.stopPropagation()}>
            <button className="info-overlay-close" onClick={() => setActiveNav("Home")}>✕</button>
            <h2 className="info-overlay-title">{t.aboutTitle}</h2>
            <div className="info-overlay-body">
              <p className="about-text">{t.about}</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== EXPERIENCE OVERLAY ===== */}
      {(activeNav === "Experience") && (
        <div className="info-overlay" onClick={() => setActiveNav("Home")}>
          <div className="info-overlay-panel" onClick={(e) => e.stopPropagation()}>
            <button className="info-overlay-close" onClick={() => setActiveNav("Home")}>✕</button>
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

      {/* ===== CARD DETAIL OVERLAY ===== */}
      {selectedCard && (
        <div className="info-overlay" onClick={() => setSelectedCard(null)}>
          <div className="info-overlay-panel detail-panel" onClick={(e) => e.stopPropagation()}>
            <button className="info-overlay-close" onClick={() => setSelectedCard(null)}>✕</button>
            <div className="detail-header">
              <span className={`orbit-card-category ${selectedCard.category === "Project" ? "project" : "certificate"}`}>
                {selectedCard.category === "Project" ? t.project : t.certificate}
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
              <p className="detail-desc">{lang === "en" ? (selectedCard.descEn || selectedCard.desc) : selectedCard.desc}</p>
              {selectedCard.link && (
                <a href={selectedCard.link} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
                  {t.liveDemo} →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
