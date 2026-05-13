import "./accomplishments.css";
import { accomplishments } from "../../data";

const Accomplishments = () => {
  return (
    <section className="acc-section">
      <div className="acc-header">
        <p className="acc-label">HIGHLIGHTS</p>
        <h2 className="acc-title">Accomplishments</h2>
        <div className="acc-underline"></div>
        <p className="acc-subtitle">
          Key milestones, certifications, and contributions across my career.
        </p>
      </div>

      <div className="acc-grid">
        {accomplishments.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="acc-card"
          >
            <div className="acc-card-icon">{item.icon}</div>
            <div className="acc-card-body">
              <span className="acc-card-date">{item.date}</span>
              <h3 className="acc-card-title">{item.title}</h3>
              <p className="acc-card-org">{item.org}</p>
              <p className="acc-card-detail">{item.detail}</p>
            </div>
            <span className="acc-card-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Accomplishments;
