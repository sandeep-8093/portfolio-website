import "./about.css";
import Pic from "../../img/pic.jpg";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "4", label: "Companies" },
  { value: "7+", label: "Projects Shipped" },
  { value: "10+", label: "Technologies" },
];

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Pic} alt="Sandeep Kumar Nayak" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <p className="a-section-label">WHO I AM</p>
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a <strong>Backend and Fullstack Engineer</strong> with 3+ years of experience designing
          and building scalable REST APIs, microservices, and data-driven web applications. I
          specialise in <strong>Node.js, Express, PostgreSQL, and MongoDB</strong>, with real-world
          exposure to cloud platforms including <strong>AWS (S3, EC2, Lambda)</strong> and Azure.
        </p>
        <p className="a-desc">
          I'm passionate about clean architecture, performance optimisation, and turning complex
          business requirements into elegant, maintainable solutions. From Fintech SaaS platforms to
          social networks, I enjoy the full journey — from schema design to deployment.
        </p>

        <div className="a-stats">
          {STATS.map(({ value, label }) => (
            <div key={label} className="a-stat-item">
              <span className="a-stat-value">{value}</span>
              <span className="a-stat-label">{label}</span>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/sandeep8093"
          target="_blank"
          rel="noreferrer"
          className="a-github-link"
        >
          View GitHub Profile →
        </a>
      </div>
    </div>
  );
};

export default About;
