import "./project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ title, img, link, github, description, tech, type }) => {
  const typeColor = {
    fullstack: "#2caeba",
    backend: "#c05551",
    frontend: "#6c63ff",
  };

  return (
    <div className="p">
      {/* Browser chrome bar */}
      <div className="p-browser">
        <div className="p-circle red"></div>
        <div className="p-circle yellow"></div>
        <div className="p-circle green"></div>
        <span className="p-type" style={{ background: typeColor[type] || "#888" }}>
          {type}
        </span>
      </div>

      {/* Image + overlay */}
      <div className="p-img-wrap">
        <img src={img} alt={title} className="p-img" />
        <div className="p-overlay">
          <h3 className="p-overlay-title">{title}</h3>
          <p className="p-overlay-desc">{description}</p>
          <div className="p-tech-list">
            {tech.map((t) => (
              <span key={t} className="p-tech-tag">{t}</span>
            ))}
          </div>
          <div className="p-links">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="p-link" title="GitHub">
                <FaGithub /> Code
              </a>
            )}
            <a href={link} target="_blank" rel="noreferrer" className="p-link primary" title="Live Demo">
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>
      </div>

      <div className="p-footer">
        <strong className="p-title">{title}</strong>
      </div>
    </div>
  );
};

export default Project;
