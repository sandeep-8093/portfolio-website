import "./whatido.css";

const EXPERTISE = [
  {
    id: 1,
    emoji: "⚙️",
    title: "Backend API Development",
    description:
      "Building robust, scalable REST APIs using Node.js and Express.js with clean MVC architecture, request validation, global error handling, and rate limiting.",
    tags: ["Node.js", "Express.js", "REST API", "NestJS"],
    accent: "#c05551",
  },
  {
    id: 2,
    emoji: "🗄️",
    title: "Database Architecture",
    description:
      "Designing relational and NoSQL schemas for production systems. Experienced with PostgreSQL joins, indexing, and migrations, plus MongoDB aggregation pipelines.",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "ElasticSearch"],
    accent: "#2caeba",
  },
  {
    id: 3,
    emoji: "☁️",
    title: "Cloud & DevOps",
    description:
      "Deploying and managing services on AWS (S3, EC2, Lambda) and Azure. Containerising workloads with Docker and managing environment configs for CI/CD pipelines.",
    tags: ["AWS", "Azure", "Docker", "Render"],
    accent: "#f0a500",
  },
  {
    id: 4,
    emoji: "🔒",
    title: "Auth & Security",
    description:
      "Implementing JWT-based authentication, OAuth integrations, bcrypt password hashing, Helmet middleware, and role-based access control for secure APIs.",
    tags: ["JWT", "OAuth", "bcrypt", "Helmet"],
    accent: "#6c63ff",
  },
  {
    id: 5,
    emoji: "🏗️",
    title: "System Design",
    description:
      "Architecting microservices from monoliths, designing event-driven workflows, and applying SOLID principles to build systems that scale cleanly under load.",
    tags: ["Microservices", "MVC", "SOLID", "Flask"],
    accent: "#28a745",
  },
  {
    id: 6,
    emoji: "🖥️",
    title: "Fullstack Development",
    description:
      "Bridging backend APIs with modern frontends using React and Angular. Experienced in state management (Redux, NgRx), component-driven design, and SPA routing.",
    tags: ["React", "Angular", "Redux", "NgRx"],
    accent: "#e83e8c",
  },
];

const WhatIDo = () => {
  return (
    <section className="wid-section">
      <div className="wid-header">
        <p className="wid-label">CORE CAPABILITIES</p>
        <h2 className="wid-title">What I Do</h2>
        <div className="wid-underline"></div>
        <p className="wid-subtitle">
          From schema design to cloud deployment — here's where I bring value.
        </p>
      </div>

      <div className="wid-grid">
        {EXPERTISE.map((item) => (
          <div
            key={item.id}
            className="wid-card"
            style={{ "--accent": item.accent }}
          >
            <div className="wid-card-top">
              <div className="wid-emoji">{item.emoji}</div>
              <h3 className="wid-card-title">{item.title}</h3>
            </div>
            <p className="wid-card-desc">{item.description}</p>
            <div className="wid-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="wid-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
