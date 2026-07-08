import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ProjectCard from "./ProjectCard";
import CertificateCard from "./CertificateCard";

const projects = [
  {
    id: 1,
    title: "Perpustakaan WEB",
    subtitle: "PHP Native | MySQL",
    description: "Sistem manajemen perpustakaan digital dengan dashboard, data anggota, data buku, transaksi peminjaman, laporan, dan backup data.",
    image: "/images/proj-perpustakaan.png",
  },
  {
    id: 2,
    title: "Sistem Absensi Karyawan",
    subtitle: "PHP Native | MySQL",
    description: "Sistem absensi karyawan Klinik Maimunah dengan fitur data karyawan, data user, data jabatan, data absen, dan data keterangan.",
    image: "/images/proj-absensi.png",
  },
];

const certificates = [
  {
    id: 1,
    title: "Google: AI Fundamentals",
    subtitle: "Cert",
    description: "Google AI Fundamentals - Responsive Web Design",
    image: "https://placehold.co/400x280/1a1a2e/66FCF1?text=Google+AI",
  },
  {
    id: 2,
    title: "freeCodeCamp: Responsive Web Design",
    subtitle: "Cert",
    description: "freeCodeCamp.org certificate",
    image: "https://placehold.co/400x280/1a1a2e/66FCF1?text=fCC+RWD",
  },
  {
    id: 3,
    title: "Dicoding: Web Programming",
    subtitle: "Cert",
    description: "Dicoding Web Programming certificate",
    image: "https://placehold.co/400x280/1a1a2e/66FCF1?text=Dicoding",
  },
  {
    id: 4,
    title: "freeCodeCamp (A)",
    subtitle: "Cert",
    description: "freeCodeCamp.org certificate",
    image: "https://placehold.co/400x280/1a1a2e/66FCF1?text=fCC+A",
  },
];

const codeSnippets = [
  "const app = express();",
  "function fetchData() {",
  "import React from 'react'",
  "SELECT * FROM users",
  "npm install gsap",
  "export default App",
  "console.log('hello')",
  "async function load() {",
  "return res.json(data)",
  "class Component extends",
  "useEffect(() => {}, [])",
  "const [state, setState]",
  "if (condition) {",
  "for (let i = 0; i < n; i++)",
  "import { gsap } from 'gsap'",
  "document.querySelector()",
  "addEventListener('click')",
  "fetch('/api/data')",
];

