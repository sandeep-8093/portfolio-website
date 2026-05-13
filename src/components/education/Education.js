import "./education.css";

const EDUCATION = [
  {
    id: 1,
    degree: "B.Tech — Electronics & Telecommunication Engineering",
    school: "IIIT Bhubaneswar",
    link: "https://www.iiit-bh.ac.in/",
    period: "July 2019 – July 2023",
    grade: "CGPA: 7.73",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "12th — Science (PCM)",
    school: "LR DAV Public School, Gandarpur",
    link: "http://lrdavctc.org/",
    period: "March 2017 – March 2018",
    grade: "Percentage: 87.2%",
    icon: "📘",
  },
  {
    id: 3,
    degree: "CBSE 10th",
    school: "LR DAV Public School, Gandarpur",
    link: "http://lrdavctc.org/",
    period: "March 2015 – March 2016",
    grade: "CGPA: 10",
    icon: "📗",
  },
];

const Education = () => {
  return (
    <section className="edu-section">
      <div className="edu-header">
        <p className="edu-label">BACKGROUND</p>
        <h2 className="edu-title">Education</h2>
        <div className="edu-underline"></div>
      </div>

      <div className="edu-timeline">
        {EDUCATION.map((item, idx) => (
          <div key={item.id} className="edu-item">
            <div className="edu-icon-col">
              <div className="edu-icon">{item.icon}</div>
              {idx < EDUCATION.length - 1 && <div className="edu-line"></div>}
            </div>
            <div className="edu-card">
              <div className="edu-card-inner">
                <div className="edu-grade">{item.grade}</div>
                <h3 className="edu-degree">{item.degree}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="edu-school"
                >
                  {item.school} ↗
                </a>
                <p className="edu-period">{item.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
