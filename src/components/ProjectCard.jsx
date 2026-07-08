export default function ProjectCard({ project, index, total, onClick, isActive }) {
  // Distribute cards vertically
  const yOffset = index === 0 ? -100 : 100;
  const xOffset = index * 20 - 10;

  return (
    <div
      className={`project-card absolute w-[200px] md:w-[230px] cursor-pointer
        rounded-xl overflow-hidden
        bg-[#111827]/70 backdrop-blur-md
        border ${isActive ? "border-[#ff2d78] shadow-[0_0_20px_rgba(255,45,120,0.4)]" : "border-gray-700/50 hover:border-[#66FCF1]/50"}
        transition-all duration-300`}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        transform: `translateY(${yOffset}px) translateX(${xOffset}px) rotateY(15deg)`,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[130px] object-cover"
      />
      <div className="p-3">
        <h3 className="text-white text-sm font-bold">{project.title}</h3>
        <p className="text-[#66FCF1] text-[10px] mt-0.5">{project.subtitle}</p>
        <p className="text-gray-400 text-[11px] mt-1 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}