export default function OrbitCanvas() {
  const canvasRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for cards
      gsap.from(".project-card", {
        duration: 1.2,
        x: -400,
        opacity: 0,
        rotationY: 60,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".cert-card", {
        duration: 1.2,
        x: 400,
        opacity: 0,
        rotationY: -60,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".profile-photo", {
        duration: 1.2,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      gsap.from(".orbit-ring", {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(".nav-item", {
        duration: 0.8,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Floating animation for profile
      gsap.to(".profile-photo", {
        y: "+=8",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Slow rotation for orbit rings
      gsap.to(".orbit-ring-1", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-ring-2", {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Code rain animation
      gsap.fromTo(".code-rain span", {
        opacity: 0.1,
        y: -20,
      }, {
        opacity: 0.3,
        y: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.3,
          from: "random",
        },
        ease: "sine.inOut",
      });
    }, canvasRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (e, cardId, type) => {
    const card = e.currentTarget;

    if (activeCard === cardId) {
      gsap.to(card, {
        duration: 0.6,
        rotationY: type === "project" ? 15 : -15,
        z: 0,
        scale: 1,
        opacity: 0.9,
        ease: "power2.out",
        overwrite: "auto",
      });
      setActiveCard(null);
    } else {
      if (activeCard !== null) {
        const prevCards = document.querySelectorAll(".project-card, .cert-card");
        prevCards.forEach((c) => { c.dataset.active = "false"; });
      }

      gsap.to(card, {
        duration: 0.6,
        x: 0,
        y: 0,
        rotationY: 0,
        z: 100,
        scale: 1.1,
        opacity: 1,
        ease: "power2.out",
        overwrite: "auto",
      });
      card.dataset.active = "true";
      setActiveCard(cardId);
    }
  };

  const navItems = ["Home", "Projects", "Certifications", "Contact"];

  return (
    <div
      ref={canvasRef}
      className="relative w-full min-h-screen bg-[#0a0a1a] overflow-hidden flex flex-col"
    >
      {/* Background: cosmic nebula + code rain */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#0d0d2b] to-[#1a0a2e]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,50,200,0.15)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,100,200,0.1)_0%,transparent_60%)]"></div>

      {/* Code rain background */}
      <div className="code-rain absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, i) => (
          <span
            key={i}
            className="absolute text-[#66FCF1] text-xs font-mono opacity-20 whitespace-nowrap"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7 + 5) % 90}%`,
              transform: `rotate(${-15 + (i % 5) * 8}deg)`,
            }}
          >
            {snippet}
          </span>
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#66FCF1_1px,transparent_1px),linear-gradient(to_bottom,#66FCF1_1px,transparent_1px)]
        bg-[size:3rem_3rem]"
      ></div>

      {/* ===== NAVBAR ===== */}
      <nav className="relative z-30 flex justify-center items-center gap-6 md:gap-10 py-5">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-item text-sm md:text-base font-medium tracking-wider transition-all duration-300 cursor-pointer
              ${activeNav === item
                ? "text-[#66FCF1]"
                : "text-gray-400 hover:text-white"
              }`}
            onClick={() => setActiveNav(item)}
          >
            [ {item} ]
          </button>
        ))}
      </nav>

      {/* ===== TITLE ===== */}
      <h1 className="relative z-20 text-center text-2xl md:text-4xl font-extrabold text-[#ff2d78] tracking-wider uppercase mt-2 mb-4">
        Projects & Certifications Orbit
      </h1>

      {/* ===== ORBIT AREA ===== */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4">

        {/* Orbit Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="orbit-ring orbit-ring-1 absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-[#66FCF1]/20"></div>
          <div className="orbit-ring orbit-ring-2 absolute w-[400px] h-[400px] md:w-[520px] md:h-[520px] rounded-full border border-[#ff2d78]/15" style={{ transform: "rotateX(75deg)" }}></div>
          <div className="orbit-ring absolute w-[550px] h-[300px] md:w-[700px] md:h-[380px] rounded-full border border-[#66FCF1]/10" style={{ transform: "rotateX(75deg) rotateZ(15deg)" }}></div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-2 md:left-8 z-30 w-12 h-12 rounded-full bg-[#111827]/80 border border-gray-700 flex items-center justify-center text-white text-xl hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all cursor-pointer backdrop-blur-sm">
          &#8249;
        </button>
        <button className="absolute right-2 md:right-8 z-30 w-12 h-12 rounded-full bg-[#111827]/80 border border-gray-700 flex items-center justify-center text-white text-xl hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all cursor-pointer backdrop-blur-sm">
          &#8250;
        </button>

        {/* Profile Photo */}
        <div className="profile-photo absolute z-10 w-[200px] h-[350px] md:w-[260px] md:h-[420px]">
          <img
            src="/images/foto-profil.png"
            alt="Profile"
            className="w-full h-full object-cover object-top"
            style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
          />
          {/* Glow behind profile */}
          <div className="absolute inset-0 shadow-[0_0_80px_rgba(102,252,241,0.15)]"></div>
        </div>

        {/* Project Cards (Left) */}
        <div className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 w-[45%] h-full z-20 flex items-center">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
              onClick={(e) => handleCardClick(e, project.id, "project")}
              isActive={activeCard === project.id}
            />
          ))}
        </div>

        {/* Certificate Cards (Right) */}
        <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 w-[45%] h-full z-20 flex items-center">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={i}
              total={certificates.length}
              onClick={(e) => handleCardClick(e, cert.id, "cert")}
              isActive={activeCard === cert.id}
            />
          ))}
        </div>
      </div>

      {/* ===== TECH STACK ===== */}
      <div className="relative z-20 flex justify-center items-center gap-4 md:gap-8 py-6">
        {[
          { name: "PHP", color: "#777BB3", text: "php" },
          { name: "JavaScript", color: "#F7DF1E", text: "JS" },
          { name: "SQL", color: "#00758F", text: "SQL" },
          { name: "API", color: "#ffffff", text: "API" },
          { name: "Python", color: "#3776AB", text: "Py" },
          { name: "React", color: "#61DAFB", text: "⚛" },
        ].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-1 group cursor-pointer">
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-lg font-bold transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: tech.color + "22", border: `1px solid ${tech.color}44` }}
            >
              <span style={{ color: tech.color }}>{tech.text}</span>
            </div>
            <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* ===== LIVE CHAT BUTTON ===== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <button className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg text-sm font-medium hover:shadow-xl transition-shadow cursor-pointer">
          Live Chat
        </button>
        <button className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
