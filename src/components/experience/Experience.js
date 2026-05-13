import { useState } from "react";
import "./experience.css";
import { experience } from "../../data";

const Experience = () => {
  const [activeId, setActiveId] = useState(experience[0].id);
  const active = experience.find((e) => e.id === activeId);

  return (
    <section className="exp-section">
      <div className="exp-header">
        <p className="exp-label">MY JOURNEY</p>
        <h2 className="exp-title">Work Experience</h2>
        <div className="exp-underline"></div>
      </div>

      <div className="exp-container">
        {/* Sidebar tabs */}
        <div className="exp-tabs" role="tablist">
          {experience.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={activeId === item.id}
              className={`exp-tab${activeId === item.id ? " active" : ""}`}
              onClick={() => setActiveId(item.id)}
            >
              <span className="exp-tab-company">{item.company}</span>
              <span className="exp-tab-dates">{item.dates}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="exp-detail" key={activeId}>
          <div className="exp-detail-header">
            <h3 className="exp-job-title">{active.title}</h3>
            <a
              href={active.website}
              target="_blank"
              rel="noreferrer"
              className="exp-company-link"
            >
              @ {active.company} ↗
            </a>
            {active.location && (
              <p className="exp-location">📍 {active.location}</p>
            )}
            <p className="exp-dates">{active.dates}</p>
          </div>
          <ul className="exp-duties">
            {active.duties.map((duty, i) => (
              <li key={i}>
                <span className="exp-bullet">▹</span>
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
