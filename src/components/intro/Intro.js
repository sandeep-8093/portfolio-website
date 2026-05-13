import "./intro.css";
import Me from "../../img/me.png";

const TITLES = [
  "Software Engineer @ GE Healthcare",
  "Fullstack Developer",
  "Backend Engineer",
  "GenAI & LLM Integrations",
  "Kubernetes & Microservices",
];

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <p className="i-greeting">👋 Hello, I'm</p>
          <h1 className="i-name">Sandeep Kumar Nayak</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              {TITLES.map((t) => (
                <div key={t} className="i-title-item">{t}</div>
              ))}
            </div>
          </div>
          <p className="i-desc">
            Innovative Software Engineer with expertise in fullstack development (Node.js, Python,
            React, Angular) and database management (MongoDB, PostgreSQL). Adept at building
            scalable microservices, integrating AI/LLM solutions, and optimising system performance.
          </p>
          <div className="i-cta-group">
            <a
              href="#projects"
              className="i-cta primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1Ei_hHUxu2gc9f-6yxcg2SHWPewq7Yx_Q/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="i-cta secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Sandeep Kumar Nayak" className="i-img" />
        <div className="i-badges">
          <span className="i-badge">Node.js</span>
          <span className="i-badge">Kubernetes</span>
          <span className="i-badge">GenAI / LLM</span>
          <span className="i-badge">AWS · Azure</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
