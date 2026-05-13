import "./about.css";
import Pic from "../../img/pic.jpg";

const STATS = [
  { value: "4+", label: "Years Experience" },
  { value: "5", label: "Companies" },
  { value: "8+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
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
          I'm a <strong>Software Engineer at GE Healthcare</strong> with expertise in{" "}
          <strong>fullstack development</strong> (Node.js, Python, React, Angular) and{" "}
          <strong>database management</strong> (MongoDB, PostgreSQL, Redis). Currently building
          MRI Spectroscopy systems, GenAI chatbots, and Kubernetes-based microservices in a
          healthcare tech environment.
        </p>
        <p className="a-desc">
          Adept at building scalable microservices, integrating AI/LLM solutions (LangChain, RAG,
          FAISS), and optimising system performance to drive business growth. From schema design
          to Kubernetes deployments, I enjoy owning the full engineering lifecycle.
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
