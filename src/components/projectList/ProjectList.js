import React, { useState } from "react";
import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";
import {
  FaCode, FaDatabase, FaTools, FaLayerGroup,
} from "react-icons/fa";

const FILTERS = ["all", "fullstack", "backend", "frontend"];

const skillCategories = [
  {
    icon: <FaCode />,
    label: "Languages",
    items: ["JavaScript", "Python", "C++", "SQL", "TypeScript"],
  },
  {
    icon: <FaLayerGroup />,
    label: "Frameworks",
    items: ["Node.js", "Express.js", "NestJS", "Flask", "React.js", "Angular"],
  },
  {
    icon: <FaDatabase />,
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "AWS Redshift", "Azure SQL", "ElasticSearch"],
  },
  {
    icon: <FaTools />,
    label: "Tools & Cloud",
    items: ["AWS (S3, EC2, Lambda)", "Azure", "Docker", "Git/GitHub", "Postman", "Jira", "Netlify"],
  },
];

const ProjectList = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="pl">
      {/* Header */}
      <div className="pl-header">
        <p className="pl-label">MY WORK</p>
        <h1 className="pl-title">Projects</h1>
        <div className="pl-underline"></div>
        <p className="pl-desc">
          A selection of projects spanning fullstack web apps, backend APIs, and cloud integrations.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="pl-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`pl-filter-btn${activeFilter === f ? " active" : ""}`}
            onClick={() => { setActiveFilter(f); setVisibleCount(6); }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="pl-list">
        {visible.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            github={item.github}
            title={item.title}
            description={item.description}
            tech={item.tech}
            type={item.type}
          />
        ))}
      </div>

      {visibleCount < filtered.length && (
        <button className="pl-more-btn" onClick={() => setVisibleCount((n) => n + 3)}>
          Show More
        </button>
      )}

      {/* Skills */}
      <div className="skills-section">
        <p className="pl-label">WHAT I USE</p>
        <h2 className="skills-heading">Technical Skills</h2>
        <div className="pl-underline" style={{ marginBottom: "36px" }}></div>

        <div className="skills-grid">
          {skillCategories.map(({ icon, label, items }) => (
            <div key={label} className="skills-card">
              <div className="skills-card-header">
                <span className="skills-icon">{icon}</span>
                <strong className="skills-card-label">{label}</strong>
              </div>
              <div className="skills-tags">
                {items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
