import "./contact.css";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Git from "../../img/git.png";
import LinkedIn from "../../img/linkedIn.png";
import Resume from "../../img/resume.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const CONTACT_ITEMS = [
  {
    icon: Email,
    label: "Email",
    text: "nayaksandeep676@gmail.com",
    href: "mailto:nayaksandeep676@gmail.com",
  },
  {
    icon: Address,
    label: "Location",
    text: "Bhubaneswar, Odisha, India",
    href: null,
  },
  {
    icon: Git,
    label: "GitHub",
    text: "github.com/sandeep8093",
    href: "https://github.com/sandeep8093",
  },
  {
    icon: LinkedIn,
    label: "LinkedIn",
    text: "linkedin.com/in/sandeep-kumar-nayak",
    href: "https://www.linkedin.com/in/sandeep-kumar-nayak-7440541a7/",
  },
  {
    icon: Resume,
    label: "Resume",
    text: "Download my CV",
    href: "https://drive.google.com/file/d/1Ei_hHUxu2gc9f-6yxcg2SHWPewq7Yx_Q/view?usp=sharing",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_jyp6fij",
        "template_u7qfisj",
        formRef.current,
        "user_Qdi7ZkNt89BSKlfoh20Tc"
      )
      .then(
        () => { setDone(true); setSending(false); },
        (error) => { console.error(error.text); setSending(false); }
      );
    e.target.reset();
  };

  return (
    <div className={`c${darkMode ? " c-dark" : ""}`}>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <p className="c-section-label">GET IN TOUCH</p>
          <h1 className="c-title">Let's Work Together</h1>
          <p className="c-tagline">
            Open to Backend, Fullstack, and SDE opportunities. Feel free to reach out!
          </p>
          <div className="c-info">
            {CONTACT_ITEMS.map(({ icon, label, text, href }) => (
              <div key={label} className="c-info-item">
                <img src={icon} alt={label} className="c-icon" />
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer">{text}</a>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="c-form">
            <div className="c-form-row">
              <input
                style={{ backgroundColor: darkMode ? "#2a2a2a" : "#fff", color: darkMode ? "#eee" : "#222" }}
                type="text"
                placeholder="Your Name"
                name="user_name"
                required
              />
              <input
                style={{ backgroundColor: darkMode ? "#2a2a2a" : "#fff", color: darkMode ? "#eee" : "#222" }}
                type="email"
                placeholder="Your Email"
                name="user_email"
                required
              />
            </div>
            <input
              style={{ backgroundColor: darkMode ? "#2a2a2a" : "#fff", color: darkMode ? "#eee" : "#222" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="c-full-input"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode ? "#2a2a2a" : "#fff", color: darkMode ? "#eee" : "#222" }}
              rows="6"
              placeholder="Your message..."
              name="message"
              required
            />
            <button type="submit" disabled={sending} className="c-submit-btn">
              {sending ? "Sending…" : "Send Message"}
            </button>
            {done && (
              <p className="c-success">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
