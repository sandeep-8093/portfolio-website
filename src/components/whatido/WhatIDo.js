import "./whatido.css";

const EXPERTISE = [
  {
    id: 1,
    emoji: "⚙️",
    title: "Backend API Development",
    description:
      "Building robust, scalable REST APIs using Node.js, Express.js, and Flask with clean architecture, Sequelize/Mongoose ORM, request validation, and global error handling.",
    tags: ["Node.js", "Express.js", "Flask", "Sequelize", "Mongoose"],
    accent: "#c05551",
  },
  {
    id: 2,
    emoji: "🤖",
    title: "AI / GenAI Integration",
    description:
      "Integrating LLM-powered solutions with LangChain, RAG pipelines, and FAISS vector stores to build intelligent chatbots and data-query tools over enterprise datasets.",
    tags: ["LangChain", "RAG", "FAISS", "LLM", "Python"],
    accent: "#7c3aed",
  },
  {
    id: 3,
    emoji: "☁️",
    title: "Cloud & DevOps",
    description:
      "Deploying and managing containerised services on AWS and Azure, orchestrating microservices with Kubernetes and Helm, and using RabbitMQ for fault-tolerant message queuing.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "RabbitMQ"],
    accent: "#f0a500",
  },
  {
    id: 4,
    emoji: "🗄️",
    title: "Database Architecture",
    description:
      "Designing relational and NoSQL schemas for production systems — PostgreSQL with complex joins and indexing, MongoDB aggregation pipelines, Redis caching, and ElasticSearch for search.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "Azure SQL"],
    accent: "#2caeba",
  },
  {
    id: 5,
    emoji: "🏗️",
    title: "Microservices & System Design",
    description:
      "Architecting and maintaining PaaS microservices, refactoring legacy monoliths into modular components, and applying SOLID principles to build systems that scale and stay maintainable.",
    tags: ["Microservices", "PaaS", "SOLID", "MVC", "Helm"],
    accent: "#28a745",
  },
  {
    id: 6,
    emoji: "🖥️",
    title: "Fullstack Development",
    description:
      "Bridging backend APIs with modern frontends using React and Angular. Experienced in NgRx/Redux state management, TypeScript, component-driven design, and end-to-end testing with Cypress.",
    tags: ["React", "Angular", "TypeScript", "NgRx", "Cypress"],
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
          From schema design to Kubernetes deployments and GenAI chatbots — here's where I bring value.
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
