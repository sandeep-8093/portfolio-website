import "./intro.css";
import Me from "../../img/me.png";

const TITLES = [
  "Fullstack Developer",
  "Backend Engineer",
  "Node.js & Express",
  "API Architect",
  "Cloud & DevOps",
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
            Backend &amp; Fullstack Engineer with 3+ years building scalable REST APIs,
            microservices, and data-driven web apps using Node.js, Express, PostgreSQL, MongoDB,
            and cloud services (AWS, Azure).
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
          <span className="i-badge">PostgreSQL</span>
          <span className="i-badge">AWS</span>
          <span className="i-badge">MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
