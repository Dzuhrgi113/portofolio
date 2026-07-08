export default function OrbitCard({ item, position }) {
  return (
    <div className={`orbit-card ${position}`}>
      <div className="orbit-card-inner">
        <img
          src={item.img}
          alt={item.title}
          className="orbit-card-img"
        />
        <div className="orbit-card-body">
          <span className="orbit-card-category">
            {item.category === "Project" ? " Project" : "🏆 Certification"}
          </span>
          <h3 className="orbit-card-title">{item.title}</h3>
          <p className="orbit-card-tech">{item.tech}</p>
          <p className="orbit-card-desc">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}
